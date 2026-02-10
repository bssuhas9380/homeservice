import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-success-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-success-modal.component.html',
  styleUrl: './payment-success-modal.component.scss'
})
export class PaymentSuccessModalComponent {
  isOpen = input<boolean>(false);
  amountPaid = input<number>(590);
  
  closeModal = output<void>();

  onClose(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('success-modal-overlay')) {
      this.onClose();
    }
  }
}
