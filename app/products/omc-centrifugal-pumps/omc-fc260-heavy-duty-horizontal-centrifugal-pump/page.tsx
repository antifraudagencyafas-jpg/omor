import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMC-FC260 Centrifugal Pump',
  description: 'API OH1 standard horizontal centrifugal pump for complex chemical processes. Handles neutral or corrosive media and liquids with solid particles.',
};

export default function OMCFC260Page() {
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
          <Link href="/products/omc-centrifugal-pumps" className="hover:text-blue-600 transition-colors">OMC Centrifugal Pumps</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate uppercase">OMC-FC260 Heavy-Duty Horizontal Centrifugal Pump</span>
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
                      <span>OMC Centrifugal Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-white px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/omc-centrifugal-pumps" className="block text-sm text-slate-500 hover:text-blue-600">
                          OMC Overhung Type Centrifugal Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/omc-centrifugal-pumps" className="block text-sm text-slate-500 hover:text-blue-600">
                          OMC Between Bearing Type Centrifugal Pumps
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
                    src="/assets/uploads/4pvb-1.jpg"
                    alt="OMC-FC260 Heavy-Duty Horizontal Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMC-FC260 Heavy-Duty Horizontal Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMC-FC260
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    Manufactured in strict accordance with the OMC standard, the OMC-FC260 series is designed for complex chemical technological processes. These high-performance centrifugal pumps are suitable for low or high temperatures, neutral or corrosive media, and liquids containing solid particles.
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
                The OMC-FC260 features a horizontal single-stage single-suction design with a compact layout for easy maintenance. The back-pull-out design allows for internal service without disturbing suction or discharge piping.
              </p>

              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-8 border-l-2 border-slate-100 pl-6">
                <li><span className="font-bold text-slate-900">API OH1 Standard:</span> Designed and tested to reach international advanced industrial levels.</li>
                <li><span className="font-bold text-slate-900">Universal Components:</span> Standardized parts facilitate global maintenance and reduced downtime.</li>
                <li><span className="font-bold text-slate-900">Advanced Lubrication:</span> Constant-level oil cups control lubrication for long bearing life.</li>
                <li><span className="font-bold text-slate-900">Shaft Protection:</span> Integrated shaft sleeve prevents direct corrosion from media.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Ranges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600 mb-12">
                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> Petrochemical Distillation</div>
                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> Fine Chemical Synthesis</div>
                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> Sugar Refinery Extraction</div>
                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> Paper Machine Headbox Supply</div>
                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> Power Plant Cooling Systems</div>
                <div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500"></div> High-Purity Raw Material Transfer</div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Operating Conditions</h3>
              <div className="bg-slate-50 border border-slate-200 rounded p-6 mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                  <div><div className="text-slate-400 mb-1">Flow Rate</div><div className="font-bold">2 - 2000 m³/h</div></div>
                  <div><div className="text-slate-400 mb-1">Head</div><div className="font-bold">Up to 160 m</div></div>
                  <div><div className="text-slate-400 mb-1">Pressure</div><div className="font-bold">Up to 2.5 MPa</div></div>
                  <div><div className="text-slate-400 mb-1">Temperature</div><div className="font-bold">-40°C to 260°C</div></div>
                  <div><div className="text-slate-400 mb-1">Speed</div><div className="font-bold">2960 / 1480 r/min</div></div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Schematic Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image 
                    src="/assets/teffiko/api-oh1-horizontal-centrifugal-pumps-for-chemical-flow--2--404959.webp"
                    alt="OMC-FC260 Chemical Flow Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMC-FC260",
                  "Chemical Flow Pump",
                  "API OH1",
                  "Back-Pull-Out",
                  "Petrochemical Grade",
                  "Horizontal Centrifugal"
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
            <ProductInquiry />
          </div>
    </main>
  );
}
