// Service Category Enum
export enum ServiceCategory {
  CLEANING = 'CLEANING',
  COOKING = 'COOKING',
  GARDENING = 'GARDENING',
  PLUMBING = 'PLUMBING',
  ELECTRICAL = 'ELECTRICAL',
  PAINTING = 'PAINTING',
  CARPENTRY = 'CARPENTRY',
  PEST_CONTROL = 'PEST_CONTROL'
}

// Service Interface
export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  basePrice: number;
  duration: number; // minutes
  icon?: string;
  addons?: ServiceAddon[];
}

// Service Addon
export interface ServiceAddon {
  id: string;
  name: string;
  price: number;
  duration?: number; // additional minutes
}

// Search Filters
export interface SearchFilters {
  query?: string;
  category?: ServiceCategory;
  minPrice?: number;
  maxPrice?: number;
  location?: {
    city: string;
    area?: string;
  };
}

// Expert Filters
export interface ExpertFilters {
  serviceId?: string;
  category?: ServiceCategory;
  city: string;
  area?: string;
  minRating?: number;
  maxPrice?: number;
  isOnline?: boolean;
  language?: string;
}
