import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  selectedRole: 'customer' | 'expert' = 'customer';
  isDropdownOpen = false;
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['role'] === 'expert') {
        this.selectedRole = 'expert';
      }
    });

    // If already logged in, redirect to dashboard
    if (this.authService.isAuthenticated()) {
      const user = this.authService.currentUser();
      if (user?.role === UserRole.CUSTOMER) {
        this.router.navigate(['/customer/dashboard']);
      } else if (user?.role === UserRole.EXPERT) {
        this.router.navigate(['/expert/dashboard']);
      }
    }
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
      this.isLoading.set(true);
      this.errorMessage.set('');

      const { email, password } = this.loginForm.value;

      this.authService.login({ email, password }).subscribe({
        next: (response) => {
          this.isLoading.set(false);
          
          // Verify that user role matches selected role
          const expectedRole = this.selectedRole === 'customer' ? UserRole.CUSTOMER : UserRole.EXPERT;
          if (response.user.role !== expectedRole) {
            this.authService.logout();
            this.errorMessage.set(`This account is registered as ${response.user.role.toLowerCase()}. Please select the correct login type.`);
            return;
          }
          
          // Navigate based on role
          if (response.user.role === UserRole.CUSTOMER) {
            this.router.navigate(['/customer/dashboard']);
          } else {
            this.router.navigate(['/expert/dashboard']);
          }
        },
        error: (error) => {
          this.isLoading.set(false);
          this.errorMessage.set(error.message || 'Login failed. Please check your credentials.');
        }
      });
    }
  }

  getRegisterLink(): string {
    return this.selectedRole === 'customer' ? '/register/customer' : '/register/expert';
  }
}

