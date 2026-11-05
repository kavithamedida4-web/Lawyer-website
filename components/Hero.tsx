'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSlide {
  src: string;
  tag: string;
  title: string;
  desc: string;
}

const slides: HeroSlide[] = [
  {
    src: '/hero-office-chamber.jpg',
    tag: 'Headquarters & Chambers',
    title: 'UK Law Firm Executive Chambers',
    desc: 'State-of-the-art advocate chambers featuring the official illuminated "LAW & JUSTICE" emblem.',
  },
  {
    src: '/uk-law-firm-partners.jpg',
    tag: 'Firm Leadership',
    title: 'Senior Advocates Umamaheshwar Reddy & Kamalakar',
    desc: 'Founding partners with 25+ years of combined trial advocacy across Telangana High Court.',
  },
  {
    src: '/advocate-desk-justice.jpg',
    tag: 'Strategic Counsel',
    title: 'Executive Legal Consultation Desk',
    desc: 'Confidential client consultation chamber dedicated to rigorous case analysis and trial strategy.',
  },
  {
    src: '/advocate-reading-bookshelf.jpg',
    tag: 'Precedent Research',
    title: 'Comprehensive Legal Library & Case Law',
    desc: 'In-depth statutory research backed by extensive Supreme Court precedents and law reports.',
  },
  {
    src: '/hero-advocate-umamaheshwar-seated.jpg',
    tag: 'Courtroom Defense',
    title: 'Trial Advocacy & Case Preparation',
    desc: 'Seasoned litigation counsel for civil disputes, criminal trials, and special tribunal hearings.',
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

  // Auto-advance slides every 3.5 seconds unless user hovers
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
      className="relative min-h-[100dvh] lg:h-[100dvh] w-full bg-[#070c14] text-white flex flex-col justify-center pt-20 sm:pt-22 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a2d52]/20 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main 2-Column Split Container: Content on Left, Scrolling Images on Right */}
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center relative z-10 flex-1 my-auto">
        
        {/* ====================================================================
            LEFT SIDE: CONTENT CARD (Exact match to reference layout)
            Title, description, highlight tags, and action buttons
            ==================================================================== */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left">
          
          {/* Dark Glass Card enclosing content for clean aesthetic */}
          <div className="bg-[#0c1424]/90 sm:bg-[#0c1424]/85 backdrop-blur-xl border border-[#c9a84c]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 xl:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

            {/* Small eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-[#c9a84c]/40 text-[#f3cd67] text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase mb-4 shadow-sm w-fit">
              <span className="text-[10px] text-[#e5bf55]">⚖️</span>
              <span>25+ YEARS OF COURTROOM EXCELLENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl xl:text-[44px] font-bold text-white leading-[1.12] tracking-tight mb-3">
              <span>Trusted Legal</span>
              <br />
              <span className="text-[#f3cd67] italic font-normal">Expertise For Your Success</span>
            </h1>

            {/* Divider */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent mb-4" />

            {/* Description */}
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-sans font-normal mb-5">
              Dedicated advocates delivering strategic trial defense and consultation across the Telangana High Court, District Courts, and Special Tribunals. Seasoned advocacy for individuals, families, and corporate enterprises.
            </p>

            {/* Key highlights pills */}
            <div className="grid grid-cols-2 gap-2 mb-6 text-[11px] sm:text-xs text-white/90">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
                <span className="text-[#f3cd67]">✓</span>
                <span className="truncate">High Court Defense</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
                <span className="text-[#f3cd67]">✓</span>
                <span className="truncate">Civil &amp; Criminal Trials</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
                <span className="text-[#f3cd67]">✓</span>
                <span className="truncate">Corporate Advisory</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
                <span className="text-[#f3cd67]">✓</span>
                <span className="truncate">24/7 Priority Support</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#e5bf55] via-[#d4af37] to-[#b88a38] hover:brightness-110 text-[#080d16] px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-sans tracking-wide inline-flex items-center gap-2 transition-all shadow-[0_4px_16px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_22px_rgba(201,168,76,0.55)] active:scale-95"
              >
                <span>BOOK CONSULTATION</span>
                <span className="font-bold">→</span>
              </Link>

              <a
                href="#services"
                className="bg-white/5 hover:bg-white/10 text-white border border-[#c9a84c]/60 hover:border-[#f3cd67] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-sans tracking-wide inline-flex items-center gap-2 backdrop-blur-md transition-all active:scale-95"
              >
                <span>OUR PRACTICE AREAS</span>
                <span className="text-[#f3cd67]">↓</span>
              </a>
            </div>

          </div>

        </div>

        {/* ====================================================================
            RIGHT SIDE: SCROLLING IMAGES SHOWCASE (Slides automatically + arrows)
            Clean large photos of real chambers & advocates
            ==================================================================== */}
        <div
          className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Showcase Image Frame */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 hover:border-[#c9a84c]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0c1424] transition-all">
            
            {/* Sliding Images */}
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === current
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />

                {/* Subtle vignette gradient for photo depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
              </div>
            ))}

            {/* Top Controls Bar: Slide Counter & Prev/Next Arrows (Matching reference) */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              
              {/* Slide Counter Pill */}
              <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium shadow-md">
                <span className="text-[#f3cd67] font-bold">0{current + 1}</span>
                <span className="text-white/50 mx-1">/</span>
                <span className="text-white/70">0{slides.length}</span>
              </div>

              {/* Prev Arrow Button */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Image"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#c9a84c] text-white hover:text-black border border-white/20 hover:border-[#c9a84c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md active:scale-90 cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Arrow Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Image"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#c9a84c] text-white hover:text-black border border-white/20 hover:border-[#c9a84c] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md active:scale-90 cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom Caption Pill over Image */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 bg-black/65 backdrop-blur-md border border-white/15 p-3.5 sm:p-4 rounded-xl">
              <div className="flex-1">
                <div className="inline-block px-2 py-0.5 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#f3cd67] text-[10px] font-bold uppercase tracking-wider mb-1">
                  {slides[current].tag}
                </div>
                <h2 className="text-white text-sm sm:text-base font-serif font-bold leading-snug drop-shadow-md">
                  {slides[current].title}
                </h2>
                <p className="text-white/80 text-[11px] sm:text-xs font-sans line-clamp-1 mt-0.5">
                  {slides[current].desc}
                </p>
              </div>

              {/* Dots navigation */}
              <div className="flex items-center gap-1.5 self-center sm:self-end">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      idx === current
                        ? 'w-6 h-2 bg-[#f3cd67] shadow-[0_0_8px_rgba(243,205,103,0.8)]'
                        : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
