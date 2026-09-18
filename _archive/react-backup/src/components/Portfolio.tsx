import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onQuoteProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onQuoteProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'landing' | 'corporate' | 'premium'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const filterButtons = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'corporate', label: 'Sitios Corporativos' },
    { id: 'premium', label: 'Sitios Premium' }
  ];

  return (
    <section id="portafolio" className="py-20 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold uppercase text-white tracking-tight leading-tight">
            Algunos Trabajos <span className="text-cyan-400">Recientes</span>
          </h2>
          <p className="text-xs sm:text-sm font-jakarta text-neutral-400 leading-relaxed">
            Ejemplos reales de interfaces funcionales, rápidas y orientadas a captar clientes y generar ventas. Haz clic en cualquier proyecto para ver el caso completo.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id as any)}
              className={`px-4 py-2 text-xs font-jakarta font-bold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === btn.id
                  ? 'bg-white text-black shadow-md'
                  : 'bg-[#111114] text-neutral-400 hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#111114] border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Media Image Banner - Click opens case study modal */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => setSelectedProject(project)}
                title="Click para ver el caso completo"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-70" />

                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-jakarta font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/10">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Overlay with Unified Action Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/65 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-jakarta font-bold uppercase tracking-wider transition-all shadow-xl flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver Caso</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg sm:text-xl font-outfit font-bold uppercase text-white tracking-tight group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-jakarta text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-jakarta font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Ver Caso</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onQuoteProject(project.title)}
                    className="px-3.5 py-1.5 bg-[#16161A] hover:bg-white text-neutral-300 hover:text-black border border-white/15 text-[11px] font-jakarta font-bold uppercase tracking-wider transition-colors"
                  >
                    Cotizar similar ➔
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#111114] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-outfit font-bold uppercase text-white tracking-tight">
              ¿Tienes un proyecto en mente para tu empresa?
            </h4>
            <p className="text-xs sm:text-sm font-jakarta text-neutral-400 max-w-2xl">
              Construimos sitios web con diseño limpio, trato directo y enfoque en hacer crecer tu negocio.
            </p>
          </div>

          <button
            onClick={() => onQuoteProject('Cotización Personalizada')}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-jakarta font-bold uppercase tracking-wider transition-colors shadow whitespace-nowrap"
          >
            Solicitar Cotización de Proyecto
          </button>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onQuoteSimilar={onQuoteProject}
        />
      )}
    </section>
  );
};
