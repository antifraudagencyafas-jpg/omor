import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, ChevronRight, List, Grid } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OMC Centrifugal Pumps | Omron Tech Pumps',
  description: 'High-performance OMC centrifugal pumps engineered for oil, gas, and chemical industries. Discover our overhung and between-bearing pump solutions.',
};

export default function OMCCentrifugalPumpsPage() {
  const products = [
    {
      name: "OMC-HM650 HIGH-MOUNT HORIZONTAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/1pvb-2.jpg",
      description: "The Omron Tech Pumps OMC series of OMC-HM650 high mount horizontal centrifugal pumps is a high-performance product developed by our company. Based on traditional centrifugal pumps, we have integrated advanced structural concepts to create an ideal choice for stable production in demanding industrial processes.",
      href: "/products/omc-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump"
    },
    {
      name: "OMC-SR750 SLURRY-RESISTANT HORIZONTAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/5pvb-1.jpg",
      description: "Specifically designed for transporting slurries containing impurities such as solid particles and fibers. It features high efficiency, minimal leakage, and exceptional anti-clogging performance for chemical, mining, and power industries.",
      href: "/products/omc-centrifugal-pumps/omc-sr750-slurry-resistant-horizontal-centrifugal-pump"
    },
    {
      name: "OMC-VC320 VERTICAL CHEMICAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/2pvb-2.jpg",
      description: "A high-performance overhung type vertical centrifugal pump engineered for chemical processing. It features a flange-connected shaft and high-efficiency hydraulic model, ensuring stable operation under complex corrosive conditions.",
      href: "/products/omc-centrifugal-pumps/omc-vc320-vertical-chemical-centrifugal-pump"
    },
    {
      name: "OMC-TS420 TEMPERATURE SENSOR HORIZONTAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/6pvb-1.jpg",
      description: "OMC Horizontal Centrifugal Pumps For Heat Preservation for Heat Preservation, the innovative upgrade from chemical pumps, are crafted by Omron Tech Pumps. The pumps in Omron Tech Pumps series feature ingenious designs. Their hollow sandwich structure is compatible with a variety of insulating media, enabling precise tempera control, ensuring efficient and stable transportation, and demonstrating excellent performance under cor working conditions, thus facilitating the smooth o DeFNDG of chemical production processes. We adhere to the principle of putting customers first, providing professional selection advice and customized services, making every effort to maintain equipment stability. Our prices are also highly competitive, allowing you to obtain high - quality products at an affordable cost.",
      href: "/products/omc-centrifugal-pumps/omc-ts420-temperature-sensor-horizontal-centrifugal-pump"
    },
    {
      name: "OMC-VP450 VERTICAL PROCESS CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/3pvb-1.jpg",
      description: "OMC vertical chemical process pumps are specifically designed for vertical installation scenarios with limited space and high - reliability requirements. The maximum operating pressure is 2.5 Mpa. They are applicable in fields such as petrochemical, energy, and cryogenic engineering, and are suitable for transporting clean or slightly contaminated media. The operating pressure and temperature vary depending on the pump materials.",
      href: "/products/omc-centrifugal-pumps/omc-vp450-vertical-process-centrifugal-pump"
    },
    {
      name: "OMC-HC280 HORIZONTAL CHEMICAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/7pvb-1.jpg",
      description: "OMC Horizontal Centrifugal Pumps for Oil and Chemical Flow play a crucial role in the industry. Among them, the Omron Tech Pumps series strictly adheres to the OMC standard. Specifically crafted for the intricate technological processes in the petrochemical field, this series is highly efficient and reliable. Its flow rate ranges from 2 to 2600 cubic meters per hour, and the maximum head can reach up to 250 meters, which can precisely meet the transportation requirements of various media in petrochemical production.",
      href: "/products/omc-centrifugal-pumps/omc-hc280-horizontal-chemical-centrifugal-pump"
    },
    {
      name: "OMC-HP500 HIGH-PRESSURE HORIZONTAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2026/01/smmm.jpg",
      description: "As a global leader in industrial fluid technology Omron Tech Pumps has newly launched the OMC-HP500 overhung type horizontal centrifugal pumps series. This series is centered around strict compliance with the international standard of the American Petroleum Institute. It is specifically designed for scenarios in petrochemical industry, energy extraction, and transportation of highly corrosive media, redefining the industry benchmark for reliability and efficiency.",
      href: "/products/omc-centrifugal-pumps/omc-hp500-high-pressure-horizontal-centrifugal-pump"
    },
    {
      name: "OMC-FC260 HEAVY-DUTY HORIZONTAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/4pvb-1.jpg",
      description: "As a global leader in industrial fluid technology Omron Tech Pumps has newly launched the OMC-FC260 overhung type horizontal centrifugal pumps series. This series is centered around strict compliance with the international standard of the American Petroleum Institute. It is specifically designed for scenarios in petrochemical industry, energy extraction, and transportation of highly corrosive media, redefining the industry benchmark for reliability and efficiency.",
      href: "/products/omc-centrifugal-pumps/omc-fc260-heavy-duty-horizontal-centrifugal-pump"
    },
    {
      name: "OMC-HT800 HIGH-TEMPERATURE HORIZONTAL CENTRIFUGAL PUMP",
      image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/8pvb.jpg",
      description: "OMC Horizontal Centrifugal Pumps For Heat Preserva for Heat Preservation, the innovative upgrade from chemical pumps, are crafted by Omron Tech Pumps. The pumps in Omron Tech Pumps series feature ingenious designs. Their hollow sandwich structure is compatible with a variety of insulating media, enabling precise temperature control, ensuring efficient and stable transportation, and demonstrating excellent performance under complex working conditions, thus facilitating the smooth operation of chemical production processes. We adhere to the principle of putting customers first, providing professional selection advice and customized services, making every effort to maintain equipment stability. Our prices are also highly competitive, allowing you to obtain high - quality products at an affordable cost.",
      href: "/products/omc-centrifugal-pumps/omc-ht800-high-temperature-horizontal-centrifugal-pump"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://omrontechpumps.com/sitepad-data/uploads/2026/01/Ommm.jpg"
            alt="OMC Centrifugal Pumps Background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">OMC Centrifugal Pumps</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>

        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-8">
            Omron Tech Pumps is an enterprise specializing in the manufacturing of OMC Centrifugal Pumps, boasting profound technical expertise and rich industry experience. The company adheres to the pursuit of quality and innovation, providing high - quality OMC Centrifugal Pumps to customers worldwide. Relying on advanced manufacturing processes, strict quality inspections, and a professional team, its OMC Centrifugal Pumps products sell well both at home and abroad and are highly trusted by customers.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What is an OMC Centrifugal Pump?</h2>
          <p className="text-lg leading-relaxed mb-8">
            OMC centrifugal pumps are manufactured in accordance with strict industrial standards and have high requirements in terms of materials, structure, and performance testing. For example, the materials need to be corrosion - resistant and wear - resistant; the structure should be stable and well - sealed; and the performance must meet precise indicators. Therefore, OMC centrifugal pumps have higher quality and stronger adaptability, capable of meeting the demands of harsh industries.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Application Fields of OMC Centrifugal Pumps</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">1. Oil and Gas Industry</h3>
              <p className="text-slate-700">In the processes of oil exploration, transportation, refining, and in related natural gas operations, OMC centrifugal pumps that can operate stably in complex environments are required to ensure the transportation and utilization of crude oil and natural gas.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">2. Chemical Industry</h3>
              <p className="text-slate-700">The chemical production process is complex, and the media are hazardous. OMC centrifugal pumps, with good sealing and corrosion - resistance and stable operation, are used in links such as raw material transportation, material transfer, and product refining to support chemical production.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">3. Power Industry</h3>
              <p className="text-slate-700">In thermal power plants, industrial centrifugal pumps are used for boiler feed water, condensate water transportation, and cooling systems. In nuclear power plants, they are responsible for transporting the coolant of nuclear reactors, which is crucial for the safe operation of the power plants.</p>
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
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium cursor-pointer list-none">
                      <span>OMC Centrifugal Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-slate-50 px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/omc-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          OMC-HM650 HIGH-MOUNT HORIZONTAL CENTRIFUGAL PUMP
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/omc-centrifugal-pumps/omc-hc280-horizontal-chemical-centrifugal-pump" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          OMC-HC280 HORIZONTAL CHEMICAL CENTRIFUGAL PUMP
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/products/screw-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Screw Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/products/water-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Water Pumps
                  </Link>
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
                  { title: "OMC-HC280 Horizontal Chemical Centrifugal Pump", img: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/7pvb-1.jpg", link: "/products/omc-centrifugal-pumps/omc-hc280-horizontal-chemical-centrifugal-pump" },
                  { title: "OMC-SR750 Slurry-Resistant Horizontal Centrifugal Pump", img: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/5pvb-1.jpg", link: "/products/omc-centrifugal-pumps/omc-sr750-slurry-resistant-horizontal-centrifugal-pump" },
                  { title: "OMC-HM650 High-Mount Horizontal Centrifugal Pump", img: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/1pvb-2.jpg", link: "/products/omc-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump" },
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
                      <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-[#0047b3] transition-colors uppercase">
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
