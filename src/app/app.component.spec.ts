import { TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthActions } from './core/store/auth/auth.actions';
import { ToastComponent } from './shared/components/toast/toast.component';
import { NotificationService } from './core/services/notification.service';

describe('AppComponent', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule,
        ToastComponent
      ],
      providers: [
        provideMockStore(),
        NotificationService
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have title HouseMate', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toBe('HouseMate');
  });

  it('should dispatch checkSession on init', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(AuthActions.checkSession());
  });

  it('should dispatch logout when token is expired', fakeAsync(() => {
    // Set an expired token
    const payload = btoa(JSON.stringify({
      sub: 'u1', exp: Math.floor(Date.now() / 1000) - 100
    }));
    const token = `${btoa('h')}.${payload}.${btoa('s')}`;
    localStorage.setItem('housemate_access_token', token);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // Tick past the interval (60s)
    tick(60001);

    expect(store.dispatch).toHaveBeenCalledWith(AuthActions.logout());

    // Cleanup
    fixture.componentInstance.ngOnDestroy();
    discardPeriodicTasks();
  }));

  it('should dispatch logout for corrupted token', fakeAsync(() => {
    // Token must have 3 dot-separated parts to enter the try block,
    // but the second part must be invalid base64/JSON to trigger catch
    localStorage.setItem('housemate_access_token', 'a.!!!invalid.c');

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    tick(60001);

    expect(store.dispatch).toHaveBeenCalledWith(AuthActions.logout());

    fixture.componentInstance.ngOnDestroy();
    discardPeriodicTasks();
  }));

  it('should clear interval on destroy', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    fixture.componentInstance.ngOnDestroy();
    discardPeriodicTasks();
    // No errors expected
  }));

  it('should not dispatch logout when token is valid', fakeAsync(() => {
    const payload = btoa(JSON.stringify({
      sub: 'u1', exp: Math.floor(Date.now() / 1000) + 86400
    }));
    const token = `${btoa('h')}.${payload}.${btoa('s')}`;
    localStorage.setItem('housemate_access_token', token);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // Reset dispatch calls to only check interval-based calls
    (store.dispatch as jasmine.Spy).calls.reset();

    tick(60001);

    // Should NOT have dispatched logout
    const logoutCalls = (store.dispatch as jasmine.Spy).calls.allArgs()
      .filter((args: any[]) => args[0]?.type === AuthActions.logout.type);
    expect(logoutCalls.length).toBe(0);

    fixture.componentInstance.ngOnDestroy();
    discardPeriodicTasks();
  }));
});
