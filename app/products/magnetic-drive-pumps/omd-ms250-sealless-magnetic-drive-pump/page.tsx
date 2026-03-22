import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMD-MS250 Sealless Magnetic Drive Pump',
  description: '100% leak-free fluorine-lined magnetic pump for hazardous liquids. Pure F46 material lining and sealless technology for maximum safety.',
};

export default function OMDMS250Page() {
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
          <Link href="/products/magnetic-drive-pumps" className="hover:text-blue-600 transition-colors">Magnetic Drive Pump</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate uppercase">OMD-MS250 SEALLESS MAGNETIC DRIVE PUMP</span>
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
                  <Link href="/products/water-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>Water Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 bg-blue-600 text-white font-medium cursor-pointer list-none">
                      <span>Magnetic Drive Pump</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-white px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products/magnetic-drive-pumps/omd-ms250-sealless-magnetic-drive-pump" className="block text-sm text-blue-600 font-medium">
                          OMD-MS250 Sealless Magnetic Drive Pump
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </aside>

          <div className="w-full flex-1">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/12pvb-1.jpg"
                    alt="OMD-MS250 Sealless Magnetic Drive Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMD-MS250 SEALLESS MAGNETIC DRIVE PUMP
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMD-MS250
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    Fundamental elimination of leakage: the OMD-MS250 uses magnetic coupling to transfer power, achieving comprehensive sealing. This fluorine-lined magnetic pump is specifically designed for the global processing industry of highly valuable and hazardous liquids.
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
                The OMD-MS250 series utilizes high-quality material selection to ensure 100% leak-free operation. The pump body shell is made of high-strength ductile iron, while all flow-through parts are molded from pure F46 material for maximum corrosion resistance.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 p-4 border border-slate-100 rounded bg-slate-50">
                  <span className="text-2xl font-bold text-blue-200">01</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Superior Materials</h4>
                    <p className="text-sm text-slate-600">Pure F46 lining, sintered silicon carbide shafts, and Neodymium-iron-boron magnets.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-slate-100 rounded bg-slate-50">
                  <span className="text-2xl font-bold text-blue-200">02</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Advanced Thermal Management</h4>
                    <p className="text-sm text-slate-600">Spiral grooves in the bearing sleeve for lubrication and eddy current heat dissipation.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border border-slate-100 rounded bg-slate-50">
                  <span className="text-2xl font-bold text-blue-200">03</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Rear-Pull-Out Maintenance</h4>
                    <p className="text-sm text-slate-600">Single-person internal maintenance without disassembling the pipeline system.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Chemical Compatibility</h3>
              <p className="text-sm text-slate-600 mb-6 italic">Handles strong corrosive media at concentrations up to 100°C:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {["Sulfuric Acid", "Hydrochloric Acid", "Nitric Acid", "Strong Alkalis", "Aqua Regia", "Hydrofluoric", "Strong Oxidants", "Reducing Agents"].map((chem, i) => (
                  <div key={i} className="px-3 py-2 bg-white border border-slate-200 rounded text-center text-xs font-bold text-slate-700">
                    {chem}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Structure Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250407/fluoroplastic-corrosion-resistant-magnetic-pump--2--126988.webp"
                    alt="OMD-MS250 Sealless Magnetic Drive Pump Structure"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMD-MS250",
                  "Magnetic Drive",
                  "Zero Leakage",
                  "Fluorine Lined",
                  "F46 Material",
                  "Corrosive Chemical Transfer",
                  "Sealless Technology"
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
