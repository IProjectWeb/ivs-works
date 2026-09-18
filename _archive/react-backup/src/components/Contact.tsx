import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Phone, Clock, MapPin, Send, CheckCircle2, Copy, Sparkles, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PlanType, QuoteFormData } from '../types';
import { trackQuoteSubmit, trackWhatsAppClick } from '../utils/analytics';

interface ContactProps {
  selectedPlan: PlanType;
  customNotes?: string;
  onPlanChange: (plan: PlanType) => void;
}

export const Contact: React.FC<ContactProps> = ({
  selectedPlan,
  customNotes,
  onPlanChange
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    plan: selectedPlan || 'intermedio',
    businessType: '',
    budgetRange: '$400 – $700 USD',
    urgency: 'Esta o la próxima semana',
    features: [],
    message: customNotes || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        plan: selectedPlan,
        message: customNotes ? customNotes : prev.message
      }));
    }
  }, [selectedPlan, customNotes]);

  const planLabels: Record<PlanType, string> = {
    basico: 'Landing Page (Desde $200 USD)',
    intermedio: 'Sitio Corporativo (Desde $350 USD)',
    premium: 'Sitio Premium (Desde $550 USD)',
    mant_esencial: 'Mantenimiento Esencial ($25 USD / mes)',
    mant_estandar: 'Mantenimiento Estándar ($50 USD / mes)',
    mant_premium: 'Mantenimiento Premium ($100 USD / mes)',
    mant_basico: 'Mantenimiento Esencial ($25 USD / mes)',
    mant_pro: 'Mantenimiento Estándar ($50 USD / mes)',
    mini_menu: 'Menú Digital con QR (Desde $40 USD)',
    mini_catalogo: 'Catálogo Digital (Desde $40 USD)',
    mini_tarjeta: 'Tarjeta de Presentación Digital (Desde $30 USD)',
    mini_sitio: 'Mini Sitio / Solución Puntual',
    custom: 'Cotización / Alcance Personalizado'
  };

  const generateWhatsAppMessage = () => {
    const text = `¡Hola Isaac! Me gustaría cotizar un proyecto web:

*Nombre:* ${formData.name || 'No especificado'}
*Correo:* ${formData.email || 'No especificado'}
*Teléfono:* ${formData.phone || 'No especificado'}
*Giro de negocio:* ${formData.businessType || 'No especificado'}
*Plan de Interés:* ${planLabels[formData.plan]}
*Tiempo deseado:* ${formData.urgency}
*Detalles del proyecto:* 
${formData.message || 'Quiero más información sobre tus servicios de desarrollo web.'}

¿Podemos coordinar una propuesta?`;

    return encodeURIComponent(text);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Por favor ingresa tu nombre para personalizar tu cotización.');
      return;
    }

    trackQuoteSubmit(formData.plan, 'whatsapp');
    trackWhatsAppClick('contact_form');

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/50762125245?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Por favor completa tu nombre y correo electrónico.');
      return;
    }

    trackQuoteSubmit(formData.plan, 'email');

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleCopySummary = () => {
    const summaryText = `Cotización Solicitada - Isaac Vergara Web Dev:
Nombre: ${formData.name}
Correo: ${formData.email}
Teléfono: ${formData.phone}
Plan: ${planLabels[formData.plan]}
Giro: ${formData.businessType}
Mensaje: ${formData.message}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#0A0A0B] border-t border-white/10 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold uppercase tracking-tight text-white">
            ¿Listo para dar el siguiente paso?
          </h2>

          <p className="text-base sm:text-lg font-jakarta font-normal text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Hablemos sobre tu proyecto. Te contactaré con una propuesta clara y sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#111114] border border-white/10 p-6 sm:p-7 shadow-xl space-y-6">
              <h3 className="text-lg font-outfit font-bold uppercase tracking-tight text-white">
                Medios de contacto
              </h3>

              <div className="space-y-3">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/50762125245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 bg-[#0A0A0B] border border-white/10 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#16161A] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-jakarta font-bold text-neutral-400 uppercase tracking-wider">
                      WhatsApp Directo
                    </div>
                    <div className="text-base font-outfit font-bold text-white group-hover:text-cyan-400 transition-colors">
                      +507 6212-5245
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:isaacvergara1703@gmail.com"
                  className="group flex items-start gap-4 p-4 bg-[#0A0A0B] border border-white/10 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#16161A] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-jakarta font-bold text-neutral-400 uppercase tracking-wider">
                      Correo Electrónico
                    </div>
                    <div className="text-base font-outfit font-bold text-white group-hover:text-cyan-400 transition-colors truncate max-w-[220px] sm:max-w-none">
                      isaacvergara1703@gmail.com
                    </div>
                  </div>
                </a>

                {/* Schedule */}
                <div className="flex items-start gap-4 p-4 bg-[#0A0A0B] border border-white/10">
                  <div className="w-10 h-10 bg-[#16161A] border border-white/10 flex items-center justify-center text-neutral-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-jakarta font-bold text-neutral-400 uppercase tracking-wider">
                      Disponibilidad
                    </div>
                    <div className="text-sm font-outfit font-bold text-white">
                      Lunes a Sábado, 8:00 AM – 7:00 PM
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-[#0A0A0B] border border-white/10">
                  <div className="w-10 h-10 bg-[#16161A] border border-white/10 flex items-center justify-center text-neutral-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-jakarta font-bold text-neutral-400 uppercase tracking-wider">
                      Ubicación
                    </div>
                    <div className="text-sm font-outfit font-bold text-white">
                      Panamá (Atención remota global)
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111114] border border-white/10 p-6 sm:p-8 shadow-2xl">
              
              {!isSubmitted ? (
                <form className="space-y-5" onSubmit={handleSendWhatsApp}>
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-lg font-outfit font-bold uppercase tracking-tight text-white">
                      Formulario de Cotización
                    </h3>
                    <p className="text-xs sm:text-sm font-jakarta font-normal text-neutral-400 mt-1">
                      Completa los datos de tu proyecto y elige tu canal preferido de envío.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-jakarta font-bold uppercase text-neutral-300 mb-1.5">
                        Nombre completo <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 text-sm font-jakarta font-normal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-jakarta font-bold uppercase text-neutral-300 mb-1.5">
                        WhatsApp / Teléfono <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. +507 6123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 text-sm font-jakarta font-normal transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Business Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-jakarta font-bold uppercase text-neutral-300 mb-1.5">
                        Correo electrónico <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ej. carlos@tuempresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 text-sm font-jakarta font-normal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-jakarta font-bold uppercase text-neutral-300 mb-1.5">
                        Tipo o giro de negocio
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Clínica, Restaurante, Abogados..."
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 text-sm font-jakarta font-normal transition-colors"
                      />
                    </div>
                  </div>

                  {/* Plan of Interest Selector */}
                  <div>
                    <label className="block text-xs font-jakarta font-bold uppercase text-neutral-300 mb-1.5">
                      Selector del Plan de Interés <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => {
                        const newPlan = e.target.value as PlanType;
                        setFormData({ ...formData, plan: newPlan });
                        onPlanChange(newPlan);
                      }}
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm font-jakarta font-normal transition-colors"
                    >
                      <option value="basico">Landing Page (Desde $200 USD)</option>
                      <option value="intermedio">Sitio Corporativo (Desde $350 USD) [Recomendado]</option>
                      <option value="premium">Sitio Premium (Desde $550 USD)</option>
                      <option value="mant_esencial">Mantenimiento Esencial ($25 USD / mes)</option>
                      <option value="mant_estandar">Mantenimiento Estándar ($50 USD / mes) [Recomendado]</option>
                      <option value="mant_premium">Mantenimiento Premium ($100 USD / mes)</option>
                      <option value="mini_menu">Menú Digital con QR (Desde $40 USD)</option>
                      <option value="mini_catalogo">Catálogo Digital (Desde $40 USD)</option>
                      <option value="mini_tarjeta">Tarjeta de Presentación Digital (Desde $30 USD)</option>
                      <option value="mini_sitio">Mini Sitio / Solución Puntual</option>
                      <option value="custom">Proyecto / Alcance Personalizado</option>
                    </select>
                  </div>

                  {/* Urgency timeline */}
                  <div>
                    <label className="block text-xs font-jakarta font-bold uppercase text-neutral-300 mb-1.5">
                      ¿Para cuándo necesitas tu sitio web?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-jakarta">
                      {['Lo antes posible', 'En 1 a 2 semanas', 'En 1 mes / Evaluando'].map((urg) => (
                        <button
                          key={urg}
                          type="button"
                          onClick={() => setFormData({ ...formData, urgency: urg })}
                          className={`p-2.5 border text-center transition-all ${
                            formData.urgency === urg
                              ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 font-bold'
                              : 'bg-[#0A0A0B] border-white/10 text-neutral-400 hover:text-neutral-200'
                          }`}
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Project details */}
                  <div>
                    <label className="block text-xs font-jakarta font-bold uppercase text-neutral-300 mb-1.5">
                      Mensaje / Detalles adicionales del proyecto
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntame sobre tu objetivo, si ya tienes contenido o logotipo, páginas de referencia que te gusten..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 text-sm font-jakarta font-normal transition-colors resize-none"
                    />
                  </div>

                  {/* Action Submission Buttons */}
                  <div className="pt-3 space-y-2.5">
                    {/* WhatsApp Action */}
                    <button
                      type="button"
                      id="contact-submit-whatsapp-btn"
                      onClick={handleSendWhatsApp}
                      className="w-full py-3.5 px-6 bg-cyan-500 hover:bg-cyan-400 text-black font-jakarta font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                    >
                      <Phone className="w-4 h-4 fill-black" />
                      <span>Enviar cotización por WhatsApp</span>
                    </button>

                    {/* Email Action */}
                    <button
                      type="button"
                      id="contact-submit-email-btn"
                      onClick={handleSendEmail}
                      className="w-full py-3.5 px-6 bg-[#16161A] hover:bg-white/10 text-white font-jakarta font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-all"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Enviar por correo electrónico</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-14 h-14 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                      ¡Cotización enviada con éxito!
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                      Gracias, <strong className="text-white">{formData.name}</strong>. He recibido los detalles de tu proyecto para el <strong className="text-cyan-400">{planLabels[formData.plan]}</strong>.
                    </p>
                  </div>

                  <div className="p-4 bg-[#0A0A0B] border border-white/10 text-left max-w-md mx-auto text-xs text-neutral-300 space-y-1.5 font-mono">
                    <div className="font-bold text-white mb-1 uppercase">Resumen del registro:</div>
                    <div>• <strong>Correo:</strong> {formData.email}</div>
                    <div>• <strong>Teléfono:</strong> {formData.phone}</div>
                    <div>• <strong>Plazo estimado:</strong> {formData.urgency}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleSendWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 bg-cyan-500 text-black font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Reenviar a mi WhatsApp</span>
                    </button>

                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto px-5 py-3 bg-[#16161A] text-neutral-300 hover:text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 border border-white/10"
                    >
                      {copied ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? '¡Copiado!' : 'Copiar resumen'}</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-neutral-500 hover:text-neutral-300 uppercase tracking-wider underline"
                    >
                      Enviar otra cotización o modificar datos
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

