'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const slides = [
    {
      src: '/mobile-hero-3.jpg',
      alt: 'Senior Advocate S. Kamalakar in client legal consultation at executive chambers',
      position: 'object-[50%_center] sm:object-[65%_center] lg:object-[65%_center]',
    },
    {
      src: '/mobile-hero-2.jpg',
      alt: 'Advocate M. Umamaheshwar Reddy presenting trial argument before judge',
      position: 'object-[62%_center] sm:object-[68%_center] lg:object-[75%_center]',
    },
    {
      src: '/mobile-hero-1.jpg',
      alt: 'Senior Advocate S. Kamalakar presenting courtroom legal argument',
      position: 'object-[53%_center] sm:object-[68%_center] lg:object-[82%_25%]',
    },
    {
      src: '/mobile-hero-seated.jpg',
      alt: 'Advocate M. Umamaheshwar Reddy seated in courtroom chambers with scales of justice',
      position: 'object-[68%_center] sm:object-[68%_center] lg:object-[72%_center]',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Extended slides with cloned first slide for infinite forward-only continuous scroll
  const extendedSlides = [...slides, slides[0]];

  // Automatic scroll every 3 seconds continuously forward
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    // When reaching the cloned slide at the end, instantly reset to 0 with no transition
    if (currentSlide >= slides.length) {
      setIsTransitioning(false);
      setCurrentSlide(0);
      
      // Re-enable smooth transition on the next frame so subsequent slides animate smoothly
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

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
      className="relative min-h-[100dvh] h-[100dvh] max-h-[100dvh] bg-[#070c14] text-white overflow-hidden flex flex-col justify-between pt-20 sm:pt-28 pb-4"
    >
      
      {/* 
        ========================================================================
        HERO SLIDER BACKGROUND: AUTOMATICALLY SCROLLING ONE BY ONE (3 SLIDES)
        Framed correctly on the advocate with reduced soft shadow
        ========================================================================
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        
        {/* Horizontal sliding track with continuous forward-only loop */}
        <div 
          className={`flex h-full w-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, idx) => (
            <div key={idx} className="relative min-w-full h-full flex-shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx <= 1}
                unoptimized
                sizes="100vw"
                className={`object-cover ${slide.position} brightness-[1.12] contrast-[1.04]`}
              />
            </div>
          ))}
        </div>

        {/* 
          BALANCED SOFT SHADOW:
          Provides deep navy opacity strictly on the left behind the headline/text,
          while keeping the right side fully lit, natural, and untouched!
        */}
        <div className="absolute inset-y-0 left-0 w-[38%] sm:w-[45%] lg:w-[54%] xl:w-[48%] bg-gradient-to-r from-[#070c14] via-[#070c14]/75 lg:via-[#070c14]/45 to-transparent" />
        
        {/* Subtle bottom fade only on larger screens, removed on mobile */}
        <div className="hidden sm:block absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#070c14]/50 to-transparent" />
      </div>

      {/* 
        ========================================================================
        CONTENT AREA - Reduced Content Size for Clean Mobile Balance
        ========================================================================
      */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 my-auto">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Main Hero Headline - Compact Serif Typography */}
          <h1 className="font-serif text-[21px] sm:text-3xl lg:text-[50px] font-bold text-white leading-[1.12] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <span className="block">Trusted legal</span>
            <span className="block">expertise for</span>
            <span>your </span>
            <span className="text-[#f3cd67] drop-shadow-md">success</span>
          </h1>

          {/* Golden Horizontal Accent Divider Line */}
          <div className="w-8 sm:w-14 h-[1.5px] sm:h-[2px] bg-[#c9a84c] my-1.5 sm:my-3" />

          {/* Reduced Subtitle Description */}
          <p className="text-white/85 text-[10px] sm:text-xs lg:text-sm leading-relaxed mb-2.5 sm:mb-5 max-w-[175px] sm:max-w-md font-sans font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Expert legal advice and dedicated support for individuals, families and businesses in India.
          </p>

          {/* Action CTA Buttons - Compact Stack on Mobile */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3 mb-3 sm:mb-6">
            {/* Get Legal Advice Button */}
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#e5bf55] to-[#c9a84c] hover:brightness-110 text-[#080d16] px-3.5 sm:px-6 py-1.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold font-sans tracking-wide inline-flex items-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#080d16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span>Get Legal Advice</span>
              <span>→</span>
            </a>

            {/* Our Services Button */}
            <a
              href="#services"
              className="bg-black/35 hover:bg-black/60 text-white border border-[#c9a84c]/60 hover:border-[#e5bf55] px-3.5 sm:px-6 py-1.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold font-sans tracking-wide inline-flex items-center gap-1.5 backdrop-blur-md transition-all active:scale-95"
            >
              <span>Our Services</span>
              <span className="text-[#e5bf55]">→</span>
            </a>
          </div>

          {/* 3 Pillar Features - Compact 3 Columns with Vertical Dividers */}
          <div className="grid grid-cols-3 gap-0 sm:gap-5 pt-1.5 sm:pt-3.5 border-t border-[#c9a84c]/25 font-sans max-w-[260px] sm:max-w-lg">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center px-1 sm:px-2.5 ${
                  idx !== 0 ? 'border-l border-[#c9a84c]/25' : ''
                }`}
              >
                {/* Rounded square gold outline icon with SOLID OPAQUE background */}
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg border border-[#c9a84c] bg-[#070c14] flex items-center justify-center text-[#e5bf55] mb-1.5 shadow-md">
                  {item.icon}
                </div>
                <p className="text-white text-[9px] sm:text-xs font-bold leading-tight drop-shadow-sm">
                  {item.title}
                </p>
                <p className="text-gray-200 text-[7.5px] sm:text-[10px] leading-tight mt-0.5 drop-shadow-sm">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Slide Indicator Progress Bars (Continuous forward scroll) */}
          <div className="flex items-center justify-start gap-1.5 pt-2 sm:pt-4 pointer-events-none select-none">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-700 ${
                  (currentSlide % slides.length) === idx 
                    ? 'w-6 sm:w-8 bg-[#e5bf55] shadow-[0_0_8px_rgba(229,191,85,0.8)]' 
                    : 'w-1 sm:w-1.5 bg-white/40'
                }`}
              />
            ))}
            <span className="text-[9.5px] sm:text-xs text-[#e5bf55] font-mono ml-2 font-bold">
              0{(currentSlide % slides.length) + 1} / 0{slides.length}
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
