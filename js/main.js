/**
 * IVS WORKS — Vanilla JavaScript Application Logic
 * Zero external library dependencies. Fast, clean, robust.
 */

// Portfolio Projects Dataset
const PORTFOLIO_DATA = [
  {
    id: 'vv-consulting-group',
    title: 'VV Consulting Group',
    category: 'landing',
    categoryLabel: 'Landing Page Corporativa',
    clientType: 'Asesoría Financiera & Auditoría en Panamá',
    tagline: 'Estrategia, rigor técnico y captación de clientes corporativos por WhatsApp',
    description: 'Landing page corporativa para consultoría financiera, auditoría, contabilidad y asesoría tributaria en Panamá. Diseñada con secciones de alto impacto (Hero con propuesta de valor, ¿Quiénes somos?, catálogo de soluciones con cotizador y módulo de contacto directo con formulario y botón de WhatsApp).',
    tags: ['Landing Page', 'Consultoría Financiera', 'Cotizador de Servicios', 'Formulario Segmentado', 'WhatsApp Lead Gen'],
    imageUrl: './assets/images/vv-consulting-hero.png',
    gallery: [
      {
        url: './assets/images/vv-consulting-hero.png',
        title: 'Hero & Propuesta de Valor',
        caption: 'Encabezado corporativo con propuesta de valor "Estrategia que define tu éxito", métricas de experiencia y llamada a la acción hacia WhatsApp.'
      },
      {
        url: './assets/images/vv-consulting-nosotros.png',
        title: 'Sobre Nosotros & Firma',
        caption: 'Módulo "¿Quiénes somos?" y "Confianza y Experiencia", destacando más de una década asesorando empresas y equipo de contadores CPA.'
      },
      {
        url: './assets/images/vv-consulting-servicios.png',
        title: 'Soluciones Integrales & Cotizador',
        caption: 'Catálogo de servicios de Auditoría, Contabilidad y Asesoría Financiera con checklist detallado y botón de solicitar cotización.'
      },
      {
        url: './assets/images/vv-consulting-contacto.png',
        title: 'Contacto & Formulario de Consulta',
        caption: 'Panel con datos de contacto en Ciudad de Panamá, horarios y formulario segmentado por servicio de interés para captar leads calificados.'
      }
    ],
    planId: 'basico',
    features: [
      'Estructura de landing page corporativa de alta confianza optimizada para empresas y PYMES',
      'Hero section con propuesta de valor clara y acceso directo a WhatsApp',
      'Módulo "Nuestra Firma" para proyectar autoridad con equipo de contadores públicos autorizados (CPA)',
      'Catálogo de soluciones (Auditoría, Contabilidad, Asesoría) con botón de solicitud de cotización',
      'Formulario de contacto con selector de servicio de interés y botón de envío directo',
      'Canal flotante de WhatsApp activo para atención inmediata en Panamá'
    ]
  },
  {
    id: 'white-cloud-essentials',
    title: 'White Cloud Essentials // Catálogo & Conversión',
    category: 'landing',
    categoryLabel: 'Landing Page de Alta Conversión',
    clientType: 'Moda Urbana Minimalista & Accesorios',
    tagline: 'Estilo atemporal, catálogo dinámico interactivo y pedidos directos vía WhatsApp & Yappy',
    description: 'Landing page de alta conversión y catálogo dinámico con diseño minimalista blanco y negro para gorras estructuradas y accesorios. Diseñada con secciones estratégicas orientadas a venta directa: hero de alto impacto con propuesta de valor, selector instantáneo por categoría (Dad Hat, Snapback, Trucker, Beanie), buscador en tiempo real, sección editorial de filosofía y formulario de checkout rápido por WhatsApp.',
    tags: ['Landing Page', 'Alta Conversión', 'Catálogo Dinámico', 'Checkout WhatsApp', 'Filtro en Vivo', 'Yappy Panamá'],
    imageUrl: './assets/images/wc-hero.png',
    gallery: [
      {
        url: './assets/images/wc-hero.png',
        title: 'Portada & Colección Esencial',
        caption: 'Hero minimalista con estética limpia, tipografía editorial y botón de llamada a la acción hacia la colección.'
      },
      {
        url: './assets/images/wc-catalog.png',
        title: 'Catálogo Principal Filtrable',
        caption: 'Grilla de productos con filtros rápidos por categoría (Dad Hat, Snapback, Trucker, Beanie), buscador y botón de compra directa.'
      },
      {
        url: './assets/images/wc-philosophy.png',
        title: 'Sección Filosofía & Calidad',
        caption: 'Puntos clave de valor: Forma Atemporal, Calidad de Selección y Atención Directa con entregas rápidas y pagos por Yappy.'
      },
      {
        url: './assets/images/wc-contact.png',
        title: 'Contacto & Pedidos Personalizados',
        caption: 'Módulo de contacto con canal directo a WhatsApp (+507 6289-4977), ubicación en Ciudad de Panamá y formulario rápido.'
      }
    ],
    planId: 'basico',
    features: [
      'Estructura de landing page de alta conversión con llamado a la acción enfocado a ventas',
      'Catálogo dinámico interactivo con filtrado instantáneo por categoría (Dad Hat, Snapback, Trucker, Beanie)',
      'Buscador en tiempo real por modelo o estilo sin recargar la página',
      'Carrito de compras integrado con checkout directo hacia WhatsApp sin comisiones',
      'Compatibilidad con pagos rápidos vía Yappy y transferencias locales en Panamá',
      'Sección editorial de filosofía de marca y estética minimalista premium',
      'Optimización de carga ultrarrápida con diseño adaptativo mobile-first'
    ]
  },
  {
    id: 'elena-morales-nutricion',
    title: 'Lic. Elena Morales Varela',
    category: 'corporate',
    categoryLabel: 'Sitio Corporativo Multi-Página',
    clientType: 'Nutrición Clínica, Rendimiento Deportivo & Salud Metabólica',
    tagline: 'Presencia médica digital con evidencia científica, catálogo de consultas y calculadora interactiva',
    description: 'Sitio web corporativo multi-página desarrollado para la Lic. Elena Morales Varela, especialista en nutrición clínica y deportiva (Col. Nº 4812, Certificación ISAK Nivel 2). Cuenta con arquitectura multi-página completa: Inicio institucional con propuesta de valor médica, sección Nosotros con credenciales y trayectoria, Catálogo de Consultas y Servicios Clínicos, Módulo de Contacto & Agendamiento con integración a WhatsApp y ubicación en Providencia, y una Calculadora Nutricional interactiva en tiempo real (fórmula Mifflin-St Jeor).',
    tags: ['Sitio Corporativo', 'Multi-Página', 'Nutrición & Salud', 'Calculadora Metabólica', 'Agendamiento WhatsApp', 'ISAK 2'],
    imageUrl: './assets/images/SitioCorporativo1.png',
    planId: 'intermedio',
    gallery: [
      {
        url: './assets/images/SitioCorporativo1.png',
        title: 'Inicio & Propuesta de Valor Médica',
        caption: 'Hero institucional con propuesta de valor basada en evidencia médica, acreditaciones ISAK 2, resumen de especialidades y métricas de impacto (+1.400 pacientes y 9 años de práctica).'
      },
      {
        url: './assets/images/SitioCorporativo2.png',
        title: 'Nosotros & Credenciales Profesionales',
        caption: 'Página dedicada a formación académica, filosofía clínica sin dietas punitivas, certificaciones universitarias y trayectoria profesional.'
      },
      {
        url: './assets/images/SitioCorporativo3.png',
        title: 'Servicios & Especialidades Clínicas',
        caption: 'Catálogo de consultas (Nutrición Clínica, Rendimiento Físico, Salud Digestiva y Videoconsulta Online) con duración, precios y llamada directa a agendar.'
      },
      {
        url: './assets/images/SitioCorporativo4.png',
        title: 'Contacto & Agendamiento de Pacientes',
        caption: 'Módulo integral de consulta con formulario de agendamiento, datos del consultorio en Providencia, videoconsulta online y canal directo de WhatsApp.'
      },
      {
        url: './assets/images/SitioCorporativo5.png',
        title: 'Calculadora de Requerimientos Energéticos',
        caption: 'Herramienta interactiva para pacientes que calcula la Tasa Metabólica Basal (BMR) y gasto calórico diario según fórmula Mifflin-St Jeor con desglose de macronutrientes.'
      }
    ],
    features: [
      'Arquitectura multi-página estructurada (Inicio, Nosotros, Servicios, Calculadora, Contacto)',
      'Hero corporativo con propuesta de valor médica, acreditaciones sanitarias y prueba social',
      'Página de credenciales y trayectoria con enfoque en evidencia científica sin dietas punitivas',
      'Catálogo de servicios y especialidades clínicas con desglose de modalidades presencial y online',
      'Calculadora metabólica interactiva en tiempo real (fórmula Mifflin-St Jeor) como imán de leads',
      'Sistema de agendamiento directo por formulario y botón flotante de WhatsApp activo'
    ]
  },
  {
    id: 'lumen-studio-fotografia',
    title: 'LUMEN Studio // Boutique Fotográfica',
    category: 'premium',
    categoryLabel: 'Sitio Web Premium & Reservas Online',
    clientType: 'Fotografía Documental, Moda Editorial & Bodas de Destino',
    tagline: 'Sensibilidad cinematográfica, galería interactiva con metadatos EXIF y sistema de reservas online',
    description: 'Plataforma web premium de alta fidelidad desarrollada para LUMEN Studio, atelier fotográfico boutique en Ciudad de Panamá. Integra una experiencia visual cinematográfica, galería interactiva con visor de metadatos técnicos EXIF por toma (lente, diafragma, velocidad), cotizador dinámico de paquetes por servicio, sistema interactivo de reservas paso a paso con cálculo de tarifas en tiempo real y formulario de agendamiento para visitas a su atelier de 320 m².',
    tags: ['Sitio Premium', 'Galería Interactiva', 'Metadatos EXIF', 'Sistema de Reservas', 'Cotizador Online', 'Lujo & Moda'],
    imageUrl: './assets/images/sitiop1.png',
    gallery: [
      {
        url: './assets/images/sitiop1.png',
        title: 'Portada & Esencia Cinematográfica',
        caption: 'Hero de alto impacto visual ("El arte de eternizar lo irrepetible") con estética editorial, presentación del atelier boutique y navegación fluida.'
      },
      {
        url: './assets/images/sitiop2.png',
        title: 'Galería Interactiva & Visor de Metadatos EXIF',
        caption: 'Portafolio filtrable por categorías (bodas, moda, retratos, arquitectura) con visor técnico que detalla lente, diafragma y velocidad de obturación.'
      },
      {
        url: './assets/images/sitiop3.png',
        title: 'Catálogo de Servicios & Tarifario Transparente',
        caption: 'Desglose detallado de experiencias fotográficas (Bodas de Destino, Campañas Comerciales, Retratos) con entregas, especificaciones y precios claros.'
      },
      {
        url: './assets/images/sitiop4.png',
        title: 'Sistema de Reservas & Configuración de Sesión',
        caption: 'Módulo interactivo paso a paso para seleccionar tipo de producción, cotizar servicios adicionales y asegurar fecha de rodaje o sesión.'
      },
      {
        url: './assets/images/sitiop5.png',
        title: 'El Atelier & Los Maestros del Lente (Estudio)',
        caption: 'Presentación del estudio de 320 m² en Ciudad de Panamá con ciclorama sinfín, luz cenital y sala de etalonaje, respaldado por más de 12 años de trayectoria.'
      },
      {
        url: './assets/images/sitiop6.png',
        title: 'Contacto Profesional & Agendamiento de Visitas',
        caption: 'Formulario segmentado para solicitudes de producción, canales directos de WhatsApp y correo, horarios de atención y mapa de ubicación.'
      }
    ],
    planId: 'premium',
    features: [
      'Diseño editorial cinematográfico con microinteracciones y transiciones fluidas',
      'Galería interactiva con filtros por rubro y visor de metadatos técnicos EXIF',
      'Catálogo transparente de servicios y producciones comerciales de alta gama',
      'Sistema interactivo de reservas y configuración de experiencias fotográficas',
      'Página dedicada al atelier físico (320 m², ciclorama, sala de etalonaje) y equipo',
      'Integración directa con WhatsApp, formulario de contacto y mapa interactivo'
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPortfolio();
  initFAQ();
  initContactForm();
  initFloatingWhatsApp();
  initSmoothScroll();
});

/* ==========================================================================
   1. Navbar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('main-header');
  const btnHamburger = document.getElementById('btn-hamburger');
  const btnCloseDrawer = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function toggleDrawer(open) {
    if (open) {
      drawer.classList.add('open');
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (btnHamburger) {
    btnHamburger.addEventListener('click', () => toggleDrawer(true));
  }

  if (btnCloseDrawer) {
    btnCloseDrawer.addEventListener('click', () => toggleDrawer(false));
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', () => toggleDrawer(false));
  }

  document.querySelectorAll('.drawer-nav a, #drawer-quote-btn').forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/* ==========================================================================
   2. Smooth Scrolling & Action Triggers
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

window.selectPlanAndQuote = function(planKey, note) {
  const planSelect = document.getElementById('form-plan-select');
  if (planSelect && planKey) {
    planSelect.value = planKey;
  }
  
  if (note) {
    const msgInput = document.getElementById('form-message');
    if (msgInput) {
      msgInput.value = note;
    }
  }

  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================================================
   3. Portfolio Rendering & Fullscreen Image Lightbox
   ========================================================================== */
let activeModalProject = null;
let activeLightboxProject = null;
let activeLightboxIndex = 0;
let isLightboxZoomed = false;

function initPortfolio() {
  const container = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  let currentFilter = 'all';

  function renderProjects() {
    if (!container) return;
    container.innerHTML = '';

    const filtered = PORTFOLIO_DATA.filter(p => {
      if (currentFilter === 'all') return true;
      return p.category === currentFilter;
    });

    filtered.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);

      card.innerHTML = `
        <div class="project-image-wrap" title="Haz clic para ver el caso completo">
          <img src="${project.imageUrl}" alt="${project.title}" loading="lazy" />
          <div class="project-overlay"></div>
          <div class="project-badge-cat">${project.categoryLabel}</div>

          <div class="project-image-hover-actions">
            <button type="button" class="btn-hover-details">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Ver Caso</span>
            </button>
          </div>
        </div>

        <div class="project-card-body">
          <div>
            <h3 class="project-title" style="cursor: pointer;">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
          </div>
          <div class="project-actions">
            <button type="button" class="btn-view-demo" data-id="${project.id}">
              <span>Ver Caso ➔</span>
            </button>
            <button type="button" class="btn-quote-similar" onclick="selectPlanAndQuote('${project.planId}', 'Me interesa un diseño similar a: ${project.title}')">
              <span>Cotizar similar ➔</span>
            </button>
          </div>
        </div>
      `;

      // Clicking the image, title or Ver Caso button opens the project case study modal
      const imgWrap = card.querySelector('.project-image-wrap');
      const btnDetails = card.querySelector('.btn-hover-details');
      const titleEl = card.querySelector('.project-title');
      const btnViewDemo = card.querySelector('.btn-view-demo');

      imgWrap.addEventListener('click', () => {
        openProjectModal(project);
      });

      if (btnDetails) {
        btnDetails.addEventListener('click', (e) => {
          e.stopPropagation();
          openProjectModal(project);
        });
      }

      if (titleEl) {
        titleEl.addEventListener('click', () => {
          openProjectModal(project);
        });
      }

      if (btnViewDemo) {
        btnViewDemo.addEventListener('click', () => {
          openProjectModal(project);
        });
      }

      container.appendChild(card);
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });

  // Modal Close Events
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  // Hook up Lightbox controls once
  initLightboxControls();

  // Initial Render
  renderProjects();
}

function openProjectModal(project) {
  activeModalProject = project;
  const modalOverlay = document.getElementById('project-modal-overlay');
  const catBadge = document.getElementById('modal-project-category');
  const clientType = document.getElementById('modal-project-client');
  const title = document.getElementById('modal-project-title');
  const img = document.getElementById('modal-preview-img');
  const previewContainer = document.getElementById('modal-preview-container');
  const btnFullscreen = document.getElementById('modal-btn-fullscreen');
  const desc = document.getElementById('modal-project-desc');
  const tagsBox = document.getElementById('modal-project-tags');
  const featuresBox = document.getElementById('modal-project-features');
  const quoteBtn = document.getElementById('modal-quote-btn');

  if (!modalOverlay || !project) return;

  if (catBadge) catBadge.textContent = project.categoryLabel;
  if (clientType) clientType.textContent = project.clientType;
  if (title) title.textContent = project.title;
  if (img) {
    img.src = project.imageUrl;
    img.alt = project.title;
  }
  if (desc) desc.textContent = project.description;

  if (previewContainer) {
    previewContainer.onclick = () => {
      openImageLightbox(project, 0);
    };
  }

  if (btnFullscreen) {
    btnFullscreen.onclick = (e) => {
      e.stopPropagation();
      openImageLightbox(project, 0);
    };
  }

  // Render Features Checklist
  if (featuresBox && project.features) {
    featuresBox.innerHTML = `
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
        ${project.features.map(f => `
          <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8125rem; color: #d4d4d8;">
            <span style="color: var(--accent-cyan); font-weight: bold;">✓</span>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  if (quoteBtn) {
    quoteBtn.onclick = () => {
      closeProjectModal();
      window.selectPlanAndQuote(project.planId, `Deseo un sitio web con diseño y prestaciones similares al proyecto: ${project.title}`);
    };
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('project-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
    if (!activeLightboxProject) {
      document.body.style.overflow = '';
    }
  }
}

/* Lightbox Functions */
function getProjectGallery(project) {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery;
  }
  return [{ url: project.imageUrl, title: project.title, caption: project.tagline || project.description }];
}

function openImageLightbox(project, initialIndex = 0) {
  activeLightboxProject = project;
  activeLightboxIndex = initialIndex;
  isLightboxZoomed = false;

  const overlay = document.getElementById('image-lightbox-overlay');
  if (!overlay || !project) return;

  renderLightboxSlide();
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
  const overlay = document.getElementById('image-lightbox-overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
  activeLightboxProject = null;
  isLightboxZoomed = false;

  const modalOverlay = document.getElementById('project-modal-overlay');
  if (!modalOverlay || !modalOverlay.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function renderLightboxSlide() {
  if (!activeLightboxProject) return;

  const gallery = getProjectGallery(activeLightboxProject);
  if (activeLightboxIndex < 0) activeLightboxIndex = gallery.length - 1;
  if (activeLightboxIndex >= gallery.length) activeLightboxIndex = 0;

  const currentItem = gallery[activeLightboxIndex] || gallery[0];

  const counterEl = document.getElementById('lightbox-counter');
  const projNameEl = document.getElementById('lightbox-project-name');
  const imgTitleEl = document.getElementById('lightbox-image-title');
  const imgEl = document.getElementById('lightbox-img');
  const containerEl = document.getElementById('lightbox-img-container');
  const capTitleEl = document.getElementById('lightbox-caption-title');
  const capDescEl = document.getElementById('lightbox-caption-desc');
  const thumbsContainer = document.getElementById('lightbox-thumbs');
  const quoteBtn = document.getElementById('lightbox-quote-btn');
  const prevBtn = document.getElementById('lightbox-btn-prev');
  const nextBtn = document.getElementById('lightbox-btn-next');

  if (counterEl) counterEl.textContent = `${activeLightboxIndex + 1} / ${gallery.length}`;
  if (projNameEl) projNameEl.textContent = activeLightboxProject.title;
  if (imgTitleEl) imgTitleEl.textContent = currentItem.title || activeLightboxProject.title;
  if (imgEl) {
    imgEl.src = currentItem.url;
    imgEl.alt = currentItem.title || activeLightboxProject.title;
  }

  if (containerEl) {
    if (isLightboxZoomed) {
      containerEl.classList.add('is-zoomed');
    } else {
      containerEl.classList.remove('is-zoomed');
    }
  }

  if (capTitleEl) capTitleEl.textContent = currentItem.title || activeLightboxProject.title;
  if (capDescEl) capDescEl.textContent = currentItem.caption || activeLightboxProject.tagline || activeLightboxProject.description;

  // Prev / Next button visibility
  if (prevBtn) prevBtn.style.display = gallery.length > 1 ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = gallery.length > 1 ? 'flex' : 'none';

  // Render Thumbnails Strip
  if (thumbsContainer) {
    if (gallery.length > 1) {
      thumbsContainer.style.display = 'flex';
      thumbsContainer.innerHTML = gallery.map((item, idx) => `
        <button type="button" class="lightbox-thumb-btn ${idx === activeLightboxIndex ? 'active' : ''}" data-idx="${idx}" title="${item.title}">
          <img src="${item.url}" alt="${item.title}" />
        </button>
      `).join('');

      thumbsContainer.querySelectorAll('.lightbox-thumb-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          activeLightboxIndex = idx;
          isLightboxZoomed = false;
          renderLightboxSlide();
        });
      });
    } else {
      thumbsContainer.style.display = 'none';
      thumbsContainer.innerHTML = '';
    }
  }

  // Quote Button
  if (quoteBtn) {
    quoteBtn.onclick = () => {
      const proj = activeLightboxProject;
      closeImageLightbox();
      closeProjectModal();
      window.selectPlanAndQuote(proj.planId || 'custom', `Me interesa un diseño similar a: ${proj.title}`);
    };
  }
}

function initLightboxControls() {
  const closeBtn = document.getElementById('lightbox-btn-close');
  const prevBtn = document.getElementById('lightbox-btn-prev');
  const nextBtn = document.getElementById('lightbox-btn-next');
  const zoomBtn = document.getElementById('lightbox-btn-zoom');
  const containerEl = document.getElementById('lightbox-img-container');
  const overlay = document.getElementById('image-lightbox-overlay');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeImageLightbox);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeLightboxIndex--;
      isLightboxZoomed = false;
      renderLightboxSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeLightboxIndex++;
      isLightboxZoomed = false;
      renderLightboxSlide();
    });
  }

  if (zoomBtn) {
    zoomBtn.addEventListener('click', () => {
      isLightboxZoomed = !isLightboxZoomed;
      renderLightboxSlide();
    });
  }

  if (containerEl) {
    containerEl.addEventListener('click', () => {
      isLightboxZoomed = !isLightboxZoomed;
      renderLightboxSlide();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.classList.contains('lightbox-main-stage')) {
        closeImageLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!activeLightboxProject) return;

    if (e.key === 'Escape') {
      closeImageLightbox();
    } else if (e.key === 'ArrowLeft') {
      activeLightboxIndex--;
      isLightboxZoomed = false;
      renderLightboxSlide();
    } else if (e.key === 'ArrowRight') {
      activeLightboxIndex++;
      isLightboxZoomed = false;
      renderLightboxSlide();
    }
  });
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        const ans = item.querySelector('.faq-answer');
        if (ans) {
          ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      } else {
        item.classList.remove('open');
        const ans = item.querySelector('.faq-answer');
        if (ans) {
          ans.style.maxHeight = null;
        }
      }
    });
  });
}

/* ==========================================================================
   5. Contact Form Handler (WhatsApp & Form Submission)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('quote-form') || document.getElementById('contact-form');
  const btnWA = document.getElementById('btn-submit-whatsapp') || document.getElementById('btn-send-whatsapp');
  const btnEmail = document.getElementById('btn-submit-email');
  const formFields = document.getElementById('form-fields-wrap') || document.getElementById('form-fields-wrapper');
  const successBox = document.getElementById('form-success-state') || document.getElementById('form-success-message');
  const urgencyBtns = document.querySelectorAll('.urgency-btn');
  let selectedUrgency = 'En 1 a 2 semanas';

  if (urgencyBtns.length > 0) {
    urgencyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        urgencyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedUrgency = btn.getAttribute('data-urgency') || btn.textContent.trim();
      });
    });
  }

  function getFormData() {
    return {
      name: (document.getElementById('form-name')?.value || '').trim(),
      email: (document.getElementById('form-email')?.value || '').trim(),
      phone: (document.getElementById('form-phone')?.value || '').trim(),
      business: (document.getElementById('form-business')?.value || '').trim(),
      plan: document.getElementById('form-plan-select')?.value || 'intermedio',
      urgency: selectedUrgency,
      message: (document.getElementById('form-message')?.value || '').trim()
    };
  }

  const planLabels = {
    'basico': 'Landing Page (Desde $200 USD)',
    'intermedio': 'Sitio Corporativo (Desde $350 USD)',
    'premium': 'Sitio Premium (Desde $550 USD)',
    'mant_esencial': 'Mantenimiento Esencial ($25 USD / mes)',
    'mant_estandar': 'Mantenimiento Estándar ($50 USD / mes)',
    'mant_premium': 'Mantenimiento Premium ($100 USD / mes)',
    'mant_basico': 'Mantenimiento Esencial ($25 USD / mes)',
    'mant_pro': 'Mantenimiento Estándar ($50 USD / mes)',
    'mini_menu': 'Menú Digital con QR (Desde $40 USD)',
    'mini_catalogo': 'Catálogo Digital (Desde $40 USD)',
    'mini_tarjeta': 'Tarjeta de Presentación Digital (Desde $30 USD)',
    'mini_sitio': 'Mini Sitio / Solución Puntual',
    'custom': 'Proyecto / Alcance Personalizado'
  };

  function formatWhatsAppText(data) {
    let text = `*NUEVA CONSULTA DE SITIO WEB - IVS WORKS*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Nombre:* ${data.name || 'No especificado'}\n`;
    if (data.phone) text += `*Teléfono:* ${data.phone}\n`;
    if (data.email) text += `*Email:* ${data.email}\n`;
    if (data.business) text += `*Giro de negocio:* ${data.business}\n`;
    text += `*Plan de Interés:* ${planLabels[data.plan] || data.plan}\n`;
    text += `*Tiempo deseado:* ${data.urgency}\n`;
    if (data.message) {
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `*Mensaje / Detalles:*\n${data.message}\n`;
    }
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Enviado desde el formulario oficial de ivsworks.com`;
    return text;
  }

  function showSuccess(data) {
    if (formFields && successBox) {
      formFields.style.display = 'none';
      successBox.style.display = 'block';

      const sName = document.getElementById('summary-name');
      const sEmail = document.getElementById('summary-email');
      const sPhone = document.getElementById('summary-phone');
      const sPlan = document.getElementById('summary-plan');
      const sUrgency = document.getElementById('summary-urgency');
      const namePlaceholder = document.getElementById('success-user-name');

      if (sName) sName.textContent = data.name || 'No especificado';
      if (sEmail) sEmail.textContent = data.email || 'No especificado';
      if (sPhone) sPhone.textContent = data.phone || 'No especificado';
      if (sPlan) sPlan.textContent = planLabels[data.plan] || data.plan;
      if (sUrgency) sUrgency.textContent = data.urgency || 'No especificado';
      if (namePlaceholder) {
        namePlaceholder.textContent = data.name ? `¡Muchas gracias, ${data.name}!` : '¡Muchas gracias!';
      }
    }
  }

  if (btnWA) {
    btnWA.addEventListener('click', () => {
      const data = getFormData();
      if (!data.name) {
        alert('Por favor, ingresa al menos tu nombre para enviarte la cotización por WhatsApp.');
        document.getElementById('form-name')?.focus();
        return;
      }

      const text = formatWhatsAppText(data);
      const encoded = encodeURIComponent(text);
      const waUrl = `https://wa.me/50762125245?text=${encoded}`;
      window.open(waUrl, '_blank');
      showSuccess(data);
    });
  }

  if (btnEmail) {
    btnEmail.addEventListener('click', () => {
      const data = getFormData();
      if (!data.name || !data.email) {
        alert('Por favor completa tu nombre y correo electrónico.');
        if (!data.name) document.getElementById('form-name')?.focus();
        else document.getElementById('form-email')?.focus();
        return;
      }

      showSuccess(data);
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getFormData();

      if (!data.name || !data.email) {
        alert('Por favor completa tu nombre y correo electrónico para ponernos en contacto.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Enviando consulta...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        showSuccess(data);
        if (submitBtn) {
          submitBtn.textContent = 'Enviar Consulta por Correo';
          submitBtn.disabled = false;
        }
      }, 500);
    });
  }

  const btnCopy = document.getElementById('btn-copy-summary');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const data = getFormData();
      const summaryText = `Cotización Solicitada - IVS WORKS:\nNombre: ${data.name}\nCorreo: ${data.email}\nTeléfono: ${data.phone}\nPlan: ${planLabels[data.plan] || data.plan}\nPlazo: ${data.urgency}\nMensaje: ${data.message}`;
      navigator.clipboard.writeText(summaryText);
      const originalText = btnCopy.textContent;
      btnCopy.textContent = '¡Copiado!';
      setTimeout(() => {
        btnCopy.textContent = originalText;
      }, 2500);
    });
  }

  const btnResetForm = document.getElementById('btn-reset-form');
  if (btnResetForm) {
    btnResetForm.addEventListener('click', () => {
      if (form) form.reset();
      if (formFields && successBox) {
        successBox.style.display = 'none';
        formFields.style.display = 'block';
      }
    });
  }
}

/* ==========================================================================
   6. Floating WhatsApp Button
   ========================================================================== */
function initFloatingWhatsApp() {
  const trigger = document.getElementById('btn-floating-wa');
  if (!trigger) return;

  trigger.addEventListener('click', () => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: 'floating_button'
      });
    }
  });
}
