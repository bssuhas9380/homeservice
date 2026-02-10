import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, map, catchError, throwError, of } from 'rxjs';
import { User, UserRole, Customer, Expert } from '../models/user.model';

// Auth Response Interface
export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone: string;
  role: UserRole;
}

// JWT Payload Interface
interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000';
  private readonly TOKEN_KEY = 'housemate_access_token';
  private readonly USER_KEY = 'housemate_user';

  // Signals for reactive state
  private currentUserSignal = signal<User | null>(null);
  private isLoadingSignal = signal<boolean>(false);

  // Computed signals
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => !!this.currentUserSignal());
  readonly isCustomer = computed(() => this.currentUserSignal()?.role === UserRole.CUSTOMER);
  readonly isExpert = computed(() => this.currentUserSignal()?.role === UserRole.EXPERT);
  readonly isLoading = this.isLoadingSignal.asReadonly();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadUserFromStorage();
  }

  // Load user from localStorage on app init
  private loadUserFromStorage(): void {
    const token = this.getToken();
    const userJson = localStorage.getItem(this.USER_KEY);
    
    if (token && userJson) {
      try {
        const user = JSON.parse(userJson) as User;
        if (this.isTokenValid(token)) {
          this.currentUserSignal.set(user);
        } else {
          this.clearStorage();
        }
      } catch {
        this.clearStorage();
      }
    }
  }

  // Generate a simple JWT-like token (in real app, this comes from backend)
  private generateToken(user: User): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      sub: user.id,
      email: user.email,
      role: user.role,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    }));
    const signature = btoa('mock-signature');
    return `${header}.${payload}.${signature}`;
  }

  // Decode JWT token
  private decodeToken(token: string): JwtPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      return JSON.parse(atob(parts[1])) as JwtPayload;
    } catch {
      return null;
    }
  }

  // Check if token is valid
  private isTokenValid(token: string): boolean {
    const payload = this.decodeToken(token);
    if (!payload) return false;
    return payload.exp > Math.floor(Date.now() / 1000);
  }

  // Login
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);
    
    // Using json-server, we need to find user by email
    return this.http.get<User[]>(`${this.API_URL}/users`, {
      params: { email: credentials.email }
    }).pipe(
      map(users => {
        if (users.length === 0) {
          throw new Error('User not found');
        }
        
        const user = users[0];
        // In real app, password would be verified on backend
        // For demo, we accept any password
        
        const accessToken = this.generateToken(user);
        
        // Store token and user
        localStorage.setItem(this.TOKEN_KEY, accessToken);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSignal.set(user);
        
        return { accessToken, user };
      }),
      tap(() => this.isLoadingSignal.set(false)),
      catchError(error => {
        this.isLoadingSignal.set(false);
        return throwError(() => new Error(error.message || 'Login failed'));
      })
    );
  }

  // Register Customer
  registerCustomer(data: Omit<RegisterData, 'role'> & { addresses?: any[] }): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);
    
    const newUser: Partial<Customer> = {
      id: `cust-${Date.now()}`,
      email: data.email,
      name: data.name,
      phone: data.phone,
      role: UserRole.CUSTOMER,
      age: 0,
      location: { city: '', area: '' },
      addresses: data.addresses || [],
      createdAt: new Date().toISOString()
    };

    return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
      map(user => {
        const accessToken = this.generateToken(user);
        localStorage.setItem(this.TOKEN_KEY, accessToken);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSignal.set(user);
        return { accessToken, user };
      }),
      tap(() => this.isLoadingSignal.set(false)),
      catchError(error => {
        this.isLoadingSignal.set(false);
        return throwError(() => new Error('Registration failed'));
      })
    );
  }

  // Register Expert
  registerExpert(data: any): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);
    
    const newUser: Partial<Expert> = {
      id: `exp-${Date.now()}`,
      email: data.email,
      name: data.fullName,
      phone: data.mobileNumber,
      role: UserRole.EXPERT,
      age: 0,
      location: { city: data.city, area: data.address },
      skills: data.services || [],
      experience: parseInt(data.experienceYears) || 0,
      rating: 0,
      totalRatings: 0,
      languages: data.languages || [],
      hourlyRate: parseInt(data.hourlyRate) || 0,
      isOnline: false,
      isVerified: false,
      idProof: {
        type: data.idType,
        number: data.idNumber
      },
      createdAt: new Date().toISOString()
    };

    return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
      map(user => {
        const accessToken = this.generateToken(user);
        localStorage.setItem(this.TOKEN_KEY, accessToken);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSignal.set(user);
        return { accessToken, user };
      }),
      tap(() => this.isLoadingSignal.set(false)),
      catchError(error => {
        this.isLoadingSignal.set(false);
        return throwError(() => new Error('Registration failed'));
      })
    );
  }

  // Logout
  logout(): void {
    this.clearStorage();
    this.currentUserSignal.set(null);
    this.router.navigate(['/login']);
  }

  // Get current token
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUserSignal();
  }

  // Clear storage
  private clearStorage(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  // Check authentication status
  checkAuth(): Observable<boolean> {
    const token = this.getToken();
    if (!token || !this.isTokenValid(token)) {
      this.clearStorage();
      this.currentUserSignal.set(null);
      return of(false);
    }
    return of(true);
  }

  // Update user profile
  updateProfile(userData: Partial<User>): Observable<User> {
    const currentUser = this.currentUserSignal();
    if (!currentUser) {
      return throwError(() => new Error('Not authenticated'));
    }

    return this.http.patch<User>(`${this.API_URL}/users/${currentUser.id}`, userData).pipe(
      tap(updatedUser => {
        localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
        this.currentUserSignal.set(updatedUser);
      })
    );
  }
}
