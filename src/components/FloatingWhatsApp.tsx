import React from 'react';
import { trackWhatsAppClick } from '../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const handleOpenWhatsApp = () => {
    trackWhatsAppClick('floating_button');
    const textToSend = '¡Hola IVS WORKS! Deseo información para crear una página web para mi negocio.';
    const url = `https://wa.me/50762125245?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        id="floating-whatsapp-btn"
        onClick={handleOpenWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20 cursor-pointer"
        aria-label="Abrir WhatsApp de IVS WORKS"
      >
        {/* Glow pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 pointer-events-none" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#0A0A0B]"></span>
        </span>

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 fill-white transition-transform duration-200 group-hover:scale-105"
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.994 9.994 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.925-7.062A9.923 9.923 0 0 0 12.012 2zm5.836 14.199c-.244.688-1.42 1.309-1.956 1.393-.478.071-1.089.102-1.782-.12a15.86 15.86 0 0 1-1.579-.589c-2.784-1.203-4.6-4.004-4.739-4.189-.138-.184-1.134-1.507-1.134-2.874 0-1.368.718-2.04.972-2.317.254-.277.553-.346.738-.346.185 0 .369.009.531.018.17.009.398-.065.622.473.232.553.791 1.93.861 2.069.07.139.116.3.023.485-.092.185-.138.3-.277.462-.138.162-.291.36-.416.484-.139.138-.284.289-.122.566.162.277.72 1.185 1.544 1.92 1.059.945 1.952 1.238 2.229 1.376.277.138.439.115.601-.069.162-.185.692-.808.877-1.085.185-.277.369-.231.623-.138.254.092 1.615.762 1.892.9.277.139.462.208.531.323.07.116.07.67-.175 1.358z"/>
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 bg-[#111114] border border-white/15 text-white text-xs font-jakarta font-semibold tracking-wide whitespace-nowrap shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
          ¿Hablamos por WhatsApp?
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#111114] border-t border-r border-white/15 rotate-45"></span>
        </span>
      </button>
    </div>
  );
};


