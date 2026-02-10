import { Component, inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification, NotificationType, NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      @for (notification of notificationService.notifications(); track notification.id) {
        <div 
          class="toast"
          [class]="'toast--' + notification.type"
        >
          <div class="toast__icon">
            @switch (notification.type) {
              @case ('success') {
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              }
              @case ('error') {
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              }
              @case ('warning') {
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18A2 2 0 003.54 21H20.46A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              }
              @case ('info') {
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              }
            }
          </div>
          <div class="toast__content">
            <h4 class="toast__title">{{ notification.title }}</h4>
            <p class="toast__message">{{ notification.message }}</p>
          </div>
          @if (notification.dismissible) {
            <button class="toast__close" (click)="dismiss(notification.id)" aria-label="Dismiss">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 400px;
      width: 100%;
      pointer-events: none;
    }

    .toast {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
      border-radius: 12px;
      background: white;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      pointer-events: auto;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .toast__icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .toast__content {
      flex: 1;
      min-width: 0;
    }

    .toast__title {
      margin: 0 0 4px;
      font-size: 14px;
      font-weight: 600;
      color: #1F2937;
    }

    .toast__message {
      margin: 0;
      font-size: 13px;
      color: #6B7280;
      line-height: 1.4;
    }

    .toast__close {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      color: #9CA3AF;
      transition: color 0.2s;

      &:hover {
        color: #4B5563;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    // Type variants
    .toast--success {
      border-left: 4px solid #10B981;

      .toast__icon {
        color: #10B981;
      }
    }

    .toast--error {
      border-left: 4px solid #EF4444;

      .toast__icon {
        color: #EF4444;
      }
    }

    .toast--warning {
      border-left: 4px solid #F59E0B;

      .toast__icon {
        color: #F59E0B;
      }
    }

    .toast--info {
      border-left: 4px solid #3B82F6;

      .toast__icon {
        color: #3B82F6;
      }
    }

    @media (max-width: 480px) {
      .toast-container {
        top: 16px;
        right: 16px;
        left: 16px;
        max-width: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  readonly notificationService = inject(NotificationService);

  dismiss(id: string): void {
    this.notificationService.dismiss(id);
  }
}
