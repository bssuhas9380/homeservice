import { PaymentMethod, PaymentStatus } from './booking.model';

// Payment Interface
export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: PaymentStatus;
  method: PaymentMethod;
  transactionId: string;
  createdAt: string;
  updatedAt?: string;
}

// Payment DTO
export interface PaymentDTO {
  bookingId: string;
  amount: number;
  method: PaymentMethod;
  cardDetails?: CardDetails;
  upiId?: string;
  bankCode?: string;
}

// Card Details
export interface CardDetails {
  cardNumber: string;
  cardholderName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

// Bank for Net Banking
export interface Bank {
  code: string;
  name: string;
  logo?: string;
}

// Payment Receipt
export interface PaymentReceipt {
  transactionId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  paidAt: string;
  bookingId: string;
}
