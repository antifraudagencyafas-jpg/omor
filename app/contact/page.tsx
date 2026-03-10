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
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 mb-8">Welcome to use our contact form for your inquiry. Omron Tech Pumps will contact you ASAP.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Request types</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="Request" name="requestType" value="Request" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                      <label htmlFor="Request" className="ml-2 text-sm text-slate-700 font-medium">Request about product/service</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="Become" name="requestType" value="Become" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                      <label htmlFor="Become" className="ml-2 text-sm text-slate-700 font-medium">Become a distributor</label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">* Name :</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company :</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">* E-mail :</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">* Phone Number :</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Country :</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">* Message :</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="The more info you message, the quicker Omron Tech Pumps team arrange for feedback"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 uppercase tracking-wide"
                >
                  Get Started
                </button>

                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  In order to respond to inquiries received, we may provide your information to our domestic and overseas group companies.
                  You agree with the above notes once you click &apos;Get Started&apos;.
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
    </main>
  );
}
