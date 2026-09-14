import React from 'react';
import { UserCheck, Zap, Target, ShieldCheck, Sparkles } from 'lucide-react';
import { PILLARS_DATA } from '../data/pricingData';

interface AboutProps {
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onQuoteClick: _onQuoteClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10 relative">
      {/* Subtle ambient cyan glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold uppercase tracking-tight text-white">
            ¿Por qué elegir IVS WORKS?
          </h2>

          <div className="space-y-3 text-neutral-400 text-base sm:text-lg leading-relaxed pt-2">
            <p className="font-jakarta font-medium text-neutral-200">
              En <strong className="text-cyan-400 font-bold">IVS WORKS</strong> desarrollo soluciones web y digitales a medida, concebidas para generar tracción, credibilidad y resultados comerciales tangibles.
            </p>
            <p className="font-jakarta font-normal text-neutral-400 text-sm sm:text-base">
              Desarrollo técnico dedicado y trato 100% directo, para que tu proyecto avance rápido y sin fricciones.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="group relative bg-[#111114] border border-white/10 hover:border-cyan-400/40 p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5">
                  <div className="w-10 h-10 bg-[#16161A] border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors">
                    {getIcon(pillar.icon)}
                  </div>
                </div>

                <h3 className="text-base font-outfit font-bold text-white uppercase tracking-tight mb-2.5 group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm font-jakarta font-normal text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


