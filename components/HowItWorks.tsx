import Link from 'next/link';

interface ProcessStep {
  number: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Consultation & Intake',
    desc: 'Share your legal concerns in complete confidence. Our advocates examine the legal literature, listen, and understand your situation.',
    icon: (
      /* Open Book Icon */
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#3d2410]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 6.25C10.7 5.1 8.9 4.5 7 4.5c-2.3 0-4.3.9-5.7 2.4C1.1 7.1 1 7.4 1 7.8V19c0 .6.4 1 1 1 .2 0 .3 0 .5-.1 1.3-.6 2.8-.9 4.5-.9 1.9 0 3.7.6 5 1.7 1.3-1.1 3.1-1.7 5-1.7 1.7 0 3.2.3 4.5.9.2.1.3.1.5.1.6 0 1-.4 1-1V7.8c0-.4-.1-.7-.3-.9-1.4-1.5-3.4-2.4-5.7-2.4-1.9 0-3.7.6-5 1.75zM11 18c-1.2-.8-2.6-1.2-4-1.2-1.4 0-2.8.4-4 1.1V8.2c1.1-.7 2.5-1.1 4-1.1 1.6 0 3.1.5 4 1.4V18zm10 0c-1.2-.7-2.6-1.1-4-1.1-1.4 0-2.8.4-4 1.2V8.5c.9-.9 2.4-1.4 4-1.4 1.5 0 2.9.4 4 1.1V18z"/>
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Evidence & Review',
    desc: 'Deep scrutiny of documents, evidentiary records, and court filings to identify critical legal merits under thorough examination.',
    icon: (
      /* Magnifying Glass Icon */
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#3d2410]" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="7.5" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 16l5.5 5.5" strokeWidth={3} />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Court Advocacy',
    desc: 'Authoritative representation and forceful arguments before Sessions Courts, High Court, and Special Tribunals.',
    icon: (
      /* Legal Gavel Icon on Sound Block */
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#3d2410]" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="20.5" width="18" height="2" rx="0.8" />
        <rect x="5.5" y="18" width="13" height="1.8" rx="0.5" />
        <g transform="rotate(-35 12 9.5)">
          <rect x="6.5" y="2" width="11" height="5.5" rx="1.2" />
          <line x1="8.5" y1="2" x2="8.5" y2="7.5" stroke="#faf5eb" strokeWidth="0.8" />
          <line x1="15.5" y1="2" x2="15.5" y2="7.5" stroke="#faf5eb" strokeWidth="0.8" />
          <path d="M11 7.5v9.5a1 1 0 002 0V7.5h-2z" />
        </g>
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Strategic Intellect',
    desc: 'Applying sharp legal intellect, tactical foresight, and statutory commentaries to devise an airtight roadmap for victory.',
    icon: (
      /* Head with Lightbulb / Intellect Icon */
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#3d2410]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C7.58 2 4 5.58 4 10c0 2.4 1.05 4.56 2.72 6.03l.36.32V19a2 2 0 002 2h3.5v-2H9v-1.5l-.65-.57A6.98 6.98 0 016 10c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.63-.65 3.11-1.71 4.19l-.79.81V19h-1.5v2H15a2 2 0 002-2v-2.65l.36-.32A7.96 7.96 0 0020 10c0-4.42-3.58-8-8-8z" />
        <path d="M12 6a3 3 0 00-3 3c0 1.3.84 2.4 2 2.82V13h2v-1.18c1.16-.42 2-1.52 2-2.82a3 3 0 00-3-3zm-.5 8h1v1h-1v-1z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: 'Final Resolution',
    desc: 'Securing favorable decrees, settlements, bail orders, or contractual enforcement with comprehensive legal closure.',
    icon: (
      /* Clipboard with Checkmarks Icon */
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#3d2410]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="5" y="4" width="14" height="18" rx="2" strokeWidth={2} />
        <path d="M9 4V2.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5V4" strokeWidth={2} />
        <path d="M8 9l1.5 1.5L12 8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="9" x2="16.5" y2="9" strokeLinecap="round" strokeWidth={1.8} />
        <path d="M8 13.5l1.5 1.5L12 12.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="13.5" x2="16.5" y2="13.5" strokeLinecap="round" strokeWidth={1.8} />
        <path d="M8 18l1.5 1.5L12 17" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="18" x2="16.5" y2="18" strokeLinecap="round" strokeWidth={1.8} />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#faf5eb] text-gray-900 relative overflow-hidden border-t border-b border-[#ebd8ad]/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          
          {/* Top Delicate Gold Star Cluster (matching user reference) */}
          <div className="flex items-center justify-center gap-1.5 mb-3 text-[#b38634]">
            <span className="text-[10px] opacity-70">✦</span>
            <span className="text-sm">✦</span>
            <span className="text-lg">⚖️</span>
            <span className="text-sm">✦</span>
            <span className="text-[10px] opacity-70">✦</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1f1710] mb-3 tracking-tight">
            How It Works
          </h2>

          {/* Subtitle */}
          <p className="text-[#6b5f54] text-xs sm:text-sm md:text-base font-sans max-w-xl mx-auto leading-relaxed">
            A transparent, disciplined 5-step approach ensuring your legal rights are vigorously protected from consultation to courtroom resolution.
          </p>

          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* 5-Step Linear Flow with Icons and Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8 lg:gap-4 xl:gap-6 relative max-w-[1300px] mx-auto items-start">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Number Circle Badge on Top */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#3d2410] text-[#fbf6ee] font-serif font-bold text-xs sm:text-sm flex items-center justify-center shadow-md mb-3.5 transition-transform duration-300 group-hover:scale-110">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="h-16 sm:h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#1f1710] mb-2 tracking-tight group-hover:text-[#b38634] transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#6b5f54] text-xs sm:text-[13px] font-sans leading-relaxed max-w-[220px] mx-auto">
                {step.desc}
              </p>

              {/* Desktop Horizontal Arrow pointing to the next step */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-[52px] -right-3 xl:-right-4 text-[#3d2410]/70 text-2xl font-bold select-none pointer-events-none">
                  →
                </div>
              )}

              {/* Mobile-only vertical separator between stacked steps */}
              {idx < processSteps.length - 1 && (
                <div className="lg:hidden text-[#3d2410]/50 text-xl font-bold mt-6 select-none">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Action Button */}
        <div className="text-center mt-14 sm:mt-18">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3d2410] hover:bg-[#523319] text-[#fbf6ee] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-105 border border-[#c9a84c]/40"
          >
            <span>Schedule Legal Consultation</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
