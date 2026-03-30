import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMT-GP200 General Purpose Single Screw Pump',
  description: 'Powerful industrial single screw pump for high-viscosity sludge and corrosive chemical media. Stable flow rates and low energy consumption.',
};

export default function OMTGP200Page() {
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
          <Link href="/products/screw-pumps" className="hover:text-blue-600 transition-colors">Screw Pumps</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate uppercase">OMT-GP200 GENERAL PURPOSE SINGLE SCREW PUMP</span>
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
                  <Link href="/products/omc-centrifugal-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>OMC Centrifugal Pumps</span>
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
                        <Link href="/products/screw-pumps/omt-vs150-viscous-handling-single-screw-pump" className="block text-sm text-slate-500 hover:text-blue-600">
                          OMT-VS150 Viscous Handling Single Screw Pump
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/screw-pumps/omt-gp200-general-purpose-single-screw-pump" className="block text-sm text-blue-600 font-medium">
                          OMT-GP200 General Purpose Single Screw Pump
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
                    src="/assets/uploads/10pvb-1.jpg"
                    alt="OMT-GP200 General Purpose Single Screw Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMT-GP200 GENERAL PURPOSE SINGLE SCREW PUMP
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMT-GP200
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    General Type Single Screw Pumps are powerful industrial transportation tools. Their unique structure enables application in diverse working conditions, from high-viscosity sludge to corrosive chemical media. These pumps offer stable flow rates, low energy consumption, and flexible adjustment.
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
                The Omron Tech Pumps OMT-GP series is engineered for stable transportation without periodic pressure fluctuations. It is ideal for media ranging from 20,000 to 200,000 MPa·s and can handle solid content up to 60% with particle sizes up to 16mm.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 list-none pl-0 mb-12">
                <li className="bg-slate-50 p-3 rounded border border-slate-100"><span className="text-blue-600 font-bold">● High Viscosity:</span> Up to 200,000 MPa·s</li>
                <li className="bg-slate-50 p-3 rounded border border-slate-100"><span className="text-blue-600 font-bold">● Solid Content:</span> Generally 40%, up to 60% powder</li>
                <li className="bg-slate-50 p-3 rounded border border-slate-100"><span className="text-blue-600 font-bold">● Low Agitation:</span> Preserves inherent media structure</li>
                <li className="bg-slate-50 p-3 rounded border border-slate-100"><span className="text-blue-600 font-bold">● Low Noise:</span> Meets high industrial silence standards</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Structure Diagrams</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="border border-slate-200 rounded-lg p-4 bg-white flex flex-col items-center">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/assets/teffiko/----4-04-979280.jpg"
                      alt="OMT Single-screw Pump Structure 1"
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Standard Transmission Structure</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-4 bg-white flex flex-col items-center">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/assets/teffiko/----4-05-4444.jpg"
                      alt="OMT Single-screw Pump Structure 2"
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Gearbox Connection Structure</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6 mt-12">Performance Parameter Tables</h3>

              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-3 text-sm">Selection of OMT-GP-type pump with 6-pole motor (Standard)</h4>
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="min-w-full divide-y divide-slate-200 text-xs">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-3 py-3 text-left font-bold text-slate-900 border-r">Pump Model</th>
                        <th className="px-3 py-3 text-center font-bold text-slate-900 border-r">Flow (m³/h)</th>
                        <th className="px-3 py-3 text-center font-bold text-slate-900 border-r">Pressure (MPa)</th>
                        <th className="px-3 py-3 text-center font-bold text-slate-900 border-r">Speed (rpm)</th>
                        <th className="px-3 py-3 text-center font-bold text-slate-900 border-r">Power (kW)</th>
                        <th className="px-3 py-3 text-left font-bold text-slate-900">Function</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      {[
                        ['OMT-GP200-V15', '0.1', '0.6', '960', '0.55', 'transport PAM'],
                        ['OMT-GP200-V20', '0.4', '0.6', '960', '0.55', 'transport PAM'],
                        ['OMT-GP200-V35', '2.0', '0.6', '960', '1.5', 'Transport sludge'],
                        ['OMT-GP200-V40', '5.0', '0.6', '960', '2.2', 'Transport sludge'],
                        ['OMT-GP200-V50', '8.0', '0.6', '960', '3.0', 'Transport sludge'],
                        ['OMT-GP200-V60', '30.0', '0.6', '960', '11', 'Transport sludge']
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td className="px-3 py-2 text-slate-700 border-r font-medium">{row[0]}</td>
                          <td className="px-3 py-2 text-center text-slate-700 border-r">{row[1]}</td>
                          <td className="px-3 py-2 text-center text-slate-700 border-r">{row[2]}</td>
                          <td className="px-3 py-2 text-center text-slate-700 border-r">{row[3]}</td>
                          <td className="px-3 py-2 text-center text-slate-700 border-r">{row[4]}</td>
                          <td className="px-3 py-2 text-slate-600 italic">{row[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-3 text-sm">Selection of OMT-GP-type with 8-pole motor (High-Voltage Stage 2)</h4>
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="min-w-full divide-y divide-slate-200 text-xs">
                    <thead className="bg-slate-50 text-blue-600">
                      <tr>
                        <th className="px-3 py-3 text-left font-bold border-r">Pump Model</th>
                        <th className="px-3 py-3 text-center font-bold border-r">Flow (m³/h)</th>
                        <th className="px-3 py-3 text-center font-bold border-r">Pressure (MPa)</th>
                        <th className="px-3 py-3 text-center font-bold border-r">Power (kW)</th>
                        <th className="px-3 py-3 text-left font-bold">Application</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      {[
                        ['OMT-GP25-2-V', '1.5', '1.2', '1.5', 'High-Voltage Sludge'],
                        ['OMT-GP30-2-V', '4.0', '1.2', '2.2', 'High-Voltage Sludge'],
                        ['OMT-GP40-2-V', '9.0', '1.2', '4.0', 'High-Voltage Sludge'],
                        ['OMT-GP60-2-V', '25.0', '1.2', '11', 'High-Voltage Sludge'],
                        ['OMT-GP70-2-V', '40.0', '1.2', '18.5', 'High-Voltage Sludge']
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td className="px-3 py-2 text-slate-700 border-r font-medium">{row[0]}</td>
                          <td className="px-3 py-2 text-center text-slate-700 border-r">{row[1]}</td>
                          <td className="px-3 py-2 text-center text-slate-700 border-r">{row[2]}</td>
                          <td className="px-3 py-2 text-center text-slate-700 border-r">{row[3]}</td>
                          <td className="px-3 py-2 text-slate-600 italic">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMT-GP200",
                  "Single Screw Pump",
                  "High Viscosity",
                  "Sludge Transport",
                  "PAM Delivery",
                  "Environmental Engineering",
                  "8-Pole Motor"
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
