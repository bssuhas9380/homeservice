import { createAction, props } from '@ngrx/store';

// User interface
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'CUSTOMER' | 'EXPERT';
  photo?: string;
  age?: number;
  location?: {
    city: string;
    area: string;
  };
  // Expert specific
  skills?: string[];
  experience?: number;
  rating?: number;
  totalRatings?: number;
  languages?: string[];
  hourlyRate?: number;
  isVerified?: boolean;
  isOnline?: boolean;
  createdAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCustomerData {
  name: string;
  email: string;
  phone: string;
  password: string;
  age?: number;
  location?: {
    city: string;
    area: string;
  };
}

export interface RegisterExpertData {
  personalInfo: {
    fullName: string;
    email: string;
    password: string;
    mobileNumber: string;
    dateOfBirth: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
  };
  serviceProfile: {
    experienceYears: string;
    experienceMonths?: string;
    specializations?: string;
    hourlyRate: number;
    aboutYourself?: string;
    services: string[];
    languages: string[];
    education: string;
    availability: string;
  };
  idVerification: {
    idType: string;
    idNumber: string;
    idDocument?: string;
  };
}

// Action Types
export const AuthActionTypes = {
  // Login
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAILURE: '[Auth] Login Failure',
  
  // Register Customer
  REGISTER_CUSTOMER: '[Auth] Register Customer',
  REGISTER_CUSTOMER_SUCCESS: '[Auth] Register Customer Success',
  REGISTER_CUSTOMER_FAILURE: '[Auth] Register Customer Failure',
  
  // Register Expert
  REGISTER_EXPERT: '[Auth] Register Expert',
  REGISTER_EXPERT_SUCCESS: '[Auth] Register Expert Success',
  REGISTER_EXPERT_FAILURE: '[Auth] Register Expert Failure',
  
  // Logout
  LOGOUT: '[Auth] Logout',
  LOGOUT_SUCCESS: '[Auth] Logout Success',
  
  // Session
  CHECK_SESSION: '[Auth] Check Session',
  SESSION_VALID: '[Auth] Session Valid',
  SESSION_INVALID: '[Auth] Session Invalid',
  
  // Profile
  UPDATE_PROFILE: '[Auth] Update Profile',
  UPDATE_PROFILE_SUCCESS: '[Auth] Update Profile Success',
  UPDATE_PROFILE_FAILURE: '[Auth] Update Profile Failure',
  
  // Clear Error
  CLEAR_ERROR: '[Auth] Clear Error'
} as const;

// Login Actions
export const login = createAction(
  AuthActionTypes.LOGIN,
  props<{ credentials: LoginCredentials }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ user: User; token: string }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: string }>()
);

// Register Customer Actions
export const registerCustomer = createAction(
  AuthActionTypes.REGISTER_CUSTOMER,
  props<{ data: RegisterCustomerData }>()
);

export const registerCustomerSuccess = createAction(
  AuthActionTypes.REGISTER_CUSTOMER_SUCCESS,
  props<{ user: User; token: string }>()
);

export const registerCustomerFailure = createAction(
  AuthActionTypes.REGISTER_CUSTOMER_FAILURE,
  props<{ error: string }>()
);

// Register Expert Actions
export const registerExpert = createAction(
  AuthActionTypes.REGISTER_EXPERT,
  props<{ data: RegisterExpertData }>()
);

export const registerExpertSuccess = createAction(
  AuthActionTypes.REGISTER_EXPERT_SUCCESS,
  props<{ user: User; token: string }>()
);

export const registerExpertFailure = createAction(
  AuthActionTypes.REGISTER_EXPERT_FAILURE,
  props<{ error: string }>()
);

// Logout Actions
export const logout = createAction(AuthActionTypes.LOGOUT);
export const logoutSuccess = createAction(AuthActionTypes.LOGOUT_SUCCESS);

// Session Actions
export const checkSession = createAction(AuthActionTypes.CHECK_SESSION);
export const sessionValid = createAction(
  AuthActionTypes.SESSION_VALID,
  props<{ user: User; token: string }>()
);
export const sessionInvalid = createAction(AuthActionTypes.SESSION_INVALID);

// Profile Actions
export const updateProfile = createAction(
  AuthActionTypes.UPDATE_PROFILE,
  props<{ data: Partial<User> }>()
);

export const updateProfileSuccess = createAction(
  AuthActionTypes.UPDATE_PROFILE_SUCCESS,
  props<{ user: User }>()
);

export const updateProfileFailure = createAction(
  AuthActionTypes.UPDATE_PROFILE_FAILURE,
  props<{ error: string }>()
);

// Clear Error
export const clearAuthError = createAction(AuthActionTypes.CLEAR_ERROR);

// Grouped actions namespace for easier imports
export const AuthActions = {
  login,
  loginSuccess,
  loginFailure,
  registerCustomer,
  registerCustomerSuccess,
  registerCustomerFailure,
  registerExpert,
  registerExpertSuccess,
  registerExpertFailure,
  logout,
  logoutSuccess,
  checkSession,
  sessionValid,
  sessionInvalid,
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
  clearAuthError
};
