export default function SendInquiry() {
  return (
    <section id="inquiry" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
          GET A FREE QUOTE
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
          For inquiries about TIP centrifugal pumps, screw pumps, single suction twin screw pump or price list, please leave your details and we will be in touch within 24 hours.
        </p>
        <div className="text-gray-400 mb-10 space-y-2">
          <p>Email: <a href="mailto:sales@omrontechpumps.com" className="text-blue-400 hover:underline">sales@omrontechpumps.com</a> | Phone: <a href="tel:+902129008553" className="text-blue-400 hover:underline">+90 212 900 85 53</a></p>
          <p>Tunuslu Mahmut Pasa Cd. No: 10 Burhaniye, 34676 Uskudar/Istanbul, Turkiye</p>
        </div>
        
        <form className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input 
              type="text" 
              placeholder="Name *" 
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email *" 
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
          <div className="mb-6">
            <textarea 
              placeholder="Message *" 
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
            ></textarea>
          </div>
          <button 
            type="button"
            className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 uppercase tracking-widest text-sm"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
