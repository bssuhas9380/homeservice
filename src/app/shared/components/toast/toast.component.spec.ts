import { TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast.component';
import { NotificationService } from '../../../core/services/notification.service';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let notificationService: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [NotificationService]
    }).compileComponents();

    const fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have access to notificationService', () => {
    expect(component.notificationService).toBeTruthy();
  });

  it('should call dismiss on service', () => {
    spyOn(notificationService, 'dismiss');
    component.dismiss('test-id');
    expect(notificationService.dismiss).toHaveBeenCalledWith('test-id');
  });

  it('should render notifications from service', () => {
    notificationService.show({ type: 'success', title: 'Test', message: 'Hello', duration: 0 });
    expect(notificationService.notifications().length).toBe(1);
  });
});
