import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, ChevronRight, CheckCircle2 } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Pumps | Omron Tech Pumps',
  description: 'High-capacity water transport solutions for industrial cooling, municipal supply, and wastewater management. Energy-efficient and durable.',
};

export default function WaterPumpsPage() {
  const products = [
    {
      name: "OMW-VS800 MULTISTAGE VERTICAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/11pvb-1.jpg",
      description: "High-capacity water transport solutions for industrial cooling, municipal supply, and wastewater management. Designed for maximum energy efficiency and minimal maintenance.",
      href: "/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump"
    },
    {
      name: "OMW-FF900 MULTISTAGE FIRE-FIGHTING CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/water-pmp111.jpg",
      description: "Reliable and robust fire fighting centrifugal pumps designed to meet stringent safety standards. Ensures high pressure and consistent water flow for critical emergency situations.",
      href: "/products/water-pumps/omw-ff900-multistage-fire-fighting-centrifugal-pump"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773078720/image-1_yfttp1.jpg"
            alt="Water Pumps Background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Water Pumps</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>

        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-8">
            High-capacity water transport solutions for industrial cooling, municipal supply, and wastewater management. Designed for maximum energy efficiency and minimal maintenance.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Key Features</h2>
          <ul className="space-y-3 mb-8">
            {[
              "High hydraulic efficiency",
              "Durable cast iron or stainless steel construction",
              "Low life-cycle costs",
              "Available in single and multi-stage configurations",
              "Optimized for continuous duty"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Technical Specifications</h2>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <div><span className="font-semibold text-slate-700">Capacity:</span> Up to 5000 m³/h</div>
              <div><span className="font-semibold text-slate-700">Head:</span> Up to 300 m</div>
              <div><span className="font-semibold text-slate-700">Temperature:</span> Up to 120°C</div>
              <div><span className="font-semibold text-slate-700">Applications:</span> Clean water, wastewater</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-8">
            {/* Search Box */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <form className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-4 pr-10 py-2 border border-slate-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                />
                <button type="submit" className="absolute right-3 text-slate-400 hover:text-blue-600">
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Products Accordion */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <h3 className="bg-[#0047b3] text-white font-bold text-lg px-6 py-4">
                Products
              </h3>
              <ul className="divide-y divide-slate-200">
                <li>
                  <Link href="/products/omc-centrifugal-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    OMC Centrifugal Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/products/screw-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Screw Pumps
                  </Link>
                </li>
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium cursor-pointer list-none">
                      <span>Water Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-slate-50 px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          OMW-VS800 MULTISTAGE VERTICAL CENTRIFUGAL PUMP
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/water-pumps/omw-ff900-multistage-fire-fighting-centrifugal-pump" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          OMW-FF900 MULTISTAGE FIRE-FIGHTING CENTRIFUGAL PUMP
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/products/magnetic-drive-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Magnetic Drive Pump
                  </Link>
                </li>
              </ul>
            </div>

            {/* New Products */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <h3 className="bg-slate-800 text-white font-bold text-lg px-6 py-4">
                New Products
              </h3>
              <div className="p-4 space-y-4">
                {[
                  { title: "OMC-HC 280 Horizontal Chemical Centrifugal Pump", img: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/7pvb-1.jpg", link: "/products/omc-centrifugal-pumps/omc-hc280-horizontal-chemical-centrifugal-pump" },
                  { title: "OMC-SR 750 Slurry-Resistant Horizontal Centrifugal Pump", img: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/5pvb-1.jpg", link: "/products/omc-centrifugal-pumps/omc-sr750-slurry-resistant-horizontal-centrifugal-pump" },
                  { title: "OMC-HM 650 High-Mount Horizontal Centrifugal Pump", img: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/1pvb-2.jpg", link: "/products/omc-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump" },
                  { title: "OMT-VS150 Viscous Handling Single Screw Pump", img: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/9pvb-1.jpg", link: "/products/screw-pumps/omt-vs150-viscous-handling-single-screw-pump" }
                ].map((np, i) => (
                  <Link href={np.link} key={i} className="flex items-center gap-4 group">
                    <div className="relative w-16 h-16 bg-white border border-slate-100 rounded overflow-hidden flex-shrink-0">
                      <Image 
                        src={np.img}
                        alt={np.title}
                        fill
                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-xs font-medium text-slate-700 group-hover:text-[#0047b3] line-clamp-3 transition-colors leading-snug">
                      {np.title}
                    </h4>
                  </Link>
                ))}
                <div className="pt-2">
                  <Link href="/products" className="flex items-center justify-center w-full px-4 py-2 bg-slate-100 text-slate-700 hover:bg-[#0047b3] hover:text-white rounded transition-colors text-sm font-medium">
                    View More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Area - Product Listing */}
          <div className="w-full flex-1">
            <div className="space-y-6">
              {products.map((product, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-[240px] relative aspect-square sm:aspect-auto sm:h-[240px] bg-white border border-slate-100 rounded overflow-hidden flex-shrink-0">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 240px"
                      className="object-contain p-2"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-full flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-[#0047b3] transition-colors">
                        <Link href={product.href}>{product.name}</Link>
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-4">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <Link 
                        href={product.href}
                        className="inline-flex items-center justify-center px-6 py-2 bg-[#0047b3] text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
                      >
                        View More &gt;&gt;
                      </Link>
                      <Link 
                        href="#inquiry" 
                        className="inline-flex items-center justify-center px-6 py-2 bg-[#0047b3] text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
                      >
                        Send Inquiry &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
