import { AuthState } from './auth/auth.reducer';
import { BookingState } from './booking/booking.reducer';
import { ServiceState } from './service/service.reducer';

export interface AppState {
  auth: AuthState;
  bookings: BookingState;
  services: ServiceState;
}
