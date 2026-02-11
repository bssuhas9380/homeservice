import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookingService } from './booking.service';
import { AuthService } from './auth.service';

describe('BookingService', () => {
  let service: BookingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookingService,
        { provide: AuthService, useValue: { getToken: () => 'tok', getCurrentUser: () => null } }
      ]
    });

    service = TestBed.inject(BookingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getServices()', () => {
    it('should fetch and return services', () => {
      const mockServices = [{ id: 's1', name: 'Cleaning' }];
      service.getServices().subscribe(result => {
        expect(result.length).toBe(1);
      });
      httpMock.expectOne(r => r.url.includes('/services')).flush(mockServices);
    });
  });

  describe('getPopularServices()', () => {
    it('should fetch popular services', () => {
      service.getPopularServices().subscribe();
      const req = httpMock.expectOne(r => r.params.get('isPopular') === 'true');
      req.flush([]);
    });
  });

  describe('getFeaturedServices()', () => {
    it('should fetch featured services', () => {
      service.getFeaturedServices().subscribe();
      const req = httpMock.expectOne(r => r.params.get('isFeatured') === 'true');
      req.flush([]);
    });
  });

  describe('getExpertsByService()', () => {
    it('should fetch and filter experts', () => {
      service.getExpertsByService('Cleaning').subscribe(result => {
        expect(result.length).toBe(1);
      });
      httpMock.expectOne(r => r.url.includes('/users')).flush([
        { id: 'e1', name: 'Expert', skills: ['Cleaning'], role: 'EXPERT' },
        { id: 'e2', name: 'Expert2', skills: ['Plumbing'], role: 'EXPERT' }
      ]);
    });
  });

  describe('getAllExperts()', () => {
    it('should fetch all experts', () => {
      service.getAllExperts().subscribe(result => {
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Expert');
      });
      httpMock.expectOne(r => r.params.get('role') === 'EXPERT').flush([
        { id: 'e1', name: 'Expert', role: 'EXPERT' }
      ]);
    });
  });

  describe('getCustomerBookings()', () => {
    it('should fetch customer bookings', () => {
      service.getCustomerBookings('c1').subscribe(result => {
        expect(result.length).toBe(1);
      });
      httpMock.expectOne(r => r.params.get('customerId') === 'c1').flush([{ id: 'b1' }]);
    });
  });

  describe('getUpcomingBookings()', () => {
    it('should filter for upcoming bookings', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 5);
      const booking = { id: 'b1', status: 'PENDING', date: futureDate.toISOString() };
      const pastBooking = { id: 'b2', status: 'COMPLETED', date: '2020-01-01' };

      service.getUpcomingBookings('c1').subscribe(result => {
        expect(result.length).toBe(1);
        expect(result[0].id).toBe('b1');
      });
      httpMock.expectOne(r => r.params.get('customerId') === 'c1').flush([booking, pastBooking]);
    });
  });

  describe('getCustomerAddresses()', () => {
    it('should fetch addresses', () => {
      service.getCustomerAddresses('c1').subscribe(result => {
        expect(result.length).toBe(1);
      });
      httpMock.expectOne(r => r.url.includes('/addresses')).flush([{ id: 'a1' }]);
    });
  });

  describe('addAddress()', () => {
    it('should create new address', () => {
      const addr = { userId: 'c1', label: 'HOME', houseType: 'Flat', locationType: 'Apt', line1: 'Addr', city: 'City', state: 'State', pincode: '123456', contactName: 'Test', contactNumber: '1234567890' };
      service.addAddress(addr).subscribe(result => {
        expect(result.id).toBeTruthy();
      });
      httpMock.expectOne(r => r.method === 'POST').flush({ ...addr, id: 'addr-1' });
    });
  });

  describe('getAvailableCoupons()', () => {
    it('should fetch active coupons', () => {
      service.getAvailableCoupons().subscribe(result => {
        expect(result.length).toBe(1);
      });
      httpMock.expectOne(r => r.params.get('isActive') === 'true').flush([{ id: 'c1', code: 'SAVE10' }]);
    });
  });

  describe('applyCoupon()', () => {
    it('should apply percentage coupon', () => {
      service.applyCoupon('SAVE10', 1000).subscribe(result => {
        expect(result).toBeTruthy();
        expect(result!.discount).toBe(100);
      });
      httpMock.expectOne(r => r.params.get('code') === 'SAVE10').flush([{
        id: 'c1', code: 'SAVE10', discountType: 'percentage', discountValue: 10,
        minOrderValue: 500, isActive: true
      }]);
    });

    it('should apply flat coupon', () => {
      service.applyCoupon('FLAT50', 1000).subscribe(result => {
        expect(result!.discount).toBe(50);
      });
      httpMock.expectOne(r => r.params.get('code') === 'FLAT50').flush([{
        id: 'c1', code: 'FLAT50', discountType: 'flat', discountValue: 50,
        minOrderValue: 100, isActive: true
      }]);
    });

    it('should return null for invalid coupon', () => {
      service.applyCoupon('INVALID', 1000).subscribe(result => {
        expect(result).toBeNull();
      });
      httpMock.expectOne(r => r.params.get('code') === 'INVALID').flush([]);
    });

    it('should return null when amount below minimum', () => {
      service.applyCoupon('SAVE10', 100).subscribe(result => {
        expect(result).toBeNull();
      });
      httpMock.expectOne(r => r.params.get('code') === 'SAVE10').flush([{
        id: 'c1', code: 'SAVE10', discountType: 'percentage', discountValue: 10,
        minOrderValue: 500, isActive: true
      }]);
    });

    it('should cap discount at maxDiscount', () => {
      service.applyCoupon('SAVE50', 10000).subscribe(result => {
        expect(result!.discount).toBe(200);
      });
      httpMock.expectOne(r => r.params.get('code') === 'SAVE50').flush([{
        id: 'c1', code: 'SAVE50', discountType: 'percentage', discountValue: 50,
        minOrderValue: 100, maxDiscount: 200, isActive: true
      }]);
    });
  });

  describe('createBooking()', () => {
    it('should create booking with OTP', () => {
      service.createBooking({ customerId: 'c1', serviceName: 'Cleaning' }).subscribe(result => {
        expect(result.id).toBeTruthy();
      });
      httpMock.expectOne(r => r.method === 'POST').flush({
        id: 'book-1', customerId: 'c1', otp: '123456'
      });
    });
  });

  describe('updateBookingStatus()', () => {
    it('should update booking status', () => {
      service.updateBookingStatus('b1', 'COMPLETED' as any).subscribe();
      const req = httpMock.expectOne(r => r.method === 'PATCH' && r.url.includes('/bookings/b1'));
      expect(req.request.body.status).toBe('COMPLETED');
      req.flush({ id: 'b1', status: 'COMPLETED' });
    });
  });

  describe('updatePaymentStatus()', () => {
    it('should update payment status', () => {
      service.updatePaymentStatus('b1', 'PAID' as any).subscribe();
      const req = httpMock.expectOne(r => r.method === 'PATCH');
      expect(req.request.body.paymentStatus).toBe('PAID');
      req.flush({ id: 'b1', paymentStatus: 'PAID' });
    });
  });

  describe('getBookingById()', () => {
    it('should fetch booking by id', () => {
      service.getBookingById('b1').subscribe(result => {
        expect(result.id).toBe('b1');
      });
      httpMock.expectOne(r => r.url.includes('/bookings/b1')).flush({ id: 'b1' });
    });
  });

  describe('updateBooking()', () => {
    it('should patch booking', () => {
      service.updateBooking('b1', { notes: 'Updated' }).subscribe();
      const req = httpMock.expectOne(r => r.method === 'PATCH');
      expect(req.request.body.notes).toBe('Updated');
      req.flush({ id: 'b1', notes: 'Updated' });
    });
  });

  describe('getExpertById()', () => {
    it('should fetch expert by id', () => {
      service.getExpertById('e1').subscribe(result => {
        expect(result?.name).toBe('Expert');
      });
      httpMock.expectOne(r => r.url.includes('/users/e1')).flush({
        id: 'e1', name: 'Expert', role: 'EXPERT'
      });
    });
  });

  describe('getFaqs()', () => {
    it('should fetch FAQs', () => {
      service.getFaqs().subscribe(result => {
        expect(result.length).toBe(1);
      });
      httpMock.expectOne(r => r.url.includes('/faqs')).flush([{ id: 'f1', question: 'Q', answer: 'A' }]);
    });
  });

  describe('signals', () => {
    it('services signal should start empty', () => {
      expect(service.services()).toEqual([]);
    });

    it('experts signal should start empty', () => {
      expect(service.experts()).toEqual([]);
    });
  });
});
