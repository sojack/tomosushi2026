import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';
import { getLocation, locations } from '@/data/locations';
import styles from './page.module.css';

interface LocationPageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.id,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    return {};
  }

  return {
    title: `${location.name} Location`,
    description: `Visit Tomo Sushi in ${location.name}. Fresh sushi, sashimi, and Japanese cuisine. ${location.address}`,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    notFound();
  }

  return (
    <main id="main-content">
      <VideoBackground
        videoSrc="/videos/hero.mp4"
        posterSrc="/images/video-1-poster.jpg"
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Tomo Sushi</h1>
          <p className={styles.heroLocation}>{location.name}</p>

          <p className={styles.heroTagline}>
            Food, in the end, in our own tradition, is something holy. It&apos;s
            not about nutrients and calories.
            <br />
            It&apos;s about sharing. It&apos;s about honesty. It&apos;s about
            identity.
          </p>

          <div className={styles.heroActions}>
            <Link href={`/${location.id}/menu`} className={styles.primaryButton}>
              View the Menu
            </Link>
            <a
              href={location.orderOnlineUrl}
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </div>
        </div>
      </VideoBackground>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h2>Hours</h2>
              <p>Mon-Fri: {location.hours.weekday}</p>
              <p>Sat: {location.hours.saturday}</p>
              <p>Sun: {location.hours.sunday}</p>
            </div>

            <div className={styles.infoBox}>
              <h2>Contact</h2>
              <p>
                <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}>
                  {location.phone}
                </a>
              </p>
              <p>
                <a href="mailto:info@tomosushi.ca">info@tomosushi.ca</a>
              </p>
            </div>

            <div className={styles.infoBox}>
              <h2>Payments</h2>
              <p>We accept cash, credit cards (no AMEX), and debit cards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2>Passion to Serve</h2>
          <p>
            &ldquo;Tomo&rdquo; in Japanese means &ldquo;Friend&rdquo;. We wish to
            create warm and friendly atmosphere, and we believe that you will
            create very special moments of your life with your companions. We
            take pride in providing superior quality foods and services to every
            guest, every time. That is how we have been the best restaurant in
            casual dining now and will be for generations.
          </p>
          <blockquote>
            &ldquo;There&apos;s no sincerer love than the love of food.&rdquo;
            <cite>— George Bernard Shaw</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
