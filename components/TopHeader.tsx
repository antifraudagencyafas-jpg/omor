import { Phone, Mail, Globe } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-blue-600 text-white text-sm py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center z-50 relative">
      <div className="flex items-center space-x-6 mb-2 sm:mb-0">
        <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
          <Phone className="w-4 h-4 text-white" />
          <span>+3197010238786</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <Mail className="w-4 h-4 text-white" />
            <span className="font-semibold text-xs uppercase tracking-tight text-blue-100 mr-1">TR:</span>
            <span>sales@omrontechpumps.nl</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <Mail className="w-4 h-4 text-white" />
            <span className="font-semibold text-xs uppercase tracking-tight text-blue-100 mr-1">USA:</span>
            <span>operations@omrontechpumps.com</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <Mail className="w-4 h-4 text-white" />
            <span className="font-semibold text-xs uppercase tracking-tight text-blue-100 mr-1">NL:</span>
            <span>export@omrontechpumps.com</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
        <Globe className="w-4 h-4 text-white" />
        <span>Language (EN)</span>
      </div>
    </div>
  );
}
