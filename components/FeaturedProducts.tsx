"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const placeholderProducts = [
  { 
    name: "OMC-HM650 HORIZONTALE CENTRIFUGAALPOMP (HOGE MONTAGE)",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg",
    materials: "Roestvrij staal 316, Duplex roestvrij staal, Titanium",
    dimensions: "1200mm x 800mm x 2100mm",
    performance: "Debiet tot 500 m³/u, Opvoerhoogte tot 250m",
    link: "/products/omr-centrifugal-pumps/omc-hm650-high-mount-horizontal-centrifugal-pump"
  },
  { 
    name: "OMC-SR750 HORIZONTALE CENTRIFUGAALPOMP",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg",
    materials: "Koolstofstaal, Roestvrij staal 316, Legering 20",
    dimensions: "1500mm x 900mm x 1100mm",
    performance: "Debiet tot 1200 m³/u, Opvoerhoogte tot 300m",
    link: "/products/omr-centrifugal-pumps/omc-sr750-slurry-resistant-horizontal-centrifugal-pump"
  },
  { 
    name: "OMT-VS150 ENKELVOUDIGE SCHROEFPOMP VOOR VISCOZE VLOEISTOFFEN",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg",
    materials: "Gietijzer, Brons, Roestvrij staal",
    dimensions: "1000mm x 600mm x 800mm",
    performance: "Debiet tot 300 m³/u, Opvoerhoogte tot 150m",
    link: "/products/screw-pumps/omt-vs150-viscous-handling-single-screw-pump"
  },
  { 
    name: "OMT-GP200 ENKELVOUDIGE SCHROEFPOMP VOOR ALGEMENE DOELEINDEN",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/11pvb-1_muod94.jpg",
    materials: "Gietijzer, Koolstofstaal, Roestvrij staal",
    dimensions: "1800mm x 700mm x 900mm",
    performance: "Debiet tot 2000 m³/u, Druk tot 100 bar",
    link: "/products/screw-pumps/omt-gp200-general-purpose-single-screw-pump"
  },
  { 
    name: "OMD-MS250 ASLOZE MAGNEETGEKOPPELDE POMP",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068034/smmm_otfbm0.jpg",
    materials: "Polypropyleen, ETFE, PFA-gevoerd",
    dimensions: "800mm x 400mm x 600mm",
    performance: "Debiet tot 100 m³/u, Opvoerhoogte tot 80m",
    link: "/products/magnetic-drive-pumps/omd-ms250-sealless-magnetic-drive-pump"
  },
  { 
    name: "OMW-VS800 MEERTRAPS VERTICALE CENTRIFUGAALPOMP",
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068082/12pvb-1_yb8ggy.jpg",
    materials: "PTFE, PVDF, Hastelloy",
    dimensions: "900mm x 500mm x 700mm",
    performance: "Debiet tot 150 m³/u, Opvoerhoogte tot 100m",
    link: "/products/water-pumps/omw-vs800-multistage-vertical-centrifugal-pump"
  },
];

export default function FeaturedProducts() {
  // BOLT: Removed artificial 1.5s loading delay to improve Time to Interactive (TTI)
  // Also changed to direct use of placeholderProducts instead of useState since data is static.
  const [selectedProduct, setSelectedProduct] = useState<typeof placeholderProducts[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004b9a] mb-4">Aanbevolen Producten</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Ontdek ons assortiment hoogwaardige industriële pompen, ontworpen voor betrouwbaarheid en efficiëntie.
          </p>
        </div>

        <div className="relative flex items-center group/slider">
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft}
              className="absolute -left-4 md:-left-12 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#004b9a] hover:border-[#004b9a] shadow-sm hidden md:flex transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div 
              ref={scrollContainerRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full pb-4 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {placeholderProducts.map((product, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start shrink-0 bg-[#f8f9fa] flex flex-col cursor-pointer group border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image Container */}
                  <div className="bg-white relative h-64 w-full flex items-center justify-center p-6 border-b border-gray-100">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[#004b9a] font-black italic tracking-wider text-sm">OMRONTECH</span>
                    </div>
                    <Image
                      src={product.image}
                      alt={`Featured product: ${product.name} - High-performance industrial pump`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-slate-700 font-medium leading-snug mb-6 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="mt-auto">
                      <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 group-hover:border-[#004b9a] group-hover:text-[#004b9a] transition-colors shadow-sm">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Arrow */}
            <button 
              onClick={scrollRight}
              className="absolute -right-4 md:-right-12 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#004b9a] hover:border-[#004b9a] shadow-sm hidden md:flex transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded hover:bg-slate-800 transition-colors"
          >
            Bekijk Alle Producten
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-1/2 bg-slate-50 p-8 flex items-center justify-center min-h-[300px] relative">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-8 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded mb-4">
                  Productspecificatie
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  {selectedProduct.name}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Materialen</h4>
                    <p className="text-slate-600">{selectedProduct.materials}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Afmetingen</h4>
                    <p className="text-slate-600">{selectedProduct.dimensions}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Prestatiecurves</h4>
                    <p className="text-slate-600">{selectedProduct.performance}</p>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
                  <Link 
                    href={selectedProduct.link} 
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-white border border-blue-600 text-blue-600 text-center py-3 rounded font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Details Bekijken
                  </Link>
                  <Link 
                    href="/inquiry" 
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Offerte Aanvragen
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
