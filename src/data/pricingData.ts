import { PlanItem, QuickServiceItem } from '../types';

export const WEB_PLANS: PlanItem[] = [
  {
    id: 'basico',
    name: 'Landing Page',
    category: 'web',
    price: 'Desde $200 USD',
    priceNum: 200,
    description: 'Ideal para promocionar un producto, servicio o campaña con enfoque directo a conversión y captación de clientes.',
    pages: '1 sola página con secciones estratégicas',
    features: [
      '1 sola página con secciones: Inicio, Sobre nosotros, Servicios/Productos, Testimonios y Contacto',
      'Diseño responsive',
      'Formulario de contacto funcional',
      'Botón de WhatsApp flotante',
      'Botones/enlaces a redes sociales',
      'Integración con Google Maps',
      'SEO básico (títulos, meta descripciones, estructura semántica)',
      'Optimización básica de velocidad',
      'Asesoría para compra de dominio y hosting'
    ],
    ctaText: 'Cotizar Landing Page'
  },
  {
    id: 'intermedio',
    name: 'Sitio Corporativo',
    category: 'web',
    badge: 'Más Recomendado',
    popular: true,
    price: 'Desde $350 USD',
    priceNum: 350,
    description: 'Estructura multi-página completa para consolidar la imagen, autoridad y presencia digital de tu empresa.',
    pages: 'Entre 4 y 6 páginas dedicadas',
    features: [
      'Entre 4 y 6 páginas dedicadas (Inicio, Nosotros, Servicios, Portafolio/Casos, Contacto, etc.)',
      'Todo lo incluido en el plan Landing Page',
      'SEO intermedio',
      'Integración con Google Maps interactivo',
      'Navegación multi-página con menú',
      'Configuración de Google Analytics 4',
      'Optimización de velocidad avanzada'
    ],
    ctaText: 'Cotizar Sitio Corporativo'
  },
  {
    id: 'premium',
    name: 'Sitio Premium',
    category: 'web',
    badge: 'Máximo Impacto',
    price: 'Desde $550 USD',
    priceNum: 550,
    description: 'Para quienes buscan destacar con un sitio web robusto, interactivo, con sistema autoadministrable o funciones avanzadas.',
    pages: 'Hasta 12 páginas dedicadas',
    features: [
      'Hasta 12 páginas',
      'Todo lo incluido en el Sitio Corporativo',
      'Animaciones, filtros dinámicos y funciones avanzadas',
      'Blog o sistema de contenido autoadministrable, fácil de usar',
      'Optimización y rendimiento de alto nivel',
      'Sistema de reservas/citas en línea',
      'Chat en vivo integrado',
      'Estrategia de conversión UX/UI personalizada'
    ],
    ctaText: 'Cotizar Sitio Premium'
  }
];

export const MAINTENANCE_PLANS: PlanItem[] = [
  {
    id: 'mant_esencial',
    name: 'Plan Esencial',
    category: 'maintenance',
    price: '$25',
    priceNum: 25,
    period: '/ mes',
    description: 'Ideal para negocios que casi no cambian contenido, solo necesitan que el sitio esté sano y funcionando.',
    pages: 'Sitios con baja frecuencia de cambio',
    deliveryTime: 'Baja frecuencia de cambio',
    features: [
      'Disponibilidad: Monitoreo de que el sitio esté activo',
      'Seguridad: Actualizaciones básicas de seguridad (SSL vigente, parches menores)',
      'Respaldo: 1 backup completo al mes',
      'Contenido: 1 actualización de contenido al mes (texto, imagen o precio ya existente)',
      'Soporte: Respuesta en máximo 48 horas hábiles',
      'Reportes: No incluido'
    ],
    ctaText: 'Elegir Plan Esencial'
  },
  {
    id: 'mant_estandar',
    name: 'Plan Estándar',
    category: 'maintenance',
    badge: 'Más Recomendado',
    popular: true,
    price: '$50',
    priceNum: 50,
    period: '/ mes',
    description: 'Ideal para negocios que actualizan contenido con cierta frecuencia (promociones, novedades).',
    pages: 'Negocios con promociones y novedades',
    deliveryTime: 'Promociones y cambios frecuentes',
    features: [
      'Disponibilidad: Monitoreo activo + alerta si el sitio se cae',
      'Seguridad: Actualizaciones de seguridad + revisión mensual de vulnerabilidades básicas',
      'Respaldo: Backup automatizado semanal',
      'Contenido: Hasta 3 actualizaciones de contenido al mes',
      'Soporte: Respuesta en máximo 24 horas hábiles',
      'Reportes: Reporte mensual simple (visitas, estado general)',
      'Extra: Revisión de velocidad/rendimiento cada 3 meses'
    ],
    ctaText: 'Elegir Plan Estándar'
  },
  {
    id: 'mant_premium',
    name: 'Plan Premium',
    category: 'maintenance',
    price: '$100',
    priceNum: 100,
    period: '/ mes',
    description: 'Ideal para negocios que dependen activamente de su web.',
    pages: 'Empresas con alta dependencia web',
    deliveryTime: 'Atención prioritaria inmediata',
    features: [
      'Disponibilidad: Monitoreo activo 24/7 + alerta inmediata',
      'Seguridad: Actualizaciones de seguridad + revisión mensual completa',
      'Respaldo: Backups semanales + respaldo antes de cualquier cambio grande',
      'Contenido: Cambios de contenido ilimitados dentro de lo razonable (texto, imágenes, precios, reordenar secciones)',
      'Soporte: Respuesta prioritaria, menos de 24 horas'
    ],
    ctaText: 'Elegir Plan Premium'
  }
];

export const QUICK_SERVICES: QuickServiceItem[] = [
  {
    id: 'mini_menu',
    emoji: '🍽️',
    title: 'Menú Digital con QR',
    description: 'Ideal para restaurantes, cafés y bares. Tus clientes escanean un código y ven tu menú al instante, sin apps ni complicaciones.',
    price: 'Desde $40',
    priceNum: 40
  },
  {
    id: 'mini_catalogo',
    emoji: '💇',
    title: 'Catálogo Digital',
    description: 'Ideal para barberías, salones y tiendas. Muestra tus servicios o productos con fotos y precios, siempre actualizado.',
    price: 'Desde $40',
    priceNum: 40
  },
  {
    id: 'mini_tarjeta',
    emoji: '🔗',
    title: 'Tarjeta de Presentación Digital',
    description: 'Un solo enlace con tu información y contactos — perfecta para compartir en redes sociales o WhatsApp.',
    price: 'Desde $30',
    priceNum: 30
  }
];

export const PILLARS_DATA = [
  {
    icon: 'UserCheck',
    title: 'Trato directo sin intermediarios',
    highlight: '1 a 1',
    description: 'Hablas directamente con quien diseña y programa tu sitio web. Comunicación clara, ágil y sin tecnicismos innecesarios ni ejecutivos de cuentas.'
  },
  {
    icon: 'Zap',
    title: 'Velocidad y optimización móvil',
    highlight: '< 1s Carga',
    description: 'Sitios ligeros y ultrarrápidos, pensados para cargar al instante en smartphones bajo cualquier red móvil con navegación 100% fluida.'
  },
  {
    icon: 'Target',
    title: 'Enfocado en conversión',
    highlight: '+ Leads',
    description: 'Estructuras pensadas estratégicamente para que tus visitantes hagan clic en WhatsApp, llamen o llenen tu formulario en pocos segundos.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Tú tienes el control total',
    highlight: '100% Tuyo',
    description: 'Tu sitio web y código te pertenecen al 100%. Sin ataduras obligatorias, sin licencias cautivas ni costos ocultos al terminar el desarrollo.'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Trato y comunicación',
    agencies: 'Intermediarios lentos y reuniones eternas',
    diy: 'Cero soporte o bots automáticos',
    isaac: 'Directo con el desarrollador vía WhatsApp'
  },
  {
    feature: 'Velocidad de carga real',
    agencies: 'Lenta por plugins excesivos (3s - 6s)',
    diy: 'Sobrecargada de scripts pesados (4s+)',
    isaac: 'Ultrarrápida y optimizada (< 1s, 95+ PageSpeed)'
  },
  {
    feature: 'Propiedad del sitio',
    agencies: 'A menudo con contratos de permanencia',
    diy: 'Atado a su plataforma para siempre',
    isaac: '100% de tu propiedad, sin ataduras'
  },
  {
    feature: 'Diseño y personalización',
    agencies: 'Plantillas recicladas caras',
    diy: 'Idéntico a miles de otras páginas',
    isaac: 'Diseño a medida pensado en tu negocio'
  },
  {
    feature: 'Enfoque en ventas',
    agencies: 'Mucho adorno, poca conversión',
    diy: 'Desordenado y poco claro para el cliente',
    isaac: 'Diseñado estratégicamente para generar contactos'
  }
];
