import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | UK Law Firm — Hyderabad',
  description:
    'Read the Privacy Policy of UK Law Firm, detailing our strict client confidentiality protocols, data handling, and legal compliance under Indian law.',
};

export default function PrivacyPolicyPage() {
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
            <span className="text-[#916b1f] font-semibold">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 bg-[#faecd1] text-[#916b1f] border border-[#ebd8ad] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            <span>🛡️</span>
            <span>CLIENT PRIVACY &amp; CONFIDENTIALITY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0a1222] tracking-tight mb-3">
            Privacy <span className="text-[#b38634]">Policy</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            UK Law Firm is committed to preserving the highest standards of attorney-client privilege, personal data protection, and confidentiality.
          </p>
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[920px] mx-auto px-6 sm:px-10 text-gray-700 leading-relaxed font-sans space-y-8 text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              1. Attorney-Client Privilege &amp; Confidentiality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At UK Law Firm, we maintain strict statutory confidentiality regarding all communications, documents, and case facts disclosed to us by prospective and existing clients. This is governed by Section 126 of the Indian Evidence Act, 1872, and the professional ethics standards mandated by the Bar Council of India. Information shared during consultation is protected and shall never be disclosed to third parties without prior express written authorization, except as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              When you submit a consultation request or communicate with our chambers via our official portal, we may collect the following details:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-2">
              <li>Full Name and contact details (phone number, email address).</li>
              <li>Practice area selection and brief description of legal inquiry.</li>
              <li>Case documentation voluntarily uploaded or presented during chamber appointments.</li>
              <li>Technical usage data (such as browser type and session duration) collected strictly to ensure site stability.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              3. Purpose &amp; Use of Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Information collected through this website is utilized exclusively for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-2">
              <li>Assessing conflict of interest prior to legal engagement.</li>
              <li>Coordinating and scheduling confidential advocate consultation sessions.</li>
              <li>Formulating strategic legal advice tailored to your matter.</li>
              <li>Compliance with court filing guidelines and statutory statutory record-keeping.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              4. Non-Disclosure &amp; Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              UK Law Firm does not sell, rent, commercialize, or lease client information to third-party marketing entities. Our digital intake channels implement security safeguards to protect against unauthorized access, alteration, or disclosure of confidential client data.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222] mb-3">
              5. Contact for Privacy Inquiries
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or require clarification regarding our data confidentiality practices, you may reach our administrative chambers directly at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-[#faf7f2] border border-[#eedfba]">
              <p className="font-bold text-[#0a1222]">UK Law Firm — Chambers</p>
              <p className="text-gray-600 text-sm mt-0.5">Flat No. 201, 2nd Floor, Maps Apartments, Plot No. 45, Beside Care Hospitals, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032</p>
              <p className="text-gray-600 text-sm mt-0.5">Email: <a href="mailto:contact@uklawfirm.in" className="text-[#b38634] font-semibold underline">contact@uklawfirm.in</a> | Phone: +91 98667 75034</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

