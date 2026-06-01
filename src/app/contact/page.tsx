import { Metadata } from 'next';
import { ContactClient } from '../../components/ContactClient';

export const metadata: Metadata = {
  title: 'Book a Mobile Mechanic | REM Auto',
  description: 'Request a free quote or book an onsite mobile mechanic directly to your driveway. Fast, transparent pricing and reliable service.',
  openGraph: {
    title: 'Book a Mobile Mechanic | REM Auto',
    description: 'Request a free quote or book an onsite mobile mechanic directly to your driveway in Rehoboth Beach, DE.',
    images: [{ url: '/hero.webp', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
