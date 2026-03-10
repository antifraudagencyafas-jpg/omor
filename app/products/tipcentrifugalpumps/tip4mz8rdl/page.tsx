import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-24">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" /> Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/products/tipcentrifugalpumps" className="hover:text-blue-600 transition-colors">TIP Centrifugal Pumps</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate">TIP4MZ8RDL CHEMICAL VERTICAL CENTRIFUGAL PUMPS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-8">
            {/* Search Box */}
            <div className="bg-white border border-slate-200 rounded-none shadow-sm">
              <form className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full pl-4 pr-10 py-3 border-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-slate-50"
                />
                <button type="submit" className="absolute right-0 top-0 bottom-0 px-4 bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Products Accordion */}
            <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden">
              <h3 className="bg-white text-slate-800 font-bold text-lg px-6 py-4 border-b border-slate-200">
                Products
              </h3>
              <ul className="divide-y divide-slate-100">
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 bg-blue-600 text-white font-medium cursor-pointer list-none transition-colors">
                      <span>TIP Centrifugal Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-white px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products" className="block text-sm text-slate-500 hover:text-blue-600">
                          TIP Overhung Type Centrifugal Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="block text-sm text-slate-500 hover:text-blue-600">
                          TIP Between Bearing Type Centrifugal Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/products/screwpumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Screw Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/products/water-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Water Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/products/magnetic-drive-pump" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Magnetic Drive Pump</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* New Products */}
            <div className="bg-slate-200 rounded-none shadow-sm overflow-hidden">
              <h3 className="bg-slate-300 text-slate-700 font-bold text-lg px-6 py-4">
                New Products
              </h3>
              <div className="p-4 space-y-4">
                {[
                  { title: "G2AP HORIZONTAL CENTRIFUGAL PUMPS", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg", link: "/products/tipcentrifugalpumps/g2ap" },
                  { title: "TIP8C2XKWR Horizontal Centrifugal", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/9pvb-1_qqbrcy.jpg", link: "/products/tipcentrifugalpumps/tip8c2xkwr" },
                  { title: "HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR.", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/4pvb-1_yb3gk4.jpg", link: "/products/tipcentrifugalpumps/tipq9l4a7m" },
                  { title: "OTT SINGLE SCREW PUMPS", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg", link: "/products/screwpumps/ott" }
                ].map((np, i) => (
                  <Link href={np.link} key={i} className="flex items-center gap-4 group bg-white/50 p-2 rounded hover:bg-white transition-colors">
                    <div className="relative w-16 h-16 bg-white border border-slate-100 rounded overflow-hidden flex-shrink-0">
                      <Image 
                        src={np.img}
                        alt={np.title}
                        fill
                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-xs font-medium text-slate-600 group-hover:text-blue-600 line-clamp-3 transition-colors leading-snug uppercase">
                      {np.title}
                    </h4>
                  </Link>
                ))}
                <div className="pt-2">
                  <Link href="/products" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors text-sm font-medium">
                    View More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Area - Product Details */}
          <div className="w-full flex-1">
            {/* Top Section: Image and Basic Info */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/2pvb_gizzu2.jpg"
                    alt="TIP4MZ8RDL CHEMICAL VERTICAL CENTRIFUGAL PUMPS"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight">
                  TIP4MZ8RDL CHEMICAL VERTICAL CENTRIFUGAL PUMPS
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIP4MZ8RDL
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The Omron Tech Pumps TIP series of TIP4MZ8RDL Overhung Type Vertical Centrifugal Pumps is a high Performance product developed by our company. Based on chemical pumps, we have fully considered the special structural requirements of chemical pumps during operation, drawn on advanced structural experiences at home and abroad, and created it through repeated research and optimization.
                  </p>
                </div>
                <div className="mt-auto">
                  <Link 
                    href="/inquiry" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
                  >
                    Send Inquiry
                  </Link>
                </div>
              </div>
            </div>

            {/* Detailed Content Section */}
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Product Description</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The Omron Tech Pumps TIP series of TIP Chemical Vertical Centrifugal Pumps features excellent design and manufacturing processes. The shaft is connected by a flange and positioned with a spigot, ensuring high concentricity, low vibration, reliable operation, and convenient maintenance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                The hydraulic flow - through components adopt a high - efficiency and energy - saving hydraulic model. The pump efficiency is 5 - 8% higher than that of ordinary pumps, which can save operating costs for enterprises. The pump body is made by precision casting, with accurate internal structure and an aesthetically pleasing appearance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-8">
                This pump is a newly developed generation of single - stage and single - suction chemical pumps. With excellent performance, beautiful appearance, and easy maintenance, it is an ideal choice for pump equipment in the chemical industry.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <p className="text-slate-700 mb-4">
                The TIP cantilever vertical centrifugal pump is suitable for transporting chemically corrosive liquids (with no or a small amount of solid particles), and the viscosity of the transported medium is similar to that of water.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Chemical Industry:</strong> Transport various corrosive fluids in chemical production.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Food Industry:</strong> Responsible for transporting fluid raw materials in food processing.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Brewing Industry:</strong> Transports raw materials and fermentation broth.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Refining Industry:</strong> Transportation of crude oil and refined oil products.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Pharmaceutical Industry:</strong> Transports various liquids required for drug production.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Paper - making Industry:</strong> Transports pulp, white water, and chemical additives.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Metallurgical Industry:</strong> Transports metallurgical liquids, flushing water, and other liquids.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Power Industry:</strong> Transports boiler make - up water and cooling circulating water.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Environmental Protection Industry:</strong> Transports sewage, sludge, and absorption liquids.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Working Conditions</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 list-none pl-0">
                  <li><strong>Flow rate:</strong> 1.8 - 900 m³/h</li>
                  <li><strong>Head:</strong> 135 m</li>
                  <li><strong>Suction pressure (P1W):</strong> ≤ 0.3MPa</li>
                  <li><strong>Discharge pressure (P2W):</strong> ≤ 1.6MPa</li>
                  <li><strong>Ambient temperature:</strong> Not exceeding 40°C</li>
                  <li><strong>Altitude:</strong> Not exceeding 1000 m</li>
                  <li><strong>Rotational speed:</strong> 2960 rpm/min, 1480 rpm/min</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameters</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="relative w-full aspect-[4/3]">
                    <Image 
                      src="https://omrontechpumps.com/sitepad-data/uploads/2026/01/Capture1.jpg"
                      alt="Performance Parameter 1"
                      fill 
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="relative w-full aspect-[4/3]">
                    <Image 
                      src="https://omrontechpumps.com/sitepad-data/uploads/2026/01/Capture2.jpg"
                      alt="Performance Parameter 2"
                      fill 
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIP Chemical Vertical Centrifugal Pumps",
                  "TIP Type Centrifugal Pumps",
                  "Chemical Vertical Centrifugal Pumps",
                  "Vertical Centrifugal Pump"
                ].map((tag, idx) => (
                  <Link 
                    key={idx} 
                    href="/products" 
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
