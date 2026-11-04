'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { legalServices } from '@/data/services';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHome = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isServicesPage = pathname.startsWith('/services');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#070c14] shadow-lg py-3.5 border-b border-[#c9a84c]/25"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
            <Image
              src="/uk-emblem-gold.png"
              alt="UK Law Firm Official Gold Emblem"
              width={48}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
              className="max-h-10 object-contain drop-shadow-[0_2px_8px_rgba(201,168,76,0.4)] group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="text-white font-serif text-2xl font-bold tracking-tight block">
              UK Law Firm
            </span>
            <span className="text-[#c9a84c] text-[9px] tracking-[0.2em] font-sans font-bold uppercase block -mt-0.5">
              ADVOCATES &amp; LEGAL CONSULTANTS
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-sans">
          
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-200 ${
              isHome
                ? 'text-[#e5bf55] font-semibold border-b-2 border-[#e5bf55] pb-0.5'
                : 'text-gray-300 hover:text-[#e5bf55]'
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors duration-200 ${
              isAboutPage
                ? 'text-[#e5bf55] font-semibold border-b-2 border-[#e5bf55] pb-0.5'
                : 'text-gray-300 hover:text-[#e5bf55]'
            }`}
          >
            About
          </Link>

          {/* Services with Mega Dropdown */}
          <div
            ref={dropdownRef}
            className="relative py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 py-1 cursor-pointer ${
                isServicesPage
                  ? 'text-[#e5bf55] font-semibold border-b-2 border-[#e5bf55] pb-0.5'
                  : 'text-gray-300 hover:text-[#e5bf55]'
              }`}
            >
              <span>Services</span>
              <svg
                className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[#e5bf55]' : 'text-gray-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Desktop Mega Dropdown Menu with Hover Bridge */}
            {servicesOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Invisible hover bridge buffer: fills the gap between button and card */}
                <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" />

                <div className="bg-[#0c1424]/95 border border-[#c9a84c]/40 rounded-xl shadow-2xl p-4 text-left font-sans backdrop-blur-xl">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                    <div>
                      <span className="text-[#e5bf55] font-serif font-bold text-sm block">
                        Legal Services &amp; Practice Areas
                      </span>
                      <span className="text-[10px] text-gray-400">
                        TELANGANA | COURTS | TRIBUNALS | PAN INDIA
                      </span>
                    </div>
                    <Link
                      href="/#services"
                      onClick={() => setServicesOpen(false)}
                      className="text-[11px] font-bold text-[#c9a84c] hover:text-[#e5bf55] transition-colors inline-flex items-center gap-1"
                    >
                      <span>View All 14 Services</span>
                      <span>→</span>
                    </Link>
                  </div>

                  {/* 2-Column Compact Grid of 14 Services */}
                  <div className="grid grid-cols-2 gap-x-2.5 gap-y-1">
                    {legalServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="group py-1.5 px-2 rounded-lg hover:bg-white/8 border border-transparent hover:border-[#c9a84c]/30 transition-all flex items-center gap-2"
                      >
                        <span className="text-xs">⚖️</span>
                        <span className="text-white text-xs font-semibold group-hover:text-[#e5bf55] transition-colors truncate">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Gallery */}
          <Link
            href="/gallery"
            className="text-sm font-medium text-gray-300 hover:text-[#e5bf55] transition-colors"
          >
            Gallery
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-300 hover:text-[#e5bf55] transition-colors"
          >
            Contact
          </Link>

        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="bg-[#b38634] hover:bg-[#c9983e] text-white px-6 py-2.5 rounded-full text-xs font-semibold font-sans tracking-wide transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Book Consultation</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#c9a84c] text-2xl p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0f18] border-t border-[#c9a84c]/20 px-6 py-5 flex flex-col gap-3 font-sans shadow-2xl max-h-[85vh] overflow-y-auto">
          
          <Link
            href="/"
            className="text-gray-200 hover:text-[#e5bf55] text-sm py-1.5 transition-colors font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-200 hover:text-[#e5bf55] text-sm py-1.5 transition-colors font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full text-left text-gray-200 hover:text-[#e5bf55] text-sm py-1.5 font-medium flex items-center justify-between"
            >
              <span>Services</span>
              <span className="text-xs text-[#c9a84c]">{mobileServicesOpen ? '▲' : '▼'}</span>
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 pt-2 pb-2 space-y-2 border-l border-[#c9a84c]/30 ml-2 mt-1">
                <Link
                  href="/#services"
                  className="block text-xs font-bold text-[#e5bf55] py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  ✦ View All 14 Practice Areas →
                </Link>
                {legalServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block text-xs text-gray-300 hover:text-[#e5bf55] py-1 truncate"
                    onClick={() => setMenuOpen(false)}
                  >
                    • {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-gray-200 hover:text-[#e5bf55] text-sm py-1.5 transition-colors font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="text-gray-200 hover:text-[#e5bf55] text-sm py-1.5 transition-colors font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#b38634] text-white px-5 py-3 text-xs font-semibold rounded-full text-center flex items-center justify-center gap-2 shadow-md"
          >
            <span>Book Consultation →</span>
          </Link>

        </div>
      )}
    </header>
  );
}
