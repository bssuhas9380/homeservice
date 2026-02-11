import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import {
  authGuard, customerGuard, customerRoleGuard,
  expertGuard, expertRoleGuard, guestGuard,
  authMatchGuard, customerMatchGuard, expertMatchGuard, guestMatchGuard,
  unsavedChangesGuard, bookingFormGuard,
  CanComponentDeactivate
} from './auth.guard';
import { selectAuthState, selectIsAuthenticated, selectIsCustomer, selectIsExpert, selectUser } from '../store/auth/auth.selectors';
import { NotificationService } from '../services/notification.service';

describe('Auth Guards', () => {
  let store: MockStore;
  let routerSpy: jasmine.SpyObj<Router>;
  let notificationSpy: jasmine.SpyObj<NotificationService>;
  const mockRoute = {} as ActivatedRouteSnapshot;
  const mockState = { url: '/test' } as RouterStateSnapshot;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    notificationSpy = jasmine.createSpyObj('NotificationService', ['warning', 'error', 'info']);

    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectAuthState, value: { isLoading: false, isAuthenticated: true } },
            { selector: selectIsAuthenticated, value: true },
            { selector: selectIsCustomer, value: true },
            { selector: selectIsExpert, value: false },
            { selector: selectUser, value: { id: 'u1', email: 'test@test.com', name: 'Test', role: 'CUSTOMER' } }
          ]
        }),
        { provide: Router, useValue: routerSpy },
        { provide: NotificationService, useValue: notificationSpy }
      ]
    });

    store = TestBed.inject(MockStore);
  });

  describe('authGuard', () => {
    it('should allow authenticated users', (done) => {
      TestBed.runInInjectionContext(() => {
        const result$ = authGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('should redirect unauthenticated users to login', (done) => {
      store.overrideSelector(selectAuthState, { isLoading: false, isAuthenticated: false } as any);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = authGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          expect(routerSpy.navigate).toHaveBeenCalledWith(['/login'], jasmine.any(Object));
          done();
        });
      });
    });
  });

  describe('customerGuard', () => {
    it('should allow authenticated users', (done) => {
      TestBed.runInInjectionContext(() => {
        const result$ = customerGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('should redirect when not authenticated', (done) => {
      store.overrideSelector(selectAuthState, { isLoading: false, isAuthenticated: false } as any);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = customerGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          done();
        });
      });
    });
  });

  describe('customerRoleGuard', () => {
    it('should allow customer role', (done) => {
      TestBed.runInInjectionContext(() => {
        const result$ = customerRoleGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('should deny expert role', (done) => {
      store.overrideSelector(selectIsCustomer, false);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = customerRoleGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          expect(routerSpy.navigate).toHaveBeenCalledWith(['/expert/dashboard']);
          done();
        });
      });
    });
  });

  describe('expertGuard', () => {
    it('should allow authenticated users', (done) => {
      TestBed.runInInjectionContext(() => {
        const result$ = expertGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('should redirect when not authenticated', (done) => {
      store.overrideSelector(selectAuthState, { isLoading: false, isAuthenticated: false } as any);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = expertGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          done();
        });
      });
    });
  });

  describe('expertRoleGuard', () => {
    it('should allow expert role', (done) => {
      store.overrideSelector(selectIsExpert, true);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = expertRoleGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('should deny customer role', (done) => {
      store.overrideSelector(selectIsExpert, false);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = expertRoleGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          expect(routerSpy.navigate).toHaveBeenCalledWith(['/customer/dashboard']);
          done();
        });
      });
    });
  });

  describe('guestGuard', () => {
    it('should allow unauthenticated users', (done) => {
      store.overrideSelector(selectAuthState, { isLoading: false, isAuthenticated: false } as any);
      store.overrideSelector(selectUser, null);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = guestGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('should redirect customer to customer dashboard', (done) => {
      store.overrideSelector(selectUser, { id: 'u1', email: 'test@test.com', name: 'Test', role: 'CUSTOMER' });
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = guestGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          expect(routerSpy.navigate).toHaveBeenCalledWith(['/customer/dashboard']);
          done();
        });
      });
    });

    it('should redirect expert to expert dashboard', (done) => {
      store.overrideSelector(selectUser, { id: 'u1', email: 'exp@test.com', name: 'Expert', role: 'EXPERT' });
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = guestGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          expect(routerSpy.navigate).toHaveBeenCalledWith(['/expert/dashboard']);
          done();
        });
      });
    });

    it('should redirect unknown role to root', (done) => {
      store.overrideSelector(selectUser, { id: 'u1', email: 'a@b.com', name: 'X', role: 'OTHER' as any });
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = guestGuard(mockRoute, mockState) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(false);
          expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
          done();
        });
      });
    });
  });

  describe('canMatch guards', () => {
    const mockRouteConfig = {} as Route;
    const mockSegments = [] as UrlSegment[];

    it('authMatchGuard should return isAuthenticated', (done) => {
      TestBed.runInInjectionContext(() => {
        const result$ = authMatchGuard(mockRouteConfig, mockSegments) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('customerMatchGuard should return isCustomer', (done) => {
      TestBed.runInInjectionContext(() => {
        const result$ = customerMatchGuard(mockRouteConfig, mockSegments) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('expertMatchGuard should return isExpert', (done) => {
      store.overrideSelector(selectIsExpert, true);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = expertMatchGuard(mockRouteConfig, mockSegments) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });

    it('guestMatchGuard should return !isAuthenticated', (done) => {
      store.overrideSelector(selectIsAuthenticated, false);
      store.refreshState();

      TestBed.runInInjectionContext(() => {
        const result$ = guestMatchGuard(mockRouteConfig, mockSegments) as Observable<boolean>;
        result$.subscribe(result => {
          expect(result).toBe(true);
          done();
        });
      });
    });
  });

  describe('unsavedChangesGuard', () => {
    it('should call component canDeactivate', () => {
      const component: CanComponentDeactivate = { canDeactivate: () => true };
      const result = unsavedChangesGuard(component, mockRoute, mockState, mockState);
      expect(result).toBe(true);
    });

    it('should return true if no canDeactivate method', () => {
      const component = {} as CanComponentDeactivate;
      const result = unsavedChangesGuard(component, mockRoute, mockState, mockState);
      expect(result).toBe(true);
    });
  });

  describe('bookingFormGuard', () => {
    it('should allow navigation to booking-confirmation', () => {
      const nextState = { url: '/booking-confirmation' } as RouterStateSnapshot;

      TestBed.runInInjectionContext(() => {
        const component: CanComponentDeactivate = { canDeactivate: () => false };
        const result = bookingFormGuard(component, mockRoute, mockState, nextState);
        expect(result).toBe(true);
      });
    });

    it('should allow navigation to my-bookings', () => {
      const nextState = { url: '/my-bookings' } as RouterStateSnapshot;

      TestBed.runInInjectionContext(() => {
        const component: CanComponentDeactivate = { canDeactivate: () => false };
        const result = bookingFormGuard(component, mockRoute, mockState, nextState);
        expect(result).toBe(true);
      });
    });

    it('should use component canDeactivate if available', () => {
      const nextState = { url: '/other' } as RouterStateSnapshot;

      TestBed.runInInjectionContext(() => {
        const component: CanComponentDeactivate = { canDeactivate: () => false };
        const result = bookingFormGuard(component, mockRoute, mockState, nextState);
        expect(result).toBe(false);
      });
    });

    it('should show confirm dialog when no canDeactivate', () => {
      const nextState = { url: '/other' } as RouterStateSnapshot;
      spyOn(window, 'confirm').and.returnValue(true);

      TestBed.runInInjectionContext(() => {
        const component = {} as CanComponentDeactivate;
        const result = bookingFormGuard(component, mockRoute, mockState, nextState);
        expect(window.confirm).toHaveBeenCalled();
        expect(result).toBe(true);
      });
    });
  });
});
