import type {Metadata} from 'next';
import './globals.css'; // Global styles
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://omrontechpumps.nl'),
  title: {
    default: 'Omron Tech Pumps | Industriële Pompfabrikant',
    template: '%s | Omron Tech Pumps'
  },
  description: 'Wereldwijde fabrikant van geavanceerde industriële pompoplossingen voor de olie- en gassector, petrochemie, energieopwekking en waterzuiveringsindustrie.',
  keywords: ['industriële pompen', 'centrifugaalpompen', 'zonnepompen', 'schroefpompen', 'magneetaangedreven pompen', 'waterpompen', 'Omron Tech Pumps'],
  authors: [{ name: 'Omron Tech Pumps' }],
  creator: 'Omron Tech Pumps',
  publisher: 'Omron Tech Pumps',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://omrontechpumps.nl',
    siteName: 'Omron Tech Pumps',
    title: 'Omron Tech Pumps | Industriële Pompfabrikant',
    description: 'Wereldwijde fabrikant van geavanceerde industriële pompoplossingen voor de olie- en gassector, petrochemie, energieopwekking en waterzuiveringsindustrie.',
    images: [
      {
        url: 'https://res.cloudinary.com/dccvdkffu/image/upload/v1773046009/20250320141352135874_1_ivmu32.webp',
        width: 1200,
        height: 630,
        alt: 'Omron Tech Pumps Industrial Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omron Tech Pumps | Industriële Pompfabrikant',
    description: 'Wereldwijde fabrikant van geavanceerde industriële pompoplossingen voor de olie- en gassector, petrochemie, energieopwekking en waterzuiveringsindustrie.',
    images: ['https://res.cloudinary.com/dccvdkffu/image/upload/v1773046009/20250320141352135874_1_ivmu32.webp'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body suppressHydrationWarning className="min-h-screen bg-white font-sans text-slate-900">
        <TopHeader />
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
