import { MessageCircle, Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col space-y-4 z-50">
      <a 
        href="https://wa.me/902129008553" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>
      
      <a 
        href="mailto:sales@omrontechpumps.com" 
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 group relative"
      >
        <Mail className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Email Us
        </span>
      </a>
    </div>
  );
}
