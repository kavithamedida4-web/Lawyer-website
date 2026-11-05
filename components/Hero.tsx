'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SlideItem {
  id: number;
  bg: string;
  tag: string;
  cardTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  desc: string;
  link: string;
}

const slides: SlideItem[] = [
  {
    id: 0,
    bg: '/hero-office-chamber.jpg',
    tag: 'EXECUTIVE CHAMBERS',
    cardTitle: 'UK Law Firm Head Chambers',
    heroTitle: 'Trusted Legal Expertise In Court',
    heroSubtitle: 'Executive Chambers & Law Office',
    desc: 'State-of-the-art advocate chambers in Hyderabad featuring the illuminated "LAW & JUSTICE" emblem wall.',
    link: '/#about',
  },
  {
    id: 1,
    bg: '/uk-law-firm-partners.jpg',
    tag: 'SENIOR LEADERSHIP',
    cardTitle: 'Sri Umamaheshwar Reddy & Kamalakar',
    heroTitle: '25+ Years Of Trial Excellence',
    heroSubtitle: 'Senior Advocates & Legal Consultants',
    desc: 'Seasoned High Court advocates providing strategic defense for individuals, families, and corporate enterprises.',
    link: '/#about',
  },
  {
    id: 2,
    bg: '/advocate-desk-justice.jpg',
    tag: 'STRATEGIC COUNSEL',
    cardTitle: 'Consultation Chambers Desk',
    heroTitle: 'Strategic Defense & Legal Counsel',
    heroSubtitle: 'Confidential Hearing Chambers',
    desc: 'Private chambers dedicated to rigorous case evaluation, trial preparation, and strategic litigation planning.',
    link: '/#services',
  },
  {
    id: 3,
    bg: '/advocate-reading-bookshelf.jpg',
    tag: 'CASE PRECEDENTS',
    cardTitle: 'High Court Law Library',
    heroTitle: 'Deep Research & Precedents',
    heroSubtitle: 'Statutory Research & Precedent Analysis',
    desc: 'Exhaustive statutory research backed by extensive Supreme Court & High Court rulings and case law reports.',
    link: '/#services',
  },
  {
    id: 4,
    bg: '/hero-advocate-umamaheshwar-seated.jpg',
    tag: 'TRIAL ADVOCACY',
    cardTitle: 'Courtroom Trial Advocacy',
    heroTitle: 'Tenacious Trial Representation',
    heroSubtitle: 'Bail, Trial & High Court Defense',
    desc: 'Seasoned defense litigation counsel across Telangana High Court, District Courts, and Special Tribunals.',
    link: '/#contact',
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const active = slides[activeIdx];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[620px] max-h-screen w-full bg-[#070c14] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-22 pb-5 sm:pb-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        ========================================================================
        DYNAMIC IMMERSIVE BACKGROUND IMAGE (Switches smoothly with active slide)
        ========================================================================
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={s.bg}
              alt={s.heroTitle}
              fill
              priority={idx === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-center brightness-[0.62] contrast-[1.10]"
            />
          </div>
        ))}

        {/* 
          Directional Dark Gradients:
          - Deep obsidian navy on left for 100% crystal-clear readability
          - Gentle vignette at bottom to ground the controls & cards
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c14]/95 via-[#070c14]/80 via-45% to-[#070c14]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c14]/90 via-transparent to-[#070c14]/50" />
      </div>

      {/* 
        ========================================================================
        FAR LEFT VERTICAL CONTACT / SOCIAL BAR (Matching reference layout)
        ========================================================================
      */}
      <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4 text-white/70">
        <a
          href="https://wa.me/918919439071"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp UK Law Firm"
          className="hover:text-[#25D366] hover:scale-115 transition-all text-sm"
        >
          💬
        </a>
        <a
          href="tel:+918919439071"
          aria-label="Call UK Law Firm"
          className="hover:text-[#f3cd67] hover:scale-115 transition-all text-sm"
        >
          📞
        </a>
        <a
          href="mailto:info@uklawfirm.in"
          aria-label="Email UK Law Firm"
          className="hover:text-[#f3cd67] hover:scale-115 transition-all text-sm"
        >
          ✉️
        </a>
        <div className="w-[1.5px] h-12 bg-white/25 mt-1" />
      </div>

      {/* 
        ========================================================================
        MAIN BODY: LEFT CONTENT + RIGHT CAROUSEL CARDS
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:pl-20 md:pr-10 my-auto flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          
          {/* ==================================================================
              LEFT SIDE: CONTENT (Matching the Iceland / Hiking reference)
              Eyebrow line, bold headline, description paragraph, and pill CTA
              ================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Eyebrow with horizontal dash */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-8 h-[2px] bg-[#f3cd67]" />
              <span className="text-[#f3cd67] text-[11px] sm:text-xs font-semibold tracking-widest uppercase font-sans">
                {active.tag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.12] tracking-tight mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              <span>{active.heroTitle}</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-white/85 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-sans font-normal mb-5 max-w-md drop-shadow-sm line-clamp-3">
              {active.desc}
            </p>

            {/* CTA Action Button */}
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
                className="px-5 py-2.5 rounded-full text-white/80 hover:text-[#f3cd67] text-xs sm:text-sm font-medium font-sans tracking-wide transition-colors inline-flex items-center gap-1.5"
              >
                <span>Practice Areas</span>
                <span>↓</span>
              </a>
            </div>

          </div>

          {/* ==================================================================
              RIGHT SIDE: CAROUSEL OF CARDS (Exact match to reference layout)
              Popular Places style header + horizontal row of cards
              ================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header above cards with underline */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="inline-block relative">
                <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wider uppercase font-sans">
                  Chambers &amp; Leadership
                </span>
                <div className="w-full h-[2px] bg-[#f3cd67] mt-1" />
              </div>

              {/* Slide Counter */}
              <div className="text-white/60 text-xs font-mono">
                <span className="text-[#f3cd67] font-bold">0{activeIdx + 1}</span> / 0{slides.length}
              </div>
            </div>

            {/* Horizontal Cards Row */}
            <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none py-2 px-1 snap-x snap-mandatory">
              {slides.map((slide, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`group relative flex-shrink-0 w-36 sm:w-44 md:w-48 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden text-left transition-all duration-400 ease-out snap-start cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-[#f3cd67] scale-102 shadow-[0_12px_30px_rgba(201,168,76,0.35)] -translate-y-1'
                        : 'opacity-75 hover:opacity-100 hover:-translate-y-0.5 border border-white/20'
                    }`}
                  >
                    {/* Card Photograph */}
                    <Image
                      src={slide.bg}
                      alt={slide.cardTitle}
                      fill
                      unoptimized
                      sizes="220px"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay inside card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                    {/* Text content inside card (Matching reference card styling) */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex flex-col justify-end">
                      
                      {/* White dash */}
                      <div className="w-5 h-[2px] bg-white/70 mb-1.5" />

                      {/* Small uppercase tag */}
                      <span className="text-[#f3cd67] text-[8.5px] sm:text-[9.5px] font-bold tracking-wider uppercase block font-sans truncate">
                        {slide.tag}
                      </span>

                      {/* Card Title */}
                      <h3 className="text-white font-serif font-bold text-xs sm:text-sm leading-tight mt-0.5 drop-shadow-md line-clamp-2 group-hover:text-[#f3cd67] transition-colors">
                        {slide.cardTitle}
                      </h3>

                      {/* Short 2-line description */}
                      <p className="text-gray-300 text-[8px] sm:text-[9px] font-sans mt-1 line-clamp-2 leading-snug">
                        {slide.desc}
                      </p>
                    </div>

                    {/* Active gold corner sheen */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#f3cd67] text-[#070c14] text-[8px] font-bold tracking-wider">
                        ACTIVE
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* 
        ========================================================================
        BOTTOM CENTER NAVIGATION ARROWS (Matching reference circular buttons)
        Centered circular Prev & Next buttons
        ========================================================================
      */}
      <div className="relative z-20 flex items-center justify-center gap-3 w-full">
        {/* Prev Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/35 bg-black/55 hover:bg-[#c9a84c] text-white hover:text-black hover:border-[#c9a84c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/35 bg-black/55 hover:bg-[#c9a84c] text-white hover:text-black hover:border-[#c9a84c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}
