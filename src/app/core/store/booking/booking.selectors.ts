import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingState, bookingAdapter } from './booking.reducer';
import { BookingStatus } from './booking.actions';

// Feature selector
export const selectBookingState = createFeatureSelector<BookingState>('bookings');

// Entity selectors
const { selectAll, selectEntities, selectIds, selectTotal } = bookingAdapter.getSelectors();

export const selectAllBookings = createSelector(
  selectBookingState,
  selectAll
);

export const selectBookingEntities = createSelector(
  selectBookingState,
  selectEntities
);

export const selectBookingIds = createSelector(
  selectBookingState,
  selectIds
);

export const selectBookingTotal = createSelector(
  selectBookingState,
  selectTotal
);

export const selectSelectedBookingId = createSelector(
  selectBookingState,
  (state) => state.selectedBookingId
);

export const selectSelectedBooking = createSelector(
  selectBookingEntities,
  selectSelectedBookingId,
  (entities, selectedId) => selectedId ? entities[selectedId] : null
);

export const selectBookingIsLoading = createSelector(
  selectBookingState,
  (state) => state.isLoading
);

// Alias for consistent naming
export const selectBookingLoading = selectBookingIsLoading;

export const selectBookingError = createSelector(
  selectBookingState,
  (state) => state.error
);

export const selectBookingCreateSuccess = createSelector(
  selectBookingState,
  (state) => state.createSuccess
);

export const selectBookingUpdateSuccess = createSelector(
  selectBookingState,
  (state) => state.updateSuccess
);

// Filtered selectors
export const selectUpcomingBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => 
    b.status === BookingStatus.PENDING || b.status === BookingStatus.CONFIRMED
  )
);

export const selectCompletedBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.COMPLETED)
);

export const selectCancelledBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.CANCELLED)
);

export const selectRejectedBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.REJECTED)
);

export const selectBookingCounts = createSelector(
  selectAllBookings,
  (bookings) => ({
    all: bookings.length,
    upcoming: bookings.filter(b => 
      b.status === BookingStatus.PENDING || b.status === BookingStatus.CONFIRMED
    ).length,
    completed: bookings.filter(b => b.status === BookingStatus.COMPLETED).length,
    cancelled: bookings.filter(b => b.status === BookingStatus.CANCELLED).length,
    rejected: bookings.filter(b => b.status === BookingStatus.REJECTED).length
  })
);

// Select booking by ID
export const selectBookingById = (bookingId: string) => createSelector(
  selectBookingEntities,
  (entities) => entities[bookingId]
);
