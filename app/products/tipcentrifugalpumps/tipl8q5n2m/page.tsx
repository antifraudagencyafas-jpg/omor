import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function TIPL8Q5N2MPage() {
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
          <span className="text-slate-900 font-medium truncate uppercase">TIPL8Q5N2M Horizontal Centrifugal Pump</span>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/6pvb-1.jpg"
                    alt="TIPL8Q5N2M Horizontal Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  TIPL8Q5N2M Horizontal Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIPL8Q5N2M (API 610 OH2)
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The TIPL8Q5N2M Series is a high-performance horizontal, single-stage, single-suction, centerline-supported centrifugal pump designed according to API 610 (OH2 type) standards. It is engineered for heavy-duty process applications requiring high reliability under extreme temperatures and pressures.
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
              <h2 className="text-xl font-bold text-slate-800 mb-4">Product Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                TIPL8Q5N2M is designed for maximum safety and efficiency in refineries and chemical plants. Its centerline support minimizes thermal expansion effects on alignment, ensuring long-term bearing and seal life.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Design Features</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Centerline Support:</span>
                    <span>Reduces piping stress and maintains alignment at high temperatures.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Heavy Duty Shaft:</span>
                    <span>Designed for minimum deflection at the seal faces, exceeding API 610 requirements.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Versatile Sealing:</span>
                    <span>Compatible with API 682 seal plans to meet diverse environmental and safety standards.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Fields</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> Oil Refineries</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> Petrochemical Processing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> Gas Processing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> High Temperature Services</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> Heavy Oil Transportation</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Technical Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250321/api610oh2horizontal-centrifugal-pumps--2--772391.webp"
                    alt="TIPL8Q5N2M API 610 OH2 Pump Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Operational Parameters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div className="bg-slate-50 p-4 border border-slate-200">
                  <span className="block text-sm font-bold text-slate-500 uppercase">Capacity</span>
                  <span className="text-lg font-bold text-slate-800">Up to 2600 m³/h</span>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200">
                  <span className="block text-sm font-bold text-slate-500 uppercase">Head</span>
                  <span className="text-lg font-bold text-slate-800">Up to 300 m</span>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200">
                  <span className="block text-sm font-bold text-slate-500 uppercase">Pressure</span>
                  <span className="text-lg font-bold text-slate-800">Up to 5.0 MPa</span>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200">
                  <span className="block text-sm font-bold text-slate-500 uppercase">Temperature</span>
                  <span className="text-lg font-bold text-slate-800">-80℃ to +450℃</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIPL8Q5N2M",
                  "API 610 OH2",
                  "Horizontal Centrifugal Pump",
                  "Centerline Supported",
                  "High Temperature Pump"
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
