import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const googleMapsUrl = 'https://www.google.com/maps?cid=5622859566322619719';

  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Practice Areas', href: '/#services' },
    { name: 'About Us', href: '/#about' },
    { name: 'Consultation Process', href: '/#how-it-works' },
    { name: 'Request Appointment', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Legal Disclaimer', href: '/disclaimer' },
  ];

  const serviceLinks = [
    { name: 'Civil Litigation', href: '/services/civil-law', highlight: false },
    { name: 'Criminal Defence', href: '/services/criminal-law', highlight: false },
    { name: 'Family and Matrimonial Matters', href: '/services/family-law', highlight: false },
    { name: 'Property and Real Estate Matters', href: '/services/rera-and-builder-buyer', highlight: false },
    { name: 'Labour and Employment Matters', href: '/services/labour-and-employment', highlight: false },
    { name: 'Business and Commercial Matters', href: '/services/corporate-and-commercial', highlight: false },
    { name: 'Writs before the High Court', href: '/services/tribunals-and-forums', highlight: false },
    { name: 'Documentation and Legal Notices', href: '/services/other-legal-services', highlight: false },
  ];

  return (
    <footer className="bg-[#0b0c0e] text-white pt-16 pb-20 sm:pb-10 font-sans border-t border-[#1f2228]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
          
          {/* Column 1: Brand & Overview (Span 4) */}
          <div className="lg:col-span-4">
            
            {/* Brand Logo & Name (matching Navbar) */}
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/uk-emblem-gold.png"
                  alt="UK Law Firm Official Gold Emblem"
                  width={48}
                  height={40}
                  style={{ width: 'auto', height: 'auto' }}
                  className="max-h-10 object-contain drop-shadow-[0_2px_8px_rgba(201,168,76,0.4)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="leading-tight">
                <span className="text-white font-serif text-2xl font-bold tracking-tight block">
                  UK Law Firm
                </span>
                <span className="text-[#c9a84c] text-[9px] tracking-[0.2em] font-sans font-bold uppercase block -mt-0.5">
                  ADVOCATES &amp; LEGAL CONSULTANTS
                </span>
              </div>
            </Link>

            {/* Paragraph Bio */}
            <p className="text-gray-200 text-xs sm:text-[13px] leading-relaxed">
              <strong className="text-white font-semibold">UK Law Firm</strong> is based in <strong className="text-white font-semibold">Gachibowli, Hyderabad</strong>. Our advocates handle cases before the <strong className="text-white font-semibold">High Court of Telangana, District Courts, and Tribunals</strong>, providing clear advice and dependable legal support for individuals, families, and businesses.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm sm:text-base mb-5 font-sans tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-[#f5d061] text-xs sm:text-[13px] transition-colors flex items-center group font-medium"
                  >
                    <span className="text-[#e5bf55] font-bold mr-2 text-xs group-hover:translate-x-0.5 transition-transform">
                      &gt;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm sm:text-base mb-5 font-sans tracking-wide">
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-[#f5d061] text-xs sm:text-[13px] transition-colors flex items-center group font-medium"
                  >
                    <span className="text-[#e5bf55] font-bold mr-2 text-xs group-hover:translate-x-0.5 transition-transform">
                      &gt;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Chambers & Location (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm sm:text-base mb-5 font-sans tracking-wide">
              Chambers &amp; Location
            </h4>
            
            <div className="space-y-4 text-xs sm:text-[13px]">
              
              {/* Location Address */}
              <div className="flex items-start gap-3">
                <div className="text-[#e5bf55] mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e5bf55]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 leading-relaxed font-normal">
                    Flat No. 201, 2nd Floor, Maps Apartments, Plot No. 45, Beside Care Hospitals, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032.
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#f5d061] hover:underline font-semibold mt-1 text-xs"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="text-[#e5bf55] mt-0.5 text-base flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e5bf55]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href="tel:+918897847788" className="block text-gray-100 hover:text-[#f5d061] transition-colors font-medium">
                    +91 88978 47788
                  </a>
                  <a href="tel:+916304856208" className="block text-gray-100 hover:text-[#f5d061] transition-colors font-medium mt-0.5">
                    +91 63048 56208
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="text-[#e5bf55] mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e5bf55]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:contact@uklawfirm.in" className="text-gray-100 hover:text-[#f5d061] transition-colors break-all font-medium">
                  contact@uklawfirm.in
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="text-[#e5bf55] mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e5bf55]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 leading-snug font-medium">
                    Mon to Sat 9:30 AM to 10:30 – 11:00 PM
                  </p>
                  <p className="text-gray-300 text-[11px] sm:text-xs mt-0.5 font-normal">
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Compliance Disclaimer (Shown on Every Page) */}
        <div className="mb-8 bg-[#12151a] border-l-4 border-[#c9a84c] px-5 py-4 rounded-r-lg">
          <p className="text-gray-300 text-xs leading-relaxed">
            The contents of this website are for informational purposes only. They do not constitute solicitation, advertisement, invitation or inducement, and do not create a lawyer-client relationship. No outcome, time frame or result is promised. For advice on your specific matter, please consult after sharing facts and documents.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Edone Solutions attribution */}
        <div className="pt-6 border-t border-[#1f2228] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300 sm:pr-44">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} UK Law Firm. All rights reserved. &nbsp;•&nbsp;{' '}
            <Link href="/disclaimer" className="hover:text-white transition-colors text-gray-300 underline-offset-2 hover:underline">
              Legal Disclaimer
            </Link>
          </p>

          <p className="text-center sm:text-right text-gray-300 text-xs">
            Designed &amp; Developed by{' '}
            <span className="text-[#f5d061] font-semibold hover:underline">
              Edone Solutions
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
