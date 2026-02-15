import type { MenuCategory } from '../../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'party-trays',
    name: 'Tray',
    slug: 'party-trays',
    description: 'Party trays for gatherings and special occasions',
    subcategories: [
      { id: 'vip-tray', name: 'VIP Tray', description: 'Premium selection with otoro and chef\'s finest cuts' },
      { id: 'deluxe-tray', name: 'Deluxe Tray', description: 'Omakase quality without spending a fortune' },
      { id: 'regular-tray', name: 'Regular Tray' },
    ],
  },
  {
    id: 'rolls',
    name: 'Rolls',
    slug: 'rolls',
    subcategories: [
      { id: 'signature-rolls', name: 'Signature Rolls' },
      { id: 'basic-rolls', name: 'Basic Rolls' },
      { id: 'vegetarian-rolls', name: 'Vegetarian Rolls' },
      { id: 'tempura-rolls', name: 'Tempura Rolls' },
      { id: 'hand-rolls', name: 'Hand Rolls' },
    ],
  },
  {
    id: 'combos',
    name: 'Roll Combination',
    slug: 'combos',
    description: 'Curated roll combinations',
  },
  {
    id: 'alacarte',
    name: 'A La Carte',
    slug: 'alacarte',
    note: 'Sushi 2 pcs, Sashimi 3 pcs',
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    slug: 'appetizers',
  },
  {
    id: 'dinner',
    name: 'Dinner',
    slug: 'dinner',
    subcategories: [
      { id: 'sushi-sashimi-combos', name: 'Sushi & Sashimi Combos' },
      { id: 'donburi', name: 'Donburi', note: 'Served with miso soup, garden salad' },
      { id: 'dinner-entrees', name: 'Dinner', note: 'Served with miso soup, garden salad' },
      { id: 'kitchen-dinner-combo', name: 'Kitchen Dinner Combo', note: 'Served with miso soup, garden salad & rice' },
    ],
  },
  {
    id: 'noodle',
    name: 'Noodle',
    slug: 'noodle',
  },
  {
    id: 'soup',
    name: 'Soup',
    slug: 'soup',
  },
  {
    id: 'salad',
    name: 'Salad',
    slug: 'salad',
  },
  {
    id: 'lunch',
    name: 'Lunch',
    slug: 'lunch',
    subcategories: [
      { id: 'udon-set-lunch', name: 'Udon Set Lunch' },
      { id: 'tomo-lunch', name: 'Tomo Lunch', note: 'Served with miso soup, salad and rice' },
      { id: 'tomo-lunch-combo', name: 'Tomo Lunch Combo', note: 'Served with miso soup & salad' },
    ],
  },
  {
    id: 'extras',
    name: 'Extras',
    slug: 'extras',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    slug: 'drinks',
    subcategories: [
      { id: 'white-wine', name: 'White Wine' },
      { id: 'red-wine', name: 'Red Wine' },
      { id: 'sparkling', name: 'Sparkling' },
      { id: 'sake', name: 'Sake' },
      { id: 'beer', name: 'Beer' },
      { id: 'cocktails', name: 'Cocktails' },
      { id: 'non-alcoholic', name: 'Non-Alcoholic' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    slug: 'desserts',
  },
];
