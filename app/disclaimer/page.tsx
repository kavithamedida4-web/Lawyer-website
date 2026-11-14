import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Legal Disclaimer',
  description:
    'Legal Disclaimer and statutory notice of UK Law Firm in compliance with Rule 36 of the Bar Council of India Rules, governing non-solicitation, informational access, and professional advocacy standards.',
};

export default function LegalDisclaimerPage() {
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
            <span className="text-[#916b1f] font-semibold">Legal Disclaimer</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 bg-[#faecd1] text-[#916b1f] border border-[#ebd8ad] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            <span>⚖️</span>
            <span>BAR COUNCIL OF INDIA REGULATORY NOTICE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] tracking-tight leading-tight mb-3 max-w-[600px] mx-auto">
            Legal <span className="text-[#b38634]">Disclaimer</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Statutory declaration and regulatory compliance in accordance with the rules established by the Bar Council of India.
          </p>
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[920px] mx-auto px-6 sm:px-10 text-gray-700 leading-relaxed font-sans space-y-8 text-sm sm:text-base">
          
          {/* Highlight Callout Box */}
          <div className="bg-[#faf7f2] border-l-4 border-[#b38634] p-5 sm:p-6 rounded-r-xl shadow-xs">
            <h3 className="font-serif font-bold text-[#0a1222] text-base sm:text-lg mb-2">
              Important Bar Council Notice (Rule 36, Part VI)
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any manner. By accessing this website (<code className="text-[#0a1222] font-semibold">uklawfirm.in</code>), you acknowledge and confirm that you are seeking information relating to UK Law Firm of your own accord and that there has been no form of solicitation, personal communication, invitation, or inducement by UK Law Firm or any of its members.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              1. Non-Solicitation &amp; Non-Advertisement Declaration
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This website is intended solely to provide general information regarding UK Law Firm, its practice areas, founding advocates, and courtroom credentials. The content presented here does not constitute advertisement, personal solicitation, commercial invitation, or formal legal advice under the Advocates Act, 1961.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              2. Voluntary Access &amp; User Undertaking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By proceeding further and accessing the pages, practice overviews, or resources on this website, the user explicitly undertakes that:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
              <li>The user is seeking information solely for personal knowledge, informational reference, or academic review;</li>
              <li>Any transmission, receipt, or use of this website does not solicit any work or create any advocate-client relationship;</li>
              <li>No material or documentation downloaded from this website will be treated as formal legal counsel or statutory advice; and</li>
              <li>The user has voluntarily chosen to visit this website without any direct or indirect solicitation from UK Law Firm or its advocates.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              3. Information Not Legal Advice
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The statutory provisions, judgment overviews, legal rights summaries, and courtroom procedural guides published across this website are generalized in nature. The law evolves constantly through statutory amendments, procedural notifications, and judicial pronouncements of the Supreme Court of India and High Courts. Therefore, readers must not act or refrain from acting based on any content here without obtaining specialized counsel from a licensed advocate admitted to the Bar.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              UK Law Firm, its partners, associates, and researchers expressly disclaim all liability to any person, corporation, or entity in respect of anything done, or omitted to be done, wholly or partly in reliance upon any portion of the contents of this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              5. Attorney-Client Privilege
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While we treat inquiry communications with the highest degree of confidentiality, submitting an online form, sending a WhatsApp message, or sending an unsolicited email does not automatically establish attorney-client privilege until formal representation has been confirmed and a Vakalatnama has been signed.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              6. Official Chamber Verification
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For verification of advocate enrollment or official chamber inquiries, you may contact our office directly:
            </p>
            <div className="bg-[#faf7f2] border border-[#eedfba] p-5 rounded-xl space-y-2 text-xs sm:text-sm">
              <p><strong className="text-[#0a1222]">Firm:</strong> UK Law Firm, Advocates &amp; Legal Consultants</p>
              <p><strong className="text-[#0a1222]">Chambers:</strong> Flat No. 201, 2nd Floor, Maps Apartments, Plot No. 45, Beside Care Hospitals, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032</p>
              <p><strong className="text-[#0a1222]">Contact:</strong> +91 98667 75034 / +91 63048 56208</p>
              <p><strong className="text-[#0a1222]">Inquiries:</strong> contact@uklawfirm.in</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

