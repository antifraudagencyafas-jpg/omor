import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, ChevronRight, CheckCircle2 } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magnetic Drive Pumps | Omron Tech Pumps',
  description: 'Sealless magnetic drive pumps for 100% leak-free operation. Safe handling of hazardous, toxic, and corrosive chemicals.',
};

export default function MagneticDrivePumpPage() {
  const products = [
    {
      name: "MIPA9X2K MAGNETIC PUMP",
      image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068034/smmm_otfbm0.jpg",
      description: "Sealless pump technology providing 100% leak-free operation. The perfect solution for safely handling hazardous, toxic, or highly corrosive chemicals without environmental risk.",
      href: "/products/magnetic-drive-pump/mipa9x2k"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773078720/image_neo1zb.jpg"
            alt="Magnetic Drive Pumps Background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Magnetic Drive Pumps</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>

        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-8">
            Sealless pump technology providing 100% leak-free operation. The perfect solution for safely handling hazardous, toxic, or highly corrosive chemicals without environmental risk.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Key Features</h2>
          <ul className="space-y-3 mb-8">
            {[
              "100% leak-free sealless design",
              "Zero fugitive emissions",
              "High-strength rare earth magnets",
              "Corrosion-resistant linings (PTFE/PFA)",
              "Reduced maintenance costs"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Technical Specifications</h2>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <div><span className="font-semibold text-slate-700">Capacity:</span> Up to 800 m³/h</div>
              <div><span className="font-semibold text-slate-700">Head:</span> Up to 150 m</div>
              <div><span className="font-semibold text-slate-700">Temperature:</span> -50°C to 280°C</div>
              <div><span className="font-semibold text-slate-700">Pressure:</span> Up to 25 bar</div>
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
                  <Link href="/products/screwpumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Screw Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/products/water-pumps" className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium">
                    Water Pumps
                  </Link>
                </li>
                <li>
                  <details className="group" open>
                    <summary className="flex items-center justify-between px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0047b3] transition-colors font-medium cursor-pointer list-none">
                      <span>Magnetic Drive Pump</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="bg-slate-50 px-6 py-3 space-y-3 border-t border-slate-100">
                      <li>
                        <Link href="/products" className="block text-sm text-slate-600 hover:text-[#0047b3]">
                          MIPA9X2K MAGNETIC PUMP
                        </Link>
                      </li>
                    </ul>
                  </details>
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
