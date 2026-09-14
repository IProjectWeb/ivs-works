import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PortfolioProject } from '../types';
import { ImageLightbox } from './ImageLightbox';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onQuoteSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onQuoteSimilar
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIdx(0);
    setIsLightboxOpen(false);
  }, [project]);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [{ url: project.imageUrl, title: project.title, caption: project.tagline || project.description }];

  const currentItem = gallery[activeImageIdx] || gallery[0];

  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl bg-[#111114] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#16161A]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-jakarta font-bold px-2 py-0.5 bg-[#0A0A0B] text-cyan-400 border border-cyan-400/30 uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-outfit font-bold uppercase text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-8 space-y-8 bg-[#0A0A0B]">
            
            {/* Main Visual Image Banner / Gallery Viewer */}
            <div className="space-y-3">
              <div
                className="relative aspect-video w-full overflow-hidden border border-white/10 bg-[#16161A] group cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
                title="Click para ver en pantalla completa"
              >
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
                />

                {/* Floating Fullscreen Trigger Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="px-3 py-1.5 bg-black/80 hover:bg-cyan-400 hover:text-black text-white text-[11px] font-jakarta font-bold uppercase tracking-wider border border-white/20 transition-all flex items-center gap-1.5 shadow-lg backdrop-blur-xs"
                    aria-label="Abrir en pantalla completa"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Pantalla Completa</span>
                  </button>
                </div>
                
                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-cyan-500 hover:text-black text-white border border-white/15 transition-colors shadow-lg"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-cyan-500 hover:text-black text-white border border-white/15 transition-colors shadow-lg"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Bottom hint banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-jakarta font-semibold text-white truncate max-w-[80%]">
                    {currentItem.title}
                  </span>
                  <span className="text-[10px] font-jakarta uppercase tracking-wider text-cyan-400 shrink-0">
                    Click para pantalla completa ⤢
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {gallery.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {gallery.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`text-left p-1.5 border transition-all duration-200 flex flex-col gap-1 ${
                        activeImageIdx === idx
                          ? 'border-cyan-400 bg-cyan-950/30'
                          : 'border-white/10 bg-[#111114] opacity-70 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <div className="aspect-video w-full overflow-hidden bg-black">
                        <img
                          src={item.url}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[10px] font-jakarta font-bold uppercase tracking-wider text-neutral-300 truncate">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-4">
                <h4 className="text-xs font-jakarta font-bold uppercase tracking-wider text-cyan-400">
                  Detalles del Proyecto
                </h4>
                <p className="text-xs sm:text-sm font-jakarta text-neutral-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-jakarta font-bold uppercase tracking-wider text-cyan-400">
                  Características Implementadas
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm font-jakarta text-neutral-300">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-[#16161A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400 font-jakarta text-center sm:text-left">
              ¿Deseas una solución web personalizada similar para tu empresa?
            </div>

            <button
              onClick={() => {
                onQuoteSimilar(project.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs uppercase font-jakarta font-bold tracking-wider transition-colors shadow flex items-center justify-center gap-2"
            >
              <span>Cotizar un proyecto similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        images={gallery}
        initialIndex={activeImageIdx}
        projectTitle={project.title}
        onClose={() => setIsLightboxOpen(false)}
        onQuote={onQuoteSimilar}
      />
    </>
  );
};
