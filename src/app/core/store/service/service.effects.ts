import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as ServiceActions from './service.actions';
import { Service, Expert } from './service.actions';
import { NotificationService, ERROR_MESSAGES } from '../../services/notification.service';

@Injectable()
export class ServiceEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);
  private readonly notificationService = inject(NotificationService);

  private readonly API_URL = 'http://localhost:3000';

  // Load Services Effect
  loadServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServiceActions.loadServices),
      exhaustMap(() =>
        this.http.get<Service[]>(`${this.API_URL}/services`).pipe(
          map(services => ServiceActions.loadServicesSuccess({ services })),
          catchError(error => of(ServiceActions.loadServicesFailure({ 
            error: error.message || ERROR_MESSAGES.GENERIC.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Load Experts Effect
  loadExperts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServiceActions.loadExperts),
      exhaustMap(({ serviceName }) =>
        this.http.get<any[]>(`${this.API_URL}/users`, {
          params: { role: 'EXPERT' }
        }).pipe(
          map(users => {
            let experts = users;
            
            // Filter by service skill if provided
            if (serviceName) {
              experts = users.filter(u => 
                u.skills?.some((s: string) => 
                  s.toLowerCase().includes(serviceName.toLowerCase())
                )
              );
            }

            // Map to Expert interface
            const mappedExperts: Expert[] = experts.map(e => ({
              id: e.id,
              name: e.name,
              photo: e.photo,
              rating: e.rating || 4.5,
              totalRatings: e.totalRatings || 0,
              experience: e.experience || 0,
              hourlyRate: e.hourlyRate || 299,
              distance: Math.random() * 5 + 0.5, // Mock distance
              skills: e.skills || [],
              languages: e.languages || ['Hindi', 'English'],
              isVerified: e.isVerified || false,
              isOnline: e.isOnline || false,
              phone: e.phone
            }));

            return ServiceActions.loadExpertsSuccess({ experts: mappedExperts });
          }),
          catchError(error => of(ServiceActions.loadExpertsFailure({ 
            error: error.message || ERROR_MESSAGES.GENERIC.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Error Effects
  loadFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ServiceActions.loadServicesFailure,
        ServiceActions.loadExpertsFailure
      ),
      tap(({ error }) => {
        this.notificationService.error('Loading Error', error);
      })
    ),
    { dispatch: false }
  );
}
