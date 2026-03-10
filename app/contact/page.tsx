import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

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
                  Direct Contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#ff6600]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Office Location</h3>
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
                      <h3 className="font-bold text-slate-800 mb-1">Phone Number</h3>
                      <p className="text-slate-600">+90 212 900 85 53</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#ff6600]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Email Address</h3>
                      <p className="text-slate-600">sales@omrontechpumps.com</p>
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

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative grayscale">
        <div className="absolute inset-0 flex items-center justify-center">
           <p className="text-slate-500 font-medium">[ Interactive Map Integration ]</p>
        </div>
      </section>
    </main>
  );
}
