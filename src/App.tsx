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
        {/* 1. Hero Section */}
        <Hero
          onQuoteClick={() => scrollToSection('contacto')}
          onPortfolioClick={() => scrollToSection('portafolio')}
        />

        {/* 2. About Me / Value Proposition */}
        <About onQuoteClick={() => scrollToSection('contacto')} />

        {/* 3. Pricing & Plans */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 4. Maintenance & Support */}
        <Maintenance onSelectMaintenance={handleSelectPlan} />

        {/* 4.5 Quick Services / Mini Sites */}
        <QuickServices onSelectService={handleSelectPlan} />

        {/* 5. Portfolio / Recent Works */}
        <Portfolio onQuoteProject={handleQuoteProject} />

        {/* 6. Work Process Workflow */}
        <Process />

        {/* 7. Frequently Asked Questions */}
        <FAQ />

        {/* 8. Contact & Quotation Form */}
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
