import Link from 'next/link';

interface ProcessStep {
  number: number;
  title: string;
  desc: string;
  isFeatured?: boolean;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Initial Consultation',
    desc: 'Share your legal concerns in complete confidentiality. Our advocates evaluate your situation and outline immediate next steps.',
    isFeatured: true,
    icon: (
      <svg className="w-8 h-8 text-[#916b1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Case Review & Research',
    desc: 'Detailed evidentiary review, examination of records, and statutory research to establish key legal merits.',
    icon: (
      <svg className="w-8 h-8 text-[#916b1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h4m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V15" />
        <circle cx="16" cy="17" r="2.75" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.5 19.5l2.5 2.5" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Legal Strategy',
    desc: 'Formulating an authoritative, custom litigation roadmap grounded in statutory law and High Court precedents.',
    icon: (
      <svg className="w-8 h-8 text-[#916b1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Courtroom Representation',
    desc: 'Forceful advocacy before Trial Courts, High Court, and Special Tribunals to secure favorable judgment and protection.',
    icon: (
      <svg className="w-8 h-8 text-[#916b1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9l9-6 9 6M4 9v11a1 1 0 001 1h14a1 1 0 001-1V9M8 12v5M12 12v5M16 12v5M3 21h18" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#faf8f4] text-gray-900 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          
          {/* Top Delicate Gold Star Cluster (matching user reference) */}
          <div className="flex items-center justify-center gap-1.5 mb-3 text-[#b38634]">
            <span className="text-[10px] opacity-70">✦</span>
            <span className="text-sm">✦</span>
            <span className="text-lg">⚖️</span>
            <span className="text-sm">✦</span>
            <span className="text-[10px] opacity-70">✦</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#0a1222] mb-3 tracking-tight">
            Learn More About Our Process
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-xs sm:text-sm md:text-base font-sans max-w-xl mx-auto leading-relaxed">
            A transparent, disciplined 4-step approach ensuring your legal rights are vigorously protected from consultation to courtroom resolution.
          </p>

          <div className="w-14 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* 4-Step Process Flow Container */}
        <div className="relative max-w-[1160px] mx-auto">
          
          {/* Responsive Curved Dashed Wave Line Connecting All 4 Steps (Desktop lg+) */}
          <svg
            className="hidden lg:block absolute top-[52px] left-0 w-full h-[60px] pointer-events-none z-0"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
          >
            {/* Wave 1: Curves down between Step 1 and Step 2 */}
            <path
              d="M 195 30 Q 250 52 305 30"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
              opacity="0.75"
            />
            {/* Wave 2: Curves up between Step 2 and Step 3 */}
            <path
              d="M 445 30 Q 500 8 555 30"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
              opacity="0.75"
            />
            {/* Wave 3: Curves down between Step 3 and Step 4 */}
            <path
              d="M 695 30 Q 750 52 805 30"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
              opacity="0.75"
            />
          </svg>

          {/* 4 Step Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 xl:gap-8 relative z-10 items-start">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Container with floating step number */}
                <div className="relative mb-5">
                  
                  {/* Floating Number Badge (top-left) */}
                  <div className="absolute -top-1 -left-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-[#ebd8ad]/60 flex items-center justify-center text-xs sm:text-sm font-bold text-[#0a1222] z-20">
                    {step.number}
                  </div>

                  {/* Main Circle: Featured (Circle 1 with soft glow) vs Dashed (Circles 2, 3, 4) */}
                  {step.isFeatured ? (
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-[0_16px_36px_rgba(179,134,52,0.18)] border border-[#ebd8ad]/60 flex items-center justify-center p-3 transition-transform duration-500 group-hover:scale-105">
                      <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#faecd1] flex items-center justify-center shadow-inner">
                        {step.icon}
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white border-2 border-dashed border-[#c9a84c]/70 flex items-center justify-center p-3 shadow-xs transition-transform duration-500 group-hover:scale-105 group-hover:border-[#b38634]">
                      <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#faecd1]/50 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#0a1222] mb-1.5 tracking-tight group-hover:text-[#b38634] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed max-w-[240px] mx-auto">
                  {step.desc}
                </p>

                {/* Mobile-only vertical dashed separator between stacked steps */}
                {idx < processSteps.length - 1 && (
                  <div className="sm:hidden w-[2px] h-8 border-l-2 border-dashed border-[#c9a84c]/60 mt-6" />
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA Action Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#b38634] hover:bg-[#c9983e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-105"
          >
            <span>Schedule Legal Consultation</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
