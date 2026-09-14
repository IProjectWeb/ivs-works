import React from 'react';
import { ShieldCheck, Check, Sparkles, ArrowRight, Wrench, RefreshCw, Lock, MessageSquare } from 'lucide-react';
import { MAINTENANCE_PLANS } from '../data/pricingData';
import { PlanType } from '../types';

interface MaintenanceProps {
  onSelectMaintenance: (planId: PlanType) => void;
}

export const Maintenance: React.FC<MaintenanceProps> = ({ onSelectMaintenance }) => {
  return (
    <section id="mantenimiento" className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold uppercase tracking-tight text-white">
            Tu web, siempre actualizada
          </h2>

          <p className="text-base sm:text-lg font-jakarta font-normal text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Un sitio web requiere mantenimiento preventivo, copias de seguridad y cambios puntuales para seguir funcionando sin problemas. Elige un plan mensual opcional para tu tranquilidad.
          </p>
        </div>

        {/* Maintenance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {MAINTENANCE_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-[#16161A] border-2 border-cyan-400 shadow-2xl'
                    : 'bg-[#111114] border border-white/10 hover:border-white/20'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 right-6 bg-cyan-500 text-black text-[9px] font-jakarta font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}
                {!isPopular && plan.badge && (
                  <div className="absolute -top-3 right-6 bg-[#1f2937] text-cyan-300 border border-cyan-500/30 text-[9px] font-jakarta font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-outfit font-bold uppercase tracking-tight text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-5 pb-5 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-outfit font-extrabold text-cyan-400">
                        {plan.price}
                      </span>
                      <span className="text-xs uppercase font-jakarta font-bold text-neutral-400">
                        USD / mes
                      </span>
                    </div>
                    <p className="text-[11px] font-jakarta font-normal text-neutral-400 uppercase tracking-wider mt-1">
                      {plan.deliveryTime}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-jakarta font-normal text-neutral-400 mb-6 leading-relaxed min-h-[48px]">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-jakarta font-bold text-neutral-400 uppercase tracking-wider">
                      Qué incluye:
                    </div>
                    {plan.features.map((feature, idx) => {
                      const colonIdx = feature.indexOf(': ');
                      const category = colonIdx !== -1 ? feature.slice(0, colonIdx) : null;
                      const detail = colonIdx !== -1 ? feature.slice(colonIdx + 2) : feature;
                      const isNotIncluded = detail.toLowerCase().includes('no incluido');

                      return (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-jakarta font-normal text-neutral-300">
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${isNotIncluded ? 'bg-neutral-600' : 'bg-cyan-400'}`} />
                          <span className="leading-snug">
                            {category ? (
                              <>
                                <span className="font-bold text-white tracking-tight">{category}:</span>{' '}
                                <span className={isNotIncluded ? 'text-neutral-500 italic' : 'text-neutral-300'}>{detail}</span>
                              </>
                            ) : (
                              detail
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  id={`maintenance-btn-${plan.id}`}
                  onClick={() => onSelectMaintenance(plan.id)}
                  className={`w-full py-3 px-4 font-jakarta font-bold text-xs uppercase tracking-wider transition-all mt-auto ${
                    isPopular
                      ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                      : 'border border-white/20 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectMaintenance('mant_estandar')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>¿Tienes dudas sobre los planes de mantenimiento? Escríbeme y te asesoro</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

