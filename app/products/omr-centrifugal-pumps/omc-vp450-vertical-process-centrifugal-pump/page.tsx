import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OMC-VP450 Vertical Processing Pump',
  description: 'Compact vertical chemical process pump for limited space applications. Ideal for petrochemical, energy, and cryogenic engineering.',
};

export default function OMCVP450Page() {
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
          <Link href="/products/omr-centrifugal-pumps" className="hover:text-blue-600 transition-colors">OMR Centrifugal Pumps</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate uppercase">OMC-VP450 Vertical Process Centrifugal Pump</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-8">
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

            <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden">
              <h3 className="bg-slate-100 text-slate-800 font-bold text-lg px-6 py-4 border-b border-slate-200">
                Products Catalog
              </h3>
              <ul className="divide-y divide-slate-100">
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 bg-blue-600 text-white font-medium cursor-pointer list-none">
                      <span>OMR Centrifugal Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-white px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/omr-centrifugal-pumps" className="block text-sm text-slate-500 hover:text-blue-600">
                          OMR Overhung Type Centrifugal Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/omr-centrifugal-pumps" className="block text-sm text-slate-500 hover:text-blue-600">
                          OMR Between Bearing Type Centrifugal Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/products/screw-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
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
                  <Link href="/products/magnetic-drive-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Magnetic Drive Pump</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          <div className="w-full flex-1">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/3pvb-1.jpg"
                    alt="OMC-VP450 Vertical Process Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMC-VP450 Vertical Process Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMC-VP450
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    TIP chemical vertical process pumps are specifically designed for vertical installation scenarios with limited space and high-reliability requirements. They are applicable in fields such as petrochemical, energy, and cryogenic engineering, and are suitable for transporting clean or slightly contaminated media.
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
              <h3 className="text-xl font-bold text-slate-800 mb-4">Product Description</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                The Omron Tech Pumps OMR series cantilever vertical centrifugal pumps feature a compact vertical layout where the motor is directly connected to the pump body, reducing floor area by 60% compared to horizontal pumps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Impeller Design</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Single-suction radial closed structure with replaceable wear rings for cost-effective maintenance.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Pump Body</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Radially split with restricted gasket sealing. Double-volute design for bodies over 80mm.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Bearings</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Grease lubricated with easy-access filling cups on the bearing cover.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Shaft Seal</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Flexible selection of packing seals or mechanical seals based on conditions.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">1. Cryogenic Factories:</span> Transporting liquid ammonia and nitrogen with high sealing performance.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">2. Coal Mining:</span> Handling corrosive mine water and coal washing processes.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">3. Power Plants:</span> Boiler water make-up and desulfurization/denitration systems.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">4. Marine Industry:</span> Offshore platforms and seawater desalination plants.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Working Conditions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-slate-200">
                  <tbody className="text-sm text-slate-700">
                    <tr>
                      <td className="border border-slate-200 bg-slate-50 px-4 py-2 font-bold w-48">Flow Rate</td>
                      <td className="border border-slate-200 px-4 py-2">2 - 2600 m³/h</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 bg-slate-50 px-4 py-2 font-bold">Head</td>
                      <td className="border border-slate-200 px-4 py-2">0 - 250 m</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 bg-slate-50 px-4 py-2 font-bold">Max Pressure</td>
                      <td className="border border-slate-200 px-4 py-2">≤ 2.5 MPa</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 bg-slate-50 px-4 py-2 font-bold">Temperature</td>
                      <td className="border border-slate-200 px-4 py-2">-20°C to 250°C</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 bg-slate-50 px-4 py-2 font-bold">Max Speed</td>
                      <td className="border border-slate-200 px-4 py-2">2900 rpm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMC-VP450",
                  "Vertical Processing Pump",
                  "Space-Saving Design",
                  "Cryogenic Engineering",
                  "Chemical Fiber Industry",
                  "Compact Pump"
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
