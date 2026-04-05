import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Metadata } from 'next';
import ProductInquiry from "@/components/ProductInquiry";

export const metadata: Metadata = {
  title: 'OMC-HM 650 High Mount Horizontal Centrifugal Pump',
  description: 'High-performance OMC-HM 650 horizontal centrifugal pump with excellent craftsmanship, minimal vibration, and strong stability for industrial use.',
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
          <span className="text-slate-900 font-medium truncate uppercase">OMC-HM 650 HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMP</span>
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
                    src="https://omrontechpumps.com/sitepad-data/uploads/2025/12/1pvb-2.jpg"
                    alt="OMC-HM 650 HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMP"
                    fill
                    className="object-contain p-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 uppercase leading-tight border-l-4 border-blue-600 pl-4">
                  OMC-HM 650 HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMP
                </h1>
                <p className="text-slate-600 font-medium mb-4">
                  Model: OMC-HM 650
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

              <h3 className="text-xl font-bold text-slate-800 mb-6 mt-12">Working Conditions</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-700 list-none pl-0 mb-12 bg-slate-50 p-6 rounded-lg border border-slate-200">
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Flow rate:</span> 1.8 - 900 m³/h</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Head:</span> 135 m</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Suction pressure:</span> P1W ≤ 0.3MPa</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Discharge pressure:</span> P2W ≤ 1.6MPa</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Ambient temperature:</span> Not exceeding 40°C</li>
                <li className="flex items-start"><span className="mr-2 text-blue-600 font-bold">● Altitude:</span> Not exceeding 1000 m</li>
                <li className="flex items-start md:col-span-2"><span className="mr-2 text-blue-600 font-bold">● Rotational speed:</span> 2900 r/min, 1450 r/min</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-6">Performance Parameter Table</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-lg mb-12 shadow-sm">
                <table className="min-w-full divide-y divide-slate-200 text-xs text-center bg-white">
                  <thead className="bg-slate-100">
                    <tr>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900 border-r">No.</th>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900 border-r">Type</th>
                      <th colSpan={2} className="px-2 py-2 font-bold text-slate-900 border-b border-r">Capacity</th>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900 border-r">Head (m)</th>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900 border-r">Efficiency (%)</th>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900 border-r">Speed (r/min)</th>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900 border-r">Power (kW)</th>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900 border-r">(NPSH)r (m)</th>
                      <th rowSpan={2} className="px-2 py-3 font-bold text-slate-900">Weight (kg)</th>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <th className="px-2 py-2 border-r font-bold text-slate-700">m³/h</th>
                      <th className="px-2 py-2 border-r font-bold text-slate-700">L/s</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { no: '001', type: '20/110-0.37/2', data: [['1.8', '0.50', '16', '25'], ['2.5', '0.69', '15', '34'], ['3.3', '0.92', '13.5', '35']], speed: '2900', power: '0.37', npsh: '2.3', weight: '25' },
                      { no: '002', type: '20/160-1.1/2', data: [['1.8', '0.50', '33', '19'], ['2.5', '0.69', '32', '25'], ['3.3', '0.92', '29', '24']], speed: '2900', power: '1.1', npsh: '2.3', weight: '29' },
                      { no: '003', type: '20/200-3/2', data: [['1.8', '0.50', '51', '15'], ['2.5', '0.69', '50', '18'], ['3.3', '0.92', '48', '20']], speed: '2900', power: '3', npsh: '2.3', weight: '62' },
                      { no: '004', type: '20/185-2.2/2', data: [['1.7', '0.47', '45', '15'], ['2.3', '0.64', '44', '18'], ['3.1', '0.86', '42', '19']], speed: '2900', power: '2.2', npsh: '2.3', weight: '52' },
                      { no: '005', type: '20/170-1.5/2', data: [['1.5', '0.42', '38', '14'], ['2.1', '0.58', '36', '17'], ['2.7', '0.75', '34', '19']], speed: '2900', power: '1.5', npsh: '2.3', weight: '49' },
                      { no: '006', type: '25/110-0.55/2', data: [['2.8', '0.78', '16', '34'], ['4.0', '1.11', '15', '42'], ['5.2', '1.44', '13.5', '41']], speed: '2900', power: '0.55', npsh: '2.3', weight: '26' },
                      { no: '007', type: '25/125-0.75/2', data: [['2.8', '0.78', '20.6', '28'], ['4.0', '1.11', '20', '36'], ['5.2', '1.44', '18', '35']], speed: '2900', power: '0.75', npsh: '2.3', weight: '27' },
                      { no: '008', type: '25/115-0.55/2', data: [['2.5', '0.69', '17', '27'], ['3.6', '1.00', '16', '35'], ['4.6', '1.28', '14.4', '34']], speed: '2900', power: '0.55', npsh: '2.3', weight: '26' },
                      { no: '009', type: '25/160-1.5/2', data: [['2.8', '0.78', '33', '24'], ['4.0', '1.11', '32', '32'], ['5.2', '1.44', '30', '33']], speed: '2900', power: '1.5', npsh: '2.3', weight: '39' },
                      { no: '010', type: '25/150-1.1/2', data: [['2.6', '0.72', '29', '23'], ['3.7', '1.03', '28', '31'], ['4.9', '1.36', '26', '32']], speed: '2900', power: '1.1', npsh: '2.3', weight: '34' }
                    ].map((row, idx) => (
                      <Fragment key={idx}>
                        {row.data.map((dataRow, dIdx) => (
                          <tr key={dIdx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}>
                            {dIdx === 0 && (
                              <>
                                <td rowSpan={3} className="px-2 py-2 text-slate-700 border-r font-medium">{row.no}</td>
                                <td rowSpan={3} className="px-2 py-2 text-slate-700 border-r font-bold">{row.type}</td>
                              </>
                            )}
                            <td className="px-2 py-2 text-slate-600 border-r">{dataRow[0]}</td>
                            <td className="px-2 py-2 text-slate-600 border-r">{dataRow[1]}</td>
                            <td className="px-2 py-2 text-slate-600 border-r">{dataRow[2]}</td>
                            <td className="px-2 py-2 text-slate-600 border-r">{dataRow[3]}</td>
                            {dIdx === 0 && (
                              <>
                                <td rowSpan={3} className="px-2 py-2 text-slate-600 border-r">{row.speed}</td>
                                <td rowSpan={3} className="px-2 py-2 text-slate-600 border-r">{row.power}</td>
                                <td rowSpan={3} className="px-2 py-2 text-slate-600 border-r">{row.npsh}</td>
                                <td rowSpan={3} className="px-2 py-2 text-slate-600 font-medium">{row.weight}</td>
                              </>
                            )}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>


              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                {[
                  "OMC-HM 650",
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
