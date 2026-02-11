import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;
  let notificationSpy: jasmine.SpyObj<NotificationService>;

  beforeEach(() => {
    notificationSpy = jasmine.createSpyObj('NotificationService', ['error']);

    TestBed.configureTestingModule({
      providers: [
        ErrorHandlerService,
        { provide: NotificationService, useValue: notificationSpy }
      ]
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('handleHttpError()', () => {
    it('should handle network error (status 0)', () => {
      const error = new HttpErrorResponse({ status: 0 });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(0);
      expect(result.message).toContain('Unable to connect');
    });

    it('should handle timeout error (408)', () => {
      const error = new HttpErrorResponse({ status: 408 });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(408);
      expect(result.message).toContain('timed out');
    });

    it('should handle 400 bad request', () => {
      const error = new HttpErrorResponse({ status: 400, error: { message: 'Bad' } });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(400);
    });

    it('should handle 401 unauthorized without notification', () => {
      const error = new HttpErrorResponse({ status: 401 });
      service.handleHttpError(error);
      expect(notificationSpy.error).not.toHaveBeenCalled();
    });

    it('should handle 403 forbidden', () => {
      const error = new HttpErrorResponse({ status: 403 });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(403);
    });

    it('should handle 404 not found', () => {
      const error = new HttpErrorResponse({ status: 404, error: { message: 'Not found' } });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(404);
      expect(result.message).toBe('Not found');
    });

    it('should handle 409 conflict', () => {
      const error = new HttpErrorResponse({ status: 409 });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(409);
    });

    it('should handle 422 unprocessable', () => {
      const error = new HttpErrorResponse({ status: 422, error: { errors: { email: ['invalid'] } } });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(422);
      expect(result.errors).toBeDefined();
    });

    it('should handle 500 server error', () => {
      const error = new HttpErrorResponse({ status: 500 });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(500);
      expect(result.message).toContain('Server error');
    });

    it('should handle unknown status', () => {
      const error = new HttpErrorResponse({ status: 999 });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(999);
    });

    it('should use context for title', () => {
      const error = new HttpErrorResponse({ status: 500 });
      service.handleHttpError(error, 'login');
      expect(notificationSpy.error).toHaveBeenCalledWith('Login Failed', jasmine.any(String));
    });

    it('should handle register context', () => {
      const error = new HttpErrorResponse({ status: 500 });
      service.handleHttpError(error, 'register');
      expect(notificationSpy.error).toHaveBeenCalledWith('Registration Failed', jasmine.any(String));
    });

    it('should handle booking context', () => {
      const error = new HttpErrorResponse({ status: 500 });
      service.handleHttpError(error, 'booking');
      expect(notificationSpy.error).toHaveBeenCalledWith('Booking Error', jasmine.any(String));
    });

    it('should handle payment context', () => {
      const error = new HttpErrorResponse({ status: 500 });
      service.handleHttpError(error, 'payment');
      expect(notificationSpy.error).toHaveBeenCalledWith('Payment Error', jasmine.any(String));
    });

    it('should handle profile context', () => {
      const error = new HttpErrorResponse({ status: 500 });
      service.handleHttpError(error, 'profile');
      expect(notificationSpy.error).toHaveBeenCalledWith('Profile Error', jasmine.any(String));
    });

    it('should use custom context as title', () => {
      const error = new HttpErrorResponse({ status: 500 });
      service.handleHttpError(error, 'Custom');
      expect(notificationSpy.error).toHaveBeenCalledWith('Custom', jasmine.any(String));
    });

    it('should handle default 4xx error', () => {
      const error = new HttpErrorResponse({ status: 418 });
      const result = service.handleHttpError(error);
      expect(result.status).toBe(418);
    });
  });

  describe('handleValidationError()', () => {
    it('should format validation errors', () => {
      const errors = { email: ['is required', 'is invalid'], name: ['is required'] };
      const result = service.handleValidationError(errors);
      expect(result).toContain('email');
      expect(result).toContain('name');
    });

    it('should return default message for empty errors', () => {
      const result = service.handleValidationError({});
      expect(result).toContain('required fields');
    });
  });

  describe('logError()', () => {
    it('should log Error to console', () => {
      spyOn(console, 'error');
      service.logError(new Error('test'), 'TestContext');
      expect(console.error).toHaveBeenCalled();
    });

    it('should log HttpErrorResponse to console', () => {
      spyOn(console, 'error');
      const error = new HttpErrorResponse({ status: 500 });
      service.logError(error);
      expect(console.error).toHaveBeenCalled();
    });
  });
});
