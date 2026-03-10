import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { getNewsItems } from "@/lib/news";

export default async function News() {
  const allNews = await getNewsItems();
  const latestNews = allNews.slice(0, 3);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">News</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          <Link href="/news" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8"
          >
            {latestNews.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="group flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded">
                      Company
                    </span>
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.dateDay} {item.dateMonthYear}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <Link href={item.link} className="inline-flex items-center text-blue-600 font-medium hover:underline w-max">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
                <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/news" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
