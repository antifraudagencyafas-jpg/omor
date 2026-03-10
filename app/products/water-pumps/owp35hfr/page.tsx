import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function OWP35HFRPage() {
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
          <span className="text-slate-900 font-medium truncate uppercase">OWP35HFR Multistage Vertical Centrifugal Pump</span>
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
                  <Link href="/products/tipcentrifugalpumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
                    <span>TIP Centrifugal Pumps</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/products/screwpumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
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
                        <Link href="/products/water-pumps" className="block text-sm text-blue-600 font-medium">
                          Multistage Vertical Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/water-pumps" className="block text-sm text-slate-500 hover:text-blue-600">
                          Fire Fighting Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/5.jpg"
                    alt="OWP35HFR Multistage Vertical Centrifugal Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OWP35HFR Multistage Vertical Centrifugal Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OWP35HFR
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The OWP35HFR is a high-efficiency multistage vertical centrifugal pump designed for industrial water supply and pressure boosting. Its vertical design ensures a small footprint while providing exceptional performance for high-head applications.
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
                The OWP Series Multistage Vertical Centrifugal Pumps are engineered for reliability and energy efficiency. They are suitable for transporting thin, clean, non-flammable, and non-explosive liquids without solid particles or fibers.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Technical Advantages</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-8">
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Space-Saving Design:</span>
                    <span>The vertical structure allows for installation in areas with limited floor space.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Corrosion Resistance:</span>
                    <span>Wetted parts are typically made of high-quality stainless steel (SS304/SS316) for durability.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● High Efficiency:</span>
                    <span>Optimized hydraulic model ensures low power consumption and stable operation.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Application Areas</h3>
              <ul className="space-y-2 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">●</span> Industrial water supply and pressure boosting</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">●</span> High-rise building water supply systems</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">●</span> Water treatment and filtration systems</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">●</span> Boiler feed and condensate systems</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">●</span> Irrigation and fire fighting systems</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Technical Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250320/multistage-vertical-centrifugal-pumps--2--376036.webp"
                    alt="OWP35HFR Multistage Vertical Pump Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Operating Data</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="block text-sm font-bold text-slate-500 uppercase mb-1">Flow Rate</span>
                    <span className="text-xl font-bold text-slate-800">Up to 240 m³/h</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-500 uppercase mb-1">Head</span>
                    <span className="text-xl font-bold text-slate-800">Up to 300 m</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-500 uppercase mb-1">Pressure</span>
                    <span className="text-xl font-bold text-slate-800">Up to 3.3 MPa</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-500 uppercase mb-1">Temperature</span>
                    <span className="text-xl font-bold text-slate-800">-15℃ to +120℃</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OWP35HFR",
                  "Multistage Vertical Pump",
                  "Water Pump",
                  "High Head Pump",
                  "Pressure Booster",
                  "Stainless Steel Pump"
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
