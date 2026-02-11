import * as fromSelectors from './auth.selectors';
import { AuthState, initialAuthState } from './auth.reducer';
import { User } from './auth.actions';

describe('Auth Selectors', () => {
  const mockUser: User = {
    id: 'user-1', email: 'test@test.com', name: 'Test User',
    phone: '9876543210', role: 'CUSTOMER'
  };

  const authenticatedState: AuthState = {
    user: mockUser,
    token: 'test-token',
    isAuthenticated: true,
    isLoading: false,
    error: null,
    registrationSuccess: false
  };

  const rootState = { auth: authenticatedState };
  const emptyRoot = { auth: initialAuthState };

  it('selectUser should return user', () => {
    expect(fromSelectors.selectUser.projector(authenticatedState)).toEqual(mockUser);
  });

  it('selectToken should return token', () => {
    expect(fromSelectors.selectToken.projector(authenticatedState)).toBe('test-token');
  });

  it('selectIsAuthenticated should return true when authenticated', () => {
    expect(fromSelectors.selectIsAuthenticated.projector(authenticatedState)).toBe(true);
  });

  it('selectIsLoading should return loading state', () => {
    expect(fromSelectors.selectIsLoading.projector({ ...authenticatedState, isLoading: true })).toBe(true);
  });

  it('selectAuthError should return error', () => {
    expect(fromSelectors.selectAuthError.projector({ ...authenticatedState, error: 'err' })).toBe('err');
  });

  it('selectRegistrationSuccess should return registrationSuccess', () => {
    expect(fromSelectors.selectRegistrationSuccess.projector({ ...authenticatedState, registrationSuccess: true })).toBe(true);
  });

  it('selectUserRole should return role', () => {
    expect(fromSelectors.selectUserRole.projector(mockUser)).toBe('CUSTOMER');
  });

  it('selectUserRole should return null when no user', () => {
    expect(fromSelectors.selectUserRole.projector(null)).toBeNull();
  });

  it('selectIsCustomer should return true for customer', () => {
    expect(fromSelectors.selectIsCustomer.projector('CUSTOMER')).toBe(true);
  });

  it('selectIsCustomer should return false for expert', () => {
    expect(fromSelectors.selectIsCustomer.projector('EXPERT')).toBe(false);
  });

  it('selectIsExpert should return true for expert', () => {
    expect(fromSelectors.selectIsExpert.projector('EXPERT')).toBe(true);
  });

  it('selectUserName should return name', () => {
    expect(fromSelectors.selectUserName.projector(mockUser)).toBe('Test User');
  });

  it('selectUserName should return empty for null user', () => {
    expect(fromSelectors.selectUserName.projector(null)).toBe('');
  });

  it('selectUserEmail should return email', () => {
    expect(fromSelectors.selectUserEmail.projector(mockUser)).toBe('test@test.com');
  });

  it('selectUserEmail should return empty for null user', () => {
    expect(fromSelectors.selectUserEmail.projector(null)).toBe('');
  });

  it('selectUserId should return id', () => {
    expect(fromSelectors.selectUserId.projector(mockUser)).toBe('user-1');
  });

  it('selectUserId should return null for null user', () => {
    expect(fromSelectors.selectUserId.projector(null)).toBeNull();
  });

  it('selectAuthLoading should be alias for selectIsLoading', () => {
    expect(fromSelectors.selectAuthLoading).toBe(fromSelectors.selectIsLoading);
  });
});
