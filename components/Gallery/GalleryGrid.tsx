'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/data/gallery';
import { Lightbox } from './Lightbox';
import styles from './GalleryGrid.module.css';

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <button
            key={image.id}
            className={styles.galleryItem}
            onClick={() => setSelectedIndex(index)}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className={styles.galleryImage}
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIndex !== null && selectedIndex > 0}
          hasNext={selectedIndex !== null && selectedIndex < images.length - 1}
        />
      )}
    </>
  );
}
