import type { Location } from '@/data/types';

interface RestaurantStructuredDataProps {
  location: Location;
}

export function RestaurantStructuredData({ location }: RestaurantStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: `Tomo Sushi - ${location.name}`,
    description:
      'Authentic Japanese restaurant serving fresh sushi, sashimi, and traditional Japanese cuisine.',
    image: 'https://www.tomosushi.ca/images/logo-2.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.split(',')[0],
      addressLocality: location.name,
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    telephone: location.phone,
    url: `https://www.tomosushi.ca/${location.id}`,
    servesCuisine: ['Japanese', 'Sushi', 'Sashimi'],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:30',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '12:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '12:00',
        closes: '21:30',
      },
    ],
    acceptsReservations: true,
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'CAD',
    menu: `https://www.tomosushi.ca/${location.id}/menu`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tomo Sushi',
    url: 'https://www.tomosushi.ca',
    logo: 'https://www.tomosushi.ca/images/logo-2.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@tomosushi.ca',
      contactType: 'Customer Service',
    },
    sameAs: ['https://www.instagram.com/tomosushi_rh/'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
