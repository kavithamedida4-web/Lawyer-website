import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FullGallery from '@/components/FullGallery';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Chambers & Courtroom Practice Gallery',
  description:
    'Explore the photo gallery of UK Law Firm, featuring our executive consultation chambers, law library, conference facilities, and advocate practice in Gachibowli, Hyderabad.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero Header with Breadcrumbs */}
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-12 bg-gradient-to-b from-[#faf5eb] via-[#faf7f2] to-white border-b border-[#eedfba]/60 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10 text-center">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-5 font-medium">
            <Link href="/" className="hover:text-[#916b1f] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#916b1f] font-semibold">Gallery</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#faecd1] text-[#916b1f] border border-[#ebd8ad] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            <span>⚖️</span>
            <span>CHAMBERS &amp; ADVOCATE PRACTICE</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] tracking-tight leading-tight mb-3 max-w-[600px] mx-auto">
            UK Law Firm <span className="text-[#b38634]">Photo Gallery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our executive consultation chambers, legal library, client discussion lounges, and founding advocates at Gachibowli, Hyderabad.
          </p>
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>
      </section>

      {/* Complete Chamber & Advocate Photo Archive with Category Tabs & Lightbox */}
      <FullGallery />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

