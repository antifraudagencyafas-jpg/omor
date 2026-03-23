import Hero from "@/components/Hero";
import ApplicationIndustry from "@/components/ApplicationIndustry";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import SendInquiry from "@/components/SendInquiry";
import News from "@/components/News";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geavanceerde Industriële Pompoplossingen',
  description: 'Wereldwijde fabrikant van hoogwaardige industriële pompen voor olie & gas, petrochemie en waterbehandeling. Ontdek onze centrifugaal-, zonne- en schroefpompen.',
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
