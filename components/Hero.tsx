'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const slides = [
    {
      src: '/advocate-senior-standing.jpg',
      alt: 'Senior advocate of UK Law Firm, Hyderabad',
      position: 'object-[50%_18%]',
    },
    {
      src: '/advocate-portrait-suit.jpg',
      alt: 'Advocate of UK Law Firm, Hyderabad',
      position: 'object-[50%_15%]',
    },
    {
      src: '/chambers-building-exterior.jpg',
      alt: 'UK Law Firm chambers at Maps Apartments, Gachibowli, Hyderabad',
      position: 'object-[50%_30%]',
    },
    {
      src: '/chambers-reception.jpg',
      alt: 'Reception of UK Law Firm chambers',
      position: 'object-[50%_35%]',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    {
      title: 'Trusted',
      subtitle: 'Legal Experts',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#e5bf55]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Client First',
      subtitle: 'Approach',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#e5bf55]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Results Driven',
      subtitle: 'Strategy',
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#e5bf55]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] bg-[#070c14] text-white overflow-hidden flex items-center pt-24 pb-10 sm:pt-28 lg:pb-8"
    >
      <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-[#c9a84c]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-6 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12">

        {/* Photo: on top for mobile, on the right for desktop */}
        <div className="order-1 lg:order-2 flex flex-col items-center gap-3">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-[40dvh] min-h-[260px] max-h-[380px] lg:h-[min(62dvh,560px)] lg:max-h-none overflow-hidden rounded-2xl border border-[#c9a84c]/70 bg-[#0f1a2e] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            {slides.map((slide, idx) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="(min-width: 1024px) 420px, 340px"
                className={`object-cover ${slide.position} transition-opacity duration-1000 ${
                  currentSlide === idx ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5 select-none">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show photo ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === idx ? 'w-8 bg-[#e5bf55]' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="order-2 lg:order-1 max-w-xl lg:max-w-2xl">
          <h1 className="font-serif text-[32px] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[52px]">
            <span className="block">Trusted legal</span>
            <span className="block">expertise for</span>
            <span>your </span>
            <span className="text-[#f3cd67]">success</span>
          </h1>

          <div className="my-3 h-[2px] w-12 bg-[#c9a84c] sm:my-4 sm:w-14" />

          <p className="mb-5 max-w-md font-sans text-sm leading-relaxed text-white/85 sm:text-base">
            Expert legal advice and dedicated support for individuals, families and businesses in India.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e5bf55] to-[#c9a84c] px-5 py-2.5 font-sans text-xs font-bold tracking-wide text-[#080d16] shadow-md transition-all hover:brightness-110 active:scale-95 sm:px-6 sm:py-3"
            >
              <svg className="h-3.5 w-3.5 text-[#080d16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span>Get Legal Advice</span>
              <span>→</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/60 bg-black/35 px-5 py-2.5 font-sans text-xs font-semibold tracking-wide text-white transition-all hover:border-[#e5bf55] hover:bg-black/60 active:scale-95 sm:px-6 sm:py-3"
            >
              <span>Our Services</span>
              <span className="text-[#e5bf55]">→</span>
            </a>
          </div>

          <div className="grid max-w-[340px] grid-cols-3 gap-0 border-t border-[#c9a84c]/25 pt-4 font-sans sm:max-w-lg sm:gap-5">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center px-1 text-center sm:px-2.5 ${
                  idx !== 0 ? 'border-l border-[#c9a84c]/25' : ''
                }`}
              >
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg border border-[#c9a84c] bg-[#070c14] text-[#e5bf55] shadow-md sm:h-9 sm:w-9">
                  {item.icon}
                </div>
                <p className="text-[11px] font-bold leading-tight text-white sm:text-xs">{item.title}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-gray-300">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
