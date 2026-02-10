// User Role Enum
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  EXPERT = 'EXPERT'
}

// Base User Interface
export interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
  age: number;
  role: UserRole;
  location: Location;
  createdAt: string;
  updatedAt?: string;
}

// Customer Interface
export interface Customer extends User {
  role: UserRole.CUSTOMER;
  addresses: Address[];
  bookingsCount?: number;
}

// Expert Interface
export interface Expert extends User {
  role: UserRole.EXPERT;
  skills: string[];
  experience: number; // years
  rating: number;
  totalRatings: number;
  languages: string[];
  certificates?: string[];
  hourlyRate: number;
  availability: AvailabilitySchedule;
  isOnline: boolean;
  isVerified: boolean;
  idProof: IdProof;
  photo?: string;
  bio?: string;
  distanceFromCustomer?: number; // calculated field in km
}

// Location Interface
export interface Location {
  city: string;
  area: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Address Interface
export interface Address {
  id: string;
  userId: string;
  label: AddressLabel;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export enum AddressLabel {
  HOME = 'HOME',
  WORK = 'WORK',
  OTHER = 'OTHER'
}

// ID Proof Interface
export interface IdProof {
  type: IdProofType;
  number: string;
  documentUrl?: string;
}

export enum IdProofType {
  AADHAAR = 'AADHAAR',
  PAN = 'PAN',
  DRIVING_LICENSE = 'DRIVING_LICENSE',
  VOTER_ID = 'VOTER_ID'
}

// Availability Schedule
export interface AvailabilitySchedule {
  monday: TimeSlot[];
  tuesday: TimeSlot[];
  wednesday: TimeSlot[];
  thursday: TimeSlot[];
  friday: TimeSlot[];
  saturday: TimeSlot[];
  sunday: TimeSlot[];
}

export interface TimeSlot {
  start: string; // HH:mm format
  end: string;   // HH:mm format
}

// Auth DTOs
export interface LoginDTO {
  email: string;
  password: string;
  role: UserRole;
}

export interface RegisterCustomerDTO {
  email: string;
  password: string;
  name: string;
  phone: string;
  age: number;
  location: Location;
}

export interface RegisterExpertDTO extends RegisterCustomerDTO {
  skills: string[];
  experience: number;
  languages: string[];
  hourlyRate: number;
  idProof: IdProof;
  bio?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}
