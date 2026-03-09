import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "TIP Centrifugal Pumps",
    href: "/product/tipcentrifugalpumps",
    products: [
      { name: "TIP9AQ2KX HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg", href: "/product/tipcentrifugalpumps/tip9aq2kx" },
      { name: "TIP7RKC9X4 HORIZONTAL CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg", href: "/product/tipcentrifugalpumps/tip7rkc9x4" },
      { name: "TIP4MZ8RDL CHEMICAL VERTICAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/2pvb_gizzu2.jpg", href: "/product/tipcentrifugalpumps/tip4mz8rdl" },
      { name: "TIPA6W9MQL TEMPERATURE CONTROLLER HIGH CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/6pvb-1_b4dpty.jpg", href: "/product/tipcentrifugalpumps/tipa6w9mql" },
      { name: "TIPX2C9W7A CHEMICAL VERTICAL PROCESSING PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/3pvb_abw4ed.jpg", href: "/product/tipcentrifugalpumps/tipx2c9w7a" },
      { name: "G2AP HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg", href: "/product/tipcentrifugalpumps/g2ap" },
      { name: "TIPQ9L4A7M HORIZONTAL CENTRIFUGAL PUMPS WITH TEMPERATURE SENSOR", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/4pvb-1_yb3gk4.jpg", href: "/product/tipcentrifugalpumps/tipq9l4a7m" },
      { name: "TIPL8Q5N2M HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/8pvb-1_uvxvdo.jpg", href: "/product/tipcentrifugalpumps/tipl8q5n2m" },
      { name: "TIP8C2XKWR HORIZONTAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/9pvb-1_qqbrcy.jpg", href: "/product/tipcentrifugalpumps/tip8c2xkwr" },
    ]
  },
  {
    title: "Screw Pumps",
    href: "/product/screwpumps",
    products: [
      { name: "OTT SINGLE SCREW PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg", href: "/product/screwpumps/ott" },
      { name: "GPT7MQL8 GPT SINGLE SCREW PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/11pvb-1_muod94.jpg", href: "/product/screwpumps/gpt7mql8" },
    ]
  },
  {
    title: "Water Pumps",
    href: "/product/water-pumps",
    products: [
      { name: "OWP35HFR MULTISTAGE VERTICAL CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068082/12pvb-1_yb8ggy.jpg", href: "/product/water-pumps/owp35hfr" },
      { name: "OWP7MQL8 MULTISTAGE FIRE FIGHTING CENTRIFUGAL PUMPS", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/water-pmp111_tskzi4.jpg", href: "/product/water-pumps/owp7mql8" },
    ]
  },
  {
    title: "Magnetic Drive Pump",
    href: "/product/magnetic-drive-pump",
    products: [
      { name: "MIPA9X2K MAGNETIC PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068034/smmm_otfbm0.jpg", href: "/product/magnetic-drive-pump/mipa9x2k" },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Products</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
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
                Products
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
                  sales@teffiko.com
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
                <div key={idx} className="bg-white">
                  <div className="flex items-center justify-between border-b-2 border-blue-600 pb-2 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                    <Link href={category.href} className="text-sm text-blue-600 hover:underline font-medium">
                      View More
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {category.products.map((product, pIdx) => (
                      <div key={pIdx} className="group border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                        <Link href={product.href} className="block">
                          <div className="relative h-48 bg-slate-100 overflow-hidden">
                            <Image 
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="p-4 text-center">
                            <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {product.name}
                            </h3>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
