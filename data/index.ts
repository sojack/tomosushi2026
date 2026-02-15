/**
 * Data Index
 * Exports all data types, locations, and menu resolver
 */

// Types
export type {
  DietaryFlag,
  PriceOption,
  ProteinPriceOption,
  AlaCarteItem,
  MenuItem,
  DrinkItem,
  ExtraItem,
  MenuCategory,
  MenuSubcategory,
  LocationId,
  Location,
} from './types';

// Locations
export { locations, getLocation } from './locations';

// Menu Data (per-location resolver)
export { getMenuData } from './menu';
