import { NotificationService, NotificationType } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService();
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty notifications', () => {
    expect(service.notifications()).toEqual([]);
  });

  it('should start with null latestNotification', () => {
    expect(service.latestNotification()).toBeNull();
  });

  describe('show()', () => {
    it('should add a notification', () => {
      service.show({ type: 'info', title: 'Test', message: 'Hello' });
      expect(service.notifications().length).toBe(1);
      expect(service.notifications()[0].title).toBe('Test');
    });

    it('should return notification id', () => {
      const id = service.show({ type: 'info', title: 'T', message: 'M' });
      expect(id).toContain('notification-');
    });

    it('should auto-dismiss after duration', () => {
      service.show({ type: 'info', title: 'T', message: 'M', duration: 1000 });
      expect(service.notifications().length).toBe(1);
      jasmine.clock().tick(1001);
      expect(service.notifications().length).toBe(0);
    });

    it('should not auto-dismiss when duration is 0', () => {
      service.show({ type: 'error', title: 'T', message: 'M', duration: 0 });
      jasmine.clock().tick(10000);
      expect(service.notifications().length).toBe(1);
    });

    it('should set dismissible to true by default', () => {
      service.show({ type: 'info', title: 'T', message: 'M' });
      expect(service.notifications()[0].dismissible).toBe(true);
    });

    it('should use default duration per type', () => {
      service.show({ type: 'success', title: 'T', message: 'M' });
      expect(service.notifications()[0].duration).toBe(3000);
    });
  });

  describe('convenience methods', () => {
    it('success() should add success notification', () => {
      service.success('Title', 'Msg');
      expect(service.notifications()[0].type).toBe('success');
    });

    it('error() should add error notification with no auto-dismiss', () => {
      service.error('Title', 'Msg');
      expect(service.notifications()[0].type).toBe('error');
      expect(service.notifications()[0].duration).toBe(0);
    });

    it('warning() should add warning notification', () => {
      service.warning('Title', 'Msg');
      expect(service.notifications()[0].type).toBe('warning');
    });

    it('info() should add info notification', () => {
      service.info('Title', 'Msg');
      expect(service.notifications()[0].type).toBe('info');
    });

    it('should accept custom duration', () => {
      service.success('T', 'M', 5000);
      expect(service.notifications()[0].duration).toBe(5000);
    });
  });

  describe('dismiss()', () => {
    it('should remove notification by id', () => {
      const id = service.show({ type: 'info', title: 'T', message: 'M', duration: 0 });
      service.dismiss(id);
      expect(service.notifications().length).toBe(0);
    });

    it('should not affect other notifications', () => {
      const id1 = service.show({ type: 'info', title: 'A', message: 'M', duration: 0 });
      service.show({ type: 'info', title: 'B', message: 'M', duration: 0 });
      service.dismiss(id1);
      expect(service.notifications().length).toBe(1);
      expect(service.notifications()[0].title).toBe('B');
    });
  });

  describe('dismissAll()', () => {
    it('should remove all notifications', () => {
      service.show({ type: 'info', title: 'A', message: 'M', duration: 0 });
      service.show({ type: 'error', title: 'B', message: 'M', duration: 0 });
      service.dismissAll();
      expect(service.notifications().length).toBe(0);
    });
  });

  describe('dismissByType()', () => {
    it('should remove only notifications of given type', () => {
      service.show({ type: 'info', title: 'A', message: 'M', duration: 0 });
      service.show({ type: 'error', title: 'B', message: 'M', duration: 0 });
      service.show({ type: 'info', title: 'C', message: 'M', duration: 0 });
      service.dismissByType('info');
      expect(service.notifications().length).toBe(1);
      expect(service.notifications()[0].type).toBe('error');
    });
  });

  describe('latestNotification', () => {
    it('should return last added notification', () => {
      service.show({ type: 'info', title: 'First', message: 'M', duration: 0 });
      service.show({ type: 'error', title: 'Last', message: 'M', duration: 0 });
      expect(service.latestNotification()?.title).toBe('Last');
    });
  });
});
