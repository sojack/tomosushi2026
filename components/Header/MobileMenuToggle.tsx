'use client';

import { useState } from 'react';
import styles from './Header.module.css';

interface MobileMenuToggleProps {
  children: React.ReactNode;
}

export default function MobileMenuToggle({ children }: MobileMenuToggleProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
        aria-label="Main navigation"
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </nav>

      <button
        className={styles.menuToggle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls="main-nav"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={styles.menuIcon} aria-hidden="true">
          {isMenuOpen ? '✕' : '☰'}
        </span>
      </button>
    </>
  );
}
