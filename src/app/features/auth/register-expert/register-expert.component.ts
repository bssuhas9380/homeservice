import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

interface ServiceOption {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

interface LanguageOption {
  name: string;
  selected: boolean;
}

interface IdTypeOption {
  value: string;
  label: string;
  placeholder: string;
}

@Component({
  selector: 'app-register-expert',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './register-expert.component.html',
  styleUrl: './register-expert.component.scss'
})
export class RegisterExpertComponent {
  currentStep = 1;
  totalSteps = 3;
  
  // Step 1: Personal Information Form
  personalInfoForm: FormGroup;
  
  // Step 2: Service Profile Form
  serviceProfileForm: FormGroup;
  
  // Step 3: ID Verification Form
  idVerificationForm: FormGroup;

  // Service options
  services: ServiceOption[] = [
    { id: 'cleaning', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'cooking', name: 'Cooking', icon: 'cooking-icon.png', selected: false },
    { id: 'gardening', name: 'Gardening', icon: 'gardening-icon.png', selected: false },
    { id: 'plumbing', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'electrical', name: 'Gardening', icon: 'gardening-icon.png', selected: false },
    { id: 'cleaning2', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'cooking2', name: 'Cooking', icon: 'cooking-icon.png', selected: false },
    { id: 'gardening2', name: 'Gardening', icon: 'gardening-icon.png', selected: false },
    { id: 'cleaning3', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'gardening3', name: 'Gardening', icon: 'gardening-icon.png', selected: false }
  ];

  // Language options
  languages: LanguageOption[] = [
    { name: 'English', selected: false },
    { name: 'Hindi', selected: false },
    { name: 'Marathi', selected: false },
    { name: 'Tamil', selected: false },
    { name: 'Telugu', selected: false },
    { name: 'Kannada', selected: false },
    { name: 'Bengali', selected: false },
    { name: 'Gujarati', selected: false },
    { name: 'Malayalam', selected: false },
    { name: 'Punjabi', selected: false },
    { name: 'Urdu', selected: false }
  ];

  // Education options
  educationLevels = [
    'Below 10th',
    '10th Pass',
    '12th Pass',
    'Graduate',
    'Post Graduate',
    'Diploma/Certificate Course'
  ];
  selectedEducation = '';

  // Availability options
  availabilityOptions = [
    { value: 'full-time', label: 'Full-time', description: 'Available 6-8 hours per day' },
    { value: 'part-time', label: 'Part-time', description: 'Available 3-5 hours per day' },
    { value: 'flexible', label: 'Flexible', description: 'Available as needed' }
  ];
  selectedAvailability = '';

  // Experience years and months
  experienceYears = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  experienceMonths = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

  // ID Type options for Step 3
  idTypes: IdTypeOption[] = [
    { value: 'aadhaar', label: 'Aadhaar Card', placeholder: 'Enter 12-digit Aadhaar number' },
    { value: 'pan', label: 'PAN Card', placeholder: 'Enter 10-character PAN number' },
    { value: 'voter', label: 'Voter ID', placeholder: 'Enter Voter ID number' },
    { value: 'passport', label: 'Passport', placeholder: 'Enter Passport number' },
    { value: 'driving', label: 'Driving License', placeholder: 'Enter DL number' }
  ];
  selectedIdType = '';
  uploadedFileName = '';
  termsAccepted = false;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize forms
    this.personalInfoForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
    });

    this.serviceProfileForm = this.fb.group({
      experienceYears: ['', Validators.required],
      experienceMonths: [''],
      specializations: [''],
      hourlyRate: ['', [Validators.required, Validators.min(0)]],
      aboutYourself: ['']
    });

    this.idVerificationForm = this.fb.group({
      idType: ['', Validators.required],
      idNumber: ['', Validators.required],
      idDocument: ['']
    });
  }

  // Toggle service selection
  toggleService(service: ServiceOption): void {
    service.selected = !service.selected;
  }

  // Toggle language selection
  toggleLanguage(language: LanguageOption): void {
    language.selected = !language.selected;
  }

  // Select education level
  selectEducation(level: string): void {
    this.selectedEducation = level;
  }

  // Select availability
  selectAvailability(value: string): void {
    this.selectedAvailability = value;
  }

  // Check if at least one service is selected
  hasSelectedServices(): boolean {
    return this.services.some(s => s.selected);
  }

  // Check if at least one language is selected
  hasSelectedLanguages(): boolean {
    return this.languages.some(l => l.selected);
  }

  // Navigate to next step
  nextStep(): void {
    if (this.currentStep === 1 && this.personalInfoForm.valid) {
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      if (this.hasSelectedServices() && this.hasSelectedLanguages() && 
          this.selectedEducation && this.selectedAvailability && 
          this.serviceProfileForm.get('hourlyRate')?.valid) {
        this.currentStep = 3;
      }
    }
  }

  // Navigate to previous step
  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Go to specific step
  goToStep(step: number): void {
    if (step < this.currentStep) {
      this.currentStep = step;
    }
  }

  // Submit registration
  onSubmit(): void {
    const registrationData = {
      personalInfo: this.personalInfoForm.value,
      serviceProfile: {
        ...this.serviceProfileForm.value,
        services: this.services.filter(s => s.selected).map(s => s.id),
        languages: this.languages.filter(l => l.selected).map(l => l.name),
        education: this.selectedEducation,
        availability: this.selectedAvailability
      },
      idVerification: this.idVerificationForm.value
    };
    console.log('Registration submitted:', registrationData);
    // Navigate to success or login page
    this.router.navigate(['/login'], { queryParams: { role: 'expert' } });
  }

  // Check if step is completed
  isStepCompleted(step: number): boolean {
    if (step === 1) {
      return this.currentStep > 1;
    } else if (step === 2) {
      return this.currentStep > 2;
    }
    return false;
  }

  // Step 3 Methods
  selectIdType(idType: string): void {
    this.selectedIdType = idType;
    this.idVerificationForm.patchValue({ idType });
  }

  getIdPlaceholder(): string {
    const found = this.idTypes.find(t => t.value === this.selectedIdType);
    return found?.placeholder || 'Enter your ID number';
  }

  triggerFileUpload(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.size <= 5 * 1024 * 1024) { // 5MB limit
        this.uploadedFileName = file.name;
        this.idVerificationForm.patchValue({ idDocument: file.name });
      } else {
        alert('File size must be less than 5MB');
      }
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (file.size <= 5 * 1024 * 1024) { // 5MB limit
        this.uploadedFileName = file.name;
        this.idVerificationForm.patchValue({ idDocument: file.name });
      } else {
        alert('File size must be less than 5MB');
      }
    }
  }

  removeUploadedFile(event: Event): void {
    event.stopPropagation();
    this.uploadedFileName = '';
    this.idVerificationForm.patchValue({ idDocument: '' });
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  canSubmit(): boolean {
    return this.selectedIdType !== '' && 
           this.idVerificationForm.get('idNumber')?.valid === true && 
           this.uploadedFileName !== '' && 
           this.termsAccepted;
  }
}

