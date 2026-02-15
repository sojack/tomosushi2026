import type { MenuItem as MenuItemType, MenuSubcategory } from '@/data/types';
import MenuItem from './MenuItem';
import styles from './MenuSection.module.css';

interface MenuSectionProps {
  id: string;
  title: string;
  description?: string;
  note?: string;
  subcategory?: MenuSubcategory;
  items: MenuItemType[];
  layout?: 'grid' | 'list';
}

export default function MenuSection({
  id,
  title,
  description,
  note,
  subcategory,
  items,
  layout = 'grid',
}: MenuSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        {note && <p className={styles.note}>{note}</p>}
      </header>

      {subcategory && (
        <div className={styles.subcategory}>
          <h3 className={styles.subcategoryTitle}>{subcategory.name}</h3>
          {subcategory.note && (
            <p className={styles.subcategoryNote}>{subcategory.note}</p>
          )}
        </div>
      )}

      <div className={`${styles.items} ${styles[layout]}`}>
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

interface SubcategorySectionProps {
  title: string;
  note?: string;
  items: MenuItemType[];
  layout?: 'grid' | 'list';
  priceLayout?: 'vertical' | 'horizontal' | 'grid';
}

export function SubcategorySection({
  title,
  note,
  items,
  layout = 'grid',
  priceLayout = 'vertical',
}: SubcategorySectionProps) {
  return (
    <div className={styles.subcategorySection}>
      <h3 className={styles.subcategoryTitle}>{title}</h3>
      {note && <p className={styles.subcategoryNote}>{note}</p>}
      <div className={`${styles.items} ${styles[layout]}`}>
        {items.map((item) => (
          <MenuItem key={item.id} item={item} priceLayout={priceLayout} />
        ))}
      </div>
    </div>
  );
}
