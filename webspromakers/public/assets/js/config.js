/* ==========================================================================
   WEBSPROMAKERS — CONFIGURACIÓN CENTRAL (edita SOLO este archivo para tus datos)
   --------------------------------------------------------------------------
   - Deja un campo vacío ("") si todavía no lo tienes: la web lo ocultará
     o mostrará "Coming soon" en vez de un dato falso.
   - WhatsApp: formato internacional SIN "+", sin espacios. Ej.: "60123456789"
   ========================================================================== */
window.WPM_CONFIG = {
  companyName: "WebsProMakers",

  // Dirección pública de la web (cámbiala si Cloudflare te da otro nombre)
  siteUrl: "https://webspromakers.pages.dev",

  contact: {
    whatsapp: "",            // Ej.: "60123456789"
    phone: "",               // Ej.: "+60 12-345 6789" (se muestra tal cual)
    email: "",               // Ej.: "hello@tudominio.com" o un Gmail
    location: "Langkawi, Malaysia"
  },

  // Redes sociales: pega la URL completa. Vacío = no se muestra.
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    linkedin: ""
  },

  // Formulario de contacto -> email gratis con Web3Forms (250 envíos/mes gratis)
  // 1) Ve a https://web3forms.com  2) Escribe tu email  3) Copia la "Access Key" aquí
  forms: {
    web3formsAccessKey: ""
  },

  // Google Analytics 4 (opcional). Ej.: "G-XXXXXXXXXX". Vacío = desactivado.
  analytics: {
    gaMeasurementId: ""
  },

  // Mapa de la sección de contacto (texto de búsqueda de Google Maps)
  map: {
    query: "Langkawi, Kedah, Malaysia"
  },

  // Idiomas disponibles (el primero es el predeterminado)
  languages: [
    { code: "en", label: "English", short: "EN" },
    { code: "ms", label: "Bahasa Melayu", short: "BM" },
    { code: "es", label: "Español", short: "ES" },
    { code: "zh", label: "中文", short: "中文" }
  ]
};
