import Hero from "@/components/Hero";
import ApplicationIndustry from "@/components/ApplicationIndustry";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import SendInquiry from "@/components/SendInquiry";
import News from "@/components/News";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omron Tech Pumps | Geavanceerde Industriële Pompoplossingen',
  description: 'Wereldwijde fabrikant van hoogwaardige industriële pompen voor olie en gas, petrochemie en waterzuivering. Ontdek onze centrifugale, zonne- en schroefpompen.',
  alternates: {
    canonical: '/',
  },
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
