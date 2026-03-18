import Hero from "@/components/Hero";
import ApplicationIndustry from "@/components/ApplicationIndustry";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import SendInquiry from "@/components/SendInquiry";
import News from "@/components/News";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Industrial Pump Solutions',
  description: 'Global manufacturer of high-performance industrial pumps for oil & gas, petrochemical, and water treatment. Discover our centrifugal, solar, and screw pumps.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ApplicationIndustry />
      <AboutUs />
      <FeaturedProducts />
      <SendInquiry />
      <News />
    </main>
  );
}
