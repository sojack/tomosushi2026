import type { MenuItem } from '../../types';

export const noodles: MenuItem[] = [
  {
    id: 'vegetable-udon',
    name: 'Vegetable Udon',
    description: 'Vegetable noodle soup',
    price: 14,
    dietary: ['vegetarian'],
    image: 'noodle/VegetableUdon.jpg',
  },
  {
    id: 'chicken-udon',
    name: 'Chicken Udon',
    description: 'Chicken noodle soup',
    price: 17,
    image: 'noodle/ChickenUdon.jpg',
  },
  {
    id: 'beef-udon',
    name: 'Beef Udon',
    description: 'Beef noodle soup',
    price: 20,
    image: 'noodle/BeefUdon.jpg',
  },
  {
    id: 'spicy-seafood-udon',
    name: 'Spicy Seafood Udon',
    description: 'Spicy seafood noodle soup',
    price: 21,
    dietary: ['spicy'],
    image: 'noodle/SpicySeafoodUdon.jpg',
  },
  {
    id: 'nabeyaki-udon',
    name: 'Nabeyaki Udon',
    description: 'Seafood noodle soup in hot pot',
    price: 20,
    image: 'noodle/NabeyakiUdon.jpg',
  },
  {
    id: 'shrimp-tempura-udon',
    name: 'Shrimp Tempura Udon',
    description: 'Udon noodle soup, 2 pcs shrimp and 3 pcs vegetable tempura',
    price: 20,
    image: 'noodle/ShrimpTempuraUdon.jpg',
  },
  {
    id: 'yaki-udon',
    name: 'Yaki U-Don',
    description: 'Pan-fried udon noodle',
    image: 'noodle/YakiUdon.jpg',
    proteinPrices: [
      { protein: 'Veggie', price: 16 },
      { protein: 'Chicken', price: 19 },
      { protein: 'Beef', price: 20 },
      { protein: 'Shrimp', price: 21 },
    ],
  },
];
