import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMC-HM650 High-Mount Horizontal Centrifugal Pump',
  description: 'High-performance OMC-HM650 horizontal centrifugal pump with excellent craftsmanship, minimal vibration, and strong stability for industrial use.',
};

export default function OMCHM650Page() {
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
          <span className="text-slate-900 font-medium truncate uppercase">OMC-HM650 HIGH-MOUNT HORIZONTAL CENTRIFUGAL PUMP</span>
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
                    src="/assets/uploads/1pvb-2.jpg"
                    alt="OMC-HM650 HIGH-MOUNT HORIZONTAL CENTRIFUGAL PUMP"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMC-HM650 HIGH-MOUNT HORIZONTAL CENTRIFUGAL PUMP
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMC-HM650
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The Omron Tech Pumps OMC series of High Mount horizontal centrifugal pumps is a high-performance product developed by our company. Based on traditional High Mount Horizontal Centrifugal pumps, we have carefully considered the unique structural requirements during operation, integrated advanced structural concepts from home and abroad, and created it through extensive research and optimization.
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
              <p className="text-slate-700 leading-relaxed mb-8">
                The Omron Tech Pumps OMC series features excellent craftsmanship. The horizontal structure gives it a low center of gravity and uniform stress distribution. The High mount horizontal centrifugal pump shaft is connected and positioned precisely, resulting in minimal vibration, strong stability during operation, and convenient maintenance. Its hydraulic flow-through components adopt an advanced model, with an efficiency 5-8% higher than that of ordinary pumps, which can reduce enterprise costs.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Schematic Diagram</h3>
              <p className="text-slate-700 mb-6 uppercase text-sm font-semibold">Api Oh4 Overhung Type Horizontal Centrifugal Pump</p>

              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image
                    src="/assets/teffiko/api-oh4-overhung-type-horizontal-centrifugal-pumps--2--940998.webp"
                    alt="OMC-HM650 Schematic Diagram"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <p className="text-slate-700 mb-4 font-medium italic">
                Highly suitable for transporting chemically corrosive liquids with viscosity similar to water.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Chemical Industry:</span> Transporting various corrosive fluids during chemical production.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Food Industry:</span> Transporting fluid raw materials during food processing.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Brewing Industry:</span> Raw materials and fermentation broth transport.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Refining Industry:</span> Crude oil and refined oil products transportation.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Pharmaceutical:</span> Liquids required for drug production.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Paper-making:</span> Pulp, white water, and chemical additives.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Metallurgical:</span> Metallurgical liquids and flushing water.</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Power Industry:</span> Boiler make-up and cooling circulating water.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameter Diagram</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {['p1c-1', 'p2c-1', 'p3c-1', 'cent1'].map((img, i) => (
                  <div key={i} className="border border-slate-200 rounded-lg p-2 bg-white">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={`/assets/uploads/${img}.jpg`}
                        alt={`Performance Parameter ${i+1}`}
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
                  "OMC-HM650",
                  "High Mount Centrifugal",
                  "Horizontal Pump",
                  "Chemical Industry",
                  "Corrosion Resistant",
                  "Precision Casting"
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
