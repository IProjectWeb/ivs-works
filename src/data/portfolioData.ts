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
    tagline: 'Presencia profesional para generar confianza y captar clientes directamente por WhatsApp',
    description: 'Página web diseñada para una firma de asesoría financiera y contable. Presenta sus servicios con claridad, transmite seriedad ante empresas y clientes, e incluye botones directos para solicitar cotizaciones por WhatsApp.',
    tags: ['Landing Page', 'Consultoría & Finanzas', 'Cotizador Online', 'Captación de Clientes', 'WhatsApp'],
    imageUrl: vvConsultingHero,
    gallery: [
      {
        url: vvConsultingHero,
        title: 'Portada Principal',
        caption: 'Página principal con mensaje claro de bienvenida, datos de experiencia y botón de contacto directo.'
      },
      {
        url: vvConsultingNosotros,
        title: 'Sobre la Firma',
        caption: 'Sección informativa sobre la trayectoria de la firma y el equipo de profesionales.'
      },
      {
        url: vvConsultingServicios,
        title: 'Servicios & Cotización',
        caption: 'Catálogo de servicios de auditoría y contabilidad con opción para solicitar cotización.'
      },
      {
        url: vvConsultingContacto,
        title: 'Contacto & Consultas',
        caption: 'Ubicación, horarios y formulario para recibir consultas de clientes interesados.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0e2b5c',
      accent: '#22c55e',
      bg: '#ffffff'
    },
    features: [
      'Diseño profesional enfocado en transmitir credibilidad y seguridad',
      'Presentación clara de servicios de auditoría, contabilidad y asesoría',
      'Sección sobre la trayectoria del equipo para generar confianza',
      'Botones directos para cotizar y consultar vía WhatsApp',
      'Formulario fácil de usar para recibir solicitudes de clientes',
      'Botón flotante de WhatsApp para atención rápida'
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
    title: 'White Cloud Essentials',
    category: 'landing',
    categoryLabel: 'Landing Page & Catálogo',
    clientType: 'Moda Urbana & Accesorios',
    tagline: 'Catálogo visual moderno y pedidos rápidos directo a WhatsApp y Yappy',
    description: 'Página web y catálogo interactivo para una marca de gorras y moda urbana. Permite a los clientes explorar productos por categoría, buscar modelos al instante y hacer pedidos directamente por WhatsApp sin complicaciones ni comisiones.',
    tags: ['Catálogo Digital', 'Tienda & Moda', 'Buscador en Vivo', 'Ventas por WhatsApp', 'Yappy Panamá'],
    imageUrl: whiteCloudHero,
    gallery: [
      {
        url: whiteCloudHero,
        title: 'Portada de Colección',
        caption: 'Portada moderna con las prendas destacadas y botón para explorar la colección.'
      },
      {
        url: whiteCloudCatalog,
        title: 'Catálogo de Productos',
        caption: 'Vista de productos organizada por categorías con buscador y botón de compra.'
      },
      {
        url: whiteCloudPhilosophy,
        title: 'Calidad y Envíos',
        caption: 'Detalles sobre la calidad de los materiales, envíos y métodos de pago como Yappy.'
      },
      {
        url: whiteCloudContact,
        title: 'Atención & Pedidos',
        caption: 'Canal directo a WhatsApp y formulario para pedidos y atención al cliente.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0a0a0a',
      accent: '#00e5ff',
      bg: '#ffffff'
    },
    features: [
      'Catálogo visual e interactivo para mostrar productos con estilo',
      'Filtro por categorías y buscador rápido para encontrar productos al instante',
      'Botón de compra directa por WhatsApp para cerrar ventas de inmediato',
      'Listo para recibir pagos rápidos por Yappy y transferencias',
      'Sección de presentación de marca con estética moderna y limpia',
      'Diseño 100% adaptado para verse y comprar perfecto desde celulares'
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
    clientType: 'Nutrición Clínica & Rendimiento Deportivo',
    tagline: 'Sitio web completo para profesionales de la salud con agendamiento y herramientas útiles',
    description: 'Sitio web completo para una especialista en nutrición clínica y deportiva. Permite a los pacientes conocer su trayectoria, consultar los tipos de atención (presencial y online), calcular sus requerimientos nutricionales y agendar citas fácilmente por WhatsApp.',
    tags: ['Sitio Corporativo', 'Salud & Nutrición', 'Calculadora Interactiva', 'Agendamiento de Citas', 'WhatsApp'],
    imageUrl: sitioCorp1,
    gallery: [
      {
        url: sitioCorp1,
        title: 'Inicio & Presentación Médica',
        caption: 'Página de inicio con enfoque profesional en salud, especialidades y años de experiencia.'
      },
      {
        url: sitioCorp2,
        title: 'Perfil Profesional & Trayectoria',
        caption: 'Sección sobre la formación académica, certificaciones y método de atención.'
      },
      {
        url: sitioCorp3,
        title: 'Servicios & Consultas',
        caption: 'Lista de consultas presenciales y online con duración y precios detallados.'
      },
      {
        url: sitioCorp4,
        title: 'Contacto & Citas',
        caption: 'Formulario y botón directo a WhatsApp para agendar citas fácilmente.'
      },
      {
        url: sitioCorp5,
        title: 'Calculadora Nutricional',
        caption: 'Herramienta interactiva para que los pacientes calculen sus calorías diarias estimadas.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0b332b',
      accent: '#22c55e',
      bg: '#f7f9f8'
    },
    features: [
      'Estructura completa de varias páginas: Inicio, Sobre mí, Servicios y Contacto',
      'Presentación detallada de consultas presenciales y virtuales',
      'Calculadora nutricional interactiva que atrae y ayuda a los pacientes',
      'Sección de trayectoria y certificaciones para generar confianza médica',
      'Agendamiento de citas rápido y directo por WhatsApp'
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
    clientType: 'Fotografía de Bodas, Moda & Retratos',
    tagline: 'Sitio web exclusivo para fotografía de alto nivel con galería visual y cotizador de sesiones',
    description: 'Plataforma web elegante y visual para un estudio boutique de fotografía. Cuenta con una galería para exhibir proyectos de bodas, moda y retratos, lista de paquetes con precios claros y un sistema para cotizar y reservar sesiones de fotos de forma personalizada.',
    tags: ['Sitio Premium', 'Estudio Fotográfico', 'Galería Visual', 'Cotizador de Sesiones', 'Reservas Online'],
    imageUrl: sitiop1,
    gallery: [
      {
        url: sitiop1,
        title: 'Portada & Estilo Visual',
        caption: 'Portada visual y elegante que presenta el estilo artístico del estudio fotográfico.'
      },
      {
        url: sitiop2,
        title: 'Galería de Proyectos',
        caption: 'Portafolio organizado por categorías como bodas, retratos y moda.'
      },
      {
        url: sitiop3,
        title: 'Paquetes & Precios',
        caption: 'Detalle de cada tipo de sesión fotográfica con entregas y precios claros.'
      },
      {
        url: sitiop4,
        title: 'Cotizador & Reservas',
        caption: 'Paso a paso interactivo para elegir la sesión deseada y cotizar la fecha.'
      },
      {
        url: sitiop5,
        title: 'El Estudio & El Equipo',
        caption: 'Presentación de las instalaciones del estudio en Ciudad de Panamá y su equipo.'
      },
      {
        url: sitiop6,
        title: 'Contacto & Agendamiento',
        caption: 'Formulario para cotizaciones especiales y enlace directo a WhatsApp.'
      }
    ],
    mediaType: 'image',
    colorScheme: {
      primary: '#0e0e11',
      accent: '#d4af37',
      bg: '#08080a'
    },
    features: [
      'Diseño elegante y visual que hace resaltar cada fotografía',
      'Galería organizada por categorías: bodas, moda, retratos y eventos',
      'Detalle de paquetes y servicios con tarifas claras',
      'Sistema interactivo para cotizar y agendar sesiones fotográficas',
      'Página para presentar las instalaciones del estudio y el equipo de trabajo',
      'Ubicación del estudio e integración directa con WhatsApp'
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
