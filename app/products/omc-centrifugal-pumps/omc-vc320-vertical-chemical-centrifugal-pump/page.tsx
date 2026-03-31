import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMC-VC 320 Vertical Chemical Centrifugal Pump',
  description: 'High-performance overhung type vertical centrifugal pump for chemical processing. Features high concentricity, low vibration, and energy-saving hydraulic model.',
};

export default function OMCVC320Page() {
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
          <span className="text-slate-900 font-medium truncate uppercase">OMC-VC 320 Chemical Vertical Centrifugal Pump</span>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/2pvb-2.jpg"
                    alt="OMC-VC 320 Chemical Vertical Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMC-VC 320 Chemical Vertical Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMC-VC 320
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The Omron Tech Pumps OMC series of Overhung Type Vertical Centrifugal Pumps is a high-performance product developed through repeated research and optimization. It has been specifically engineered to meet the unique structural requirements of chemical processing environments, ensuring high reliability and efficiency.
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
                The Omron Tech Pumps OMC Chemical Vertical Centrifugal Pumps feature exceptional design and manufacturing processes. The shaft is connected by a flange and positioned with a spigot, ensuring high concentricity, low vibration, and reliable operation. The hydraulic flow-through components adopt a high-efficiency energy-saving model, with efficiency 5-8% higher than ordinary pumps.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 list-none pl-0 mb-12 border-b border-slate-100 pb-8">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Chemical Industry:</span> Transporting corrosive fluids in production.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Refining Industry:</span> Crude oil and refined oil transportation.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Pharmaceutical:</span> Drug production fluid conveyance.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Metallurgical:</span> Flushing water and related liquids.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Power Plants:</span> Boiler make-up and cooling water.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Environmental:</span> Sewage and sludge treatment.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Working Conditions</h3>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-sm text-slate-700 list-none pl-0">
                  <li className="flex items-center"><span className="w-32 font-bold text-slate-900">Flow Rate:</span> 1.8 - 900 m³/h</li>
                  <li className="flex items-center"><span className="w-32 font-bold text-slate-900">Head:</span> 135 m</li>
                  <li className="flex items-center"><span className="w-32 font-bold text-slate-900">Suction P1W:</span> ≤ 0.3 MPa</li>
                  <li className="flex items-center"><span className="w-32 font-bold text-slate-900">Discharge P2W:</span> ≤ 1.6 MPa</li>
                  <li className="flex items-center"><span className="w-32 font-bold text-slate-900">Ambient Temp:</span> ≤ 40°C</li>
                  <li className="flex items-center"><span className="w-32 font-bold text-slate-900">Altitude:</span> ≤ 1000 m</li>
                  <li className="flex items-center"><span className="w-32 font-bold text-slate-900">Speed:</span> 2960 / 1480 rpm</li>
                </ul>
              </div>




              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMC-VC 320",
                  "Vertical Centrifugal",
                  "Overhung Type",
                  "Chemical Vertical Pump",
                  "Power Plant Pump",
                  "High Concentricity"
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
