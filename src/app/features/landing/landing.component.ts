import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  features = [
    {
      icon: 'verified-experts',
      image: 'verified.png',
      title: 'Verified Experts',
      description: 'All experts undergo KYC verification and background checks'
    },
    {
      icon: 'fast-service',
      image: 'fast-service.png',
      title: 'Fast Service',
      description: 'ASAP bookings or schedule up to 4 days in advance'
    },
    {
      icon: 'quality-assurance',
      image: 'quality-assurance.png',
      title: 'Quality Assurance',
      description: 'OTP-verified service start and customer ratings'
    },
    {
      icon: 'expert-support',
      image: 'expert-support.png',
      title: 'Expert Support',
      description: 'OTP-verified service start and customer ratings'
    }
  ];

  scrollToFeatures(): void {
    const element = document.getElementById('why-choose');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
