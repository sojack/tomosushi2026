import Link from 'next/link';
import type { Location } from '@/data/types';
import styles from './LocationCard.module.css';

interface LocationCardProps {
  location: Location;
  variant?: 'default' | 'compact';
}

export default function LocationCard({
  location,
  variant = 'default',
}: LocationCardProps) {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <h2 className={styles.name}>{location.name}</h2>

      {variant === 'default' && (
        <>
          <address className={styles.address}>{location.address}</address>
          <p className={styles.phone}>
            <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}>
              {location.phone}
            </a>
          </p>
          <div className={styles.hours}>
            <p>Mon-Fri: {location.hours.weekday}</p>
            <p>Sat: {location.hours.saturday}</p>
            <p>Sun: {location.hours.sunday}</p>
          </div>
        </>
      )}

      <div className={styles.actions}>
        <Link href={`/${location.id}`} className={styles.primaryLink}>
          Visit Location
        </Link>
        <a
          href={location.orderOnlineUrl}
          className={styles.secondaryLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Online
        </a>
      </div>
    </article>
  );
}
