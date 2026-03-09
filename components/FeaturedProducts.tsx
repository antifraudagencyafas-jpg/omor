"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const placeholderProducts = [
  { 
    name: "TIP9AQ2KX HIGH MOUNT HORIZONTAL CENTRIFUGAL PUMPS", 
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068035/1pvb_owmqqf.jpg",
    materials: "Stainless Steel 316, Duplex Stainless Steel, Titanium",
    dimensions: "1200mm x 800mm x 2100mm",
    performance: "Flow rate up to 500 m³/h, Head up to 250m",
    link: "/product/tipcentrifugalpumps/tip9aq2kx"
  },
  { 
    name: "TIP7RKC9X4 HORIZONTAL CENTRIFUGAL PUMP", 
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068037/5pvb-1_u8up3x.jpg",
    materials: "Carbon Steel, Stainless Steel 316, Alloy 20",
    dimensions: "1500mm x 900mm x 1100mm",
    performance: "Flow rate up to 1200 m³/h, Head up to 300m",
    link: "/product/tipcentrifugalpumps"
  },
  { 
    name: "OTT SINGLE SCREW PUMPS", 
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068038/10pvb-1_azicqu.jpg",
    materials: "Cast Iron, Bronze, Stainless Steel",
    dimensions: "1000mm x 600mm x 800mm",
    performance: "Flow rate up to 300 m³/h, Head up to 150m",
    link: "/product/screwpumps"
  },
  { 
    name: "GPT7MQL8 GPT SINGLE SCREW PUMPS", 
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068081/11pvb-1_muod94.jpg",
    materials: "Cast Iron, Carbon Steel, Stainless Steel",
    dimensions: "1800mm x 700mm x 900mm",
    performance: "Flow rate up to 2000 m³/h, Pressure up to 100 bar",
    link: "/product/screwpumps"
  },
  { 
    name: "MIPA9X2K MAGNETIC PUMP", 
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068034/smmm_otfbm0.jpg",
    materials: "Polypropylene, ETFE, PFA lined",
    dimensions: "800mm x 400mm x 600mm",
    performance: "Flow rate up to 100 m³/h, Head up to 80m",
    link: "/product/magnetic-drive-pump"
  },
  { 
    name: "OWP35HFR MULTISTAGE VERTICAL CENTRIFUGAL PUMPS", 
    image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773068082/12pvb-1_yb8ggy.jpg",
    materials: "PTFE, PVDF, Hastelloy",
    dimensions: "900mm x 500mm x 700mm",
    performance: "Flow rate up to 150 m³/h, Head up to 100m",
    link: "/product/water-pumps"
  },
];

export default function FeaturedProducts() {
  const [products, setProducts] = useState<typeof placeholderProducts>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<typeof placeholderProducts[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setProducts(placeholderProducts);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
          <h2 className="text-3xl md:text-4xl font-bold text-[#004b9a] mb-4">Featured Products</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our range of high-performance industrial pumps engineered for reliability and efficiency.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-[#004b9a] animate-spin" />
          </div>
        ) : (
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
              {products.map((product, index) => (
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
                      alt={product.name}
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
        )}
        
        <div className="mt-12 text-center">
          <Link
            href="/product"
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded hover:bg-slate-800 transition-colors"
          >
            View All Products
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
                  Product Specification
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  {selectedProduct.name}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Materials</h4>
                    <p className="text-slate-600">{selectedProduct.materials}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Dimensions</h4>
                    <p className="text-slate-600">{selectedProduct.dimensions}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">Performance Curves</h4>
                    <p className="text-slate-600">{selectedProduct.performance}</p>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
                  <Link 
                    href={selectedProduct.link} 
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-white border border-blue-600 text-blue-600 text-center py-3 rounded font-semibold hover:bg-blue-50 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    href="/inquiry" 
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Quote
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
