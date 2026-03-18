import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, ChevronRight } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Screw Pumps | Omron Tech Pumps',
  description: 'Industrial screw pumps designed for high-viscosity fluids in oil & gas, chemical, and marine applications.',
};

export default function ScrewPumpsPage() {
  const products = [
    {
      name: "OTT SINGLE SCREW PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg",
      description: "Open Top Type Single Screw Pumps are designed for handling highly viscous and non-flowing materials. They feature an open hopper with a coupling rod and an auger to force the material into the pumping elements.",
      href: "/products/screwpumps/ott"
    },
    {
      name: "GPT7MQL8 GPT SINGLE SCREW PUMPS",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/11pvb-1_muod94.jpg",
      description: "General Purpose Type Single Screw Pumps are versatile pumps suitable for a wide range of applications, including the transfer of liquids with varying viscosities, containing solids, or requiring gentle handling.",
      href: "/products/screwpumps/gpt7mql8"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773078719/image-4_jl919r.jpg"
            alt="Screw Pumps Background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Screw Pumps</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>

        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-8">
            Omron Tech Pumps specializes in the R & D, production, and sales of screw pumps and other pump equipment. It has been deeply involved in this field for many years. Thanks to its profound technical accumulation and innovative spirit, these products enjoy a good reputation in the pump industry. The company has a professional R & D team, advanced production equipment, and a strict quality inspection system. It is committed to enhancing their performance, providing high - quality ones to global customers, and meeting the fluid transportation needs of various industries.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Working Principle and Characteristics of Screw Pumps</h2>
          <p className="text-lg leading-relaxed mb-8">
            Screw pumps are positive - displacement pumps that operate by the meshing and rotation of screws. During operation, sealed cavities are formed in the pump chamber. These cavities move axially as the screws rotate. The cavities at the inlet end expand to suck in liquid, and the cavities at the outlet end shrink to discharge the liquid, achieving smooth and continuous transportation. This gives screw pumps stable flow rates, low pressure pulsation, strong self - priming capabilities, and the ability to transport a variety of fluids.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Application Fields of Screw Pumps</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Oil and Gas Industry</h3>
              <p className="text-slate-700">In oil extraction, screw pumps are used to transport high - viscosity crude oil and for oilfield water injection. When processing natural gas, they transport condensate with impurities to ensure production.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Chemical Industry</h3>
              <p className="text-slate-700">Screw pumps are used to transport corrosive, high - viscosity, or solid - containing chemical raw materials and products, meeting the requirements of high - precision and stable transportation.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Food and Beverage Industry</h3>
              <p className="text-slate-700">Single - screw pumps gently transport sauces, dairy products, etc., to ensure food quality.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Marine Industry</h3>
              <p className="text-slate-700">Screw pumps are used for fuel oil and lubricating oil transportation and sewage discharge on ships, ensuring the operation of ship equipment.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Sewage Treatment Industry</h3>
              <p className="text-slate-700">Screw pumps transport sewage and sludge, facilitating the sewage treatment process.</p>
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
                  <Link href="/products/tipcentrifugalpumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    TIP Centrifugal Pumps
                  </Link>
                </li>
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium cursor-pointer list-none">
                      <span>Screw Pumps</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-slate-50 px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          OTT SINGLE SCREW PUMPS
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          GPT7MQL8 GPT SINGLE SCREW PUMPS
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/products/water-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Water Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/products/magnetic-drive-pump" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
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
                  { title: "TIP OH1 Horizontal Centrifugal Pumps For Oil And Chemical Flow", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg", link: "/products/tipcentrifugalpumps/g2ap" },
                  { title: "TIP OH1 Horizontal Centrifugal Pumps For Chemical Flow", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg", link: "/products/tipcentrifugalpumps/tip7rkc9x4" },
                  { title: "TIP OH1 Overhung Type Horizontal Centrifugal Pumps", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg", link: "/products/tipcentrifugalpumps/tip9a2kx" },
                  { title: "Open Top Type Single Screw Pumps", img: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg", link: "/products/screwpumps/ott" }
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
                  <Link href="/products" className="flex items-center justify-center w-full px-4 py-2 bg-slate-100 text-slate-700 hover:bg-[#0047b3] hover:text-white rounded transition-colors text-sm font-medium">
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
