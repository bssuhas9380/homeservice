import { authReducer, initialAuthState, AuthState } from './auth.reducer';
import * as AuthActions from './auth.actions';
import { User } from './auth.actions';

describe('Auth Reducer', () => {
  const mockUser: User = {
    id: 'user-1', email: 'test@test.com', name: 'Test User',
    phone: '9876543210', role: 'CUSTOMER'
  };
  const mockToken = 'mock-jwt-token';

  it('should return initial state', () => {
    const action = { type: 'NOOP' } as any;
    const state = authReducer(undefined, action);
    expect(state).toEqual(initialAuthState);
  });

  // Login
  describe('Login', () => {
    it('should set loading on login', () => {
      const action = AuthActions.login({ credentials: { email: 'a@b.com', password: '123' } });
      const state = authReducer(initialAuthState, action);
      expect(state.isLoading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should set user on loginSuccess', () => {
      const action = AuthActions.loginSuccess({ user: mockUser, token: mockToken });
      const state = authReducer(initialAuthState, action);
      expect(state.user).toEqual(mockUser);
      expect(state.token).toBe(mockToken);
      expect(state.isAuthenticated).toBe(true);
      expect(state.isLoading).toBe(false);
    });

    it('should set error on loginFailure', () => {
      const action = AuthActions.loginFailure({ error: 'Invalid credentials' });
      const state = authReducer(initialAuthState, action);
      expect(state.error).toBe('Invalid credentials');
      expect(state.isAuthenticated).toBe(false);
      expect(state.isLoading).toBe(false);
    });
  });

  // Register Customer
  describe('Register Customer', () => {
    it('should set loading on registerCustomer', () => {
      const action = AuthActions.registerCustomer({ data: {} as any });
      const state = authReducer(initialAuthState, action);
      expect(state.isLoading).toBe(true);
      expect(state.registrationSuccess).toBe(false);
    });

    it('should set user on registerCustomerSuccess', () => {
      const action = AuthActions.registerCustomerSuccess({ user: mockUser, token: mockToken });
      const state = authReducer(initialAuthState, action);
      expect(state.user).toEqual(mockUser);
      expect(state.registrationSuccess).toBe(true);
      expect(state.isAuthenticated).toBe(true);
    });

    it('should set error on registerCustomerFailure', () => {
      const action = AuthActions.registerCustomerFailure({ error: 'Email exists' });
      const state = authReducer(initialAuthState, action);
      expect(state.error).toBe('Email exists');
      expect(state.registrationSuccess).toBe(false);
    });
  });

  // Register Expert
  describe('Register Expert', () => {
    it('should set loading on registerExpert', () => {
      const action = AuthActions.registerExpert({ data: {} as any });
      const state = authReducer(initialAuthState, action);
      expect(state.isLoading).toBe(true);
      expect(state.registrationSuccess).toBe(false);
    });

    it('should set user on registerExpertSuccess', () => {
      const action = AuthActions.registerExpertSuccess({ user: { ...mockUser, role: 'EXPERT' }, token: mockToken });
      const state = authReducer(initialAuthState, action);
      expect(state.user?.role).toBe('EXPERT');
      expect(state.registrationSuccess).toBe(true);
    });

    it('should set error on registerExpertFailure', () => {
      const action = AuthActions.registerExpertFailure({ error: 'Failed' });
      const state = authReducer(initialAuthState, action);
      expect(state.error).toBe('Failed');
      expect(state.registrationSuccess).toBe(false);
    });
  });

  // Logout
  describe('Logout', () => {
    it('should set loading on logout', () => {
      const loggedIn: AuthState = { ...initialAuthState, user: mockUser, isAuthenticated: true };
      const state = authReducer(loggedIn, AuthActions.logout());
      expect(state.isLoading).toBe(true);
    });

    it('should reset to initial state on logoutSuccess', () => {
      const loggedIn: AuthState = { ...initialAuthState, user: mockUser, isAuthenticated: true };
      const state = authReducer(loggedIn, AuthActions.logoutSuccess());
      expect(state).toEqual(initialAuthState);
    });
  });

  // Session
  describe('Session', () => {
    it('should set loading on checkSession', () => {
      const state = authReducer(initialAuthState, AuthActions.checkSession());
      expect(state.isLoading).toBe(true);
    });

    it('should set user on sessionValid', () => {
      const action = AuthActions.sessionValid({ user: mockUser, token: mockToken });
      const state = authReducer(initialAuthState, action);
      expect(state.user).toEqual(mockUser);
      expect(state.isAuthenticated).toBe(true);
      expect(state.isLoading).toBe(false);
    });

    it('should reset on sessionInvalid', () => {
      const loggedIn: AuthState = { ...initialAuthState, user: mockUser, isAuthenticated: true };
      const state = authReducer(loggedIn, AuthActions.sessionInvalid());
      expect(state).toEqual(initialAuthState);
    });
  });

  // Update Profile
  describe('Update Profile', () => {
    it('should set loading on updateProfile', () => {
      const action = AuthActions.updateProfile({ data: { name: 'New' } });
      const state = authReducer(initialAuthState, action);
      expect(state.isLoading).toBe(true);
    });

    it('should update user on updateProfileSuccess', () => {
      const updated = { ...mockUser, name: 'New Name' };
      const action = AuthActions.updateProfileSuccess({ user: updated });
      const state = authReducer({ ...initialAuthState, user: mockUser }, action);
      expect(state.user?.name).toBe('New Name');
      expect(state.isLoading).toBe(false);
    });

    it('should set error on updateProfileFailure', () => {
      const action = AuthActions.updateProfileFailure({ error: 'Failed' });
      const state = authReducer(initialAuthState, action);
      expect(state.error).toBe('Failed');
    });
  });

  // Clear Error
  it('should clear error on clearAuthError', () => {
    const withError: AuthState = { ...initialAuthState, error: 'some error' };
    const state = authReducer(withError, AuthActions.clearAuthError());
    expect(state.error).toBeNull();
  });
});
