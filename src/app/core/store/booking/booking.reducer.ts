import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Booking } from './booking.actions';
import * as BookingActions from './booking.actions';

export interface BookingState extends EntityState<Booking> {
  selectedBookingId: string | null;
  isLoading: boolean;
  error: string | null;
  createSuccess: boolean;
  updateSuccess: boolean;
  // Separate expert bookings state
  expertBookings: Booking[];
  expertBookingsLoading: boolean;
}

export const bookingAdapter: EntityAdapter<Booking> = createEntityAdapter<Booking>({
  selectId: (booking) => booking.id,
  sortComparer: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
});

export const initialBookingState: BookingState = bookingAdapter.getInitialState({
  selectedBookingId: null,
  isLoading: false,
  error: null,
  createSuccess: false,
  updateSuccess: false,
  expertBookings: [],
  expertBookingsLoading: false
});

export const bookingReducer = createReducer(
  initialBookingState,

  // Load Bookings
  on(BookingActions.loadBookings, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.loadBookingsSuccess, (state, { bookings }) => 
    bookingAdapter.setAll(bookings, {
      ...state,
      isLoading: false,
      error: null
    })
  ),

  on(BookingActions.loadBookingsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Single Booking
  on(BookingActions.loadBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.loadBookingSuccess, (state, { booking }) => 
    bookingAdapter.upsertOne(booking, {
      ...state,
      selectedBookingId: booking.id,
      isLoading: false,
      error: null
    })
  ),

  on(BookingActions.loadBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Create Booking
  on(BookingActions.createBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    createSuccess: false
  })),

  on(BookingActions.createBookingSuccess, (state, { booking }) => 
    bookingAdapter.addOne(booking, {
      ...state,
      selectedBookingId: booking.id,
      isLoading: false,
      error: null,
      createSuccess: true
    })
  ),

  on(BookingActions.createBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    createSuccess: false
  })),

  // Update Booking
  on(BookingActions.updateBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    updateSuccess: false
  })),

  on(BookingActions.updateBookingSuccess, (state, { booking }) => 
    bookingAdapter.updateOne(
      { id: booking.id, changes: booking },
      {
        ...state,
        isLoading: false,
        error: null,
        updateSuccess: true
      }
    )
  ),

  on(BookingActions.updateBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    updateSuccess: false
  })),

  // Cancel Booking
  on(BookingActions.cancelBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.cancelBookingSuccess, (state, { booking }) => 
    bookingAdapter.updateOne(
      { id: booking.id, changes: booking },
      {
        ...state,
        isLoading: false,
        error: null
      }
    )
  ),

  on(BookingActions.cancelBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Update Status
  on(BookingActions.updateBookingStatus, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.updateBookingStatusSuccess, (state, { booking }) => 
    bookingAdapter.updateOne(
      { id: booking.id, changes: booking },
      {
        ...state,
        isLoading: false,
        error: null
      }
    )
  ),

  on(BookingActions.updateBookingStatusFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Expert Bookings — stored separately from customer bookings
  on(BookingActions.loadExpertBookings, (state) => ({
    ...state,
    expertBookingsLoading: true,
    error: null
  })),

  on(BookingActions.loadExpertBookingsSuccess, (state, { bookings }) => ({
    ...state,
    expertBookings: bookings,
    expertBookingsLoading: false,
    error: null
  })),

  on(BookingActions.loadExpertBookingsFailure, (state, { error }) => ({
    ...state,
    expertBookingsLoading: false,
    error
  })),

  // Accept Booking — update in expertBookings array
  on(BookingActions.acceptBooking, (state) => ({
    ...state,
    expertBookingsLoading: true,
    error: null
  })),

  on(BookingActions.acceptBookingSuccess, (state, { booking }) => ({
    ...state,
    expertBookings: state.expertBookings.map(b => b.id === booking.id ? booking : b),
    expertBookingsLoading: false,
    error: null
  })),

  on(BookingActions.acceptBookingFailure, (state, { error }) => ({
    ...state,
    expertBookingsLoading: false,
    error
  })),

  // Reject Booking — update in expertBookings array
  on(BookingActions.rejectBooking, (state) => ({
    ...state,
    expertBookingsLoading: true,
    error: null
  })),

  on(BookingActions.rejectBookingSuccess, (state, { booking }) => ({
    ...state,
    expertBookings: state.expertBookings.map(b => b.id === booking.id ? booking : b),
    expertBookingsLoading: false,
    error: null
  })),

  on(BookingActions.rejectBookingFailure, (state, { error }) => ({
    ...state,
    expertBookingsLoading: false,
    error
  })),

  // Clear
  on(BookingActions.clearSelectedBooking, (state) => ({
    ...state,
    selectedBookingId: null
  })),

  on(BookingActions.clearBookingError, (state) => ({
    ...state,
    error: null,
    createSuccess: false,
    updateSuccess: false
  }))
);
