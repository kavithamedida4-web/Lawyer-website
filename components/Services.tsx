'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allServices = [
  {
    slug: 'civil-law',
    category: 'Civil Litigation',
    sub: 'Property, Land & Suits',
    desc: 'Help with property partition, title disputes, stay orders, agreements, and money recovery.',
    image: '/service-civil.jpg',
    points: ['Civil Suits & Decrees', 'Partition & Title Disputes', 'Injunctions & Stay Orders', 'Specific Performance'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    slug: 'criminal-law',
    category: 'Criminal Defence',
    sub: 'Police & Court Cases',
    desc: 'Representation in criminal cases, trials, appeals, and police matters before courts.',
    image: '/service-criminal.jpg',
    points: ['Criminal Trials & Appeals', 'FIR & Police Complaints', 'Cyber Crime & NDPS', 'Sessions & High Court Cases'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    slug: 'family-law',
    category: 'Family and Matrimonial Matters',
    sub: 'Marriage, Divorce & Custody',
    desc: 'Help with mutual divorce, contested divorce, child custody, and monthly maintenance.',
    image: '/service-family.jpg',
    points: ['Mutual & Contested Divorce', 'Maintenance / Alimony', 'Domestic Violence (DV Act)', 'Child Custody & Visitation'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    slug: 'rera-and-builder-buyer',
    category: 'Property and Real Estate Matters',
    sub: 'RERA, Flats & Land',
    desc: 'Help for homebuyers with delayed flat delivery, builder disputes, RERA complaints, and refund claims.',
    image: '/service-property.jpg',
    points: ['RERA Complaints & Redressal', 'Builder–Buyer Disputes', 'Delay in Possession Compensation', 'Agreement & Title Verification'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    slug: 'consumer-protection',
    category: 'Consumer Disputes',
    sub: 'Consumer Court & Claims',
    desc: 'Filing Consumer Court cases for defective products, poor services, and compensation claims.',
    image: '/service-consumer.jpg',
    points: ['Defective Goods & Services', 'Refund & Compensation Claims', 'Deficiency in Service', 'District & State Forum Representation'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    slug: 'criminal-law',
    category: 'Bail and Anticipatory Bail',
    sub: 'Bail Applications',
    desc: 'Filing and arguing bail and anticipatory bail applications before Magistrate, Sessions, and High Courts.',
    image: '/service-bail.jpg',
    points: ['Regular Bail Applications', 'Anticipatory Bail (AB)', 'Bail Cancellation Matters', 'High Court Bail Petitions'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    slug: 'criminal-law',
    category: 'Cheque Bounce Cases under NI Act',
    sub: 'Section 138 NI Act',
    desc: 'Handling cheque dishonour cases under Section 138 of the Negotiable Instruments Act.',
    image: '/service-cheque-bounce.jpg',
    points: ['Section 138 Complaints', 'Legal Notice under NI Act', 'Trial Court Representation', 'Compounding & Settlement'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    slug: 'tribunals-and-forums',
    category: 'Motor Accident Claims',
    sub: 'MACT & Compensation',
    desc: 'Filing and arguing motor accident compensation claims before Motor Accident Claims Tribunals.',
    image: '/service-motor-accident.jpg',
    points: ['MACT Claim Petitions', 'Compensation Assessment', 'Insurance Company Disputes', 'Interim Relief Applications'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    slug: 'labour-and-employment',
    category: 'Labour and Employment Matters',
    sub: 'Workplace & Job Issues',
    desc: 'Help with employment contracts, wrongful termination, unpaid salary, and workplace disputes.',
    image: '/labour-04-epf-esi.jpg',
    points: ['Employee Rights & Service Matters', 'Wrongful Termination', 'Industrial Disputes', 'EPF & Labour Compliance'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    slug: 'other-legal-services',
    category: 'Wills and Succession',
    sub: 'Inheritance & Succession',
    desc: 'Drafting registered wills, handling succession certificates, and inheritance disputes.',
    image: '/service-wills.jpg',
    points: ['Will Drafting & Registration', 'Succession Certificates', 'Legal Heir Certificates', 'Inheritance Disputes'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    slug: 'corporate-and-commercial',
    category: 'Business and Commercial Matters',
    sub: 'Business & Contracts',
    desc: 'Company registration, partner agreements, contract drafting, and commercial dispute resolution.',
    image: '/service-corporate.jpg',
    points: ['Company Incorporation', 'MOU & Shareholder Agreements', 'Business Due Diligence', 'Commercial Disputes'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    slug: 'corporate-and-commercial',
    category: 'Arbitration and Mediation',
    sub: 'Dispute Resolution',
    desc: 'Representing parties in arbitration proceedings and assisting in out-of-court mediation settlements.',
    image: '/service-arbitration.jpg',
    points: ['Arbitration Proceedings', 'Mediation & Conciliation', 'Arbitral Award Enforcement', 'Commercial Dispute Resolution'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    slug: 'tribunals-and-forums',
    category: 'Writs before the High Court',
    sub: 'Writ Petitions & High Court',
    desc: 'Filing writ petitions before the High Court of Telangana for fundamental rights, service matters, and government actions.',
    image: '/service-writs-hc.jpg',
    points: ['Writ Petitions (HC)', 'Article 226 Petitions', 'Service & Government Matters', 'Stay & Interim Orders'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    slug: 'other-legal-services',
    category: 'Documentation and Legal Notices',
    sub: 'Notices, Deeds & Opinions',
    desc: 'Drafting legal notices, registered deeds, General Power of Attorney (GPA), and property legal opinions.',
    image: '/service-documentation.jpg',
    points: ['Legal Notice Drafting', 'Power of Attorney (GPA/SPA)', 'Title Search & Legal Opinions', 'Affidavits & Declarations'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#faf7f2] relative overflow-hidden text-gray-900">

      {/* Background Architectural Greek Columns Faint Outline */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.035] pointer-events-none select-none flex justify-end">
        <svg className="h-full w-full max-h-[700px]" viewBox="0 0 300 600" fill="currentColor">
          <rect x="50" y="20" width="220" height="20" rx="3" />
          <polygon points="160,0 40,20 280,20" />
          <rect x="70" y="50" width="30" height="500" />
          <rect x="140" y="50" width="30" height="500" />
          <rect x="210" y="50" width="30" height="500" />
          <rect x="40" y="550" width="240" height="25" rx="3" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] leading-tight mb-2 tracking-tight max-w-[600px] mx-auto">
            Our Practice Areas
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans max-w-lg mx-auto">
            Clear, honest advice and dependable court representation for you and your family.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-end mb-3 px-2">
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-[#a8742b] hover:text-white hover:border-[#a8742b] flex items-center justify-center text-gray-700 transition-all shadow-sm"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-[#a8742b] hover:text-white hover:border-[#a8742b] flex items-center justify-center text-gray-700 transition-all shadow-sm"
            >
              →
            </button>
          </div>
        </div>

        {/* 
          ========================================================================
          HORIZONTAL SCROLL CAROUSEL FOR ALL 14 INDIAN LEGAL PRACTICE AREAS
          ========================================================================
        */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allServices.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[290px] sm:w-[320px] bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col snap-start group"
            >
              {/* Card Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Circular Badge Overlap */}
              <div className="relative px-6 pb-6 pt-6 flex flex-col flex-grow items-center text-center">
                <div className="absolute -top-6 w-12 h-12 rounded-full bg-white shadow-md border border-[#e2cca4] flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#fcf9f2] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <span className="text-[10px] text-[#a8742b] font-bold uppercase tracking-widest font-sans mb-1 mt-1">
                  {item.sub}
                </span>

                <h3 className="text-lg font-sans font-semibold tracking-tight text-[#141e2e] mb-2 leading-tight">
                  {item.category}
                </h3>

                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-sans flex-grow">
                  {item.desc}
                </p>

                <div className="mt-auto pt-2">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b38634] hover:text-[#0a1222] font-sans tracking-wide uppercase group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Practice Area</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
