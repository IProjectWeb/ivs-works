import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico & Planificación',
      desc: 'Nos ponemos en contacto para entender tu negocio, definir objetivos de conversión y elegir la estructura ideal para tu web.'
    },
    {
      step: '02',
      title: 'Diseño Visual & Estructura',
      desc: 'Diseño la propuesta visual adaptada a tu identidad de marca, optimizando la jerarquía para guiar a tus visitantes a comprar o contactar.'
    },
    {
      step: '03',
      title: 'Programación & Rendimiento',
      desc: 'Construyo tu web con código limpio y moderno. Pruebo compatibilidad en múltiples smartphones, velocidad y formularios en vivo.'
    },
    {
      step: '04',
      title: 'Lanzamiento & Entrega Total',
      desc: 'Publicamos tu sitio en tu dominio propio. Te entrego todos los accesos, código y asesoría para que seas 100% el dueño de tu web.'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-[#0A0A0B] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            ¿Cómo trabajaremos juntos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            return (
              <div
                key={item.step}
                className="relative bg-[#111114] border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xl sm:text-2xl font-black font-mono text-cyan-400 shrink-0">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold uppercase text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

