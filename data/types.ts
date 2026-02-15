/**
 * Menu Data Types for Tomo Sushi
 */

/** Dietary restriction flags */
export type DietaryFlag = 'vegetarian' | 'gluten-free' | 'spicy';

/** Price option for items with multiple sizes */
export interface PriceOption {
  size?: string; // e.g., "Small", "Medium", "Large"
  pieces?: string; // e.g., "25 pcs", "40 pcs"
  description?: string;
  price: number;
}

/** Multi-price option for items with different protein choices */
export interface ProteinPriceOption {
  protein: string; // e.g., "chicken", "salmon", "beef"
  price: number;
}

/** A la carte item with sushi/sashimi prices */
export interface AlaCarteItem {
  id: string;
  name: string;
  description: string;
  sushiPrice: number; // Price for 2 pcs sushi
  sashimiPrice: number; // Price for 3 pcs sashimi
  dietary?: DietaryFlag[];
  available?: boolean;
}

/** Standard menu item (most items) */
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: number; // Single price
  prices?: PriceOption[]; // Multiple size options
  proteinPrices?: ProteinPriceOption[]; // Different protein choices
  image?: string; // Path relative to /images/menu/
  pieces?: string; // e.g., "8 pcs"
  dietary?: DietaryFlag[];
  servedWith?: string; // e.g., "Served with miso soup, salad"
  available?: boolean;
}

/** Drink item with complex pricing (glass, half-liter, bottle) */
export interface DrinkItem {
  id: string;
  name: string;
  variety?: string; // e.g., "Sauvignon Blanc (New Zealand)"
  glassPrice?: number;
  halfLiterPrice?: number;
  bottlePrice?: number;
  singlePrice?: number; // For beers, sodas
  available?: boolean;
}

/** Extra/condiment item */
export interface ExtraItem {
  id: string;
  name: string;
  description?: string; // e.g., list of sauce options
  size?: string; // e.g., "2oz"
  price: number;
  dietary?: DietaryFlag[];
}

/** Menu category definition */
export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  note?: string; // e.g., "Served with miso soup, garden salad"
  subcategories?: MenuSubcategory[];
}

/** Menu subcategory */
export interface MenuSubcategory {
  id: string;
  name: string;
  description?: string;
  note?: string;
}

/** Location identifiers */
export type LocationId = 'richmond-hill' | 'mississauga';

/** Location information */
export interface Location {
  id: LocationId;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  orderOnlineUrl: string;
  /** Google Maps embed URL from "Share > Embed a map" (no API key needed) */
  mapEmbedUrl?: string;
  instagramUrl?: string;
}
