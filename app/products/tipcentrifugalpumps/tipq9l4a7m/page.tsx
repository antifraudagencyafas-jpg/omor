import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

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
          <span className="text-slate-900 font-medium truncate uppercase">TIPQ9L4A7M Horizontal Centrifugal Pumps With Temperature Sensor</span>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2026/01/smmm.jpg"
                    alt="TIPQ9L4A7M Horizontal Centrifugal Pumps With Temperature Sensor"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  TIPQ9L4A7M Horizontal Centrifugal Pumps With Temperature Sensor
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: TIPQ9L4A7M
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    As a global leader in industrial fluid technology, Omron Tech Pumps has newly launched the TIPQ9L4A7M overhung type horizontal centrifugal pumps series. This series is centered around strict compliance with the international standard of the American Petroleum Institute. It is specifically designed for scenarios in petrochemical industry, energy extraction, and transportation of highly corrosive media, redefining the industry benchmark for reliability and efficiency.
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
                The horizontal centrifugal pump with Temperature Sensor is a new series of products designed and developed by Omron Tech Pumps. It features a horizontal, single - stage, single - suction, and radial partial volute structure. It can transport various liquids with high or low temperatures, neutral or corrosive properties, such as inorganic and organic acids like nitric acid, sulfuric acid, hydrochloric acid, and phosphoric acid. It is mainly used in the refining industry, petrochemical industry, coal processing industry, paper and pulp industry, sugar industry, heating and water supply industry, etc.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">TIP Diagram Centrifugal Pump</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image
                    src="https://www.teffiko.com/upload/8025/image/20250321/api-oh2-overhung-type-horizontal-centrifugal-pumps--2--698125.webp"
                    alt="Api Oh2 Schematic"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Fields</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-12">
                <li><span className="font-bold text-slate-800 block">● Petrochemical Industry</span></li>
                <li className="pl-6">
                  <span className="font-bold text-slate-800">Refineries:</span> In processes like crude oil distillation, catalytic cracking, and hydro - refining, chemical process pumps are utilized to transfer crude oil, intermediate products, refined oil, and various chemical agents.
                </li>
                <li className="pl-6">
                  <span className="font-bold text-slate-800">Petrochemical Industry:</span> During the production of basic chemical raw materials such as ethylene and propylene, as well as in polymer production and the synthesis of fine - chemical products, these pumps are employed to convey various reaction raw materials, intermediates, and products.
                </li>
                <li className="pl-6">
                  <span className="font-bold text-slate-800">Coal Processing Industry:</span> In processes including coal - to - liquid, coal - to - gas, and coal - to - methanol, these pumps can transport media such as coal slurry, syngas, and methanol.
                </li>

                <li><span className="font-bold text-slate-800 block">● Power Industry</span></li>
                <li className="pl-6">
                  <span className="font-bold text-slate-800">Power Plants:</span> Process pumps are used to transport boiler make - up water, condensate water, and circulating cooling water. They can also be used to convey acid - base solutions and slurries in the desulfurization and denigration processes.
                </li>

                <li><span className="font-bold text-slate-800 block">● Paper and Pulp Industry</span></li>
                <li className="pl-6">
                  <span className="font-bold text-slate-800">Raw Material Conveyance:</span> Pumps are used to transfer the pulp, wood chips, etc., ensuring a stable supply of raw materials.
                </li>
                <li className="pl-6">
                  <span className="font-bold text-slate-800">Pulp Conveyance:</span> Pumps are used to transport the qualified pulp to the headbox of the paper machine.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Operating Conditions</h3>
              <ul className="space-y-1 text-slate-700 list-disc pl-5 mb-12">
                <li>Flow rate: 3 - 2600 m³/h</li>
                <li>Head: 4 - 250 m</li>
                <li>Pressure: Up to 5.0 MPa</li>
                <li>Temperature: -20°C - 450°C</li>
                <li>Rotational speed: 2950 rpm/min, 1450 rpm/min</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameter Diagram</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {['ys1', 'ys2', 'ys3', 'ys4', 'ys5', 'ys6'].map((id) => (
                  <div key={id} className="border border-slate-200 rounded-lg p-1 bg-white">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={`https://omrontechpumps.com/sitepad-data/uploads/2026/01/${id}.jpg`}
                        alt={`Parameter ${id}`}
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
                  "Horizontal Centrifugal Pumps",
                  "Temperature Sensor",
                  "TIP Centrifugal Pumps",
                  "Overhung Type Centrifugal Pumps"
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
