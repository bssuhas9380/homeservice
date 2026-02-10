import { Routes } from '@angular/router';
import { 
  authGuard, 
  customerGuard, 
  customerRoleGuard,
  expertGuard, 
  expertRoleGuard,
  guestGuard,
  authMatchGuard,
  customerMatchGuard,
  expertMatchGuard,
  guestMatchGuard,
  bookingFormGuard
} from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent),
    title: 'HouseMate - Trusted Home Services'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
    title: 'Login - HouseMate',
    canMatch: [guestMatchGuard],
    canActivate: [guestGuard]
  },
  {
    path: 'register/customer',
    loadComponent: () => import('./features/auth/register-customer/register-customer.component').then(m => m.RegisterCustomerComponent),
    title: 'Customer Registration - HouseMate',
    canMatch: [guestMatchGuard],
    canActivate: [guestGuard]
  },
  {
    path: 'register/expert',
    loadComponent: () => import('./features/auth/register-expert/register-expert.component').then(m => m.RegisterExpertComponent),
    title: 'Expert Registration - HouseMate',
    canMatch: [guestMatchGuard],
    canActivate: [guestGuard]
  },
  // Customer Routes
  {
    path: 'customer',
    canMatch: [customerMatchGuard],
    canActivate: [authGuard, customerGuard, customerRoleGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/customer/dashboard/customer-dashboard.component').then(m => m.CustomerDashboardComponent),
        title: 'Dashboard - HouseMate'
      },
      {
        path: 'book-service',
        loadComponent: () => import('./features/customer/book-service/book-service.component').then(m => m.BookServiceComponent),
        title: 'Book a Service - HouseMate',
        canDeactivate: [bookingFormGuard]
      },
      {
        path: 'bookings',
        loadComponent: () => import('./features/customer/my-bookings/my-bookings.component').then(m => m.MyBookingsComponent),
        title: 'My Bookings - HouseMate'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  // Expert Routes (placeholder for future)
  {
    path: 'expert',
    canMatch: [expertMatchGuard],
    canActivate: [authGuard, expertGuard, expertRoleGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/customer/dashboard/customer-dashboard.component').then(m => m.CustomerDashboardComponent), // Placeholder
        title: 'Expert Dashboard - HouseMate'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
