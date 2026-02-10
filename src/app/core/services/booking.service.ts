import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, of } from 'rxjs';
import { AuthService } from './auth.service';

// Booking Status Enum
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Payment Status Enum
export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED'
}

// Booking Interface
export interface Booking {
  id: string;
  customerId: string;
  expertId: string;
  serviceId: string;
  serviceName: string;
  addressId: string;
  date: string;
  timeSlot: string;
  duration: number; // in hours
  frequency: 'once' | 'weekly' | 'monthly';
  status: BookingStatus;
  baseAmount: number;
  gstAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  couponCode?: string;
  notes?: string;
  otp?: string; // OTP for expert verification
  createdAt: string;
  updatedAt?: string;
  // Populated fields
  expert?: any;
  customer?: any;
  address?: any;
  service?: any;
}

// Service Interface
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  basePrice: number;
  priceUnit: string;
  isPopular: boolean;
  isFeatured: boolean;
  discount?: number;
}

// Expert for listing
export interface ExpertListing {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  totalRatings: number;
  experience: number;
  hourlyRate: number;
  distance?: number;
  skills: string[];
  languages: string[];
  isVerified: boolean;
  isOnline: boolean;
}

// Address Interface
export interface Address {
  id: string;
  userId: string;
  label: string;
  houseType: string;
  locationType: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  contactName: string;
  contactNumber: string;
  alternateNumber?: string;
}

// Coupon Interface
export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  validFrom: string;
  validTo: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly API_URL = 'http://localhost:3000';
  
  // Signals for state
  private servicesSignal = signal<Service[]>([]);
  private expertsSignal = signal<ExpertListing[]>([]);
  
  readonly services = this.servicesSignal.asReadonly();
  readonly experts = this.expertsSignal.asReadonly();

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Get all services
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.API_URL}/services`).pipe(
      map(services => {
        this.servicesSignal.set(services);
        return services;
      })
    );
  }

  // Get popular services
  getPopularServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.API_URL}/services`, {
      params: { isPopular: 'true' }
    });
  }

  // Get featured services
  getFeaturedServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.API_URL}/services`, {
      params: { isFeatured: 'true' }
    });
  }

  // Get experts by service
  getExpertsByService(serviceId: string): Observable<ExpertListing[]> {
    return this.http.get<any[]>(`${this.API_URL}/users`, {
      params: { role: 'EXPERT' }
    }).pipe(
      map(experts => {
        // Filter experts who have this service skill
        const filtered = experts.filter(e => 
          e.skills && e.skills.some((s: string) => 
            s.toLowerCase().includes(serviceId.toLowerCase())
          )
        );
        return filtered.map(e => ({
          id: e.id,
          name: e.name,
          photo: e.photo,
          rating: e.rating || 4.5,
          totalRatings: e.totalRatings || 0,
          experience: e.experience || 0,
          hourlyRate: e.hourlyRate || 299,
          distance: Math.random() * 5 + 0.5, // Mock distance
          skills: e.skills || [],
          languages: e.languages || ['Hindi', 'English'],
          isVerified: e.isVerified || false,
          isOnline: e.isOnline || false
        }));
      })
    );
  }

  // Get all experts
  getAllExperts(): Observable<ExpertListing[]> {
    return this.http.get<any[]>(`${this.API_URL}/users`, {
      params: { role: 'EXPERT' }
    }).pipe(
      map(experts => experts.map(e => ({
        id: e.id,
        name: e.name,
        photo: e.photo,
        rating: e.rating || 4.5,
        totalRatings: e.totalRatings || 122,
        experience: e.experience || 5,
        hourlyRate: e.hourlyRate || 299,
        distance: Math.random() * 5 + 0.5,
        skills: e.skills || ['Cooking', 'Cleaning'],
        languages: e.languages || ['Hindi', 'English'],
        isVerified: e.isVerified ?? true,
        isOnline: e.isOnline || false
      })))
    );
  }

  // Get customer bookings
  getCustomerBookings(customerId: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
      params: { customerId }
    });
  }

  // Get upcoming bookings for customer (PENDING and CONFIRMED)
  getUpcomingBookings(customerId: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
      params: { customerId }
    }).pipe(
      map(bookings => {
        const today = new Date();
        // Filter for upcoming bookings (PENDING or CONFIRMED status, future date)
        return bookings
          .filter(b => {
            const bookingDate = new Date(b.date);
            const status = (b.status as string).toUpperCase();
            const isPendingOrConfirmed = status === 'PENDING' || status === 'CONFIRMED';
            return isPendingOrConfirmed && bookingDate >= today;
          })
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      })
    );
  }

  // Get customer addresses
  getCustomerAddresses(customerId: string): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.API_URL}/addresses`, {
      params: { userId: customerId }
    });
  }

  // Add new address
  addAddress(address: Omit<Address, 'id'>): Observable<Address> {
    const newAddress = {
      ...address,
      id: `addr-${Date.now()}`
    };
    return this.http.post<Address>(`${this.API_URL}/addresses`, newAddress);
  }

  // Get available coupons
  getAvailableCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.API_URL}/coupons`, {
      params: { isActive: 'true' }
    });
  }

  // Apply coupon
  applyCoupon(code: string, amount: number): Observable<{ discount: number; coupon: Coupon } | null> {
    return this.http.get<Coupon[]>(`${this.API_URL}/coupons`, {
      params: { code, isActive: 'true' }
    }).pipe(
      map(coupons => {
        if (coupons.length === 0) return null;
        
        const coupon = coupons[0];
        if (amount < coupon.minOrderValue) return null;
        
        let discount = 0;
        if (coupon.discountType === 'percentage') {
          discount = (amount * coupon.discountValue) / 100;
          if (coupon.maxDiscount) {
            discount = Math.min(discount, coupon.maxDiscount);
          }
        } else {
          discount = coupon.discountValue;
        }
        
        return { discount, coupon };
      })
    );
  }

  // Create booking
  createBooking(bookingData: Partial<Booking>): Observable<Booking> {
    // Generate 6-digit OTP for expert verification
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    const booking: Partial<Booking> = {
      ...bookingData,
      id: `book-${Date.now()}`,
      otp,
      status: BookingStatus.PENDING,
      paymentStatus: PaymentStatus.PENDING,
      createdAt: new Date().toISOString()
    };
    
    return this.http.post<Booking>(`${this.API_URL}/bookings`, booking);
  }

  // Update booking status
  updateBookingStatus(bookingId: string, status: BookingStatus): Observable<Booking> {
    return this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
      status,
      updatedAt: new Date().toISOString()
    });
  }

  // Update payment status
  updatePaymentStatus(bookingId: string, paymentStatus: PaymentStatus): Observable<Booking> {
    return this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
      paymentStatus,
      status: paymentStatus === PaymentStatus.PAID ? BookingStatus.CONFIRMED : undefined,
      updatedAt: new Date().toISOString()
    });
  }

  // Get booking by ID
  getBookingById(bookingId: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.API_URL}/bookings/${bookingId}`);
  }

  // Update booking
  updateBooking(bookingId: string, bookingData: Partial<Booking>): Observable<Booking> {
    return this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
      ...bookingData,
      updatedAt: new Date().toISOString()
    });
  }

  // Get booking with populated data
  getBookingWithDetails(bookingId: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.API_URL}/bookings/${bookingId}`).pipe(
      map(booking => {
        // In a real app, you'd join these from the backend
        return booking;
      })
    );
  }

  // Get expert by ID
  getExpertById(expertId: string): Observable<ExpertListing | null> {
    return this.http.get<any>(`${this.API_URL}/users/${expertId}`).pipe(
      map(e => e ? {
        id: e.id,
        name: e.name,
        photo: e.photo,
        rating: e.rating || 4.7,
        totalRatings: e.totalRatings || 122,
        experience: e.experience || 8,
        hourlyRate: e.hourlyRate || 299,
        distance: 2.3,
        skills: e.skills || [],
        languages: e.languages || ['Hindi', 'English'],
        isVerified: e.isVerified ?? true,
        isOnline: e.isOnline || false
      } : null)
    );
  }

  // Get FAQs
  getFaqs(): Observable<{ id: string; question: string; answer: string }[]> {
    return this.http.get<{ id: string; question: string; answer: string }[]>(`${this.API_URL}/faqs`);
  }
}
