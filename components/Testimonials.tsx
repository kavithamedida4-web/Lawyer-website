'use client';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Rajeshwar G.',
    role: 'Property Dispute Client',
    text: 'The property dispute and injunction suit was handled with incredible legal precision! No delays, and the advocate team ensured every court document and evidence was presented flawlessly.',
  },
  {
    name: 'Kiran K.',
    role: 'Commercial Litigation Client',
    text: 'Super quick response and excellent court representation. The advocates are disciplined, court-certified, and handle litigation with immense tactical sharpness. Highly recommend their legal services!',
  },
  {
    name: 'Sandhya Y.',
    role: 'Real Estate & RERA Client',
    text: 'Absolutely outstanding legal support! They intervened in our delayed possession builder dispute, drafted a water-tight claim, and secured our financial relief before the tribunal.',
  },
  {
    name: 'Mohammed A.',
    role: 'Managing Director, Infrastructure',
    text: 'Their mastery in commercial arbitration, corporate compliance, and contractual advisory saved our enterprise from substantial legal liabilities. Most dependable advocate team!',
  },
  {
    name: 'Venkatesh M.',
    role: 'Civil & Family Law Client',
    text: 'Empathetic yet fearless courtroom advocacy. They handled our sensitive family matter with utmost confidentiality, ethical integrity, and achieved a fair and peaceful resolution.',
  },
  {
    name: 'Sushila D.',
    role: 'Property Owner, Title Dispute',
    text: 'Transparent legal advisory with zero false promises. They explained the legal merits clearly, kept us updated after every hearing, and delivered the exact outcome we needed.',
  },
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#faf8f4] relative text-gray-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Header Section matching reference */}
        <div className="text-center mb-16">
          
          {/* Top Pill Tag */}
          <div className="inline-block bg-[#fcf4e4] border border-[#e5bf55]/50 text-[#b38634] text-[11px] font-bold font-sans tracking-widest uppercase px-5 py-1.5 rounded-full mb-3.5 shadow-xs">
            CLIENT TESTIMONIALS
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0a1222] mb-3 tracking-tight font-sans">
            What Our Clients <span className="text-[#c9a84c]">Say</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-[15px] font-sans max-w-2xl mx-auto leading-relaxed">
            Read authentic feedback from individuals, families, and businesses represented by UK Law Firm advocates.
          </p>

        </div>

        {/* Horizontal Carousel with Left and Right Circular Nav Buttons */}
        <div className="relative max-w-[1320px] mx-auto">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous Testimonials"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-gray-200/80 hover:border-[#c9a84c] text-gray-700 hover:text-[#c9a84c] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next Testimonials"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-gray-200/80 hover:border-[#c9a84c] text-gray-700 hover:text-[#c9a84c] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards Track */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-6 px-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] sm:min-w-[360px] md:min-w-[390px] max-w-[410px] flex-shrink-0 bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a84c]/40 transition-all duration-300 flex flex-col justify-between snap-start font-sans"
              >
                <div>
                  
                  {/* Top Row: Stars + Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    
                    {/* 5 Golden Stars */}
                    <div className="flex items-center gap-1 text-[#e5bf55] text-lg">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    {/* Verified Pill Badge in Gold / Navy */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7ef] border border-[#c9a84c]/40 text-[#b38634] text-[10px] font-bold uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5 text-[#b38634]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>VERIFIED</span>
                    </div>

                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed italic my-4">
                    &ldquo;{t.text}&rdquo;
                  </p>

                </div>

                {/* Divider Line & Client Name / Role */}
                <div>
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <h4 className="font-bold text-sm text-[#0a1222]">
                    {t.name}
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {t.role}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
