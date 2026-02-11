import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../../../core/store/booking/booking.actions';

@Component({
  selector: 'app-take-action-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './take-action-modal.component.html',
  styleUrl: './take-action-modal.component.scss'
})
export class TakeActionModalComponent {
  @Input() booking!: Booking;
  @Input() customer: any = null;
  @Input() address: any = null;

  @Output() close = new EventEmitter<void>();
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<string>();

  // Service icons
  serviceIcons: Record<string, string> = {
    'Cleaning': 'assets/images/services/cleaning-icon.png',
    'Cooking': 'assets/images/services/cooking-icon.png',
    'Gardening': 'assets/images/services/gardening-icon.png',
    'Plumbing': 'assets/images/services/plumbing-icon.png',
    'Electrician': 'assets/images/services/electrician-icon.png',
    'Baby Sitting': 'assets/images/services/babysitting-icon.png',
    'Carpentry': 'assets/images/services/carpentry-icon.png',
    'Painting': 'assets/images/services/painting-icon.png'
  };

  get serviceIcon(): string {
    return this.serviceIcons[this.booking?.serviceName] || 'assets/images/services/cleaning-icon.png';
  }

  get customerName(): string {
    return this.customer?.name || 'Customer';
  }

  get serviceAddress(): string {
    if (this.address) {
      return `${this.address.line1}, ${this.address.pincode}`;
    }
    return '201, Manjari Khurd, 143505';
  }

  get frequency(): string {
    if (!this.booking?.frequency) return 'Once';
    return this.booking.frequency.charAt(0).toUpperCase() + this.booking.frequency.slice(1);
  }

  get startDate(): string {
    if (!this.booking?.date) return '';
    const date = new Date(this.booking.date);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  get timeSlot(): string {
    if (!this.booking?.timeSlot) return '';
    return this.booking.timeSlot.replace('-', '-');
  }

  get duration(): string {
    return `${this.booking?.duration || 2} hours`;
  }

  get isPending(): boolean {
    return this.booking?.status === 'PENDING';
  }

  get isConfirmed(): boolean {
    return this.booking?.status === 'CONFIRMED';
  }

  get isRejected(): boolean {
    return this.booking?.status === 'REJECTED';
  }

  get isCancelled(): boolean {
    return this.booking?.status === 'CANCELLED';
  }

  get statusLabel(): string {
    switch (this.booking?.status) {
      case 'CONFIRMED': return 'Accepted';
      case 'REJECTED': return 'Rejected';
      case 'CANCELLED': return 'Cancelled';
      case 'COMPLETED': return 'Completed';
      default: return 'Pending';
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onAccept(): void {
    this.accept.emit(this.booking.id);
  }

  onReject(): void {
    this.reject.emit(this.booking.id);
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.onClose();
    }
  }
}
