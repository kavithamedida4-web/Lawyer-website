'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'Civil Litigation & Injunction Suits',
    selectedAdvocatePhone: '9866775034',
    message: '',
  });

  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Maps+Apartments+Jayabheri+Pine+Valley+Gachibowli+Hyderabad';

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
      practiceArea: 'Civil Litigation & Injunction Suits',
      selectedAdvocatePhone: '9866775034',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white text-gray-900 font-sans relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <p className="text-[#b38634] text-xs font-bold uppercase tracking-[0.25em] mb-2 font-sans">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1222] tracking-tight">
            Contact Chambers &amp; Location
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a84c] mt-3 hidden sm:block" />
        </div>

        {/* 
          ========================================================================
          2-COLUMN SIDE-BY-SIDE LAYOUT (Matching Reference Image)
          Left: Interactive Google Map
          Right: Contact Info + Legal Inquiry Form
          ========================================================================
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* 
            ----------------------------------------------------------------------
            LEFT COLUMN: INTERACTIVE GOOGLE MAP (Matching Reference Map)
            ----------------------------------------------------------------------
          */}
          <div className="lg:col-span-6 w-full min-h-[480px] lg:min-h-[580px] h-full rounded-2xl overflow-hidden border border-gray-200 shadow-md relative bg-gray-100 flex flex-col">
            
            <iframe
              title="UK LAW FIRM Google Maps Location - Maps Apartments Gachibowli Hyderabad"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Maps+Apartments+Jayabheri+Pine+Valley+Gachibowli+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[480px] border-0"
              loading="lazy"
            />

            {/* Floating Top Location Card (Matching Reference Design) */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 shadow-lg border border-gray-200/90 max-w-[270px]">
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
                  className="w-7 h-7 rounded-full bg-[#0a1222] text-[#e5bf55] flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform"
                  title="Get Directions"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b38634] font-semibold hover:underline"
                >
                  View larger map ↗
                </a>
                <span className="text-gray-400">Gachibowli, Hyd</span>
              </div>
            </div>

            {/* Bottom Button "Open in Google Maps" */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 z-10 bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] border border-[#c9a84c]/50 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl transition-all inline-flex items-center gap-2 group hover:scale-105"
            >
              <span>Open in Google Maps</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>

          </div>

          {/* 
            ----------------------------------------------------------------------
            RIGHT COLUMN: EXACT REPLICA OF THE USER REFERENCE DESIGN
            Heading: "Contact Info"
            Icons: Address, Email, Phone
            Inputs: Name, Email, Phone, Practice Area, Message
            Button: Send (Opens WhatsApp pre-filled)
            ----------------------------------------------------------------------
          */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            
            {/* Contact Info Header (Exact Layout from Reference Image) */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1222] mb-4">
                Contact Info
              </h3>

              <div className="space-y-3.5 text-sm text-gray-700">
                
                {/* 1. Address Row with Location Pin Icon */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fcf8ec] text-[#b38634] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#e8d5a3]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <div className="leading-snug">
                    <p className="font-semibold text-[#0a1222]">
                      Flat No. 201, 2nd Floor, Maps Apartments, Plot No. 45,
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Jayabheri Pine Valley, Besides Care Hospitals, Gachibowli, Hyderabad - 500032
                    </p>
                  </div>
                </div>

                {/* 2. Email Row with Mail Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fcf8ec] text-[#b38634] flex items-center justify-center flex-shrink-0 border border-[#e8d5a3]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:contact@uklawfirm.in"
                    className="hover:text-[#b38634] transition-colors font-medium text-xs sm:text-sm"
                  >
                    contact@uklawfirm.in
                  </a>
                </div>

                {/* 3. Phone Row with Phone Icon */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fcf8ec] text-[#b38634] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#e8d5a3]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                    <a
                      href="tel:+919866775034"
                      className="hover:text-[#b38634] font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span className="text-gray-900 font-semibold">+91 98667 75034</span>
                      <span className="text-gray-500 text-xs">(M. Umamaheshwar Reddy)</span>
                    </a>
                    <span className="text-gray-300 hidden sm:inline">•</span>
                    <a
                      href="tel:+916304856208"
                      className="hover:text-[#b38634] font-medium transition-colors inline-flex items-center gap-1"
                    >
                      <span className="text-gray-900 font-semibold">+91 63048 56208</span>
                      <span className="text-gray-500 text-xs">(S. Kamalakar)</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Legal Consultation Form (Matching Soft Blue Tint Inputs from Reference) */}
            {submitted ? (
              <div className="bg-[#faf6ed] border border-[#c9a84c] rounded-2xl p-7 text-center my-auto">
                <div className="w-12 h-12 rounded-full bg-[#0a1222] text-[#e5bf55] mx-auto flex items-center justify-center mb-3 shadow">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0a1222]">
                  WhatsApp Ready to Send
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 mt-2 max-w-sm mx-auto leading-relaxed">
                  Your case details are placed inside WhatsApp&apos;s message bar. Tap <strong>Send</strong> in WhatsApp to deliver your inquiry.
                </p>

                <div className="mt-4 flex items-center justify-center gap-3">
                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] px-5 py-2.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 shadow"
                    >
                      <span>Re-Open WhatsApp</span>
                      <span>↗</span>
                    </a>
                  )}
                  <button
                    onClick={handleReset}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    New Consultation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 font-sans">
                
                {/* Clean Advocate Selection Switch - Light Gold Yellow */}
                <div className="bg-[#fcf8ec] p-1.5 rounded-xl flex items-center gap-1.5 border border-[#eedfba]">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedAdvocatePhone: '9866775034' })}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center truncate ${
                      formData.selectedAdvocatePhone === '9866775034'
                        ? 'bg-white text-[#0a1222] shadow-sm font-bold border border-[#c9a84c]'
                        : 'text-[#8a7238] hover:text-[#0a1222] hover:bg-[#f8f1de]'
                    }`}
                  >
                    Adv. M. Umamaheshwar Reddy
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedAdvocatePhone: '6304856208' })}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center truncate ${
                      formData.selectedAdvocatePhone === '6304856208'
                        ? 'bg-white text-[#0a1222] shadow-sm font-bold border border-[#c9a84c]'
                        : 'text-[#8a7238] hover:text-[#0a1222] hover:bg-[#f8f1de]'
                    }`}
                  >
                    Adv. S. Kamalakar
                  </button>
                </div>

                {/* Name - Light Gold Yellow Tint */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#fcf8ec] hover:bg-[#faf3df] focus:bg-white border border-[#eedfba] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 rounded-xl px-4 py-3.5 text-sm text-[#0a1222] placeholder-[#a69268] focus:outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Email & Phone Dual Row - Light Gold Yellow Tint */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#fcf8ec] hover:bg-[#faf3df] focus:bg-white border border-[#eedfba] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 rounded-xl px-4 py-3.5 text-sm text-[#0a1222] placeholder-[#a69268] focus:outline-none transition-all shadow-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#fcf8ec] hover:bg-[#faf3df] focus:bg-white border border-[#eedfba] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 rounded-xl px-4 py-3.5 text-sm text-[#0a1222] placeholder-[#a69268] focus:outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Practice Area Selector - Light Gold Yellow Tint */}
                <div>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full bg-[#fcf8ec] hover:bg-[#faf3df] focus:bg-white border border-[#eedfba] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 rounded-xl px-4 py-3.5 text-sm text-[#0a1222] focus:outline-none transition-all shadow-xs cursor-pointer"
                  >
                    <option value="Civil Litigation & Injunction Suits">Civil Litigation &amp; Injunction Suits</option>
                    <option value="Criminal Defense & Bail Matters">Criminal Defense &amp; Bail Matters</option>
                    <option value="Property, Title Disputes & RERA">Property, Title Disputes &amp; RERA</option>
                    <option value="Family & Matrimonial Matters">Family &amp; Matrimonial Matters</option>
                    <option value="Corporate, Arbitration & Contracts">Corporate, Arbitration &amp; Contracts</option>
                    <option value="Tribunals & High Court Writs">Tribunals &amp; High Court Writs</option>
                  </select>
                </div>

                {/* Message - Light Gold Yellow Tint */}
                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#fcf8ec] hover:bg-[#faf3df] focus:bg-white border border-[#eedfba] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 rounded-xl px-4 py-3.5 text-sm text-[#0a1222] placeholder-[#a69268] focus:outline-none transition-all shadow-xs resize-none"
                  />
                </div>

                {/* Send Button (Matching Reference Shape with Luxury Navy & Gold Theme) */}
                <div className="pt-1 flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-[#0a1222] hover:bg-[#14233c] text-[#e5bf55] border border-[#c9a84c]/50 hover:border-[#e5bf55] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group cursor-pointer hover:scale-105"
                  >
                    <span>Send</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <span className="text-[11px] text-gray-400">
                    Pre-fills in WhatsApp message bar
                  </span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}