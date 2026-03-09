import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, ChevronRight, List, Grid } from "lucide-react";

export default function TIPCentrifugalPumpsPage() {
  const products = [
    {
      name: "TIP9AQ2KX HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg",
      description: "The Omron Tech Pumps TIP series of TIP9A7Q2KX overhung type horizontal centrifugal pumps is a high - performance product developed by our company. Based on traditional centrifugal pumps, we have carefully considered the unique structural requirements during operation, integrated advanced structural concepts from home and abroad, and created it through extensive research and optimization. It has become an ideal choice for pump equipment in many industries, ensuring stable production.",
      href: "/product/tipcentrifugalpumps/tip9aq2kx"
    },
    {
      name: "TIP7RKC9X4 HORIZONTAL CENTRIFUGAL PUMP",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg",
      description: "TIP Horizontal Centrifugal Pumps for Chemical Flow are meticulously manufactured in strict accordance with the TIP standard. They are specifically designed for the complex technological processes in the chemical industry and belong to the category of high - performance centrifugal pumps. Their flow rate ranges from 2 cubic meters per hour to 2000 cubic meters per hour, and the maximum head can reach 160 meters. They are suitable for transporting media that are low - temperature or high - temperature, neutral or corrosive, clean or containing solid particles, toxic, flammable, and explosive.",
      href: "/product/tipcentrifugalpumps/tip7rkc9x4"
    },
    {
      name: "TIP4MZ8RDL CHEMICAL VERTICAL CENTRIFUGAL PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/2pvb_gizzu2.jpg",
      description: "The Omron Tech Pumps TIP series of TIP4MZ8RDL Overhung Type Vertical Centrifugal Pumps is a high Performance product developed by our company. Based on chemical pumps, we have fully considered the special structural requirements of chemical pumps during operation, drawn on advanced structural experiences at home and abroad, and created it through repeated research and optimization.",
      href: "/product/tipcentrifugalpumps/tip4mz8rdl"
    },
    {
      name: "TIPA6W9MQL TEMPERATURE CONTROLLER HIGH CENTRIFUGAL PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/6pvb-1_b4dpty.jpg",
      description: "TIP Horizontal Centrifugal Pumps For Heat Preservation for Heat Preservation, the innovative upgrade from chemical pumps, are crafted by Omron Tech Pumps. The pumps in Omron Tech Pumps series feature ingenious designs. Their hollow sandwich structure is compatible with a variety of insulating media, enabling precise tempera control, ensuring efficient and stable transportation, and demonstrating excellent performance under cor working conditions, thus facilitating the smooth o DeFNDG of chemical production processes. We adhere to the principle of putting customers first, providing professional selection advice and customized services, making every effort to maintain equipment stability. Our prices are also highly competitive, allowing you to obtain high - quality products at an affordable cost.",
      href: "/product/tipcentrifugalpumps/tipa6w9mql"
    },
    {
      name: "TIPX2C9W7A CHEMICAL VERTICAL PROCESSING PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/3pvb_abw4ed.jpg",
      description: "TIP vertical chemical process pumps are specifically designed for vertical installation scenarios with limited space and high - reliability requirements. The maximum operating pressure is 2.5 Mpa. They are applicable in fields such as petrochemical, energy, and cryogenic engineering, and are suitable for transporting clean or slightly contaminated media. The operating pressure and temperature vary depending on the pump materials.",
      href: "/product/tipcentrifugalpumps/tipx2c9w7a"
    },
    {
      name: "G2AP HORIZONTAL CENTRIFUGAL PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg",
      description: "TIP OH1 Horizontal Centrifugal Pumps for Oil and Chemical Flow play a crucial role in the industry. Among them, the Omron Tech Pumps series strictly adheres to the TIP standard. Specifically crafted for the intricate technological processes in the petrochemical field, this series is highly efficient and reliable. Its flow rate ranges from 2 to 2600 cubic meters per hour, and the maximum head can reach up to 250 meters, which can precisely meet the transportation requirements of various media in petrochemical production.",
      href: "/product/tipcentrifugalpumps/g2ap"
    },
    {
      name: "TIPQ9L4A7M HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/4pvb-1_yb3gk4.jpg",
      description: "As a global leader in industrial fluid technology Oron Tech Pumps has newly launched the TIPQ9L4A7M overhung type horizontal centrifugal pumps series. his series is centered around strict compliance with the international standard of the American Petroleum Institute. It is specifically designed for scenarios in petrochemical industry, energy extraction, and transportation of highly corrosive media, redefining the industry benchmark for reliability and efficiency.",
      href: "/product/tipcentrifugalpumps/tipq9l4a7m"
    },
    {
      name: "TIPL8Q5N2M HORIZONTAL CENTRIFUGAL PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/8pvb-1_uvxvdo.jpg",
      description: "As a global leader in industrial fluid technology Oron Tech Pumps has newly launched the TIPL8Q5N2M overhung type horizontal centrifugal pumps series. his series is centered around strict compliance with the international standard of the American Petroleum Institute. It is specifically designed for scenarios in petrochemical industry, energy extraction, and transportation of highly corrosive media, redefining the industry benchmark for reliability and efficiency.",
      href: "/product/tipcentrifugalpumps/tipl8q5n2m"
    },
    {
      name: "TIP8C2XKWR HORIZONTAL CENTRIFUGAL PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/9pvb-1_qqbrcy.jpg",
      description: "TIP Horizontal Centrifugal Pumps For Heat Preserva for Heat Preservation, the innovative upgrade from chemical pumps, are crafted by Omron Tech Pumps. The pumps in Omron Tech Pumps series feature ingenious designs. Their hollow sandwich structure is compatible with a variety of insulating media, enabling precise temperature control, ensuring efficient and stable transportation, and demonstrating excellent performance under complex working conditions, thus facilitating the smooth operation of chemical production processes. We adhere to the principle of putting customers first, providing professional selection advice and customized services, making every effort to maintain equipment stability. Our prices are also highly competitive, allowing you to obtain high - quality products at an affordable cost.",
      href: "/product/tipcentrifugalpumps/tip8c2xkwr"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773078719/image-3_qfrjwx.jpg"
            alt="TIP Centrifugal Pumps Background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TIP Centrifugal Pumps</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link href="/product" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>

        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-8">
            Omron Tech Pumps is an enterprise specializing in the manufacturing of TIP Centrifugal Pumps, boasting profound technical expertise and rich industry experience. The company adheres to the pursuit of quality and innovation, providing high - quality TIP Centrifugal Pumps to customers worldwide. Relying on advanced manufacturing processes, strict quality inspections, and a professional team, its TIP Centrifugal Pumps products sell well both at home and abroad and are highly trusted by customers.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What is an TIP Centrifugal Pump?</h2>
          <p className="text-lg leading-relaxed mb-8">
            TIP is the abbreviation of the American Petroleum Institute. The standards it develops are widely applied in industries such as oil and gas. TIP centrifugal pumps are manufactured in accordance with these standards and have strict requirements in terms of materials, structure, and performance testing. For example, the materials need to be corrosion - resistant and wear - resistant; the structure should be stable and well - sealed; and the performance must meet precise indicators. Therefore, TIP centrifugal pumps have higher quality and stronger adaptability, capable of meeting the demands of harsh industries.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Application Fields of TIP Centrifugal Pumps</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">1. Oil and Gas Industry</h3>
              <p className="text-slate-700">In the processes of oil exploration, transportation, refining, and in related natural gas operations, TIP centrifugal pumps that can operate stably in complex environments are required to ensure the transportation and utilization of crude oil and natural gas.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">2. Chemical Industry</h3>
              <p className="text-slate-700">The chemical production process is complex, and the media are hazardous. TIP centrifugal pumps, with good sealing and corrosion - resistance and stable operation, are used in links such as raw material transportation, material transfer, and product refining to support chemical production.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">3. Power Industry</h3>
              <p className="text-slate-700">In thermal power plants, API centrifugal pumps are used for boiler feed water, condensate water transportation, and cooling systems. In nuclear power plants, they are responsible for transporting the coolant of nuclear reactors, which is crucial for the safe operation of the power plants.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-8">
            {/* Search Box */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <form className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-4 pr-10 py-2 border border-slate-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                />
                <button type="submit" className="absolute right-3 text-slate-400 hover:text-blue-600">
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Products Accordion */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <h3 className="bg-[#0047b3] text-white font-bold text-lg px-6 py-4">
                Products
              </h3>
              <ul className="divide-y divide-slate-200">
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium cursor-pointer list-none">
                      <span>TIP Centrifugal Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-slate-50 px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          TIP Overhung Type Centrifugal Pumps
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          TIP Between Bearing Type Centrifugal Pumps
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/product/screwpumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Screw Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/product/water-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Water Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/product/magnetic-drive-pump" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Magnetic Drive Pump
                  </Link>
                </li>
              </ul>
            </div>

            {/* New Products */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <h3 className="bg-slate-800 text-white font-bold text-lg px-6 py-4">
                New Products
              </h3>
              <div className="p-4 space-y-4">
                {[
                  { title: "TIP OH1 Horizontal Centrifugal Pumps For Oil And Chemical Flow", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg", link: "/product/tipcentrifugalpumps/g2ap" },
                  { title: "TIP OH1 Horizontal Centrifugal Pumps For Chemical Flow", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg", link: "/product/tipcentrifugalpumps/tip7rkc9x4" },
                  { title: "TIP OH1 Overhung Type Horizontal Centrifugal Pumps", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg", link: "/product/tipcentrifugalpumps/tip9aq2kx" },
                  { title: "Open Top Type Single Screw Pumps", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg", link: "/product/screwpumps/ott" }
                ].map((np, i) => (
                  <Link href={np.link} key={i} className="flex items-center gap-4 group">
                    <div className="relative w-16 h-16 bg-white border border-slate-100 rounded overflow-hidden flex-shrink-0">
                      <Image 
                        src={np.img}
                        alt={np.title}
                        fill
                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-xs font-medium text-slate-700 group-hover:text-[#0047b3] line-clamp-3 transition-colors leading-snug">
                      {np.title}
                    </h4>
                  </Link>
                ))}
                <div className="pt-2">
                  <Link href="/product" className="flex items-center justify-center w-full px-4 py-2 bg-slate-100 text-slate-700 hover:bg-[#0047b3] hover:text-white rounded transition-colors text-sm font-medium">
                    View More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Area - Product Listing */}
          <div className="w-full flex-1">
            <div className="space-y-6">
              {products.map((product, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-[240px] relative aspect-square sm:aspect-auto sm:h-[240px] bg-white border border-slate-100 rounded overflow-hidden flex-shrink-0">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 240px"
                      className="object-contain p-2"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-full flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-[#0047b3] transition-colors">
                        <Link href={product.href}>{product.name}</Link>
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-4">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <Link 
                        href={product.href}
                        className="inline-flex items-center justify-center px-6 py-2 bg-[#0047b3] text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
                      >
                        View More &gt;&gt;
                      </Link>
                      <Link 
                        href="#inquiry" 
                        className="inline-flex items-center justify-center px-6 py-2 bg-[#0047b3] text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
                      >
                        Send Inquiry &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
