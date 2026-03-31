import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMC-SR750 Centrifugal Slurry Pump',
  description: 'High-efficiency anti-clogging centrifugal pump for transporting slurries containing impurities. Ideal for mining, chemical, and power industries.',
};

export default function OMCSR750Page() {
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
          <span className="text-slate-900 font-medium truncate uppercase">OMC-SR750 Horizontal Centrifugal Pump</span>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/5pvb-1.jpg"
                    alt="OMC-SR750 Horizontal Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMC-SR750 Horizontal Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMC-SR750
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    Specifically designed for transporting slurries containing impurities such as solid particles and fibers, the OMC-SR750 series is widely used in chemical, papermaking, mining, and power industries. It features high efficiency, minimal leakage, and exceptional anti-clogging performance.
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
                The impeller adopts a large-channel structure with wide, smooth flow passages and optimized blades, greatly reducing clogging risks. The pump body is constructed from wear-resistant and corrosion-resistant materials. The shaft seal is available in both mechanical and packing forms to extend equipment service life.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Model Significance & Operating Conditions</h3>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-8">
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-2xl font-bold text-blue-600 tracking-widest">
                  <span className="border-b-2 border-blue-600 pb-1">100</span>
                  <span className="border-b-2 border-blue-600 pb-1 uppercase">OMC</span>
                  <span className="border-b-2 border-blue-600 pb-1">50</span>
                  <span className="text-slate-400">-</span>
                  <span className="border-b-2 border-blue-600 pb-1">20</span>
                  <span className="border-b-2 border-blue-600 pb-1 uppercase">A</span>
                  <span className="border-b-2 border-blue-600 pb-1 uppercase">B</span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-700 list-none pl-0">
                  <li className="flex items-start"><span className="w-12 flex-shrink-0 font-bold text-blue-600">100</span> <span>Pump inlet diameter</span></li>
                  <li className="flex items-start"><span className="w-12 flex-shrink-0 font-bold text-blue-600">OMC</span> <span>Non-clogging slurry pump</span></li>
                  <li className="flex items-start"><span className="w-12 flex-shrink-0 font-bold text-blue-600">50</span> <span>Pump flow</span></li>
                  <li className="flex items-start"><span className="w-12 flex-shrink-0 font-bold text-blue-600">20</span> <span>Pump head</span></li>
                  <li className="flex items-start"><span className="w-12 flex-shrink-0 font-bold text-blue-600">A</span> <span>The impeller has been cut for the first time</span></li>
                  <li className="flex items-start"><span className="w-12 flex-shrink-0 font-bold text-blue-600">B</span> <span>The impeller has been cut for the second time</span></li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">Operating Conditions</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-700 list-none pl-0">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> <strong>Flow rate:</strong> 6-800 m³/h</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> <strong>Head:</strong> 12-60 m</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> <strong>Temperature:</strong> Below 110°C</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full"></span> <strong>Concentration:</strong> Below 6%</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Structural Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image
                    src="https://www.teffiko.com/upload/8025/image/20250321/api-oh1-horizontal-centrifugal-pumps-for-no-clogging-slurry--3--537469.webp"
                    alt="Structural Diagram"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6 mt-12">Performance Parameter Table (1450 r/min)</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-lg mb-12">
                <table className="min-w-full divide-y divide-slate-200 text-xs text-center">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-3 py-3 text-left font-bold text-slate-900 border-r">Pump model</th>
                      <th colSpan={3} className="px-3 py-2 font-bold text-slate-900 border-b border-r">Flow (Q) m³/h</th>
                      <th colSpan={3} className="px-3 py-2 font-bold text-slate-900 border-b border-r">Head (H) m</th>
                      <th colSpan={3} className="px-3 py-2 font-bold text-slate-900 border-b">Power (kW)</th>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <th className="px-3 py-2 border-r">SG/Density</th>
                      <th className="px-2 py-2 border-r">1.0</th>
                      <th className="px-2 py-2 border-r">1.35</th>
                      <th className="px-2 py-2 border-r">1.85</th>
                      <th className="px-2 py-2 border-r">1.0</th>
                      <th className="px-2 py-2 border-r">1.35</th>
                      <th className="px-2 py-2 border-r">1.85</th>
                      <th className="px-2 py-2 border-r">1.0</th>
                      <th className="px-2 py-2 border-r">1.35</th>
                      <th className="px-2 py-2">1.85</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {[
                      ['50OMC6.3-12.5', '3.75', '6.30', '7.50', '12.9', '12.5', '12.0', '1.1', '1.1', '1.5'],
                      ['50OMC6.3-20', '3.75', '6.30', '7.50', '20.5', '20.0', '19.6', '2.2', '2.2', '3.0'],
                      ['65OMC12-12.5', '7.50', '12.5', '15.0', '13.3', '12.5', '11.9', '1.5', '2.2', '2.2'],
                      ['65OMC12-20', '7.50', '12.5', '15.0', '20.3', '20.0', '19.6', '2.2', '3', '4'],
                      ['80OMC25-12.5', '15.0', '25.0', '30.0', '13.5', '12.5', '11.5', '2.2', '3', '4'],
                      ['80OMC25-20', '15.0', '25.0', '30.0', '21.0', '20.0', '19.0', '4', '5.5', '7.5'],
                      ['100OMC50-20', '30.0', '50.0', '60.0', '22.0', '20.0', '18.5', '5.5', '7.5', '11']
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-3 py-2 text-left text-slate-700 border-r font-medium">{row[0]}</td>
                        {row.slice(1).map((cell, cIdx) => (
                          <td key={cIdx} className="px-2 py-2 text-slate-600 border-r last:border-r-0">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMC-SR750",
                  "Slurry Pump",
                  "Anti-Clogging",
                  "Large-Channel Impeller",
                  "Mining Industry",
                  "Industrial Waste Management"
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
