'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSlide {
  src: string;
  tag: string;
  title: string;
  desc: string;
  pos: string;
}

const slides: HeroSlide[] = [
  {
    src: '/hero-office-chamber.jpg',
    tag: 'Executive Chambers',
    title: 'UK Law Firm Head Chambers',
    desc: 'State-of-the-art office featuring the illuminated "LAW & JUSTICE" emblem wall.',
    pos: 'object-center lg:object-[68%_center]',
  },
  {
    src: '/uk-law-firm-partners.jpg',
    tag: 'Senior Leadership',
    title: 'Sri Umamaheshwar Reddy & Sri Kamalakar',
    desc: 'Founding senior advocates with 25+ years of courtroom excellence.',
    pos: 'object-center lg:object-[65%_center]',
  },
  {
    src: '/advocate-desk-justice.jpg',
    tag: 'Strategic Counsel',
    title: 'Executive Legal Consultation Desk',
    desc: 'Chambers dedicated to in-depth case evaluation and defense strategy.',
    pos: 'object-center lg:object-[70%_center]',
  },
  {
    src: '/advocate-reading-bookshelf.jpg',
    tag: 'Precedent Research',
    title: 'Extensive Law Precedent Library',
    desc: 'Deep statutory research backed by Supreme Court & High Court rulings.',
    pos: 'object-center lg:object-[68%_center]',
  },
  {
    src: '/hero-advocate-umamaheshwar-seated.jpg',
    tag: 'Trial Advocacy',
    title: 'Courtroom Trial & Litigation Counsel',
    desc: 'Seasoned defense preparation across Telangana High Court & District Courts.',
    pos: 'object-center lg:object-[70%_center]',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-scroll images every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] h-[100dvh] w-full bg-[#070c14] text-white flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-14 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        ========================================================================
        FULL-BLEED BACKGROUND IMAGE SLIDER (No box! True background image)
        Images smoothly crossfade and auto-scroll, perfectly positioned on right
        ========================================================================
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === current
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={idx === 0}
              unoptimized
              sizes="100vw"
              className={`object-cover ${slide.pos} brightness-[0.78] contrast-[1.08]`}
            />
          </div>
        ))}

        {/* 
          Sophisticated gradient overlays:
          - Deep obsidian on the left to guarantee 100% crystal-clear readability
          - Transparent in center & right so the real office & advocates shine through brilliantly
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c14] via-[#070c14]/85 via-50% to-[#070c14]/25 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-transparent to-[#070c14]/60" />
      </div>

      {/* 
        ========================================================================
        TOP RIGHT SLIDER CONTROLS (Matching Travel Insurance reference style)
        Counter pill and Prev/Next arrows
        ========================================================================
      */}
      <div className="relative z-20 flex items-center justify-end gap-2.5 max-w-[1400px] w-full mx-auto">
        {/* Slide Counter Pill */}
        <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium shadow-lg">
          <span className="text-[#f3cd67] font-bold">0{current + 1}</span>
          <span className="text-white/40 mx-1.5">/</span>
          <span className="text-white/70">0{slides.length}</span>
        </div>

        {/* Prev Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-[#c9a84c] text-white hover:text-black border border-white/20 hover:border-[#c9a84c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-10 h-10 rounded-full bg-black/60 hover:bg-[#c9a84c] text-white hover:text-black border border-white/20 hover:border-[#c9a84c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 
        ========================================================================
        MAIN CONTENT: ONE SIDE CONTENT (Left-aligned matching reference)
        Positioned neatly over the background with crystal-clear contrast
        ========================================================================
      */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto my-auto flex-1 flex items-center">
        
        {/* Left Side Content Card (Matching the Reference Image Card) */}
        <div className="w-full max-w-xl lg:max-w-2xl bg-[#0c1424]/90 sm:bg-[#0c1424]/80 backdrop-blur-xl border border-[#c9a84c]/35 rounded-2xl sm:rounded-3xl p-6 sm:p-9 xl:p-11 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          {/* Top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-[#c9a84c]/45 text-[#f3cd67] text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase mb-3 sm:mb-4 shadow-sm w-fit">
            <span className="text-[#e5bf55]">⚖️</span>
            <span>25+ YEARS OF COURTROOM EXCELLENCE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold text-white leading-[1.12] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            <span>Trusted Legal</span>
            <br />
            <span className="text-[#f3cd67] italic font-normal">Expertise For Your Success</span>
          </h1>

          {/* Golden Horizontal Accent Divider */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent mb-3 sm:mb-4" />

          {/* Subtitle Description */}
          <p className="text-white/88 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-sans font-normal mb-5 max-w-lg drop-shadow-sm">
            Dedicated trial advocates delivering strategic consultation and courtroom defense across the Telangana High Court, District Courts, and Special Tribunals. Seasoned advocacy for individuals, families, and corporate enterprises.
          </p>

          {/* Practice Area Highlight Badges */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-[11px] sm:text-xs text-white/90">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-[#f3cd67]">✓</span>
              <span className="truncate">High Court Defense</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-[#f3cd67]">✓</span>
              <span className="truncate">Civil &amp; Criminal Trials</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-[#f3cd67]">✓</span>
              <span className="truncate">Corporate Advisory</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-[#f3cd67]">✓</span>
              <span className="truncate">24/7 Priority Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#e5bf55] via-[#d4af37] to-[#b88a38] hover:brightness-110 text-[#080d16] px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold font-sans tracking-wide inline-flex items-center gap-2 transition-all shadow-[0_4px_18px_rgba(201,168,76,0.4)] hover:shadow-[0_6px_25px_rgba(201,168,76,0.6)] active:scale-95"
            >
              <span>BOOK CONSULTATION</span>
              <span className="font-bold">→</span>
            </Link>

            <a
              href="#services"
              className="bg-black/40 hover:bg-black/60 text-white border border-[#c9a84c]/60 hover:border-[#f3cd67] px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold font-sans tracking-wide inline-flex items-center gap-2 backdrop-blur-md transition-all active:scale-95 shadow-sm"
            >
              <span>OUR PRACTICE AREAS</span>
              <span className="text-[#f3cd67]">↓</span>
            </a>
          </div>

        </div>

      </div>

      {/* 
        ========================================================================
        BOTTOM RIGHT CAPTION & PROGRESS DOTS
        Floating glass pill indicating active slide details
        ========================================================================
      */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
        
        {/* Active Slide Caption Badge */}
        <div className="bg-black/60 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-[#f3cd67] animate-pulse" />
          <div className="text-left">
            <span className="text-[#f3cd67] text-[10px] font-bold uppercase tracking-wider block">
              {slides[current].tag}
            </span>
            <span className="text-white text-xs font-serif font-semibold">
              {slides[current].title}
            </span>
          </div>
        </div>

        {/* Slide Pagination Dots */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-2 rounded-full shadow-lg">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === current
                  ? 'w-7 h-2 bg-[#f3cd67] shadow-[0_0_10px_rgba(243,205,103,0.8)]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
