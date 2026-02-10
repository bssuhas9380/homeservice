import { inject } from '@angular/core';
import { 
  Router, 
  CanActivateFn, 
  CanMatchFn,
  CanDeactivateFn,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,
  Route,
  UrlSegment
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectIsCustomer, selectIsExpert, selectUser } from '../store/auth/auth.selectors';
import { UserRole } from '../models/user.model';
import { NotificationService } from '../services/notification.service';

/**
 * Interface for components that need unsaved changes confirmation
 */
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// ============================================
// canActivate Guards
// ============================================

/**
 * Auth Guard - Protects routes that require authentication
 * Uses NgRx store for state management
 */
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }

      notification.warning('Authentication Required', 'Please log in to access this page.');
      router.navigate(['/login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    })
  );
};

/**
 * Customer Guard - Only allows customers to access protected routes
 */
export const customerGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map(isAuthenticated => {
      if (!isAuthenticated) {
        notification.warning('Authentication Required', 'Please log in as a customer to access this page.');
        router.navigate(['/login'], {
          queryParams: { returnUrl: state.url, role: 'customer' }
        });
        return false;
      }

      return true;
    })
  );
};

/**
 * Customer Role Guard - Verifies user has customer role
 */
export const customerRoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return store.select(selectIsCustomer).pipe(
    take(1),
    map(isCustomer => {
      if (isCustomer) {
        return true;
      }

      notification.error('Access Denied', 'This page is only available for customers.');
      router.navigate(['/expert/dashboard']);
      return false;
    })
  );
};

/**
 * Expert Guard - Only allows experts to access protected routes
 */
export const expertGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map(isAuthenticated => {
      if (!isAuthenticated) {
        notification.warning('Authentication Required', 'Please log in as an expert to access this page.');
        router.navigate(['/login'], {
          queryParams: { returnUrl: state.url, role: 'expert' }
        });
        return false;
      }

      return true;
    })
  );
};

/**
 * Expert Role Guard - Verifies user has expert role
 */
export const expertRoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return store.select(selectIsExpert).pipe(
    take(1),
    map(isExpert => {
      if (isExpert) {
        return true;
      }

      notification.error('Access Denied', 'This page is only available for experts.');
      router.navigate(['/customer/dashboard']);
      return false;
    })
  );
};

/**
 * Guest Guard - Only allows non-authenticated users (for login/register pages)
 */
export const guestGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectUser).pipe(
    take(1),
    map(user => {
      if (!user) {
        return true;
      }

      // If already logged in, redirect to appropriate dashboard
      if (user.role === UserRole.CUSTOMER) {
        router.navigate(['/customer/dashboard']);
      } else if (user.role === UserRole.EXPERT) {
        router.navigate(['/expert/dashboard']);
      } else {
        router.navigate(['/']);
      }
      
      return false;
    })
  );
};

// ============================================
// canMatch Guards (Route-level protection)
// ============================================

/**
 * Auth Match Guard - Prevents route from being matched if not authenticated
 */
export const authMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return store.select(selectIsAuthenticated).pipe(
    take(1)
  );
};

/**
 * Customer Match Guard - Prevents route from being matched if not a customer
 */
export const customerMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return store.select(selectIsCustomer).pipe(
    take(1)
  );
};

/**
 * Expert Match Guard - Prevents route from being matched if not an expert
 */
export const expertMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return store.select(selectIsExpert).pipe(
    take(1)
  );
};

/**
 * Guest Match Guard - Prevents route from being matched if authenticated
 */
export const guestMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return store.select(selectIsAuthenticated).pipe(
    take(1),
    map(isAuthenticated => !isAuthenticated)
  );
};

// ============================================
// canDeactivate Guards
// ============================================

/**
 * Unsaved Changes Guard - Prompts user before leaving if there are unsaved changes
 */
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  if (component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};

/**
 * Booking Form Guard - Confirms exit from booking flow
 */
export const bookingFormGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const notification = inject(NotificationService);
  
  // Allow navigation to payment confirmation
  if (nextState.url.includes('booking-confirmation') || nextState.url.includes('my-bookings')) {
    return true;
  }

  if (component.canDeactivate) {
    return component.canDeactivate();
  }

  // Default confirmation for booking form
  return window.confirm('You have unsaved changes in your booking. Are you sure you want to leave?');
};
