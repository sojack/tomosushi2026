'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import styles from './VideoBackground.module.css';

const MOBILE_BACKGROUNDS = [
  '/images/screen-01.jpg',
  '/images/screen-02.jpg',
  '/images/screen-03.jpg',
  '/images/screen-04.jpg',
];

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc: string;
  children?: React.ReactNode;
  overlayOpacity?: number;
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export default function VideoBackground({
  videoSrc,
  posterSrc,
  children,
  overlayOpacity = 0.4,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [bgImage] = useState(() =>
    MOBILE_BACKGROUNDS[Math.floor(Math.random() * MOBILE_BACKGROUNDS.length)]
  );

  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  useEffect(() => {
    if (isMobile || !videoRef.current) return;
    if (prefersReducedMotion) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      });
    }
  }, [prefersReducedMotion, isMobile]);

  return (
    <section className={styles.videoSection}>
      <div
        className={styles.overlay}
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        aria-hidden="true"
      />
      {isMobile ? (
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${bgImage})` }}
          aria-hidden="true"
        />
      ) : (
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            className={styles.video}
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            poster={posterSrc}
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </section>
  );
}
