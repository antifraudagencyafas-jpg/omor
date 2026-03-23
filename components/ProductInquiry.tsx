import ContactForm from "./ContactForm";

export default function ProductInquiry() {
  return (
    <section id="product-inquiry" className="mt-24 pt-16 border-t border-slate-200">
      <div className="max-w-4xl mx-auto mb-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
          INQUIRE ABOUT THIS PRODUCT
        </h2>
        <div className="w-20 h-1 bg-[#ff6600] mx-auto mb-8"></div>
        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Need more information, technical specifications, or a custom quote? Please fill out the form below and our team of experts will contact you shortly.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
