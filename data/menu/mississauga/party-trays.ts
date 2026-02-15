import type { MenuItem } from '../../types';

export const vipTrays: MenuItem[] = [
  {
    id: 'vip-sashimi-tray',
    name: 'Sashimi Tray',
    description: '',
    image: 'partyTray/VIP_Sashimi_IMG_7107.jpg',
    prices: [
      { size: 'Small', pieces: '25 pcs', price: 125 },
      { size: 'Large', pieces: '40 pcs', price: 200 },
    ],
  },
  {
    id: 'vip-nigiri-tray',
    name: 'Nigiri Sushi',
    description: '',
    image: 'partyTray/VIP_Sushi_IMG_7117.jpg',
    prices: [
      { size: 'Small', pieces: '15 pcs', price: 90 },
      { size: 'Large', pieces: '28 pcs', price: 168 },
    ],
  },
];

export const deluxeTrays: MenuItem[] = [
  {
    id: 'deluxe-tray',
    name: 'Deluxe Tray',
    description: '',
    image: 'partyTray/partyTray-4.jpg',
    prices: [
      { size: 'Small', pieces: '40 pcs', description: 'Chef\'s selection 18 pcs sashimi, 14 pcs nigiri sushi, 8 pcs special roll', price: 100 },
      { size: 'Large', pieces: '64 pcs', description: 'Chef\'s selection 30 pcs sashimi, 20 pcs nigiri sushi, 14 pcs special roll', price: 150 },
    ],
  },
];

export const regularTrays: MenuItem[] = [
  {
    id: 'sashimi-tray',
    name: 'Sashimi Tray',
    description: '',
    image: 'partyTray/partyTray-1.jpg',
    prices: [
      { size: 'Small', pieces: '25 pcs', description: '25 pcs assorted raw fish', price: 42 },
      { size: 'Medium', pieces: '40 pcs', description: '40 pcs assorted raw fish', price: 66 },
      { size: 'Large', pieces: '60 pcs', description: '60 pcs assorted raw fish', price: 100 },
    ],
  },
  {
    id: 'sushi-roll-tray',
    name: 'Sushi & Roll',
    description: '',
    image: 'partyTray/partyTray-2.jpg',
    prices: [
      { size: 'Small', pieces: '44 pcs', description: '22 pcs assorted nigiri sushi, 22 pcs roll (Red dragon, spicy salmon, rocky roll)', price: 70 },
      { size: 'Medium', pieces: '64 pcs', description: '36 pcs assorted nigiri sushi, 28 pcs roll (Red dragon, spicy salmon, rocky, spicy tuna roll)', price: 100 },
      { size: 'Large', pieces: '84 pcs', description: '50 pcs assorted nigiri sushi, 34 pcs roll (Red Dragon, spicy salmon, rocky, spicy tuna, salmon Avocado roll)', price: 131 },
    ],
  },
  {
    id: 'sashimi-sushi-roll-tray',
    name: 'Sashimi, Sushi & Roll',
    description: 'Balanced combination of all three.',
    image: 'partyTray/partyTray-3.jpg',
    prices: [
      { size: 'Small', pieces: '42 pcs', description: '16 pcs assorted sashimi, 12 pcs assorted nigiri sushi, 14 pcs roll (Red dragon, spicy salmon roll)', price: 67 },
      { size: 'Medium', pieces: '74 pcs', description: '32 pcs assorted sashimi, 20 pcs assorted nigiri sushi, 22 pcs roll (Red dragon, spicy salmon, rocky roll)', price: 114 },
      { size: 'Large', pieces: '94 pcs', description: '42 pcs assorted sashimi, 24 pcs assorted nigiri sushi, 28 pcs roll (Red dragon, spicy salmon, rocky, spicy tuna roll)', price: 141 },
    ],
  },
];

export const allPartyTrays = {
  vip: vipTrays,
  deluxe: deluxeTrays,
  regular: regularTrays,
};
