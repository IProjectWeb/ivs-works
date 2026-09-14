export type PlanType =
  | 'basico'
  | 'intermedio'
  | 'premium'
  | 'mant_esencial'
  | 'mant_estandar'
  | 'mant_premium'
  | 'mant_basico'
  | 'mant_pro'
  | 'mini_menu'
  | 'mini_catalogo'
  | 'mini_tarjeta'
  | 'mini_sitio'
  | 'custom';

export interface QuickServiceItem {
  id: PlanType;
  emoji: string;
  title: string;
  description: string;
  delivery?: string;
  price: string;
  priceNum: number;
}

export interface PlanItem {
  id: PlanType;
  name: string;
  category: 'web' | 'maintenance';
  badge?: string;
  popular?: boolean;
  price: string;
  priceNum: number;
  period?: string;
  description: string;
  pages: string;
  deliveryTime?: string;
  features: string[];
  ctaText: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'landing' | 'corporate' | 'premium';
  categoryLabel: string;
  clientType: string;
  tagline: string;
  description: string;
  impactMetrics?: { label: string; value: string }[];
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  mediaType?: 'image' | 'video';
  liveUrl?: string;
  devicePreview?: 'desktop' | 'mobile';
  gallery?: {
    url: string;
    title: string;
    caption: string;
  }[];
  colorScheme: {
    primary: string;
    accent: string;
    bg: string;
  };
  features: string[];
  demoUrl?: string;
  mockupData: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    stats: { label: string; value: string }[];
    mockSections: string[];
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pagos' | 'tiempos' | 'soporte';
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  plan: PlanType;
  businessType: string;
  budgetRange: string;
  urgency: string;
  features: string[];
  message: string;
}
