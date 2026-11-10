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
    <section id="contact" className="py-12 sm:py-16 bg-[#faf8f4] text-gray-900 font-sans relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Optional Section Heading (Shown on Homepage, hidden on dedicated /contact page) */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[1.5px] bg-[#d8b577]" />
              <span className="text-[#8c6b45] text-[10px] font-bold tracking-[0.25em] uppercase font-sans">
                GET IN TOUCH
              </span>
              <span className="w-8 h-[1.5px] bg-[#d8b577]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-serif font-bold text-[#0a1222] tracking-tight mb-1.5">
              Contact Us &amp; <span className="text-[#b38634]">Location</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Reach out directly to our senior advocates for confidential consultation and chamber appointments in Hyderabad.
            </p>

            <div className="w-14 h-[2px] bg-[#c9a84c] mx-auto mt-3" />
          </div>
        )}

        {/* 
          ========================================================================
          MAIN 2-COLUMN SPLIT: FORM ON LEFT (7 COLS) + MAP ON RIGHT (5 COLS)
          Matching exact reference layout proportions & side-by-side heights
          ========================================================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          
          {/* LEFT COLUMN: CONSULTATION FORM CARD (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-[#c9a84c]/40 shadow-md flex flex-col justify-center">
            
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 bg-[#0a1222] text-[#e5bf55] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2.5">
                <span>⚖️</span>
                <span>CONFIDENTIAL CONSULTATION</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1222]">
                Schedule a Legal Consultation
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Fill out the quick form below to connect directly with our senior advocates.
              </p>
            </div>

            {submitted ? (
              <div className="bg-gray-50 border border-[#c9a84c]/60 rounded-2xl p-6 text-center my-auto">
                <div className="w-12 h-12 rounded-full bg-[#0a1222] text-[#e5bf55] mx-auto flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0a1222]">
                  Consultation Inquiry Prepared
                </h4>
                <p className="text-xs text-gray-600 mt-1.5 max-w-sm mx-auto leading-relaxed">
                  Your structured case summary has been pre-filled in WhatsApp. Tap <strong>Send</strong> in WhatsApp to immediately deliver it to our chambers.
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-all hover:scale-105"
                    >
                      <span>Open WhatsApp</span>
                      <span>↗</span>
                    </a>
                  )}
                  <button
                    onClick={handleReset}
                    className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                  >
                    New Consultation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
                
                {/* Advocate Switcher */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Select Senior Advocate
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedAdvocatePhone: '9866775034' })}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        formData.selectedAdvocatePhone === '9866775034'
                          ? 'border-2 border-[#b38634] bg-[#fdfbf6] shadow-2xs'
                          : 'border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-[#0a1222]">Adv. M. Umamaheshwar Reddy</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">+91 98667 75034</p>
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
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        formData.selectedAdvocatePhone === '6304856208'
                          ? 'border-2 border-[#b38634] bg-[#fdfbf6] shadow-2xs'
                          : 'border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-[#0a1222]">Adv. S. Kamalakar</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">+91 63048 56208</p>
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

                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rajeshwar Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Practice Area & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-practice" className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                      Select Practice Area *
                    </label>
                    <div className="relative">
                      <select
                        id="contact-practice"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full appearance-none bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-3.5 py-2.5 pr-9 text-xs sm:text-sm text-[#0a1222] focus:outline-none transition-all cursor-pointer truncate"
                      >
                        {practiceAreasList.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Brief Case Details */}
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Brief Case Details &amp; Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={2}
                    required
                    placeholder="Briefly describe your legal matter or preferred chamber appointment time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 focus:border-[#b38634] focus:ring-2 focus:ring-[#b38634]/20 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0a1222] placeholder-gray-400 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] border border-[#c9a84c]/60 hover:border-[#e5bf55] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Consultation Request on WhatsApp</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT COLUMN: GOOGLE MAP CARD (5 COLS - MATCHES FORM HEIGHT) */}
          <div className="lg:col-span-5 w-full h-[320px] sm:h-[360px] lg:h-auto rounded-2xl overflow-hidden border border-[#c9a84c]/50 shadow-md relative bg-gray-100 flex flex-col">
            <iframe
              title="UK LAW FIRM Google Maps Location - Maps Apartments Gachibowli Hyderabad"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6128129318995!2d78.3718349!3d17.4303593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d350593b7f%3A0x4e0868fc00911547!2s!5e0!3m2!1sen!2sin!4v1794314126057!5m2!1sen!2sin"
              className="w-full h-full border-0 flex-grow"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
