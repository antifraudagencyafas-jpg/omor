import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TIPQ9L4A7M Centrifugal Pump',
  description: 'API standard overhung type horizontal centrifugal pump with integrated temperature sensor for real-time monitoring of corrosive media.',
};

export default function TIPQ9L4A7MPage() {
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
          <span className="text-slate-900 font-medium truncate uppercase">TIPQ9L4A7M Horizontal Centrifugal Pump with Temperature Sensor</span>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2026/01/smmm.jpg"
                    alt="TIPQ9L4A7M Horizontal Centrifugal Pump with Temperature Sensor"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  TIPQ9L4A7M Horizontal Centrifugal Pump with Temperature Sensor
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIPQ9L4A7M
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    Redefining industry benchmarks for reliability and efficiency, the TIPQ9L4A7M overhung type horizontal centrifugal pump series is engineered for strict compliance with international standards. It is specifically designed for high-stakes scenarios in the petrochemical industry, energy extraction, and the transportation of highly corrosive media.
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
                This pump features a single-stage, single-suction, radial partial volute structure. It is equipped with an integrated Temperature Sensor for real-time monitoring of fluid conditions. It can transport inorganic and organic acids like nitric, sulfuric, and phosphoric acid across a wide range of temperatures.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Industrial Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-700 mb-12">
                <div>
                  <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Petrochemical & Refining</h4>
                  <p>Crude oil distillation, catalytic cracking, hydro-refining, and intermediate product transfer (ethylene, propylene, benzene, xylene).</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Coal Processing</h4>
                  <p>Coal-to-liquid, coal-to-gas, and coal-to-methanol processes, involving coal slurry and syngas conveyance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Power Industry</h4>
                  <p>Boiler make-up water, condensate systems, and desulfurization/denigration process slurries.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2">Pulp & Paper</h4>
                  <p>Raw material conveyance from storage to workshops and qualified pulp delivery to the headbox.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Operating Conditions</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 text-slate-700 list-none pl-0 mb-12">
                <li><span className="font-bold">Flow Rate:</span> 3 - 2600 m³/h</li>
                <li><span className="font-bold">Head:</span> 4 - 250 m</li>
                <li><span className="font-bold">Pressure:</span> Up to 5.0 MPa</li>
                <li><span className="font-bold">Temperature:</span> -20°C to 450°C</li>
                <li><span className="font-bold">Speed:</span> 2950 / 1450 rpm</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Schematic Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image
                    src="https://www.teffiko.com/upload/8025/image/20250321/api-oh2-overhung-type-horizontal-centrifugal-pumps--2--698125.webp"
                    alt="TIPQ9L4A7M Structure Diagram"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameters</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border border-slate-200 rounded p-2 bg-white">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={`https://omrontechpumps.com/sitepad-data/uploads/2026/01/ys${i}.jpg`}
                        alt={`Parameter Chart ${i}`}
                        fill
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIPQ9L4A7M",
                  "Temperature Sensor",
                  "Monitoring Integrated",
                  "API Standard",
                  "High Temperature Pump",
                  "Chemical Processing"
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
