import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLocation, locations } from '@/data/locations';
import { GalleryGrid, type GalleryImage } from '@/components/Gallery';
import styles from './page.module.css';

interface GalleryPageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.id,
  }));
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    return {};
  }

  return {
    title: `Gallery - ${location.name}`,
    description: `View photos from Tomo Sushi ${location.name}. Fresh sushi, beautiful presentations, and our restaurant atmosphere.`,
  };
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Sashimi platter', category: 'sashimi' },
  { id: 2, src: '/images/gallery/r1.jpg', alt: 'Signature roll', category: 'roll' },
  { id: 3, src: '/images/gallery/2.jpg', alt: 'Fresh sashimi selection', category: 'sashimi' },
  { id: 4, src: '/images/gallery/r2.jpg', alt: 'Dragon roll', category: 'roll' },
  { id: 5, src: '/images/gallery/5.jpg', alt: 'Sushi assortment', category: 'sashimi' },
  { id: 6, src: '/images/gallery/r3.jpg', alt: 'Rainbow roll', category: 'roll' },
  { id: 7, src: '/images/gallery/3.jpg', alt: 'Sashimi presentation', category: 'sashimi' },
  { id: 8, src: '/images/gallery/d1.jpg', alt: 'Teriyaki dinner', category: 'dinner' },
  { id: 9, src: '/images/gallery/4.jpg', alt: 'Chef\'s selection sashimi', category: 'sashimi' },
  { id: 10, src: '/images/gallery/r4.jpg', alt: 'Special roll platter', category: 'roll' },
  { id: 11, src: '/images/gallery/r5.jpg', alt: 'Spicy tuna roll', category: 'roll' },
  { id: 12, src: '/images/gallery/r6.jpg', alt: 'California roll', category: 'roll' },
  { id: 13, src: '/images/gallery/d2.jpg', alt: 'Donburi bowl', category: 'dinner' },
  { id: 14, src: '/images/gallery/r7.jpg', alt: 'Dynamite roll', category: 'roll' },
  { id: 15, src: '/images/gallery/r8.jpg', alt: 'Tempura roll', category: 'roll' },
  { id: 16, src: '/images/gallery/d3.jpg', alt: 'Bento box', category: 'dinner' },
  { id: 17, src: '/images/gallery/d4.jpg', alt: 'Teriyaki set', category: 'dinner' },
  { id: 18, src: '/images/gallery/d5.jpg', alt: 'Udon noodles', category: 'dinner' },
  { id: 19, src: '/images/gallery/d6.jpg', alt: 'Tempura dinner', category: 'dinner' },
];

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    notFound();
  }

  return (
    <main id="main-content" className={styles.galleryPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Gallery</h1>
          <p>{location.name} Location</p>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <p className={styles.intro}>
            Take a look at our beautiful sushi creations and restaurant
            atmosphere. Every dish is crafted with care and presented with
            artistry.
          </p>

          <div className={styles.instagramLink}>
            <p>
              For the latest photos and updates, follow us on Instagram:{' '}
              <a
                href="https://www.instagram.com/tomosushi_rh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tomosushi_rh
              </a>
            </p>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </main>
  );
}
