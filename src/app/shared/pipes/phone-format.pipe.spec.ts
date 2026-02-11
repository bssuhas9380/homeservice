import { PhoneFormatPipe } from './phone-format.pipe';

describe('PhoneFormatPipe', () => {
  let pipe: PhoneFormatPipe;

  beforeEach(() => {
    pipe = new PhoneFormatPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format 10-digit number', () => {
    expect(pipe.transform('9876543210')).toBe('+91 98765 43210');
  });

  it('should format +91 prefixed number', () => {
    expect(pipe.transform('+919876543210')).toBe('+91 98765 43210');
  });

  it('should return link format (clean number)', () => {
    expect(pipe.transform('9876543210', 'link')).toBe('9876543210');
  });

  it('should strip non-digit characters', () => {
    expect(pipe.transform('98-765-43210', 'link')).toBe('9876543210');
  });

  it('should return empty for empty input', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return original for unrecognized format', () => {
    expect(pipe.transform('12345')).toBe('12345');
  });
});
