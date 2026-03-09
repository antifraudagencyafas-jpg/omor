import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-20 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white tracking-tight mb-6">
              <span className="text-blue-500 mr-1">Omron</span>TechPumps
            </div>
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
              <li><Link href="/product" className="text-slate-400 hover:text-blue-500 transition-colors">Products</Link></li>
              <li><Link href="/news" className="text-slate-400 hover:text-blue-500 transition-colors">News</Link></li>
              <li><Link href="/downloads" className="text-slate-400 hover:text-blue-500 transition-colors">Downloads</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Centrifugal Pumps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Twin Screw Pumps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Magnetic Drive Pumps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Chemical Process Pumps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Vertical Pumps</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">Tunuslu Mahmut Pasa Cd. No: 10<br/>Burhaniye, 34676<br/>Uskudar/istanbul, Turkiye</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-400">+90 212 900 85 53</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-slate-400">sales@omrontechpumps.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; 2026 OmronTechPumps. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
