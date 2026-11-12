import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact Us & Chambers Consultation | UK Law Firm — Hyderabad',
  description:
    'Schedule a confidential legal consultation with senior advocates M. Umamaheshwar Reddy (B.Sc., M.Sc., LL.B.) and S. Kamalakar (B.B.M., M.C.A., LL.B.) at UK Law Firm chambers in Gachibowli, Hyderabad.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-gray-900 font-sans">
      <Navbar />

      {/* Hero Header with Breadcrumbs */}
      <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 bg-gradient-to-b from-[#faf5eb] via-[#faf7f2] to-white border-b border-[#eedfba]/60 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10 text-center">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-3 font-medium">
            <Link href="/" className="hover:text-[#916b1f] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#916b1f] font-semibold">Contact</span>
          </nav>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#faecd1] text-[#916b1f] border border-[#ebd8ad] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2.5 shadow-2xs">
            <span>⚖️</span>
            <span>CHAMBERS CONSULTATION &amp; INQUIRIES</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] tracking-tight leading-tight mb-2 max-w-[600px] mx-auto">
            Contact <span className="text-[#b38634]">UK Law Firm</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Connect directly with Senior Advocates M. Umamaheshwar Reddy &amp; S. Kamalakar for confidential legal advisory and chamber appointments in Hyderabad.
          </p>
          <div className="w-14 h-[2px] bg-[#c9a84c] mx-auto mt-3" />
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact hideHeader />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
