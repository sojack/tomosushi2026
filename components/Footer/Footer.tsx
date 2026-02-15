import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterProps {
  variant?: 'default' | 'minimal';
}

export default function Footer({ variant = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${styles[variant]}`}>
      <div className={styles.container}>
        {variant === 'default' && (
          <div className={styles.content}>
            <div className={styles.brand}>
              <Image
                src="/images/logo-2.png"
                alt="Tomo Sushi"
                width={180}
                height={60}
              />
              <p className={styles.tagline}>
                Tomo Sushi will continue doing our best to ensure you feel more
                respected, appreciated and valued.
              </p>
            </div>

            <div className={styles.contact}>
              <h3 className={styles.heading}>Contact</h3>
              <p>
                <a href="mailto:info@tomosushi.ca">info@tomosushi.ca</a>
              </p>
            </div>

            <nav className={styles.links} aria-label="Footer navigation">
              <h3 className={styles.heading}>Links</h3>
              <ul>
                <li>
                  <Link href="/richmond-hill">Richmond Hill</Link>
                </li>
                <li>
                  <Link href="/mississauga">Mississauga</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} Tomo Sushi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
