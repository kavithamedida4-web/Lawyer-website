'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const advocates = [
    {
      name: 'M UMAMAHESHWAR REDDY',
      degree: 'B.Sc., M.Sc., LL.B.',
      title: 'Advocate & Legal Consultant',
      phone: '9866775034',
      phoneDisplay: '+91 98667 75034',
      whatsappUrl:
        'https://wa.me/919866775034?text=Hello%20Advocate%20Umamaheshwar%20Reddy,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.',
    },
    {
      name: 'S KAMALAKAR',
      degree: 'B.B.M., M.C.A., LL.B.',
      title: 'Advocate & Legal Consultant',
      phone: '6304856208',
      phoneDisplay: '+91 63048 56208',
      whatsappUrl:
        'https://wa.me/916304856208?text=Hello%20Advocate%20Kamalakar,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* WhatsApp Advocates Drawer Modal / Popover */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#0a1222] p-4 text-white relative">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Image
                  src="/uk-emblem-gold.png"
                  alt="UK Law Firm Emblem"
                  width={24}
                  height={20}
                  className="object-contain"
                />
                <span className="text-xs uppercase font-bold tracking-wider text-[#e5bf55]">
                  UK LAW FIRM
                </span>
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse ml-0.5" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-lg p-1"
                aria-label="Close WhatsApp Drawer"
              >
                ✕
              </button>
            </div>
            <h4 className="font-serif font-bold text-base text-white">
              Chat on WhatsApp
            </h4>
            <p className="text-[11px] text-gray-300">
              Direct consultation with Senior Legal Advocates
            </p>
          </div>

          {/* Advocates Contact List */}
          <div className="p-4 space-y-3 bg-[#fbfbfa]">
            {advocates.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-gray-200 hover:border-[#c9a84c] shadow-xs transition-all"
              >
                <div className="flex items-start justify-between gap-1 mb-1">
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#0a1222] leading-tight">
                      {adv.name}
                    </h5>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {adv.degree}
                    </p>
                  </div>
                  <span className="text-[10px] text-[#b38634] font-bold uppercase tracking-wider bg-[#faf6ed] px-2 py-0.5 rounded">
                    Advocate
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  {/* WhatsApp Chat Button */}
                  <a
                    href={adv.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-3 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  {/* Call Direct */}
                  <a
                    href={`tel:+91${adv.phone}`}
                    className="bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] py-2 px-3 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1 transition-all"
                    title={`Call ${adv.name}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{adv.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer of Drawer */}
          <div className="p-3 bg-white border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-serif">
              Integrity • Dedication • Results • Justice • Trust
            </p>
          </div>

        </div>
      )}

      {/* Floating Main WhatsApp Pill / Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/60"
        aria-label="Open WhatsApp Consultation"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="font-bold text-xs sm:text-sm tracking-wide">
          {isOpen ? 'Close' : 'Chat With Us'}
        </span>
      </button>

    </div>
  );
}
