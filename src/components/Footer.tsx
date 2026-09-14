import React from 'react';
import { ArrowUp } from 'lucide-react';
import logoImg from '../assets/images/ivs_works_logo_transparent.png';

interface FooterProps {
  onQuoteClick?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios & Planes', href: '#planes' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/10 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={logoImg}
                alt="IVS WORKS Logo"
                referrerPolicy="no-referrer"
                className="h-14 sm:h-16 w-auto max-w-[220px] object-contain"
              />
              <div className="flex flex-col justify-center border-l border-white/15 pl-3">
                <span className="font-jakarta font-bold text-xs uppercase tracking-[0.18em] text-cyan-400 leading-none">
                  DESARROLLO WEB
                </span>
                <span className="font-jakarta font-medium text-[10px] uppercase tracking-[0.14em] text-neutral-400 mt-1 leading-none">
                  PANAMÁ
                </span>
              </div>
            </div>

            <p className="text-neutral-400 font-jakarta font-normal text-xs sm:text-sm leading-relaxed max-w-md">
              Diseño y desarrollo de sitios web rápidos, modernos y a la medida para negocios y profesionales en Panamá.
            </p>

            <div className="pt-2 text-xs font-jakarta font-medium text-neutral-300">
              Panamá
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-outfit font-bold uppercase tracking-wider text-white">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-neutral-400 hover:text-cyan-400 transition-colors text-xs font-jakarta font-normal uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-4 lg:text-right">
            <h4 className="text-xs font-outfit font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs font-jakarta font-normal text-neutral-400">
              <li>
                <a
                  href="https://wa.me/50762125245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-block"
                >
                  WhatsApp: +507 6212-5245
                </a>
              </li>
              <li>
                <a
                  href="mailto:isaacvergara1703@gmail.com"
                  className="hover:text-cyan-400 transition-colors inline-block"
                >
                  isaacvergara1703@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-jakarta font-normal">
          <div>
            © 2026 IVS WORKS. Panamá.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors uppercase tracking-wider font-jakarta font-medium"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


