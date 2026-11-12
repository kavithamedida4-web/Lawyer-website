import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | UK Law Firm — Hyderabad',
  description: 'The requested page could not be found. Return to UK Law Firm home page or browse practice areas.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />

      <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 text-center max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-1.5 bg-[#faecd1] text-[#916b1f] border border-[#ebd8ad] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
          <span>⚖️</span>
          <span>404 — PAGE NOT FOUND</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-[#0a1222] tracking-tight mb-4">
          4<span className="text-[#b38634]">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#0a1222] mb-3">
          Case File Not Found
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The page or legal resource you are looking for does not exist, has been moved, or is under judicial archive.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>← Return to Home</span>
          </Link>
          <Link
            href="/#services"
            className="bg-[#faf7f2] hover:bg-[#faecd1] text-[#0a1222] border border-[#d8b577] px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
          >
            <span>Browse Practice Areas</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

