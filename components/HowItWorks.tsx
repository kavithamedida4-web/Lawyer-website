import Image from 'next/image';

const steps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Share your legal concerns with us. Our team will listen, understand your situation and guide you on the next steps.',
    image: '/process-step-01-consultation.jpg',
    icon: (
      <svg className="w-6 h-6 text-[#b88a38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 3a7 7 0 017 7m-3-7a3.5 3.5 0 013.5 3.5" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Case Review',
    desc: 'Our legal experts carefully review your case, examine documents and identify the important legal aspects.',
    image: '/process-step-02-case-review.jpg',
    icon: (
      <svg className="w-6 h-6 text-[#b88a38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h4m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V15" />
        <circle cx="16" cy="17" r="2.75" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.5 19.5l2.5 2.5" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Legal Strategy',
    desc: 'We develop a clear legal strategy based on your case, focusing on your rights and the best possible approach.',
    image: '/process-step-03-strategy.jpg',
    icon: (
      <svg className="w-6 h-6 text-[#b88a38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Representation',
    desc: 'Our experienced lawyers represent your interests, handle legal proceedings and advocate for you in court.',
    image: '/process-step-04-representation.jpg',
    icon: (
      <svg className="w-6 h-6 text-[#b88a38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9l9-6 9 6M4 9v11a1 1 0 001 1h14a1 1 0 001-1V9M8 12v5M12 12v5M16 12v5M3 21h18" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Resolution',
    desc: 'We work towards achieving the best possible legal outcome while keeping you informed throughout the process.',
    image: '/process-step-05-resolution.jpg',
    icon: (
      <svg className="w-6 h-6 text-[#b88a38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 14l-2 2m-2-2l-2 2m-2-2l-2 2m7-7l2-2a2.828 2.828 0 10-4-4l-2 2m0 0L7 10a2.828 2.828 0 000 4l3 3a2.828 2.828 0 004 0l3-3m-6-4l2-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 14l-3-3a2.828 2.828 0 014-4l2 2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#faf8f4] text-gray-900 relative overflow-hidden">
      
      {/* Background Watermarks */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.035] pointer-events-none select-none hidden lg:block">
        <Image
          src="/indian-supreme-court-hero.jpg"
          alt="Courthouse Pillars Watermark"
          fill
          sizes="33vw"
          unoptimized
          className="object-cover object-right"
        />
      </div>
      <div className="absolute left-0 top-0 w-1/4 h-full opacity-[0.035] pointer-events-none select-none hidden lg:block">
        <Image
          src="/lady-justice-hero.jpg"
          alt="Lady Justice Watermark"
          fill
          sizes="25vw"
          unoptimized
          className="object-cover object-left"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          
          {/* Scales Badge with Gold Lines */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c9a84c]" />
            <div className="w-10 h-10 rounded-full border border-[#c9a84c]/60 bg-white flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-[#b88a38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c9a84c]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0a1222] mb-3 tracking-tight">
            How It Works
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            A streamlined approach to addressing your legal needs effectively and with professional legal support.
          </p>

          {/* Accent Gold Divider */}
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4 shadow-sm" />
        </div>

        {/* 5 Steps Circular Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-3 xl:gap-4 relative items-stretch">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative w-full flex flex-col items-center group"
            >
              


              {/* Numbered Badge on Top */}
              <div className="w-8 h-8 rounded-full bg-[#0a1222] border-2 border-[#e5bf55] text-[#e5bf55] text-xs font-bold font-serif flex items-center justify-center shadow-md z-20 mb-[-16px]">
                {item.step}
              </div>

              {/* Main Circular Photo Frame with Gold Ring */}
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-b from-[#e5bf55] via-[#c9a84c] to-[#996e23] shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="180px"
                    unoptimized
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Bottom Overlapping Curved Info Card */}
              <div className="relative -mt-8 pt-10 pb-6 px-4 w-full bg-white rounded-3xl border border-gray-100 shadow-md text-center flex flex-col items-center flex-grow transition-all duration-300 group-hover:shadow-xl group-hover:border-[#c9a84c]/50">
                
                {/* Step Title */}
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#0a1222] mb-1.5 tracking-tight">
                  {item.title}
                </h3>

                {/* Small Gold Divider */}
                <div className="w-6 h-[2px] bg-[#c9a84c] mx-auto mb-2.5" />

                {/* Step Description */}
                <p className="text-[12px] sm:text-[13px] text-gray-600 font-sans leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
