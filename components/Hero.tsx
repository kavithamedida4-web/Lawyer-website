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
      pos: 'object-top',
    },
    {
      src: '/mobile-hero-2.jpg',
      title: 'M. Umamaheshwar Reddy',
      subtitle: 'Senior Advocate (M.Sc., LL.B.)',
      link: '/#about',
      pos: 'object-top',
    },
    {
      src: '/advocate-desk-justice.jpg',
      title: 'Executive Chambers',
      subtitle: 'Strategic Consultation',
      link: '/#services',
      pos: 'object-center',
    },
    {
      src: '/uk-law-firm-partners.jpg',
      title: 'Senior Partners',
      subtitle: 'UK Law Firm Leadership',
      link: '/#about',
      pos: 'object-[center_20%]',
    },
    {
      src: '/advocate-reading-bookshelf.jpg',
      title: 'Case Law Research',
      subtitle: 'High Court Precedents',
      link: '/#services',
      pos: 'object-[center_25%]',
    },
    {
      src: '/mobile-hero-seated.jpg',
      title: 'Courtroom Defense',
      subtitle: 'Bail & Trial Advocacy',
      link: '/#contact',
      pos: 'object-top',
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[520px] max-h-screen w-full bg-[#070c14] text-white overflow-hidden flex flex-col justify-between pt-[68px] pb-0 select-none"
    >
      {/* 
        ========================================================================
        HERO BACKGROUND: REAL 'LAW & JUSTICE' CHAMBERS OFFICE (User Uploaded)
        Dark overlay ensures headline and button legibility
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
          className="object-cover object-center brightness-[0.68] contrast-[1.08]"
        />
        
        {/* Layered dark gradients for pristine contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070c14]/85 via-[#070c14]/60 to-[#070c14]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(7,12,20,0.85)_100%)]" />
      </div>

      {/* 
        ========================================================================
        CENTER HERO CONTENT (Compact, perfectly proportioned for laptop screens)
        Centered title, subtitle, and action buttons
        ========================================================================
      */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 max-w-3xl mx-auto relative z-10 w-full py-2">
        
        {/* Main Headline */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold text-white leading-[1.15] tracking-tight mb-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          <span>Trusted Legal Expertise </span>
          <span className="text-[#f3cd67] italic font-normal drop-shadow-md">For Your Success</span>
        </h1>

        {/* Golden Horizontal Accent Divider */}
        <div className="w-12 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mb-1.5" />

        {/* Subtitle Description */}
        <p className="text-white/85 text-[11px] sm:text-xs md:text-[12.5px] leading-snug sm:leading-relaxed max-w-lg mx-auto font-sans font-normal mb-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] line-clamp-2">
          25+ Years of courtroom excellence across Telangana High Court, District Courts, and Special Tribunals. Seasoned defense for individuals, families, and corporate enterprises.
        </p>

        {/* Action CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#e5bf55] via-[#d4af37] to-[#b88a38] hover:brightness-110 text-[#080d16] px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold font-sans tracking-wide inline-flex items-center gap-1.5 transition-all shadow-[0_3px_15px_rgba(201,168,76,0.35)] hover:shadow-[0_5px_20px_rgba(201,168,76,0.55)] active:scale-95"
          >
            <span className="text-xs sm:text-sm leading-none">⚖️</span>
            <span>BOOK CONSULTATION</span>
            <span className="font-bold">→</span>
          </Link>

          <a
            href="#services"
            className="bg-black/50 hover:bg-black/70 text-white border border-[#c9a84c]/70 hover:border-[#f3cd67] px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold font-sans tracking-wide inline-flex items-center gap-1.5 backdrop-blur-md transition-all active:scale-95 shadow-sm"
          >
            <span>OUR PRACTICE AREAS</span>
            <span className="text-[#f3cd67]">↓</span>
          </a>
        </div>

      </div>

      {/* 
        ========================================================================
        BOTTOM ROW OF ARCH-SHAPED CARDS (Exact 3 Chillies Arched Reference Style)
        - Anchored directly to the bottom (bottom-0)
        - Arched at top (rounded-t-[60px] to rounded-t-[80px]), flat at bottom (rounded-b-none)
        - Clean crisp white arch border (border-t-[3px] border-x-[3px] border-b-0)
        - 100% visible inside the screen, zero cut-off, zero vertical overflow
        ========================================================================
      */}
      <div className="flex-shrink-0 w-full max-w-[1280px] mx-auto px-3 sm:px-6 relative z-10">
        
        {/* Responsive grid: on md+ all 6 cards fit side-by-side, mobile scrolls */}
        <div className="flex md:grid md:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3.5 items-end justify-center overflow-x-auto scrollbar-none px-1 sm:px-0 snap-x snap-mandatory">
          {archCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.link}
              className="group relative flex-shrink-0 w-28 sm:w-32 md:w-full h-[21vh] min-h-[110px] max-h-[170px] rounded-t-[45px] sm:rounded-t-[60px] lg:rounded-t-[75px] rounded-b-none overflow-hidden border-t-[3px] border-x-[3px] border-b-0 border-white/90 hover:border-[#f3cd67] shadow-[0_-4px_20px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out hover:-translate-y-1.5 snap-center bg-gray-900 block"
            >
              {/* Real Photograph Inside Arch */}
              <Image
                src={card.src}
                alt={card.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 120px, 200px"
                className={`object-cover ${card.pos} group-hover:scale-108 transition-transform duration-700 ease-out`}
              />

              {/* Sleek bottom dark gradient overlay with advocate title & role */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-1.5 text-center">
                <p className="text-white text-[9.5px] sm:text-[10.5px] font-serif font-bold leading-tight group-hover:text-[#f3cd67] transition-colors drop-shadow-md truncate">
                  {card.title}
                </p>
                <p className="text-gray-300 text-[7px] sm:text-[8px] font-sans mt-0.5 truncate group-hover:text-white transition-colors">
                  {card.subtitle}
                </p>
              </div>

              {/* Subtle top golden sheen on hover */}
              <div className="absolute inset-0 rounded-t-[45px] sm:rounded-t-[60px] lg:rounded-t-[75px] border-t border-x border-transparent group-hover:border-[#f3cd67]/50 pointer-events-none transition-colors" />
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}
