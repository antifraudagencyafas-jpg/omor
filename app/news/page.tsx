import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getNewsItems } from "@/lib/news";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Stay updated with the latest company news, industry developments, and technical innovations from Omron Tech Pumps.',
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

const ITEMS_PER_PAGE = 10;

export default async function NewsPage({ searchParams }: Props) {
  const allNewsItems = await getNewsItems();
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);

  const totalItems = allNewsItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const currentItems = allNewsItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Generate pagination range
  const getPageRange = () => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const pageRange = getPageRange();

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/cloudinary/2025012217051166860_jvtran.webp"
            alt="News Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">News</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are glad to share with you about the results of our work, company news, and give you timely developments and personnel appointment and removal conditions.
          </p>
        </div>
      </section>

      {/* Tabs & News List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center md:justify-start space-x-8 border-b border-slate-200 mb-12">
            <Link href="/news" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-4 -mb-[1px]">
              Company News
            </Link>
            <Link href="/news" className="text-slate-600 font-medium hover:text-blue-600 transition-colors pb-4 -mb-[1px]">
              Industry News
            </Link>
          </div>

          {/* News List */}
          <div className="space-y-8 min-h-[600px]">
            {currentItems.map((item, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                {/* Image */}
                <div className="w-full md:w-1/4 relative min-h-[200px] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-3/4 p-6 md:p-8 flex flex-col justify-center relative">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* Date Badge */}
                    <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-lg p-4 min-w-[100px] text-center">
                      <span className="text-3xl font-bold text-blue-600 leading-none mb-1">{item.dateDay}</span>
                      <span className="text-sm text-slate-500 font-medium">{item.dateMonthYear}</span>
                    </div>

                    {/* Text */}
                    <div className="flex-grow pr-8">
                      <Link href={item.link} className="block group-hover:text-blue-600 transition-colors">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 line-clamp-2">
                          {item.title}
                        </h2>
                      </Link>
                      <p className="text-slate-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Navigation */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-2">
              <Link
                href={`/news?page=${Math.max(1, currentPage - 1)}`}
                className={`w-10 h-10 flex items-center justify-center rounded border border-slate-200 transition-colors ${
                  currentPage === 1 ? "pointer-events-none text-slate-300" : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>

              {pageRange.map((page, idx) => (
                typeof page === "number" ? (
                  <Link
                    key={idx}
                    href={`/news?page=${page}`}
                    className={`w-10 h-10 flex items-center justify-center rounded font-medium transition-all ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-sm"
                        : "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    {page}
                  </Link>
                ) : (
                  <span key={idx} className="px-2 text-slate-500">
                    {page}
                  </span>
                )
              ))}

              <Link
                href={`/news?page=${Math.min(totalPages, currentPage + 1)}`}
                className={`w-10 h-10 flex items-center justify-center rounded border border-slate-200 transition-colors ${
                  currentPage === totalPages ? "pointer-events-none text-slate-300" : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
