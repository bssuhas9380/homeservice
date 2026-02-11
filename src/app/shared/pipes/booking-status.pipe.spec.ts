import { BookingStatusPipe } from './booking-status.pipe';

describe('BookingStatusPipe', () => {
  let pipe: BookingStatusPipe;

  beforeEach(() => {
    pipe = new BookingStatusPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  describe('label transform', () => {
    it('should return "Upcoming" for pending', () => {
      expect(pipe.transform('pending')).toBe('Upcoming');
    });

    it('should return "Upcoming" for confirmed', () => {
      expect(pipe.transform('confirmed')).toBe('Upcoming');
    });

    it('should return "Completed" for completed', () => {
      expect(pipe.transform('completed')).toBe('Completed');
    });

    it('should return "Cancelled" for cancelled', () => {
      expect(pipe.transform('cancelled')).toBe('Cancelled');
    });

    it('should return "Rejected" for rejected', () => {
      expect(pipe.transform('rejected')).toBe('Rejected');
    });

    it('should return original value for unknown status', () => {
      expect(pipe.transform('unknown')).toBe('unknown');
    });

    it('should return empty string for empty input', () => {
      expect(pipe.transform('')).toBe('');
    });
  });

  describe('class transform', () => {
    it('should return "status--upcoming" for pending', () => {
      expect(pipe.transform('pending', 'class')).toBe('status--upcoming');
    });

    it('should return "status--upcoming" for confirmed', () => {
      expect(pipe.transform('confirmed', 'class')).toBe('status--upcoming');
    });

    it('should return "status--completed" for completed', () => {
      expect(pipe.transform('completed', 'class')).toBe('status--completed');
    });

    it('should return "status--cancelled" for cancelled', () => {
      expect(pipe.transform('cancelled', 'class')).toBe('status--cancelled');
    });

    it('should return "status--rejected" for rejected', () => {
      expect(pipe.transform('rejected', 'class')).toBe('status--rejected');
    });

    it('should return empty string for unknown class', () => {
      expect(pipe.transform('unknown', 'class')).toBe('');
    });

    it('should return empty string for empty input', () => {
      expect(pipe.transform('', 'class')).toBe('');
    });
  });
});
