'use client';

import { useState } from 'react';
import type { MenuCategory } from '@/data/types';
import styles from './FloatingNav.module.css';

interface FloatingNavProps {
  categories: MenuCategory[];
}

export default function FloatingNav({ categories }: FloatingNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="floating-menu-nav"
        aria-label={isOpen ? 'Close menu navigation' : 'Open menu navigation'}
      >
        {isOpen ? '✕' : 'Menu'}
      </button>

      <nav
        id="floating-menu-nav"
        className={`${styles.nav} ${isOpen ? styles.open : ''}`}
        aria-label="Menu category navigation"
      >
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className={styles.link}
                onClick={(e) => handleClick(e, category.id)}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
