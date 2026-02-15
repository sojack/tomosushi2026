'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Lightbox.module.css';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close lightbox"
      >
        &times;
      </button>

      {hasPrev && (
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          &#8249;
        </button>
      )}

      <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes="90vw"
          priority
        />
      </div>

      {hasNext && (
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          &#8250;
        </button>
      )}

      <p className={styles.caption}>{alt}</p>
    </div>
  );
}
