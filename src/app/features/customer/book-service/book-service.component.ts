import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { BookingService, BookingStatus, PaymentStatus, Service, Booking } from '../../../core/services/booking.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { PaymentModalComponent } from '../../../shared/components/payment-modal/payment-modal.component';
import { PaymentSuccessModalComponent } from '../../../shared/components/payment-success-modal/payment-success-modal.component';

interface Expert {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  totalRatings: number;
  experience: number;
  skills: string[];
  languages: string[];
  hourlyRate: number;
  isVerified: boolean;
  distance?: number;
}

interface Address {
  id: string;
  label: string;
  houseType: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  contactName: string;
  contactNumber: string;
}

interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: string;
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
}

@Component({
  selector: 'app-book-service',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, NavbarComponent, PaymentModalComponent, PaymentSuccessModalComponent],
  templateUrl: './book-service.component.html',
  styleUrl: './book-service.component.scss'
})
export class BookServiceComponent implements OnInit {
  // Signals for state management
  currentStep = signal(1);
  isUserMenuOpen = signal(false);
  
  // Step 1: Service & Expert
  services = signal<Service[]>([]);
  selectedServiceId = signal<string | null>(null);
  experts = signal<Expert[]>([]);
  selectedExpert = signal<Expert | null>(null);
  isLoadingExperts = signal(false);

  // Step 2: Date & Time
  currentMonth = signal(new Date());
  selectedDate = signal<Date | null>(null);
  selectedTimeSlot = signal<string | null>(null);
  bookingFrequency = 'Once'; // Using regular property for ngModel binding

  timeSlots = [
    { label: '6:00 AM - 9:00 AM', value: '06:00-09:00' },
    { label: '9:00 AM - 12:00 PM', value: '09:00-12:00' },
    { label: '12:00 PM - 3:00 PM', value: '12:00-15:00' },
    { label: '3:00 PM - 6:00 PM', value: '15:00-18:00' },
    { label: '6:00 PM - 9:00 PM', value: '18:00-21:00' }
  ];

  // Step 3: Address
  addresses = signal<Address[]>([]);
  selectedAddressId = signal<string | null>(null);
  isAddingNewAddress = signal(false);
  newAddressForm: FormGroup;
  selectedHouseType = signal<string>('2 BHK');
  selectedLocationType = signal<string>('Home');

  houseTypes = ['1 BHK', '2 BHK', '3 BHK', '4 BHK'];
  locationTypes = ['Home', 'Office', 'Others'];

  // Step 4: Summary & Coupons
  coupons = signal<Coupon[]>([]);
  selectedCoupon = signal<Coupon | null>(null);
  couponCode = '';

  // Payment
  isPaymentModalOpen = signal(false);
  isPaymentSuccess = signal(false);
  isProcessingPayment = signal(false);
  selectedPaymentMethod = signal<'card' | 'upi' | 'netbanking'>('card');

  // Computed
  userName = computed(() => this.authService.currentUser()?.name || 'User');
  
  selectedService = computed(() => {
    const services = this.services();
    const id = this.selectedServiceId();
    return services.find(s => s.id === id);
  });

  selectedAddress = computed(() => {
    const addresses = this.addresses();
    const id = this.selectedAddressId();
    return addresses.find(a => a.id === id);
  });

  baseAmount = computed(() => {
    const expert = this.selectedExpert();
    return expert ? expert.hourlyRate * 2 : 500; // 2 hours default
  });

  gstAmount = computed(() => this.baseAmount() * 0.18);

  appliedDiscount = computed(() => {
    const coupon = this.selectedCoupon();
    if (!coupon) return 0;
    if (coupon.discountType === 'percentage') {
      const discount = this.baseAmount() * (coupon.discountValue / 100);
      return coupon.maxDiscount ? Math.min(discount, coupon.maxDiscount) : discount;
    }
    return coupon.discountValue;
  });

  totalAmount = computed(() => {
    return this.baseAmount() + this.gstAmount() - this.appliedDiscount();
  });

  constructor(
    private authService: AuthService,
    private bookingService: BookingService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.newAddressForm = this.fb.group({
      line1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      contactName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      alternateNumber: ['']
    });
  }

  ngOnInit(): void {
    this.loadServices();
    this.loadAddresses();
    this.loadCoupons();
  }

  loadServices(): void {
    this.bookingService.getServices().subscribe({
      next: (services) => {
        this.services.set(services);
        if (services.length > 0 && !this.selectedServiceId()) {
          this.selectService(services[0].id);
        }
      }
    });
  }

  loadAddresses(): void {
    const user = this.authService.currentUser();
    if (user) {
      this.bookingService.getCustomerAddresses(user.id).subscribe({
        next: (addresses) => this.addresses.set(addresses)
      });
    }
  }

  loadCoupons(): void {
    this.bookingService.getAvailableCoupons().subscribe({
      next: (coupons) => this.coupons.set(coupons)
    });
  }

  selectService(serviceId: string): void {
    this.selectedServiceId.set(serviceId);
    this.selectedExpert.set(null);
    this.loadExperts(serviceId);
  }

  loadExperts(serviceId: string): void {
    this.isLoadingExperts.set(true);
    const service = this.services().find(s => s.id === serviceId);
    if (service) {
      this.bookingService.getExpertsByService(service.name).subscribe({
        next: (experts) => {
          const mappedExperts: Expert[] = experts.map((e: any) => ({
            ...e,
            distance: Math.random() * 5 + 1
          }));
          this.experts.set(mappedExperts);
          this.isLoadingExperts.set(false);
        },
        error: () => this.isLoadingExperts.set(false)
      });
    }
  }

  selectExpert(expert: Expert): void {
    this.selectedExpert.set(expert);
  }

  // Calendar methods
  getDaysInMonth(date: Date): (number | null)[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  }

  getNextMonth(): Date {
    const current = this.currentMonth();
    return new Date(current.getFullYear(), current.getMonth() + 1, 1);
  }

  prevMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  }

  nextMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  }

  selectDate(day: number, monthOffset: number): void {
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    const date = new Date(baseMonth.getFullYear(), baseMonth.getMonth(), day);
    this.selectedDate.set(date);
  }

  isDateSelected(day: number, monthOffset: number): boolean {
    const selected = this.selectedDate();
    if (!selected) return false;
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    return selected.getDate() === day && 
           selected.getMonth() === baseMonth.getMonth() && 
           selected.getFullYear() === baseMonth.getFullYear();
  }

  isToday(day: number, monthOffset: number): boolean {
    const today = new Date();
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    return today.getDate() === day && 
           today.getMonth() === baseMonth.getMonth() && 
           today.getFullYear() === baseMonth.getFullYear();
  }

  isPastDate(day: number, monthOffset: number): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    const date = new Date(baseMonth.getFullYear(), baseMonth.getMonth(), day);
    return date < today;
  }

  selectTimeSlot(slot: string): void {
    this.selectedTimeSlot.set(slot);
  }

  // Address methods
  selectAddress(addressId: string): void {
    this.selectedAddressId.set(addressId);
  }

  showAddAddressForm(): void {
    this.isAddingNewAddress.set(true);
  }

  cancelAddAddress(): void {
    this.isAddingNewAddress.set(false);
    this.newAddressForm.reset();
  }

  saveNewAddress(): void {
    if (this.newAddressForm.valid) {
      const user = this.authService.currentUser();
      if (user) {
        const newAddress = {
          ...this.newAddressForm.value,
          userId: user.id,
          label: this.selectedLocationType(),
          houseType: this.selectedHouseType(),
          locationType: this.selectedLocationType()
        };
        
        this.bookingService.addAddress(newAddress).subscribe({
          next: (address) => {
            this.addresses.set([...this.addresses(), address]);
            this.selectedAddressId.set(address.id);
            this.isAddingNewAddress.set(false);
            this.newAddressForm.reset();
          }
        });
      }
    }
  }

  // Coupon methods
  isCouponEligible(coupon: Coupon): boolean {
    return this.baseAmount() >= coupon.minOrderValue;
  }

  selectCouponFromList(coupon: Coupon): void {
    if (this.isCouponEligible(coupon)) {
      this.selectedCoupon.set(coupon);
      this.couponCode = coupon.code;
    }
  }

  applyCoupon(): void {
    if (!this.couponCode) return;
    const coupon = this.coupons().find(c => c.code.toLowerCase() === this.couponCode.toLowerCase());
    if (coupon && this.isCouponEligible(coupon)) {
      this.selectedCoupon.set(coupon);
    }
  }

  // Navigation
  isStepComplete(step: number): boolean {
    switch (step) {
      case 1: return !!this.selectedServiceId() && !!this.selectedExpert();
      case 2: return !!this.selectedDate() && !!this.selectedTimeSlot();
      case 3: return !!this.selectedAddressId();
      case 4: return true;
      default: return false;
    }
  }

  nextStep(): void {
    if (this.currentStep() < 4 && this.isStepComplete(this.currentStep())) {
      this.currentStep.set(this.currentStep() + 1);
    }
  }

  goToStep(step: number): void {
    if (step <= this.currentStep() || this.isStepComplete(step - 1)) {
      this.currentStep.set(step);
    }
  }

  // Payment
  openPaymentModal(): void {
    this.isPaymentModalOpen.set(true);
    this.isPaymentSuccess.set(false);
  }

  closePaymentModal(): void {
    this.isPaymentModalOpen.set(false);
    if (this.isPaymentSuccess()) {
      this.router.navigate(['/customer/dashboard']);
    }
  }

  processPayment(): void {
    this.isProcessingPayment.set(true);
    
    setTimeout(() => {
      const user = this.authService.currentUser();
      if (!user) return;

      const bookingData: Partial<Booking> = {
        customerId: user.id,
        expertId: this.selectedExpert()?.id,
        serviceId: this.selectedServiceId() || undefined,
        serviceName: this.selectedService()?.name,
        addressId: this.selectedAddressId() || undefined,
        date: this.selectedDate()?.toISOString(),
        timeSlot: this.selectedTimeSlot() || undefined,
        duration: 2,
        frequency: this.bookingFrequency.toLowerCase() as 'once' | 'weekly' | 'monthly',
        baseAmount: this.baseAmount(),
        gstAmount: this.gstAmount(),
        discountAmount: this.appliedDiscount(),
        totalAmount: this.totalAmount(),
        couponCode: this.selectedCoupon()?.code,
        status: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.PAID
      };

      this.bookingService.createBooking(bookingData).subscribe({
        next: () => {
          this.isProcessingPayment.set(false);
          this.isPaymentSuccess.set(true);
        },
        error: () => {
          this.isProcessingPayment.set(false);
          alert('Payment failed. Please try again.');
        }
      });
    }, 2000);
  }

  // Helpers
  formatDate(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  getTimeSlotLabel(value: string | null): string {
    const slot = this.timeSlots.find(s => s.value === value);
    return slot ? slot.label : '';
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen.set(!this.isUserMenuOpen());
  }

  logout(): void {
    this.authService.logout();
  }
}
