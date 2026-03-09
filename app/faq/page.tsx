import Link from "next/link";
import Image from "next/image";
import { ChevronRight, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    { q: "Can you send your staff to install the equipment for us?", a: "Yes ,we can." },
    { q: "Can I only buy some spare parts from you?", a: "Yes,you can." },
    { q: "Will you will attend the fair to show your products?", a: "Yes, we attend ADIPEC each year." },
    { q: "How long it takes you to provide the designing options for us?", a: "We need one week." },
    { q: "What is your products standardization?", a: "API Standard." },
    { q: "Can you can design the equipment according to our size?", a: "Yes, we can design pumps according to our clients' request." },
    { q: "How many years have your company made this kind of equipment?", a: "More than 20 years." },
    { q: "Which certificate do you have for your equipment?", a: "ISO, CE, API,ATEX" },
    { q: "How many staffs do you have in your factory?", a: "About 35." },
    { q: "How can I to be your agent in my country?", a: "We will check confirm your business and performance." },
    { q: "Do you have any agent in our country?", a: "At present there is not agent in your country." },
    { q: "Do you have any real project pictures of the equipment?", a: "Sure, we have." },
    { q: "Where is your factory located?", a: "Our factory is located at Istanbul, Turkey." },
    { q: "Do you provide free spare parts?", a: "Yes, we do, but main spareparts should be paid." },
    { q: "Do you have detailed and professional installation manual?", a: "Yes, we have" },
    { q: "If OEM is acceptable?", a: "NO ACCEPT." },
    { q: "Do you provide sample? Free or charge?", a: "The sample should be charged." },
    { q: "Are you a trading company or a manufacturer?", a: "We are a pump manufacturer." },
    { q: "How long is your delivery time?", a: "It depand on the order details." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/20250122170502393543_klwhny.webp"
            alt="FAQ Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">FAQ</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden sticky top-24">
                <ul className="flex flex-col">
                  <li>
                    <Link 
                      href="/about" 
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition-colors border-b border-gray-200"
                    >
                      Company Profile
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/faq" 
                      className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white font-medium transition-colors"
                    >
                      FAQ
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/4">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-200 flex items-center">
                <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                      <span className="text-blue-600 mr-3 font-black text-xl leading-none">Q.</span>
                      {faq.q}
                    </h3>
                    <div className="text-slate-600 flex items-start pl-8 relative">
                      <span className="text-slate-400 mr-3 font-black text-xl leading-none absolute left-0">A.</span>
                      <p className="leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
