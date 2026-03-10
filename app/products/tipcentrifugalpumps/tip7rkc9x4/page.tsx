import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function TIP7RKC9X4Page() {
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
          <span className="text-slate-900 font-medium truncate uppercase">TIP7RKC9X4 Horizontal Centrifugal Pumps</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-8">
            {/* Search Box */}
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

            {/* Products Accordion */}
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

          {/* Right Content Area - Product Details */}
          <div className="w-full flex-1">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image 
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/5pvb-1.jpg"
                    alt="TIP7RKC9X4 Horizontal Centrifugal Pumps"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  TIP7RKC9X4 Horizontal Centrifugal Pumps
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIP7RKC9X4
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The Omron Tech Pumps TIP series Horizontal Centrifugal Pumps for slurries containing impurities such as solid particles and fibers. It is specifically designed for transporting slurries containing impurities and is widely used in chemical, papermaking, mining, metallurgy, and power generation industries.
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
              <h2 className="text-xl font-bold text-slate-800 mb-4">Product Description</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                As a TIP Horizontal Centrifugal Pump, it has unique designs in key components. The impeller adopts a large-channel structure, with wide and smooth flow passages and carefully optimized blades, which greatly reduces the risk of slurry clogging and significantly improves the conveying efficiency. The pump body is made of wear-resistant and corrosion-resistant materials, with a compact interior and a reasonable flow passage design to ensure smooth feeding and discharging. The shaft seal is available in two forms: mechanical seal and packing seal. It has excellent sealing performance and effectively extends the service life of the equipment.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Fields</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">1. Chemical Industry:</span>
                    <span>Used for transporting various chemical raw material slurries, discharging materials from reaction kettles, and sludge slurries in wastewater treatment. The corrosion - resistant materials and non - clogging performance ensure the smooth progress of production.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">2. Papermaking Industry:</span>
                    <span>Mainly used in processes such as pulp transportation and waste paper treatment slurry transportation. The large-channel impeller and special structure design make it an ideal choice for the papermaking industry.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">3. Power Industry:</span>
                    <span>In the ash removal system of thermal power plants, it is used for transporting fly ash slurries, ensuring the stable operation of the ash removal system.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4">TIP Centrifugal Pump Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250321/api-oh1-horizontal-centrifugal-pumps-for-no-clogging-slurry--3--537469.webp"
                    alt="TIP Centrifugal Pump Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameter Table</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-lg mb-12">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">Pump model</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">r/min</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">Flow (m³/h)</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">Head (m)</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">Power (kW)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {[
                      ['50TIP6.3-12.5', '1450', '6.30', '12.5', '1.1'],
                      ['50TIP6.3-20', '1450', '6.30', '20.0', '2.2'],
                      ['65TIP12-12.5', '1450', '12.5', '12.5', '1.5'],
                      ['65TIP12-20', '1450', '12.5', '20.0', '2.2'],
                      ['80TIP25-12.5', '1450', '25.0', '12.5', '2.2'],
                      ['80TIP25-20', '1450', '25.0', '20.0', '4.0'],
                      ['100TIP50-12.5', '1450', '50.0', '12.5', '3.0'],
                      ['100TIP50-20', '1450', '50.0', '20.0', '5.5']
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-3 text-slate-700">{row[0]}</td>
                        <td className="px-4 py-3 text-slate-700">{row[1]}</td>
                        <td className="px-4 py-3 text-slate-700">{row[2]}</td>
                        <td className="px-4 py-3 text-slate-700">{row[3]}</td>
                        <td className="px-4 py-3 text-slate-700">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "TIP7RKC9X4",
                  "Horizontal Centrifugal Pumps",
                  "Chemical Flow",
                  "Non-Clogging Slurry Pump",
                  "Industrial Slurry Pump"
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
