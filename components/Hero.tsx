'use client';

import { useState, useEffect } from 'react';
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
    img: '/hero-building-maps.jpg',
    tag: 'HEADQUARTERS',
    title: 'UK Law Firm Chambers',
    desc: 'Maps Apartments, Gachibowli, Hyderabad',
    pos: 'object-[center_28%]',
    link: '/#contact',
  },
  {
    id: 2,
    img: '/hero-card-umamaheshwar.jpg',
    tag: 'SENIOR ADVOCATE',
    title: 'M. Umamaheshwar Reddy',
    desc: 'High Court Advocate (M.Sc., LL.B.)',
    pos: 'object-top',
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
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [waveIndex, setWaveIndex] = useState<number | null>(null);

  // Staggered entrance animation: cards slide in from the SIDE one by one
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Sequential gentle highlight wave across the 3 cards
  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setWaveIndex((prev) => (prev === null ? 0 : (prev + 1) % fixedCards.length));
    }, 3200);

    return () => clearInterval(interval);
  }, [isLoaded]);

  // Mobile view: auto-scroll cards sliding in from the SIDE one by one every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % fixedCards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:h-screen lg:max-h-screen w-full bg-[#070c14] text-white overflow-hidden flex flex-col justify-center pt-20 sm:pt-22 pb-6 sm:pb-6 select-none"
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
          className="object-cover object-center lg:object-[60%_center] brightness-[0.4] contrast-[1.10] grayscale-[0.8]"
        />

        {/* Layered dark gradients for contrast - removes yellow background light */}
        <div className="absolute inset-0 bg-[#070c14]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c14] via-[#070c14]/90 to-[#070c14]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-transparent to-[#070c14]/70" />
      </div>

      {/* 
        ========================================================================
        MAIN BODY: LEFT CONTENT + RIGHT CARDS
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 my-auto flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          
          {/* ==================================================================
              LEFT SIDE: CONTENT (Clean font-sans typography with font-weight 600)
              Eyebrow line, bold headline, description paragraph, and pill CTA
              ================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Eyebrow with horizontal dash line (hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-2.5 mb-2.5 sm:mb-3">
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
              15+ Years of courtroom excellence across Telangana High Court, District Courts, and Special Tribunals. Seasoned defense for individuals, families, and corporate enterprises.
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
              RIGHT SIDE:
              - Mobile View (< sm): Images SLIDE IN FROM THE SIDE one by one
              - Desktop View (sm+): 3 cards SLIDE IN FROM THE SIDE one by one on entrance
              ================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center overflow-hidden sm:overflow-visible">

            {/* MOBILE VIEW ONLY (< sm): Continuous horizontal side-slide (Images come from the SIDE one by one) */}
            <div className="block sm:hidden w-full py-2">
              <div className="relative w-full max-w-[270px] h-[310px] mx-auto rounded-2xl overflow-hidden border border-white/25 shadow-[0_12px_30px_rgba(0,0,0,0.7)] bg-[#0c1424]">
                {/* Horizontal sliding track that glides cards from the side */}
                <div
                  className="flex h-full w-full transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${mobileIndex * 100}%)`,
                  }}
                >
                  {fixedCards.map((card) => (
                    <Link
                      key={card.id}
                      href={card.link}
                      className="relative w-full h-full flex-shrink-0 block"
                    >
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        unoptimized
                        sizes="280px"
                        className={`object-cover ${card.pos}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Pagination Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {fixedCards.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setMobileIndex(idx)}
                    aria-label={`Show card ${idx + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      idx === mobileIndex
                        ? 'w-6 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                        : 'w-1.5 h-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP VIEW ONLY (sm+): 3 Cards SLIDE IN FROM THE SIDE one by one */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-3 sm:gap-4 py-1">
              {fixedCards.map((card, idx) => {
                const isWave = waveIndex === idx;
                return (
                  <Link
                    key={card.id}
                    href={card.link}
                    style={{
                      transitionDelay: isLoaded ? '0ms' : `${idx * 240}ms`,
                    }}
                    className={`group relative w-full h-[320px] lg:h-[360px] xl:h-[380px] rounded-2xl overflow-hidden text-left shadow-[0_14px_35px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out bg-[#0c1424] block ${
                      isLoaded
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-0 translate-x-20 scale-95'
                    } ${
                      isWave
                        ? 'border-2 border-white -translate-y-2 shadow-[0_20px_45px_rgba(0,0,0,0.8)]'
                        : 'border border-white/25 hover:border-white hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)]'
                    }`}
                  >
                    {/* Card Photograph */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 200px, 240px"
                      className={`object-cover ${card.pos} transition-transform duration-700 ease-out ${
                        isWave ? 'scale-106' : 'group-hover:scale-106'
                      }`}
                    />

                    {/* Subtle dark gradient overlay at base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Clean white accent border glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl border transition-colors duration-500 pointer-events-none ${
                        isWave ? 'border-white/40' : 'border-transparent group-hover:border-white/40'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
