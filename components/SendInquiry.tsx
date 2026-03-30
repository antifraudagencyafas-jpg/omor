import ContactForm from "./ContactForm";

export default function SendInquiry() {
  return (
    <section id="inquiry" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
          GET A FREE QUOTE
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
          For inquiries about OMC centrifugal pumps, screw pumps, or single suction twin screw pump, please leave your details and we will be in touch within 24 hours.
        </p>
        <div className="text-gray-400 mb-12 space-y-2">
          <p>Email: <a href="mailto:sales@omrontechpumps.nl" className="text-blue-400 hover:underline">sales@omrontechpumps.nl</a></p>
        </div>
        
        <div className="text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
