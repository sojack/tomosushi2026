import Image from 'next/image';
import type { MenuItem as MenuItemType } from '@/data/types';
import { DietaryIcons } from './DietaryIcon';
import { SinglePrice, MultiPrice, ProteinPrice } from './PriceDisplay';
import styles from './MenuItem.module.css';

interface MenuItemProps {
  item: MenuItemType;
  variant?: 'card' | 'compact';
  priceLayout?: 'vertical' | 'horizontal' | 'grid';
}

export default function MenuItem({ item, variant = 'card', priceLayout = 'vertical' }: MenuItemProps) {
  const hasImage = item.image && variant === 'card';

  return (
    <article className={`${styles.menuItem} ${styles[variant]}`}>
      {hasImage && (
        <div className={styles.imageContainer}>
          <Image
            src={`/images/menu/${item.image}`}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>
          {item.name}
          <DietaryIcons flags={item.dietary} />
        </h3>

        {item.pieces && (
          <span className={styles.pieces}>{item.pieces}</span>
        )}

        <p className={styles.description}>{item.description}</p>

        {item.servedWith && (
          <p className={styles.servedWith}>Served with {item.servedWith}</p>
        )}

        <div className={styles.priceSection}>
          {item.price && <SinglePrice price={item.price} size="large" />}
          {item.prices && <MultiPrice prices={item.prices} layout={priceLayout} />}
          {item.proteinPrices && <ProteinPrice prices={item.proteinPrices} />}
        </div>
      </div>
    </article>
  );
}
