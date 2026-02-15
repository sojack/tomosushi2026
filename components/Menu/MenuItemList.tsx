import type { AlaCarteItem } from '@/data/types';
import { DietaryIcons } from './DietaryIcon';
import { AlaCartePrice } from './PriceDisplay';
import styles from './MenuItemList.module.css';

interface MenuItemListProps {
  items: AlaCarteItem[];
}

export default function MenuItemList({ items }: MenuItemListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <span className={styles.name}>
            {item.name}
            <DietaryIcons flags={item.dietary} />
          </span>
          <span className={styles.description}>{item.description}</span>
          <AlaCartePrice
            sushiPrice={item.sushiPrice}
            sashimiPrice={item.sashimiPrice}
          />
        </li>
      ))}
    </ul>
  );
}
