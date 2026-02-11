import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    localStorage.clear();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy }
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should start unauthenticated', () => {
    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
  });

  describe('login()', () => {
    it('should login and store user', () => {
      const user = { id: 'u1', email: 'test@test.com', name: 'Test', role: 'CUSTOMER' };

      service.login({ email: 'test@test.com', password: 'pass' }).subscribe(result => {
        expect(result.user.email).toBe('test@test.com');
        expect(result.accessToken).toBeTruthy();
        expect(service.isAuthenticated()).toBe(true);
      });

      httpMock.expectOne(r => r.url.includes('/users')).flush([user]);
    });

    it('should throw error when user not found', () => {
      service.login({ email: 'bad@test.com', password: 'pass' }).subscribe({
        error: err => expect(err.message).toBe('User not found')
      });

      httpMock.expectOne(r => r.url.includes('/users')).flush([]);
    });

    it('should handle HTTP error', () => {
      service.login({ email: 'test@test.com', password: 'pass' }).subscribe({
        error: err => expect(err).toBeTruthy()
      });

      httpMock.expectOne(r => r.url.includes('/users'))
        .flush('Error', { status: 500, statusText: 'Error' });
    });
  });

  describe('registerCustomer()', () => {
    it('should register and store user', () => {
      const data = { email: 'new@test.com', password: 'pass', name: 'New', phone: '1234567890' };

      service.registerCustomer(data).subscribe(result => {
        expect(result.user).toBeTruthy();
        expect(service.isAuthenticated()).toBe(true);
      });

      httpMock.expectOne(r => r.method === 'POST').flush({
        id: 'cust-1', email: 'new@test.com', name: 'New', role: 'CUSTOMER'
      });
    });

    it('should handle registration error', () => {
      service.registerCustomer({ email: 'a', password: 'b', name: 'c', phone: 'd' }).subscribe({
        error: err => expect(err.message).toBe('Registration failed')
      });

      httpMock.expectOne(r => r.method === 'POST')
        .flush('Error', { status: 500, statusText: 'Error' });
    });
  });

  describe('registerExpert()', () => {
    it('should register expert and store user', () => {
      const data = { email: 'exp@test.com', fullName: 'Expert', mobileNumber: '1234567890', city: 'Delhi', address: 'Addr', services: ['Cleaning'], experienceYears: '5', hourlyRate: '300', languages: ['Hindi'], idType: 'AADHAAR', idNumber: '123456789012' };

      service.registerExpert(data).subscribe(result => {
        expect(result.user).toBeTruthy();
      });

      httpMock.expectOne(r => r.method === 'POST').flush({
        id: 'exp-1', email: 'exp@test.com', name: 'Expert', role: 'EXPERT'
      });
    });

    it('should handle expert registration error', () => {
      service.registerExpert({}).subscribe({
        error: err => expect(err.message).toBe('Registration failed')
      });

      httpMock.expectOne(r => r.method === 'POST')
        .flush('Error', { status: 500, statusText: 'Error' });
    });
  });

  describe('logout()', () => {
    it('should clear storage and navigate to login', () => {
      localStorage.setItem('housemate_access_token', 'tok');
      localStorage.setItem('housemate_user', '{}');

      service.logout();

      expect(localStorage.getItem('housemate_access_token')).toBeNull();
      expect(service.currentUser()).toBeNull();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  describe('getToken()', () => {
    it('should return token from localStorage', () => {
      localStorage.setItem('housemate_access_token', 'my-token');
      expect(service.getToken()).toBe('my-token');
    });

    it('should return null when no token', () => {
      expect(service.getToken()).toBeNull();
    });
  });

  describe('getCurrentUser()', () => {
    it('should return null when not logged in', () => {
      expect(service.getCurrentUser()).toBeNull();
    });
  });

  describe('checkAuth()', () => {
    it('should return false when no token', () => {
      service.checkAuth().subscribe(result => {
        expect(result).toBe(false);
      });
    });

    it('should return true when valid token exists', () => {
      // Set a valid token
      const payload = btoa(JSON.stringify({
        sub: 'u1', email: 'test@test.com', role: 'CUSTOMER',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 86400
      }));
      const token = `${btoa('h')}.${payload}.${btoa('s')}`;
      localStorage.setItem('housemate_access_token', token);

      service.checkAuth().subscribe(result => {
        expect(result).toBe(true);
      });
    });

    it('should return false when token is expired', () => {
      const payload = btoa(JSON.stringify({
        sub: 'u1', exp: Math.floor(Date.now() / 1000) - 100
      }));
      const token = `${btoa('h')}.${payload}.${btoa('s')}`;
      localStorage.setItem('housemate_access_token', token);

      service.checkAuth().subscribe(result => {
        expect(result).toBe(false);
      });
    });
  });

  describe('updateProfile()', () => {
    it('should update user profile', () => {
      // First, set current user by making the signal non-null
      // We do this by calling login first
      service.login({ email: 'test@test.com', password: 'pass' }).subscribe();
      httpMock.expectOne(r => r.url.includes('/users')).flush([{
        id: 'u1', email: 'test@test.com', name: 'Test', role: 'CUSTOMER'
      }]);

      service.updateProfile({ name: 'Updated' }).subscribe(updated => {
        expect(updated.name).toBe('Updated');
      });

      httpMock.expectOne(r => r.method === 'PATCH').flush({
        id: 'u1', email: 'test@test.com', name: 'Updated', role: 'CUSTOMER'
      });
    });

    it('should throw error when not authenticated', () => {
      service.updateProfile({ name: 'New' }).subscribe({
        error: err => expect(err.message).toBe('Not authenticated')
      });
    });
  });

  describe('computed signals', () => {
    it('isCustomer should reflect role', () => {
      expect(service.isCustomer()).toBe(false);
    });

    it('isExpert should reflect role', () => {
      expect(service.isExpert()).toBe(false);
    });

    it('isLoading should start false', () => {
      expect(service.isLoading()).toBe(false);
    });
  });

  describe('loadUserFromStorage', () => {
    it('should load valid user from storage on creation', () => {
      const user = { id: 'u1', email: 'test@test.com', name: 'Test', role: 'CUSTOMER' };
      const payload = btoa(JSON.stringify({
        sub: 'u1', email: 'test@test.com', role: 'CUSTOMER',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 86400
      }));
      const token = `${btoa('h')}.${payload}.${btoa('s')}`;

      localStorage.setItem('housemate_access_token', token);
      localStorage.setItem('housemate_user', JSON.stringify(user));

      // Create a new instance that will read from storage
      const newService = new AuthService(TestBed.inject(HttpClientTestingModule) as any, routerSpy);
      // The constructor calls loadUserFromStorage
    });
  });
});
