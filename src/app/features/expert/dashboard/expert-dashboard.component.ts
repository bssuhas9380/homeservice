import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { TakeActionModalComponent } from '../take-action-modal/take-action-modal.component';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { BookingActions, Booking, BookingStatus } from '../../../core/store/booking/booking.actions';
import { selectUser } from '../../../core/store/auth/auth.selectors';
import { 
  selectExpertBookings, 
  selectExpertBookingsLoading, 
  selectPendingBookings,
  selectExpertBookingCounts 
} from '../../../core/store/booking/booking.selectors';

interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  hasBooking: boolean;
}

@Component({
  selector: 'app-expert-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, TakeActionModalComponent],
  templateUrl: './expert-dashboard.component.html',
  styleUrl: './expert-dashboard.component.scss'
})
export class ExpertDashboardComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly destroy$ = new Subject<void>();
  private readonly API_URL = 'http://localhost:3000';

  // User info
  currentUser = signal<any>(null);
  userName = computed(() => this.currentUser()?.name || 'Expert');
  userLocation = computed(() => {
    const user = this.currentUser();
    return user?.location ? `${user.location.area}, ${user.location.city}` : '';
  });
  userSkills = computed(() => this.currentUser()?.skills || []);
  userRating = computed(() => this.currentUser()?.rating || 0);
  isOnline = signal(true);

  // Bookings
  allBookings = signal<Booking[]>([]);
  pendingBookings = signal<Booking[]>([]);
  isLoadingBookings = signal(true);
  bookingCounts = signal<any>({
    todaysJobs: 0, thisWeek: 0, totalEarnings: 0, pending: 0,
    confirmed: 0, completed: 0, rejected: 0, cancelled: 0
  });

  // Appointments filter
  appointmentFilter = signal<string>('All');
  searchQuery = signal('');
  filteredAppointments = computed(() => {
    let bookings = this.allBookings();
    const filterVal = this.appointmentFilter();
    const query = this.searchQuery().toLowerCase();

    if (filterVal !== 'All') {
      bookings = bookings.filter(b => b.status === filterVal);
    }
    if (query) {
      bookings = bookings.filter(b =>
        (b.serviceName || '').toLowerCase().includes(query) ||
        (b.status || '').toLowerCase().includes(query)
      );
    }
    return bookings;
  });

  // Calendar
  currentMonth = signal(new Date());
  calendarDays = computed(() => this.generateCalendarDays());
  currentMonthName = computed(() => {
    return this.currentMonth().toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  });
  currentYear = computed(() => this.currentMonth().getFullYear());
  todayDate = computed(() => {
    const today = new Date();
    return today.getDate();
  });
  todayDayName = computed(() => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
  });
  todayBookings = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.allBookings().filter(b => {
      const bDate = new Date(b.date);
      bDate.setHours(0, 0, 0, 0);
      return bDate.getTime() === today.getTime();
    });
  });

  // Take Action Modal
  showTakeActionModal = signal(false);
  selectedBooking = signal<Booking | null>(null);
  selectedBookingCustomer = signal<any>(null);
  selectedBookingAddress = signal<any>(null);

  // Service icons map
  serviceIcons: Record<string, string> = {
    'Cleaning': 'assets/images/services/cleaning-icon.png',
    'Cooking': 'assets/images/services/cooking-icon.png',
    'Gardening': 'assets/images/services/gardening-icon.png',
    'Plumbing': 'assets/images/services/plumbing-icon.png',
    'Electrician': 'assets/images/services/electrician-icon.png',
    'Baby Sitting': 'assets/images/services/babysitting-icon.png',
    'Carpentry': 'assets/images/services/carpentry-icon.png',
    'Painting': 'assets/images/services/painting-icon.png'
  };

  // Skill icons map
  skillIcons: Record<string, string> = {
    'Cleaning': 'assets/images/services/cleaning-icon.png',
    'Cooking': 'assets/images/services/cooking-icon.png',
    'Gardening': 'assets/images/services/gardening-icon.png',
    'Plumbing': 'assets/images/services/plumbing-icon.png',
    'Electrician': 'assets/images/services/electrician-icon.png',
    'Baby Sitting': 'assets/images/services/babysitting-icon.png',
    'Carpentry': 'assets/images/services/carpentry-icon.png',
    'Painting': 'assets/images/services/painting-icon.png'
  };

  ngOnInit(): void {
    // Subscribe to user from store
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (user) {
        this.currentUser.set(user);
        this.isOnline.set((user as any).isOnline ?? true);
        // Load expert's bookings
        this.store.dispatch(BookingActions.loadExpertBookings({ expertId: user.id }));
      }
    });

    // Subscribe to expert bookings (separate from customer bookings)
    this.store.select(selectExpertBookings).pipe(
      takeUntil(this.destroy$)
    ).subscribe(bookings => {
      this.allBookings.set(bookings);
    });

    // Subscribe to pending bookings
    this.store.select(selectPendingBookings).pipe(
      takeUntil(this.destroy$)
    ).subscribe(bookings => {
      this.pendingBookings.set(bookings);
    });

    // Subscribe to booking counts
    this.store.select(selectExpertBookingCounts).pipe(
      takeUntil(this.destroy$)
    ).subscribe(counts => {
      this.bookingCounts.set(counts);
    });

    // Subscribe to expert loading state
    this.store.select(selectExpertBookingsLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => {
      this.isLoadingBookings.set(loading);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Toggle online status
  toggleOnlineStatus(): void {
    const newStatus = !this.isOnline();
    this.isOnline.set(newStatus);
    const user = this.currentUser();
    if (user) {
      this.http.patch(`${this.API_URL}/users/${user.id}`, { isOnline: newStatus })
        .subscribe();
    }
  }

  // Format booking date
  formatBookingDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${day} ${month}, ${weekday}`;
  }

  // Format time slot
  formatTimeSlot(timeSlot: string): string {
    if (!timeSlot) return '';
    const [start] = timeSlot.split('-');
    const [hours, minutes] = start.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  }

  // Get service icon
  getServiceIcon(serviceName: string): string {
    return this.serviceIcons[serviceName] || 'assets/images/services/cleaning-icon.png';
  }

  // Get skill icon
  getSkillIcon(skill: string): string {
    return this.skillIcons[skill] || 'assets/images/services/cleaning-icon.png';
  }

  // Get status label
  getStatusLabel(status: string): string {
    switch (status) {
      case 'PENDING': return 'Pending';
      case 'CONFIRMED': return 'Booking Accepted';
      case 'IN_PROGRESS': return 'In Progress';
      case 'COMPLETED': return 'Completed';
      case 'CANCELLED': return 'Cancelled by Customer';
      case 'REJECTED': return 'Booking Rejected';
      default: return status;
    }
  }

  // Get status CSS class
  getStatusClass(status: string): string {
    switch (status) {
      case 'PENDING': return 'status-pending';
      case 'CONFIRMED': return 'status-accepted';
      case 'IN_PROGRESS': return 'status-progress';
      case 'COMPLETED': return 'status-completed';
      case 'CANCELLED': return 'status-cancelled';
      case 'REJECTED': return 'status-rejected';
      default: return '';
    }
  }

  // Format earnings
  formatEarnings(amount: number): string {
    if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount}`;
  }

  // Set filter
  setFilter(filter: string): void {
    this.appointmentFilter.set(filter);
  }

  // Search
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }

  // Open Take Action Modal
  openTakeAction(booking: Booking): void {
    this.selectedBooking.set(booking);
    
    // Fetch customer and address details
    if (booking.customerId) {
      this.http.get(`${this.API_URL}/users/${booking.customerId}`)
        .subscribe((customer: any) => {
          this.selectedBookingCustomer.set(customer);
        });
    }
    if (booking.addressId) {
      this.http.get(`${this.API_URL}/addresses/${booking.addressId}`)
        .subscribe((address: any) => {
          this.selectedBookingAddress.set(address);
        });
    }

    this.showTakeActionModal.set(true);
  }

  // Close modal
  closeTakeActionModal(): void {
    this.showTakeActionModal.set(false);
    this.selectedBooking.set(null);
    this.selectedBookingCustomer.set(null);
    this.selectedBookingAddress.set(null);
  }

  // Accept booking
  onAcceptBooking(bookingId: string): void {
    this.store.dispatch(BookingActions.acceptBooking({ bookingId }));
    this.closeTakeActionModal();
  }

  // Reject booking
  onRejectBooking(bookingId: string): void {
    this.store.dispatch(BookingActions.rejectBooking({ bookingId }));
    this.closeTakeActionModal();
  }

  // View booking details
  viewDetails(booking: Booking): void {
    this.openTakeAction(booking);
  }

  // Calendar methods
  generateCalendarDays(): CalendarDay[] {
    const current = this.currentMonth();
    const year = current.getFullYear();
    const month = current.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    
    const bookingDates = new Set(
      this.allBookings().map(b => {
        const d = new Date(b.date);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      })
    );

    const days: CalendarDay[] = [];

    // Previous month padding
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isToday: false,
        hasBooking: false
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateKey = `${year}-${month}-${d}`;
      days.push({
        day: d,
        isCurrentMonth: true,
        isToday: today.getFullYear() === year && today.getMonth() === month && today.getDate() === d,
        hasBooking: bookingDates.has(dateKey)
      });
    }

    // Next month padding
    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      days.push({
        day: d,
        isCurrentMonth: false,
        isToday: false,
        hasBooking: false
      });
    }

    return days;
  }

  prevMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  }

  nextMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
