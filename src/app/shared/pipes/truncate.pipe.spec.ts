import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate long text with default limit', () => {
    const long = 'a'.repeat(60);
    const result = pipe.transform(long);
    expect(result).toBe('a'.repeat(50) + '...');
  });

  it('should not truncate short text', () => {
    expect(pipe.transform('Hello')).toBe('Hello');
  });

  it('should use custom limit', () => {
    expect(pipe.transform('Hello World', 5)).toBe('Hello...');
  });

  it('should use custom ellipsis', () => {
    expect(pipe.transform('Hello World', 5, '…')).toBe('Hello…');
  });

  it('should return empty for empty input', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return text exactly at limit without ellipsis', () => {
    expect(pipe.transform('12345', 5)).toBe('12345');
  });
});
