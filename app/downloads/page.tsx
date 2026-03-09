import Link from "next/link";
import Image from "next/image";
import { Download, FileText, FileArchive, FileImage } from "lucide-react";

export default function DownloadsPage() {
  const downloads = [
    {
      category: "Product Catalogs",
      items: [
        { name: "Centrifugal Pumps Full Catalog 2026", size: "12.4 MB", type: "pdf", icon: FileText },
        { name: "Twin Screw Pumps Technical Specs", size: "8.1 MB", type: "pdf", icon: FileText },
        { name: "Magnetic Drive Pumps Overview", size: "5.2 MB", type: "pdf", icon: FileText },
      ]
    },
    {
      category: "Operation Manuals",
      items: [
        { name: "API 610 Pump Installation Guide", size: "4.5 MB", type: "pdf", icon: FileText },
        { name: "Vertical Multistage Pump Maintenance Manual", size: "6.8 MB", type: "pdf", icon: FileText },
        { name: "Troubleshooting Guide for Industrial Pumps", size: "3.2 MB", type: "pdf", icon: FileText },
      ]
    },
    {
      category: "Certificates & Compliance",
      items: [
        { name: "ISO 9001:2015 Certification", size: "1.1 MB", type: "pdf", icon: FileText },
        { name: "CE Declaration of Conformity", size: "0.8 MB", type: "pdf", icon: FileText },
        { name: "API Compliance Certificates", size: "2.4 MB", type: "zip", icon: FileArchive },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/20250122170452478778_mt4egy.webp"
            alt="Downloads Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Downloads</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Access our product catalogs, technical specifications, operation manuals, and certification documents.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-16">
          {downloads.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <div key={itemIdx} className="bg-white border border-slate-200 rounded-xl p-6 flex items-start hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-4">
                          {item.type.toUpperCase()} • {item.size}
                        </p>
                        <button className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </main>
  );
}
