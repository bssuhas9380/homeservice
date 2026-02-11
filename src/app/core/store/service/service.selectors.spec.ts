import * as fromSelectors from './service.selectors';
import { ServiceState, initialServiceState } from './service.reducer';
import { Service, Expert } from './service.actions';

describe('Service Selectors', () => {
  const mockService: Service = {
    id: 's1', name: 'Cleaning', description: 'House cleaning',
    icon: '🧹', image: 'cleaning.jpg', basePrice: 499,
    priceUnit: 'per hour', isPopular: true, isFeatured: false
  };

  const mockService2: Service = { ...mockService, id: 's2', name: 'Cooking', isPopular: false, isFeatured: true };

  const mockExpert: Expert = {
    id: 'e1', name: 'John', rating: 4.5, totalRatings: 100,
    experience: 5, hourlyRate: 299, skills: ['Cleaning'],
    languages: ['Hindi'], isVerified: true, isOnline: true
  };

  const state: ServiceState = {
    services: [mockService, mockService2],
    experts: [mockExpert],
    selectedServiceId: 's1',
    selectedExpert: mockExpert,
    isLoadingServices: false,
    isLoadingExperts: false,
    error: null
  };

  it('selectAllServices should return all services', () => {
    expect(fromSelectors.selectAllServices.projector(state)).toEqual([mockService, mockService2]);
  });

  it('selectPopularServices should return popular services', () => {
    const result = fromSelectors.selectPopularServices.projector([mockService, mockService2]);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Cleaning');
  });

  it('selectFeaturedServices should return featured services', () => {
    const result = fromSelectors.selectFeaturedServices.projector([mockService, mockService2]);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Cooking');
  });

  it('selectServicesLoading should return loading', () => {
    expect(fromSelectors.selectServicesLoading.projector({ ...state, isLoadingServices: true })).toBe(true);
  });

  it('selectAllExperts should return experts', () => {
    expect(fromSelectors.selectAllExperts.projector(state)).toEqual([mockExpert]);
  });

  it('selectExpertsLoading should return loading', () => {
    expect(fromSelectors.selectExpertsLoading.projector({ ...state, isLoadingExperts: true })).toBe(true);
  });

  it('selectSelectedServiceId should return id', () => {
    expect(fromSelectors.selectSelectedServiceId.projector(state)).toBe('s1');
  });

  it('selectSelectedService should return matching service', () => {
    const result = fromSelectors.selectSelectedService.projector([mockService, mockService2], 's1');
    expect(result).toEqual(mockService);
  });

  it('selectSelectedService should return null when no id', () => {
    expect(fromSelectors.selectSelectedService.projector([mockService], null)).toBeNull();
  });

  it('selectSelectedExpert should return expert', () => {
    expect(fromSelectors.selectSelectedExpert.projector(state)).toEqual(mockExpert);
  });

  it('selectServiceError should return error', () => {
    expect(fromSelectors.selectServiceError.projector({ ...state, error: 'err' })).toBe('err');
  });

  it('selectServiceById should return service by id', () => {
    const selector = fromSelectors.selectServiceById('s1');
    expect(selector.projector([mockService, mockService2])).toEqual(mockService);
  });
});
