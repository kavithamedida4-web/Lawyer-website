'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allServices = [
  {
    slug: 'criminal-law',
    category: 'Criminal Law',
    sub: 'Bail, Trial Court & Special Courts',
    desc: 'Strong defense for Anticipatory Bail, Cheque Bounce, Police Inquiries & Criminal Appeals.',
    image: '/service-criminal.jpg',
    points: ['Bail & Anticipatory Bail', 'Cheque Bounce Cases', 'Criminal Trials & Appeals', 'Cyber Crime & NDPS'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    slug: 'civil-law',
    category: 'Civil Law',
    sub: 'Property, Contracts & Rights',
    desc: 'Resolving partition suits, contract breaches, injunctions, title disputes and recovery suits.',
    image: '/service-civil.jpg',
    points: ['Civil Suits & Decrees', 'Partition & Title Disputes', 'Injunctions & Stay Orders', 'Specific Performance'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    slug: 'family-law',
    category: 'Family Law',
    sub: 'Marriage, Divorce & Custody',
    desc: 'Compassionate handling of mutual/contested divorce, maintenance, alimony, and custody rights.',
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
    category: 'RERA & Builder - Buyer',
    sub: 'Real Estate Law',
    desc: 'Advocacy for delayed possessions, project defaults, builder agreements, and RERA claims.',
    image: '/service-property.jpg',
    points: ['RERA Complaints & Redressal', 'Builder - Buyer Disputes', 'Delay in Possession Compensation', 'Agreement & Title Verification'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    slug: 'landlord-and-tenant',
    category: 'Landlord & Tenant',
    sub: 'Property Matters',
    desc: 'Commercial & residential lease deeds, eviction matters, rental defaults, and tenant rights.',
    image: '/service-civil.jpg',
    points: ['Eviction & Possession Suits', 'Rental Agreements Drafting', 'Lease Deed & Renewals', 'Commercial Property Disputes'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    slug: 'tribunals-and-forums',
    category: 'Tribunals & Forums',
    sub: 'Specialised Representation',
    desc: 'Representation before NCLT, NCLAT, IBC, Consumer Forums, and appellate authorities.',
    image: '/service-tribunals.jpg',
    points: ['NCLT, NCLAT & IBC Matters', 'Motor Accident Claims (MACT)', 'Consumer Disputes Forum', 'CAT & Service Law Matters'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    slug: 'corporate-and-commercial',
    category: 'Corporate & Commercial',
    sub: 'Business & Structure',
    desc: 'Company incorporation, commercial contracts, shareholder pacts, due diligence, and startup legal support.',
    image: '/service-corporate.jpg',
    points: ['Company Incorporation', 'MOU & Shareholder Agreements', 'Business Due Diligence', 'Commercial Disputes'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    slug: 'taxation-and-it-law',
    category: 'Taxation & IT Law',
    sub: 'Business & Compliance',
    desc: 'Income tax appeals, assessments, GST disputes, regulatory compliance, and corporate filings.',
    image: '/service-civil.jpg',
    points: ['Income Tax Appeals & Assessments', 'GST Registration & Disputes', 'TDS & Regulatory Compliance', 'IT Act Compliance'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: 'labour-and-employment',
    category: 'Labour & Employment',
    sub: 'Workplace Law',
    desc: 'Industrial disputes, employee rights, termination cases, and statutory compliance (EPF, ESI).',
    image: '/service-lawyers.jpg',
    points: ['Employee Rights & Service Matters', 'Wrongful Termination', 'Industrial Disputes', 'EPF & Labour Compliance'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    slug: 'consumer-protection',
    category: 'Consumer Protection',
    sub: 'Consumer Disputes Forum',
    desc: 'Legal claims for deficiency in services, defective products, refund disputes, and medical negligence.',
    image: '/service-criminal.jpg',
    points: ['Defective Goods & Services', 'Refund & Compensation Claims', 'Deficiency in Service', 'District & State Forum Representation'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    slug: 'intellectual-property',
    category: 'Intellectual Property (IPR)',
    sub: 'Brands, Ideas & Creations',
    desc: 'Trademark search & registration, copyright protection, patent filings, and infringement actions.',
    image: '/service-corporate.jpg',
    points: ['Trademark Registration & Opposition', 'Copyright Protection', 'Patent Filing & Advisory', 'IPR Infringement Litigation'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: 'cyber-crime',
    category: 'Cyber Crime',
    sub: 'Digital Law & Fraud',
    desc: 'Online financial fraud, identity theft, data breach litigation, cyber defamation, and complaints.',
    image: '/service-cyber.jpg',
    points: ['Online Fraud & Financial Crime', 'Data Theft & Privacy Breaches', 'Social Media Offences', 'Cyber Cell Complaints'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    slug: 'immigration',
    category: 'Immigration',
    sub: 'Visa, OCI & Global Mobility',
    desc: 'Immigration advisory, OCI/PIO documentation, visa rejection appeals, and statutory clearances.',
    image: '/service-lawyers.jpg',
    points: ['Student & Work Visas', 'OCI & PIO Applications', 'Citizenship & FRRO Queries', 'Apostille & Legalizations'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: 'other-legal-services',
    category: 'Other Legal Services',
    sub: 'Advisory & Representation',
    desc: 'Legal notice drafting, Power of Attorney, registered wills, inheritance, and formal legal opinions.',
    image: '/service-civil.jpg',
    points: ['Legal Notice Drafting', 'Power of Attorney (GPA/SPA)', 'Wills & Inheritance Succession', 'Title Search & Legal Opinions'],
    icon: (
      <svg className="w-5 h-5 text-[#a8742b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<typeof allServices[0] | null>(null);

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
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-10 h-[1.5px] bg-[#d8b577]" />
            <span className="text-[#8c6b45] text-[11px] font-bold tracking-[0.25em] uppercase font-sans">
              OUR PRACTICE AREAS
            </span>
            <span className="w-10 h-[1.5px] bg-[#d8b577]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#141e2e] leading-tight mb-2 tracking-tight max-w-[600px] mx-auto">
            Comprehensive Legal Solutions
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans max-w-lg mx-auto">
            Trusted legal support tailored to your needs.
          </p>
        </div>

        {/* Carousel Navigation Buttons & Counter */}
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a8742b] animate-pulse" />
            <span className="text-xs font-sans font-semibold text-gray-500 uppercase tracking-wider">
              14 Specialised Practice Categories
            </span>
          </div>

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

                <h3 className="text-lg font-serif font-bold text-[#141e2e] mb-2 leading-tight">
                  {item.category}
                </h3>

                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-sans flex-grow">
                  {item.desc}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-2">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b38634] hover:text-[#0a1222] font-sans tracking-wide uppercase group-hover:translate-x-1 transition-all"
                  >
                    <span>View Page</span>
                    <span className="text-sm">→</span>
                  </Link>
                  <span className="text-gray-300">•</span>
                  <button
                    onClick={() => setSelectedService(item)}
                    className="text-[11px] font-semibold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                  >
                    Quick Summary
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>

      {/* Modal Popup for In-depth Practice Area Details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-gray-200 font-sans">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              ✕
            </button>

            <span className="text-[#a8742b] text-xs font-bold uppercase tracking-wider block mb-1">
              {selectedService.sub}
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
              {selectedService.category}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
              {selectedService.desc}
            </p>

            <h4 className="text-xs uppercase font-bold text-gray-800 tracking-wider mb-2.5">
              Scope of Legal Representation:
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedService.points.map((pt, i) => (
                <li key={i} className="text-xs text-gray-700 flex items-center gap-2 bg-[#faf7f2] p-2 rounded-lg">
                  <span className="text-[#a8742b] font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/919866775034?text=Hello%20UK%20Law%20Firm,%20I%20would%20like%20to%20consult%20regarding%20this%20legal%20matter."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#b38634] hover:bg-[#c9983e] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Consult On WhatsApp →
            </a>
          </div>
        </div>
      )}

    </section>
  );
}
