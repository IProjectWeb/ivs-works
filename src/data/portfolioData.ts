import { PortfolioProject } from '../types';
import whiteCloudHero from '../assets/images/wc-hero.png';
import whiteCloudCatalog from '../assets/images/wc-catalog.png';
import whiteCloudPhilosophy from '../assets/images/wc-philosophy.png';
import whiteCloudContact from '../assets/images/wc-contact.png';
import vvConsultingHero from '../assets/images/vv-consulting-hero.png';
import vvConsultingNosotros from '../assets/images/vv-consulting-nosotros.png';
import vvConsultingServicios from '../assets/images/vv-consulting-servicios.png';
import vvConsultingContacto from '../assets/images/vv-consulting-contacto.png';
import sitioCorp1 from '../assets/images/SitioCorporativo1.png';
import sitioCorp2 from '../assets/images/SitioCorporativo2.png';
import sitioCorp3 from '../assets/images/SitioCorporativo3.png';
import sitioCorp4 from '../assets/images/SitioCorporativo4.png';
import sitioCorp5 from '../assets/images/SitioCorporativo5.png';
import sitiop1 from '../assets/images/sitiop1.png';
import sitiop2 from '../assets/images/sitiop2.png';
import sitiop3 from '../assets/images/sitiop3.png';
import sitiop4 from '../assets/images/sitiop4.png';
import sitiop5 from '../assets/images/sitiop5.png';
import sitiop6 from '../assets/images/sitiop6.png';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'vv-consulting-group',
    title: 'VV Consulting Group',
    category: 'landing',
    categoryLabel: 'Landing Page Corporativa',
    clientType: 'Asesoría Financiera & Auditoría en Panamá',
    tagline: 'Estrategia, rigor técnico y captación de clientes corporativos por WhatsApp',
    description: 'Landing page corporativa para consultoría financiera, auditoría, contabilidad y asesoría tributaria en Panamá. Diseñada con secciones de alto impacto (Hero con propuesta de valor, ¿Quiénes somos?, catálogo de soluciones con cotizador y módulo de contacto directo con formulario y botón de WhatsApp).',
    tags: ['Landing Page', 'Consultoría Financiera', 'Cotizador de Servicios', 'Formulario Segmentado', 'WhatsApp Lead Gen'],
    imageUrl: vvConsultingHero,
    gallery: [
      {
        url: vvConsultingHero,
        title: 'Hero & Propuesta de Valor',
        caption: 'Encabezado corporativo con propuesta de valor "Estrategia que define tu éxito", métricas de experiencia y llamada a la acción hacia WhatsApp.'
      },
      {
        url: vvConsultingNosotros,
        title: 'Sobre Nosotros & Firma',
        caption: 'Módulo "¿Quiénes somos?" y "Confianza y Experiencia", destacando más de una década asesorando empresas y equipo de contadores CPA.'
      },
      {
        url: vvConsultingServicios,
        title: 'Soluciones Integrales & Cotizador',
        caption: 'Catálogo de servicios de Auditoría, Contabilidad y Asesoría Financiera con checklist detallado y botón de solicitar cotización.'
      },
      {
        url: vvConsultingContacto,
        title: 'Contacto & Formulario de Consulta',
        caption: 'Panel con datos de contacto en Ciudad de Panamá, horarios y formulario segmentado por servicio de interés para captar leads calificados.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0e2b5c',
      accent: '#22c55e',
      bg: '#ffffff'
    },
    features: [
      'Estructura de landing page corporativa de alta confianza optimizada para empresas y PYMES',
      'Hero section con propuesta de valor clara y acceso directo a WhatsApp',
      'Módulo "Nuestra Firma" para proyectar autoridad con equipo de contadores públicos autorizados (CPA)',
      'Catálogo de soluciones (Auditoría, Contabilidad, Asesoría) con botón de solicitud de cotización',
      'Formulario de contacto con selector de servicio de interés y botón de envío directo',
      'Canal flotante de WhatsApp activo para atención inmediata en Panamá'
    ],
    mockupData: {
      heroTitle: 'Estrategia que define tu éxito',
      heroSubtitle: 'Impulsamos tu crecimiento comercial y corporativo con total transparencia, rigor técnico y confianza en el mercado panameño.',
      heroCta: 'Conoce Nuestros Servicios ➔',
      stats: [
        { label: 'Experiencia', value: '15+ Años' },
        { label: 'Soporte', value: 'Auditoría & Fiscal' },
        { label: 'Ubicación', value: 'Panamá' }
      ],
      mockSections: ['Inicio', 'Sobre Nosotros', 'Soluciones Integrales', 'Contacto']
    }
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
    imageUrl: whiteCloudHero,
    gallery: [
      {
        url: whiteCloudHero,
        title: 'Portada & Colección Esencial',
        caption: 'Hero minimalista con estética limpia, tipografía editorial y botón de llamada a la acción hacia la colección.'
      },
      {
        url: whiteCloudCatalog,
        title: 'Catálogo Principal Filtrable',
        caption: 'Grilla de productos con filtros rápidos por categoría (Dad Hat, Snapback, Trucker, Beanie), buscador y botón de compra directa.'
      },
      {
        url: whiteCloudPhilosophy,
        title: 'Sección Filosofía & Calidad',
        caption: 'Puntos clave de valor: Forma Atemporal, Calidad de Selección y Atención Directa con entregas rápidas y pagos por Yappy.'
      },
      {
        url: whiteCloudContact,
        title: 'Contacto & Pedidos Personalizados',
        caption: 'Módulo de contacto con canal directo a WhatsApp (+507 6289-4977), ubicación en Ciudad de Panamá y formulario rápido.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0a0a0a',
      accent: '#00e5ff',
      bg: '#ffffff'
    },
    features: [
      'Estructura de landing page de alta conversión con llamado a la acción enfocado a ventas',
      'Catálogo dinámico interactivo con filtrado instantáneo por categoría (Dad Hat, Snapback, Trucker, Beanie)',
      'Buscador en tiempo real por modelo o estilo sin recargar la página',
      'Carrito de compras integrado con checkout directo hacia WhatsApp sin comisiones',
      'Compatibilidad con pagos rápidos vía Yappy y transferencias locales en Panamá',
      'Sección editorial de filosofía de marca y estética minimalista premium',
      'Optimización de carga ultrarrápida con diseño adaptativo mobile-first'
    ],
    mockupData: {
      heroTitle: 'Estilo atemporal, estructura impecable',
      heroSubtitle: 'Diseño minimalista, materiales premium y acabados duraderos concebidos para acompañarte a diario.',
      heroCta: 'Ver Colección ➔',
      stats: [
        { label: 'Colección', value: '2026' },
        { label: 'Envíos', value: 'Todo Panamá' },
        { label: 'Pago Fácil', value: 'Yappy / ACH' }
      ],
      mockSections: ['Hero Principal', 'Catálogo Dinámico', 'Filosofía & Materiales', 'Contacto Directo']
    }
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
    imageUrl: sitioCorp1,
    gallery: [
      {
        url: sitioCorp1,
        title: 'Inicio & Propuesta de Valor Médica',
        caption: 'Hero institucional con propuesta de valor basada en evidencia médica, acreditaciones ISAK 2, resumen de especialidades y métricas de impacto (+1.400 pacientes y 9 años de práctica).'
      },
      {
        url: sitioCorp2,
        title: 'Nosotros & Credenciales Profesionales',
        caption: 'Página dedicada a formación académica, filosofía clínica sin dietas punitivas, certificaciones universitarias y trayectoria profesional.'
      },
      {
        url: sitioCorp3,
        title: 'Servicios & Especialidades Clínicas',
        caption: 'Catálogo de consultas (Nutrición Clínica, Rendimiento Físico, Salud Digestiva y Videoconsulta Online) con duración, precios y llamada directa a agendar.'
      },
      {
        url: sitioCorp4,
        title: 'Contacto & Agendamiento de Pacientes',
        caption: 'Módulo integral de consulta con formulario de agendamiento, datos del consultorio en Providencia, videoconsulta online y canal directo de WhatsApp.'
      },
      {
        url: sitioCorp5,
        title: 'Calculadora de Requerimientos Energéticos',
        caption: 'Herramienta interactiva para pacientes que calcula la Tasa Metabólica Basal (BMR) y gasto calórico diario según fórmula Mifflin-St Jeor con desglose de macronutrientes.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0b332b',
      accent: '#22c55e',
      bg: '#f7f9f8'
    },
    features: [
      'Arquitectura multi-página estructurada (Inicio, Nosotros, Servicios, Calculadora, Contacto)',
      'Hero corporativo con propuesta de valor médica, acreditaciones sanitarias y prueba social',
      'Página de credenciales y trayectoria con enfoque en evidencia científica sin dietas punitivas',
      'Catálogo de servicios y especialidades clínicas con desglose de modalidades presencial y online',
      'Calculadora metabólica interactiva en tiempo real (fórmula Mifflin-St Jeor) como imán de leads',
      'Sistema de agendamiento directo por formulario y botón flotante de WhatsApp activo'
    ],
    mockupData: {
      heroTitle: 'Nutrición basada en evidencia médica para transformar tu salud y rendimiento',
      heroSubtitle: 'Acompañamos a personas con alteraciones metabólicas, deportistas y pacientes con afecciones digestivas sin dietas punitivas ni efecto rebote.',
      heroCta: 'Agendar Primera Consulta ➔',
      stats: [
        { label: 'Pacientes Acompañados', value: '+1.400' },
        { label: 'Práctica Clínica', value: '9 Años' },
        { label: 'Adherencia Sostenida', value: '94%' }
      ],
      mockSections: ['Propuesta Médica', 'Credenciales & ISAK 2', 'Especialidades Clínicas', 'Calculadora Metabólica', 'Agendamiento Directo']
    }
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
    imageUrl: sitiop1,
    gallery: [
      {
        url: sitiop1,
        title: 'Portada & Esencia Cinematográfica',
        caption: 'Hero de alto impacto visual ("El arte de eternizar lo irrepetible") con estética editorial, presentación del atelier boutique y navegación fluida.'
      },
      {
        url: sitiop2,
        title: 'Galería Interactiva & Visor de Metadatos EXIF',
        caption: 'Portafolio filtrable por categorías (bodas, moda, retratos, arquitectura) con visor técnico que detalla lente, diafragma y velocidad de obturación.'
      },
      {
        url: sitiop3,
        title: 'Catálogo de Servicios & Tarifario Transparente',
        caption: 'Desglose detallado de experiencias fotográficas (Bodas de Destino, Campañas Comerciales, Retratos) con entregas, especificaciones y precios claros.'
      },
      {
        url: sitiop4,
        title: 'Sistema de Reservas & Configuración de Sesión',
        caption: 'Módulo interactivo paso a paso para seleccionar tipo de producción, cotizar servicios adicionales y asegurar fecha de rodaje o sesión.'
      },
      {
        url: sitiop5,
        title: 'El Atelier & Los Maestros del Lente (Estudio)',
        caption: 'Presentación del estudio de 320 m² en Ciudad de Panamá con ciclorama sinfín, luz cenital y sala de etalonaje, respaldado por más de 12 años de trayectoria.'
      },
      {
        url: sitiop6,
        title: 'Contacto Profesional & Agendamiento de Visitas',
        caption: 'Formulario segmentado para solicitudes de producción, canales directos de WhatsApp y correo, horarios de atención y mapa de ubicación.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0e0e11',
      accent: '#d4af37',
      bg: '#08080a'
    },
    features: [
      'Diseño editorial cinematográfico con microinteracciones y transiciones fluidas',
      'Galería interactiva con filtros por rubro y visor de metadatos técnicos EXIF',
      'Catálogo transparente de servicios y producciones comerciales de alta gama',
      'Sistema interactivo de reservas y configuración de experiencias fotográficas',
      'Página dedicada al atelier físico (320 m², ciclorama, sala de etalonaje) y equipo',
      'Integración directa con WhatsApp, formulario de contacto y mapa interactivo'
    ],
    mockupData: {
      heroTitle: 'El arte de eternizar lo irrepetible',
      heroSubtitle: 'Sensibilidad cinematográfica, luz natural y perfección técnica en cada fotograma. Fotografía documental, moda editorial y bodas de destino.',
      heroCta: 'Reservar Sesión ➔',
      stats: [
        { label: 'Trayectoria Profesional', value: '+12 Años' },
        { label: 'Espacio de Atelier', value: '320 m²' },
        { label: 'Producciones Realizadas', value: '450+' }
      ],
      mockSections: ['Esencia Cinematográfica', 'Galería & Metadatos EXIF', 'Tarifas & Servicios', 'Sistema de Reservas', 'El Atelier', 'Contacto Directo']
    }
  }
];
