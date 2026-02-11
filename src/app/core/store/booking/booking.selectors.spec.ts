import * as fromSelectors from './booking.selectors';
import { BookingState, initialBookingState, bookingAdapter } from './booking.reducer';
import { Booking, BookingStatus, PaymentStatus } from './booking.actions';

describe('Booking Selectors', () => {
  const makeBooking = (overrides: Partial<Booking> = {}): Booking => ({
    id: 'b1', customerId: 'c1', expertId: 'e1',
    serviceId: 's1', serviceName: 'Cleaning', addressId: 'a1',
    date: '2026-01-20', timeSlot: '09:00', duration: 2,
    frequency: 'once', status: BookingStatus.PENDING,
    baseAmount: 500, gstAmount: 90, discountAmount: 0, totalAmount: 590,
    paymentStatus: PaymentStatus.PAID, createdAt: '2026-01-15T10:00:00Z',
    ...overrides
  });

  const pending = makeBooking({ id: 'b1', status: BookingStatus.PENDING });
  const confirmed = makeBooking({ id: 'b2', status: BookingStatus.CONFIRMED });
  const completed = makeBooking({ id: 'b3', status: BookingStatus.COMPLETED, totalAmount: 1000 });
  const cancelled = makeBooking({ id: 'b4', status: BookingStatus.CANCELLED });
  const rejected = makeBooking({ id: 'b5', status: BookingStatus.REJECTED });

  const stateWithBookings: BookingState = bookingAdapter.setAll(
    [pending, confirmed, completed, cancelled, rejected],
    { ...initialBookingState, selectedBookingId: 'b1', expertBookings: [pending, confirmed, completed, cancelled, rejected] }
  );

  // Entity selectors
  it('selectAllBookings should return all customer bookings', () => {
    const result = fromSelectors.selectAllBookings.projector(stateWithBookings);
    expect(result.length).toBe(5);
  });

  it('selectBookingEntities should return entities map', () => {
    const result = fromSelectors.selectBookingEntities.projector(stateWithBookings);
    expect(result['b1']).toBeDefined();
  });

  it('selectBookingTotal should return count', () => {
    const result = fromSelectors.selectBookingTotal.projector(stateWithBookings);
    expect(result).toBe(5);
  });

  it('selectSelectedBookingId should return id', () => {
    expect(fromSelectors.selectSelectedBookingId.projector(stateWithBookings)).toBe('b1');
  });

  it('selectSelectedBooking should return booking by selectedId', () => {
    const entities = { 'b1': pending };
    expect(fromSelectors.selectSelectedBooking.projector(entities, 'b1')).toEqual(pending);
  });

  it('selectSelectedBooking should return null when no id', () => {
    expect(fromSelectors.selectSelectedBooking.projector({}, null)).toBeNull();
  });

  it('selectBookingIsLoading should return loading', () => {
    expect(fromSelectors.selectBookingIsLoading.projector({ ...stateWithBookings, isLoading: true })).toBe(true);
  });

  it('selectBookingError should return error', () => {
    expect(fromSelectors.selectBookingError.projector({ ...stateWithBookings, error: 'err' })).toBe('err');
  });

  it('selectBookingCreateSuccess should return createSuccess', () => {
    expect(fromSelectors.selectBookingCreateSuccess.projector({ ...stateWithBookings, createSuccess: true })).toBe(true);
  });

  it('selectBookingUpdateSuccess should return updateSuccess', () => {
    expect(fromSelectors.selectBookingUpdateSuccess.projector({ ...stateWithBookings, updateSuccess: true })).toBe(true);
  });

  // Filtered customer selectors
  it('selectUpcomingBookings should return PENDING and CONFIRMED', () => {
    const all = [pending, confirmed, completed, cancelled];
    const result = fromSelectors.selectUpcomingBookings.projector(all);
    expect(result.length).toBe(2);
  });

  it('selectCompletedBookings should return COMPLETED', () => {
    const result = fromSelectors.selectCompletedBookings.projector([pending, completed]);
    expect(result.length).toBe(1);
  });

  it('selectCancelledBookings should return CANCELLED', () => {
    const result = fromSelectors.selectCancelledBookings.projector([pending, cancelled]);
    expect(result.length).toBe(1);
  });

  it('selectRejectedBookings should return REJECTED', () => {
    const result = fromSelectors.selectRejectedBookings.projector([pending, rejected]);
    expect(result.length).toBe(1);
  });

  it('selectBookingCounts should return correct counts', () => {
    const all = [pending, confirmed, completed, cancelled, rejected];
    const result = fromSelectors.selectBookingCounts.projector(all);
    expect(result.all).toBe(5);
    expect(result.upcoming).toBe(2);
    expect(result.completed).toBe(1);
    expect(result.cancelled).toBe(1);
    expect(result.rejected).toBe(1);
  });

  it('selectBookingById should return specific booking', () => {
    const entities = { 'b1': pending };
    const selector = fromSelectors.selectBookingById('b1');
    expect(selector.projector(entities)).toEqual(pending);
  });

  // Expert-specific selectors
  it('selectExpertBookings should return expertBookings array', () => {
    const result = fromSelectors.selectExpertBookings.projector(stateWithBookings);
    expect(result.length).toBe(5);
  });

  it('selectExpertBookingsLoading should return loading state', () => {
    expect(fromSelectors.selectExpertBookingsLoading.projector({ ...stateWithBookings, expertBookingsLoading: true })).toBe(true);
  });

  it('selectPendingBookings should return PENDING from expert bookings', () => {
    const result = fromSelectors.selectPendingBookings.projector([pending, confirmed]);
    expect(result.length).toBe(1);
    expect(result[0].status).toBe(BookingStatus.PENDING);
  });

  it('selectConfirmedBookings should return CONFIRMED from expert bookings', () => {
    const result = fromSelectors.selectConfirmedBookings.projector([pending, confirmed]);
    expect(result.length).toBe(1);
    expect(result[0].status).toBe(BookingStatus.CONFIRMED);
  });

  it('selectExpertBookingCounts should return counts with earnings', () => {
    const today = new Date().toISOString().split('T')[0];
    const todayBooking = makeBooking({ id: 'bt', date: today, status: BookingStatus.CONFIRMED, totalAmount: 500 });
    const completedBooking = makeBooking({ id: 'bc', date: today, status: BookingStatus.COMPLETED, totalAmount: 1000 });
    const bookings = [todayBooking, completedBooking, pending, rejected, cancelled];

    const result = fromSelectors.selectExpertBookingCounts.projector(bookings);
    expect(result.pending).toBe(1);
    expect(result.confirmed).toBe(1);
    expect(result.completed).toBe(1);
    expect(result.rejected).toBe(1);
    expect(result.cancelled).toBe(1);
    expect(result.totalEarnings).toBeGreaterThan(0);
  });

  it('selectBookingLoading alias should work', () => {
    expect(fromSelectors.selectBookingLoading).toBe(fromSelectors.selectBookingIsLoading);
  });
});
