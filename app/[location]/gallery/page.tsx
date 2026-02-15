import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLocation, locations } from '@/data/locations';
import { getGalleryImages } from '@/data/gallery';
import { GalleryGrid } from '@/components/Gallery';
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
    alternates: { canonical: `/${location.id}/gallery` },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    notFound();
  }

  const images = getGalleryImages(location.id);

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

          {location.instagramUrl && (
            <div className={styles.instagramLink}>
              <p>
                For the latest photos and updates, follow us on Instagram:{' '}
                <a
                  href={location.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{location.instagramUrl.split('/').filter(Boolean).pop()}
                </a>
              </p>
            </div>
          )}

          <GalleryGrid images={images} />
        </div>
      </section>
    </main>
  );
}
