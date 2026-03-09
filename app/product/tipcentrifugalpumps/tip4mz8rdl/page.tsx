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
          <Link href="/product" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/product/tipcentrifugalpumps" className="hover:text-blue-600 transition-colors">TIP Centrifugal Pumps</Link>
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
                        <Link href="#" className="block text-sm text-slate-500 hover:text-blue-600">
                          TIP Overhung Type Centrifugal Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="block text-sm text-slate-500 hover:text-blue-600">
                          TIP Between Bearing Type Centrifugal Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/product/screwpumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Screw Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/product/water-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Water Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/product/magnetic-drive-pump" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
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
                  { title: "G2AP HORIZONTAL CENTRIFUGAL PUMPS", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg", link: "/product/tipcentrifugalpumps/g2ap" },
                  { title: "TIP8C2XKWR Horizontal Centrifugal", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/9pvb-1_qqbrcy.jpg", link: "/product/tipcentrifugalpumps/tip8c2xkwr" },
                  { title: "HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR.", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/4pvb-1_yb3gk4.jpg", link: "/product/tipcentrifugalpumps/tipq9l4a7m" },
                  { title: "OTT SINGLE SCREW PUMPS", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg", link: "/product/screwpumps/ott" }
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
                  <Link href="/product" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded transition-colors text-sm font-medium">
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
              <p className="text-slate-700 leading-relaxed mb-8">
                The Omron Tech Pumps TIP series of TIP4MZ8RDL Overhung Type Vertical Centrifugal Pumps is a high Performance product developed by our company. Based on chemical pumps, we have fully considered the special structural requirements of chemical pumps during operation, drawn on advanced structural experiences at home and abroad, and created it through repeated research and optimization.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4">High Mount horizontal Centrifugal Pump Schematic Diagram</h3>
              <p className="text-slate-700 mb-6">Api Oh4 Overhung Type Horizontal Centrifugal Pumps</p>
              
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                {/* Schematic Placeholder */}
                <div className="relative w-full max-w-2xl aspect-[4/3]">
                  <Image 
                    src="https://picsum.photos/seed/schematic/800/600" 
                    alt="Schematic Diagram" 
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <p className="text-slate-700 mb-4">
                The TIP HIGH MOUNT type horizontal centrifugal pump is highly suitable for transporting chemically corrosive liquids (either containing no solid particles or a small amount of solid particles), and the viscosity of the transported medium is similar to that of water.
              </p>
              
              <ul className="space-y-2 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Chemical Industry:</strong> It is used to transport various corrosive fluids during the chemical production process.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Food Industry:</strong> It is responsible for transporting fluid raw materials during the food processing process.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Brewing Industry:</strong> It is used to transport raw materials and fermentation broth during the brewing process.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Refining Industry:</strong> It undertakes the transportation of crude oil and refined oil products.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Pharmaceutical Industry:</strong> It is responsible for transporting various liquids required for drug production.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Paper - making Industry:</strong> It transports pulp, white water, and chemical additives.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Metallurgical Industry:</strong> It transports metallurgical liquids, flushing water, and other related liquids.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Power Industry:</strong> It is used to transport boiler make - up water and cooling circulating water.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Environmental Protection Industry:</strong> It transports sewage, sludge during sewage treatment, and absorption liquids for waste gas treatment.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameter Diagram</h3>
              
              <div className="space-y-8 mb-12">
                {/* Performance Curves Placeholders */}
                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="relative w-full aspect-[2/1]">
                    <Image 
                      src="https://picsum.photos/seed/curve1/800/400" 
                      alt="Performance Curve 1" 
                      fill 
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="relative w-full aspect-[2/1]">
                    <Image 
                      src="https://picsum.photos/seed/curve2/800/400" 
                      alt="Performance Curve 2" 
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
                  "TIP High Mount Type Centrifugal Pumps",
                  "TIP Bearing Type Centrifugal Pumps",
                  "Cent Pump",
                  "Centrifugal Pumps",
                  "corrosion Resistant Centrifugal Pump",
                  "Horizontal Centrifugal Pump",
                  "Centrifugal Pump",
                  "Diagram of A Centrifugal Pump."
                ].map((tag, idx) => (
                  <Link 
                    key={idx} 
                    href="#" 
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
