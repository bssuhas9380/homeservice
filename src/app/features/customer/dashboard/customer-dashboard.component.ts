import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { BookingService } from '../../../core/services/booking.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { BookingActions, Booking } from '../../../core/store/booking/booking.actions';
import { selectUser } from '../../../core/store/auth/auth.selectors';
import { selectUpcomingBookings, selectBookingLoading } from '../../../core/store/booking/booking.selectors';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly bookingService = inject(BookingService);
  private readonly router = inject(Router);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  // Signals
  isUserMenuOpen = signal(false);
  upcomingBookings = signal<Booking[]>([]);
  isLoadingBookings = signal(true);
  faqs = signal<FAQ[]>([]);
  expandedFaq = signal<number | null>(null);

  // User info from NgRx store
  userName = computed(() => {
    return this.currentUserName();
  });
  private currentUserName = signal('User');

  // Hardcoded data for popular services
  popularServices = [
    { id: 'srv-001', name: 'Cleaning', image: 'assets/images/services/cleaning.png' },
    { id: 'srv-002', name: 'Cooking', image: 'assets/images/services/cooking.png' },
    { id: 'srv-003', name: 'Gardening', image: 'assets/images/services/gardening.png' },
    { id: 'srv-001', name: 'Cleaning', image: 'assets/images/services/cleaning.png' },
    { id: 'srv-002', name: 'Cooking', image: 'assets/images/services/cooking.png' }
  ];

  // Hardcoded data for featured services
  featuredServices = [
    {
      id: 'srv-001',
      name: 'Deep House Cleaning',
      image: 'assets/images/services/cleaning-featured.png',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: 'Extra 15% off if you book it for a month'
    },
    {
      id: 'srv-002',
      name: 'Cooking Service',
      image: 'assets/images/services/cooking-featured.png',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: 'Extra 15% off if you book it for a month'
    },
    {
      id: 'srv-003',
      name: 'Gardening',
      image: 'assets/images/services/gardening-featured.png',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: 'Extra 15% off if you book it for a month'
    }
  ];

  ngOnInit(): void {
    // Subscribe to user from store
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (user) {
        this.currentUserName.set(user.name || 'User');
        // Dispatch action to load bookings
        this.store.dispatch(BookingActions.loadBookings({ customerId: user.id }));
      }
    });

    // Subscribe to upcoming bookings from store
    this.store.select(selectUpcomingBookings).pipe(
      takeUntil(this.destroy$)
    ).subscribe(bookings => {
      this.upcomingBookings.set(bookings);
    });

    // Subscribe to loading state
    this.store.select(selectBookingLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => {
      this.isLoadingBookings.set(loading);
    });

    this.loadFaqs();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadFaqs(): void {
    this.bookingService.getFaqs().subscribe({
      next: (faqs) => {
        this.faqs.set(faqs);
      }
    });
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen.set(!this.isUserMenuOpen());
  }

  toggleFaq(index: number): void {
    if (this.expandedFaq() === index) {
      this.expandedFaq.set(null);
    } else {
      this.expandedFaq.set(index);
    }
  }

  formatBookingDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${day} ${month}, ${weekday}`;
  }

  formatTimeSlot(timeSlot: string): string {
    if (!timeSlot) return '';
    const [start] = timeSlot.split('-');
    const [hours, minutes] = start.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  }

  viewBookingDetails(booking: Booking): void {
    this.router.navigate(['/customer/bookings'], { 
      queryParams: { bookingId: booking.id, action: 'view' } 
    });
  }

  modifyBooking(booking: Booking): void {
    this.router.navigate(['/customer/book-service'], {
      queryParams: {
        mode: 'modify',
        bookingId: booking.id
      },
      state: { 
        booking: booking,
        expertId: booking.expertId
      }
    });
  }

  bookService(serviceId?: string): void {
    if (serviceId) {
      this.router.navigate(['/customer/book-service'], { queryParams: { service: serviceId } });
    } else {
      this.router.navigate(['/customer/book-service']);
    }
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
