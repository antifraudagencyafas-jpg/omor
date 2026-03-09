import Hero from "@/components/Hero";
import ApplicationIndustry from "@/components/ApplicationIndustry";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import SendInquiry from "@/components/SendInquiry";
import News from "@/components/News";

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
