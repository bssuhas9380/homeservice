import { CurrencyInrPipe } from './currency-inr.pipe';

describe('CurrencyInrPipe', () => {
  let pipe: CurrencyInrPipe;

  beforeEach(() => {
    pipe = new CurrencyInrPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format number with ₹ symbol', () => {
    expect(pipe.transform(1000)).toBe('₹1,000');
  });

  it('should format large numbers with Indian system', () => {
    expect(pipe.transform(100000)).toBe('₹1,00,000');
  });

  it('should format with decimal places', () => {
    expect(pipe.transform(1000, true, 2)).toBe('₹1,000.00');
  });

  it('should format without symbol', () => {
    expect(pipe.transform(1000, false)).toBe('1,000');
  });

  it('should handle string input', () => {
    expect(pipe.transform('500')).toBe('₹500');
  });

  it('should return empty for null', () => {
    expect(pipe.transform(null as any)).toBe('');
  });

  it('should return empty for undefined', () => {
    expect(pipe.transform(undefined as any)).toBe('');
  });

  it('should return empty for NaN string', () => {
    expect(pipe.transform('abc')).toBe('');
  });

  it('should handle zero', () => {
    expect(pipe.transform(0)).toBe('₹0');
  });
});
