import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLocation, locations } from '@/data/locations';
import styles from './page.module.css';

interface ContactPageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.id,
  }));
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    return {};
  }

  return {
    title: `Contact - ${location.name}`,
    description: `Contact Tomo Sushi ${location.name}. Address: ${location.address}. Phone: ${location.phone}.`,
    alternates: { canonical: `/${location.id}/contact` },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    notFound();
  }

  // Google Maps embed URL (URL-encoded address)
  const mapQuery = encodeURIComponent(location.address);

  return (
    <main id="main-content" className={styles.contactPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Contact Us</h1>
          <p>{location.name} Location</p>
        </div>
      </header>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h2>Address</h2>
                <address>
                  {location.address.split(',').map((part, index) => (
                    <span key={index}>
                      {part.trim()}
                      {index < location.address.split(',').length - 1 && <br />}
                    </span>
                  ))}
                </address>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsLink}
                >
                  Get Directions
                </a>
              </div>

              <div className={styles.infoCard}>
                <h2>Phone</h2>
                <a
                  href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                  className={styles.phoneLink}
                >
                  {location.phone}
                </a>
                <p className={styles.phoneNote}>
                  Call us to make a reservation or place a takeout order
                </p>
              </div>

              <div className={styles.infoCard}>
                <h2>Hours</h2>
                <dl className={styles.hoursList}>
                  <div className={styles.hoursRow}>
                    <dt>Monday - Friday</dt>
                    <dd>{location.hours.weekday}</dd>
                  </div>
                  <div className={styles.hoursRow}>
                    <dt>Saturday</dt>
                    <dd>{location.hours.saturday}</dd>
                  </div>
                  <div className={styles.hoursRow}>
                    <dt>Sunday</dt>
                    <dd>{location.hours.sunday}</dd>
                  </div>
                </dl>
              </div>

              <div className={styles.infoCard}>
                <h2>Email</h2>
                <a href="mailto:info@tomosushi.ca" className={styles.emailLink}>
                  info@tomosushi.ca
                </a>
              </div>

              <div className={styles.infoCard}>
                <h2>Order Online</h2>
                <a
                  href={location.orderOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.orderButton}
                >
                  Order Now
                </a>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                {location.mapEmbedUrl ? (
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing ${location.name} location`}
                  />
                ) : (
                  <div className={styles.mapFallback}>
                    <p>{location.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapFallbackLink}
                    >
                      View on Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.paymentInfo}>
            <h2>Payment Methods</h2>
            <p>
              We accept cash, credit cards (Visa, Mastercard, no AMEX), and
              debit cards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
