# Integraciones: qué funciona ya y qué hay que configurar

| Función | Estado | Coste | Qué hacer |
|---|---|---|---|
| Web, demos, idiomas, QR, mapas | ✅ Funciona al publicar | Gratis | Nada |
| Formulario de contacto → email | ⚙️ Falta 1 clave | Gratis (250 envíos/mes) | Web3Forms, abajo |
| WhatsApp | ⚙️ Falta vuestro número | Gratis | `config.js` |
| Google Analytics | Opcional | Gratis | Abajo |
| Google Search Console | Opcional, recomendado | Gratis | Abajo |
| Dominio propio (.com/.my) | No incluido | De pago (registro del dominio) | No necesario: usáis `.pages.dev` |

Ningún servicio de pago es necesario. No hay backend, base de datos ni Functions.

## 1. Formulario de contacto (Web3Forms)
Cloudflare Pages no envía emails por sí solo. Web3Forms recibe el formulario y os lo manda al correo.
- Plan gratuito: 250 envíos al mes, sin tarjeta.
1. Entra en https://web3forms.com → **Create your Access Key** → escribe el email donde queréis recibir los mensajes.
2. Os llega la clave por email (formato `xxxxxxxx-xxxx-…`).
3. Pégala en `config.js`: `web3formsAccessKey: "tu-clave"`.
4. Publica y prueba el formulario: llega un email con todos los campos (nombre, negocio, tipo, email, teléfono, tipo de web, mensaje e idioma del visitante).

La clave es pública por diseño (solo sirve para enviaros mensajes, no da acceso a vuestra cuenta). El formulario incluye un campo trampa anti-spam.

**Mientras no haya clave:** el formulario valida igual y, al enviarlo, ofrece mandar los mismos datos por WhatsApp o email (si los habéis puesto en `config.js`). Nunca muestra un "enviado" falso.

## 2. WhatsApp
`config.js` → `contact.whatsapp: "60123456789"` (código de país 60 + número, sin `+`, sin espacios ni guiones).
Todos los botones de WhatsApp de la web principal abren un chat con un mensaje ya escrito en el idioma del visitante.
Las demos usan un aviso "esto es una demo" en vez de abrir WhatsApp, porque los negocios son ficticios.

## 3. Google Maps
Funciona sin clave ni cuenta (mapa incrustado estándar de Google).
- Mapa de vuestra sección de contacto: `config.js` → `map.query` (texto de búsqueda, ej. `"Pantai Cenang, Langkawi"` o el nombre de vuestro negocio cuando tengáis ficha en Google).
- Mapas de las demos: atributo `data-map="…"` en cada HTML.

## 4. Google Analytics 4 (opcional)
1. https://analytics.google.com → crear propiedad → flujo de datos **Web** → URL de vuestra web.
2. Copia el **ID de medición** (`G-XXXXXXXXXX`) en `config.js` → `analytics.gaMeasurementId`.
3. Ya está: la web solo carga Analytics si hay ID.
Nota: si activáis Analytics, conviene añadir una línea de privacidad en el pie indicando que usáis cookies de analítica.

## 5. Google Search Console (recomendado)
Sirve para decirle a Google que vuestra web existe y ver por qué búsquedas aparecéis.
1. https://search.google.com/search-console → **Añadir propiedad** → elige **Prefijo de URL** → `https://webspromakers.pages.dev/` (con un `.pages.dev` no podéis usar la opción "Dominio").
2. Método de verificación: **Etiqueta HTML**. Copia la etiqueta `<meta name="google-site-verification" content="…">`.
3. En `public/index.html` hay un comentario que dice "Google Search Console: pega aquí…". Pega la etiqueta justo debajo, guarda y espera a que se publique.
4. Pulsa **Verificar**.
5. Menú **Sitemaps** → escribe `sitemap.xml` → **Enviar**.

Complementad con un **Google Business Profile** (gratis) para WebsProMakers y enlazad la web desde allí.

## 6. SEO incluido
- Título, descripción y Open Graph (vista previa al compartir) en cada página; título y descripción cambian con el idioma.
- Datos estructurados `ProfessionalService` (sin datos inventados).
- `sitemap.xml`, `robots.txt`, URLs limpias (`/demos/hotel/`), textos alternativos en imágenes, carga diferida de fotos, sin librerías pesadas.
- Términos usados de forma natural: website design Langkawi, restaurant websites, hotel website design Langkawi, business websites.
- Nadie puede garantizar posiciones en Google. La web parte de una buena base técnica.

## 7. Dominio propio (en el futuro)
Si algún día compráis `webspromakers.com` o `.my`: Cloudflare → proyecto → **Custom domains → Set up a domain**. El alojamiento sigue siendo gratis; solo pagáis el dominio. Después, sustituid `webspromakers.pages.dev` por el dominio nuevo en todo el proyecto (ver CLOUDFLARE_PAGES.md, paso 13).
