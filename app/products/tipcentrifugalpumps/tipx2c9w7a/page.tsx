import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function TIPX2C9W7APage() {
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
          <span className="text-slate-900 font-medium truncate uppercase">TIPX2C9W7A Chemical Vertical Processing Pumps</span>
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
              <h3 className="bg-slate-100 text-slate-800 font-bold text-lg px-6 py-4 border-b border-slate-200">
                Products Catalog
              </h3>
              <ul className="divide-y divide-slate-100">
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 bg-blue-600 text-white font-medium cursor-pointer list-none">
                      <span>TIP Centrifugal Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-white px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/tipcentrifugalpumps" className="block text-sm text-slate-500 hover:text-blue-600">
                          TIP Overhung Type Centrifugal Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/tipcentrifugalpumps" className="block text-sm text-slate-500 hover:text-blue-600">
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
          </aside>

          {/* Right Content Area - Product Details */}
          <div className="w-full flex-1">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/3pvb-1.jpg"
                    alt="TIPX2C9W7A Chemical Vertical Processing Pumps"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  TIPX2C9W7A Chemical Vertical Processing Pumps
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIPX2C9W7A
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    TIP chemical vertical process pumps are specifically designed for vertical installation scenarios with limited space and high - reliability requirements. The maximum operating pressure is 2.5 Mpa. They are applicable in fields such as petrochemical, energy, and cryogenic engineering, and are suitable for transporting clean or slightly contaminated media. The operating pressure and temperature vary depending on the pump materials.
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

            <div className="prose prose-slate max-w-none">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Product Description</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The Omron Tech Pumps TIP series of TIP cantilever vertical centrifugal pumps are suitable for transporting clean or slightly contaminated media. With a compact vertical layout, the motor is directly connected to the pump body, reducing the floor area by 60% compared to horizontal pumps.
              </p>
              <ul className="space-y-2 text-slate-700 list-none pl-0 mb-8">
                <li className="flex items-start"><span className="mr-2 text-blue-600">●</span> <strong>Impeller:</strong> It has a single - suction, radial, and closed - type structure, equipped with replaceable impeller wear rings and casing wear rings, which can save the cost of maintenance spare parts.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600">●</span> <strong>Shaft Seal:</strong> Depending on different working conditions, packing seals can be flexibly selected.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600">●</span> <strong>Pump Body:</strong> Radially split, sealed with a restricted gasket between the pump body and the pump cover. Pump bodies with a diameter of over 80 mm adopt a double - volute design.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600">●</span> <strong>Pump Cover:</strong> A cooling chamber can be configured when necessary to cool the shaft seal chamber.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600">●</span> <strong>Bearings:</strong> Lubricated with grease, there is a grease filling cup on the bearing cover, and the bearing bracket is normally designed without a cooling function.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">1. Cryogenic Factories:</span>
                    <span>Used to transport cryogenic media such as liquid ammonia and liquid nitrogen. The pump has excellent sealing performance and can adapt to low - temperature environments, ensuring the refrigeration system works properly, maintaining a low - temperature environment, and guaranteeing the freezing and storage quality of food.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">2. Coal Mining Industry:</span>
                    <span>Used to handle mine water containing impurities and corrosive substances. The pump is wear - resistant, corrosion - resistant, and has a large flow rate, ensuring coal mining safety. It is also used in coal washing to assist in efficient separation.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">3. Power Plants:</span>
                    <span>Used for boiler water make - up to meet the water demand; used in desulfurization and denitration systems to reduce harmful gas emissions. With stable performance, it ensures the continuous operation of power plants.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">4. Marine Industry:</span>
                    <span>The vertical centrifugal pump is resistant to seawater corrosion. It can transport various media on offshore platforms and is used to convey seawater and fresh water during seawater desalination.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Working Conditions</h3>
              <ul className="space-y-1 text-slate-700 list-disc pl-5 mb-12">
                <li>Flow rate: 2 - 2600 m³/h</li>
                <li>Head: 0 - 250 m</li>
                <li>Pressure: ≤ 2.5 MPa</li>
                <li>Temperature: - 20°C - 250°C</li>
                <li>Maximum Rotational Speed: 2900 rpm/min</li>
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIP Vertical Chemical Process Pumps",
                  "Vertical Centrifugal Pump",
                  "TIP Centrifugal Pumps",
                  "TIP Between Bearing Type Centrifugal Pumps",
                  "Vertical Chemical Transfer Pump",
                  "TIP Compact Pump Design",
                  "Omron Tech Pumps Leak-Proof Vertical Pump"
                ].map((tag, idx) => (
                  <span
                    key={idx} 
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
