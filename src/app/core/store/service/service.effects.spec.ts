import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { ServiceEffects } from './service.effects';
import * as ServiceActions from './service.actions';
import { Service } from './service.actions';
import { NotificationService } from '../../services/notification.service';

describe('ServiceEffects', () => {
  let effects: ServiceEffects;
  let actions$: Observable<any>;
  let httpMock: HttpTestingController;
  let notificationSpy: jasmine.SpyObj<NotificationService>;

  const mockService: Service = {
    id: 's1', name: 'Cleaning', description: 'House cleaning',
    icon: '🧹', image: 'cleaning.jpg', basePrice: 499,
    priceUnit: 'per hour', isPopular: true, isFeatured: false
  };

  beforeEach(() => {
    notificationSpy = jasmine.createSpyObj('NotificationService', ['error']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ServiceEffects,
        provideMockActions(() => actions$),
        { provide: NotificationService, useValue: notificationSpy }
      ]
    });

    effects = TestBed.inject(ServiceEffects);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  describe('loadServices$', () => {
    it('should return loadServicesSuccess', () => {
      actions$ = of(ServiceActions.loadServices());
      effects.loadServices$.subscribe(action => {
        expect(action.type).toBe(ServiceActions.loadServicesSuccess.type);
      });
      httpMock.expectOne(r => r.url.includes('/services')).flush([mockService]);
    });

    it('should return loadServicesFailure on error', () => {
      actions$ = of(ServiceActions.loadServices());
      effects.loadServices$.subscribe(action => {
        expect(action.type).toBe(ServiceActions.loadServicesFailure.type);
      });
      httpMock.expectOne(r => r.url.includes('/services')).flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('loadExperts$', () => {
    it('should return loadExpertsSuccess', () => {
      actions$ = of(ServiceActions.loadExperts({}));
      effects.loadExperts$.subscribe(action => {
        expect(action.type).toBe(ServiceActions.loadExpertsSuccess.type);
      });
      httpMock.expectOne(r => r.url.includes('/users')).flush([
        { id: 'e1', name: 'Expert', role: 'EXPERT', skills: ['Cleaning'], rating: 4.5 }
      ]);
    });

    it('should filter experts by service name', () => {
      actions$ = of(ServiceActions.loadExperts({ serviceName: 'Cleaning' }));
      effects.loadExperts$.subscribe(action => {
        expect(action.type).toBe(ServiceActions.loadExpertsSuccess.type);
        expect((action as any).experts.length).toBe(1);
      });
      httpMock.expectOne(r => r.url.includes('/users')).flush([
        { id: 'e1', name: 'Expert', role: 'EXPERT', skills: ['Cleaning'] },
        { id: 'e2', name: 'Expert2', role: 'EXPERT', skills: ['Plumbing'] }
      ]);
    });

    it('should return loadExpertsFailure on error', () => {
      actions$ = of(ServiceActions.loadExperts({}));
      effects.loadExperts$.subscribe(action => {
        expect(action.type).toBe(ServiceActions.loadExpertsFailure.type);
      });
      httpMock.expectOne(r => r.url.includes('/users')).flush('Err', { status: 500, statusText: 'Error' });
    });
  });

  describe('loadFailure$', () => {
    it('should show error notification for loadServicesFailure', () => {
      actions$ = of(ServiceActions.loadServicesFailure({ error: 'Err' }));
      effects.loadFailure$.subscribe();
      expect(notificationSpy.error).toHaveBeenCalled();
    });

    it('should show error notification for loadExpertsFailure', () => {
      actions$ = of(ServiceActions.loadExpertsFailure({ error: 'Err' }));
      effects.loadFailure$.subscribe();
      expect(notificationSpy.error).toHaveBeenCalled();
    });
  });
});
