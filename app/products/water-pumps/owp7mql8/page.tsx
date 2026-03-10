import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function OWP7MQL8Page() {
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
          <Link href="/products/water-pumps" className="hover:text-blue-600 transition-colors">Water Pumps</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate uppercase">OWP7MQL8 Multistage Fire Fighting Centrifugal Pump</span>
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
                  <Link href="/products/tipcentrifugalpumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>TIP Centrifugal Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/products/screwpumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Screw Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 bg-blue-600 text-white font-medium cursor-pointer list-none">
                      <span>Water Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-white px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/water-pumps" className="block text-sm text-slate-500 hover:text-blue-600 transition-colors">
                          Multistage Vertical Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/water-pumps" className="block text-sm text-blue-600 font-medium">
                          Fire Fighting Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/5.jpg"
                    alt="OWP7MQL8 Multistage Fire Fighting Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OWP7MQL8 Multistage Fire Fighting Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OWP7MQL8 (Fire Fighting Series)
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The OWP7MQL8 is a specialized multistage vertical centrifugal pump designed for mission-critical fire protection systems. Engineered to meet stringent fire safety standards, it provides rapid response and consistent high-pressure water delivery when it matters most.
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
              <h2 className="text-xl font-bold text-slate-800 mb-4">Design Features</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Specifically configured for fire fighting, the OWP7MQL8 features a robust construction that ensures reliability even after long periods of inactivity. Its multistage design allows it to reach the high pressures required for fire sprinkler systems and hydrant stands.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="border-l-4 border-red-500 bg-slate-50 p-5">
                  <h4 className="font-bold text-slate-800 mb-2">Safety First</h4>
                  <p className="text-sm text-slate-600">Built to handle sudden starts and reach operating pressure in seconds.</p>
                </div>
                <div className="border-l-4 border-red-500 bg-slate-50 p-5">
                  <h4 className="font-bold text-slate-800 mb-2">High Head Performance</h4>
                  <p className="text-sm text-slate-600">Capable of delivering water to the upper floors of high-rise structures.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Applications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span> Commercial High-Rise Buildings</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span> Industrial Warehouses</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span> Municipal Fire Hydrant Systems</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span> Offshore Platforms</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span> Sprinkler System Pressurization</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Technical Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250320/multistage-vertical-centrifugal-pumps--2--376036.webp"
                    alt="OWP7MQL8 Fire Fighting Pump Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Performance Specifications</h3>
              <table className="min-w-full divide-y divide-slate-200 border border-slate-200 mb-12">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Parameter</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700">Nominal Flow</td>
                    <td className="px-6 py-4 text-slate-600">Up to 200 m³/h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700">Max Delivery Head</td>
                    <td className="px-6 py-4 text-slate-600">Up to 280 m</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700">Motor Power</td>
                    <td className="px-6 py-4 text-slate-600">Up to 110 kW</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-700">Standard Compliance</td>
                    <td className="px-6 py-4 text-slate-600">GB6245-2006 / ISO Standards</td>
                  </tr>
                </tbody>
              </table>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OWP7MQL8",
                  "Fire Fighting Pump",
                  "Vertical Centrifugal Pump",
                  "Emergency Water Supply",
                  "High Pressure Pump",
                  "Fire Protection System"
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
