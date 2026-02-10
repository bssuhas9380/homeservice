import { Component, inject, signal, computed, input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Input for page type (customer, expert, admin)
  pageType = input<'customer' | 'expert' | 'admin'>('customer');

  isUserMenuOpen = signal(false);

  userName = computed(() => {
    const user = this.authService.currentUser();
    return user?.name || 'John Doe';
  });

  userAvatar = computed(() => {
    return 'assets/images/default-avatar.png';
  });

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
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
