"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/assets/cloudinary/20250320141352135874_1_ivmu32.webp",
  "/assets/cloudinary/20250319084500382198_1_pfbco3.webp",
  "/assets/cloudinary/20250319085506860625_1_xyu8bs.webp"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] w-full flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Advanced industrial pump solutions for ${index === 0 ? "oil & gas" : index === 1 ? "petrochemical" : "water treatment"} industries - Slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
            Global Manufacturer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Advanced Industrial <br className="hidden md:block" />
            <span className="text-blue-500">Pump Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Reliable high-performance pumps for oil & gas, petrochemical, power generation and water treatment industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors text-center shadow-lg shadow-blue-600/30"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded hover:bg-white/20 transition-colors text-center backdrop-blur-sm border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
