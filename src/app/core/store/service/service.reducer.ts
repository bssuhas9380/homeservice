import { createReducer, on } from '@ngrx/store';
import { Service, Expert } from './service.actions';
import * as ServiceActions from './service.actions';

export interface ServiceState {
  services: Service[];
  experts: Expert[];
  selectedServiceId: string | null;
  selectedExpert: Expert | null;
  isLoadingServices: boolean;
  isLoadingExperts: boolean;
  error: string | null;
}

export const initialServiceState: ServiceState = {
  services: [],
  experts: [],
  selectedServiceId: null,
  selectedExpert: null,
  isLoadingServices: false,
  isLoadingExperts: false,
  error: null
};

export const serviceReducer = createReducer(
  initialServiceState,

  // Load Services
  on(ServiceActions.loadServices, (state) => ({
    ...state,
    isLoadingServices: true,
    error: null
  })),

  on(ServiceActions.loadServicesSuccess, (state, { services }) => ({
    ...state,
    services,
    isLoadingServices: false,
    error: null
  })),

  on(ServiceActions.loadServicesFailure, (state, { error }) => ({
    ...state,
    isLoadingServices: false,
    error
  })),

  // Load Experts
  on(ServiceActions.loadExperts, (state) => ({
    ...state,
    isLoadingExperts: true,
    error: null
  })),

  on(ServiceActions.loadExpertsSuccess, (state, { experts }) => ({
    ...state,
    experts,
    isLoadingExperts: false,
    error: null
  })),

  on(ServiceActions.loadExpertsFailure, (state, { error }) => ({
    ...state,
    isLoadingExperts: false,
    error
  })),

  // Select Service
  on(ServiceActions.selectService, (state, { serviceId }) => ({
    ...state,
    selectedServiceId: serviceId,
    selectedExpert: null // Clear expert when service changes
  })),

  on(ServiceActions.clearSelectedService, (state) => ({
    ...state,
    selectedServiceId: null,
    selectedExpert: null
  })),

  // Select Expert
  on(ServiceActions.selectExpert, (state, { expert }) => ({
    ...state,
    selectedExpert: expert
  })),

  on(ServiceActions.clearSelectedExpert, (state) => ({
    ...state,
    selectedExpert: null
  })),

  // Clear Error
  on(ServiceActions.clearServiceError, (state) => ({
    ...state,
    error: null
  }))
);
