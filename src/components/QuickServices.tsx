import React from 'react';
import { ArrowRight } from 'lucide-react';
import { QUICK_SERVICES } from '../data/pricingData';
import { PlanType } from '../types';

interface QuickServicesProps {
  onSelectService: (serviceId: PlanType, customNotes?: string) => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicios-puntuales" className="py-20 lg:py-24 relative bg-[#09090B] border-b border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[360px] h-[360px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold uppercase tracking-tight text-white">
            ¿Solo Necesitas Algo Puntual?
          </h2>

          <p className="text-base sm:text-lg font-jakarta font-normal text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales simples y rápidas para tu negocio.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {QUICK_SERVICES.map((item) => {
            return (
              <div
                key={item.id}
                id={`card-${item.id}`}
                className="group relative flex flex-col justify-between p-6 sm:p-7 bg-[#111114] border border-white/10 hover:border-cyan-400/50 hover:bg-[#151519] transition-all duration-200"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-outfit font-bold uppercase tracking-tight text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-jakarta font-normal text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Price + CTA */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  {/* Price */}
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-2xl sm:text-3xl font-outfit font-extrabold text-cyan-400">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Action button */}
                  <button
                    type="button"
                    onClick={() =>
                      onSelectService(
                        item.id,
                        `Hola Isaac, me interesa el servicio puntual: "${item.title}" (${item.price}).`
                      )
                    }
                    className="w-full py-2.5 px-3 font-jakarta font-bold text-xs uppercase tracking-wider transition-all border border-white/20 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 flex items-center justify-center gap-1.5 group-hover:border-cyan-400/40"
                  >
                    <span>Pedir este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Note Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#111114] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <p className="text-sm sm:text-base font-jakarta font-normal text-neutral-300 leading-relaxed">
              ¿Tu negocio crece y necesitas algo más completo? Estos proyectos pueden ser el punto de partida perfecto para tu página web completa más adelante.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onSelectService(
                'mini_sitio',
                'Hola Isaac, me interesa un mini sitio o solución digital puntual para mi negocio.'
              )
            }
            className="w-full md:w-auto px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-jakarta font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-cyan-500/10 active:translate-y-0.5 cursor-pointer"
          >
            <span>Quiero mi Mini Sitio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
