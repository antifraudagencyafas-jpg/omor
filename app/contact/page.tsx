import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our global offices in Turkey, Netherlands, and USA for industrial pump solutions and support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-32 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/20250122170452478778_mt4egy.webp"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h1>
          <div className="w-24 h-1 bg-[#ff6600] mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Have questions about our industrial pump solutions? Our team of experts is here to help you find the perfect match for your application.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Details Side */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-[#ff6600] pl-4 uppercase tracking-tight">
                  Our Global Offices
                </h2>

                <div className="space-y-12">
                  {/* Turkey Office */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-200 pb-2">Turkey Office</h3>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="text-slate-600 leading-relaxed">
                          Tunuslu Mahmut Pasa Cd. No: 10<br />
                          Burhaniye, 34676<br />
                          Uskudar/Istanbul, Turkiye
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="text-slate-600">+90 212 900 85 53</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="text-slate-600">sales@omrontechpumps.nl</p>
                      </div>
                    </div>
                  </div>

                  {/* European Headquarters */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-200 pb-2">European Headquarters</h3>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 mb-1">OMRON Tech Pumps</p>
                        <p className="text-slate-600 leading-relaxed">
                          Wegalaan 67-69, 2132 JD<br />
                          Hoofddorp, Netherlands
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="text-slate-600">+3197010238786</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="text-slate-600">export@omrontechpumps.nl</p>
                      </div>
                    </div>
                  </div>

                  {/* Corporate Headquarters */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide border-b border-slate-200 pb-2">Corporate Headquarters</h3>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 mb-1">OMRON Technology</p>
                        <p className="text-slate-600 leading-relaxed">
                          2895 Greenspoint Parkway, Suite 200<br />
                          Hoffman Estates, IL 60169, USA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="text-slate-600">+1 (217) 604-7442</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#ff6600]" />
                      </div>
                      <div>
                        <p className="text-slate-600">operations@omrontechpumps.nl</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-[#ff6600] pl-4 uppercase tracking-tight">
                  Business Hours
                </h2>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#ff6600]" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between w-48 text-sm">
                      <span className="font-medium text-slate-700">Mon - Fri:</span>
                      <span className="text-slate-600">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between w-48 text-sm">
                      <span className="font-medium text-slate-700">Saturday:</span>
                      <span className="text-slate-600">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between w-48 text-sm text-red-500 font-medium">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-[#ff6600] pl-4 uppercase tracking-tight">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </main>
  );
}
