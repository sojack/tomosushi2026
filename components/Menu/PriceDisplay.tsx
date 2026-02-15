import type { PriceOption, ProteinPriceOption } from '@/data/types';
import styles from './PriceDisplay.module.css';

interface SinglePriceProps {
  price: number;
  size?: 'small' | 'medium' | 'large';
}

export function SinglePrice({ price, size = 'medium' }: SinglePriceProps) {
  return <span className={`${styles.price} ${styles[size]}`}>${price}</span>;
}

interface MultiPriceProps {
  prices: PriceOption[];
  layout?: 'vertical' | 'horizontal' | 'grid';
}

export function MultiPrice({ prices, layout = 'vertical' }: MultiPriceProps) {
  if (layout === 'grid') {
    return (
      <div className={styles.gridPrice}>
        <div className={styles.gridHeader}>
          <span>Size</span>
          <span>Description</span>
          <span>Qty</span>
          <span>Price</span>
        </div>
        {prices.map((option, index) => (
          <div key={index} className={styles.gridRow}>
            <span className={styles.gridSize}>{option.size || ''}</span>
            <span className={styles.gridDescription}>{option.description || ''}</span>
            <span className={styles.gridPieces}>{option.pieces || ''}</span>
            <span className={styles.gridPriceCell}>${option.price}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${styles.multiPrice} ${styles[layout]}`}>
      {prices.map((option, index) => (
        <div key={index} className={styles.priceOption}>
          {option.size && (
            <span className={styles.sizeLabel}>{option.size}</span>
          )}
          {option.description && (
            <span className={styles.optionDescription}>{option.description}</span>
          )}
          {option.pieces && (
            <span className={styles.pieces}>{option.pieces}</span>
          )}
          <span className={styles.price}>${option.price}</span>
        </div>
      ))}
    </div>
  );
}

interface ProteinPriceProps {
  prices: ProteinPriceOption[];
}

export function ProteinPrice({ prices }: ProteinPriceProps) {
  return (
    <div className={styles.proteinPrice}>
      {prices.map((option, index) => (
        <div key={index} className={styles.proteinOption}>
          <span className={styles.proteinLabel}>{option.protein}</span>
          <span className={styles.price}>${option.price}</span>
        </div>
      ))}
    </div>
  );
}

interface AlaCartePriceProps {
  sushiPrice: number;
  sashimiPrice: number;
}

export function AlaCartePrice({ sushiPrice, sashimiPrice }: AlaCartePriceProps) {
  return (
    <div className={styles.alaCartePrice}>
      <div className={styles.priceRow}>
        <span className={styles.typeLabel}>sushi</span>
        <span className={styles.price}>${sushiPrice}</span>
      </div>
      <div className={styles.priceRow}>
        <span className={styles.typeLabel}>sashimi</span>
        <span className={styles.price}>${sashimiPrice}</span>
      </div>
    </div>
  );
}
