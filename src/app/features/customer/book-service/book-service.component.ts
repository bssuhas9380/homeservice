import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { BookingService, Service, ExpertListing, Address, Coupon, BookingStatus, PaymentStatus } from '../../../core/services/booking.service';

interface TimeSlot {
  value: string;
  label: string;
}

@Component({
  selector: 'app-book-service',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './book-service.component.html',
  styleUrl: './book-service.component.scss'
})
export class BookServiceComponent implements OnInit {
  // Current step (1: Service & Expert, 2: Date & Time, 3: Address, 4: Summary)
  currentStep = signal<number>(1);
  
  // Services
  services = signal<Service[]>([]);
  selectedServiceId = signal<string | null>(null);
  
  // Experts
  experts = signal<ExpertListing[]>([]);
  selectedExpert = signal<ExpertListing | null>(null);
  isLoadingExperts = signal<boolean>(false);
  
  // Date & Time
  selectedDate = signal<Date | null>(null);
  selectedTimeSlot = signal<string | null>(null);
  bookingFrequency = signal<'once' | 'weekly' | 'monthly'>('once');
  currentMonth = signal<Date>(new Date());
  
  // Addresses
  addresses = signal<Address[]>([]);
  selectedAddressId = signal<string | null>(null);
  isAddingNewAddress = signal<boolean>(false);
  newAddressForm: FormGroup;
  
  // Coupons
  coupons = signal<Coupon[]>([]);
  selectedCoupon = signal<Coupon | null>(null);
  couponCode = signal<string>('');
  appliedDiscount = signal<number>(0);
  
  // Payment
  isPaymentModalOpen = signal<boolean>(false);
  selectedPaymentMethod = signal<'card' | 'upi' | 'netbanking'>('card');
  isProcessingPayment = signal<boolean>(false);
  isPaymentSuccess = signal<boolean>(false);
  
  // User dropdown
  isUserMenuOpen = signal<boolean>(false);
  
  // Computed values
  selectedService = computed(() => {
    const id = this.selectedServiceId();
    return this.services().find(s => s.id === id || s.name.toLowerCase() === id?.toLowerCase()) || null;
  });
  
  selectedAddress = computed(() => {
    const id = this.selectedAddressId();
    return this.addresses().find(a => a.id === id) || null;
  });
  
  // Pricing
  baseAmount = computed(() => {
    const expert = this.selectedExpert();
    return expert ? expert.hourlyRate * 2 : 500; // 2 hours default
  });
  
  gstAmount = computed(() => this.baseAmount() * 0.18);
  
  totalAmount = computed(() => {
    return this.baseAmount() + this.gstAmount() - this.appliedDiscount();
  });
  
  // Time slots
  timeSlots: TimeSlot[] = [
    { value: '06:00-09:00', label: '6:00 AM - 9:00 AM' },
    { value: '09:00-12:00', label: '9:00 AM - 12:00 PM' },
    { value: '12:00-15:00', label: '12:00 PM - 3:00 PM' },
    { value: '15:00-18:00', label: '3:00 PM - 6:00 PM' },
    { value: '18:00-21:00', label: '6:00 PM - 9:00 PM' }
  ];
  
  // House types
  houseTypes = ['1 BHK', '2 BHK', '3 BHK', '4 BHK'];
  selectedHouseType = signal<string>('2 BHK');
  
  // Location types
  locationTypes = ['Home', 'Office', 'Others'];
  selectedLocationType = signal<string>('Home');

  constructor(
    private authService: AuthService,
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
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
    
    // Check for pre-selected service from query params
    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        this.selectedServiceId.set(params['service']);
        this.loadExperts();
      }
    });
  }

  // Load services
  loadServices(): void {
    // Hardcoded services for demo
    this.services.set([
      { id: 'srv-001', name: 'Cleaning', description: '', icon: '', image: '', basePrice: 150, priceUnit: 'per hour', isPopular: true, isFeatured: false },
      { id: 'srv-002', name: 'Cooking', description: '', icon: '', image: '', basePrice: 200, priceUnit: 'per hour', isPopular: true, isFeatured: false },
      { id: 'srv-003', name: 'Gardening', description: '', icon: '', image: '', basePrice: 175, priceUnit: 'per hour', isPopular: true, isFeatured: false },
      { id: 'srv-004', name: 'Cleaning', description: '', icon: '', image: '', basePrice: 150, priceUnit: 'per hour', isPopular: true, isFeatured: false },
      { id: 'srv-005', name: 'Gardening', description: '', icon: '', image: '', basePrice: 175, priceUnit: 'per hour', isPopular: true, isFeatured: false },
      { id: 'srv-006', name: 'Cooking', description: '', icon: '', image: '', basePrice: 200, priceUnit: 'per hour', isPopular: true, isFeatured: false },
      { id: 'srv-007', name: 'Gardening', description: '', icon: '', image: '', basePrice: 175, priceUnit: 'per hour', isPopular: true, isFeatured: false },
      { id: 'srv-008', name: 'Cleaning', description: '', icon: '', image: '', basePrice: 150, priceUnit: 'per hour', isPopular: true, isFeatured: false }
    ]);
  }

  // Load experts
  loadExperts(): void {
    this.isLoadingExperts.set(true);
    this.bookingService.getAllExperts().subscribe({
      next: (experts) => {
        this.experts.set(experts);
        this.isLoadingExperts.set(false);
      },
      error: () => {
        this.isLoadingExperts.set(false);
      }
    });
  }

  // Load addresses
  loadAddresses(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.bookingService.getCustomerAddresses(user.id).subscribe({
        next: (addresses) => {
          this.addresses.set(addresses);
          if (addresses.length > 0) {
            this.selectedAddressId.set(addresses[0].id);
          }
        }
      });
    }
  }

  // Load coupons
  loadCoupons(): void {
    this.bookingService.getAvailableCoupons().subscribe({
      next: (coupons) => {
        this.coupons.set(coupons);
      }
    });
  }

  // Select service
  selectService(serviceId: string): void {
    this.selectedServiceId.set(serviceId);
    this.loadExperts();
  }

  // Select expert
  selectExpert(expert: ExpertListing): void {
    this.selectedExpert.set(expert);
  }

  // Check if step is complete
  isStepComplete(step: number): boolean {
    switch (step) {
      case 1:
        return !!this.selectedServiceId() && !!this.selectedExpert();
      case 2:
        return !!this.selectedDate() && !!this.selectedTimeSlot();
      case 3:
        return !!this.selectedAddressId();
      default:
        return false;
    }
  }

  // Next step
  nextStep(): void {
    if (this.currentStep() < 4 && this.isStepComplete(this.currentStep())) {
      this.currentStep.set(this.currentStep() + 1);
    }
  }

  // Previous step
  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.set(this.currentStep() - 1);
    }
  }

  // Go to step
  goToStep(step: number): void {
    if (step <= this.currentStep() || this.isStepComplete(step - 1)) {
      this.currentStep.set(step);
    }
  }

  // Calendar helpers
  getDaysInMonth(date: Date): (number | null)[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: (number | null)[] = [];
    
    // Add empty slots for days before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
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

  selectDate(day: number, monthOffset: number = 0): void {
    const baseDate = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    const selectedDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), day);
    
    // Don't allow past dates
    if (selectedDate >= new Date(new Date().setHours(0, 0, 0, 0))) {
      this.selectedDate.set(selectedDate);
    }
  }

  isDateSelected(day: number, monthOffset: number = 0): boolean {
    const selected = this.selectedDate();
    if (!selected || !day) return false;
    
    const baseDate = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    return selected.getDate() === day &&
           selected.getMonth() === baseDate.getMonth() &&
           selected.getFullYear() === baseDate.getFullYear();
  }

  isToday(day: number, monthOffset: number = 0): boolean {
    if (!day) return false;
    const today = new Date();
    const baseDate = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    return today.getDate() === day &&
           today.getMonth() === baseDate.getMonth() &&
           today.getFullYear() === baseDate.getFullYear();
  }

  isPastDate(day: number, monthOffset: number = 0): boolean {
    if (!day) return false;
    const baseDate = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    const date = new Date(baseDate.getFullYear(), baseDate.getMonth(), day);
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    return date < today;
  }

  // Select time slot
  selectTimeSlot(slot: string): void {
    this.selectedTimeSlot.set(slot);
  }

  // Select address
  selectAddress(addressId: string): void {
    this.selectedAddressId.set(addressId);
    this.isAddingNewAddress.set(false);
  }

  // Show add address form
  showAddAddressForm(): void {
    this.isAddingNewAddress.set(true);
  }

  // Save new address
  saveNewAddress(): void {
    if (this.newAddressForm.valid) {
      const user = this.authService.getCurrentUser();
      if (!user) return;

      const newAddress = {
        userId: user.id,
        label: this.selectedLocationType(),
        houseType: this.selectedHouseType(),
        locationType: this.selectedLocationType(),
        ...this.newAddressForm.value
      };

      this.bookingService.addAddress(newAddress).subscribe({
        next: (address) => {
          this.addresses.update(addrs => [...addrs, address]);
          this.selectedAddressId.set(address.id);
          this.isAddingNewAddress.set(false);
          this.newAddressForm.reset();
        }
      });
    }
  }

  // Apply coupon
  applyCoupon(): void {
    const code = this.couponCode();
    if (!code) return;

    this.bookingService.applyCoupon(code, this.baseAmount()).subscribe({
      next: (result) => {
        if (result) {
          this.selectedCoupon.set(result.coupon);
          this.appliedDiscount.set(result.discount);
        } else {
          alert('Invalid or ineligible coupon code');
        }
      }
    });
  }

  // Select coupon from list
  selectCouponFromList(coupon: Coupon): void {
    if (this.baseAmount() >= coupon.minOrderValue) {
      this.couponCode.set(coupon.code);
      this.applyCoupon();
    }
  }

  // Check if coupon is eligible
  isCouponEligible(coupon: Coupon): boolean {
    return this.baseAmount() >= coupon.minOrderValue;
  }

  // Open payment modal
  openPaymentModal(): void {
    this.isPaymentModalOpen.set(true);
  }

  // Close payment modal
  closePaymentModal(): void {
    this.isPaymentModalOpen.set(false);
    if (this.isPaymentSuccess()) {
      this.router.navigate(['/customer/dashboard']);
    }
  }

  // Process payment
  processPayment(): void {
    this.isProcessingPayment.set(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const user = this.authService.getCurrentUser();
      if (!user) return;

      // Create booking
      const bookingData = {
        customerId: user.id,
        expertId: this.selectedExpert()?.id,
        serviceId: this.selectedServiceId() || undefined,
        serviceName: this.selectedService()?.name,
        addressId: this.selectedAddressId() || undefined,
        date: this.selectedDate()?.toISOString(),
        timeSlot: this.selectedTimeSlot() || undefined,
        duration: 2,
        frequency: this.bookingFrequency(),
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

  // Toggle user menu
  toggleUserMenu(): void {
    this.isUserMenuOpen.set(!this.isUserMenuOpen());
  }

  // Logout
  logout(): void {
    this.authService.logout();
  }

  // Get user name
  get userName(): string {
    return this.authService.getCurrentUser()?.name || 'User';
  }

  // Format date for display
  formatDate(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  }
}
