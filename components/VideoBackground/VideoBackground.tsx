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

function subscribeToReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function subscribeToCoarsePointer(callback: () => void) {
  const mq = window.matchMedia('(pointer: coarse) and (hover: none)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

export default function VideoBackground({
  videoSrc,
  posterSrc,
  children,
  overlayOpacity = 0.4,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bgImage] = useState(() =>
    MOBILE_BACKGROUNDS[Math.floor(Math.random() * MOBILE_BACKGROUNDS.length)]
  );

  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  );

  const isMobile = useSyncExternalStore(
    subscribeToCoarsePointer,
    () => window.matchMedia('(pointer: coarse) and (hover: none)').matches,
    () => false
  );

  const showVideo = !isMobile && !prefersReducedMotion;

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
            autoPlay={showVideo}
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
