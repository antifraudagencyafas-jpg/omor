import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// BOLT: Moved static features outside component to prevent re-allocation on re-renders
const features = [
  "Over 20 years of engineering expertise",
  "Global manufacturer and supplier",
  "ISO 9001 Certified Quality Management",
  "Customized fluid transfer solutions",
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
          About Us
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto bg-white flex flex-col lg:flex-row items-stretch shadow-sm">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-medium text-[#004b9a] mb-4">
            About OmronTechPumps
          </h3>
          <div className="w-12 h-1 bg-[#004b9a] mb-8"></div>
          
          <div className="border-r-2 border-gray-100 pr-6 mb-8">
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong className="text-[#004b9a] uppercase">OmronTechPumps</strong> is a global manufacturer specializing in centrifugal pumps, screw pumps, and industrial fluid transfer systems with over 20 years of engineering expertise.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We are committed to providing reliable, high-performance pumping solutions for the most demanding environments. Our state-of-the-art manufacturing facilities and rigorous quality control ensure that every pump we deliver meets the highest international standards.
            </p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-slate-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#004b9a] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-[#004b9a] text-white font-medium rounded-full hover:bg-blue-800 transition-colors w-fit"
          >
            View More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773048328/about-36351_i2hvjj.jpg"
            alt="OmronTechPumps Factory"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
