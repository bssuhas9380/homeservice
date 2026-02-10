import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { authReducer } from './core/store/auth/auth.reducer';
import { bookingReducer } from './core/store/booking/booking.reducer';
import { serviceReducer } from './core/store/service/service.reducer';
import { AuthEffects } from './core/store/auth/auth.effects';
import { BookingEffects } from './core/store/booking/booking.effects';
import { ServiceEffects } from './core/store/service/service.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
    
    // NgRx Store
    provideStore({
      auth: authReducer,
      bookings: bookingReducer,
      services: serviceReducer
    }),
    
    // NgRx Effects
    provideEffects([AuthEffects, BookingEffects, ServiceEffects]),
    
    // NgRx DevTools (only in development)
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true
    })
  ]
};
