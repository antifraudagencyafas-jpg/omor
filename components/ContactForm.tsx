"use client";

import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const requestTypes = [
  "Products info",
  "Technical inquiry",
  "Become a distributor",
  "Feedback",
];

export default function ContactForm() {
  const [requestType, setRequestType] = useState("Products info");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwvrdbqw", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        setShowModal(true);
        form.reset();
        setRequestType("Products info");
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          console.error(data["errors"].map((error: any) => error["message"]).join(", "));
        }
        setStatus("error");
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      alert("Oops! There was a problem submitting your form. Please check your connection and try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100"
      >
        <div className="space-y-8">
          {/* Request Type */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="w-full md:w-1/4 font-bold text-slate-800 mb-4 md:mb-0">
              * Request type :
            </label>
            <div className="w-full md:w-3/4 flex flex-wrap gap-6">
              {requestTypes.map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="requestType"
                    value={type}
                    checked={requestType === type}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="w-4 h-4 text-[#ff6600] border-gray-300 focus:ring-[#ff6600]"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-[#ff6600] transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Name */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label htmlFor="name" className="w-full md:w-1/4 font-bold text-slate-800 mb-2 md:mb-0">
              * Name :
            </label>
            <div className="w-full md:w-3/4">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#ff6600] transition-colors"
              />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label htmlFor="company" className="w-full md:w-1/4 font-bold text-slate-800 mb-2 md:mb-0">
              * Company :
            </label>
            <div className="w-full md:w-3/4">
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#ff6600] transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label htmlFor="email" className="w-full md:w-1/4 font-bold text-slate-800 mb-2 md:mb-0">
              * Email :
            </label>
            <div className="w-full md:w-3/4">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#ff6600] transition-colors"
              />
            </div>
          </div>

          {/* Country */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label htmlFor="country" className="w-full md:w-1/4 font-bold text-slate-800 mb-2 md:mb-0">
              * Country :
            </label>
            <div className="w-full md:w-3/4">
              <input
                type="text"
                id="country"
                name="country"
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#ff6600] transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col md:flex-row">
            <label htmlFor="message" className="w-full md:w-1/4 font-bold text-slate-800 mb-2 md:mb-0 pt-2">
              * Message :
            </label>
            <div className="w-full md:w-3/4">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#ff6600] transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          {/* Privacy Disclaimer */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4"></div>
            <div className="w-full md:w-3/4">
              <p className="text-xs text-slate-500 leading-relaxed">
                We respect your privacy. Any information you provide will be kept confidential and used only to respond to your inquiry. By submitting this form, you agree to our privacy policy and terms of use regarding the handling of your data.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col md:flex-row pt-4">
            <div className="md:w-1/4"></div>
            <div className="w-full md:w-3/4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold py-4 px-12 transition-all uppercase tracking-widest text-sm shadow-lg shadow-orange-600/20 flex items-center justify-center min-w-[160px] ${status === "submitting" ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING...
                  </>
                ) : "SUBMIT"}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-8">
                Thank you for your inquiry. Our team has received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold py-3 rounded-lg transition-colors uppercase tracking-wider text-sm shadow-lg shadow-orange-600/10"
              >
                GOT IT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
