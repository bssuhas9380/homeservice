import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string, format: 'display' | 'link' = 'display'): string {
    if (!value) return '';
    
    // Remove all non-digit characters except + at the start
    const cleanNumber = value.replace(/[^\d+]/g, '');
    
    if (format === 'link') {
      return cleanNumber;
    }
    
    // Format for display
    // Handle Indian numbers: +91 XXXXX XXXXX
    if (cleanNumber.startsWith('+91') && cleanNumber.length === 13) {
      return `+91 ${cleanNumber.slice(3, 8)} ${cleanNumber.slice(8)}`;
    }
    
    // Handle 10-digit numbers
    if (cleanNumber.length === 10) {
      return `+91 ${cleanNumber.slice(0, 5)} ${cleanNumber.slice(5)}`;
    }
    
    // Return original if no format matches
    return value;
  }
}
