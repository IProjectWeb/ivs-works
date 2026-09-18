import React from 'react';

interface HeroProps {
  onQuoteClick: () => void;
  onPortfolioClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onPortfolioClick }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 border-b border-white/10 overflow-hidden">
      {/* Background ambient subtle cyan glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Sleek Cyan Top Indicator */}
        <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8"></div>

        {/* Main Headline with Sleek Interface Stroke */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-black uppercase tracking-tight text-white leading-[0.95] max-w-4xl mx-auto">
          Tu negocio necesita una{' '}
          <span className="text-cyan-400 inline-block">
            web que venda
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto font-jakarta font-normal leading-relaxed">
          Diseño y desarrollo sitios web modernos, rápidos y optimizados para convertir visitantes en clientes reales.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
          <button
            id="hero-quote-cta-btn"
            onClick={onQuoteClick}
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-jakarta font-bold uppercase text-xs sm:text-sm tracking-wider transition-all shadow-md active:translate-y-0.5"
          >
            <span>Cotizar mi proyecto</span>
          </button>

          <button
            id="hero-portfolio-cta-btn"
            onClick={onPortfolioClick}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-jakarta font-bold uppercase text-xs sm:text-sm tracking-wider transition-colors"
          >
            <span>Ver trabajos</span>
          </button>
        </div>
      </div>
    </section>
  );
};


