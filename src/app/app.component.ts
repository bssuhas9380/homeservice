import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastComponent } from './shared/components/toast/toast.component';
import { AuthActions } from './core/store/auth/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  template: `
    <router-outlet />
    <app-toast />
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'HouseMate';
  private readonly store = inject(Store);
  private tokenCheckInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    // Restore session from localStorage on app startup
    this.store.dispatch(AuthActions.checkSession());

    // Periodically check token expiry every 60 seconds
    this.tokenCheckInterval = setInterval(() => {
      const token = localStorage.getItem('housemate_access_token');
      if (token) {
        try {
          const parts = token.split('.');
          if (parts.length === 3) {
            const payload = JSON.parse(atob(parts[1]));
            if (payload.exp <= Math.floor(Date.now() / 1000)) {
              // Token expired — force logout
              this.store.dispatch(AuthActions.logout());
            }
          }
        } catch {
          // Corrupted token — force logout
          this.store.dispatch(AuthActions.logout());
        }
      }
    }, 60000);
  }

  ngOnDestroy(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }
  }
}
