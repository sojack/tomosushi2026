import type { Location } from '@/data/types';

/** Parse "11:30am - 10:00pm" into { opens: "11:30", closes: "22:00" } */
function parseHoursRange(range: string): { opens: string; closes: string } {
  const [openStr, closeStr] = range.split('-').map((s) => s.trim());
  return { opens: to24Hour(openStr), closes: to24Hour(closeStr) };
}

function to24Hour(time: string): string {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!match) return time;
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toLowerCase();
  if (period === 'pm' && hours !== 12) hours += 12;
  if (period === 'am' && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

interface RestaurantStructuredDataProps {
  location: Location;
}

export function RestaurantStructuredData({ location }: RestaurantStructuredDataProps) {
  const weekdayHours = parseHoursRange(location.hours.weekday);
  const saturdayHours = parseHoursRange(location.hours.saturday);
  const sundayHours = parseHoursRange(location.hours.sunday);

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
        opens: weekdayHours.opens,
        closes: weekdayHours.closes,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: saturdayHours.opens,
        closes: saturdayHours.closes,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: sundayHours.opens,
        closes: sundayHours.closes,
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
