import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PaymentData {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
}

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-modal.component.html',
  styleUrl: './payment-modal.component.scss'
})
export class PaymentModalComponent {
  isOpen = input<boolean>(false);
  totalAmount = input<number>(590);
  
  closeModal = output<void>();
  paymentComplete = output<PaymentData>();

  activeTab = signal<'card' | 'upi' | 'netbanking'>('card');
  
  cardNumber = signal('');
  cardholderName = signal('');
  expiryDate = signal('');
  cvv = signal('');
  
  isProcessing = signal(false);

  setActiveTab(tab: 'card' | 'upi' | 'netbanking'): void {
    this.activeTab.set(tab);
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\s/g, '').replace(/\D/g, '');
    value = value.substring(0, 16);
    const formatted = value.replace(/(.{4})/g, '$1 ').trim();
    this.cardNumber.set(formatted);
  }

  formatExpiryDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.expiryDate.set(value);
  }

  formatCvv(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').substring(0, 3);
    this.cvv.set(value);
  }

  onClose(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('payment-modal-overlay')) {
      this.onClose();
    }
  }

  isFormValid(): boolean {
    return (
      this.cardNumber().replace(/\s/g, '').length === 16 &&
      this.cardholderName().trim().length > 0 &&
      this.expiryDate().length === 5 &&
      this.cvv().length === 3
    );
  }

  processPayment(): void {
    if (!this.isFormValid()) return;
    
    this.isProcessing.set(true);
    
    // Simulate payment processing
    setTimeout(() => {
      this.isProcessing.set(false);
      this.paymentComplete.emit({
        cardNumber: this.cardNumber(),
        cardholderName: this.cardholderName(),
        expiryDate: this.expiryDate(),
        cvv: this.cvv()
      });
    }, 2000);
  }
}
