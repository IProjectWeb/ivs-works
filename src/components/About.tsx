import React from 'react';
import { Sparkles, Target, Zap, MapPin } from 'lucide-react';

interface AboutProps {
  onQuoteClick?: () => void;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10 relative">
      {/* Subtle ambient cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Glass Card */}
        <div className="relative bg-[#111114] border border-white/10 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
          {/* Top cyan accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 font-jakarta text-xs font-bold uppercase tracking-[0.16em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sobre Nosotros</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold uppercase tracking-tight text-white mb-8">
            ¿Quiénes Somos?
          </h2>

          {/* Content Text */}
          <div className="max-w-3xl mx-auto space-y-5 text-left sm:text-center mb-10">
            <p className="font-jakarta text-lg sm:text-xl font-semibold text-neutral-100 leading-relaxed">
              En <strong className="text-cyan-400 font-extrabold">IVS WORKS</strong> creemos que todo negocio, sin importar su tamaño, merece una presencia digital real.
            </p>
            <p className="font-jakarta text-base sm:text-lg font-normal text-neutral-300 leading-relaxed">
              Nacimos para ofrecer desarrollo web de calidad, sin la complejidad ni el costo de una agencia grande, construyendo cada sitio con atención directa y pensado para generar resultados, no solo para verse bien.
            </p>
            <p className="font-jakarta text-sm sm:text-base font-normal text-neutral-400 leading-relaxed">
              Trabajamos con pequeños negocios y profesionales en Panamá que quieren conseguir más clientes, entendiendo que cada uno tiene necesidades y presupuesto distintos.
            </p>
          </div>

          {/* 3 Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-[#16161A] border border-white/10 p-4 flex items-center gap-3.5 hover:border-cyan-400/40 transition-colors">
              <div className="w-9 h-9 bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                <Target className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <strong className="block text-xs font-outfit font-bold uppercase text-white tracking-wide">
                  Presencia Digital Real
                </strong>
                <span className="block text-[11px] font-jakarta text-neutral-400">
                  Para todo tipo de negocio
                </span>
              </div>
            </div>

            <div className="bg-[#16161A] border border-white/10 p-4 flex items-center gap-3.5 hover:border-cyan-400/40 transition-colors">
              <div className="w-9 h-9 bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <strong className="block text-xs font-outfit font-bold uppercase text-white tracking-wide">
                  Sin Complejidad
                </strong>
                <span className="block text-[11px] font-jakarta text-neutral-400">
                  Directo y sin costos inflados
                </span>
              </div>
            </div>

            <div className="bg-[#16161A] border border-white/10 p-4 flex items-center gap-3.5 hover:border-cyan-400/40 transition-colors">
              <div className="w-9 h-9 bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <strong className="block text-xs font-outfit font-bold uppercase text-white tracking-wide">
                  Hecho en Panamá
                </strong>
                <span className="block text-[11px] font-jakarta text-neutral-400">
                  Para captar más clientes
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



