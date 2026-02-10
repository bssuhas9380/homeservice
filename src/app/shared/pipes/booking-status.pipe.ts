import { Pipe, PipeTransform } from '@angular/core';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rejected';

@Pipe({
  name: 'bookingStatus',
  standalone: true
})
export class BookingStatusPipe implements PipeTransform {
  private statusLabels: Record<BookingStatus, string> = {
    'pending': 'Upcoming',
    'confirmed': 'Upcoming',
    'completed': 'Completed',
    'cancelled': 'Cancelled',
    'rejected': 'Rejected'
  };

  private statusClasses: Record<BookingStatus, string> = {
    'pending': 'status--upcoming',
    'confirmed': 'status--upcoming',
    'completed': 'status--completed',
    'cancelled': 'status--cancelled',
    'rejected': 'status--rejected'
  };

  transform(value: string, type: 'label' | 'class' = 'label'): string {
    if (!value) return '';
    
    const status = value as BookingStatus;
    
    if (type === 'class') {
      return this.statusClasses[status] || '';
    }
    
    return this.statusLabels[status] || value;
  }
}
