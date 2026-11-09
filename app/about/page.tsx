import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'About Us | UK Law Firm — Advocates & Legal Consultants',
  description:
    'Learn about UK Law Firm, founded by senior advocates M. Umamaheshwar Reddy (B.Sc., M.Sc., LL.B.) and S. Kamalakar (B.B.M., M.C.A., LL.B.) in Gachibowli, Hyderabad.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* 
        ========================================================================
        TOP / OPENING SECTION: EXACT REPLICA OF THE USER REFERENCE DESIGN
        - Warm Cream Background with subtle decorative circles
        - Pill Badge: "✨ OUR STORY"
        - Heading: "About UK Law Firm"
        - Centered Subtitle Paragraph
        - 3 Side-by-Side Tall Rounded Photo Cards with White Borders & Center Stagger
        - Fits perfectly side-by-side on Mobile & Desktop
        ========================================================================
      */}
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-18 bg-[#faf5eb] border-b border-[#eedfba]/60 relative overflow-hidden">
        
        {/* Subtle Decorative Geometric Circles matching Reference */}
        <div className="absolute top-10 right-8 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#eedfba]/70 pointer-events-none select-none" />
        <div className="absolute top-16 left-8 sm:left-14 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#faecd1]/60 pointer-events-none select-none" />


        <div className="max-w-[1200px] mx-auto px-4 sm:px-10 text-center relative z-10">
          
          {/* 1. Pill Badge Matching Reference */}
          <div className="inline-flex items-center gap-1.5 bg-[#faecd1] text-[#916b1f] border border-[#ebd8ad] px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3.5 shadow-2xs">
            <span className="text-xs">✨</span>
            <span>OUR STORY</span>
          </div>

          {/* 2. Main Title Matching Reference */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#0a1222] mb-3">
            About <span className="text-[#b88a38]">UK Law Firm</span>
          </h1>

          {/* 3. Subtitle Description Matching Reference */}
          <p className="text-gray-700 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed font-sans mb-7 sm:mb-10 px-2">
            Since our establishment, we have been delivering principled legal counsel, strategic courtroom advocacy, and trusted advisory across High Courts, District Courts, and Special Tribunals throughout India.
          </p>

          {/* 4. 3 Side-by-Side Tall Rounded Photo Cards (3 Columns on Mobile & Desktop, exactly like reference) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 max-w-[860px] mx-auto items-end">
            
            {/* Card 1: Left - Senior Advocate M. Umamaheshwar Reddy at Law Library */}
            <div className="h-[185px] sm:h-[340px] rounded-2xl sm:rounded-[28px] overflow-hidden border-[3px] sm:border-[5px] border-white shadow-[0_8px_20px_rgba(10,18,34,0.08)] bg-white relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
                src="/about-bookshelf.jpg"
                alt="Senior Advocate M. Umamaheshwar Reddy at Law Library"
                fill
                sizes="(max-width: 768px) 33vw, 280px"
                className="object-cover object-[32%_center] group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Card 2: Center - UK Law Firm Official Inauguration Ceremony (Prominent Center Stagger) */}
            <div className="h-[215px] sm:h-[385px] rounded-2xl sm:rounded-[28px] overflow-hidden border-[3px] sm:border-[5px] border-white shadow-[0_12px_28px_rgba(10,18,34,0.12)] bg-white relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <Image
                src="/about-inauguration.jpg"
                alt="UK Law Firm Official Chamber Inauguration Ceremony"
                fill
                sizes="(max-width: 768px) 33vw, 280px"
                className="object-cover object-[52%_center] group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Card 3: Right - Senior Advocate S. Kamalakar at Law & Justice Chambers */}
            <div className="h-[185px] sm:h-[340px] rounded-2xl sm:rounded-[28px] overflow-hidden border-[3px] sm:border-[5px] border-white shadow-[0_8px_20px_rgba(10,18,34,0.08)] bg-white relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Image
                src="/about-desk.jpg"
                alt="Senior Advocate S. Kamalakar at Law & Justice Chambers Consultation Desk"
                fill
                sizes="(max-width: 768px) 33vw, 280px"
                className="object-cover object-[55%_center] group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        FIRM MISSION & LEGAL EXPERTISE OVERVIEW (Photo Composition + Content)
        ========================================================================
      */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Arch photo + Two stacked photos + Center seal */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full max-w-[540px] mx-auto min-h-[440px] sm:min-h-[480px]">
                
                {/* Offset outline stroke behind Left Arch */}
                <div className="absolute -top-3 -left-3 w-[47%] h-full rounded-t-full rounded-b-3xl border-2 border-[#c9a84c]/30 -z-0 hidden sm:block" />

                <div className="grid grid-cols-2 gap-4 h-full relative z-10">
                  
                  {/* Left Tall Arch: Senior Advocate Partner */}
                  <div className="h-[390px] sm:h-[450px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl relative border-4 border-white bg-gray-100 group">
                    <Image
                      src="/advocate-senior-standing.jpg"
                      alt="UK Law Associates Senior Advocate Partner"
                      fill
                      sizes="(max-width: 768px) 50vw, 270px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Right Column: 2 Stacked Images */}
                  <div className="flex flex-col gap-4 h-[390px] sm:h-[450px]">
                    
                    {/* Top Right: Advocate Portrait at Chambers Desk */}
                    <div className="h-[48%] rounded-t-3xl rounded-b-2xl overflow-hidden shadow-xl relative border-2 border-white bg-gray-100 group">
                      <Image
                        src="/advocate-desk-justice.jpg"
                        alt="UK Law Associates Advocate at Law & Justice Chambers"
                        fill
                        sizes="(max-width: 768px) 50vw, 270px"
                        className="object-cover object-[54%_center] group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                    </div>

                    {/* Bottom Right: UK Law Firm Advocates Standing Together */}
                    <div className="h-[48%] rounded-2xl rounded-b-3xl overflow-hidden shadow-xl relative border-2 border-white bg-gray-100 group">
                      <Image
                        src="/uk-law-firm-partners.jpg"
                        alt="UK Law Firm Advocates & Legal Consultants"
                        fill
                        sizes="(max-width: 768px) 50vw, 270px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                  </div>

                </div>

                {/* Center Circular Notary Seal with Golden UK Emblem */}
                <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0a1222] border-2 border-[#c9a84c] shadow-2xl flex items-center justify-center p-2 group hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-full border border-dashed border-[#e5bf55]/60 flex items-center justify-center relative p-1.5">
                    <Image
                      src="/uk-emblem-gold.png"
                      alt="UK Law Firm Official Gold Emblem"
                      width={48}
                      height={40}
                      style={{ width: 'auto', height: 'auto' }}
                      className="max-h-9 object-contain drop-shadow-[0_2px_6px_rgba(201,168,76,0.6)]"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Core Practice Overview */}
            <div className="lg:col-span-6 font-sans">
              <p className="text-[#b38634] font-serif italic text-base sm:text-lg mb-2 font-medium">
                Our Practice &amp; Ethos
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1222] leading-tight mb-5 tracking-tight">
                A Distinguished Practice Rooted in Justice and Ethics
              </h2>

              <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed mb-4">
                Founded by advocates <strong>M. Umamaheshwar Reddy</strong> (B.Sc., M.Sc., LL.B.) and <strong>S. Kamalakar</strong> (B.B.M., M.C.A., LL.B.), UK Law Firm delivers client-centered, ethical, and result-oriented legal representation across India&apos;s judicial system.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our chambers specialize in civil litigation, property and title disputes, criminal defense, bail matters, corporate contracts, RERA disputes, and writ petitions before High Courts. We combine exhaustive legal research, rigorous courtroom advocacy, and strategic counsel to safeguard client rights.
              </p>

              {/* Checkpoints Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm font-medium text-gray-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0a1222] text-[#e5bf55] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>High Court &amp; Trial Court Advocacy</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0a1222] text-[#e5bf55] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Rigorous Case-Law Preparation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0a1222] text-[#e5bf55] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Complete Client Confidentiality</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0a1222] text-[#e5bf55] flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Tailored Legal Strategy</span>
                </div>
              </div>

              {/* Core Pillars pill */}
              <div className="inline-block bg-[#fcf8ec] border border-[#eedfba] px-4 py-2 rounded-xl text-xs font-serif font-bold text-[#0a1222]">
                <span className="text-[#8a7238] uppercase tracking-wider text-[11px] mr-2">Core Pillars:</span>
                <span>Integrity • Dedication • Results • Justice • Trust</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        HOW IT WORKS / 5-STEP LEGAL WORKFLOW SECTION
        ========================================================================
      */}
      <HowItWorks />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}