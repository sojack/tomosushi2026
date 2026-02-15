import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import { OrganizationStructuredData } from "@/components/StructuredData";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tomo Sushi - Japanese Restaurant",
    template: "%s | Tomo Sushi",
  },
  description:
    "Tomo Sushi offers authentic Japanese cuisine with fresh sushi, sashimi, and traditional dishes. Locations in Richmond Hill and Mississauga.",
  keywords: [
    "sushi",
    "Japanese restaurant",
    "sashimi",
    "Richmond Hill",
    "Mississauga",
    "Japanese food",
    "Tomo Sushi",
  ],
  metadataBase: new URL("https://www.tomosushi.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Tomo Sushi",
    title: "Tomo Sushi - Japanese Restaurant",
    description:
      "Authentic Japanese cuisine with fresh sushi, sashimi, and traditional dishes. Locations in Richmond Hill and Mississauga.",
    images: [
      {
        url: "/images/video-1-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Tomo Sushi - Japanese Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomo Sushi - Japanese Restaurant",
    description:
      "Authentic Japanese cuisine with fresh sushi, sashimi, and traditional dishes.",
    images: ["/images/video-1-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable}`}>
      <body>
        <OrganizationStructuredData />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
