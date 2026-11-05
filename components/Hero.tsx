'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PracticeCard {
  id: number;
  img: string;
  tag: string;
  title: string;
  desc: string;
  link: string;
}

const practiceCards: PracticeCard[] = [
  {
    id: 1,
    img: '/uk-law-firm-partners.jpg',
    tag: 'SENIOR LEADERSHIP',
    title: 'Sri Umamaheshwar Reddy & Kamalakar',
    desc: 'Founding senior advocates with 25+ years of trial advocacy across Telangana High Court.',
    link: '/#about',
  },
  {
    id: 2,
    img: '/advocate-desk-justice.jpg',
    tag: 'STRATEGIC COUNSEL',
    title: 'Executive Consultation Chambers',
    desc: 'Confidential client hearing chambers dedicated to in-depth case evaluation & trial strategy.',
    link: '/#services',
  },
  {
    id: 3,
    img: '/advocate-reading-bookshelf.jpg',
    tag: 'CASE PRECEDENTS',
    title: 'High Court Legal Research',
    desc: 'Comprehensive precedent analysis backed by extensive Supreme Court & High Court rulings.',
    link: '/#services',
  },
  {
    id: 4,
    img: '/hero-advocate-umamaheshwar-seated.jpg',
    tag: 'TRIAL ADVOCACY',
    title: 'Courtroom Trial Defense',
    desc: 'Seasoned defense litigation counsel across Telangana High Court and District Courts.',
    link: '/#contact',
  },
  {
    id: 5,
    img: '/hero-advocate-kamalakar-portrait.jpg',
    tag: 'CIVIL & CORPORATE',
    title: 'S. Kamalakar, Senior Advocate',
    desc: 'Specialized in corporate contracts, commercial disputes, property law, and arbitration.',
    link: '/#about',
  },
  {
    id: 6,
    img: '/hero-advocate-umamaheshwar-portrait.jpg',
    tag: 'CRIMINAL & WRIT',
    title: 'M. Umamaheshwar Reddy, Advocate',
    desc: 'Expert in bail defense, criminal trial advocacy, constitutional writ petitions, and appeals.',
    link: '/#about',
  },
];

export default function Hero() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalCards = practiceCards.length;

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Auto-scroll cards every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Slice exactly 3 cards for display on desktop
  const visibleCards = [
    practiceCards[startIndex % totalCards],
    practiceCards[(startIndex + 1) % totalCards],
    practiceCards[(startIndex + 2) % totalCards],
  ];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[620px] max-h-screen w-full bg-[#070c14] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-22 pb-5 sm:pb-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        ========================================================================
        HERO BACKGROUND IMAGE: User Uploaded Real Office Photo (Image 2)
        Executive Chambers with illuminated "LAW & JUSTICE" emblem wall
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

        {/* 
          Layered dark gradients:
          - Deep obsidian navy on left for 100% crisp text readability
          - Right side lets the real chambers and "LAW & JUSTICE" illuminated wall shine through
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c14]/95 via-[#070c14]/80 via-48% to-[#070c14]/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c14]/90 via-transparent to-[#070c14]/50" />
      </div>

      {/* 
        ========================================================================
        MAIN BODY: LEFT CONTENT + RIGHT 3-CARD CAROUSEL
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 my-auto flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          
          {/* ==================================================================
              LEFT SIDE: CONTENT (Matching the Iceland / Hiking reference)
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

            {/* Main Headline */}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-semibold text-white leading-[1.15] tracking-tight mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              <span>Trusted Legal</span>
              <br />
              <span className="text-[#f3cd67]">Expertise In Court</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-white/85 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-sans font-normal mb-5 max-w-md drop-shadow-sm">
              25+ Years of courtroom excellence across Telangana High Court, District Courts, and Special Tribunals. Seasoned defense for individuals, families, and corporate enterprises.
            </p>

            {/* CTA Action Button (Pill style matching reference 'Explore Location') */}
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
              RIGHT SIDE: EXACTLY 3 CARDS (Exact match to reference layout)
              'Popular Places' styled header + 3 vertical rectangular cards
              ================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header above cards with yellow/gold underline */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="inline-block relative">
                <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans">
                  Popular Practice Areas
                </span>
                <div className="w-full h-[2.5px] bg-[#f3cd67] mt-1 rounded-full" />
              </div>

              {/* Slide Counter */}
              <div className="text-white/60 text-xs font-mono">
                <span className="text-[#f3cd67] font-bold">0{startIndex + 1}</span> / 0{totalCards}
              </div>
            </div>

            {/* 3 Cards Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-1">
              {visibleCards.map((card, idx) => (
                <Link
                  key={`${card.id}-${idx}`}
                  href={card.link}
                  className="group relative w-full h-[290px] sm:h-[330px] lg:h-[360px] xl:h-[380px] rounded-2xl overflow-hidden text-left border border-white/20 hover:border-[#f3cd67] shadow-[0_14px_35px_rgba(0,0,0,0.6)] transition-all duration-400 ease-out hover:-translate-y-1.5 bg-[#0c1424] block"
                >
                  {/* Card Photograph */}
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 110px, 240px"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Dark gradient overlay inside card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  {/* Text content inside card (Matching reference card styling) */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex flex-col justify-end">
                    
                    {/* White dash */}
                    <div className="w-5 h-[2px] bg-white/75 mb-1.5" />

                    {/* Small uppercase tag */}
                    <span className="text-[#f3cd67] text-[8px] sm:text-[9px] font-bold tracking-wider uppercase block font-sans truncate">
                      {card.tag}
                    </span>

                    {/* Card Title */}
                    <h3 className="text-white font-sans font-semibold text-xs sm:text-sm leading-tight mt-0.5 drop-shadow-md line-clamp-2 group-hover:text-[#f3cd67] transition-colors">
                      {card.title}
                    </h3>

                    {/* Short 2-line description */}
                    <p className="text-gray-300 text-[7.5px] sm:text-[8.5px] font-sans mt-1 line-clamp-2 leading-snug">
                      {card.desc}
                    </p>
                  </div>

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
