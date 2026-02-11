import { TimeFormatPipe } from './time-format.pipe';

describe('TimeFormatPipe', () => {
  let pipe: TimeFormatPipe;

  beforeEach(() => {
    pipe = new TimeFormatPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  describe('12h format', () => {
    it('should format morning time', () => {
      expect(pipe.transform('09:30')).toBe('9:30 AM');
    });

    it('should format afternoon time', () => {
      expect(pipe.transform('14:00')).toBe('2:00 PM');
    });

    it('should format midnight as 12 AM', () => {
      expect(pipe.transform('00:00')).toBe('12:00 AM');
    });

    it('should format noon as 12 PM', () => {
      expect(pipe.transform('12:00')).toBe('12:00 PM');
    });
  });

  describe('24h format', () => {
    it('should format with leading zeros', () => {
      expect(pipe.transform('09:05', '24h')).toBe('09:05');
    });

    it('should keep 24h format as-is', () => {
      expect(pipe.transform('14:30', '24h')).toBe('14:30');
    });
  });

  it('should return empty for empty input', () => {
    expect(pipe.transform('')).toBe('');
  });
});
