"use client";

import { useState } from "react";

const requestTypes = [
  "Price List",
  "Products info",
  "Technical inquiry",
  "Become a distributor",
  "Feedback",
];

export default function ContactForm() {
  const [requestType, setRequestType] = useState("Price List");

  return (
    <form className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
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
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#ff6600] transition-colors"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="phone" className="w-full md:w-1/4 font-bold text-slate-800 mb-2 md:mb-0">
            * Phone :
          </label>
          <div className="w-full md:w-3/4">
            <input
              type="tel"
              id="phone"
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
              className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold py-4 px-12 transition-colors uppercase tracking-widest text-sm shadow-lg shadow-orange-600/20"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
