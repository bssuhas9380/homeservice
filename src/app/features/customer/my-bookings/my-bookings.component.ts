import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { BookingService } from '../../../core/services/booking.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { PhoneFormatPipe } from '../../../shared/pipes/phone-format.pipe';
import { NotificationService } from '../../../core/services/notification.service';
import { BookingActions, Booking, BookingStatus, PaymentStatus } from '../../../core/store/booking/booking.actions';
import { selectAllBookings, selectBookingLoading } from '../../../core/store/booking/booking.selectors';
import { selectUser } from '../../../core/store/auth/auth.selectors';
import { catchError, map, switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

type TabType = 'all' | 'upcoming' | 'completed' | 'cancelled' | 'rejected';

interface BookingWithExpert {
  id: string;
  serviceName?: string;
  serviceId?: string;
  status: string;
  totalAmount: number;
  paymentStatus: string;
  duration?: number;
  address?: string;
  date?: string;
  timeSlot?: string;
  scheduledDate?: string;
  scheduledTime?: string;
  expert?: {
    id: string;
    name: string;
    phone: string;
    avatar?: string;
  };
  serviceIcon?: string;
  userRating?: number;
  cancellationReason?: string;
  rejectionReason?: string;
  bookedDate?: string;
  canModify?: boolean;
  customerId?: string;
  expertId?: string;
  addressId?: string;
  frequency?: string;
  baseAmount?: number;
  gstAmount?: number;
  discountAmount?: number;
  couponCode?: string;
  otp?: string;
  originalBooking?: any;
}

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavbarComponent, DateFormatPipe, PhoneFormatPipe],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly bookingService = inject(BookingService);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();
  
  activeTab = signal<TabType>('all');
  searchQuery = signal('');
  isLoading = signal(true);
  allBookings = signal<BookingWithExpert[]>([]);
  isViewDetailsOpen = signal(false);
  selectedBooking = signal<BookingWithExpert | null>(null);

  tabCounts = computed(() => {
    const bookings = this.allBookings();
    return {
      all: bookings.length,
      upcoming: bookings.filter(b => b.status === 'pending' || b.status === 'confirmed').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
      rejected: bookings.filter(b => b.status === 'rejected').length
    };
  });

  filteredBookings = computed(() => {
    const bookings = this.allBookings();
    const tab = this.activeTab();
    const query = this.searchQuery().toLowerCase();
    
    let filtered = bookings;
    
    switch (tab) {
      case 'upcoming':
        filtered = bookings.filter(b => b.status === 'pending' || b.status === 'confirmed');
        break;
      case 'completed':
        filtered = bookings.filter(b => b.status === 'completed');
        break;
      case 'cancelled':
        filtered = bookings.filter(b => b.status === 'cancelled');
        break;
      case 'rejected':
        filtered = bookings.filter(b => b.status === 'rejected');
        break;
    }
    
    if (query) {
      filtered = filtered.filter(b => 
        b.serviceName?.toLowerCase().includes(query) ||
        b.id.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  });

  ngOnInit(): void {
    this.loadBookings();
    
    // Handle query params for viewing specific booking from dashboard
    this.route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      if (params['bookingId'] && params['action'] === 'view') {
        // Wait for bookings to load, then open the details modal
        setTimeout(() => {
          const booking = this.allBookings().find(b => b.id === params['bookingId']);
          if (booking) {
            this.viewDetails(booking);
          }
        }, 500);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadBookings(): void {
    this.isLoading.set(true);
    
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (!user) {
        this.isLoading.set(false);
        return;
      }
      this.store.dispatch(BookingActions.loadBookings({ customerId: user.id }));
    });

    this.store.select(selectAllBookings).pipe(
      takeUntil(this.destroy$),
      switchMap(bookings => {
        if (bookings.length === 0) {
          return of([]);
        }
        
        const bookingWithExperts$ = bookings.map(booking => {
          const statusStr = (booking.status as string)?.toUpperCase() || 'PENDING';
          // Only allow modify if status is PENDING (expert hasn't accepted yet)
          const canModifyBooking = statusStr === 'PENDING';
          
          if (booking.expertId) {
            return this.bookingService.getExpertById(booking.expertId).pipe(
              map(expert => ({
                ...booking,
                id: booking.id,
                serviceName: booking.serviceName,
                serviceId: booking.serviceId,
                status: statusStr.toLowerCase(),
                scheduledDate: booking.date,
                scheduledTime: booking.timeSlot,
                duration: booking.duration || 2,
                address: 'Address details',
                totalAmount: booking.totalAmount,
                paymentStatus: ((booking.paymentStatus as string) || 'PENDING').toLowerCase(),
                expert: expert ? {
                  id: expert.id,
                  name: expert.name,
                  phone: '+91 9876543210',
                  avatar: expert.photo
                } : undefined,
                otp: booking.otp || (booking as any).otp,
                bookedDate: booking.createdAt,
                canModify: canModifyBooking,
                originalBooking: booking
              } as BookingWithExpert)),
              catchError(() => of({
                ...booking,
                id: booking.id,
                serviceName: booking.serviceName,
                serviceId: booking.serviceId,
                status: statusStr.toLowerCase(),
                scheduledDate: booking.date,
                scheduledTime: booking.timeSlot,
                duration: booking.duration || 2,
                address: 'Address details',
                totalAmount: booking.totalAmount,
                paymentStatus: ((booking.paymentStatus as string) || 'PENDING').toLowerCase(),
                otp: booking.otp || (booking as any).otp,
                bookedDate: booking.createdAt,
                canModify: canModifyBooking,
                originalBooking: booking
              } as BookingWithExpert))
            );
          }
          return of({
            ...booking,
            id: booking.id,
            serviceName: booking.serviceName,
            serviceId: booking.serviceId,
            status: statusStr.toLowerCase(),
            scheduledDate: booking.date,
            scheduledTime: booking.timeSlot,
            duration: booking.duration || 2,
            address: 'Address details',
            totalAmount: booking.totalAmount,
            paymentStatus: ((booking.paymentStatus as string) || 'PENDING').toLowerCase(),
            otp: booking.otp || (booking as any).otp,
            bookedDate: booking.createdAt,
            canModify: canModifyBooking,
            originalBooking: booking
          } as BookingWithExpert);
        });
        
        return forkJoin(bookingWithExperts$);
      })
    ).subscribe({
      next: (bookings) => {
        this.allBookings.set(bookings);
        this.isLoading.set(false);
      },
      error: () => {
        this.notification.error('Error', 'Failed to load bookings. Please try again.');
        this.allBookings.set([]);
        this.isLoading.set(false);
      }
    });
  }

  setActiveTab(tab: TabType): void {
    this.activeTab.set(tab);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'pending':
      case 'confirmed':
        return 'status--upcoming';
      case 'completed':
        return 'status--completed';
      case 'cancelled':
        return 'status--cancelled';
      case 'rejected':
        return 'status--rejected';
      default:
        return '';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'pending':
        return 'Upcoming';
      case 'confirmed':
        return 'Upcoming';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      case 'rejected':
        return 'Rejected';
      default:
        return status;
    }
  }

  getPaymentLabel(booking: BookingWithExpert): string {
    const status = booking.paymentStatus?.toLowerCase();
    if (status === 'paid' || status === 'completed') {
      return 'PAID';
    } else if (status === 'refunded') {
      return 'REFUNDED';
    } else {
      return '₹' + booking.totalAmount + ' to pay';
    }
  }

  getPaymentClass(booking: BookingWithExpert): string {
    const status = booking.paymentStatus?.toLowerCase();
    if (status === 'paid' || status === 'completed') {
      return 'payment--paid';
    } else if (status === 'refunded') {
      return 'payment--refunded';
    } else {
      return 'payment--pending';
    }
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return day + ' ' + months[date.getMonth()] + ', ' + days[date.getDay()];
  }

  formatTime(timeStr: string): string {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return hour12 + ':' + minutes + ' ' + ampm;
  }

  viewDetails(booking: BookingWithExpert): void {
    this.selectedBooking.set(booking);
    this.isViewDetailsOpen.set(true);
  }

  closeViewDetails(): void {
    this.isViewDetailsOpen.set(false);
    this.selectedBooking.set(null);
  }

  modifyBooking(booking: BookingWithExpert): void {
    const originalData = booking.originalBooking || booking;
    this.router.navigate(['/customer/book-service'], {
      queryParams: {
        mode: 'modify',
        bookingId: booking.id
      },
      state: { 
        booking: originalData,
        expertId: booking.expert?.id || originalData.expertId
      }
    });
  }

  bookAgain(booking: BookingWithExpert): void {
    this.router.navigate(['/customer/book-service'], {
      queryParams: {
        serviceId: booking.serviceId
      }
    });
  }

  rebookService(booking: BookingWithExpert): void {
    this.bookAgain(booking);
  }

  callExpert(phone: string): void {
    window.location.href = 'tel:' + phone.replace(/\s/g, '');
  }

  rateBooking(booking: BookingWithExpert, rating: number): void {
    const bookings = this.allBookings();
    const index = bookings.findIndex(b => b.id === booking.id);
    if (index !== -1) {
      bookings[index].userRating = rating;
      this.allBookings.set([...bookings]);
    }
  }
}
