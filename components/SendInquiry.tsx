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
        
        <form className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl text-left">
          <div className="mb-6">
            <p className="text-sm font-bold text-white mb-4">Request types</p>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" id="RequestInq" name="infp" value="Request" className="w-5 h-5 border-white/20 bg-white/10 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors">Request about product/service</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" id="BecomeInq" name="infp" value="Become" className="w-5 h-5 border-white/20 bg-white/10 text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors">Become a distributor</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="w-32 text-sm font-bold text-gray-300">* Name :</span>
              <input
                type="text"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="w-32 text-sm font-bold text-gray-300">Company :</span>
              <input
                type="text"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="w-32 text-sm font-bold text-gray-300">* E-mail :</span>
              <input
                type="email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="w-32 text-sm font-bold text-gray-300">* Phone Number :</span>
              <input
                type="tel"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="w-32 text-sm font-bold text-gray-300">Country :</span>
              <input
                type="text"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <span className="w-32 text-sm font-bold text-gray-300 mt-3">* Message :</span>
              <textarea
                placeholder="The more info you message, the quicker Omron Tech Pumps team arrange for feedback"
                required
                rows={4}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="w-full md:w-auto px-10 py-4 bg-[#ff6600] text-white font-bold rounded hover:bg-[#e65c00] transition-colors shadow-lg shadow-orange-600/30 uppercase tracking-widest text-sm"
            >
              Get Started
            </button>
          </div>

          <p className="text-[10px] text-gray-500 mt-8 leading-relaxed">
            In order to respond to inquiries received, we may provide your information to our domestic and overseas group companies. You agree with the above notes once you click ‘Get Started’.
          </p>
        </form>
      </div>
    </section>
  );
}
