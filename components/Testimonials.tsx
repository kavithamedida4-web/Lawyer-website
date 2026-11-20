'use client';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Rajeshwar G.',
    role: 'Property Matter, Hyderabad',
    text: 'They helped us with our land title dispute in Hyderabad. Clearly explained our options, drafted the injunction petition promptly, and kept us informed after every court hearing.',
  },
  {
    name: 'Kiran K.',
    role: 'Business Owner, Secunderabad',
    text: 'Very professional and patient advocates. Handled our Section 138 cheque bounce case smoothly without any unnecessary delay or confusion.',
  },
  {
    name: 'Sandhya Y.',
    role: 'Homebuyer, Gachibowli',
    text: 'We approached UK Law Firm when our builder delayed apartment handover by over two years. They filed our RERA complaint and guided us until our compensation was settled.',
  },
  {
    name: 'Mohammed A.',
    role: 'Managing Director, IT & Infrastructure',
    text: 'Drafted our company agreements and vendor contracts cleanly. Whenever a dispute arose, their advice was practical and saved us time and unnecessary litigation.',
  },
  {
    name: 'Venkatesh M.',
    role: 'Family Law Matter, Hyderabad',
    text: 'Handled our family matter with great dignity, patience, and complete confidentiality. They prioritized reaching a peaceful, fair settlement.',
  },
  {
    name: 'Sushila D.',
    role: 'Property Owner, Kukatpally',
    text: 'Transparent about legal fees from the very first meeting. Advocate Umamaheshwar Reddy sir gave us realistic advice rather than false promises. Highly dependable.',
  },
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild as HTMLElement;
      const gap = typeof window !== 'undefined' && window.innerWidth >= 640 ? 24 : 16;
      const step = card ? card.offsetWidth + gap : 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild as HTMLElement;
      if (card) {
        const gap = typeof window !== 'undefined' && window.innerWidth >= 640 ? 24 : 16;
        const step = card.offsetWidth + gap;
        const idx = Math.round(carouselRef.current.scrollLeft / step);
        setActiveIndex(Math.min(Math.max(idx, 0), testimonials.length - 1));
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#faf8f4] relative text-gray-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] leading-tight mb-3 tracking-tight max-w-[600px] mx-auto">
            What Our Clients <span className="text-[#c9a84c]">Say</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-[15px] font-sans max-w-2xl mx-auto leading-relaxed">
            Read feedback from clients and families who took legal help from our advocates.
          </p>



        </div>

        {/* Carousel Container with Left (<) and Right (>) Navigation Buttons on Sides */}
        <div className="relative max-w-[1360px] mx-auto px-9 sm:px-14">
          
          {/* Left Arrow Button (< on Left) */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous Testimonial"
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-300 hover:border-[#b38634] hover:bg-[#b38634] hover:text-white text-gray-700 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button (> on Right) */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next Testimonial"
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-300 hover:border-[#b38634] hover:bg-[#b38634] hover:text-white text-gray-700 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards Track */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth py-3 px-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[calc(100vw-96px)] sm:w-[350px] md:w-[380px] max-w-[400px] flex-shrink-0 bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-200/90 hover:border-[#c9a84c]/50 transition-all duration-300 flex flex-col justify-between snap-center sm:snap-start font-sans"
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

                {/* Divider Line & Client Name */}
                <div>
                  <div className="w-full h-px bg-gray-100 mb-3" />
                  <h4 className="font-bold text-sm text-[#0a1222]">
                    {t.name}
                  </h4>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (carouselRef.current) {
                    const card = carouselRef.current.children[idx] as HTMLElement;
                    if (card) {
                      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    }
                  }
                }}
                aria-label={`Go to review ${idx + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-7 h-2 bg-[#b38634]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
