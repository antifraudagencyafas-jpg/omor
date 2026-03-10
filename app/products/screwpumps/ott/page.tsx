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
                        <Link href="/products/screwpumps/ott" className="block text-sm text-blue-600 font-medium">
                          OTT Single Screw Pump
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/screwpumps/gpt7mql8" className="block text-sm text-slate-500 hover:text-blue-600">
                          GPT Single Screw Pump
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

          <div className="w-full flex-1">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/9pvb-1.jpg"
                    alt="OTT Single Screw Pumps"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OTT SINGLE SCREW PUMP
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OTTA9X2K
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The OTT series is engineered for the harshest industrial conditions. Built with top-tier wear and corrosion-resistant materials, these single screw pumps deliver stable flow and quiet operation in complex environments.
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
                Omron Tech Pumps maintains strict quality management from raw material procurement through advanced assembly. Every OTT pump is tested under simulated extreme conditions before leaving the factory. The Open Top Type design is particularly effective for high-viscosity media that require easy access or feeding.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Core Advantages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 mb-12">
                <div className="flex items-start gap-3 p-4 border border-slate-100 rounded bg-slate-50">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold">Stable Flow:</span>
                    <p className="text-slate-500">Unique screw meshing design ensures non-pulsating continuous delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 border border-slate-100 rounded bg-slate-50">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold">Durability:</span>
                    <p className="text-slate-500">Constructed with high-strength wear-resistant materials for abrasive media.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 border border-slate-100 rounded bg-slate-50">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold">Quiet Operation:</span>
                    <p className="text-slate-500">Optimized internal geometry reduces vibration and mechanical noise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 border border-slate-100 rounded bg-slate-50">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold">Flexible Control:</span>
                    <p className="text-slate-500">Easily adjustable flow rates to match specific process requirements.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Structure Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image
                    src="https://www.teffiko.com/upload/8025/image/20250411/----4-04-979280.jpg"
                    alt="OTT Single Screw Pump Structure"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OTT Single Screw",
                  "Open Top Type",
                  "Harsh Conditions",
                  "Wear Resistant",
                  "Non-Pulsating Flow",
                  "Abrasive Media"
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
