import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Header variant="solid" />
      <main id="main-content" className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.code}>404</h1>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.message}>
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryLink}>
              Go Home
            </Link>
            <Link href="/richmond-hill/menu" className={styles.secondaryLink}>
              View Menu
            </Link>
          </div>
        </div>
      </main>
      <Footer variant="minimal" />
    </>
  );
}
