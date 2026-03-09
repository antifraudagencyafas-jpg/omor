import type {Metadata} from 'next';
import './globals.css'; // Global styles
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Omron Tech Pumps',
  description: 'Industrial Pump Products',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="min-h-screen bg-white font-sans text-slate-900">
        <TopHeader />
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
