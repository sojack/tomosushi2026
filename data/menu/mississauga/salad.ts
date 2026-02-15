import type { MenuItem } from '../../types';

export const salads: MenuItem[] = [
  {
    id: 'garden-salad',
    name: 'Garden Salad',
    description: 'Green salad, house dressing',
    price: 5,
    dietary: ['vegetarian', 'gluten-free'],
    image: 'salad/001-GardenSalad.jpg',
  },
  {
    id: 'kaiso-salad',
    name: 'Kaiso Salad',
    description: 'Seasoned seaweed salad',
    price: 7,
    dietary: ['vegetarian'],
    image: 'salad/002-KaisoSalad.jpg',
  },
  {
    id: 'avocado-salad',
    name: 'Avocado Salad',
    description: 'Avocado slices on garden salad',
    price: 8,
    dietary: ['vegetarian', 'gluten-free'],
    image: 'salad/003-AvocadoSalad.jpg',
  },
  {
    id: 'kani-salad',
    name: 'Kani Salad',
    description: 'Crab meat, cucumber, mayo topped with tobiko',
    price: 8,
    image: 'salad/005-KaniSalad.jpg',
  },
  {
    id: 'sunomono-salad',
    name: 'Sunomono Salad',
    description: 'Shrimp, tako, crab meat, seaweed, cucumber dressed in sunomono sauce',
    price: 10,
    image: 'salad/004-SunomonoSalad.jpg',
  },
  {
    id: 'spicy-sashimi-salad',
    name: 'Spicy Sashimi Salad',
    description: 'Assorted raw fish, spring mix topped with Chojang, sesame seed',
    price: 14,
    dietary: ['spicy'],
    image: 'salad/001-Spicy-Sashimi-salad.jpg',
  },
];
