import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMW-VS800 Multistage Vertical Centrifugal Pump',
  description: 'High-efficiency vertical multistage stainless steel centrifugal pump for water supply, industrial pressurization, and water treatment.',
};

export default function OMW35HFRPage() {
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
          <span className="text-slate-900 font-medium truncate uppercase">OMW-VS800 Multistage Vertical Centrifugal Pump</span>
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
                  <Link href="/products/omr-centrifugal-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>OMR Centrifugal Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/products/screw-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
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
                        <Link href="/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump" className="block text-sm text-blue-600 font-medium">
                          OMW-VS800 Multistage Vertical Centrifugal Pump
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/water-pumps/omw-ff900-multistage-fire-fighting-centrifugal-pump" className="block text-sm text-slate-500 hover:text-blue-600">
                          OMW-FF900 Multistage Fire-Fighting Centrifugal Pump
                        </Link>
                      </li>
                    </ul>
                  </details>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/11pvb-1.jpg"
                    alt="OMW-VS800 Multistage Vertical Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMW-VS800 MULTISTAGE VERTICAL CENTRIFUGAL PUMP
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMW-VS800
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The OMW vertical multistage stainless steel centrifugal pump is a multi-functional product designed for high efficiency and energy conservation. This non-self-priming pump is compatible with standard motors and features a space-saving vertical structure where inlet and outlet are in a straight line at the bottom.
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
                Suitable for transporting a variety of media, from tap water to slightly corrosive industrial liquids. It is widely applied in water supply, industrial pressurization, irrigation, and water treatment sectors. The detachable structure simplifies maintenance and part replacement.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Specific Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-600 mb-12">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Water plant filtration and zoned supply</li>
                  <li>High-rise building water pressurization</li>
                  <li>Industrial process water & cleaning systems</li>
                  <li>Fire-fighting and high-pressure flushing</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Boiler feed water & condensate systems</li>
                  <li>Reverse osmosis and distillation systems</li>
                  <li>Acid and alkali chemical transportation</li>
                  <li>Farmland, sprinkler, and drip irrigation</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Operating Conditions</h3>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
                <ul className="space-y-3 text-slate-700 list-none pl-0 text-sm">
                  <li><strong>Liquid Type:</strong> Thin, clean, non-flammable, non-explosive, free of fibers.</li>
                  <li><strong>Normal Temp:</strong> -15°C to +70°C</li>
                  <li><strong>Hot Water Type:</strong> -15°C to +120°C</li>
                  <li><strong>Ambient Temp:</strong> Up to +40°C</li>
                  <li><strong>Altitude:</strong> Up to 1000m</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Minimum Inlet Pressure (NPSH)</h3>
              <div className="border border-slate-200 rounded-lg p-6 bg-white mb-12 shadow-sm">
                <p className="text-sm text-slate-600 mb-4">To avoid cavitation, ensure minimum pressure using the formula:</p>
                <div className="bg-slate-900 text-blue-400 p-4 font-mono text-center rounded mb-4">
                  H = Pb × 10.2 - NPSH - Hf - Hv - Hs
                </div>
                <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-400 uppercase tracking-wider">
                  <div>Pb: Atmospheric pressure [bar]</div>
                  <div>NPSH: Net Positive Suction Head [m]</div>
                  <div>Hf: Inlet pipeline loss [m]</div>
                  <div>Hv: Vapor pressure [m]</div>
                  <div>Hs: Safety margin (min 0.5m)</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Structure Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250407/vertical-multistage-stainless-steel-centrifugal-pump--2--770423.webp"
                    alt="OMW35HFR Vertical Multistage Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMW35HFR",
                  "Vertical Multistage",
                  "Stainless Steel",
                  "Water Pressurization",
                  "Reverse Osmosis",
                  "High Temperature Water"
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
