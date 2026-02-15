import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RestaurantStructuredData } from '@/components/StructuredData';
import { getLocation, locations } from '@/data/locations';

interface LocationLayoutProps {
  children: React.ReactNode;
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.id,
  }));
}

export default async function LocationLayout({
  children,
  params,
}: LocationLayoutProps) {
  const { location: locationId } = await params;
  const location = getLocation(locationId);

  if (!location) {
    notFound();
  }

  return (
    <>
      <RestaurantStructuredData location={location} />
      <Header location={location} variant="transparent" />
      {children}
      <Footer />
    </>
  );
}
