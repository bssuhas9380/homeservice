import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { BookingEffects } from './booking.effects';
import * as BookingActions from './booking.actions';
import { Booking, BookingStatus, PaymentStatus } from './booking.actions';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

describe('BookingEffects', () => {
  let effects: BookingEffects;
  let actions$: Observable<any>;
  let httpMock: HttpTestingController;
  let notificationSpy: jasmine.SpyObj<NotificationService>;

  const mockBooking: Booking = {
    id: 'book-1', customerId: 'cust-1', expertId: 'exp-1',
    serviceId: 's1', serviceName: 'Cleaning', addressId: 'a1',
    date: '2026-01-20', timeSlot: '09:00', duration: 2,
    frequency: 'once', status: BookingStatus.PENDING,
    baseAmount: 500, gstAmount: 90, discountAmount: 0, totalAmount: 590,
    paymentStatus: PaymentStatus.PAID, createdAt: '2026-01-15T10:00:00Z'
  };

  beforeEach(() => {
    notificationSpy = jasmine.createSpyObj('NotificationService', ['success', 'error']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookingEffects,
        provideMockActions(() => actions$),
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: NotificationService, useValue: notificationSpy }
      ]
    });

    effects = TestBed.inject(BookingEffects);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  describe('loadBookings$', () => {
    it('should return loadBookingsSuccess', () => {
      actions$ = of(BookingActions.loadBookings({ customerId: 'c1' }));
      effects.loadBookings$.subscribe(action => {
        expect(action.type).toBe(BookingActions.loadBookingsSuccess.type);
      });
      httpMock.expectOne(r => r.url.includes('/bookings')).flush([mockBooking]);
    });

    it('should return loadBookingsFailure on error', () => {
      actions$ = of(BookingActions.loadBookings({ customerId: 'c1' }));
      effects.loadBookings$.subscribe(action => {
        expect(action.type).toBe(BookingActions.loadBookingsFailure.type);
      });
      httpMock.expectOne(r => r.url.includes('/bookings')).flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('loadBooking$', () => {
    it('should return loadBookingSuccess', () => {
      actions$ = of(BookingActions.loadBooking({ bookingId: 'b1' }));
      effects.loadBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.loadBookingSuccess.type);
      });
      httpMock.expectOne(r => r.url.includes('/bookings/b1')).flush(mockBooking);
    });

    it('should return loadBookingFailure on error', () => {
      actions$ = of(BookingActions.loadBooking({ bookingId: 'b1' }));
      effects.loadBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.loadBookingFailure.type);
      });
      httpMock.expectOne(r => r.url.includes('/bookings/b1')).flush('Err', { status: 404, statusText: 'Not Found' });
    });
  });

  describe('createBooking$', () => {
    it('should return createBookingSuccess', () => {
      actions$ = of(BookingActions.createBooking({ bookingData: {} as any }));
      effects.createBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.createBookingSuccess.type);
      });
      httpMock.expectOne(r => r.method === 'POST').flush(mockBooking);
    });

    it('should return createBookingFailure on error', () => {
      actions$ = of(BookingActions.createBooking({ bookingData: {} as any }));
      effects.createBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.createBookingFailure.type);
      });
      httpMock.expectOne(r => r.method === 'POST').flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('createBookingSuccess$', () => {
    it('should show success notification', () => {
      actions$ = of(BookingActions.createBookingSuccess({ booking: mockBooking }));
      effects.createBookingSuccess$.subscribe();
      expect(notificationSpy.success).toHaveBeenCalled();
    });
  });

  describe('updateBooking$', () => {
    it('should return updateBookingSuccess', () => {
      actions$ = of(BookingActions.updateBooking({ bookingId: 'b1', data: { notes: 'Updated' } }));
      effects.updateBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.updateBookingSuccess.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush(mockBooking);
    });

    it('should return updateBookingFailure on error', () => {
      actions$ = of(BookingActions.updateBooking({ bookingId: 'b1', data: {} }));
      effects.updateBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.updateBookingFailure.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('updateBookingSuccess$', () => {
    it('should show success notification', () => {
      actions$ = of(BookingActions.updateBookingSuccess({ booking: mockBooking }));
      effects.updateBookingSuccess$.subscribe();
      expect(notificationSpy.success).toHaveBeenCalled();
    });
  });

  describe('cancelBooking$', () => {
    it('should return cancelBookingSuccess', () => {
      actions$ = of(BookingActions.cancelBooking({ bookingId: 'b1', reason: 'No longer needed' }));
      effects.cancelBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.cancelBookingSuccess.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush({ ...mockBooking, status: BookingStatus.CANCELLED });
    });

    it('should return cancelBookingFailure on error', () => {
      actions$ = of(BookingActions.cancelBooking({ bookingId: 'b1' }));
      effects.cancelBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.cancelBookingFailure.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('cancelBookingSuccess$', () => {
    it('should show success notification', () => {
      actions$ = of(BookingActions.cancelBookingSuccess({ booking: mockBooking }));
      effects.cancelBookingSuccess$.subscribe();
      expect(notificationSpy.success).toHaveBeenCalled();
    });
  });

  describe('updateBookingStatus$', () => {
    it('should return updateBookingStatusSuccess', () => {
      actions$ = of(BookingActions.updateBookingStatus({ bookingId: 'b1', status: BookingStatus.COMPLETED }));
      effects.updateBookingStatus$.subscribe(action => {
        expect(action.type).toBe(BookingActions.updateBookingStatusSuccess.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush({ ...mockBooking, status: BookingStatus.COMPLETED });
    });

    it('should return failure on error', () => {
      actions$ = of(BookingActions.updateBookingStatus({ bookingId: 'b1', status: BookingStatus.COMPLETED }));
      effects.updateBookingStatus$.subscribe(action => {
        expect(action.type).toBe(BookingActions.updateBookingStatusFailure.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('loadExpertBookings$', () => {
    it('should return loadExpertBookingsSuccess', () => {
      actions$ = of(BookingActions.loadExpertBookings({ expertId: 'e1' }));
      effects.loadExpertBookings$.subscribe(action => {
        expect(action.type).toBe(BookingActions.loadExpertBookingsSuccess.type);
      });
      httpMock.expectOne(r => r.url.includes('/bookings') && r.params.get('expertId') === 'e1').flush([mockBooking]);
    });

    it('should return failure on error', () => {
      actions$ = of(BookingActions.loadExpertBookings({ expertId: 'e1' }));
      effects.loadExpertBookings$.subscribe(action => {
        expect(action.type).toBe(BookingActions.loadExpertBookingsFailure.type);
      });
      httpMock.expectOne(r => r.url.includes('/bookings')).flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('acceptBooking$', () => {
    it('should return acceptBookingSuccess', () => {
      actions$ = of(BookingActions.acceptBooking({ bookingId: 'b1' }));
      effects.acceptBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.acceptBookingSuccess.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush({ ...mockBooking, status: BookingStatus.CONFIRMED });
    });

    it('should return failure on error', () => {
      actions$ = of(BookingActions.acceptBooking({ bookingId: 'b1' }));
      effects.acceptBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.acceptBookingFailure.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('acceptBookingSuccess$', () => {
    it('should show success notification', () => {
      actions$ = of(BookingActions.acceptBookingSuccess({ booking: mockBooking }));
      effects.acceptBookingSuccess$.subscribe();
      expect(notificationSpy.success).toHaveBeenCalled();
    });
  });

  describe('rejectBooking$', () => {
    it('should return rejectBookingSuccess', () => {
      actions$ = of(BookingActions.rejectBooking({ bookingId: 'b1', reason: 'Busy' }));
      effects.rejectBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.rejectBookingSuccess.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush({ ...mockBooking, status: BookingStatus.REJECTED });
    });

    it('should return failure on error', () => {
      actions$ = of(BookingActions.rejectBooking({ bookingId: 'b1' }));
      effects.rejectBooking$.subscribe(action => {
        expect(action.type).toBe(BookingActions.rejectBookingFailure.type);
      });
      httpMock.expectOne(r => r.method === 'PATCH').flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('rejectBookingSuccess$', () => {
    it('should show success notification', () => {
      actions$ = of(BookingActions.rejectBookingSuccess({ booking: mockBooking }));
      effects.rejectBookingSuccess$.subscribe();
      expect(notificationSpy.success).toHaveBeenCalled();
    });
  });

  describe('loadFailure$', () => {
    it('should show error for loadBookingsFailure', () => {
      actions$ = of(BookingActions.loadBookingsFailure({ error: 'Err' }));
      effects.loadFailure$.subscribe();
      expect(notificationSpy.error).toHaveBeenCalled();
    });
  });

  describe('createUpdateFailure$', () => {
    it('should show error for createBookingFailure', () => {
      actions$ = of(BookingActions.createBookingFailure({ error: 'Err' }));
      effects.createUpdateFailure$.subscribe();
      expect(notificationSpy.error).toHaveBeenCalled();
    });
  });
});
