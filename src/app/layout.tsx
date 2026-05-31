import type { Metadata } from 'next';
import '../index.css';
import '@fontsource/barlow-condensed/800.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'REM Auto | Mobile Mechanic in Rehoboth Beach, DE',
  description: 'Your trusted mobile mechanic serving Rehoboth Beach and surrounding Delaware areas. We come directly to you for mobile auto repair, brake pad replacement, check engine light diagnostics, alternator replacement, and routine maintenance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'REM Auto Mechanic',
    image: 'https://remautomechanic.com/hero.webp',
    description: 'Your trusted mobile mechanic in Rehoboth Beach, Delaware. We come to you for brakes, diagnostics, maintenance, and pre-purchase inspections.',
    url: 'https://remautomechanic.com',
    telephone: '+1-302-212-7643',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 38.7209,
        longitude: -75.0760
      },
      geoRadius: 40000
    },
    priceRange: '$$'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
