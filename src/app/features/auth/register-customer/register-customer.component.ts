import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { selectAuthLoading, selectAuthError, selectRegistrationSuccess } from '../../../core/store/auth/auth.selectors';
import { NotificationService } from '../../../core/services/notification.service';

// Custom validator for password match
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-register-customer',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register-customer.component.html',
  styleUrl: './register-customer.component.scss'
})
export class RegisterCustomerComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  // Form
  registrationForm: FormGroup;
  
  // UI State
  selectedRole: 'customer' | 'expert' = 'customer';
  isDropdownOpen = false;
  isLoading = signal(false);
  errorMessage = signal('');

  constructor() {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  ngOnInit(): void {
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

    // Handle successful registration
    this.store.select(selectRegistrationSuccess).pipe(
      takeUntil(this.destroy$),
      filter(success => success === true)
    ).subscribe(() => {
      this.notification.success('Registration Successful', 'Your account has been created. Please log in.');
      this.router.navigate(['/login'], { queryParams: { role: 'customer' } });
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
    
    if (role === 'expert') {
      this.router.navigate(['/register/expert']);
    }
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.errorMessage.set('');
      const { fullName, email, mobileNumber, password } = this.registrationForm.value;
      
      // Dispatch register action - map form fields to expected data structure
      this.store.dispatch(AuthActions.registerCustomer({
        data: { 
          name: fullName, 
          email, 
          phone: mobileNumber, 
          password 
        }
      }));
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.get(key)?.markAsTouched();
      });
      this.notification.warning('Validation Error', 'Please fill in all required fields correctly.');
    }
  }
}

