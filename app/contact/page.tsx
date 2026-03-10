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
            
            {/* Contact Form (LEO Pump Exact Format) */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-700 mb-4">Request types</p>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" id="Request" name="infp" value="Request" className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Request about product/service</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" id="Become" name="infp" value="Become" className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Become a distributor</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="w-32 text-sm font-bold text-gray-700">* Name :</span>
                    <input 
                      type="text" 
                      required
                      className="flex-1 px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="w-32 text-sm font-bold text-gray-700">Company :</span>
                    <input
                      type="text"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="w-32 text-sm font-bold text-gray-700">* E-mail :</span>
                    <input 
                      type="email" 
                      required
                      className="flex-1 px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="w-32 text-sm font-bold text-gray-700">* Phone Number :</span>
                    <input
                      type="tel"
                      required
                      className="flex-1 px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="w-32 text-sm font-bold text-gray-700">Country :</span>
                    <input
                      type="text"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <span className="w-32 text-sm font-bold text-gray-700 mt-3">* Message :</span>
                    <textarea
                      placeholder="The more info you message, the quicker Omron Tech Pumps team arrange for feedback"
                      required
                      rows={4}
                      className="flex-1 px-4 py-3 border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold py-4 px-12 rounded transition-colors uppercase tracking-widest text-sm"
                  >
                    Get Started
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-8 leading-relaxed">
                  In order to respond to inquiries received, we may provide your information to our domestic and overseas group companies. You agree with the above notes once you click ‘Get Started’.
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
