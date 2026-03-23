import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import solarProducts from "@/solar_products.json";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products Catalog',
  description: 'Explore our comprehensive range of industrial pumps including Centrifugal, Screw, Water, and Solar pumps.',
};

const categories = [
  {
    title: "OMR Centrifugal Pumps",
    href: "/products/omr-centrifugal-pumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078719/image-3_qfrjwx.jpg",
    description: "Engineered for high flow rates and continuous operation. These robust centrifugal pumps deliver exceptional reliability in transferring low viscosity fluids across various industrial processes.",
    products: [
      { name: "OMC-HM650 HIGH-MOUNT HORIZONTAL CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg", href: "/products/omr-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump" },
      { name: "OMC-SR750 SLURRY-RESISTANT HORIZONTAL CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg", href: "/products/omr-centrifugal-pumps/omc-sr750-slurry-resistant-horizontal-centrifugal-pump" },
      { name: "OMC-VC320 VERTICAL CHEMICAL CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/2pvb_gizzu2.jpg", href: "/products/omr-centrifugal-pumps/omc-vc320-vertical-chemical-centrifugal-pump" },
      { name: "OMC-TS420 TEMPERATURE SENSOR HORIZONTAL CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/6pvb-1_b4dpty.jpg", href: "/products/omr-centrifugal-pumps/omc-ts420-temperature-sensor-horizontal-centrifugal-pump" },
      { name: "OMC-VP450 VERTICAL PROCESS CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/3pvb_abw4ed.jpg", href: "/products/omr-centrifugal-pumps/omc-vp450-vertical-process-centrifugal-pump" },
      { name: "OMR-HC280 HORIZONTAL CHEMICAL CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068036/7pvb-1_pevpt0.jpg", href: "/products/omr-centrifugal-pumps/omr-hc280-horizontal-chemical-centrifugal-pump" },
    ]
  },
  {
    title: "Screw Pumps",
    href: "/products/screw-pumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078719/image-4_jl919r.jpg",
    description: "Positive displacement pumps ideal for high viscosity fluids. Our twin and multi-screw designs ensure smooth, pulsation-free flow for critical petrochemical and marine applications.",
    products: [
      { name: "OMT-VS150 VISCOUS HANDLING SINGLE SCREW PUMP", image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/9pvb-1.jpg", href: "/products/screw-pumps/omt-vs150-viscous-handling-single-screw-pump" },
      { name: "OMT-GP200 GENERAL PURPOSE SINGLE SCREW PUMP", image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/10pvb-1.jpg", href: "/products/screw-pumps/omt-gp200-general-purpose-single-screw-pump" },
    ]
  },
  {
    title: "Water Pumps",
    href: "/products/water-pumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078720/image-1_yfttp1.jpg",
    description: "High-capacity water transport solutions for industrial cooling, municipal supply, and wastewater management. Designed for maximum energy efficiency and minimal maintenance.",
    products: [
      { name: "OMW-VS800 MULTISTAGE VERTICAL CENTRIFUGAL PUMP", image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/11pvb-1.jpg", href: "/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump" },
      { name: "OMW-FF900 MULTISTAGE FIRE-FIGHTING CENTRIFUGAL PUMP", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/water-pmp111_tskzi4.jpg", href: "/products/water-pumps/omw-ff900-multistage-fire-fighting-centrifugal-pump" },
    ]
  },
  {
    title: "Magnetic Drive Pump",
    href: "/products/magnetic-drive-pumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078720/image_neo1zb.jpg",
    description: "Sealless pump technology providing 100% leak-free operation. The perfect solution for safely handling hazardous, toxic, or highly corrosive chemicals without environmental risk.",
    products: [
      { name: "OMD-MS250 SEALLESS MAGNETIC DRIVE PUMP", image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/12pvb-1.jpg", href: "/products/magnetic-drive-pumps/omd-ms250-sealless-magnetic-drive-pump" },
    ]
  },
  {
    title: "Solar Pumps",
    href: "/products/solar-pumps",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773078721/image-2_mx5ywi.jpg",
    description: "Eco-friendly solar-powered pumping solutions for remote locations, agriculture, and sustainable water management systems. Reliable operation independent of the grid.",
    products: solarProducts.map(p => ({
      name: p.name,
      image: p.image,
      href: `/products/solar-pumps/${p.slug}`
    }))
  }
];

const featuredProducts = [
  {
    name: "OMR-ES200 HORIZONTAL END-SUCTION CENTRIFUGAL PUMP",
    image: "/products/solar-pumps/xstp-horizontal-single-stage-centrifugal-pump.png",
    link: "/products/solar-pumps/xstp-horizontal-single-stage-centrifugal-pump"
  },
  {
    name: "OMC-HM650 HIGH-MOUNT HORIZONTAL CENTRIFUGAL PUMP",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg",
    link: "/products/omr-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump"
  },
  {
    name: "OMC-SR750 SLURRY-RESISTANT HORIZONTAL CENTRIFUGAL PUMP",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg",
    link: "/products/omr-centrifugal-pumps/omc-sr750-slurry-resistant-horizontal-centrifugal-pump"
  },
  {
    name: "OMT-VS150 VISCOUS HANDLING SINGLE SCREW PUMP",
    image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/9pvb-1.jpg",
    link: "/products/screw-pumps/omt-vs150-viscous-handling-single-screw-pump"
  },
  {
    name: "OMD-MS250 SEALLESS MAGNETIC DRIVE PUMP",
    image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/12pvb-1.jpg",
    link: "/products/magnetic-drive-pumps/omd-ms250-sealless-magnetic-drive-pump"
  },
  {
    name: "OMW-VS800 MULTISTAGE VERTICAL CENTRIFUGAL PUMP",
    image: "https://omrontechpumps.com/sitepad-data/uploads/2025/12/11pvb-1.jpg",
    link: "/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump"
  },
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Categories Section */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Product Categories</h2>
            <div className="h-px flex-grow mx-8 bg-slate-200 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
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
                  <p className="text-slate-600 mb-6 line-clamp-3">{category.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {category.products.slice(0, 3).map((product, pIdx) => (
                      <Link key={pIdx} href={product.href} className="flex flex-col items-center text-center group/item">
                        <div className="relative w-full aspect-square bg-slate-50 border border-slate-100 rounded-lg overflow-hidden mb-2">
                          <Image src={product.image} alt={product.name} fill className="object-contain p-2 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-500 line-clamp-2 uppercase">{product.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href={category.href} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                      Explore Category <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
            <div className="h-px flex-grow mx-8 bg-slate-200 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, idx) => (
              <Link
                key={idx}
                href={product.link}
                className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col sm:flex-row hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full sm:w-48 h-48 bg-white flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 uppercase">
                    {product.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold flex items-center">
                    View Details <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white mt-12">
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
