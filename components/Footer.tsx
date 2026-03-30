import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-20 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
              <Image
                src="/logo.png"
                alt="Omron Tech Pumps Logo"
                width={300}
                height={100}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Global leader in advanced industrial pump solutions, providing reliable high-performance equipment for the most demanding applications worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-blue-500 transition-colors">Products</Link></li>
              <li><Link href="/news" className="text-slate-400 hover:text-blue-500 transition-colors">News</Link></li>
              <li><Link href="/downloads" className="text-slate-400 hover:text-blue-500 transition-colors">Downloads</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/omr-centrifugal-pumps" className="text-slate-400 hover:text-blue-500 transition-colors">OMR Centrifugal Pumps</Link></li>
              <li><Link href="/products/screw-pumps" className="text-slate-400 hover:text-blue-500 transition-colors">Screw Pumps</Link></li>
              <li><Link href="/products/magnetic-drive-pumps" className="text-slate-400 hover:text-blue-500 transition-colors">Magnetic Drive Pumps</Link></li>
              <li><Link href="/products/omr-centrifugal-pumps" className="text-slate-400 hover:text-blue-500 transition-colors">Chemical Process Pumps</Link></li>
              <li><Link href="/products/water-pumps" className="text-slate-400 hover:text-blue-500 transition-colors">Vertical Pumps</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-6">
              {/* TR Office */}
              <ul className="space-y-3">
                <li className="text-xs font-bold text-blue-500 uppercase tracking-widest">Turkey Office</li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Tunuslu Mahmut Pasa Cd. No: 10, Uskudar/istanbul</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">+90 212 900 85 53</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">sales@omrontechpumps.com</span>
                </li>
              </ul>

              {/* EU HQ */}
              <ul className="space-y-3">
                <li className="text-xs font-bold text-blue-500 uppercase tracking-widest">European HQ</li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Wegalaan 67-69, 2132 JD Hoofddorp, Netherlands</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">+3197010238786</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">nl.sales@omrontechpumps.com</span>
                </li>
              </ul>

              {/* US HQ */}
              <ul className="space-y-3">
                <li className="text-xs font-bold text-blue-500 uppercase tracking-widest">Corporate HQ</li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">2895 Greenspoint Parkway, Hoffman Estates, IL 60169</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">+1 (575) 3336-629</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">operations@omrontechpumps.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OmronTechPumps. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
