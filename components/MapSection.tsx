"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const locations = [
  {
    id: "turkey",
    name: "Turkey Office",
    address: "Tunuslu Mahmut Pasa Cd. No: 10, Burhaniye, 34676, Uskudar/Istanbul, Turkiye",
    mapUrl: "https://maps.google.com/maps?q=Tunuslu%20Mahmut%20Pasa%20Cd.%20No:%2010%20Burhaniye%2034676%20Uskudar%20Istanbul%20Turkiye&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "netherlands",
    name: "European HQ",
    address: "Wegalaan 67-69, 2132 JD, Hoofddorp, Netherlands",
    mapUrl: "https://maps.google.com/maps?q=Wegalaan%2067-69%202132%20JD%20Hoofddorp%20Netherlands&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "usa",
    name: "Corporate HQ",
    address: "2895 Greenspoint Parkway, Suite 200, Hoffman Estates, IL 60169, USA",
    mapUrl: "https://maps.google.com/maps?q=2895%20Greenspoint%20Parkway%20Suite%20200%20Hoffman%20Estates%20IL%2060169%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];

export default function MapSection() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            Find Us Locally
          </h2>
          <div className="w-20 h-1 bg-[#ff6600] mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Visit one of our global offices to discuss your industrial pumping needs in person.
          </p>
        </div>

        {/* Location Selectors */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all font-medium text-sm uppercase tracking-wider ${
                activeLocation.id === loc.id
                  ? "bg-[#ff6600] text-white shadow-lg shadow-orange-600/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <MapPin className={`w-4 h-4 ${activeLocation.id === loc.id ? "text-white" : "text-[#ff6600]"}`} />
              <span>{loc.name}</span>
            </button>
          ))}
        </div>

        {/* Map Container */}
        <div className="relative h-[500px] w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <iframe
                src={activeLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </AnimatePresence>

          {/* Address Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-slate-200 shadow-2xl z-10">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#ff6600]/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-5 h-5 text-[#ff6600]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{activeLocation.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{activeLocation.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#ff6600] font-bold text-xs uppercase tracking-widest hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
