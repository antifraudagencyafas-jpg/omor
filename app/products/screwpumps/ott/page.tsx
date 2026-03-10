import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function OTTPage() {
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
          <Link href="/products/screwpumps" className="hover:text-blue-600 transition-colors">Screw Pumps</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate uppercase">OTT Single Screw Pump</span>
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
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 bg-blue-600 text-white font-medium cursor-pointer list-none">
                      <span>Screw Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-white px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/screwpumps" className="block text-sm text-blue-600 font-medium">
                          Single Screw Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/screwpumps" className="block text-sm text-slate-500 hover:text-blue-600 transition-colors">
                          Twin Screw Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/screwpumps" className="block text-sm text-slate-500 hover:text-blue-600 transition-colors">
                          Three Screw Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/3-1.jpg"
                    alt="OTT Single Screw Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OTT Single Screw Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OTT Series
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The OTT Single Screw Pump is a positive displacement pump that uses one or more screws to move fluids or solids along the screw axis. It is designed for reliability in transporting various media, especially high-viscosity and abrasive materials.
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
              <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Product Description</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Omron Tech Pumps series Single Screw Pumps can transport various media, including low-viscosity to high-viscosity media, neutral or corrosive media, and media containing solid particles. It is particularly suitable for handling sensitive media that require gentle, low-pulsation pumping.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Design Characteristics</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-8">
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Gentle Pumping:</span>
                    <span>Low internal velocities and minimal shear force during transportation.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Self-Priming:</span>
                    <span>Excellent self-priming capability even with gas-liquid mixed media.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Reversible:</span>
                    <span>The pumping direction can be changed by reversing the rotation direction.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Environmental protection (sludge/sewage)</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Food and beverage industry</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Chemical and pharmaceutical industries</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Paper and pulp industry</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Petroleum industry (crude oil/slop oil)</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Construction industry</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Technical Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/9]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250320/single-screw-pumps--2--789880.webp"
                    alt="OTT Single Screw Pump Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Performance Data</h3>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-slate-200 text-sm">
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-700">Flow Rate</td>
                      <td className="px-6 py-4 text-slate-600">Up to 400 m³/h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-700">Pressure</td>
                      <td className="px-6 py-4 text-slate-600">Up to 4.8 MPa</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-700">Temperature</td>
                      <td className="px-6 py-4 text-slate-600">-20℃ to +200℃</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-700">Viscosity</td>
                      <td className="px-6 py-4 text-slate-600">Up to 1,000,000 mm²/s</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Selection Chart</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image
                    src="https://www.teffiko.com/upload/8025/image/20250320/single-screw-pumps--3--842345.webp"
                    alt="OTT Performance Selection Chart"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OTT",
                  "Single Screw Pump",
                  "Positive Displacement Pump",
                  "Sludge Pump",
                  "High Viscosity Pump"
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
