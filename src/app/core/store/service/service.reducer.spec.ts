import { serviceReducer, initialServiceState } from './service.reducer';
import * as ServiceActions from './service.actions';
import { Service, Expert } from './service.actions';

describe('Service Reducer', () => {
  const mockService: Service = {
    id: 's1', name: 'Cleaning', description: 'House cleaning',
    icon: '🧹', image: 'cleaning.jpg', basePrice: 499,
    priceUnit: 'per hour', isPopular: true, isFeatured: false
  };

  const mockExpert: Expert = {
    id: 'e1', name: 'John', rating: 4.5, totalRatings: 100,
    experience: 5, hourlyRate: 299, skills: ['Cleaning'],
    languages: ['Hindi', 'English'], isVerified: true, isOnline: true
  };

  it('should return initial state', () => {
    const state = serviceReducer(undefined, { type: 'NOOP' } as any);
    expect(state).toEqual(initialServiceState);
  });

  // Load Services
  describe('Load Services', () => {
    it('should set loading on loadServices', () => {
      const state = serviceReducer(initialServiceState, ServiceActions.loadServices());
      expect(state.isLoadingServices).toBe(true);
    });

    it('should set services on loadServicesSuccess', () => {
      const state = serviceReducer(initialServiceState, ServiceActions.loadServicesSuccess({ services: [mockService] }));
      expect(state.services.length).toBe(1);
      expect(state.isLoadingServices).toBe(false);
    });

    it('should set error on loadServicesFailure', () => {
      const state = serviceReducer(initialServiceState, ServiceActions.loadServicesFailure({ error: 'Failed' }));
      expect(state.error).toBe('Failed');
      expect(state.isLoadingServices).toBe(false);
    });
  });

  // Load Experts
  describe('Load Experts', () => {
    it('should set loading on loadExperts', () => {
      const state = serviceReducer(initialServiceState, ServiceActions.loadExperts({ serviceName: 'Cleaning' }));
      expect(state.isLoadingExperts).toBe(true);
    });

    it('should set experts on loadExpertsSuccess', () => {
      const state = serviceReducer(initialServiceState, ServiceActions.loadExpertsSuccess({ experts: [mockExpert] }));
      expect(state.experts.length).toBe(1);
      expect(state.isLoadingExperts).toBe(false);
    });

    it('should set error on loadExpertsFailure', () => {
      const state = serviceReducer(initialServiceState, ServiceActions.loadExpertsFailure({ error: 'Err' }));
      expect(state.error).toBe('Err');
    });
  });

  // Select Service
  describe('Select Service', () => {
    it('should set selectedServiceId and clear expert', () => {
      const withExpert = { ...initialServiceState, selectedExpert: mockExpert };
      const state = serviceReducer(withExpert, ServiceActions.selectService({ serviceId: 's1' }));
      expect(state.selectedServiceId).toBe('s1');
      expect(state.selectedExpert).toBeNull();
    });

    it('should clear selectedServiceId', () => {
      const withService = { ...initialServiceState, selectedServiceId: 's1' };
      const state = serviceReducer(withService, ServiceActions.clearSelectedService());
      expect(state.selectedServiceId).toBeNull();
      expect(state.selectedExpert).toBeNull();
    });
  });

  // Select Expert
  describe('Select Expert', () => {
    it('should set selectedExpert', () => {
      const state = serviceReducer(initialServiceState, ServiceActions.selectExpert({ expert: mockExpert }));
      expect(state.selectedExpert).toEqual(mockExpert);
    });

    it('should clear selectedExpert', () => {
      const withExpert = { ...initialServiceState, selectedExpert: mockExpert };
      const state = serviceReducer(withExpert, ServiceActions.clearSelectedExpert());
      expect(state.selectedExpert).toBeNull();
    });
  });

  // Clear Error
  it('should clear error', () => {
    const withError = { ...initialServiceState, error: 'err' };
    const state = serviceReducer(withError, ServiceActions.clearServiceError());
    expect(state.error).toBeNull();
  });
});
