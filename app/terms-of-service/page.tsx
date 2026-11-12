import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Terms of Service | UK Law Firm — Hyderabad',
  description:
    'Read the Terms of Service for UK Law Firm. Understand the terms governing the use of our legal consultation website, chamber advisory, and practice policies under Indian law.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-12 bg-gradient-to-b from-[#faf5eb] via-[#faf7f2] to-white border-b border-[#eedfba]/60 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10 text-center">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-5 font-medium">
            <Link href="/" className="hover:text-[#916b1f] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#916b1f] font-semibold">Terms of Service</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 bg-[#faecd1] text-[#916b1f] border border-[#ebd8ad] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            <span>📜</span>
            <span>TERMS &amp; CONDITIONS OF USE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0a1222] tracking-tight mb-3">
            Terms of <span className="text-[#b38634]">Service</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before utilizing the website, digital advisory services, or booking legal consultations with UK Law Firm.
          </p>
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[920px] mx-auto px-6 sm:px-10 text-gray-700 leading-relaxed font-sans space-y-8 text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing, browsing, or utilizing the website of UK Law Firm (<code className="text-[#0a1222] bg-[#f7f5f0] px-1.5 py-0.5 rounded text-xs">uklawfirm.in</code>) or scheduling a consultation, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service. If you do not accept these terms, you should immediately cease use of this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              2. No Attorney-Client Relationship Created Online
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Transmitting information through our online forms, WhatsApp dispatch channels, email, or telephone does not, by itself, create an attorney-client relationship between you and UK Law Firm or its advocates. An official attorney-client relationship is formally established only when:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5 text-gray-600">
              <li>A direct chamber or digital consultation has taken place;</li>
              <li>A formal Conflict of Interest check has been cleared by our advocates; and</li>
              <li>A valid Vakalatnama, formal engagement letter, or retainer agreement has been mutually executed along with agreed professional fees.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              3. Informational Purpose &amp; No Legal Advice
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All materials, articles, statutory overviews, and practice descriptions provided on this website are published solely for general informational and educational purposes in compliance with the guidelines of the Bar Council of India. Nothing on this website constitutes formal legal counsel, statutory opinion, or an assurance of courtroom outcome. You must seek qualified, personalized legal counsel for your specific case facts before initiating or defending legal proceedings.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              4. Consultation Scheduling &amp; Intake
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Inquiries submitted through our website or direct communication channels are routed to our administrative intake desk. We strive to respond promptly to scheduling requests. However, UK Law Firm reserves the sole right to decline representation or refuse consultation requests without assigning cause, particularly where potential conflicts of interest, ethical boundaries, or jurisdictional limitations arise.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All branding, text content, legal commentary, imagery, chamber photography, logos, and emblems displayed on this website are the intellectual property of UK Law Firm or licensed for its exclusive use. Unauthorized reproduction, scraping, redistribution, or commercial use without prior written consent is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted under applicable law, UK Law Firm, its partners, advocates, and affiliates disclaim any liability for any loss, damage, or prejudice arising directly or indirectly from reliance upon materials published on this website, technical errors, server downtime, or unencrypted transmissions across third-party communication networks.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service and any disputes or claims arising out of the use of this website or legal advisory engagements shall be governed exclusively by the laws of the Republic of India. The courts situated in Hyderabad, Telangana, shall retain exclusive territorial and subject-matter jurisdiction.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              8. Contact &amp; Grievance Redressal
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For any questions, legal notices, or clarifications concerning these terms, please contact our administrative chamber:
            </p>
            <div className="bg-[#faf7f2] border border-[#eedfba] p-5 rounded-xl space-y-2 text-xs sm:text-sm">
              <p><strong className="text-[#0a1222]">Chambers:</strong> UK Law Firm, Advocates &amp; Legal Consultants</p>
              <p><strong className="text-[#0a1222]">Address:</strong> Flat 201, Maps Apts, Jayabheri Pine Valley, Beside Care Hospitals, Gachibowli, Hyderabad, Telangana 500032</p>
              <p><strong className="text-[#0a1222]">Phone:</strong> +91 98667 75034 / +91 63048 56208</p>
              <p><strong className="text-[#0a1222]">Email:</strong> contact@uklawfirm.in</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
