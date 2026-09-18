import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold uppercase tracking-tight text-white">
            Preguntas Frecuentes
          </h2>

          <p className="text-base sm:text-lg font-jakarta font-normal text-neutral-400 max-w-xl mx-auto">
            Todo lo que necesitas saber antes de iniciar el desarrollo de tu sitio web.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#111114] border-cyan-400/50 shadow-lg'
                    : 'bg-[#111114]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-outfit font-bold uppercase tracking-tight text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 bg-[#16161A] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-cyan-400 border-cyan-400/30' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm font-jakarta font-normal text-neutral-300 leading-relaxed border-t border-white/10 mt-2">
                    <p className="pt-3 text-neutral-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

