import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { BookingService, Booking } from '../../../core/services/booking.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

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
export class CustomerDashboardComponent implements OnInit {
  // Signals
  isUserMenuOpen = signal(false);
  upcomingBookings = signal<Booking[]>([]);
  isLoadingBookings = signal(true);
  faqs = signal<FAQ[]>([]);
  expandedFaq = signal<number | null>(null);

  // User info
  userName = computed(() => {
    const user = this.authService.currentUser();
    return user?.name || 'User';
  });

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

  constructor(
    private authService: AuthService,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUpcomingBookings();
    this.loadFaqs();
  }

  loadUpcomingBookings(): void {
    this.isLoadingBookings.set(true);
    const user = this.authService.currentUser();
    if (user) {
      this.bookingService.getUpcomingBookings(user.id).subscribe({
        next: (bookings) => {
          this.upcomingBookings.set(bookings);
          this.isLoadingBookings.set(false);
        },
        error: () => {
          this.isLoadingBookings.set(false);
        }
      });
    } else {
      this.isLoadingBookings.set(false);
    }
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

  bookService(serviceId?: string): void {
    if (serviceId) {
      this.router.navigate(['/customer/book-service'], { queryParams: { service: serviceId } });
    } else {
      this.router.navigate(['/customer/book-service']);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
