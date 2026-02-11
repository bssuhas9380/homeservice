import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as BookingActions from './booking.actions';
import { Booking, BookingStatus, PaymentStatus } from './booking.actions';
import { NotificationService, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../services/notification.service';

@Injectable()
export class BookingEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);

  private readonly API_URL = 'http://localhost:3000';

  // Load Bookings Effect
  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBookings),
      exhaustMap(({ customerId }) =>
        this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
          params: { customerId }
        }).pipe(
          map(bookings => BookingActions.loadBookingsSuccess({ bookings })),
          catchError(error => of(BookingActions.loadBookingsFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Load Single Booking Effect
  loadBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBooking),
      exhaustMap(({ bookingId }) =>
        this.http.get<Booking>(`${this.API_URL}/bookings/${bookingId}`).pipe(
          map(booking => BookingActions.loadBookingSuccess({ booking })),
          catchError(error => of(BookingActions.loadBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.NOT_FOUND 
          })))
        )
      )
    )
  );

  // Create Booking Effect
  createBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.createBooking),
      exhaustMap(({ bookingData }) => {
        // Generate 6-digit OTP for expert verification
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        const newBooking: Partial<Booking> = {
          ...bookingData,
          id: `book-${Date.now()}`,
          otp,
          status: BookingStatus.PENDING,
          paymentStatus: PaymentStatus.PAID,
          createdAt: new Date().toISOString()
        };

        return this.http.post<Booking>(`${this.API_URL}/bookings`, newBooking).pipe(
          map(booking => BookingActions.createBookingSuccess({ booking })),
          catchError(error => of(BookingActions.createBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.CREATE_FAILED 
          })))
        );
      })
    )
  );

  // Create Booking Success Effect
  createBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.createBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.BOOKING.CREATE_SUCCESS);
      })
    ),
    { dispatch: false }
  );

  // Update Booking Effect
  updateBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.updateBooking),
      exhaustMap(({ bookingId, data }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          ...data,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.updateBookingSuccess({ booking })),
          catchError(error => of(BookingActions.updateBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Update Booking Success Effect
  updateBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.updateBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.BOOKING.UPDATE_SUCCESS);
      })
    ),
    { dispatch: false }
  );

  // Cancel Booking Effect
  cancelBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.cancelBooking),
      exhaustMap(({ bookingId, reason }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status: BookingStatus.CANCELLED,
          cancellationReason: reason,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.cancelBookingSuccess({ booking })),
          catchError(error => of(BookingActions.cancelBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.CANCEL_FAILED 
          })))
        )
      )
    )
  );

  // Cancel Booking Success Effect
  cancelBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.cancelBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.BOOKING.CANCEL_SUCCESS);
      })
    ),
    { dispatch: false }
  );

  // Update Status Effect
  updateBookingStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.updateBookingStatus),
      exhaustMap(({ bookingId, status }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.updateBookingStatusSuccess({ booking })),
          catchError(error => of(BookingActions.updateBookingStatusFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Load Expert Bookings Effect
  loadExpertBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadExpertBookings),
      exhaustMap(({ expertId }) =>
        this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
          params: { expertId }
        }).pipe(
          map(bookings => BookingActions.loadExpertBookingsSuccess({ bookings })),
          catchError(error => of(BookingActions.loadExpertBookingsFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Accept Booking Effect
  acceptBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.acceptBooking),
      exhaustMap(({ bookingId }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status: BookingStatus.CONFIRMED,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.acceptBookingSuccess({ booking })),
          catchError(error => of(BookingActions.acceptBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Accept Booking Success
  acceptBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.acceptBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', 'Booking accepted successfully!');
      })
    ),
    { dispatch: false }
  );

  // Reject Booking Effect
  rejectBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.rejectBooking),
      exhaustMap(({ bookingId, reason }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status: BookingStatus.REJECTED,
          cancellationReason: reason || 'Rejected by expert',
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.rejectBookingSuccess({ booking })),
          catchError(error => of(BookingActions.rejectBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Reject Booking Success
  rejectBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.rejectBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', 'Booking rejected.');
      })
    ),
    { dispatch: false }
  );

  // Error Effects
  loadFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        BookingActions.loadBookingsFailure,
        BookingActions.loadBookingFailure,
        BookingActions.loadExpertBookingsFailure
      ),
      tap(({ error }) => {
        this.notificationService.error('Loading Error', error);
      })
    ),
    { dispatch: false }
  );

  createUpdateFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        BookingActions.createBookingFailure,
        BookingActions.updateBookingFailure,
        BookingActions.cancelBookingFailure,
        BookingActions.updateBookingStatusFailure,
        BookingActions.acceptBookingFailure,
        BookingActions.rejectBookingFailure
      ),
      tap(({ error }) => {
        this.notificationService.error('Operation Failed', error);
      })
    ),
    { dispatch: false }
  );
}
