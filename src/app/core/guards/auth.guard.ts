import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/user.model';

// Auth Guard - Protects routes that require authentication
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Store the attempted URL for redirecting after login
  router.navigate(['/login'], {
    queryParams: { returnUrl: state.url }
  });
  return false;
};

// Customer Guard - Only allows customers
export const customerGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url, role: 'customer' }
    });
    return false;
  }

  if (authService.isCustomer()) {
    return true;
  }

  // If logged in but not a customer, redirect to appropriate dashboard
  router.navigate(['/expert/dashboard']);
  return false;
};

// Expert Guard - Only allows experts
export const expertGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url, role: 'expert' }
    });
    return false;
  }

  if (authService.isExpert()) {
    return true;
  }

  // If logged in but not an expert, redirect to customer dashboard
  router.navigate(['/customer/dashboard']);
  return false;
};

// Guest Guard - Only allows non-authenticated users (for login/register pages)
export const guestGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true;
  }

  // If already logged in, redirect to appropriate dashboard
  const user = authService.getCurrentUser();
  if (user?.role === UserRole.CUSTOMER) {
    router.navigate(['/customer/dashboard']);
  } else if (user?.role === UserRole.EXPERT) {
    router.navigate(['/expert/dashboard']);
  } else {
    router.navigate(['/']);
  }
  
  return false;
};
