import { Component, inject, signal, computed, input, HostListener, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { selectUser } from '../../../core/store/auth/auth.selectors';

/** 
 * Type for the page context
 */
export type NavbarPageType = 'customer' | 'expert' | 'admin';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  /**
   * Page type determines the context of the navbar
   * @default 'customer'
   */
  @Input() pageType: NavbarPageType = 'customer';

  /**
   * Event emitted when user clicks logout
   */
  @Output() logoutClicked = new EventEmitter<void>();

  isUserMenuOpen = signal(false);
  private currentUserName = signal<string>('John Doe');

  userName = computed(() => this.currentUserName());

  userAvatar = computed(() => {
    return 'assets/images/default-avatar.png';
  });

  ngOnInit(): void {
    // Subscribe to user from NgRx store
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      if (user) {
        this.currentUserName.set(user.name || 'John Doe');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen.update(v => !v);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.isUserMenuOpen.set(false);
    }
  }

  logout(): void {
    this.logoutClicked.emit();
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/login']);
  }
}
