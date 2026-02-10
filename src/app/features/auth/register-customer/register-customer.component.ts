import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register-customer.component.html',
  styleUrl: './register-customer.component.scss'
})
export class RegisterCustomerComponent {
  registrationForm: FormGroup;
  selectedRole: 'customer' | 'expert' = 'customer';
  isDropdownOpen = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
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
      console.log('Registration submitted:', this.registrationForm.value);
      this.router.navigate(['/login'], { queryParams: { role: 'customer' } });
    }
  }
}

