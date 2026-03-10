import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/2025012217043446170_asdp7c.webp"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our team of industrial pump experts is ready to assist you. Get in touch today for product inquiries, technical support, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form (LEO Pump Style) */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div className="flex flex-wrap gap-6 mb-8">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="request_type" className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Request about product/service</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="request_type" className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Become a distributor</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name *"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email *"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="text" 
                    placeholder="Country"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <textarea 
                    placeholder="Message *"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-2 italic">The more info you message, the quicker Omron Tech Pumps team arrange for feedback</p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-[#00529b] hover:bg-[#00427c] text-white font-bold py-4 px-12 rounded transition-colors uppercase tracking-widest text-sm"
                  >
                    Get Started
                  </button>
                </div>

                <p className="text-xs text-gray-400 mt-8 leading-relaxed">
                  The info you submit will be shared with the relevant departments in Omron Tech Pumps and its group companies to handle your requests. We ensure that your info is only used to address your inquiries.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              <div className="space-y-8">
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      <a href="tel:+902129008553" className="hover:text-blue-600 transition-colors">+90 212 900 85 53</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      <a href="mailto:sales@omrontechpumps.com" className="hover:text-blue-600 transition-colors">sales@omrontechpumps.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Address</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Tunuslu Mahmut Pasa Cd. No: 10<br />
                      Burhaniye, 34676<br />
                      Uskudar/Istanbul, Turkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Business Hours</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1583594874094!2d29.043322!3d41.021156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab82955555555%3A0x8888888888888888!2sBurhaniye%2C%20Tunuslu%20Mahmut%20Pa%C5%9Fa%20Cd.%20No%3A10%2C%2034676%20%C3%9Csk%C3%BCdar%2F%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2str!4v1710000000000!5m2!1sen!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
