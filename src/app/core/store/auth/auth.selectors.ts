import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// Feature selector
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Selectors
export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);

// Alias for backward compatibility
export const selectAuthLoading = selectIsLoading;

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectRegistrationSuccess = createSelector(
  selectAuthState,
  (state) => state.registrationSuccess
);

export const selectUserRole = createSelector(
  selectUser,
  (user) => user?.role || null
);

export const selectIsCustomer = createSelector(
  selectUserRole,
  (role) => role === 'CUSTOMER'
);

export const selectIsExpert = createSelector(
  selectUserRole,
  (role) => role === 'EXPERT'
);

export const selectUserName = createSelector(
  selectUser,
  (user) => user?.name || ''
);

export const selectUserEmail = createSelector(
  selectUser,
  (user) => user?.email || ''
);

export const selectUserId = createSelector(
  selectUser,
  (user) => user?.id || null
);
