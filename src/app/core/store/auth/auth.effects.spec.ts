import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';
import { User } from './auth.actions';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let actions$: Observable<any>;
  let httpMock: HttpTestingController;
  let routerSpy: jasmine.SpyObj<Router>;
  let notificationSpy: jasmine.SpyObj<NotificationService>;

  const mockUser: User = {
    id: 'user-1', email: 'test@test.com', name: 'Test',
    phone: '9876543210', role: 'CUSTOMER'
  };

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    notificationSpy = jasmine.createSpyObj('NotificationService', ['success', 'error', 'warning', 'info']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: Router, useValue: routerSpy },
        { provide: NotificationService, useValue: notificationSpy }
      ]
    });

    effects = TestBed.inject(AuthEffects);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  describe('login$', () => {
    it('should return loginSuccess when user found', () => {
      const credentials = { email: 'test@test.com', password: 'pass' };
      actions$ = of(AuthActions.login({ credentials }));

      effects.login$.subscribe(action => {
        expect(action.type).toBe(AuthActions.loginSuccess.type);
      });

      const req = httpMock.expectOne(r => r.url.includes('/users'));
      req.flush([{ ...mockUser, password: 'pass' }]);
    });

    it('should return loginFailure when user not found', () => {
      const credentials = { email: 'test@test.com', password: 'wrong' };
      actions$ = of(AuthActions.login({ credentials }));

      effects.login$.subscribe(action => {
        expect(action.type).toBe(AuthActions.loginFailure.type);
      });

      const req = httpMock.expectOne(r => r.url.includes('/users'));
      req.flush([{ ...mockUser, password: 'pass' }]);
    });

    it('should return loginFailure on HTTP error', () => {
      const credentials = { email: 'test@test.com', password: 'pass' };
      actions$ = of(AuthActions.login({ credentials }));

      effects.login$.subscribe(action => {
        expect(action.type).toBe(AuthActions.loginFailure.type);
      });

      const req = httpMock.expectOne(r => r.url.includes('/users'));
      req.flush('Error', { status: 500, statusText: 'Server Error' });
    });
  });

  describe('loginSuccess$', () => {
    it('should navigate customer to dashboard', () => {
      actions$ = of(AuthActions.loginSuccess({ user: mockUser, token: 'tok' }));
      effects.loginSuccess$.subscribe();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/customer/dashboard']);
    });

    it('should navigate expert to dashboard', () => {
      const expertUser = { ...mockUser, role: 'EXPERT' as const };
      actions$ = of(AuthActions.loginSuccess({ user: expertUser, token: 'tok' }));
      effects.loginSuccess$.subscribe();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/expert/dashboard']);
    });

    it('should show success notification', () => {
      actions$ = of(AuthActions.loginSuccess({ user: mockUser, token: 'tok' }));
      effects.loginSuccess$.subscribe();
      expect(notificationSpy.success).toHaveBeenCalled();
    });
  });

  describe('loginFailure$', () => {
    it('should show error notification', () => {
      actions$ = of(AuthActions.loginFailure({ error: 'Failed' }));
      effects.loginFailure$.subscribe();
      expect(notificationSpy.error).toHaveBeenCalledWith('Login Failed', 'Failed');
    });
  });

  describe('registerCustomer$', () => {
    it('should return registerCustomerSuccess when email is new', () => {
      const data = { name: 'Test', email: 'new@test.com', phone: '1234567890', password: 'pass' };
      actions$ = of(AuthActions.registerCustomer({ data }));

      effects.registerCustomer$.subscribe(action => {
        expect(action.type).toBe(AuthActions.registerCustomerSuccess.type);
      });

      // First request — check email
      const emailReq = httpMock.expectOne(r => r.url.includes('/users') && r.params.has('email'));
      emailReq.flush([]);

      // Second request — create user
      const createReq = httpMock.expectOne(r => r.method === 'POST');
      createReq.flush({ ...mockUser, id: 'cust-1' });
    });

    it('should return failure when email exists', () => {
      const data = { name: 'Test', email: 'existing@test.com', phone: '1234567890', password: 'pass' };
      actions$ = of(AuthActions.registerCustomer({ data }));

      effects.registerCustomer$.subscribe(action => {
        expect(action.type).toBe(AuthActions.registerCustomerFailure.type);
      });

      const emailReq = httpMock.expectOne(r => r.url.includes('/users'));
      emailReq.flush([mockUser]);
    });

    it('should return failure on HTTP error during email check', () => {
      const data = { name: 'Test', email: 'new@test.com', phone: '1234567890', password: 'pass' };
      actions$ = of(AuthActions.registerCustomer({ data }));

      effects.registerCustomer$.subscribe(action => {
        expect(action.type).toBe(AuthActions.registerCustomerFailure.type);
      });

      const req = httpMock.expectOne(r => r.url.includes('/users'));
      req.flush('Error', { status: 500, statusText: 'Error' });
    });
  });

  describe('registerCustomerSuccess$', () => {
    it('should navigate to customer dashboard', () => {
      actions$ = of(AuthActions.registerCustomerSuccess({ user: mockUser, token: 'tok' }));
      effects.registerCustomerSuccess$.subscribe();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/customer/dashboard']);
    });
  });

  describe('registerExpert$', () => {
    const expertData = {
      personalInfo: { fullName: 'Expert', email: 'exp@test.com', password: 'pass', mobileNumber: '1234567890', dateOfBirth: '1990-01-01', address: 'Addr', city: 'City', state: 'State', pinCode: '123456' },
      serviceProfile: { experienceYears: '5', hourlyRate: 300, services: ['Cleaning'], languages: ['Hindi'], education: 'BSc', availability: 'Full Time' },
      idVerification: { idType: 'AADHAAR', idNumber: '123456789012' }
    };

    it('should return registerExpertSuccess when email is new', () => {
      actions$ = of(AuthActions.registerExpert({ data: expertData }));

      effects.registerExpert$.subscribe(action => {
        expect(action.type).toBe(AuthActions.registerExpertSuccess.type);
      });

      const emailReq = httpMock.expectOne(r => r.url.includes('/users') && r.params.has('email'));
      emailReq.flush([]);

      const createReq = httpMock.expectOne(r => r.method === 'POST');
      createReq.flush({ ...mockUser, role: 'EXPERT' });
    });

    it('should return failure when email is empty', () => {
      const noEmail = { ...expertData, personalInfo: { ...expertData.personalInfo, email: '' } };
      actions$ = of(AuthActions.registerExpert({ data: noEmail }));

      effects.registerExpert$.subscribe(action => {
        expect(action.type).toBe(AuthActions.registerExpertFailure.type);
      });
    });

    it('should return failure when email exists', () => {
      actions$ = of(AuthActions.registerExpert({ data: expertData }));

      effects.registerExpert$.subscribe(action => {
        expect(action.type).toBe(AuthActions.registerExpertFailure.type);
      });

      const emailReq = httpMock.expectOne(r => r.url.includes('/users'));
      emailReq.flush([mockUser]);
    });
  });

  describe('registerExpertSuccess$', () => {
    it('should navigate to expert dashboard', () => {
      actions$ = of(AuthActions.registerExpertSuccess({ user: { ...mockUser, role: 'EXPERT' }, token: 'tok' }));
      effects.registerExpertSuccess$.subscribe();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/expert/dashboard']);
    });
  });

  describe('registerFailure$', () => {
    it('should show error for customer registration failure', () => {
      actions$ = of(AuthActions.registerCustomerFailure({ error: 'Err' }));
      effects.registerFailure$.subscribe();
      expect(notificationSpy.error).toHaveBeenCalled();
    });

    it('should show error for expert registration failure', () => {
      actions$ = of(AuthActions.registerExpertFailure({ error: 'Err' }));
      effects.registerFailure$.subscribe();
      expect(notificationSpy.error).toHaveBeenCalled();
    });
  });

  describe('logout$', () => {
    it('should clear localStorage and return logoutSuccess', () => {
      localStorage.setItem('housemate_access_token', 'tok');
      actions$ = of(AuthActions.logout());

      effects.logout$.subscribe(action => {
        expect(action.type).toBe(AuthActions.logoutSuccess.type);
      });
    });
  });

  describe('logoutSuccess$', () => {
    it('should navigate to root and show notification', () => {
      actions$ = of(AuthActions.logoutSuccess());
      effects.logoutSuccess$.subscribe();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
      expect(notificationSpy.info).toHaveBeenCalled();
    });
  });

  describe('checkSession$', () => {
    it('should return sessionInvalid when no token', () => {
      actions$ = of(AuthActions.checkSession());
      effects.checkSession$.subscribe(action => {
        expect(action.type).toBe(AuthActions.sessionInvalid.type);
      });
    });

    it('should return sessionValid when token is valid', () => {
      // Create a valid token (expires in 24h)
      const payload = btoa(JSON.stringify({
        sub: 'user-1', email: 'test@test.com', role: 'CUSTOMER',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 86400
      }));
      const token = `${btoa('header')}.${payload}.${btoa('sig')}`;
      localStorage.setItem('housemate_access_token', token);
      localStorage.setItem('housemate_user', JSON.stringify(mockUser));

      actions$ = of(AuthActions.checkSession());
      effects.checkSession$.subscribe(action => {
        expect(action.type).toBe(AuthActions.sessionValid.type);
      });
    });

    it('should return sessionInvalid when token is expired', () => {
      const payload = btoa(JSON.stringify({
        sub: 'user-1', exp: Math.floor(Date.now() / 1000) - 100
      }));
      const token = `${btoa('h')}.${payload}.${btoa('s')}`;
      localStorage.setItem('housemate_access_token', token);
      localStorage.setItem('housemate_user', JSON.stringify(mockUser));

      actions$ = of(AuthActions.checkSession());
      effects.checkSession$.subscribe(action => {
        expect(action.type).toBe(AuthActions.sessionInvalid.type);
      });
    });

    it('should return sessionInvalid when user JSON is invalid', () => {
      const payload = btoa(JSON.stringify({
        sub: 'user-1', exp: Math.floor(Date.now() / 1000) + 86400
      }));
      const token = `${btoa('h')}.${payload}.${btoa('s')}`;
      localStorage.setItem('housemate_access_token', token);
      localStorage.setItem('housemate_user', 'invalid-json');

      actions$ = of(AuthActions.checkSession());
      effects.checkSession$.subscribe(action => {
        expect(action.type).toBe(AuthActions.sessionInvalid.type);
      });
    });
  });

  describe('updateProfile$', () => {
    it('should return updateProfileSuccess', () => {
      localStorage.setItem('housemate_user', JSON.stringify(mockUser));
      actions$ = of(AuthActions.updateProfile({ data: { name: 'New' } }));

      effects.updateProfile$.subscribe(action => {
        expect(action.type).toBe(AuthActions.updateProfileSuccess.type);
      });

      const req = httpMock.expectOne(r => r.method === 'PATCH');
      req.flush({ ...mockUser, name: 'New' });
    });

    it('should return updateProfileFailure when not authenticated', () => {
      actions$ = of(AuthActions.updateProfile({ data: { name: 'New' } }));
      effects.updateProfile$.subscribe(action => {
        expect(action.type).toBe(AuthActions.updateProfileFailure.type);
      });
    });

    it('should return failure on HTTP error', () => {
      localStorage.setItem('housemate_user', JSON.stringify(mockUser));
      actions$ = of(AuthActions.updateProfile({ data: { name: 'New' } }));

      effects.updateProfile$.subscribe(action => {
        expect(action.type).toBe(AuthActions.updateProfileFailure.type);
      });

      const req = httpMock.expectOne(r => r.method === 'PATCH');
      req.flush('Error', { status: 500, statusText: 'Error' });
    });
  });

  describe('updateProfileSuccess$', () => {
    it('should show success notification', () => {
      actions$ = of(AuthActions.updateProfileSuccess({ user: mockUser }));
      effects.updateProfileSuccess$.subscribe();
      expect(notificationSpy.success).toHaveBeenCalled();
    });
  });
});
