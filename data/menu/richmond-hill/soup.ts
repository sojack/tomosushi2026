import type { MenuItem } from '../../types';

export const soups: MenuItem[] = [
  {
    id: 'miso-soup',
    name: 'Miso Soup',
    description: 'Healthy soy bean paste soup',
    price: 3,
    image: 'soup/001-MisoSoup-r1.jpg',
  },
  {
    id: 'crunch-noodle-soup',
    name: 'Crunch Noodle Soup',
    description: 'Crunch noodle soup',
    price: 3,
    servedWith: 'Dine-in only',
    image: 'tomo-placeholder.jpg',
  },
  {
    id: 'wonton-soup',
    name: 'Wonton Soup',
    description: 'Vegetable dumpling soup with egg',
    price: 6,
    image: 'soup/002-WontonSoup.jpg',
  },
  {
    id: 'mushroom-soup',
    name: 'Mushroom Soup',
    description: 'Assorted mushroom, vegetable in miso base soup',
    price: 8,
    image: 'soup/003-ShiitakeMushroomSoup.jpg',
  },
  {
    id: 'seafood-soup',
    name: 'Seafood Soup',
    description: 'Assorted seafood in miso base soup',
    price: 9,
    image: 'soup/005-SeafoodSoup.jpg',
  },
  {
    id: 'steamed-rice',
    name: 'Steamed Rice',
    description: '',
    price: 3,
    dietary: ['gluten-free'],
    image: 'soup/006-SteamedRice.jpg',
  },
  {
    id: 'brown-rice',
    name: 'Brown Rice',
    description: '',
    price: 4,
    dietary: ['gluten-free'],
    image: 'soup/007-BrownRice.jpg',
  },
];
