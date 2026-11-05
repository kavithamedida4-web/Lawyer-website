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
      className="relative h-[100dvh] max-h-[100dvh] bg-[#070c14] text-white overflow-hidden flex flex-col justify-between pt-18 sm:pt-20 lg:pt-22 pb-2 sm:pb-3 select-none"
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
          className="object-cover object-center brightness-[0.72] contrast-[1.08] scale-102"
        />
        
        {/* Layered dark gradients: deep navy top & bottom, glowing center transparency */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070c14]/85 via-[#070c14]/65 to-[#070c14]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(7,12,20,0.85)_100%)]" />
      </div>

      {/* 
        ========================================================================
        CENTER HERO CONTENT (Strictly sized to fit viewport with zero overflow)
        Centered title, subtitle, and action buttons
        ========================================================================
      */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 text-center relative z-10 my-auto">
        
        {/* Gold Pill Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-black/45 backdrop-blur-md border border-[#c9a84c]/50 text-[#f3cd67] text-[9.5px] sm:text-[11px] font-semibold tracking-widest uppercase mb-2 sm:mb-2.5 shadow-md">
          <span className="text-[10px]">✦</span>
          <span>UK LAW FIRM • ADVOCATES &amp; LEGAL CONSULTANTS</span>
          <span className="text-[10px]">✦</span>
        </div>

        {/* Main Headline - Compact and punchy */}
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.12] tracking-tight mb-2 sm:mb-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          <span>Trusted Legal Expertise </span>
          <span className="text-[#f3cd67] italic font-normal drop-shadow-md">For Your Success</span>
        </h1>

        {/* Golden Horizontal Accent Divider */}
        <div className="w-12 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mb-2 sm:mb-2.5" />

        {/* Subtitle Description */}
        <p className="text-white/88 text-[11px] sm:text-xs lg:text-[14px] leading-relaxed max-w-xl mx-auto font-sans font-normal mb-3 sm:mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] line-clamp-2">
          25+ Years of courtroom excellence across Telangana High Court, District Courts, and Special Tribunals. Seasoned defense for individuals, families, and corporate enterprises.
        </p>

        {/* Action CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#e5bf55] via-[#d4af37] to-[#b88a38] hover:brightness-110 text-[#080d16] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold font-sans tracking-wide inline-flex items-center gap-1.5 transition-all shadow-[0_3px_15px_rgba(201,168,76,0.35)] hover:shadow-[0_5px_20px_rgba(201,168,76,0.55)] active:scale-95"
          >
            <span className="text-xs sm:text-sm leading-none">⚖️</span>
            <span>BOOK CONSULTATION</span>
            <span className="font-bold">→</span>
          </Link>

          <a
            href="#services"
            className="bg-black/45 hover:bg-black/65 text-white border border-[#c9a84c]/70 hover:border-[#f3cd67] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold font-sans tracking-wide inline-flex items-center gap-1.5 backdrop-blur-md transition-all active:scale-95 shadow-sm"
          >
            <span>OUR PRACTICE AREAS</span>
            <span className="text-[#f3cd67]">↓</span>
          </a>
        </div>

      </div>

      {/* 
        ========================================================================
        BOTTOM ROW OF ARCH-SHAPED CARDS (Exact 3 Chillies Reference Style)
        Sized proportionally to fit 100% inside viewport with zero cut-off
        ========================================================================
      */}
      <div className="w-full max-w-[1360px] mx-auto px-3 sm:px-6 relative z-10 mt-auto pb-1 sm:pb-2">
        
        {/* Desktop: Centered 6-Card Grid / Mobile: Smooth Horizontal Swipe */}
        <div className="flex lg:grid lg:grid-cols-6 gap-2.5 sm:gap-3.5 lg:gap-3.5 items-end justify-center overflow-x-auto scrollbar-none px-1 sm:px-0 snap-x snap-mandatory">
          {archCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.link}
              className="group relative flex-shrink-0 w-32 sm:w-40 lg:w-auto h-40 sm:h-48 lg:h-52 xl:h-56 rounded-t-[50px] sm:rounded-t-[70px] lg:rounded-t-[80px] rounded-b-xl sm:rounded-b-2xl overflow-hidden border-2 sm:border-[2.5px] border-white/80 hover:border-[#f3cd67] shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all duration-400 ease-out hover:-translate-y-2 snap-center bg-gray-900"
            >
              {/* Real Photograph Inside Arch */}
              <Image
                src={card.src}
                alt={card.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 140px, (max-width: 1200px) 180px, 220px"
                className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark gradient overlay with title & caption visible on screen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-2 sm:p-2.5 text-center">
                <p className="text-white text-[11px] sm:text-xs font-serif font-bold leading-tight group-hover:text-[#f3cd67] transition-colors drop-shadow-md">
                  {card.title}
                </p>
                <p className="text-gray-300 text-[8.5px] sm:text-[9.5px] font-sans mt-0.5 line-clamp-1 group-hover:text-white transition-colors">
                  {card.subtitle}
                </p>
              </div>

              {/* Subtle top golden sheen on hover */}
              <div className="absolute inset-0 rounded-t-[50px] sm:rounded-t-[70px] lg:rounded-t-[80px] border border-transparent group-hover:border-[#f3cd67]/40 pointer-events-none transition-colors" />
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}
