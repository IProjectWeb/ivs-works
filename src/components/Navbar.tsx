import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/images/ivs_works_logo_transparent.png';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Quiénes somos?', href: '#sobre-mi' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Precios', href: '#planes' },
    { name: 'Mantenimiento', href: '#mantenimiento' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
            : 'bg-[#0A0A0B]/80 backdrop-blur-sm border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex items-center gap-3.5 text-left focus:outline-none py-1"
          >
            <img
              src={logoImg}
              alt="IVS WORKS Logo"
              referrerPolicy="no-referrer"
              className="h-12 sm:h-14 w-auto max-w-[170px] sm:max-w-[210px] object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:flex flex-col justify-center border-l border-white/15 pl-3">
              <span className="font-jakarta font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-cyan-400 leading-none">
                DESARROLLO WEB
              </span>
              <span className="font-jakarta font-medium text-[9px] uppercase tracking-[0.14em] text-neutral-400 mt-1 leading-none">
                PANAMÁ
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Full Screen) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-jakarta font-semibold text-xs uppercase tracking-wider text-neutral-400 hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Desktop Quote CTA */}
            <button
              id="nav-quote-btn"
              onClick={onQuoteClick}
              className="hidden lg:inline-flex font-jakarta font-bold bg-white text-black px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all shadow-sm active:translate-y-0.5"
            >
              <span>Cotizar</span>
            </button>

            {/* Hamburger Button (Shown on mobile / smaller screens) */}
            <button
              id="nav-hamburger-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
              className="lg:hidden p-2.5 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 text-white transition-all flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Simplified Hamburger Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm bg-[#0E0E11] border-l border-white/15 h-full flex flex-col justify-between p-6 sm:p-8 z-10 shadow-2xl">
            {/* Top Close Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-outfit font-bold uppercase tracking-tight text-white text-sm">
                Menú
              </span>
              <button
                id="drawer-close-btn"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-outfit font-bold text-xl sm:text-2xl text-neutral-300 hover:text-cyan-400 uppercase tracking-tight transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onQuoteClick();
                }}
                className="text-left font-outfit font-bold text-xl sm:text-2xl text-cyan-400 hover:text-white uppercase tracking-tight transition-colors py-1"
              >
                Cotizar
              </button>
            </nav>

            {/* Bottom Button */}
            <div className="pt-6 border-t border-white/10">
              <button
                id="drawer-quote-action-btn"
                onClick={() => {
                  setIsMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-3 px-6 bg-cyan-500 hover:bg-cyan-400 text-black font-jakarta font-bold text-xs uppercase tracking-wider transition-all"
              >
                Cotizar ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

