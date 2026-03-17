import Link from "next/link";
import Image from "next/image";
import { ChevronRight, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dccvdkffu/image/upload/v1773056911/20250122170502393543_klwhny.webp"
            alt="Terms of Service Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
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
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition-colors border-b border-gray-200"
                    >
                      Privacy Policy
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white font-medium transition-colors"
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
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                Terms of Service
              </h2>

              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p>
                  Welcome to the Omron Tech Pumps website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Agreement</h3>
                <p>
                  You agree to the terms and conditions outlined in this Terms of Service Agreement with respect to our site. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties and understandings with respect to the Site.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Intellectual Property</h3>
                <p>
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Use of Information</h3>
                <p>
                  We reserve the right, and you authorize us, to the use and assignment of all information regarding Site uses by you and all information provided by you in any manner consistent with our Privacy Policy.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Indemnification</h3>
                <p>
                  You agree to indemnify, defend and hold us and our partners, attorneys, staff and affiliates harmless from any liability, loss, claim and expense, including reasonable attorney&apos;s fees, related to your violation of this Agreement or use of the Site.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Disclaimer</h3>
                <p>
                  THE INFORMATION FROM OR THROUGH THE SITE ARE PROVIDED &quot;AS-IS,&quot; &quot;AS AVAILABLE,&quot; AND ALL WARRANTIES, EXPRESS OR IMPLIED, ARE DISCLAIMED. THE INFORMATION AND SERVICES MAY CONTAIN BUGS, ERRORS, PROBLEMS OR OTHER LIMITATIONS.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h3>
                <p>
                  We and our affiliated parties have no liability whatsoever for your use of any information or service. In particular, but not as a limitation thereof, we and our affiliated parties are not liable for any indirect, special, incidental or consequential damages.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Governing Law</h3>
                <p>
                  This Agreement shall be treated as though it were executed and performed in the jurisdiction where our headquarters are located, and shall be governed by and construed in accordance with the laws of that jurisdiction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
