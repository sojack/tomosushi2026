import type { DrinkItem } from '../../types';

export const whiteWines: DrinkItem[] = [
  {
    id: 'oyster-bay-sauvignon-blanc',
    name: 'Oyster Bay',
    variety: 'Sauvignon Blanc (New Zealand)',
    glassPrice: 11,
    halfLiterPrice: 25,
    bottlePrice: 40,
  },
  {
    id: 'josh-cellars-chardonnay',
    name: 'Josh Cellars',
    variety: 'Chardonnay (USA)',
    glassPrice: 11,
    halfLiterPrice: 25,
    bottlePrice: 40,
  },
];

export const redWines: DrinkItem[] = [
  {
    id: 'robert-mondavi-cabernet',
    name: 'Robert Mondavi',
    variety: 'Cabernet Sauvignon (USA)',
    glassPrice: 12,
    halfLiterPrice: 26,
    bottlePrice: 45,
  },
  {
    id: 'wakefield-shiraz',
    name: 'Wakefield',
    variety: 'Shiraz (Australia)',
    glassPrice: 11,
    halfLiterPrice: 25,
    bottlePrice: 40,
  },
];

export const beers: DrinkItem[] = [
  {
    id: 'sapporo-can',
    name: 'Sapporo',
    variety: 'Can (500ml)',
    singlePrice: 10,
  },
  {
    id: 'asahi-can',
    name: 'Asahi',
    variety: 'Can (500ml)',
    singlePrice: 10,
  },
  {
    id: 'canadian',
    name: 'Canadian',
    variety: '341ml',
    singlePrice: 7,
  },
  {
    id: 'coors-light',
    name: 'Coors Light',
    variety: '341ml',
    singlePrice: 7,
  },
];

export const coldSake: DrinkItem[] = [
  {
    id: 'hakutsuru',
    name: 'Hakutsuru',
    variety: 'Junmai, Draft (300ml bottle)',
    singlePrice: 19,
  },
  {
    id: 'sayuri',
    name: 'Sayuri',
    variety: 'Nigori (300ml bottle)',
    singlePrice: 22,
  },
  {
    id: 'soju',
    name: 'Soju',
    variety: 'Original, Peach, Yogurt, Grape (375ml bottle)',
    singlePrice: 22,
  },
  {
    id: 'mio',
    name: 'Mio',
    variety: 'Sparkling sake 5% (300ml)',
    singlePrice: 23,
  },
  {
    id: 'kubota-senju',
    name: 'Kubota Senju',
    variety: '(1000 Long Lives) 15.5% (300ml)',
    singlePrice: 25,
  },
  {
    id: 'kamikokoro-momo',
    name: 'Kamikokoro Momo',
    variety: 'Peach sake 8%',
    glassPrice: 14,
    halfLiterPrice: 40,
  },
];

export const hotSake: DrinkItem[] = [
  {
    id: 'sho-chiku-bai',
    name: 'Sho Chiku Bai',
    variety: 'Small 4oz $8 / Medium 10oz $15 / Pot 720ml $30',
    glassPrice: 8,
    halfLiterPrice: 15,
    bottlePrice: 30,
  },
];

export const nonAlcoholic: DrinkItem[] = [
  {
    id: 'evian',
    name: 'Evian Water',
    singlePrice: 4,
  },
  {
    id: 'perrier',
    name: 'Perrier Small',
    singlePrice: 4,
  },
  {
    id: 'coke',
    name: 'Coke, Coke Zero',
    singlePrice: 3,
  },
  {
    id: 'ginger-sprite',
    name: 'Ginger Ale, Sprite',
    singlePrice: 3,
  },
  {
    id: 'nestea',
    name: 'Nestea',
    singlePrice: 3.5,
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    singlePrice: 4,
  },
  {
    id: 'apple-juice',
    name: 'Apple Juice',
    singlePrice: 4,
  },
];

export const allDrinks = {
  whiteWine: whiteWines,
  redWine: redWines,
  beer: beers,
  coldSake,
  hotSake,
  nonAlcoholic,
};
