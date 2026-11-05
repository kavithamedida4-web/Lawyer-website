'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const archCards = [
    {
      src: '/mobile-hero-1.jpg',
      title: 'S. Kamalakar',
      subtitle: 'Senior Advocate (M.C.A., LL.B.)',
      link: '/#about',
    },
    {
      src: '/mobile-hero-2.jpg',
      title: 'M. Umamaheshwar Reddy',
      subtitle: 'Senior Advocate (M.Sc., LL.B.)',
      link: '/#about',
    },
    {
      src: '/advocate-desk-justice.jpg',
      title: 'Executive Chambers',
      subtitle: 'Strategic Legal Consultation',
      link: '/#services',
    },
    {
      src: '/uk-law-firm-partners.jpg',
      title: 'Senior Partners',
      subtitle: 'UK Law Firm Leadership',
      link: '/#about',
    },
    {
      src: '/advocate-reading-bookshelf.jpg',
      title: 'Case Law Research',
      subtitle: 'High Court Precedents',
      link: '/#services',
    },
    {
      src: '/mobile-hero-seated.jpg',
      title: 'Courtroom Defense',
      subtitle: 'Bail & Trial Advocacy',
      link: '/#contact',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] min-h-screen bg-[#070c14] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-32 pb-6 sm:pb-8"
    >
      {/* 
        ========================================================================
        HERO BACKGROUND: REAL 'LAW & JUSTICE' CHAMBERS OFFICE (Uploaded Image 2)
        With elegant dark cinematic overlay for pristine text legibility
        ========================================================================
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-0">
        <Image
          src="/hero-office-chamber.jpg"
          alt="UK Law Firm Executive Chambers - Law & Justice Office"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center brightness-[0.75] contrast-[1.08] scale-102"
        />
        
        {/* Layered dark gradients: deep navy top & bottom, glowing center transparency */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070c14]/85 via-[#070c14]/65 to-[#070c14]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(7,12,20,0.85)_100%)]" />
      </div>

      {/* 
        ========================================================================
        CENTER HERO CONTENT (Matching 3 Chillies layout structure)
        Centered title, subtitle, and action buttons
        ========================================================================
      */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center relative z-10 my-auto pt-2 sm:pt-4">
        
        {/* Gold Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#c9a84c]/50 text-[#f3cd67] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6 shadow-lg">
          <span className="text-xs">✦</span>
          <span>UK LAW FIRM • ADVOCATES &amp; LEGAL CONSULTANTS</span>
          <span className="text-xs">✦</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[62px] font-bold text-white leading-[1.14] tracking-tight mb-4 sm:mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          <span>Trusted Legal Expertise </span>
          <span className="text-[#f3cd67] italic font-normal drop-shadow-md">For Your Success</span>
        </h1>

        {/* Golden Horizontal Accent Divider */}
        <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mb-4 sm:mb-5" />

        {/* Subtitle Description */}
        <p className="text-white/90 text-xs sm:text-base lg:text-[17px] leading-relaxed max-w-2xl mx-auto font-sans font-normal mb-6 sm:mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          25+ Years of courtroom excellence across Telangana High Court, District Courts, and Special Tribunals. Seasoned defense for individuals, families, and corporate enterprises.
        </p>

        {/* Action CTA Buttons (Matching 3 Chillies CTA button pair) */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-4">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#e5bf55] via-[#d4af37] to-[#b88a38] hover:brightness-110 text-[#080d16] px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold font-sans tracking-wide inline-flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:shadow-[0_6px_25px_rgba(201,168,76,0.6)] active:scale-95"
          >
            <span className="text-sm sm:text-base leading-none">⚖️</span>
            <span>BOOK CONSULTATION</span>
            <span className="font-bold">→</span>
          </Link>

          <a
            href="#services"
            className="bg-black/40 hover:bg-black/60 text-white border border-[#c9a84c]/70 hover:border-[#f3cd67] px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold font-sans tracking-wide inline-flex items-center gap-2 backdrop-blur-md transition-all active:scale-95 shadow-md"
          >
            <span>OUR PRACTICE AREAS</span>
            <span className="text-[#f3cd67]">↓</span>
          </a>
        </div>

      </div>

      {/* 
        ========================================================================
        BOTTOM ROW OF ARCH-SHAPED CARDS (Exact 3 Chillies Reference Style)
        Tombstone / Arch cards populated with real photos of our advocates & chambers
        ========================================================================
      */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10 mt-auto pt-4 sm:pt-6">
        
        {/* Desktop: Centered 6-Card Grid / Mobile: Smooth Horizontal Swipe */}
        <div className="flex lg:grid lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-4 items-end justify-center overflow-x-auto scrollbar-none pb-2 sm:pb-0 px-2 sm:px-0 snap-x snap-mandatory">
          {archCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.link}
              className="group relative flex-shrink-0 w-36 sm:w-44 lg:w-auto h-48 sm:h-60 lg:h-68 rounded-t-[70px] sm:rounded-t-[90px] lg:rounded-t-[100px] rounded-b-xl sm:rounded-b-2xl overflow-hidden border-2 sm:border-[3px] border-white/80 hover:border-[#f3cd67] shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out hover:-translate-y-3 snap-center bg-gray-900"
            >
              {/* Real Photograph Inside Arch */}
              <Image
                src={card.src}
                alt={card.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 240px"
                className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark subtle gradient overlay with text at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-center">
                <p className="text-white text-xs sm:text-[13px] font-serif font-bold leading-tight group-hover:text-[#f3cd67] transition-colors drop-shadow-md">
                  {card.title}
                </p>
                <p className="text-gray-300 text-[9px] sm:text-[10px] font-sans mt-0.5 line-clamp-1 group-hover:text-white transition-colors">
                  {card.subtitle}
                </p>
              </div>

              {/* Subtle top golden sheen on hover */}
              <div className="absolute inset-0 rounded-t-[70px] sm:rounded-t-[90px] lg:rounded-t-[100px] border border-transparent group-hover:border-[#f3cd67]/40 pointer-events-none transition-colors" />
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}
