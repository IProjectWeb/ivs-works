module.exports = async (req, res) => {
  // Set CORS headers
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
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // keep as is
      }
    }

    const { name, email, phone, business, plan, urgency, message, planLabel } = body || {};

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Nombre y correo requeridos' });
    }

    const payload = {
      _subject: `Nueva Cotización Web - ${name} [${planLabel || plan || 'Web'}]`,
      _template: 'table',
      _captcha: 'false',
      Nombre: name,
      WhatsApp_Telefono: phone || 'No especificado',
      Correo_Cliente: email,
      Giro_o_Negocio: business || 'No especificado',
      Plan_de_Interes: planLabel || plan || 'No especificado',
      Plazo_Estimado: urgency || 'No especificado',
      Mensaje_Detalles: message || 'Sin mensaje adicional'
    };

    const response = await fetch('https://formsubmit.co/ajax/ivsworks@hotmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://ivsworks.com',
        'Referer': 'https://ivsworks.com/'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('API Contact Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
