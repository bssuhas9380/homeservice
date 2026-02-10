import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from './auth.actions';
import { User } from './auth.actions';
import { NotificationService, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../services/notification.service';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);

  private readonly API_URL = 'http://localhost:3000';

  // Login Effect
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ credentials }) =>
        this.http.get<User[]>(`${this.API_URL}/users`, {
          params: { email: credentials.email }
        }).pipe(
          map(users => {
            const user = users.find(u => 
              u.email === credentials.email && (u as any).password === credentials.password
            );
            
            if (user) {
              // Generate mock token
              const token = btoa(JSON.stringify({ userId: user.id, timestamp: Date.now() }));
              
              // Store in localStorage
              localStorage.setItem('auth_token', token);
              localStorage.setItem('auth_user', JSON.stringify(user));
              
              return AuthActions.loginSuccess({ user, token });
            }
            
            return AuthActions.loginFailure({ error: ERROR_MESSAGES.AUTH.LOGIN_FAILED });
          }),
          catchError(error => of(AuthActions.loginFailure({ 
            error: error.message || ERROR_MESSAGES.AUTH.LOGIN_FAILED 
          })))
        )
      )
    )
  );

  // Login Success Effect - Show notification and navigate
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ user }) => {
        this.notificationService.success('Welcome!', SUCCESS_MESSAGES.AUTH.LOGIN_SUCCESS);
        
        // Navigate based on role
        if (user.role === 'CUSTOMER') {
          this.router.navigate(['/customer/dashboard']);
        } else if (user.role === 'EXPERT') {
          this.router.navigate(['/expert/dashboard']);
        }
      })
    ),
    { dispatch: false }
  );

  // Login Failure Effect - Show error notification
  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      tap(({ error }) => {
        this.notificationService.error('Login Failed', error);
      })
    ),
    { dispatch: false }
  );

  // Register Customer Effect
  registerCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerCustomer),
      exhaustMap(({ data }) =>
        // Check if email already exists
        this.http.get<User[]>(`${this.API_URL}/users`, {
          params: { email: data.email }
        }).pipe(
          exhaustMap(existingUsers => {
            if (existingUsers.length > 0) {
              return of(AuthActions.registerCustomerFailure({ 
                error: ERROR_MESSAGES.AUTH.EMAIL_EXISTS 
              }));
            }

            // Create new user
            const newUser: Partial<User> & { password: string } = {
              id: `cust-${Date.now()}`,
              ...data,
              role: 'CUSTOMER',
              createdAt: new Date().toISOString()
            };

            return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
              map(user => {
                const token = btoa(JSON.stringify({ userId: user.id, timestamp: Date.now() }));
                localStorage.setItem('auth_token', token);
                localStorage.setItem('auth_user', JSON.stringify(user));
                return AuthActions.registerCustomerSuccess({ user, token });
              }),
              catchError(error => of(AuthActions.registerCustomerFailure({ 
                error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
              })))
            );
          }),
          catchError(error => of(AuthActions.registerCustomerFailure({ 
            error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
          })))
        )
      )
    )
  );

  // Register Customer Success Effect
  registerCustomerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerCustomerSuccess),
      tap(() => {
        this.notificationService.success('Welcome!', SUCCESS_MESSAGES.AUTH.REGISTRATION_SUCCESS);
        this.router.navigate(['/customer/dashboard']);
      })
    ),
    { dispatch: false }
  );

  // Register Expert Effect
  registerExpert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerExpert),
      exhaustMap(({ data }) => {
        // Extract email from personal info - expert registration uses different structure
        const email = (data as any).email || (data.personalInfo as any)?.email || '';
        
        return this.http.get<User[]>(`${this.API_URL}/users`, {
          params: { email }
        }).pipe(
          exhaustMap(existingUsers => {
            if (existingUsers.length > 0 && email) {
              return of(AuthActions.registerExpertFailure({ 
                error: ERROR_MESSAGES.AUTH.EMAIL_EXISTS 
              }));
            }

            const newUser: Partial<User> & { password?: string; personalInfo?: any; serviceProfile?: any; idVerification?: any } = {
              id: `exp-${Date.now()}`,
              name: data.personalInfo?.fullName,
              phone: data.personalInfo?.mobileNumber,
              email: email,
              role: 'EXPERT',
              skills: data.serviceProfile?.services || [],
              experience: parseInt(data.serviceProfile?.experienceYears || '0'),
              languages: data.serviceProfile?.languages || [],
              hourlyRate: data.serviceProfile?.hourlyRate || 0,
              location: {
                city: data.personalInfo?.city || '',
                area: data.personalInfo?.address || ''
              },
              rating: 0,
              totalRatings: 0,
              isVerified: false,
              isOnline: false,
              createdAt: new Date().toISOString(),
              // Store additional info
              personalInfo: data.personalInfo,
              serviceProfile: data.serviceProfile,
              idVerification: data.idVerification
            };

            return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
              map(user => {
                const token = btoa(JSON.stringify({ userId: user.id, timestamp: Date.now() }));
                localStorage.setItem('auth_token', token);
                localStorage.setItem('auth_user', JSON.stringify(user));
                return AuthActions.registerExpertSuccess({ user, token });
              }),
              catchError(error => of(AuthActions.registerExpertFailure({ 
                error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
              })))
            );
          }),
          catchError(error => of(AuthActions.registerExpertFailure({ 
            error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
          })))
        );
      })
    )
  );

  // Register Expert Success Effect
  registerExpertSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerExpertSuccess),
      tap(() => {
        this.notificationService.success('Welcome!', SUCCESS_MESSAGES.AUTH.REGISTRATION_SUCCESS);
        this.router.navigate(['/expert/dashboard']);
      })
    ),
    { dispatch: false }
  );

  // Registration Failure Effects
  registerFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerCustomerFailure, AuthActions.registerExpertFailure),
      tap(({ error }) => {
        this.notificationService.error('Registration Failed', error);
      })
    ),
    { dispatch: false }
  );

  // Logout Effect
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
      }),
      map(() => AuthActions.logoutSuccess())
    )
  );

  // Logout Success Effect
  logoutSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutSuccess),
      tap(() => {
        this.notificationService.info('Goodbye!', SUCCESS_MESSAGES.AUTH.LOGOUT_SUCCESS);
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false }
  );

  // Check Session Effect
  checkSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkSession),
      map(() => {
        const token = localStorage.getItem('auth_token');
        const userJson = localStorage.getItem('auth_user');

        if (token && userJson) {
          try {
            const user = JSON.parse(userJson) as User;
            return AuthActions.sessionValid({ user, token });
          } catch {
            return AuthActions.sessionInvalid();
          }
        }
        return AuthActions.sessionInvalid();
      })
    )
  );

  // Update Profile Effect
  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.updateProfile),
      exhaustMap(({ data }) => {
        const userJson = localStorage.getItem('auth_user');
        if (!userJson) {
          return of(AuthActions.updateProfileFailure({ error: 'Not authenticated' }));
        }

        const currentUser = JSON.parse(userJson) as User;

        return this.http.patch<User>(`${this.API_URL}/users/${currentUser.id}`, data).pipe(
          map(updatedUser => {
            localStorage.setItem('auth_user', JSON.stringify(updatedUser));
            return AuthActions.updateProfileSuccess({ user: updatedUser });
          }),
          catchError(error => of(AuthActions.updateProfileFailure({ 
            error: error.message || 'Failed to update profile' 
          })))
        );
      })
    )
  );

  // Update Profile Success Effect
  updateProfileSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.updateProfileSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.PROFILE.UPDATE_SUCCESS);
      })
    ),
    { dispatch: false }
  );
}
