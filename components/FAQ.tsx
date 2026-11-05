'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'What types of legal matters does UK Law Firm handle?',
    answer:
      'We provide comprehensive legal counsel and courtroom representation across Civil Litigation, Criminal Defense, Property & RERA Disputes, Family & Matrimonial Law, Corporate Compliance, and specialized Tribunals (NCLT, MACT, Consumer Forums).',
  },
  {
    question: 'How do I schedule an initial consultation with an advocate?',
    answer:
      'You can schedule a consultation by calling our chambers directly or submitting an appointment request online. We offer both in-person chamber meetings and secure, confidential telephonic or video consultations.',
  },
  {
    question: 'What documents should I bring for my first legal evaluation?',
    answer:
      'Please carry any legal notices received, property title deeds, contracts, police complaints/FIRs, or prior court orders relevant to your matter. Having a brief chronological summary of events also helps our advocates evaluate your merits swiftly.',
  },
  {
    question: 'How are professional legal fees and court expenses structured?',
    answer:
      'Our fee structure is completely transparent and discussed upfront with zero hidden charges. Fees vary depending on the nature of the case, jurisdictional court, drafting requirements, and stages of proceedings.',
  },
  {
    question: 'Do your advocates represent clients across High Courts and Tribunals in India?',
    answer:
      'Yes. Our advocates regularly represent individuals, commercial entities, and property owners across various High Courts, District & Sessions Courts, Special Tribunals, and the Supreme Court of India.',
  },
  {
    question: 'How will I be informed about court hearing dates and case progress?',
    answer:
      'We maintain an active client reporting protocol. Following every court listing or tribunal hearing, our legal team provides prompt status updates, certified copies of orders, and next-step litigation roadmaps.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#faf8f4] text-gray-900 relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#fcf4e4] border border-[#e5bf55]/50 text-[#b38634] text-[11px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full mb-3.5 shadow-xs">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#0a1222] mb-3 tracking-tight">
            Frequently Asked <span className="text-[#c9a84c]">Questions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Clear, honest answers to common queries regarding courtroom procedures, consultations, and litigation.
          </p>
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-2 border-[#c9a84c] shadow-lg'
                    : 'border border-gray-200/80 hover:border-[#c9a84c]/50 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#0a1222] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#0a1222] text-[#e5bf55] rotate-180'
                        : 'bg-[#faf6ed] text-[#b38634] border border-[#c9a84c]/30'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 12H5" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

