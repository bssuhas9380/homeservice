import { createReducer, on } from '@ngrx/store';
import { User } from './auth.actions';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  registrationSuccess: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  registrationSuccess: false
};

export const authReducer = createReducer(
  initialAuthState,

  // Login
  on(AuthActions.login, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error
  })),

  // Register Customer
  on(AuthActions.registerCustomer, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    registrationSuccess: false
  })),

  on(AuthActions.registerCustomerSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null,
    registrationSuccess: true
  })),

  on(AuthActions.registerCustomerFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    registrationSuccess: false
  })),

  // Register Expert
  on(AuthActions.registerExpert, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    registrationSuccess: false
  })),

  on(AuthActions.registerExpertSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null,
    registrationSuccess: true
  })),

  on(AuthActions.registerExpertFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    registrationSuccess: false
  })),

  // Logout
  on(AuthActions.logout, (state) => ({
    ...state,
    isLoading: true
  })),

  on(AuthActions.logoutSuccess, () => ({
    ...initialAuthState
  })),

  // Session
  on(AuthActions.checkSession, (state) => ({
    ...state,
    isLoading: true
  })),

  on(AuthActions.sessionValid, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),

  on(AuthActions.sessionInvalid, () => ({
    ...initialAuthState
  })),

  // Update Profile
  on(AuthActions.updateProfile, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(AuthActions.updateProfileSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),

  on(AuthActions.updateProfileFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Clear Error
  on(AuthActions.clearAuthError, (state) => ({
    ...state,
    error: null
  }))
);
