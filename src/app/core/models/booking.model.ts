import { Address } from './user.model';

// Booking Status Enum
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Schedule Type Enum
export enum ScheduleType {
  ASAP = 'ASAP',
  SCHEDULED = 'SCHEDULED'
}

// OTP Type Enum
export enum OTPType {
  JOB_START = 'JOB_START',
  JOB_END = 'JOB_END'
}

// Booking Interface
export interface Booking {
  id: string;
  customerId: string;
  expertId: string;
  serviceId: string;
  status: BookingStatus;
  scheduleType: ScheduleType;
  startDate: string; // ISO date string
  timeSlot: {
    start: string; // HH:mm format
    end: string;
  };
  duration: number; // minutes
  address: Address;
  price: BookingPrice;
  payment: PaymentInfo;
  otp?: string;
  startOtp?: string;
  endOtp?: string;
  rating?: number;
  feedback?: string;
  cancellationReason?: string;
  createdAt: string;
  updatedAt: string;
  // Populated fields
  customerName?: string;
  expertName?: string;
  serviceName?: string;
}

// Booking Price Breakdown
export interface BookingPrice {
  base: number;
  addons?: number;
  discount?: number;
  gst: number;
  total: number;
}

// Payment Info
export interface PaymentInfo {
  status: PaymentStatus;
  method?: PaymentMethod;
  transactionId?: string;
  paidAt?: string;
}

// Payment Status Enum
export enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED'
}

// Payment Method Enum
export enum PaymentMethod {
  CARD = 'CARD',
  UPI = 'UPI',
  NET_BANKING = 'NET_BANKING'
}

// Booking Filters
export interface BookingFilters {
  status?: BookingStatus[];
  dateFrom?: string;
  dateTo?: string;
  serviceId?: string;
  sortBy?: 'date' | 'status' | 'price';
  sortOrder?: 'asc' | 'desc';
}

// Create Booking DTO
export interface CreateBookingDTO {
  serviceId: string;
  expertId: string;
  scheduleType: ScheduleType;
  startDate: string;
  timeSlot: {
    start: string;
    end: string;
  };
  addressId: string;
  couponCode?: string;
  addons?: string[];
}

// OTP Verification
export interface OTPVerification {
  bookingId: string;
  otp: string;
  type: OTPType;
  expiresAt: string;
  verified: boolean;
}

// Coupon Interface
export interface Coupon {
  code: string;
  description: string;
  discountPercentage: number;
  minOrderValue: number;
  maxDiscount: number;
  validUntil: string;
}

// Coupon Validation Response
export interface CouponValidation {
  valid: boolean;
  discount?: number;
  message?: string;
}
