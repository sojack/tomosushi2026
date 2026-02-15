import styles from './loading.module.css';

export default function MenuLoading() {
  return (
    <main className={styles.menuPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonSubtitle} />
        </div>
      </header>

      <div className={styles.navSkeleton}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.skeletonNavItem} />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.sectionSkeleton}>
          <div className={styles.skeletonSectionTitle} />
          <div className={styles.itemGrid}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonImage} />
                <div className={styles.skeletonCardContent}>
                  <div className={styles.skeletonLine} />
                  <div className={styles.skeletonLineShort} />
                  <div className={styles.skeletonPrice} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sectionSkeleton}>
          <div className={styles.skeletonSectionTitle} />
          <div className={styles.itemGrid}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonImage} />
                <div className={styles.skeletonCardContent}>
                  <div className={styles.skeletonLine} />
                  <div className={styles.skeletonLineShort} />
                  <div className={styles.skeletonPrice} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
