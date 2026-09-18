/**
 * Google Analytics (GA4) Integration Helper
 * 
 * Supports measuring page views and events.
 * Uses VITE_GA_MEASUREMENT_ID from environment or default tag.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || 'G-XXXXXXXXXX';

/**
 * Initializes Google Analytics gtag.js script in document head
 */
export function initGA(measurementId: string = GA_MEASUREMENT_ID) {
  if (typeof window === 'undefined') return;

  // Don't inject twice
  if (document.getElementById('google-analytics-script')) return;

  // Create dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
  });

  // Inject Script
  const script = document.createElement('script');
  script.id = 'google-analytics-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

/**
 * Send custom event to Google Analytics
 */
export function trackEvent(
  action: string,
  params?: Record<string, any>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}

/**
 * Track specific user actions (conversions, clicks)
 */
export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
  });
}

export function trackQuoteSubmit(plan: string, method: string) {
  trackEvent('generate_lead', {
    event_category: 'lead_generation',
    plan_selected: plan,
    contact_method: method,
  });
}
