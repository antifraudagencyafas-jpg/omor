import Image from "next/image";
import Link from "next/link";
import { getNewsDetail } from "@/lib/news";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/news" className="hover:text-blue-600 transition-colors">News</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium truncate max-w-[200px] md:max-w-md">
              {news.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-3/4 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 md:p-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                {news.title}
              </h1>

              <div className="flex items-center text-slate-500 mb-8 pb-8 border-b border-slate-100">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-medium">{news.date}</span>
              </div>

              <div
                className="prose prose-slate prose-lg max-w-none
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-img:rounded-xl prose-img:shadow-md
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">
                News Catalog
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/news" className="flex items-center text-blue-600 font-medium group">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                    Company News
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors group">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 mr-2 transition-colors"></div>
                    Industry News
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Contact our expert team for more information about our products and services.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
