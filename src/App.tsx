import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Maintenance } from './components/Maintenance';
import { QuickServices } from './components/QuickServices';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PlanType } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('intermedio');
  const [customNotes, setCustomNotes] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PlanType, notes?: string) => {
    setSelectedPlan(plan);
    if (notes) {
      setCustomNotes(notes);
    }
    scrollToSection('contacto');
  };

  const handleQuoteProject = (projectTitle: string) => {
    setSelectedPlan('custom');
    setCustomNotes(`Hola Isaac, vi tu portafolio y me interesa un desarrollo similar al proyecto: "${projectTitle}".`);
    scrollToSection('contacto');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E4E4E7] selection:bg-cyan-400 selection:text-black flex flex-col font-sans antialiased">
      {/* Navigation */}
      <Navbar onQuoteClick={() => scrollToSection('contacto')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section (gancho) */}
        <Hero
          onQuoteClick={() => scrollToSection('contacto')}
          onPortfolioClick={() => scrollToSection('portafolio')}
        />

        {/* 2. Quiénes somos (confianza) */}
        <About onQuoteClick={() => scrollToSection('contacto')} />

        {/* 3. Proceso (reduce incertidumbre) */}
        <Process />

        {/* 4. Portafolio (prueba) */}
        <Portfolio onQuoteProject={handleQuoteProject} />

        {/* 5. Precios & Planes (ahora sí, informado) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 6. Mini Sitios / Soluciones Puntuales (alternativa) */}
        <QuickServices onSelectService={handleSelectPlan} />

        {/* 7. Mantenimiento & Soporte (qué sigue después) */}
        <Maintenance onSelectMaintenance={handleSelectPlan} />

        {/* 8. Frequently Asked Questions (últimas dudas) */}
        <FAQ />

        {/* 9. Contact & Quotation Form (acción) */}
        <Contact
          selectedPlan={selectedPlan}
          customNotes={customNotes}
          onPlanChange={(plan) => setSelectedPlan(plan)}
        />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onQuoteClick={() => scrollToSection('contacto')} />
    </div>
  );
}
