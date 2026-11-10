'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const points = [
    'Committed to excellence in legal practice.',
    'Act with honesty and uphold ethical principles.',
    'Strategic representation with 98% success rate.',
    'Meeting clients\' legal needs is our priority.',
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-[#faf9f6] text-gray-900 relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Top 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 
            ========================================================================
            LEFT COLUMN: ARCH PHOTO + TWO STACKED PHOTOS + CENTER SEAL
            Animated with smooth entrance, hover dynamics & floating seal
            ========================================================================
          */}
          <div
            className={`lg:col-span-6 relative transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative w-full max-w-[540px] mx-auto min-h-[440px] sm:min-h-[480px]">
              
              {/* Offset outline stroke behind Left Arch with golden breathing glow */}
              <div className="absolute -top-3 -left-3 w-[47%] h-full rounded-t-full rounded-b-3xl border-2 border-[#c9a84c]/40 animate-gold-glow -z-0 hidden sm:block pointer-events-none" />

              <div className="grid grid-cols-2 gap-4 h-full relative z-10">
                
                {/* Left Tall Arch: Senior Advocate Partner */}
                <div className="h-[390px] sm:h-[450px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl relative border-4 border-white bg-gray-100 group transition-all duration-700 hover:shadow-[0_20px_40px_rgba(10,18,34,0.18)] hover:-translate-y-2">
                  <Image
                    src="/advocate-senior-standing.jpg"
                    alt="UK Law Associates Senior Advocate Partner"
                    fill
                    sizes="(max-width: 768px) 50vw, 270px"
                    className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Subtle golden corner flare on hover */}
                  <div className="absolute inset-0 border border-[#e5bf55]/0 group-hover:border-[#e5bf55]/50 rounded-t-full rounded-b-3xl transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Right Column: 2 Stacked Images */}
                <div className="flex flex-col gap-4 h-[390px] sm:h-[450px]">
                  
                  {/* Top Right: Advocate Portrait at Chambers Desk */}
                  <div className="h-[48%] rounded-t-3xl rounded-b-2xl overflow-hidden shadow-xl relative border-2 border-white bg-gray-100 group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                    <Image
                      src="/advocate-desk-justice.jpg"
                      alt="UK Law Associates Advocate at Law & Justice Chambers"
                      fill
                      sizes="(max-width: 768px) 50vw, 270px"
                      className="object-cover object-[54%_center] group-hover:scale-108 transition-transform duration-700 ease-out"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-40 transition-opacity" />
                  </div>

                  {/* Bottom Right: UK Law Firm Advocates Standing Together */}
                  <div className="h-[48%] rounded-2xl rounded-b-3xl overflow-hidden shadow-xl relative border-2 border-white bg-gray-100 group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                    <Image
                      src="/uk-law-firm-partners.jpg"
                      alt="UK Law Firm Advocates & Legal Consultants"
                      fill
                      sizes="(max-width: 768px) 50vw, 270px"
                      className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-40 transition-opacity" />
                  </div>

                </div>

              </div>

              {/* Center Circular Notary Seal with Rotating Aura & Interactive Shimmer */}
              <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer">
                {/* Glowing pulsating halo behind seal */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#e5bf55] via-[#c9a84c] to-[#996e23] blur-xs opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0a1222] border-2 border-[#c9a84c] shadow-2xl flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-[#f3d37a] transition-all duration-500">
                  <div className="w-full h-full rounded-full border border-dashed border-[#e5bf55]/70 flex items-center justify-center relative p-1.5 group-hover:rotate-180 transition-transform duration-1000 ease-out">
                    <Image
                      src="/uk-emblem-gold.png"
                      alt="UK Law Firm Official Gold Emblem"
                      width={48}
                      height={40}
                      style={{ width: 'auto', height: 'auto' }}
                      className="max-h-9 object-contain drop-shadow-[0_2px_8px_rgba(201,168,76,0.8)]"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 
            ========================================================================
            RIGHT COLUMN: ANIMATED TYPOGRAPHY, INTERACTIVE BULLETS & HOVER BUTTON
            ========================================================================
          */}
          <div
            className={`lg:col-span-6 font-sans relative transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            
            {/* Top Subtitle Tag with Animated Expanding Gold Rule */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className={`h-[2px] bg-[#c9a84c] transition-all duration-700 delay-300 ${isVisible ? 'w-8' : 'w-0'}`} />
              <p className="text-[#b38634] font-serif italic text-base sm:text-lg font-semibold tracking-wide">
                About Us
              </p>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0a1222] leading-[1.18] mb-5 tracking-tight">
              A Legacy Of Legal Excellence
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-sans">
              Led by senior advocates <strong className="text-gray-900 font-semibold">M. Umamaheshwar Reddy</strong> (B.Sc., M.Sc., LL.B.) and <strong className="text-gray-900 font-semibold">S. Kamalakar</strong> (B.B.M., M.C.A., LL.B.), UK Law Firm delivers seasoned legal counsel across High Courts, District &amp; Sessions Courts, and Special Tribunals throughout India.
            </p>

            {/* 4 Checkpoint Bullet List with Hover Glow & Subtle Slide */}
            <div className="space-y-3.5 mb-7">
              {points.map((pt, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3.5 group p-1.5 -ml-1.5 rounded-lg hover:bg-white/80 transition-all duration-300 cursor-default transform ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${350 + i * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#0a1222] text-[#e5bf55] group-hover:bg-[#c9a84c] group-hover:text-[#0a1222] group-hover:scale-115 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium group-hover:text-[#0a1222] group-hover:translate-x-1 transition-all duration-300">
                    {pt}
                  </p>
                </div>
              ))}
            </div>



            {/* Link to Dedicated About Page with Hover Slide Arrow */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white hover:bg-[#0a1222] text-[#0a1222] hover:text-[#f4d27a] border border-[#c9a84c]/50 hover:border-[#0a1222] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md group transition-all duration-300"
              >
                <span>Read Full Firm &amp; Partner Profiles</span>
                <span className="text-[#b38634] group-hover:text-[#f4d27a] group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
