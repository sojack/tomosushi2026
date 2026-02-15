'use client';

import styles from './error.module.css';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.message}>
          We&apos;re sorry, an unexpected error occurred. Please try again.
        </p>
        <div className={styles.actions}>
          <button onClick={reset} className={styles.retryButton}>
            Try Again
          </button>
          <a href="/" className={styles.homeLink}>
            Go Home
          </a>
        </div>
      </div>
    </main>
  );
}
