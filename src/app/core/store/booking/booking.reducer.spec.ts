import { bookingReducer, initialBookingState, BookingState } from './booking.reducer';
import * as BookingActions from './booking.actions';
import { Booking, BookingStatus, PaymentStatus } from './booking.actions';

describe('Booking Reducer', () => {
  const mockBooking: Booking = {
    id: 'book-1', customerId: 'cust-1', expertId: 'exp-1',
    serviceId: 'svc-1', serviceName: 'Cleaning', addressId: 'addr-1',
    date: '2026-01-20', timeSlot: '09:00', duration: 2,
    frequency: 'once', status: BookingStatus.PENDING,
    baseAmount: 500, gstAmount: 90, discountAmount: 0, totalAmount: 590,
    paymentStatus: PaymentStatus.PAID, createdAt: '2026-01-15T10:00:00Z'
  };

  const mockBooking2: Booking = { ...mockBooking, id: 'book-2', status: BookingStatus.CONFIRMED };

  it('should return initial state', () => {
    const state = bookingReducer(undefined, { type: 'NOOP' } as any);
    expect(state).toEqual(initialBookingState);
  });

  // Load Bookings (Customer)
  describe('Load Bookings', () => {
    it('should set loading on loadBookings', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadBookings({ customerId: 'c1' }));
      expect(state.isLoading).toBe(true);
    });

    it('should set bookings on loadBookingsSuccess', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadBookingsSuccess({ bookings: [mockBooking] }));
      expect(state.ids.length).toBe(1);
      expect(state.isLoading).toBe(false);
    });

    it('should set error on loadBookingsFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadBookingsFailure({ error: 'Failed' }));
      expect(state.error).toBe('Failed');
      expect(state.isLoading).toBe(false);
    });
  });

  // Load Single Booking
  describe('Load Booking', () => {
    it('should set loading on loadBooking', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadBooking({ bookingId: 'b1' }));
      expect(state.isLoading).toBe(true);
    });

    it('should upsert booking on loadBookingSuccess', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadBookingSuccess({ booking: mockBooking }));
      expect(state.selectedBookingId).toBe('book-1');
      expect(state.isLoading).toBe(false);
    });

    it('should set error on loadBookingFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadBookingFailure({ error: 'Not found' }));
      expect(state.error).toBe('Not found');
    });
  });

  // Create Booking
  describe('Create Booking', () => {
    it('should set loading on createBooking', () => {
      const state = bookingReducer(initialBookingState, BookingActions.createBooking({ bookingData: {} as any }));
      expect(state.isLoading).toBe(true);
      expect(state.createSuccess).toBe(false);
    });

    it('should add booking on createBookingSuccess', () => {
      const state = bookingReducer(initialBookingState, BookingActions.createBookingSuccess({ booking: mockBooking }));
      expect(state.ids.length).toBe(1);
      expect(state.createSuccess).toBe(true);
    });

    it('should set error on createBookingFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.createBookingFailure({ error: 'Err' }));
      expect(state.error).toBe('Err');
      expect(state.createSuccess).toBe(false);
    });
  });

  // Update Booking
  describe('Update Booking', () => {
    it('should set loading on updateBooking', () => {
      const state = bookingReducer(initialBookingState, BookingActions.updateBooking({ bookingId: 'b1', data: {} }));
      expect(state.isLoading).toBe(true);
      expect(state.updateSuccess).toBe(false);
    });

    it('should update booking on updateBookingSuccess', () => {
      const withBooking = bookingReducer(initialBookingState, BookingActions.loadBookingsSuccess({ bookings: [mockBooking] }));
      const updated = { ...mockBooking, status: BookingStatus.COMPLETED };
      const state = bookingReducer(withBooking, BookingActions.updateBookingSuccess({ booking: updated }));
      expect(state.updateSuccess).toBe(true);
    });

    it('should set error on updateBookingFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.updateBookingFailure({ error: 'Err' }));
      expect(state.error).toBe('Err');
    });
  });

  // Cancel Booking
  describe('Cancel Booking', () => {
    it('should set loading on cancelBooking', () => {
      const state = bookingReducer(initialBookingState, BookingActions.cancelBooking({ bookingId: 'b1' }));
      expect(state.isLoading).toBe(true);
    });

    it('should update on cancelBookingSuccess', () => {
      const cancelled = { ...mockBooking, status: BookingStatus.CANCELLED };
      const withBooking = bookingReducer(initialBookingState, BookingActions.loadBookingsSuccess({ bookings: [mockBooking] }));
      const state = bookingReducer(withBooking, BookingActions.cancelBookingSuccess({ booking: cancelled }));
      expect(state.isLoading).toBe(false);
    });

    it('should set error on cancelBookingFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.cancelBookingFailure({ error: 'Err' }));
      expect(state.error).toBe('Err');
    });
  });

  // Update Status
  describe('Update Status', () => {
    it('should handle updateBookingStatus', () => {
      const state = bookingReducer(initialBookingState, BookingActions.updateBookingStatus({ bookingId: 'b1', status: BookingStatus.COMPLETED }));
      expect(state.isLoading).toBe(true);
    });

    it('should handle updateBookingStatusSuccess', () => {
      const withBooking = bookingReducer(initialBookingState, BookingActions.loadBookingsSuccess({ bookings: [mockBooking] }));
      const state = bookingReducer(withBooking, BookingActions.updateBookingStatusSuccess({ booking: { ...mockBooking, status: BookingStatus.COMPLETED } }));
      expect(state.isLoading).toBe(false);
    });

    it('should handle updateBookingStatusFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.updateBookingStatusFailure({ error: 'Err' }));
      expect(state.error).toBe('Err');
    });
  });

  // Expert Bookings (separate state)
  describe('Expert Bookings', () => {
    it('should set expertBookingsLoading on loadExpertBookings', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadExpertBookings({ expertId: 'e1' }));
      expect(state.expertBookingsLoading).toBe(true);
    });

    it('should set expertBookings on loadExpertBookingsSuccess', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadExpertBookingsSuccess({ bookings: [mockBooking] }));
      expect(state.expertBookings.length).toBe(1);
      expect(state.expertBookingsLoading).toBe(false);
    });

    it('should set error on loadExpertBookingsFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.loadExpertBookingsFailure({ error: 'Err' }));
      expect(state.expertBookingsLoading).toBe(false);
      expect(state.error).toBe('Err');
    });
  });

  // Accept Booking
  describe('Accept Booking', () => {
    it('should set loading on acceptBooking', () => {
      const state = bookingReducer(initialBookingState, BookingActions.acceptBooking({ bookingId: 'b1' }));
      expect(state.expertBookingsLoading).toBe(true);
    });

    it('should update expertBookings on acceptBookingSuccess', () => {
      const withExpert = bookingReducer(initialBookingState, BookingActions.loadExpertBookingsSuccess({ bookings: [mockBooking] }));
      const accepted = { ...mockBooking, status: BookingStatus.CONFIRMED };
      const state = bookingReducer(withExpert, BookingActions.acceptBookingSuccess({ booking: accepted }));
      expect(state.expertBookings[0].status).toBe(BookingStatus.CONFIRMED);
    });

    it('should set error on acceptBookingFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.acceptBookingFailure({ error: 'Err' }));
      expect(state.error).toBe('Err');
    });
  });

  // Reject Booking
  describe('Reject Booking', () => {
    it('should set loading on rejectBooking', () => {
      const state = bookingReducer(initialBookingState, BookingActions.rejectBooking({ bookingId: 'b1' }));
      expect(state.expertBookingsLoading).toBe(true);
    });

    it('should update expertBookings on rejectBookingSuccess', () => {
      const withExpert = bookingReducer(initialBookingState, BookingActions.loadExpertBookingsSuccess({ bookings: [mockBooking] }));
      const rejected = { ...mockBooking, status: BookingStatus.REJECTED };
      const state = bookingReducer(withExpert, BookingActions.rejectBookingSuccess({ booking: rejected }));
      expect(state.expertBookings[0].status).toBe(BookingStatus.REJECTED);
    });

    it('should set error on rejectBookingFailure', () => {
      const state = bookingReducer(initialBookingState, BookingActions.rejectBookingFailure({ error: 'Err' }));
      expect(state.error).toBe('Err');
    });
  });

  // Clear
  describe('Clear', () => {
    it('should clear selected booking', () => {
      const withSelected: BookingState = { ...initialBookingState, selectedBookingId: 'b1' };
      const state = bookingReducer(withSelected, BookingActions.clearSelectedBooking());
      expect(state.selectedBookingId).toBeNull();
    });

    it('should clear booking error', () => {
      const withError: BookingState = { ...initialBookingState, error: 'err', createSuccess: true, updateSuccess: true };
      const state = bookingReducer(withError, BookingActions.clearBookingError());
      expect(state.error).toBeNull();
      expect(state.createSuccess).toBe(false);
      expect(state.updateSuccess).toBe(false);
    });
  });
});
