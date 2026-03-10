import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function TIP8C2XKWRPage() {
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
          <span className="text-slate-900 font-medium truncate uppercase">TIP8C2XKWR Horizontal Centrifugal Pump</span>
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

          <div className="w-full flex-1">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/8pvb.jpg"
                    alt="TIP8C2XKWR Horizontal Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  TIP8C2XKWR Horizontal Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIP8C2XKWR
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The TIP8C2XKWR series horizontal single-stage single-suction centrifugal pumps are high-performance tools for chemical synthesis, refining, and power generation. They strictly follow TIP standards to provide efficient transportation for both clean and particle-laden hazardous media.
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
                With a robust foot-supported structure and a high-efficiency closed-type impeller, the TIP8C2XKWR ensures high head and stable operation across wide application ranges. The shaft seal is configurable for various hazardous environments, including packing, single/double mechanical, or tandem seals.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Core Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Back-Pull-Out Design</h4>
                  <p className="text-sm text-slate-600">Perform maintenance without adjusting the pump's inlet or outlet piping.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Universal Components</h4>
                  <p className="text-sm text-slate-600">Standardized design across the TIP series reduces inventory costs and downtime.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Application Categories</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-12 border-b border-slate-100 pb-8">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Petrochemical:</span> Crude oil, refined products, and various additives.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Fine Chemicals:</span> Pharmaceuticals, pesticides, and fragrances.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Sugar Industry:</span> Extraction, purification, and production water cycles.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Power Generation:</span> Condenser circulating water and cooling systems.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Technical Operating Conditions</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-12">
                <div className="p-3 border border-slate-100 rounded bg-slate-50/50">
                  <div className="text-xs text-slate-400">Flow</div>
                  <div className="text-sm font-bold">2000 m³/h</div>
                </div>
                <div className="p-3 border border-slate-100 rounded bg-slate-50/50">
                  <div className="text-xs text-slate-400">Head</div>
                  <div className="text-sm font-bold">160 m</div>
                </div>
                <div className="p-3 border border-slate-100 rounded bg-slate-50/50">
                  <div className="text-xs text-slate-400">Pressure</div>
                  <div className="text-sm font-bold">2.5 MPa</div>
                </div>
                <div className="p-3 border border-slate-100 rounded bg-slate-50/50">
                  <div className="text-xs text-slate-400">Temp</div>
                  <div className="text-sm font-bold">260°C</div>
                </div>
                <div className="p-3 border border-slate-100 rounded bg-slate-50/50">
                  <div className="text-xs text-slate-400">RPM</div>
                  <div className="text-sm font-bold">2960</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Schematic Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image
                    src="https://www.teffiko.com/upload/8025/image/20250321/api-oh1-horizontal-centrifugal-pumps-for-chemical-flow--2--404959.webp"
                    alt="TIP8C2XKWR Schematic Diagram"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIP8C2XKWR",
                  "API OH1 Standard",
                  "Hazardous Media",
                  "Chemical Process",
                  "High Head Pump",
                  "Industrial Reliability"
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
