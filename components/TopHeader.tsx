import { Phone, Mail, Globe } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-slate-900 text-gray-300 text-sm py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center z-50 relative">
      <div className="flex items-center space-x-6 mb-2 sm:mb-0">
        <div className="flex items-center space-x-2 hover:text-white transition-colors">
          <Phone className="w-4 h-4 text-blue-500" />
          <span>+90 212 900 85 53</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-white transition-colors">
          <Mail className="w-4 h-4 text-blue-500" />
          <span>sales@omrontechpumps.com</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
        <Globe className="w-4 h-4 text-blue-500" />
        <span>Language (EN)</span>
      </div>
    </div>
  );
}
