import Image from 'next/image';
import VideoBackground from '@/components/VideoBackground';
import LocationCard from '@/components/LocationCard';
import { locations } from '@/data/locations';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main id="main-content">
      <VideoBackground
        videoSrc="/videos/hero.mp4"
        posterSrc="/images/video-1-poster.jpg"
      >
        <div className={styles.heroContent}>
          <Image
            src="/images/tomo.png"
            alt="Tomo Sushi"
            width={300}
            height={100}
            priority
            className={styles.heroLogo}
          />

          <p className={styles.heroTagline}>
            Food, in the end, in our own tradition, is something holy. It&apos;s
            not about nutrients and calories.
            <br />
            It&apos;s about sharing. It&apos;s about honesty. It&apos;s about
            identity.
          </p>

          <h1 className="sr-only">Tomo Sushi - Choose Your Location</h1>

          <div className={styles.locationCards}>
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </VideoBackground>
    </main>
  );
}
