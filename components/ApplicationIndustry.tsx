import Image from "next/image";

const industries = [
  { name: "Power Generation", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773046009/1-44182_ddco8y.webp" },
  { name: "Petrochemical", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773046010/3-404688_dk1ifc.webp" },
  { name: "Oil & Gas", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773046009/2-295272_xgrn0a.webp" },
  { name: "Paper Industry", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773046010/4-863873_z5s8kq.webp" },
  { name: "Steel Industry", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773046010/5-2344_r1x7tx.webp" },
  { name: "Marine", image: "https://res.cloudinary.com/dccvdkffu/image/upload/v1773046009/6-84758_moxf17.webp" },
];

export default function ApplicationIndustry() {
  return (
    <section className="py-20 bg-gray-50" id="applications">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Application Industry</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Our pumps are designed to meet the rigorous demands of various industrial applications worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-blue-600 p-4 transform translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg text-center">{industry.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
