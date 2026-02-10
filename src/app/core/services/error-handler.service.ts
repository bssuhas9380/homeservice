import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService, ERROR_MESSAGES } from './notification.service';

export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
  timestamp?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  private readonly notificationService = inject(NotificationService);

  /**
   * Handle HTTP errors and show appropriate notifications
   */
  handleHttpError(error: HttpErrorResponse, context?: string): ApiError {
    const apiError = this.parseError(error);
    
    // Show notification based on error type
    this.showErrorNotification(apiError, context);
    
    return apiError;
  }

  /**
   * Parse HTTP error into ApiError format
   */
  private parseError(error: HttpErrorResponse): ApiError {
    // Network error (no internet, server down, etc.)
    if (error.status === 0) {
      return {
        status: 0,
        message: ERROR_MESSAGES.NETWORK.CONNECTION_ERROR,
        timestamp: new Date().toISOString()
      };
    }

    // Timeout error
    if (error.status === 408 || error.name === 'TimeoutError') {
      return {
        status: 408,
        message: ERROR_MESSAGES.NETWORK.TIMEOUT,
        timestamp: new Date().toISOString()
      };
    }

    // Client errors (4xx)
    if (error.status >= 400 && error.status < 500) {
      return this.handleClientError(error);
    }

    // Server errors (5xx)
    if (error.status >= 500) {
      return {
        status: error.status,
        message: ERROR_MESSAGES.NETWORK.SERVER_ERROR,
        timestamp: new Date().toISOString()
      };
    }

    // Unknown error
    return {
      status: error.status,
      message: error.message || ERROR_MESSAGES.GENERIC.UNKNOWN,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Handle 4xx client errors
   */
  private handleClientError(error: HttpErrorResponse): ApiError {
    switch (error.status) {
      case 400:
        return {
          status: 400,
          message: error.error?.message || ERROR_MESSAGES.VALIDATION.REQUIRED_FIELDS,
          errors: error.error?.errors,
          timestamp: new Date().toISOString()
        };
      
      case 401:
        return {
          status: 401,
          message: ERROR_MESSAGES.AUTH.UNAUTHORIZED,
          timestamp: new Date().toISOString()
        };
      
      case 403:
        return {
          status: 403,
          message: ERROR_MESSAGES.AUTH.UNAUTHORIZED,
          timestamp: new Date().toISOString()
        };
      
      case 404:
        return {
          status: 404,
          message: error.error?.message || 'Resource not found',
          timestamp: new Date().toISOString()
        };
      
      case 409:
        return {
          status: 409,
          message: error.error?.message || ERROR_MESSAGES.AUTH.EMAIL_EXISTS,
          timestamp: new Date().toISOString()
        };
      
      case 422:
        return {
          status: 422,
          message: error.error?.message || ERROR_MESSAGES.VALIDATION.REQUIRED_FIELDS,
          errors: error.error?.errors,
          timestamp: new Date().toISOString()
        };
      
      default:
        return {
          status: error.status,
          message: error.error?.message || ERROR_MESSAGES.GENERIC.UNKNOWN,
          timestamp: new Date().toISOString()
        };
    }
  }

  /**
   * Show error notification based on error type and context
   */
  private showErrorNotification(error: ApiError, context?: string): void {
    let title = 'Error';
    
    // Customize title based on context
    if (context) {
      switch (context) {
        case 'login':
          title = 'Login Failed';
          break;
        case 'register':
          title = 'Registration Failed';
          break;
        case 'booking':
          title = 'Booking Error';
          break;
        case 'payment':
          title = 'Payment Error';
          break;
        case 'profile':
          title = 'Profile Error';
          break;
        default:
          title = context;
      }
    }

    // Don't show notification for 401 (let auth guard handle it)
    if (error.status === 401) {
      return;
    }

    this.notificationService.error(title, error.message);
  }

  /**
   * Handle validation errors and return formatted message
   */
  handleValidationError(errors: Record<string, string[]>): string {
    const messages: string[] = [];
    
    for (const field in errors) {
      if (errors[field] && errors[field].length > 0) {
        messages.push(`${field}: ${errors[field].join(', ')}`);
      }
    }
    
    return messages.join('\n') || ERROR_MESSAGES.VALIDATION.REQUIRED_FIELDS;
  }

  /**
   * Log error for debugging (can be extended to send to error tracking service)
   */
  logError(error: Error | HttpErrorResponse, context?: string): void {
    const timestamp = new Date().toISOString();
    
    console.error(`[${timestamp}] ${context || 'Error'}:`, {
      message: error.message,
      name: error.name,
      stack: error instanceof Error ? error.stack : undefined,
      status: error instanceof HttpErrorResponse ? error.status : undefined
    });
    
    // TODO: Send to error tracking service like Sentry
  }
}
