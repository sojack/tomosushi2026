'use client';

import type { MenuCategory } from '@/data/types';
import styles from './MenuNav.module.css';

interface MenuNavProps {
  categories: MenuCategory[];
  activeCategory?: string;
}

export default function MenuNav({ categories, activeCategory }: MenuNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav} aria-label="Menu categories">
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.id}`}
              className={`${styles.link} ${
                activeCategory === category.id ? styles.active : ''
              }`}
              onClick={(e) => handleClick(e, category.id)}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
