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
          <span className="text-slate-900 font-medium truncate">TIPX2C9W7A CHEMICAL VERTICAL PROCESSING PUMPS</span>
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
                    src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/3pvb_abw4ed.jpg"
                    alt="TIPX2C9W7A CHEMICAL VERTICAL PROCESSING PUMPS"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight">
                  TIPX2C9W7A CHEMICAL VERTICAL PROCESSING PUMPS
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIPX2C9W7A
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    TIP chemical vertical process pumps are specifically designed for vertical installation scenarios with limited space and high - reliability requirements. The maximum operating pressure is 2.5 Mpa. They are applicable in fields such as petrochemical, energy, and cryogenic engineering, and are suitable for transporting clean or slightly contaminated media.
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
                The Omron Tech Pumps TIP series of TIP cantilever vertical centrifugal pumps are suitable for transporting clean or slightly contaminated media. With a compact vertical layout, the motor is directly connected to the pump body, reducing the floor area by 60% compared to horizontal pumps.
              </p>
              <ul className="space-y-4 text-slate-700 mb-8">
                <li>● <strong>Impeller:</strong> Single - suction, radial, and closed - type structure, equipped with replaceable impeller wear rings and casing wear rings.</li>
                <li>● <strong>Shaft Seal:</strong> Depending on different working conditions, packing seals can be flexibly selected.</li>
                <li>● <strong>Pump Body:</strong> Radially split, sealed with a restricted gasket between the pump body and the pump cover. Pump bodies with a diameter of over 80 mm adopt a double - volute design.</li>
                <li>● <strong>Pump Cover:</strong> A cooling chamber can be configured when necessary to cool the shaft seal chamber.</li>
                <li>● <strong>Bearings:</strong> Lubricated with grease, there is a grease filling cup on the bearing cover.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Cryogenic Factories:</strong> Used to transport cryogenic media such as liquid ammonia and liquid nitrogen.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Coal Mining Industry:</strong> Used to handle mine water containing impurities and corrosive substances.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Power Plants:</strong> Used for boiler water make - up and desulfurization systems.</li>
                <li className="flex items-start"><span className="mr-2 text-slate-400">●</span> <strong>Marine Industry:</strong> Resistant to seawater corrosion, suitable for offshore platforms and desalination.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Working Conditions</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 list-none pl-0">
                  <li><strong>Flow rate:</strong> 2 - 2600 m³/h</li>
                  <li><strong>Head:</strong> 0 - 250 m</li>
                  <li><strong>Pressure:</strong> ≤ 2.5 MPa</li>
                  <li><strong>Temperature:</strong> - 20°C - 250°C</li>
                  <li><strong>Max Rotational Speed:</strong> 2900 rpm/min</li>
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIP Vertical Chemical Process Pumps",
                  "Vertical Centrifugal Pump",
                  "Space-Saving Pump",
                  "Industrial Chemical Pump"
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
