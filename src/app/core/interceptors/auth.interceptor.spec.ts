import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors, HttpErrorResponse } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { authInterceptor } from './auth.interceptor';
import { AuthService } from '../services/auth.service';

describe('AuthInterceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getToken', 'logout']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should add Authorization header when token exists', () => {
    authServiceSpy.getToken.and.returnValue('my-token');

    httpClient.get('/api/test').subscribe();

    const req = httpMock.expectOne('/api/test');
    expect(req.request.headers.get('Authorization')).toBe('Bearer my-token');
    req.flush({});
  });

  it('should not add Authorization header when no token', () => {
    authServiceSpy.getToken.and.returnValue(null);

    httpClient.get('/api/test').subscribe();

    const req = httpMock.expectOne('/api/test');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });

  it('should logout and redirect on 401', () => {
    authServiceSpy.getToken.and.returnValue('expired-token');

    httpClient.get('/api/test').subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(401);
        expect(authServiceSpy.logout).toHaveBeenCalled();
        expect(routerSpy.navigate).toHaveBeenCalledWith(['/login'], jasmine.any(Object));
      }
    });

    httpMock.expectOne('/api/test').flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });
  });

  it('should pass through non-401 errors', () => {
    authServiceSpy.getToken.and.returnValue('token');

    httpClient.get('/api/test').subscribe({
      error: (err: HttpErrorResponse) => {
        expect(err.status).toBe(500);
        expect(authServiceSpy.logout).not.toHaveBeenCalled();
      }
    });

    httpMock.expectOne('/api/test').flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
