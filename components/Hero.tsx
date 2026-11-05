'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FixedCard {
  id: number;
  img: string;
  tag: string;
  title: string;
  desc: string;
  pos: string;
  link: string;
}

const fixedCards: FixedCard[] = [
  {
    id: 1,
    img: '/hero-card-partners.jpg',
    tag: 'SENIOR LEADERSHIP',
    title: 'UK Law Firm Partners',
    desc: 'Sri Umamaheshwar Reddy & Sri Kamalakar',
    pos: 'object-top sm:object-[center_15%]',
    link: '/#about',
  },
  {
    id: 2,
    img: '/hero-card-desk-justice.jpg',
    tag: 'EXECUTIVE CONSULTATION',
    title: 'Chambers Consultation Desk',
    desc: 'Senior Advocate M. Umamaheshwar Reddy',
    pos: 'object-center',
    link: '/#about',
  },
  {
    id: 3,
    img: '/hero-card-kamalakar.jpg',
    tag: 'SENIOR ADVOCATE',
    title: 'S. Kamalakar',
    desc: 'High Court Advocate (M.C.A., LL.B.)',
    pos: 'object-top',
    link: '/#about',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[620px] max-h-screen w-full bg-[#070c14] text-white overflow-hidden flex flex-col justify-center pt-20 sm:pt-22 pb-5 sm:pb-6 select-none"
    >
      {/* 
        ========================================================================
        HERO BACKGROUND IMAGE: Real Executive Chambers (LAW & JUSTICE Wall)
        Fixed background image with left gradient for crystal-clear readability
        ========================================================================
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <Image
          src="/hero-office-chamber.jpg"
          alt="UK Law Firm Executive Chambers - Law & Justice Office"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center lg:object-[60%_center] brightness-[0.66] contrast-[1.10]"
        />

        {/* Layered dark gradients for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c14]/95 via-[#070c14]/80 via-48% to-[#070c14]/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c14]/90 via-transparent to-[#070c14]/50" />
      </div>

      {/* 
        ========================================================================
        MAIN BODY: LEFT CONTENT + RIGHT 3 FIXED CARDS (No scrolling, fixed)
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 my-auto flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          
          {/* ==================================================================
              LEFT SIDE: CONTENT (Clean font-sans typography with font-weight 600)
              Eyebrow line, bold headline, description paragraph, and pill CTA
              ================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Eyebrow with horizontal dash line */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-8 sm:w-10 h-[2px] bg-[#f3cd67]" />
              <span className="text-[#f3cd67] text-[11px] sm:text-xs font-semibold tracking-widest uppercase font-sans">
                UK LAW FIRM • ADVOCATES
              </span>
            </div>

            {/* Main Headline - font-sans font-semibold (600) */}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-semibold text-white leading-[1.15] tracking-tight mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              <span>Trusted Legal</span>
              <br />
              <span className="text-[#f3cd67]">Expertise In Court</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-white/85 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-sans font-normal mb-5 max-w-md drop-shadow-sm">
              25+ Years of courtroom excellence across Telangana High Court, District Courts, and Special Tribunals. Seasoned defense for individuals, families, and corporate enterprises.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/60 hover:border-[#f3cd67] bg-white/10 hover:bg-[#c9a84c] text-white hover:text-black backdrop-blur-md text-xs sm:text-sm font-semibold font-sans tracking-wide transition-all duration-300 shadow-lg active:scale-95 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Book Consultation</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <a
                href="#services"
                className="px-4 py-2.5 rounded-full text-white/80 hover:text-[#f3cd67] text-xs sm:text-sm font-medium font-sans tracking-wide transition-colors inline-flex items-center gap-1.5"
              >
                <span>Practice Areas</span>
                <span>↓</span>
              </a>
            </div>

          </div>

          {/* ==================================================================
              RIGHT SIDE: EXACTLY 3 FIXED CARDS (No scrolling, not changing)
              Displaying the 3 user-provided real advocate photographs
              ================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header above cards with gold underline */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="inline-block relative">
                <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans">
                  Chambers &amp; Senior Advocates
                </span>
                <div className="w-full h-[2.5px] bg-[#f3cd67] mt-1 rounded-full" />
              </div>
            </div>

            {/* 3 Fixed Cards Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-1">
              {fixedCards.map((card) => (
                <Link
                  key={card.id}
                  href={card.link}
                  className="group relative w-full h-[290px] sm:h-[330px] lg:h-[360px] xl:h-[380px] rounded-2xl overflow-hidden text-left border border-white/20 hover:border-[#f3cd67] shadow-[0_14px_35px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out hover:-translate-y-1.5 bg-[#0c1424] block"
                >
                  {/* Card Photograph */}
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 110px, 240px"
                    className={`object-cover ${card.pos} group-hover:scale-106 transition-transform duration-500 ease-out`}
                  />

                  {/* Subtle dark gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Subtle golden sheen on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#f3cd67]/50 pointer-events-none transition-colors" />
                </Link>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
