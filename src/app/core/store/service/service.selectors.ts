import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ServiceState } from './service.reducer';

// Feature selector
export const selectServiceState = createFeatureSelector<ServiceState>('services');

// Services selectors
export const selectAllServices = createSelector(
  selectServiceState,
  (state) => state.services
);

export const selectPopularServices = createSelector(
  selectAllServices,
  (services) => services.filter(s => s.isPopular)
);

export const selectFeaturedServices = createSelector(
  selectAllServices,
  (services) => services.filter(s => s.isFeatured)
);

export const selectServicesLoading = createSelector(
  selectServiceState,
  (state) => state.isLoadingServices
);

// Experts selectors
export const selectAllExperts = createSelector(
  selectServiceState,
  (state) => state.experts
);

export const selectExpertsLoading = createSelector(
  selectServiceState,
  (state) => state.isLoadingExperts
);

// Selected selectors
export const selectSelectedServiceId = createSelector(
  selectServiceState,
  (state) => state.selectedServiceId
);

export const selectSelectedService = createSelector(
  selectAllServices,
  selectSelectedServiceId,
  (services, selectedId) => selectedId ? services.find(s => s.id === selectedId) : null
);

export const selectSelectedExpert = createSelector(
  selectServiceState,
  (state) => state.selectedExpert
);

// Error selector
export const selectServiceError = createSelector(
  selectServiceState,
  (state) => state.error
);

// Service by ID
export const selectServiceById = (serviceId: string) => createSelector(
  selectAllServices,
  (services) => services.find(s => s.id === serviceId)
);
