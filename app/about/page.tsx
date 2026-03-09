import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/20250122170452478778_mt4egy.webp"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
              <ul className="flex flex-col">
                <li>
                  <Link 
                    href="/about" 
                    className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white font-medium border-b border-gray-200"
                  >
                    Company Profile
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/faq" 
                    className="flex items-center justify-between px-6 py-4 text-slate-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition-colors"
                  >
                    FAQ
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b border-gray-200">
              Company Profile
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Customer&apos;s requests (then including customization) thanks to high Tech apparatus at its own disposal and synergistic collaboration both with customers and distributors, implementing performances for existing products introducing latest news in terms of materials, machining process, analysis and control systems (both during parts manufacturing and on &quot;ready to delivery&quot; products).
              </p>
              <p>
                All products manufactured by OMRON TECH PUMPS are 100% tested and relevant data are stored in our database.
              </p>
              <p>
                Thanks to products identification achievable by model code and serial number is possible:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Find out product performance, also &quot;after sales&quot;</li>
                <li>To release certificates for pump performances (both OMRON TECH PUMPS standard test conditions - ISO, API or customer&apos;s requested conditions).</li>
              </ul>
              <p>
                OMRON TECH PUMPS Quality system, recognized by ISO 9000 Certification (according to ISO 9001 and extended to UNI EN ISO 9001:2008) and CE/PED, rules all activities in the company, with the aim to fully satisfy customer&apos;s expectation in terms of Products Quality, reliability in delivery and stock availability for finished products.
              </p>
              <p>
                OMRON TECH PUMPS Sales Network is extended throughout all continenets, and it is in continuous development: it is capable to grant qualified technical support in selecting our products and to handle directly a wide portfolio of international leading Customers, Often OMRON TECH PUMPS sales Network provides local inventory of our products.
              </p>
              <div className="mt-8 relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773048328/about-36351_i2hvjj.jpg"
                  alt="Omron Tech Pumps Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
