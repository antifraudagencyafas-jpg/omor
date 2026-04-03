import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to protecting your privacy and ensuring your personal information is handled safely and responsibly.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/20250122170452478778_mt4egy.webp"
            alt="Privacy Policy Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
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
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition-colors border-b border-gray-200"
                    >
                      FAQ
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white font-medium transition-colors border-b border-gray-200"
                    >
                      Privacy Policy
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition-colors"
                    >
                      Terms of Service
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/4">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-200 flex items-center">
                <ShieldCheck className="w-8 h-8 text-blue-600 mr-3" />
                Privacy Policy
              </h2>

              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p>
                  At Omron Tech Pumps, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website or interact with our services.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information Collection</h3>
                <p>
                  We collect information from you when you visit our site, fill out a contact form, or request information about our products. This may include your name, email address, phone number, company name, and any other details you provide in your messages.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use of Information</h3>
                <p>
                  Any information we collect from you may be used in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To personalize your experience and better respond to your individual needs.</li>
                  <li>To improve our website based on the information and feedback we receive from you.</li>
                  <li>To provide you with information about our products, services, and technical support.</li>
                  <li>To process transactions or respond to inquiries.</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Information Protection</h3>
                <p>
                  We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except for trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Cookies</h3>
                <p>
                  Our website may use cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser (if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize your browser and capture and remember certain information.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Your Rights</h3>
                <p>
                  You have the right to request access to the personal information we hold about you, to request that we correct any inaccuracies, and to request that we delete your personal information where it is no longer necessary for the purposes for which it was collected.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h3>
                <p>
                  If there are any questions regarding this privacy policy, you may contact us using the information below:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900">Omron Tech Pumps</p>
                  <div className="space-y-1">
                    <p>Turkey: sales@omrontechpumps.nl</p>
                    <p>USA: operations@omrontechpumps.com</p>
                    <p>Netherlands: export@omrontechpumps.com</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-500 italic">Website: www.omrontechpumps.nl</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
