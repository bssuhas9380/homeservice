import { createAction, props } from '@ngrx/store';

export interface Booking {
  id: string;
  customerId: string;
  expertId?: string;
  serviceId: string;
  serviceName: string;
  addressId: string;
  date: string;
  timeSlot: string;
  duration: number;
  frequency: 'once' | 'weekly' | 'monthly';
  status: BookingStatus;
  baseAmount: number;
  gstAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  couponCode?: string;
  notes?: string;
  otp?: string;
  createdAt: string;
  updatedAt?: string;
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  REJECTED = 'REJECTED'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED'
}

export interface CreateBookingData {
  customerId: string;
  expertId?: string;
  serviceId: string;
  serviceName: string;
  addressId: string;
  date: string;
  timeSlot: string;
  duration: number;
  frequency: 'once' | 'weekly' | 'monthly';
  baseAmount: number;
  gstAmount: number;
  discountAmount: number;
  totalAmount: number;
  couponCode?: string;
}

// Action Types
export const BookingActionTypes = {
  // Load Bookings (Customer)
  LOAD_BOOKINGS: '[Booking] Load Bookings',
  LOAD_BOOKINGS_SUCCESS: '[Booking] Load Bookings Success',
  LOAD_BOOKINGS_FAILURE: '[Booking] Load Bookings Failure',

  // Load Expert Bookings
  LOAD_EXPERT_BOOKINGS: '[Booking] Load Expert Bookings',
  LOAD_EXPERT_BOOKINGS_SUCCESS: '[Booking] Load Expert Bookings Success',
  LOAD_EXPERT_BOOKINGS_FAILURE: '[Booking] Load Expert Bookings Failure',

  // Accept/Reject Booking
  ACCEPT_BOOKING: '[Booking] Accept Booking',
  ACCEPT_BOOKING_SUCCESS: '[Booking] Accept Booking Success',
  ACCEPT_BOOKING_FAILURE: '[Booking] Accept Booking Failure',

  REJECT_BOOKING: '[Booking] Reject Booking',
  REJECT_BOOKING_SUCCESS: '[Booking] Reject Booking Success',
  REJECT_BOOKING_FAILURE: '[Booking] Reject Booking Failure',

  // Load Single Booking
  LOAD_BOOKING: '[Booking] Load Booking',
  LOAD_BOOKING_SUCCESS: '[Booking] Load Booking Success',
  LOAD_BOOKING_FAILURE: '[Booking] Load Booking Failure',

  // Create Booking
  CREATE_BOOKING: '[Booking] Create Booking',
  CREATE_BOOKING_SUCCESS: '[Booking] Create Booking Success',
  CREATE_BOOKING_FAILURE: '[Booking] Create Booking Failure',

  // Update Booking
  UPDATE_BOOKING: '[Booking] Update Booking',
  UPDATE_BOOKING_SUCCESS: '[Booking] Update Booking Success',
  UPDATE_BOOKING_FAILURE: '[Booking] Update Booking Failure',

  // Cancel Booking
  CANCEL_BOOKING: '[Booking] Cancel Booking',
  CANCEL_BOOKING_SUCCESS: '[Booking] Cancel Booking Success',
  CANCEL_BOOKING_FAILURE: '[Booking] Cancel Booking Failure',

  // Update Status
  UPDATE_BOOKING_STATUS: '[Booking] Update Status',
  UPDATE_BOOKING_STATUS_SUCCESS: '[Booking] Update Status Success',
  UPDATE_BOOKING_STATUS_FAILURE: '[Booking] Update Status Failure',

  // Clear
  CLEAR_SELECTED_BOOKING: '[Booking] Clear Selected Booking',
  CLEAR_BOOKING_ERROR: '[Booking] Clear Error'
} as const;

// Load Bookings
export const loadBookings = createAction(
  BookingActionTypes.LOAD_BOOKINGS,
  props<{ customerId: string }>()
);

export const loadBookingsSuccess = createAction(
  BookingActionTypes.LOAD_BOOKINGS_SUCCESS,
  props<{ bookings: Booking[] }>()
);

export const loadBookingsFailure = createAction(
  BookingActionTypes.LOAD_BOOKINGS_FAILURE,
  props<{ error: string }>()
);

// Load Single Booking
export const loadBooking = createAction(
  BookingActionTypes.LOAD_BOOKING,
  props<{ bookingId: string }>()
);

export const loadBookingSuccess = createAction(
  BookingActionTypes.LOAD_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const loadBookingFailure = createAction(
  BookingActionTypes.LOAD_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Create Booking
export const createBooking = createAction(
  BookingActionTypes.CREATE_BOOKING,
  props<{ bookingData: CreateBookingData }>()
);

export const createBookingSuccess = createAction(
  BookingActionTypes.CREATE_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const createBookingFailure = createAction(
  BookingActionTypes.CREATE_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Update Booking
export const updateBooking = createAction(
  BookingActionTypes.UPDATE_BOOKING,
  props<{ bookingId: string; data: Partial<Booking> }>()
);

export const updateBookingSuccess = createAction(
  BookingActionTypes.UPDATE_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const updateBookingFailure = createAction(
  BookingActionTypes.UPDATE_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Cancel Booking
export const cancelBooking = createAction(
  BookingActionTypes.CANCEL_BOOKING,
  props<{ bookingId: string; reason?: string }>()
);

export const cancelBookingSuccess = createAction(
  BookingActionTypes.CANCEL_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const cancelBookingFailure = createAction(
  BookingActionTypes.CANCEL_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Update Status
export const updateBookingStatus = createAction(
  BookingActionTypes.UPDATE_BOOKING_STATUS,
  props<{ bookingId: string; status: BookingStatus }>()
);

export const updateBookingStatusSuccess = createAction(
  BookingActionTypes.UPDATE_BOOKING_STATUS_SUCCESS,
  props<{ booking: Booking }>()
);

export const updateBookingStatusFailure = createAction(
  BookingActionTypes.UPDATE_BOOKING_STATUS_FAILURE,
  props<{ error: string }>()
);

// Load Expert Bookings
export const loadExpertBookings = createAction(
  BookingActionTypes.LOAD_EXPERT_BOOKINGS,
  props<{ expertId: string }>()
);

export const loadExpertBookingsSuccess = createAction(
  BookingActionTypes.LOAD_EXPERT_BOOKINGS_SUCCESS,
  props<{ bookings: Booking[] }>()
);

export const loadExpertBookingsFailure = createAction(
  BookingActionTypes.LOAD_EXPERT_BOOKINGS_FAILURE,
  props<{ error: string }>()
);

// Accept Booking
export const acceptBooking = createAction(
  BookingActionTypes.ACCEPT_BOOKING,
  props<{ bookingId: string }>()
);

export const acceptBookingSuccess = createAction(
  BookingActionTypes.ACCEPT_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const acceptBookingFailure = createAction(
  BookingActionTypes.ACCEPT_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Reject Booking
export const rejectBooking = createAction(
  BookingActionTypes.REJECT_BOOKING,
  props<{ bookingId: string; reason?: string }>()
);

export const rejectBookingSuccess = createAction(
  BookingActionTypes.REJECT_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const rejectBookingFailure = createAction(
  BookingActionTypes.REJECT_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Clear
export const clearSelectedBooking = createAction(BookingActionTypes.CLEAR_SELECTED_BOOKING);
export const clearBookingError = createAction(BookingActionTypes.CLEAR_BOOKING_ERROR);

// Grouped actions namespace for easier imports
export const BookingActions = {
  loadBookings,
  loadBookingsSuccess,
  loadBookingsFailure,
  loadBooking,
  loadBookingSuccess,
  loadBookingFailure,
  createBooking,
  createBookingSuccess,
  createBookingFailure,
  updateBooking,
  updateBookingSuccess,
  updateBookingFailure,
  cancelBooking,
  cancelBookingSuccess,
  cancelBookingFailure,
  updateBookingStatus,
  updateBookingStatusSuccess,
  updateBookingStatusFailure,
  loadExpertBookings,
  loadExpertBookingsSuccess,
  loadExpertBookingsFailure,
  acceptBooking,
  acceptBookingSuccess,
  acceptBookingFailure,
  rejectBooking,
  rejectBookingSuccess,
  rejectBookingFailure,
  clearSelectedBooking,
  clearBookingError
};
