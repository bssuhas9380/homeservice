import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {
  private months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  transform(value: string | Date, format: 'short' | 'long' | 'full' = 'short'): string {
    if (!value) return '';
    
    const date = typeof value === 'string' ? new Date(value) : value;
    
    if (isNaN(date.getTime())) return '';
    
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();
    const dayName = this.days[date.getDay()];
    
    switch (format) {
      case 'short':
        // "20 Jan 2026"
        return `${day} ${month} ${year}`;
      case 'long':
        // "31 Jan, Wednesday"
        return `${day} ${month}, ${dayName}`;
      case 'full':
        // "Wednesday, 31 January 2026"
        const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        return `${dayName}, ${day} ${fullMonths[date.getMonth()]} ${year}`;
      default:
        return `${day} ${month} ${year}`;
    }
  }
}
