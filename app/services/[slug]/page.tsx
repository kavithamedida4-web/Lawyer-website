import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import { legalServices, getSubServiceImage } from '@/data/services';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return legalServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = legalServices.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found | UK Law Firm' };

  return {
    title: `${service.title} (${service.category}) | UK Law Firm — Hyderabad`,
    description: `${service.shortDesc} Practice led by advocates M. Umamaheshwar Reddy & S. Kamalakar in Gachibowli, Hyderabad.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = legalServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      {/* 
        ========================================================================
        HERO SECTION: Warm Cream / Parchment Design with 4-Card Staggered Grid
        Matching exact user reference design
        ========================================================================
      */}
      <section className="pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 lg:min-h-screen lg:min-h-[100dvh] lg:flex lg:flex-col lg:justify-center bg-gradient-to-b from-[#ebd498] via-[#e2c67b] to-[#d6b461] text-[#0a1222] relative overflow-hidden border-b border-[#c49a37]">
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#fff2cc]/40 rounded-full blur-3xl pointer-events-none select-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#c49a37]/25 rounded-full blur-3xl pointer-events-none select-none" />


        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 lg:px-12 relative z-10 lg:my-auto">
          
          {/* Breadcrumb Navigation - Desktop Only to keep Mobile ultra-clean & lightweight */}
          <nav className="hidden sm:flex items-center gap-2 text-xs text-[#5c4415] mb-6 font-semibold">
            <Link href="/" className="hover:text-[#0a1222] transition-colors">Home</Link>
            <span className="text-[#8c6b23]">/</span>
            <Link href="/#services" className="hover:text-[#0a1222] transition-colors">Practice Areas</Link>
            <span className="text-[#8c6b23]">/</span>
            <span className="text-[#0a1222] font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-10 lg:gap-12 items-center">
            
            {/* 
              ------------------------------------------------------------------
              LEFT COLUMN: Ultra-Clean, Lightweight Hero Content
              Reduced content for maximum elegance & photo focus
              ------------------------------------------------------------------
            */}
            <div className="lg:col-span-6 text-left">
              
              {/* Category Pill with Bullet */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-xs border border-[#b38634] text-[#6b4c0e] px-2.5 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-1.5 sm:mb-4 shadow-sm">
                <span className="text-xs leading-none">•</span>
                <span>{service.category}</span>
              </div>

              {/* Main Service Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-sans font-semibold tracking-tight text-[#0a1222] leading-[1.12] mb-2 sm:mb-4 max-w-[680px]">
                {service.title}
              </h1>

              {/* Single Line Content on Mobile, Full on Desktop */}
              <p className="text-[#1e293b] text-xs sm:text-base leading-snug sm:leading-relaxed mb-2.5 sm:mb-6 font-sans max-w-lg font-medium line-clamp-1 sm:line-clamp-none">
                {service.shortDesc}
              </p>

              {/* Action Buttons - Clean & Elegant */}
              <div className="flex flex-row items-center gap-2 sm:gap-3.5 mb-2 sm:mb-0">
                <Link
                  href="/contact"
                  className="bg-[#0a1222] hover:bg-[#14233c] text-[#f4d27a] hover:text-white font-extrabold px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_18px_rgba(10,18,34,0.35)] hover:shadow-[0_6px_22px_rgba(10,18,34,0.5)] transition-all inline-flex items-center gap-1.5 sm:gap-2 active:scale-95 flex-shrink-0"
                >
                  <span className="text-sm sm:text-base leading-none">⚖️</span>
                  <span>BOOK CONSULTATION</span>
                  <span className="text-xs sm:text-sm font-bold">→</span>
                </Link>

              </div>

            </div>

            {/* 
              ------------------------------------------------------------------
              RIGHT COLUMN: 4-Photo Staggered Rounded Grid
              Scaled for full visibility on mobile screens without being cut
              ------------------------------------------------------------------
            */}
            <div className="lg:col-span-6 mt-1 lg:mt-0">
              <div className="relative max-w-[530px] mx-auto lg:ml-auto select-none">
                
                {/* 2x2 Staggered Grid - Scaled to fit fully on mobile without clipping */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-5 items-start">
                  
                  {/* Left Column: Card 1 (Top) + Card 3 (Bottom) */}
                  <div className="flex flex-col gap-2.5 sm:gap-5 animate-float-slow">
                    
                    {/* Card 1: Top-Left (Advocates & Inauguration) - Fully Framed */}
                    <div className="relative h-[142px] sm:h-[210px] lg:h-[235px] rounded-2xl sm:rounded-[32px] overflow-hidden border-[3px] sm:border-4 border-white shadow-md sm:shadow-xl bg-gray-100 group transition-all duration-500 ease-out hover:scale-[1.03]">
                      <Image
                        src={service.heroImages.card1.src}
                        alt={service.heroImages.card1.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 320px"
                        className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>

                    {/* Card 3: Bottom-Left (Senior Advocate Consultation Desk) */}
                    <div className="relative h-[165px] sm:h-[240px] lg:h-[265px] rounded-2xl sm:rounded-[32px] overflow-hidden border-[3px] sm:border-4 border-white shadow-md sm:shadow-xl bg-gray-100 group transition-all duration-500 ease-out hover:scale-[1.03]">
                      <Image
                        src={service.heroImages.card3.src}
                        alt={service.heroImages.card3.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 320px"
                        className="object-cover object-[54%_center] group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right Column: Card 2 (Top) + Card 4 (Bottom) */}
                  <div className="flex flex-col gap-2.5 sm:gap-5 animate-float-reverse">
                    
                    {/* Card 2: Top-Right (Advocate Consultation / Portrait) */}
                    <div className="relative h-[165px] sm:h-[240px] lg:h-[265px] rounded-2xl sm:rounded-[32px] overflow-hidden border-[3px] sm:border-4 border-white shadow-md sm:shadow-xl bg-gray-100 group transition-all duration-500 ease-out hover:scale-[1.03]">
                      <Image
                        src={service.heroImages.card2.src}
                        alt={service.heroImages.card2.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 320px"
                        className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>

                    {/* Card 4: Bottom-Right (Founding Partners / Advocate in Chambers) */}
                    <div className="relative h-[142px] sm:h-[210px] lg:h-[235px] rounded-2xl sm:rounded-[32px] overflow-hidden border-[3px] sm:border-4 border-white shadow-md sm:shadow-xl bg-gray-100 group transition-all duration-500 ease-out hover:scale-[1.03]">
                      <Image
                        src={service.heroImages.card4.src}
                        alt={service.heroImages.card4.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 320px"
                        className="object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        SUB-SERVICES SECTION: Showcasing Every Sub-Service from the Card
        ========================================================================
      */}
      <section id="sub-services" className="py-20 sm:py-24 bg-[#faf9f6] border-b border-gray-200 scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] tracking-tight leading-tight max-w-[600px] mx-auto">
              Comprehensive Legal Coverage in {service.title}
            </h2>
            <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
          </div>

          {/* Sub-services Grid with Authentic Legal Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {service.subServices.map((sub) => {
              const subImage = sub.image || getSubServiceImage(sub.name);
              return (
                <div
                  key={sub.name}
                  className="bg-white rounded-2xl overflow-hidden border border-[#eedfba]/80 hover:border-[#b38634] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Sub-service Image: Authentic Indian Legal Imagery */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={subImage}
                        alt={`${sub.name} - ${service.title}`}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Content Body */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-serif font-bold text-lg text-[#0a1222] mb-2 group-hover:text-[#916b1f] transition-colors leading-snug">
                        {sub.name}
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                        {sub.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-gray-100 flex items-center justify-end">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-[#b38634] group-hover:text-[#0a1222] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Inquire Now</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        WHY CHOOSE UK LAW FIRM SECTION: Prominent, Balanced & Engaging
        - Left: Partners Standing Image
        - Right: 3 Key Legal Highlights & Metrics in Substantial Cards
        ========================================================================
      */}
      <section className="py-14 sm:py-18 bg-[#faf7f2] border-b border-[#eedfba]/60 relative overflow-hidden">
        
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none select-none" />

        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-11">
            <p className="text-[#b38634] text-xs font-bold uppercase tracking-[0.22em] mb-2 font-sans">
              WHY CHOOSE UK LAW FIRM
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] tracking-tight leading-tight max-w-[600px] mx-auto">
              The Numbers &amp; Track Record Speak For Themselves
            </h2>
            <div className="w-14 h-[2px] bg-[#c9a84c] mx-auto mt-3.5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-stretch">
            
            {/* Left Column: Partners Image */}
            <div className="lg:col-span-5 relative flex">
              <div className="relative w-full h-[380px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border-3 border-white shadow-xl bg-gray-100 group">
                <Image
                  src="/real-partners-brass-lamp.jpg"
                  alt="UK Law Firm Founding Advocates M. Umamaheshwar Reddy and S. Kamalakar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-[50%_15%] group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Right Column: 3 High-Impact Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-4.5">
              
              {/* Point 1: 98% Success Rate */}
              <div className="flex items-center gap-4 sm:gap-5 p-4.5 sm:p-5 rounded-2xl bg-white border border-[#eedfba] shadow-xs hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#14233c] border-3 border-white shadow-sm flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#f3cd67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-[#0a1222] mb-1 group-hover:text-[#916b1f] transition-colors leading-snug">
                    98% Favorable Resolution &amp; Relief
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Anticipatory bails, stay orders, quash petitions under 482 Cr.P.C., and decisive trial decrees across Telangana Courts.
                  </p>
                </div>
              </div>

              {/* Point 2: 15+ Years Courtroom Experience */}
              <div className="flex items-center gap-4 sm:gap-5 p-4.5 sm:p-5 rounded-2xl bg-white border border-[#eedfba] shadow-xs hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#24374e] border-3 border-white shadow-sm flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#f3cd67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-[#0a1222] mb-1 group-hover:text-[#916b1f] transition-colors leading-snug">
                    15+ Years Direct Courtroom Advocacy
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Direct partner representation before High Courts, Metropolitan Sessions Benches, and NCLT with zero delegation to juniors.
                  </p>
                </div>
              </div>

              {/* Point 3: 100% Confidential Practice */}
              <div className="flex items-center gap-4 sm:gap-5 p-4.5 sm:p-5 rounded-2xl bg-white border border-[#eedfba] shadow-xs hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#b38634] border-3 border-white shadow-sm flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-[#0a1222] mb-1 group-hover:text-[#916b1f] transition-colors leading-snug">
                    100% Confidential Chamber Practice
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Private one-on-one case conferences, comprehensive evidentiary case preparation, and 24/7 emergency readiness in Gachibowli.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        HOW IT WORKS SECTION: 5-Step Process
        ========================================================================
      */}
      <HowItWorks />

      {/* 
        ========================================================================
        CLIENT TESTIMONIALS SECTION
        ========================================================================
      */}
      <Testimonials />

      {/* 
        ========================================================================
        CHAMBERS & ADVOCATE GALLERY SECTION
        ========================================================================
      */}
      <Gallery />

      {/* 
        ========================================================================
        FREQUENTLY ASKED QUESTIONS SECTION
        ========================================================================
      */}
      <FAQ />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

