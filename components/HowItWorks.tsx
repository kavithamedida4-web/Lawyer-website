
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
    // Solid Advocate in Court Suit & Tie (matching reference image style)
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#0a1222]" viewBox="0 0 48 48" fill="none">
        {/* Advocate Head */}
        <circle cx="24" cy="13" r="7" fill="currentColor" />
        {/* Suit Shoulders */}
        <path d="M10 39c0-7.732 6.268-14 14-14s14 6.268 14 14v2H10v-2z" fill="currentColor" />
        {/* Shirt Collar Notch (Cream Cutout) */}
        <path d="M24 25l-4.5 8h9l-4.5-8z" fill="#faecd1" />
        {/* Gold Necktie */}
        <path d="M23 28h2l1.5 8-2.5 3-2.5-3 1.5-8z" fill="#b38634" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Case Review & Research',
    desc: 'Detailed evidentiary review, examination of records, and statutory research to establish key legal merits.',
    // Solid Open Law Commentary Treatise with Ribbon Bookmark (matching reference image 05)
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#0a1222]" viewBox="0 0 48 48" fill="none">
        {/* Left Page Solid Body */}
        <path d="M7 13.5c5.5 0 11.5-1.5 16-4.5v21c-4.5 3-10.5 4.5-16 4.5V13.5z" fill="currentColor" />
        {/* Right Page Solid Body */}
        <path d="M41 13.5c-5.5 0-11.5-1.5-16-4.5v21c4.5 3 10.5 4.5 16 4.5V13.5z" fill="currentColor" />
        {/* Page Line Highlights */}
        <path d="M11 17.5h8M11 22.5h8M11 27.5h5M29 17.5h8M29 22.5h8M32 27.5h5" stroke="#faecd1" strokeWidth="2" strokeLinecap="round" />
        {/* Gold Central Ribbon Bookmark */}
        <path d="M22 9h4v15.5l-2-2-2 2V9z" fill="#b38634" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Legal Strategy',
    desc: 'Formulating an authoritative, custom litigation roadmap grounded in statutory law and High Court precedents.',
    // Solid Scales of Justice with Balanced Pans & Pedestal (matching reference image hero & 05)
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#0a1222]" viewBox="0 0 48 48" fill="none">
        {/* Top Gold Finial */}
        <circle cx="24" cy="9" r="2.5" fill="#b38634" />
        {/* Horizontal Balance Crossbeam */}
        <rect x="10" y="11" width="28" height="3" rx="1.5" fill="currentColor" />
        {/* Central Vertical Pillar */}
        <rect x="22.5" y="11" width="3" height="26" fill="currentColor" />
        {/* Left Pan Chains & Solid Pan */}
        <path d="M14 14l-4 10m4-10l4 10" stroke="#b38634" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 24c0 3.3 2.7 6 6 6s6-2.7 6-6H8z" fill="currentColor" />
        {/* Right Pan Chains & Solid Pan */}
        <path d="M34 14l-4 10m4-10l4 10" stroke="#b38634" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 24c0 3.3 2.7 6 6 6s6-2.7 6-6h-12z" fill="currentColor" />
        {/* Stepped Pedestal Base */}
        <rect x="19" y="37" width="10" height="3" rx="1" fill="#b38634" />
        <rect x="15" y="40" width="18" height="4" rx="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Courtroom Representation',
    desc: 'Forceful advocacy before Trial Courts, High Court, and Special Tribunals to secure favorable judgment and protection.',
    // Solid Classical Courthouse with 4 Pillars & Pediment (matching reference image 02 & 05)
    icon: (
      <svg className="w-10 h-10 sm:w-11 sm:h-11 text-[#0a1222]" viewBox="0 0 48 48" fill="none">
        {/* Triangular Pediment (Roof) */}
        <path d="M24 6l-18 9h36l-18-9z" fill="currentColor" />
        {/* Gold Seal inside Pediment */}
        <circle cx="24" cy="11.5" r="2" fill="#b38634" />
        {/* Architrave Beam */}
        <rect x="8" y="16" width="32" height="3" rx="0.75" fill="currentColor" />
        {/* 4 Classical Pillars */}
        <rect x="11" y="20.5" width="4.5" height="15.5" rx="1" fill="currentColor" />
        <rect x="18.5" y="20.5" width="4.5" height="15.5" rx="1" fill="currentColor" />
        <rect x="25" y="20.5" width="4.5" height="15.5" rx="1" fill="currentColor" />
        <rect x="32.5" y="20.5" width="4.5" height="15.5" rx="1" fill="currentColor" />
        {/* Stepped Courthouse Foundation */}
        <rect x="8" y="37" width="32" height="3" rx="1" fill="#b38634" />
        <rect x="5" y="41" width="38" height="4" rx="1.5" fill="currentColor" />
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
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#faecd1] flex items-center justify-center shadow-inner">
                        {step.icon}
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white border-2 border-dashed border-[#c9a84c]/70 flex items-center justify-center p-3 shadow-xs transition-transform duration-500 group-hover:scale-105 group-hover:border-[#b38634]">
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#faecd1]/50 flex items-center justify-center">
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

      </div>
    </section>
  );
}
