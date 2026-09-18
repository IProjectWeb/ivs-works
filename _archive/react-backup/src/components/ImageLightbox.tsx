import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ArrowRight } from 'lucide-react';

export interface LightboxImage {
  url: string;
  title: string;
  caption?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  initialIndex?: number;
  projectTitle?: string;
  onClose: () => void;
  onQuote?: (title: string) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  images,
  initialIndex = 0,
  projectTitle,
  onClose,
  onQuote
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isBrowserFullscreen, setIsBrowserFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const toggleBrowserFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsBrowserFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsBrowserFullscreen(false);
      }
    } catch {
      // Fullscreen API may be restricted in some iframes; fail silently
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen en pantalla completa"
    >
      {/* Top Bar */}
      <header className="relative z-30 px-4 sm:px-6 py-3.5 bg-black/80 border-b border-white/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="px-2 py-0.5 text-[10px] sm:text-xs font-jakarta font-bold uppercase tracking-wider bg-cyan-400 text-black shrink-0">
            {currentIndex + 1} / {images.length}
          </span>
          <div className="min-w-0">
            {projectTitle && (
              <p className="text-[11px] font-jakarta font-semibold uppercase text-cyan-400/90 tracking-wider truncate">
                {projectTitle}
              </p>
            )}
            <h3 className="text-sm sm:text-base font-outfit font-bold uppercase text-white tracking-tight truncate">
              {currentImage.title}
            </h3>
          </div>
        </div>

        {/* Top Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Zoom Toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed((prev) => !prev)}
            className={`p-2 transition-colors border ${
              isZoomed
                ? 'bg-cyan-400 text-black border-cyan-400'
                : 'text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border-white/10'
            }`}
            title={isZoomed ? 'Restaurar tamaño' : 'Zoom ampliado'}
            aria-label="Alternar zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Fullscreen API toggle */}
          <button
            type="button"
            onClick={toggleBrowserFullscreen}
            className="p-2 text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors hidden sm:inline-flex"
            title={isBrowserFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa nativa'}
            aria-label="Pantalla completa"
          >
            {isBrowserFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white bg-red-600/80 hover:bg-red-600 border border-red-500/50 transition-colors flex items-center gap-1.5 px-3"
            aria-label="Cerrar visor de pantalla completa"
          >
            <X className="w-4 h-4" />
            <span className="text-xs font-jakarta font-bold uppercase tracking-wider hidden sm:inline">
              Cerrar (Esc)
            </span>
          </button>
        </div>
      </header>

      {/* Main Stage / Image Canvas */}
      <main className="relative flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Navigation - Previous */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 bg-black/75 hover:bg-cyan-400 text-white hover:text-black border border-white/15 transition-all duration-200 shadow-2xl focus:outline-none"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Image Frame */}
        <div
          className={`relative max-w-full max-h-full flex items-center justify-center transition-all duration-300 ${
            isZoomed ? 'cursor-zoom-out overflow-auto' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed((prev) => !prev)}
        >
          <img
            src={currentImage.url}
            alt={currentImage.title}
            referrerPolicy="no-referrer"
            className={`max-w-[96vw] max-h-[70vh] sm:max-h-[75vh] md:max-h-[78vh] object-contain transition-transform duration-300 drop-shadow-2xl border border-white/10 ${
              isZoomed ? 'scale-125' : 'scale-100'
            }`}
          />
        </div>

        {/* Navigation - Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 bg-black/75 hover:bg-cyan-400 text-white hover:text-black border border-white/15 transition-all duration-200 shadow-2xl focus:outline-none"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </main>

      {/* Bottom Information & Thumbnails Bar */}
      <footer className="relative z-30 px-4 sm:px-6 py-3 bg-black/85 border-t border-white/10 space-y-3">
        {/* Caption & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 max-w-7xl mx-auto">
          <div className="space-y-0.5 min-w-0 flex-1">
            <h4 className="text-xs sm:text-sm font-outfit font-bold uppercase text-white tracking-tight truncate">
              {currentImage.title}
            </h4>
            {currentImage.caption && (
              <p className="text-[11px] sm:text-xs font-jakarta text-neutral-300 leading-relaxed line-clamp-2 max-w-4xl">
                {currentImage.caption}
              </p>
            )}
          </div>

          {onQuote && projectTitle && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onQuote(projectTitle);
              }}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-[11px] sm:text-xs font-jakarta font-bold uppercase tracking-wider transition-colors shadow flex items-center gap-1.5 shrink-0"
            >
              <span>Cotizar este proyecto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Thumbnails Row */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-4xl mx-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsZoomed(false);
                  setCurrentIndex(idx);
                }}
                className={`relative w-14 sm:w-20 aspect-video shrink-0 border overflow-hidden transition-all duration-200 ${
                  currentIndex === idx
                    ? 'border-cyan-400 ring-1 ring-cyan-400 opacity-100 scale-105'
                    : 'border-white/15 opacity-50 hover:opacity-100 hover:border-white/40'
                }`}
                title={img.title}
                aria-label={`Ver foto ${idx + 1}: ${img.title}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </footer>
    </div>
  );
};
