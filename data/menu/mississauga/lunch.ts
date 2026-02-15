import type { MenuItem } from '../../types';

// Sashimi & Sushi Lunch - Served with miso soup and salad
export const sashimiSushiLunch: MenuItem[] = [
  {
    id: 'sashimi-lunch',
    name: 'Sashimi Lunch',
    description: '15 pcs assorted raw fish',
    pieces: '15 pcs',
    price: 23,
    image: 'lunchSashSush/002-Sashimilunchregular.jpg',
  },
  {
    id: 'chirashi-lunch-regular',
    name: 'Chirashi Lunch Regular',
    description: '15 pcs assorted raw fish on sushi rice',
    pieces: '15 pcs',
    price: 24,
    image: 'lunchSashSush/001-Chirashi-LunchReg.jpg',
  },
  {
    id: 'sushi-lunch-a',
    name: 'Sushi Lunch A',
    description: '8 pcs assorted nigiri sushi, 6 pcs California roll',
    pieces: '14 pcs',
    price: 21,
    image: 'lunchCombo/235-Sushi-lunch-regular-A.jpg',
  },
  {
    id: 'sushi-lunch-b',
    name: 'Sushi Lunch B',
    description: '10 pcs assorted nigiri sushi, 8 pcs shrimp kappa roll',
    pieces: '18 pcs',
    price: 26,
    image: 'lunchCombo/236-Sushi-lunch-regular-B.jpg',
  },
  {
    id: 'sashimi-sushi-lunch',
    name: 'Sashimi & Sushi Lunch',
    description: '8 pcs assorted raw fish, 6 pcs assorted nigiri sushi',
    pieces: '14 pcs',
    price: 23,
    image: 'lunchSashSush/004-SashimiSushilunchregular.jpg',
  },
  {
    id: 'salmon-sushi-lunch',
    name: 'Salmon Sushi Lunch',
    description: '9 pcs salmon nigiri sushi, 6 pcs salmon roll',
    pieces: '15 pcs',
    price: 23,
    image: 'lunchSashSush/001-Salmonsushilunch.jpg',
  },
  {
    id: 'salmon-sashimi-sushi-roll-lunch',
    name: 'Salmon Sashimi, Sushi & Roll Lunch',
    description: '5 pcs salmon sashimi, 7 pcs salmon nigiri sushi, 6 pcs salmon roll',
    pieces: '18 pcs',
    price: 26,
    image: 'lunchSashSush/003-SalmonsashimisushiRolllunch.jpg',
  },
];

// Roll Set Lunch - Served with miso soup and salad
// This is a promotional section - any 2 rolls for $3 off
export const rollSetLunchPromo = {
  title: 'Roll Set Lunch',
  note: 'Served with miso soup and salad',
  description: 'Any 2 rolls of your choice for $3 off',
  details: 'Including Basic rolls, Veggie rolls, Signature rolls',
};

// Udon Set Lunch
export const udonSetLunch: MenuItem[] = [
  {
    id: 'udon-mini-dynamite',
    name: 'Vegetable Udon with Mini Dynamite',
    description: 'Vegetable udon with mini dynamite roll',
    pieces: '5 pcs',
    price: 18,
    dietary: ['vegetarian'],
    image: 'tomo-placeholder.jpg',
    proteinPrices: [
      { protein: 'Veggie', price: 18 },
      { protein: 'Chicken', price: 21 },
      { protein: 'Beef', price: 22 },
    ],
  },
  {
    id: 'udon-tempura',
    name: 'Vegetable Udon with Tempura',
    description: '2 pcs shrimp, yam, squash, broccoli',
    price: 20,
    image: 'tomo-placeholder.jpg',
    proteinPrices: [
      { protein: 'Veggie', price: 20 },
      { protein: 'Chicken', price: 23 },
      { protein: 'Beef', price: 24 },
    ],
  },
  {
    id: 'udon-chirashi',
    name: 'Vegetable Udon with Chirashi',
    description: '5 pcs salmon sashimi on sushi rice',
    price: 22,
    image: 'tomo-placeholder.jpg',
    proteinPrices: [
      { protein: 'Veggie', price: 22 },
      { protein: 'Chicken', price: 25 },
      { protein: 'Beef', price: 26 },
    ],
  },
];

// Tomo Lunch - Served with miso soup, salad and rice
export const tomoLunch: MenuItem[] = [
  {
    id: 'tofu-teriyaki-lunch',
    name: 'Tofu Teriyaki',
    description: 'Deep-fried tofu topped with teriyaki sauce',
    price: 14,
    dietary: ['vegetarian'],
    image: 'bentoLunch/002-TofuTeriyakiLunch.jpg',
  },
  {
    id: 'teriyaki-lunch',
    name: 'Teriyaki Lunch',
    description: 'Selection of meat topped with teriyaki sauce',
    image: 'bentoLunch/005-ChickenTeriyakiLunch.jpg',
    proteinPrices: [
      { protein: 'Chicken', price: 17 },
      { protein: 'Salmon', price: 19 },
      { protein: 'Beef', price: 22 },
    ],
  },
  {
    id: 'bulgogi-lunch',
    name: 'Bul-Go-Gi Lunch',
    description: 'Stir-fried, sliced ribeye beef marinated in Tomo special sauce',
    price: 19,
    image: 'bentoLunch/008-BulgogiLunch.jpg',
  },
  {
    id: 'kalbi-lunch',
    name: 'Kal-Bi Lunch',
    description: '6 pcs grilled beef short ribs marinated in Tomo special sauce',
    price: 26,
    image: 'bentoLunch/004-LAKalbiLunch.jpg',
  },
  {
    id: 'tempura-lunch',
    name: 'Tempura Lunch',
    description: '2 pcs deep-fried shrimp, 5 pcs deep-fried assorted vegetables',
    price: 18,
    image: 'bentoLunch/001-TempuraLunch.jpg',
  },
  {
    id: 'chicken-katsu-lunch',
    name: 'Chicken Katsu Lunch',
    description: 'Deep-fried, breaded chicken breast, katsu sauce',
    price: 20,
    image: 'bentoLunch/003-ChickenKatsuLunch.jpg',
  },
];

// Tomo Lunch Combo - Served with miso soup & salad
export const tomoLunchCombo: MenuItem[] = [
  {
    id: 'tofu-teriyaki-combo-lunch',
    name: 'Tofu Teriyaki Combo',
    description: 'Tofu teriyaki, 5 pcs assorted vegetable tempura, 6 pcs kappa roll',
    price: 21,
    dietary: ['vegetarian'],
    image: 'lunchCombo/001-TofuTeriyakiComboLunch.jpg',
  },
  {
    id: 'teriyaki-combo-lunch',
    name: 'Teriyaki Combo (with rice)',
    description: 'Selection of meat topped with teriyaki sauce, 2 pcs shrimp tempura, 3 pcs assorted vegetable tempura, 5 pcs dynamite roll',
    image: 'lunchCombo/003-ChickenTeriyakiLunchCombo.jpg',
    proteinPrices: [
      { protein: 'Chicken', price: 24 },
      { protein: 'Salmon', price: 26 },
      { protein: 'Beef', price: 29 },
    ],
  },
  {
    id: 'bulgogi-combo-lunch',
    name: 'Bul-Go-Gi Combo (with rice)',
    description: 'Stir-fried, sliced ribeye beef marinated in Tomo special sauce, 2 pcs shrimp tempura, 3 pcs assorted vegetable tempura, 5 pcs dynamite roll',
    price: 26,
    image: 'lunchCombo/001-BulgogiLunchCombo.jpg',
  },
  {
    id: 'kalbi-combo-lunch',
    name: 'Kalbi Combo (with rice)',
    description: '6 pcs grilled beef short ribs marinated in Tomo special sauce, 2 pcs shrimp tempura, 3 pcs assorted vegetable tempura, 5 pcs dynamite roll',
    price: 33,
    image: 'lunchCombo/001-KalbiLunchCombo.jpg',
  },
  {
    id: 'sashimi-combo-lunch',
    name: 'Sashimi Combo',
    description: '5 pcs salmon sashimi, 4 pcs assorted nigiri sushi, 5 pcs dynamite roll, 2 pcs shrimp tempura, 3 pcs assorted vegetable tempura',
    price: 29,
    image: 'lunchCombo/005-SashimiComboLunch-r1.jpg',
  },
];

export const allLunch = {
  sashimiSushi: sashimiSushiLunch,
  rollSetPromo: rollSetLunchPromo,
  udonSet: udonSetLunch,
  tomoLunch,
  tomoLunchCombo,
  lunchHoursNote: '11:30 am to 3 pm',
};
