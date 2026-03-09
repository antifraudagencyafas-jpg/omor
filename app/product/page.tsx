import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Settings, Shield, Globe, Zap } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. PAGE INTRODUCTION */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/20250122170520906241_oz9huo.webp"
            alt="Products Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industrial Pump Products</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            OmronTechPumps manufactures high-performance pumps engineered for the most demanding industrial applications. Our advanced pumping solutions are trusted globally across oil & gas, petrochemical, marine, steel, power generation, and water treatment sectors.
          </p>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORY GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Category 1 */}
            <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/centrifugal/800/600" 
                  alt="TIP Centrifugal Pumps" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">TIP Centrifugal Pumps</h3>
                <p className="text-slate-600 mb-8 flex-grow">
                  Engineered for high flow rates and continuous operation. These robust centrifugal pumps deliver exceptional reliability in transferring low viscosity fluids across various industrial processes.
                </p>
                <Link href="/product/tipcentrifugalpumps" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors w-max">
                  View Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/screw/800/600" 
                  alt="Screw Pumps" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Screw Pumps</h3>
                <p className="text-slate-600 mb-8 flex-grow">
                  Positive displacement pumps ideal for high viscosity fluids. Our twin and multi-screw designs ensure smooth, pulsation-free flow for critical petrochemical and marine applications.
                </p>
                <Link href="/product/screwpumps" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors w-max">
                  View Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/magnetic/800/600" 
                  alt="Magnetic Drive Pumps" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Magnetic Drive Pumps</h3>
                <p className="text-slate-600 mb-8 flex-grow">
                  Sealless pump technology providing 100% leak-free operation. The perfect solution for safely handling hazardous, toxic, or highly corrosive chemicals without environmental risk.
                </p>
                <Link href="/product/magnetic-drive-pump" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors w-max">
                  View Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/waterpump/800/600" 
                  alt="Water Pumps" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Water Pumps</h3>
                <p className="text-slate-600 mb-8 flex-grow">
                  High-capacity water transport solutions for industrial cooling, municipal supply, and wastewater management. Designed for maximum energy efficiency and minimal maintenance.
                </p>
                <Link href="/product/water-pumps" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors w-max">
                  View Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "TIP9AQ2KX HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMPS", 
                image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg",
                description: "The Omron Tech Pumps TIP series of TIP9A7Q2KX overhung type horizontal centrifugal pumps is a high - performance product developed by our company.",
                link: "/product/tipcentrifugalpumps"
              },
              { 
                name: "TIP7RKC9X4 HORIZONTAL CENTRIFUGAL PUMP", 
                image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg",
                description: "TIP Horizontal Centrifugal Pumps for Chemical Flow are meticulously manufactured in strict accordance with the TIP standard.",
                link: "/product/tipcentrifugalpumps"
              },
              { 
                name: "OTT SINGLE SCREW PUMPS", 
                image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg",
                description: "Open Top Type Single Screw Pumps are designed for handling highly viscous and non-flowing materials.",
                link: "/product/screwpumps"
              },
              { 
                name: "GPT7MQL8 GPT SINGLE SCREW PUMPS", 
                image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/11pvb-1_muod94.jpg",
                description: "General Purpose Type Single Screw Pumps are versatile pumps suitable for a wide range of applications.",
                link: "/product/screwpumps"
              },
              { 
                name: "MIPA9X2K MAGNETIC PUMP", 
                image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068034/smmm_otfbm0.jpg",
                description: "Sealless pump technology providing 100% leak-free operation. The perfect solution for safely handling hazardous, toxic, or highly corrosive chemicals without environmental risk.",
                link: "/product/magnetic-drive-pump"
              },
              { 
                name: "OWP35HFR MULTISTAGE VERTICAL CENTRIFUGAL PUMPS", 
                image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068082/12pvb-1_yb8ggy.jpg",
                description: "High-capacity water transport solutions for industrial cooling, municipal supply, and wastewater management. Designed for maximum energy efficiency and minimal maintenance.",
                link: "/product/water-pumps"
              },
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-56 bg-white p-6 flex items-center justify-center border-b border-slate-100">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-4" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{product.name}</h4>
                  <p className="text-sm text-slate-600 mb-6 line-clamp-3 flex-grow">{product.description}</p>
                  <Link href={product.link} className="block text-center w-full py-3 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Selecting the Right Pump?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Our engineering team can help you choose the best pump solution for your industrial application.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 text-lg">
            Send Inquiry
          </button>
        </div>
      </section>
    </main>
  );
}
