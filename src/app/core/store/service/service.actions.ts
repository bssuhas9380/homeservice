import { createAction, props } from '@ngrx/store';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  basePrice: number;
  priceUnit: string;
  isPopular: boolean;
  isFeatured: boolean;
  discount?: number;
}

export interface Expert {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  totalRatings: number;
  experience: number;
  hourlyRate: number;
  distance?: number;
  skills: string[];
  languages: string[];
  isVerified: boolean;
  isOnline: boolean;
  phone?: string;
}

// Action Types
export const ServiceActionTypes = {
  // Load Services
  LOAD_SERVICES: '[Service] Load Services',
  LOAD_SERVICES_SUCCESS: '[Service] Load Services Success',
  LOAD_SERVICES_FAILURE: '[Service] Load Services Failure',

  // Load Experts
  LOAD_EXPERTS: '[Service] Load Experts',
  LOAD_EXPERTS_SUCCESS: '[Service] Load Experts Success',
  LOAD_EXPERTS_FAILURE: '[Service] Load Experts Failure',

  // Select Service
  SELECT_SERVICE: '[Service] Select Service',
  CLEAR_SELECTED_SERVICE: '[Service] Clear Selected Service',

  // Select Expert
  SELECT_EXPERT: '[Service] Select Expert',
  CLEAR_SELECTED_EXPERT: '[Service] Clear Selected Expert',

  // Clear Error
  CLEAR_SERVICE_ERROR: '[Service] Clear Error'
} as const;

// Load Services
export const loadServices = createAction(ServiceActionTypes.LOAD_SERVICES);

export const loadServicesSuccess = createAction(
  ServiceActionTypes.LOAD_SERVICES_SUCCESS,
  props<{ services: Service[] }>()
);

export const loadServicesFailure = createAction(
  ServiceActionTypes.LOAD_SERVICES_FAILURE,
  props<{ error: string }>()
);

// Load Experts
export const loadExperts = createAction(
  ServiceActionTypes.LOAD_EXPERTS,
  props<{ serviceName?: string }>()
);

export const loadExpertsSuccess = createAction(
  ServiceActionTypes.LOAD_EXPERTS_SUCCESS,
  props<{ experts: Expert[] }>()
);

export const loadExpertsFailure = createAction(
  ServiceActionTypes.LOAD_EXPERTS_FAILURE,
  props<{ error: string }>()
);

// Select Service
export const selectService = createAction(
  ServiceActionTypes.SELECT_SERVICE,
  props<{ serviceId: string }>()
);

export const clearSelectedService = createAction(ServiceActionTypes.CLEAR_SELECTED_SERVICE);

// Select Expert
export const selectExpert = createAction(
  ServiceActionTypes.SELECT_EXPERT,
  props<{ expert: Expert }>()
);

export const clearSelectedExpert = createAction(ServiceActionTypes.CLEAR_SELECTED_EXPERT);

// Clear Error
export const clearServiceError = createAction(ServiceActionTypes.CLEAR_SERVICE_ERROR);
