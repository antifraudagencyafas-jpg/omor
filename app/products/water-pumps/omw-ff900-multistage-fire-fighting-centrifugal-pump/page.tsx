import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMW-FF900 Multistage Fire-Fighting Centrifugal Pump',
  description: 'Robust vertical multistage fire fighting centrifugal pump for industrial fire safety systems. High pressure, reliable water supply.',
};

export default function OMW7MQL8Page() {
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
          <span className="text-slate-900 font-medium truncate uppercase">OMW-FF900 Multistage Fire-Fighting Centrifugal Pump</span>
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
                  <Link href="/products/screw-pumps" className="flex items-center justify-between px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium">
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
                        <Link href="/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump" className="block text-sm text-slate-500 hover:text-blue-600">
                          OMW-VS800 Multistage Vertical Centrifugal Pump
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/water-pumps/omw-ff900-multistage-fire-fighting-centrifugal-pump" className="block text-sm text-blue-600 font-medium">
                          OMW-FF900 Multistage Fire-Fighting Centrifugal Pump
                        </Link>
                      </li>
                    </ul>
                  </details>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/water-pmp111.jpg"
                    alt="OMW-FF900 Multistage Fire-Fighting Centrifugal Pumps"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMW-FF900 MULTISTAGE FIRE-FIGHTING CENTRIFUGAL PUMP
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMW-FF900
                </p>
                <div className="text-slate-600 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    Integrating global fire protection standards, the OMW7MQL8 series features an innovative detachable vertical structure. It is designed to provide high-pressure water supply with maximum reliability and simplified maintenance.
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
                Designed for vertical pipeline installation, this pump allows inlet and outlet connections on the same horizontal line, acting much like a valve. The detachable body structure reduces maintenance downtime by up to 50% for mechanical seal replacements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                  <h4 className="font-bold text-slate-900 mb-1">Fire Safety Compliant</h4>
                  <p className="text-sm text-slate-600">Strictly adheres to international fire-fighting pressurization standards.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                  <h4 className="font-bold text-slate-900 mb-1">Pipeline Design</h4>
                  <p className="text-sm text-slate-600">Inline inlet/outlet for easy space-saving valve-like installation.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Main Applications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-700 list-none pl-0 mb-12">
                <li className="flex items-start"><span className="mr-2 text-red-600 font-bold">●</span> Industrial Fire-Fighting Systems</li>
                <li className="flex items-start"><span className="mr-2 text-red-600 font-bold">●</span> High-Rise Parallel Water Supply</li>
                <li className="flex items-start"><span className="mr-2 text-red-600 font-bold">●</span> Boiler Feed Water Systems</li>
                <li className="flex items-start"><span className="mr-2 text-red-600 font-bold">●</span> High-Pressure Cleaning Liquids</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Operating Conditions</h3>
              <div className="overflow-x-auto mb-12">
                <table className="min-w-full border border-slate-200 text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-2 bg-slate-50 font-bold w-48">Flow Rate (Q)</td>
                      <td className="px-4 py-2">1.4 - 192 m³/h</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-slate-50 font-bold">Head (H)</td>
                      <td className="px-4 py-2">≤ 230 m</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-slate-50 font-bold">Outlet Pressure (P2)</td>
                      <td className="px-4 py-2">&lt; 2.5 MPa</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-slate-50 font-bold">Rotational Speed</td>
                      <td className="px-4 py-2">2960 rpm</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-slate-50 font-bold">Operating Voltage</td>
                      <td className="px-4 py-2">380V</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Structure Diagram</h3>
              <div className="my-8 border border-slate-200 rounded-lg p-4 bg-white flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[16/10]">
                  <Image 
                    src="https://www.teffiko.com/upload/8025/image/20250407/vertical-multistage-fire-fighting-centrifugal-pump--2--276824.webp"
                    alt="OMW7MQL8 Fire Pump Diagram"
                    fill 
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMW7MQL8",
                  "Fire Fighting",
                  "Emergency Pumping",
                  "High Pressure Vertical",
                  "Inline Construction",
                  "Detachable Pump Body"
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
