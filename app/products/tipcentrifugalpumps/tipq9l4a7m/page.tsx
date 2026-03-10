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
          <span className="text-slate-900 font-medium truncate">TIPQ9L4A7M HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR</span>
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
                    src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/4pvb-1_yb3gk4.jpg"
                    alt="TIPQ9L4A7M HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight">
                  TIPQ9L4A7M HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIPQ9L4A7M
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    As a global leader in industrial fluid technology, Omron Tech Pumps has newly launched the TIPQ9L4A7M overhung type horizontal centrifugal pumps series. This series is centered around strict compliance with international standards. It is specifically designed for scenarios in petrochemical industry, energy extraction, and transportation of highly corrosive media, redefining the industry benchmark for reliability and efficiency.
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
                The horizontal centrifugal pump with Temperature Sensor is a new series of products designed and developed by Omron Tech Pumps. It features a horizontal, single - stage, single - suction, and radial partial volute structure.
              </p>
              <p className="text-slate-700 leading-relaxed mb-8">
                It can transport various liquids with high or low temperatures, neutral or corrosive properties, such as inorganic and organic acids like nitric acid, sulfuric acid, hydrochloric acid, and phosphoric acid. It is mainly used in the refining industry, petrochemical industry, coal processing industry, paper and pulp industry, sugar industry, heating and water supply industry, etc.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Fields</h3>
              <ul className="space-y-6 text-slate-700 list-none pl-0 mb-12">
                <li>● <strong>Petrochemical Industry:</strong> In refineries for processes like crude oil distillation, catalytic cracking, and hydro - refining. Used to transfer crude oil, intermediate products, and various chemical agents.</li>
                <li>● <strong>Coal Processing Industry:</strong> In processes including coal - to - liquid, coal - to - gas, and coal - to - methanol, transporting media such as coal slurry, syngas, and methanol.</li>
                <li>● <strong>Power Industry:</strong> Used to transport boiler make - up water, condensate water, and circulating cooling water. Also used for acid - base solutions in desulfurization.</li>
                <li>● <strong>Paper and Pulp Industry:</strong> Transferring pulp from storage to cooking equipment, and qualified pulp to the headbox of the paper machine.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Operating Conditions</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 list-none pl-0">
                  <li><strong>Flow rate:</strong> 3 - 2600 m³/h</li>
                  <li><strong>Head:</strong> 4 - 250 m</li>
                  <li><strong>Pressure:</strong> Up to 5.0 MPa</li>
                  <li><strong>Temperature:</strong> -20°C - 450°C</li>
                  <li><strong>Rotational speed:</strong> 2950 rpm/min, 1450 rpm/min</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameters</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border border-slate-200 rounded-lg p-2 bg-white">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={`https://omrontechpumps.com/sitepad-data/uploads/2026/01/ys${i}.jpg`}
                        alt={`Performance Parameter ${i}`}
                        fill
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIP Horizontal Centrifugal Pump",
                  "Temperature Sensor Pump",
                  "High Temperature Pump",
                  "Petrochemical Process Pump"
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
