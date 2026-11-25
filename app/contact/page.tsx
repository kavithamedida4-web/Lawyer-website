import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact Us & Request Chamber Appointment',
  description:
    'Request a chamber appointment with advocates M. Umamaheshwar Reddy (B.Sc., M.Sc., LL.B.) and S. Kamalakar (B.B.M., M.C.A., LL.B.) at UK Law Firm chambers in Gachibowli, Hyderabad.',
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
            <span>REQUEST CHAMBER APPOINTMENT</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] tracking-tight leading-tight mb-2 max-w-[700px] mx-auto">
            Contact Us and Location — <span className="text-[#b38634]">Request Chamber Appointment.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Flat No. 201, 2nd Floor, Maps Apartments, Plot No. 45, Beside Care Hospitals, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032.
          </p>

          {/* Direct Phone & WhatsApp Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <a
              href="tel:+919866775034"
              className="inline-flex items-center gap-2 bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] border border-[#c9a84c]/50 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs"
            >
              <span>📞</span>
              <span>+91 98667 75034</span>
            </a>
            <a
              href="tel:+918897847788"
              className="inline-flex items-center gap-2 bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] border border-[#c9a84c]/50 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs"
            >
              <span>📞</span>
              <span>+91 88978 47788</span>
            </a>
            <a
              href="mailto:contact@uklawfirm.in"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#0a1222] border border-[#c9a84c]/50 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs"
            >
              <span>✉️</span>
              <span>contact@uklawfirm.in</span>
            </a>
          </div>

          <div className="w-14 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact hideHeader />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
