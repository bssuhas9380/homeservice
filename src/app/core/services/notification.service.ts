import { Injectable, signal, computed } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  timestamp: Date;
}

export interface NotificationConfig {
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSignal = signal<Notification[]>([]);
  
  // Public readonly signal
  readonly notifications = this.notificationsSignal.asReadonly();
  
  // Computed for latest notification
  readonly latestNotification = computed(() => {
    const notifications = this.notificationsSignal();
    return notifications.length > 0 ? notifications[notifications.length - 1] : null;
  });

  // Default durations by type
  private readonly defaultDurations: Record<NotificationType, number> = {
    success: 3000,
    error: 5000,
    warning: 4000,
    info: 3000
  };

  /**
   * Show a notification
   */
  show(config: NotificationConfig): string {
    const id = this.generateId();
    const notification: Notification = {
      id,
      type: config.type,
      title: config.title,
      message: config.message,
      duration: config.duration ?? this.defaultDurations[config.type],
      dismissible: config.dismissible ?? true,
      timestamp: new Date()
    };

    this.notificationsSignal.update(notifications => [...notifications, notification]);

    // Auto-dismiss if duration is set
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => this.dismiss(id), notification.duration);
    }

    return id;
  }

  /**
   * Show success notification
   */
  success(title: string, message: string, duration?: number): string {
    return this.show({ type: 'success', title, message, duration });
  }

  /**
   * Show error notification
   */
  error(title: string, message: string, duration?: number): string {
    return this.show({ type: 'error', title, message, duration: duration ?? 0 }); // Errors don't auto-dismiss
  }

  /**
   * Show warning notification
   */
  warning(title: string, message: string, duration?: number): string {
    return this.show({ type: 'warning', title, message, duration });
  }

  /**
   * Show info notification
   */
  info(title: string, message: string, duration?: number): string {
    return this.show({ type: 'info', title, message, duration });
  }

  /**
   * Dismiss a specific notification
   */
  dismiss(id: string): void {
    this.notificationsSignal.update(notifications => 
      notifications.filter(n => n.id !== id)
    );
  }

  /**
   * Dismiss all notifications
   */
  dismissAll(): void {
    this.notificationsSignal.set([]);
  }

  /**
   * Dismiss all notifications of a specific type
   */
  dismissByType(type: NotificationType): void {
    this.notificationsSignal.update(notifications => 
      notifications.filter(n => n.type !== type)
    );
  }

  private generateId(): string {
    return `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Error messages constants
export const ERROR_MESSAGES = {
  // Authentication
  AUTH: {
    LOGIN_FAILED: 'Invalid email or password. Please try again.',
    REGISTRATION_FAILED: 'Registration failed. Please try again.',
    SESSION_EXPIRED: 'Your session has expired. Please log in again.',
    UNAUTHORIZED: 'You are not authorized to access this resource.',
    EMAIL_EXISTS: 'An account with this email already exists.',
  },
  // Booking
  BOOKING: {
    CREATE_FAILED: 'Failed to create booking. Please try again.',
    UPDATE_FAILED: 'Failed to update booking. Please try again.',
    CANCEL_FAILED: 'Failed to cancel booking. Please try again.',
    LOAD_FAILED: 'Failed to load bookings. Please refresh the page.',
    NOT_FOUND: 'Booking not found.',
  },
  // Network
  NETWORK: {
    CONNECTION_ERROR: 'Unable to connect to the server. Please check your internet connection.',
    TIMEOUT: 'Request timed out. Please try again.',
    SERVER_ERROR: 'Server error occurred. Please try again later.',
  },
  // Validation
  VALIDATION: {
    REQUIRED_FIELDS: 'Please fill in all required fields.',
    INVALID_EMAIL: 'Please enter a valid email address.',
    INVALID_PHONE: 'Please enter a valid phone number.',
    INVALID_PASSWORD: 'Password must be at least 8 characters long.',
    PASSWORDS_MISMATCH: 'Passwords do not match.',
  },
  // Generic
  GENERIC: {
    UNKNOWN: 'An unexpected error occurred. Please try again.',
    LOAD_FAILED: 'Failed to load data. Please refresh the page.',
  }
} as const;

// Success messages constants
export const SUCCESS_MESSAGES = {
  AUTH: {
    LOGIN_SUCCESS: 'Welcome back! You have successfully logged in.',
    REGISTRATION_SUCCESS: 'Account created successfully! Welcome to HouseMate.',
    LOGOUT_SUCCESS: 'You have been logged out successfully.',
    PASSWORD_CHANGED: 'Your password has been changed successfully.',
  },
  BOOKING: {
    CREATE_SUCCESS: 'Booking created successfully!',
    UPDATE_SUCCESS: 'Booking updated successfully!',
    CANCEL_SUCCESS: 'Booking cancelled successfully.',
    PAYMENT_SUCCESS: 'Payment completed successfully!',
  },
  PROFILE: {
    UPDATE_SUCCESS: 'Profile updated successfully!',
    ADDRESS_ADDED: 'Address added successfully!',
    ADDRESS_UPDATED: 'Address updated successfully!',
  }
} as const;
