import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";

export default function MIPA9X2KPage() {
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
          <Link href="/products/magnetic-drive-pump" className="hover:text-blue-600 transition-colors">Magnetic Drive Pump</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium truncate uppercase">MIPA9X2K Magnetic Pump</span>
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
                        <Link href="/products/magnetic-drive-pump" className="block text-sm text-blue-600 font-medium">
                          Standard Magnetic Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/4.jpg"
                    alt="MIPA9X2K Magnetic Pump"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  MIPA9X2K Magnetic Pump
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: MIPA9X2K
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    The MIPA9X2K is a seal-less magnetic drive pump designed for zero-leakage transportation of hazardous, toxic, or expensive fluids. By using a magnetic coupling instead of a traditional shaft seal, it eliminates the risk of environmental contamination and reduces maintenance requirements.
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
                The Omron Tech Pumps MIPA series Magnetic Pumps are designed for the safe handling of corrosive, flammable, explosive, toxic, and volatile liquids. The pump is driven by a magnetic coupling, which isolates the pumped liquid from the atmosphere, providing a completely leak-free operation.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Core Features</h3>
              <ul className="space-y-4 text-slate-700 list-none pl-0 mb-8">
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Leak-Free Design:</span>
                    <span>The absence of mechanical seals ensures zero leakage, protecting the environment and personnel.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● High Quality Materials:</span>
                    <span>Available in various materials including Stainless Steel, Hastelloy, and Fluoroplastic linings to handle diverse chemicals.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800">● Safe Operation:</span>
                    <span>Equipped with magnetic protection to prevent motor overload during peak conditions.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Typical Applications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Fine chemical industry</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Pharmaceutical manufacturing</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Electroplating and surface treatment</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Semiconductor manufacturing</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Petroleum and refinery processing</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">»</span> Toxic or hazardous waste disposal</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Technical Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250320/magnetic-pumps--2--301321.webp"
                    alt="MIPA9X2K Magnetic Drive Pump Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 mt-12">Operating Data</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 border border-slate-200 mb-12 text-sm">
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 bg-slate-50 font-bold text-slate-700 w-1/3">Flow Rate</td>
                      <td className="px-6 py-4 text-slate-600">Up to 400 m³/h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 bg-slate-50 font-bold text-slate-700">Head</td>
                      <td className="px-6 py-4 text-slate-600">Up to 160 m</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 bg-slate-50 font-bold text-slate-700">Design Pressure</td>
                      <td className="px-6 py-4 text-slate-600">Up to 2.5 MPa</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 bg-slate-50 font-bold text-slate-700">Temperature</td>
                      <td className="px-6 py-4 text-slate-600">-20℃ to +250℃</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "MIPA9X2K",
                  "Magnetic Pump",
                  "Magnetic Drive Pump",
                  "Seal-less Pump",
                  "Zero Leakage",
                  "Chemical Pump"
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
