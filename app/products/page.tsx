import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "TIP Centrifugal Pumps",
    href: "/products/tipcentrifugalpumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078719/image-3_qfrjwx.jpg",
    description: "Engineered for high flow rates and continuous operation. These robust centrifugal pumps deliver exceptional reliability in transferring low viscosity fluids across various industrial processes.",
    products: [
      { name: "TIP9AQ2KX HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg", href: "/products/tipcentrifugalpumps/tip9aq2kx" },
      { name: "TIP7RKC9X4 HORIZONTAL CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg", href: "/products/tipcentrifugalpumps/tip7rkc9x4" },
      { name: "TIP4MZ8RDL CHEMICAL VERTICAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/2pvb_gizzu2.jpg", href: "/products/tipcentrifugalpumps/tip4mz8rdl" },
      { name: "TIPA6W9MQL TEMPERATURE CONTROLLER HIGH CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/6pvb-1_b4dpty.jpg", href: "/products/tipcentrifugalpumps/tipa6w9mql" },
      { name: "TIPX2C9W7A CHEMICAL VERTICAL PROCESSING PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/3pvb_abw4ed.jpg", href: "/products/tipcentrifugalpumps/tipx2c9w7a" },
      { name: "G2AP HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg", href: "/products/tipcentrifugalpumps/g2ap" },
      { name: "TIPQ9L4A7M HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/4pvb-1_yb3gk4.jpg", href: "/products/tipcentrifugalpumps/tipq9l4a7m" },
      { name: "TIPL8Q5N2M HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/8pvb-1_uvxvdo.jpg", href: "/products/tipcentrifugalpumps/tipl8q5n2m" },
      { name: "TIP8C2XKWR HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/9pvb-1_qqbrcy.jpg", href: "/products/tipcentrifugalpumps/tip8c2xkwr" },
    ]
  },
  {
    title: "Screw Pumps",
    href: "/products/screwpumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078719/image-4_jl919r.jpg",
    description: "Positive displacement pumps ideal for high viscosity fluids. Our twin and multi-screw designs ensure smooth, pulsation-free flow for critical petrochemical and marine applications.",
    products: [
      { name: "OTT SINGLE SCREW PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg", href: "/products/screwpumps/ott" },
      { name: "GPT7MQL8 GPT SINGLE SCREW PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/11pvb-1_muod94.jpg", href: "/products/screwpumps/gpt7mql8" },
    ]
  },
  {
    title: "Water Pumps",
    href: "/products/water-pumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078720/image-1_yfttp1.jpg",
    description: "High-capacity water transport solutions for industrial cooling, municipal supply, and wastewater management. Designed for maximum energy efficiency and minimal maintenance.",
    products: [
      { name: "OWP35HFR MULTISTAGE VERTICAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068082/12pvb-1_yb8ggy.jpg", href: "/products/water-pumps/owp35hfr" },
      { name: "OWP7MQL8 MULTISTAGE FIRE FIGHTING CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/water-pmp111_tskzi4.jpg", href: "/products/water-pumps/owp7mql8" },
    ]
  },
  {
    title: "Magnetic Drive Pump",
    href: "/products/magnetic-drive-pump",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078720/image_neo1zb.jpg",
    description: "Sealless pump technology providing 100% leak-free operation. The perfect solution for safely handling hazardous, toxic, or highly corrosive chemicals without environmental risk.",
    products: [
      { name: "MIPA9X2K MAGNETIC PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068034/smmm_otfbm0.jpg", href: "/products/magnetic-drive-pump/mipa9x2k" },
    ]
  },
  {
    title: "Solar Pumps",
    href: "/products/solar-pumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078721/image-2_mx5ywi.jpg",
    description: "Eco-friendly solar-powered pumping solutions for remote locations, agriculture, and sustainable water management systems. Reliable operation independent of the grid.",
    products: [
      { name: "ECO-SOLAR PUMP SYSTEM", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg", href: "/products/solar-pumps/eco-solar" },
    ]
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
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

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 font-medium">Products</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
              <h3 className="bg-blue-600 text-white font-bold text-lg px-6 py-4">
                Categories
              </h3>
              <ul className="divide-y divide-slate-200">
                {categories.map((category, idx) => (
                  <li key={idx}>
                    <Link 
                      href={category.href}
                      className="block px-6 py-3 text-slate-700 hover:bg-white hover:text-blue-600 transition-colors font-medium"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info in Sidebar */}
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
              <h3 className="bg-slate-800 text-white font-bold text-lg px-6 py-4">
                Contact Us
              </h3>
              <div className="p-6 text-sm text-slate-600 space-y-4">
                <p>
                  <strong className="block text-slate-900 mb-1">Tel:</strong>
                  +90 212 900 85 53
                </p>
                <p>
                  <strong className="block text-slate-900 mb-1">E-mail:</strong>
                  sales@omrontechpumps.com
                </p>
                <p>
                  <strong className="block text-slate-900 mb-1">Address:</strong>
                  Tunuslu Mahmut Pasa Cd. No: 10 Burhaniye, 34676 Uskudar/istanbul, Turkiye
                </p>
              </div>
            </div>
          </aside>

          {/* Products List */}
          <div className="w-full lg:w-3/4">
            <div className="space-y-12">
              {categories.map((category, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col mb-10">
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{category.title}</h3>
                    <p className="text-slate-600 mb-6">{category.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {category.products.slice(0, 3).map((product, pIdx) => (
                        <Link key={pIdx} href={product.href} className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
                          <div className="relative w-12 h-12 bg-white border border-slate-100 rounded overflow-hidden flex-shrink-0">
                            <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
                          </div>
                          <span className="text-xs font-medium text-slate-700 line-clamp-2">{product.name}</span>
                        </Link>
                      ))}
                    </div>

                    <Link href={category.href} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors w-max">
                      View All {category.title} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Selecting the Right Pump?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Our engineering team can help you choose the best pump solution for your industrial application.
          </p>
          <Link href="/inquiry" className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 text-lg">
            Send Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
