'use client';
import { useState } from 'react';

const practiceAreasList = [
  'Criminal Law (Bail, Cheque Bounce & Trials)',
  'Civil Law (Property, Partition & Injunctions)',
  'Family Law (Divorce, Custody & Alimony)',
  'Tribunals & Forums (NCLT, MACT, CAT)',
  'Taxation & IT Law (Income Tax, GST, Appeals)',
  'RERA & Builder - Buyer Disputes',
  'Landlord & Tenant (Eviction & Lease Deeds)',
  'Labour & Employment Law',
  'Consumer Protection Commission',
  'Corporate & Commercial Agreements',
  'Intellectual Property (Trademark, Patent, Copyright)',
  'Cyber Crime & Digital Fraud',
  'Immigration & NRI Documentation',
  'Other Legal Services (Notices, GPA, Wills)',
];

export default function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: practiceAreasList[1],
    selectedAdvocatePhone: '9866775034',
    message: '',
  });

  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const googleMapsUrl = 'https://g.page/r/CUcVkQD8aAhOEBM/review';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const advocateName =
      formData.selectedAdvocatePhone === '9866775034'
        ? 'Advocate M. Umamaheshwar Reddy'
        : 'Advocate S. Kamalakar';

    const whatsappMessage =
`⚖️ *UK LAW FIRM - Legal Consultation Inquiry*

👤 *Client Name:* ${formData.name.trim()}
📞 *Phone Number:* ${formData.phone.trim()}
📧 *Email Address:* ${formData.email.trim()}
🏛️ *Practice Area:* ${formData.practiceArea}
👨‍⚖️ *Attention:* ${advocateName}

📝 *Case Summary & Details:*
${formData.message.trim()}

---
_Inquiry submitted via UK Law Firm official portal_`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const targetUrl = `https://wa.me/91${formData.selectedAdvocatePhone}?text=${encodedText}`;

    setLastWhatsAppUrl(targetUrl);
    setSubmitted(true);

    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      practiceArea: practiceAreasList[1],
      selectedAdvocatePhone: '9866775034',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf8f4] text-gray-900 font-sans relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Optional Section Heading (Shown on Homepage, hidden on dedicated /contact page) */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-10 h-[1.5px] bg-[#d8b577]" />
              <span className="text-[#8c6b45] text-[11px] font-bold tracking-[0.25em] uppercase font-sans">
                GET IN TOUCH
              </span>
              <span className="w-10 h-[1.5px] bg-[#d8b577]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#0a1222] tracking-tight mb-2">
              Contact Chambers &amp; <span className="text-[#b38634]">Location</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Reach out directly to our senior advocates for confidential consultation, legal representation, and chamber appointments in Hyderabad.
            </p>

            <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
          </div>
        )}

        {/* 
          ========================================================================
          TOP ROW: 3 STRUCTURED CONTACT INFO CARDS
          ========================================================================
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          
          {/* Card 1: Chambers Location */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#c9a84c]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0a1222] text-[#e5bf55] flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0a1222] mb-2">
                Chambers Address
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                Flat No. 201, 2nd Floor, Maps Apartments, Plot No. 45, Jayabheri Pine Valley, Besides Care Hospitals, Gachibowli, Hyderabad - 500032
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#b38634] hover:text-[#0a1222] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>View on Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Card 2: Direct Advocate Helplines */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#c9a84c]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0a1222] text-[#e5bf55] flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0a1222] mb-3">
                Direct Advocate Phones
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+919866775034"
                  className="block p-2.5 rounded-xl bg-gray-50 hover:bg-[#faf6ed] border border-gray-100 hover:border-[#c9a84c]/40 transition-all group"
                >
                  <p className="text-xs text-gray-500 font-medium">Adv. M. Umamaheshwar Reddy</p>
                  <p className="text-sm font-bold text-[#0a1222] group-hover:text-[#b38634] transition-colors mt-0.5">
                    +91 98667 75034
                  </p>
                </a>
                <a
                  href="tel:+916304856208"
                  className="block p-2.5 rounded-xl bg-gray-50 hover:bg-[#faf6ed] border border-gray-100 hover:border-[#c9a84c]/40 transition-all group"
                >
                  <p className="text-xs text-gray-500 font-medium">Adv. S. Kamalakar</p>
                  <p className="text-sm font-bold text-[#0a1222] group-hover:text-[#b38634] transition-colors mt-0.5">
                    +91 63048 56208
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Email & Chamber Hours */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#c9a84c]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0a1222] text-[#e5bf55] flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0a1222] mb-2">
                Email &amp; Office Hours
              </h3>
              <div className="mb-4">
                <p className="text-xs text-gray-500 font-medium mb-1">Official Email Address</p>
                <a
                  href="mailto:contact@uklawfirm.in"
                  className="text-sm font-bold text-[#0a1222] hover:text-[#b38634] transition-colors break-all"
                >
                  contact@uklawfirm.in
                </a>
              </div>
              <div className="pt-3 border-t border-gray-100 space-y-1 text-xs text-gray-600">
                <p><strong className="text-[#0a1222]">Mon – Sat:</strong> 10:00 AM – 7:30 PM</p>
                <p><strong className="text-[#0a1222]">Sunday:</strong> By Prior Appointment</p>
              </div>
            </div>
          </div>

        </div>

        {/* 
          ========================================================================
          MAIN 2-COLUMN SPLIT: INTERACTIVE GOOGLE MAP + ELEVATED CONSULTATION FORM
          ========================================================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: INTERACTIVE GOOGLE MAP */}
          <div className="lg:col-span-6 w-full min-h-[420px] lg:min-h-[600px] rounded-3xl overflow-hidden border border-gray-200/90 shadow-lg relative bg-gray-100 flex flex-col">
            <iframe
              title="UK LAW FIRM Google Maps Location - Maps Apartments Gachibowli Hyderabad"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Maps+Apartments+Jayabheri+Pine+Valley+Gachibowli+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0 flex-grow"
              loading="lazy"
            />

            {/* Floating Top Location Card */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/90 max-w-[260px]">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-bold text-sm text-[#0a1222] font-serif leading-tight">
                    UK LAW FIRM
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Advocates &amp; Legal Consultants
                  </p>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0a1222] text-[#e5bf55] flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform shadow-sm"
                  title="Get Directions"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b38634] font-bold hover:underline"
                >
                  View larger map ↗
                </a>
                <span className="text-gray-400 font-medium">Gachibowli, Hyd</span>
              </div>
            </div>

            {/* Bottom Button "Open in Google Maps" */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 z-10 bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] border border-[#c9a84c]/50 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl transition-all inline-flex items-center gap-2 group hover:scale-105"
            >
              <span>Open in Google Maps</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>

          {/* RIGHT COLUMN: ELEVATED CONSULTATION FORM CARD (CRISP WHITE, NO YELLOW TINT) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-lg flex flex-col justify-center">
            
            <div className="mb-6">
              <span className="text-[11px] font-bold text-[#b38634] uppercase tracking-[0.2em] block mb-1">
                CONFIDENTIAL INQUIRY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1222]">
                Schedule a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fill in your case details below and connect directly with your chosen advocate.
              </p>
            </div>

            {submitted ? (
              <div className="bg-gray-50 border border-[#c9a84c]/60 rounded-2xl p-8 text-center my-auto">
                <div className="w-14 h-14 rounded-full bg-[#0a1222] text-[#e5bf55] mx-auto flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-xl text-[#0a1222]">
                  Consultation Inquiry Prepared
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Your structured case summary has been pre-filled in WhatsApp. Tap <strong>Send</strong> in WhatsApp to immediately deliver it to our chambers.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-all hover:scale-105"
                    >
                      <span>Open WhatsApp</span>
                      <span>↗</span>
                    </a>
                  )}
                  <button
                    onClick={handleReset}
                    className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-5 py-3 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                  >
                    New Consultation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                
                {/* Step 1: Select Advocate */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Select Senior Advocate
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedAdvocatePhone: '9866775034' })}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        formData.selectedAdvocatePhone === '9866775034'
                          ? 'border-2 border-[#b38634] bg-[#fdfbf6] shadow-xs'
                          : 'border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-[#0a1222]">Adv. M. Umamaheshwar Reddy</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">+91 98667 75034</p>
                      </div>
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          formData.selectedAdvocatePhone === '9866775034'
                            ? 'bg-[#b38634] text-white'
                            : 'border border-gray-300 bg-white'
                        }`}
                      >
                        {formData.selectedAdvocatePhone === '9866775034' && (
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedAdvocatePhone: '6304856208' })}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        formData.selectedAdvocatePhone === '6304856208'
                          ? 'border-2 border-[#b38634] bg-[#fdfbf6] shadow-xs'
                          : 'border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-[#0a1222]">Adv. S. Kamalakar</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">+91 63048 56208</p>
                      </div>
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          formData.selectedAdvocatePhone === '6304856208'
                            ? 'bg-[#b38634] text-white'
                            : 'border border-gray-300 bg-white'
                        }`}
                      >
                        {formData.selectedAdvocatePhone === '6304856208' && (
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Step 2: Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Rajeshwar Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-4 py-3 text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all"
                  />
                </div>

                {/* Step 3: Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-4 py-3 text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-4 py-3 text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Step 4: Practice Area Select */}
                <div>
                  <label htmlFor="contact-practice" className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Select Practice Area
                  </label>
                  <div className="relative">
                    <select
                      id="contact-practice"
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full appearance-none bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-4 py-3 pr-10 text-sm text-[#0a1222] focus:outline-none transition-all cursor-pointer"
                    >
                      {practiceAreasList.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Step 5: Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Brief Case Details / Legal Query
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    placeholder="Briefly describe your legal matter or desired consultation date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-4 py-3 text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] border border-[#c9a84c]/60 hover:border-[#e5bf55] px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Consultation Request</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2.5">
                    Opens a confidential pre-filled consultation message in WhatsApp.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
