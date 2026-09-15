import React from 'react';

interface AboutProps {
  onQuoteClick?: () => void;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

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

        {/* 3 Core Values (Text only) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-[#111114] border border-white/10 p-5 hover:border-cyan-400/40 transition-colors">
            <strong className="block text-xs sm:text-sm font-outfit font-bold uppercase text-white tracking-wide mb-1.5">
              PRESENCIA DIGITAL REAL
            </strong>
            <span className="block text-xs font-jakarta text-neutral-400 leading-relaxed">
              Para todo tipo y tamaño de negocio
            </span>
          </div>

          <div className="bg-[#111114] border border-white/10 p-5 hover:border-cyan-400/40 transition-colors">
            <strong className="block text-xs sm:text-sm font-outfit font-bold uppercase text-white tracking-wide mb-1.5">
              CALIDAD SIN COMPLEJIDAD
            </strong>
            <span className="block text-xs font-jakarta text-neutral-400 leading-relaxed">
              Directo y sin costos de agencia grande
            </span>
          </div>

          <div className="bg-[#111114] border border-white/10 p-5 hover:border-cyan-400/40 transition-colors">
            <strong className="block text-xs sm:text-sm font-outfit font-bold uppercase text-white tracking-wide mb-1.5">
              HECHO EN PANAMÁ
            </strong>
            <span className="block text-xs font-jakarta text-neutral-400 leading-relaxed">
              Pensado para captar más clientes
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};



