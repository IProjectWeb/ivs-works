import React from 'react';
import { WEB_PLANS } from '../data/pricingData';
import { PlanType } from '../types';

interface PricingProps {
  onSelectPlan: (planId: PlanType, customNotes?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="planes" className="py-20 lg:py-28 relative bg-[#0A0A0B] border-b border-white/10">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold uppercase tracking-tight text-white">
            Elige el plan ideal para tu negocio
          </h2>

          <p className="text-base sm:text-lg font-jakarta font-normal text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Sin costos ocultos ni mensualidades forzosas en el desarrollo. Tu sitio te pertenece al 100%.
          </p>
        </div>

        {/* 3 Main Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {WEB_PLANS.map((plan, idx) => {
            const isPopular = plan.popular;
            const planNumber = `0${idx + 1}`;

            return (
              <div
                key={plan.id}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 transition-all duration-200 ${
                  isPopular
                    ? 'bg-[#16161A] border-2 border-cyan-400 shadow-2xl lg:-translate-y-2'
                    : 'bg-[#111114] border border-white/10 hover:bg-[#16161A] hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[9px] font-jakarta font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                    {plan.badge || 'Recomendado'}
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-outfit font-bold uppercase tracking-tight text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-outfit font-black text-cyan-400 tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-[11px] font-jakarta font-bold text-neutral-400 uppercase tracking-wider mt-1">
                      USD / Pago Único
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-jakarta font-normal text-neutral-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-jakarta font-bold text-neutral-400 uppercase tracking-wider">
                      Características incluidas:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-jakarta font-normal text-neutral-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    id={`pricing-btn-${plan.id}`}
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 font-jakarta font-bold text-xs uppercase tracking-wider transition-all ${
                      isPopular
                        ? 'bg-white text-black hover:bg-cyan-400 hover:text-black'
                        : 'border border-white/20 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

