'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'What kinds of legal cases do you handle?',
    answer:
      'We help with property disputes, civil suits, criminal defense and bail, cheque bounce cases, family and divorce matters, RERA builder disputes, company contracts, and tribunal cases across Hyderabad.',
  },
  {
    question: 'How do I book an appointment with an advocate?',
    answer:
      'You can call us directly, send a message on WhatsApp, or book a time through our website. We meet clients at our Gachibowli office or can speak over phone or video call.',
  },
  {
    question: 'What documents should I bring for my first meeting?',
    answer:
      'Bring any papers related to your case, like notices received, property documents, agreements, or police complaints. If you do not have all papers, just bring what you have and we will guide you.',
  },
  {
    question: 'How do you charge for your legal services?',
    answer:
      'We discuss our fees clearly during your first consultation before starting any work. Fees depend on the type of case, court, and drafting needed. There are no hidden charges.',
  },
  {
    question: 'Do you take cases in the High Court and other courts?',
    answer:
      'Yes. We regularly handle cases in the High Court for the State of Telangana, District Courts, Family Courts, and Special Tribunals in Hyderabad and across Telangana.',
  },
  {
    question: 'How will I know what is happening in my case?',
    answer:
      'We keep you updated before and after every court hearing date, explain what happened in simple words, and give you copies of any court orders.',
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
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold text-[#0a1222] leading-tight mb-3 tracking-tight max-w-[600px] mx-auto">
            Frequently Asked <span className="text-[#c9a84c]">Questions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Clear, honest answers to common questions about legal advice, court procedures, and our fees.
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
                  <span className="font-sans font-semibold tracking-tight text-base sm:text-lg text-[#0a1222] leading-snug">
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

