import Link from 'next/link';
import Image from 'next/image';
import type { Location } from '@/data/types';
import MobileMenuToggle from './MobileMenuToggle';
import styles from './Header.module.css';

interface HeaderProps {
  location?: Location;
  variant?: 'transparent' | 'solid';
}

export default function Header({ location, variant = 'solid' }: HeaderProps) {
  const basePath = location ? `/${location.id}` : '';

  const navItems = location
    ? [
        { href: basePath, label: 'Home' },
        { href: `${basePath}/menu`, label: 'Menu' },
        { href: `${basePath}/gallery`, label: 'Gallery' },
        { href: `${basePath}/contact`, label: 'Contact' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
      ];

  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <div className={styles.container}>
        <Link href={basePath || '/'} className={styles.logo}>
          <Image
            src="/images/logo-2.png"
            alt="Tomo Sushi"
            width={120}
            height={40}
            priority
          />
        </Link>

        <MobileMenuToggle>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {location && (
            <a
              href={location.orderOnlineUrl}
              className={styles.orderButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          )}
        </MobileMenuToggle>
      </div>
    </header>
  );
}
