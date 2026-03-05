import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Khan Korean Grill & Bar | Premium Korean BBQ in Northern Virginia',
  description:
    'Premium Korean BBQ with All-You-Can-Eat, Combo platters, Halal options, and full bar. Fairfax & Woodbridge, VA.',
  keywords:
    'Korean BBQ, KBBQ, Halal Korean BBQ, Fairfax VA, Fair Oaks Mall, AYCE, Korean restaurant',
  openGraph: {
    title: 'Khan Korean Grill & Bar',
    description: 'Premium Korean BBQ. AYCE, Combo, Halal. Northern Virginia.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-black">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
