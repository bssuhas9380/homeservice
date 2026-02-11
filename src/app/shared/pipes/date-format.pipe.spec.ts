import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;

  beforeEach(() => {
    pipe = new DateFormatPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  describe('short format', () => {
    it('should format date as "20 Jan 2026"', () => {
      const result = pipe.transform('2026-01-20');
      expect(result).toBe('20 Jan 2026');
    });

    it('should use short as default format', () => {
      const result = pipe.transform('2026-01-20');
      expect(result).toMatch(/\d{1,2} \w{3} \d{4}/);
    });
  });

  describe('long format', () => {
    it('should format date as "day Month, DayName"', () => {
      // Jan 20, 2026 is a Tuesday
      const result = pipe.transform('2026-01-20', 'long');
      expect(result).toBe('20 Jan, Tuesday');
    });
  });

  describe('full format', () => {
    it('should format date as "DayName, day MonthFull year"', () => {
      const result = pipe.transform('2026-01-20', 'full');
      expect(result).toBe('Tuesday, 20 January 2026');
    });
  });

  describe('edge cases', () => {
    it('should return empty for empty input', () => {
      expect(pipe.transform('')).toBe('');
    });

    it('should return empty for invalid date', () => {
      expect(pipe.transform('invalid')).toBe('');
    });

    it('should handle Date object', () => {
      const date = new Date(2026, 0, 20);
      const result = pipe.transform(date);
      expect(result).toBe('20 Jan 2026');
    });

    it('should handle default case in switch', () => {
      const result = pipe.transform('2026-01-20', 'other' as any);
      expect(result).toMatch(/\d{1,2} \w{3} \d{4}/);
    });
  });
});
