import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { selectIsAuthenticated, selectAuthLoading, selectAuthError, selectUser } from '../../../core/store/auth/auth.selectors';
import { UserRole } from '../../../core/models/user.model';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  // Form
  loginForm: FormGroup;
  
  // UI State
  selectedRole: 'customer' | 'expert' = 'customer';
  isDropdownOpen = false;
  
  // NgRx Observables
  isLoading = signal(false);
  errorMessage = signal('');

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Get role from query params
    this.route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      if (params['role'] === 'expert') {
        this.selectedRole = 'expert';
      }
    });

    // Subscribe to loading state
    this.store.select(selectAuthLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => this.isLoading.set(loading));

    // Subscribe to auth errors
    this.store.select(selectAuthError).pipe(
      takeUntil(this.destroy$),
      filter(error => error !== null)
    ).subscribe(error => {
      this.errorMessage.set(error || '');
    });

    // Handle successful authentication - redirect to dashboard
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (user) {
        // Verify that user role matches selected role
        const expectedRole = this.selectedRole === 'customer' ? UserRole.CUSTOMER : UserRole.EXPERT;
        if (user.role !== expectedRole) {
          this.store.dispatch(AuthActions.logout());
          this.errorMessage.set(`This account is registered as ${user.role.toLowerCase()}. Please select the correct login type.`);
          return;
        }

        // Navigate based on role
        if (user.role === UserRole.CUSTOMER) {
          this.router.navigate(['/customer/dashboard']);
        } else {
          this.router.navigate(['/expert/dashboard']);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectRole(role: 'customer' | 'expert'): void {
    this.selectedRole = role;
    this.isDropdownOpen = false;
    this.errorMessage.set('');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.errorMessage.set('');
      const { email, password } = this.loginForm.value;
      
      // Dispatch login action
      this.store.dispatch(AuthActions.login({ 
        credentials: { email, password } 
      }));
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
      this.notification.warning('Validation Error', 'Please fill in all required fields correctly.');
    }
  }

  getRegisterLink(): string {
    return this.selectedRole === 'customer' ? '/register/customer' : '/register/expert';
  }
}

