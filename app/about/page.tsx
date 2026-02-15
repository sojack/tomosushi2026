import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locations } from '@/data/locations';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Tomo Sushi, our commitment to quality Japanese cuisine, and our passion for serving fresh sushi and sashimi.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Header variant="solid" />
      <main id="main-content" className={styles.aboutPage}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1>About Tomo Sushi</h1>
          </div>
        </header>

        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                &ldquo;Tomo&rdquo; in Japanese means &ldquo;Friend&rdquo;. We
                wish to create a warm and friendly atmosphere, and we believe
                that you will create very special moments of your life with your
                companions.
              </p>
              <p>
                We take pride in providing superior quality foods and services
                to every guest, every time. That is how we have been the best
                restaurant in casual dining now and will be for generations.
              </p>
              <blockquote>
                &ldquo;There&apos;s no sincerer love than the love of
                food.&rdquo;
                <cite>— George Bernard Shaw</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <h2>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Quality</h3>
                <p>
                  We source only the freshest ingredients, working with trusted
                  suppliers to ensure every piece of fish meets our exacting
                  standards.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Tradition</h3>
                <p>
                  Our chefs honor the traditions of Japanese cuisine while
                  bringing creativity and innovation to every dish we serve.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Community</h3>
                <p>
                  We are proud to serve our local communities in Richmond Hill
                  and Mississauga, building lasting relationships with our
                  guests.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Hospitality</h3>
                <p>
                  True to our name, we treat every guest as a friend. Warm
                  service and genuine care are at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.halalSection}>
          <div className={styles.container}>
            <div className={styles.halalContent}>
              <Image
                src="/images/Halal_logo.png"
                alt="Halal Certified"
                width={100}
                height={100}
                className={styles.halalLogo}
              />
              <div>
                <h2>Halal Options</h2>
                <p>
                  All the chicken served at Tomo Sushi is halal, and almost all
                  of our beef menu items are halal as well. Exception: Kalbi
                  (Short Ribs) is not halal.
                </p>
                <p>
                  Our unagi sauce contains a very small amount of alcohol. If
                  you follow a halal diet and would prefer to avoid it, please
                  let us know so we can remove the sauce for you.
                </p>
                <p>
                  Please rest assured that our sushi rice is made with{' '}
                  <strong>non-alcohol mirin</strong>, so it is completely safe
                  for you to enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.locationsSection}>
          <div className={styles.container}>
            <h2>Our Locations</h2>
            <div className={styles.locationsGrid}>
              {locations.map((location) => (
                <div key={location.id} className={styles.locationCard}>
                  <h3>{location.name}</h3>
                  <address>{location.address}</address>
                  <p className={styles.locationPhone}>
                    <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}>
                      {location.phone}
                    </a>
                  </p>
                  <div className={styles.locationHours}>
                    <p>Mon-Fri: {location.hours.weekday}</p>
                    <p>Sat: {location.hours.saturday}</p>
                    <p>Sun: {location.hours.sunday}</p>
                  </div>
                  <Link
                    href={`/${location.id}`}
                    className={styles.locationLink}
                  >
                    Visit Location
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
