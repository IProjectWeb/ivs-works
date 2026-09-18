/**
 * IVS WORKS — Serverless Contact & Quote API Endpoint
 * Handles form submissions with zero client-side credentials exposure.
 * Powered by Resend (High-deliverability transactional email API).
 */

module.exports = async (req, res) => {
  // Enable CORS for frontend requests
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, business, plan, planLabel, urgency, message } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Nombre y correo son requeridos.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Correo electrónico inválido.' });
    }

    const selectedPlan = planLabel || plan || 'Sitio Web';
    const clientPhone = phone ? phone.trim() : 'No especificado';
    const cleanPhoneDigits = clientPhone.replace(/\D/g, '');
    const waLink = cleanPhoneDigits.length >= 7 
      ? `https://wa.me/${cleanPhoneDigits.startsWith('507') ? cleanPhoneDigits : '507' + cleanPhoneDigits}`
      : null;

    // Beautiful Branded HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d0e12; color: #f4f4f5; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #18181b; border: 1px solid #27272a; border-radius: 12px; overflow: hidden; }
    .header { background: #09090b; padding: 24px; border-bottom: 1px solid #27272a; text-align: center; }
    .logo-text { font-size: 20px; font-weight: 800; letter-spacing: 2px; color: #22d3ee; text-transform: uppercase; }
    .badge { display: inline-block; background: rgba(34, 211, 238, 0.15); color: #22d3ee; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; margin-top: 6px; }
    .body-content { padding: 24px; }
    .title { font-size: 18px; font-weight: 700; color: #ffffff; margin: 0 0 16px 0; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .info-table td { padding: 10px 12px; border-bottom: 1px solid #27272a; font-size: 14px; }
    .info-label { color: #a1a1aa; font-weight: 600; width: 35%; }
    .info-value { color: #ffffff; font-weight: 500; }
    .msg-box { background: #09090b; border: 1px solid #27272a; border-radius: 8px; padding: 14px; margin-top: 14px; font-size: 14px; color: #e4e4e7; line-height: 1.6; }
    .actions { display: flex; gap: 12px; margin-top: 24px; }
    .btn { display: inline-block; padding: 12px 20px; border-radius: 6px; font-size: 13px; font-weight: 700; text-decoration: none; text-align: center; }
    .btn-wa { background: #22c55e; color: #ffffff; }
    .btn-email { background: #22d3ee; color: #000000; }
    .footer { background: #09090b; padding: 16px; border-top: 1px solid #27272a; text-align: center; font-size: 11px; color: #71717a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-text">IVS WORKS</div>
      <div class="badge">Nueva Solicitud de Cotización</div>
    </div>
    <div class="body-content">
      <h2 class="title">Datos del Prospecto</h2>
      <table class="info-table">
        <tr>
          <td class="info-label">Nombre del Cliente:</td>
          <td class="info-value"><strong>${name}</strong></td>
        </tr>
        <tr>
          <td class="info-label">Correo Electrónico:</td>
          <td class="info-value"><a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="info-label">Teléfono / WhatsApp:</td>
          <td class="info-value">
            ${clientPhone}
            ${waLink ? `<br><a href="${waLink}" style="color: #22c55e; font-size: 12px; text-decoration: none; font-weight: bold;">➔ Abrir chat en WhatsApp</a>` : ''}
          </td>
        </tr>
        <tr>
          <td class="info-label">Giro / Tipo de Negocio:</td>
          <td class="info-value">${business || 'No especificado'}</td>
        </tr>
        <tr>
          <td class="info-label">Plan de Interés:</td>
          <td class="info-value"><span style="color: #22d3ee; font-weight: bold;">${selectedPlan}</span></td>
        </tr>
        <tr>
          <td class="info-label">Plazo Deseado:</td>
          <td class="info-value">${urgency || 'No especificado'}</td>
        </tr>
      </table>

      <div style="font-size: 13px; font-weight: 700; color: #a1a1aa; text-transform: uppercase;">Mensaje / Detalles:</div>
      <div class="msg-box">
        ${message ? message.replace(/\n/g, '<br>') : '<em>Sin detalles adicionales</em>'}
      </div>

      <div style="margin-top: 24px; text-align: center;">
        ${waLink ? `<a href="${waLink}" class="btn btn-wa" style="margin-right: 8px;">Contactar por WhatsApp</a>` : ''}
        <a href="mailto:${email}?subject=Propuesta%20de%20Desarrollo%20Web%20-%20IVS%20WORKS" class="btn btn-email">Responder por Correo</a>
      </div>
    </div>
    <div class="footer">
      Enviado automáticamente desde el formulario web de <strong>ivsworks.com</strong>
    </div>
  </div>
</body>
</html>
    `.trim();

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'ivsworks@hotmail.com';
    const backupRecipient = process.env.BACKUP_CONTACT_EMAIL || 'vergaraselles@gmail.com';

    // 1. Primary Transport: Resend API
    if (apiKey) {
      const resendPayload = {
        from: process.env.RESEND_FROM || 'IVS WORKS <onboarding@resend.dev>',
        to: [recipientEmail, backupRecipient],
        reply_to: email,
        subject: `Nueva Cotización Web - ${name} [${selectedPlan}]`,
        html: htmlContent
      };

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resendPayload)
      });

      const resendJson = await resendRes.json();

      if (resendRes.ok) {
        return res.status(200).json({ success: true, message: 'Email enviado con éxito por Resend.', id: resendJson.id });
      } else {
        console.error('Resend API returned error:', resendJson);
        // If Resend failed (e.g. unverified domain or sandbox email restriction), continue to fallback
      }
    }

    // 2. Server-side EmailJS REST fallback (works without exposing client tokens to blockers)
    const emailJsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://ivsworks.com',
        'Referer': 'https://ivsworks.com/'
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID || 'service_bcii6io',
        template_id: process.env.EMAILJS_TEMPLATE_ID || 'template_r5zydwk',
        user_id: process.env.EMAILJS_PUBLIC_KEY || 'ErJYv0gW8oIuOzvjp',
        template_params: {
          to_email: recipientEmail,
          to_name: 'Isaac Vergara - IVS WORKS',
          name,
          from_name: name,
          email,
          reply_to: email,
          phone: clientPhone,
          business: business || 'No especificado',
          plan: selectedPlan,
          urgency: urgency || 'No especificado',
          message: message || 'Sin mensaje adicional',
          subject: `Nueva Cotización Web - ${name} [${selectedPlan}]`
        }
      })
    });

    if (emailJsRes.ok) {
      return res.status(200).json({ success: true, message: 'Email enviado con éxito (Backend Serverless).' });
    }

    throw new Error('Todos los servicios de entrega del backend fallaron.');
  } catch (err) {
    console.error('Backend Contact API Error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Error interno en el servidor.' });
  }
};
