# Alternativa manual: versión simplificada en Google Sites

Úsala solo como plan B. Google Sites es gratis (`sites.google.com/view/webspromakers`), pero es un editor de bloques: no permite JavaScript propio dentro de la página.

## Qué NO se puede reproducir directamente
| Función de la web principal | En Google Sites |
|---|---|
| Selector de idioma en la misma página | ❌ → Crear una página por idioma (ver "Traducciones") |
| 5 demos navegables | ❌ → Capturas + botón que abre las demos publicadas en Cloudflare/Netlify |
| QR que se genera solo + simulación de escaneo | ❌ → Imagen QR creada fuera (ver "Menú QR") |
| Antes/después con deslizador | ❌ → Dos imágenes lado a lado |
| Demo interactiva de WhatsApp | ❌ → Imagen + botón de WhatsApp real |
| Formulario propio con validación | ⚠️ → Google Forms incrustado (valida campos obligatorios y email) |
| Animaciones, efectos hover, diseño a medida | ⚠️ → Solo temas y estilos de Google Sites |
| SEO avanzado (Open Graph, datos estructurados, sitemap propio) | ⚠️ → Solo título, descripción y favicon |
| Mapa, botones, acordeón de FAQ, carrusel de imágenes | ✅ |

## Preparación
1. https://sites.google.com → **+ En blanco**.
2. Nombre del sitio y título: `WebsProMakers`.
3. **Temas** → "Simple" o "Vision" → color personalizado **#1D4B3A** (verde), fuente con estilo "Moderno".
4. **Logo:** Configuración → Marca → sube `public/assets/img/logo.svg` convertido a PNG (o `icon-512.png`). Favicon: `favicon-32.png`.
5. **Navegación:** Configuración → Navegación → modo **Superior**.

## Estructura de páginas
- **Home** (todas las secciones en una sola página larga, igual que la web)
- **Our Work** (capturas de las 5 demos)
- **Contact**
- Páginas de idioma: **Bahasa Melayu**, **Español**, **中文** (copias de Home traducidas; ver abajo)

## Orden de secciones en Home (con textos)
Inserta cada sección con **Insertar → Diseños** (texto + imagen) o bloques de texto. Alterna fondos con el icono de paleta de cada sección (Estilo 1, 2, 3).

### 1. Portada (Estilo 3, imagen de fondo)
- Imagen: composición de webs en portátil/tablet/móvil (haz una captura de la portada publicada en Cloudflare).
- **Título:** Your Business Deserves More Than Just Social Media.
- **Subtítulo:** Professional websites designed to help Langkawi businesses attract more customers, build trust and grow online.
- **Botones** (Insertar → Botón): `Get Your Website` → página Contact · `Explore Our Work` → página Our Work.

### 2. About Us
- **Título:** We build digital tools that help local businesses grow.
- **Texto:** WebsProMakers designs and develops custom websites for restaurants, hotels, cafés, shops and tour operators in Langkawi. Every site is built around one business: its customers, its products and the way it works. A good website is more than a page on the internet. It is where visitors check your menu before they come, compare your rooms, find your location and message you directly.
- **Lista:** Strengthen your professional image · Present your products and services clearly · Be easier to find online · Make it simple for customers to contact you · Offer information in several languages.
- **3 pilares** (diseño de 3 columnas):
  - Professionalism — A clean, careful design that reflects the quality of what you offer.
  - Visibility — A place on the web that you own, which customers can find, share and return to.
  - Business Growth — Clear information and direct contact options that turn interest into enquiries.

### 3. Why does your business need a website?
- **Subtítulo:** Social media is great for updates. A website gives your business a permanent, organised home that you control.
- **8 tarjetas** (2 diseños de 4 columnas, con iconos PNG):
  1. More Visibility — Make it easier for tourists and residents to find your business when they search online.
  2. Build Trust — A professional website shows customers that your business is established and reliable.
  3. Attract More Customers — Help new visitors discover your place, even before they arrive on the island.
  4. Available 24/7 — Your opening hours, menu and location are there whenever customers look, day or night.
  5. Better Customer Experience — All your information organised in one place, instead of scattered across posts and chats.
  6. Stand Out From Competitors — Give customers a clear reason to choose you over similar places nearby.
  7. Direct Communication — Make enquiries, bookings and messages easy with WhatsApp, forms and one-tap calls.
  8. Showcase Your Business — Show your photos, products, menus and services the way they deserve to be seen.
- **Frase destacada (Estilo 3):** Your website is your digital storefront. Make it count.

### 4. Our Services (12 bloques, 3 columnas)
Custom Website Design — Websites designed around your brand, your customers and your goals. No generic templates. · Restaurant Websites — Menus, food photos, prices, opening hours, location and contact, all in one place. · Hotel & Accommodation Websites — For hotels, villas, resorts and guesthouses: rooms, facilities, gallery and availability requests. · Business Websites — Professional sites for shops, companies and local services. · Mobile Optimisation — Designed first for phones, then adapted to tablets and computers. · Multilingual Websites — Your content in the languages your international visitors speak. · WhatsApp Integration — One tap opens a WhatsApp chat with your business, with a ready-written message. · Google Maps Integration — An interactive map and directions so customers find you easily. · Booking & Enquiry Features — Reservation, availability and enquiry forms set up for the way you work. · SEO Optimisation — Basic search engine optimisation: structure, titles, descriptions, image text and fast loading. · Digital Menu & QR Code — A mobile menu your customers open by scanning a QR code at the table. · Website Maintenance — Updates and maintenance options, agreed according to each project.

### 5. Our Work → resumen + botón a la página Our Work
- **Título:** See what your website could look like
- **Texto:** Five concept demos, each with its own design. These are fictitious businesses created as concept examples. They are not client projects.

### 6. Digital Menu & QR Code
- **Texto:** Let your customers explore your menu directly from their phones. Beautiful food photography, clear prices and multilingual options — all in one place.
- **Pasos:** 1. Scan the QR code at the table · 2. The menu opens instantly on the phone · 3. Browse categories, photos and prices · 4. Switch language with one tap.
- **QR:** genera una imagen QR gratis que apunte a `https://webspromakers.pages.dev/demos/restaurant/menu/` (por ejemplo, con el generador QR de Chrome: menú Compartir → Crear código QR) e insértala. Requiere que la web de Cloudflare/Netlify esté publicada.

### 7. Google visibility
- **Título:** Be easier to find on Google
- **Texto:** Most visitors search before they decide where to eat, stay or book. A website gives Google, and your customers, clear and complete information about your business.
- Puntos: How customers find you · Present your offer properly · Google Maps · Contact information · Basic SEO · Works with Google Business Profile (textos completos en `index.html`, sección GOOGLE).
- **Nota obligatoria:** No one can guarantee top positions on Google. We build your site following good practices so it starts from a solid foundation.
- Imagen: captura del buscador ficticio de la web principal.

### 8. WhatsApp & bookings
- **Título:** From visitor to customer in one tap
- **Texto:** Your website should make it effortless to contact you. We add the options that fit your business: WhatsApp button, contact form, booking requests, availability check and information requests. Booking features are configured for each project.
- Imagen: captura de la demo de chat de la web principal.

### 9. Before & After (diseño de 2 columnas con imagen)
- **Before:** Information scattered across posts, stories and chats · Menu and prices hard to find · The same questions answered again and again · Only one language · Visibility depends on the platform’s algorithm.
- **After:** Careful design that reflects your brand · Your best photos, presented properly · Organised information · Full menu or catalogue · Location with Google Maps · WhatsApp contact in one tap · Several languages.
- Nota: Conceptual comparison with a fictitious business.

### 10. Who we work with (8 imágenes con título y texto, 4 columnas)
Restaurants · Cafés & Bars · Hotels & Resorts · Villas & Guesthouses · Tour & Activity Companies · Shops & Local Businesses · Beauty & Wellness · Other Local Businesses (descripciones en `index.html`, sección WHO WE WORK WITH).

### 11. Why choose WebsProMakers (8 puntos, 2 columnas)
Personalised Designs · Local Business Focus · Mobile First · Multilingual Possibilities · Direct Communication · Tailored Solutions · Professional Presentation · Practical Features (textos en `index.html`, sección WHY CHOOSE US).

### 12. How it works (4 columnas)
Step 1 Let’s Talk — We meet you and learn about your business, your customers and your goals. · Step 2 Design & Planning — We prepare a personalised proposal with structure, features and design direction. · Step 3 Development — We design and build your website and share it with you for feedback. · Step 4 Launch — We publish your website and check that everything works on every device.

### 13. FAQ
**Insertar → Texto plegable** (acordeón), uno por pregunta. Copia las 12 preguntas y respuestas de `index.html` (sección FAQ). Respuesta del precio, literal: *Every business is different. Our websites are tailored to each client's needs, design preferences and required features. Contact us to receive a personalised proposal.*

### 14. Llamada final (Estilo 3)
- **Título:** Ready to Take Your Business to the Next Level?
- **Subtítulo:** Let’s create a professional online presence that helps your business stand out in Langkawi.
- **Botón:** `Start Your Project` → página Contact.

### 15. Pie de página
Configuración → Pie de página: *WebsProMakers · Website design and development for restaurants, hotels, cafés, shops and tour companies in Langkawi, Malaysia. · © 2026 WebsProMakers. The demos are fictitious concept examples.*

## Página Our Work
Para cada demo: captura (móvil y escritorio), sector, descripción (de `index.html`, sección OUR WORK), etiqueta "Concept demo" y botón **View Demo** → URL de la demo publicada en Cloudflare (ej. `https://webspromakers.pages.dev/demos/hotel/`).

## Página Contact — formulario
1. Crea un Google Form: **Full Name** (obligatoria) · **Business Name** (obligatoria) · **Business Type** (desplegable: Restaurant, Café / Bar, Hotel / Resort, Villa / Guesthouse, Tours & Activities, Shop, Other) · **Email Address** (obligatoria; validación de respuesta → Texto → Correo electrónico) · **Phone / WhatsApp Number** (obligatoria) · **What type of website are you looking for?** · **Tell us about your project** (párrafo, obligatoria).
2. Configuración del formulario → recibir notificaciones por email de respuestas nuevas.
3. En Sites: **Insertar → Formularios** → elige el formulario.
4. Botón grande `Let’s Build Your Website` encima.

## Enlaces de WhatsApp
Botón (Insertar → Botón) con este enlace:
`https://wa.me/60123456789?text=Hi%20WebsProMakers!%20I%27d%20like%20information%20about%20a%20website%20for%20my%20business.`
Sustituye `60123456789` por vuestro número (60 + número, sin + ni espacios). Los espacios del mensaje se escriben `%20`.

## Mapa
**Insertar → Mapa** → busca "Langkawi" (o vuestra dirección).

## Imágenes recomendadas
- Portada: captura de las webs de demostración en dispositivos.
- Secciones: fotos reales de negocios de Langkawi (restaurantes, hoteles, playa) hechas por vosotros o de Unsplash (licencia gratuita). Mismas claves de `photos.js` como referencia.
- Tamaño: 1600 px de ancho máximo; formato JPG/WebP.
- Escribe el texto alternativo de cada imagen (clic en la imagen → ⋮ → Texto alternativo).

## Traducciones
Google Sites no tiene selector de idioma. Opción práctica:
1. Duplica la página Home (⋮ → Duplicar página) para cada idioma: `Bahasa Melayu`, `Español`, `中文`.
2. Sustituye los textos con los de `public/assets/js/i18n-site.js` (están ordenados por clave: `hero.title`, `about.title`…, en los bloques `ms`, `es`, `zh`).
3. Añade en la parte superior de cada página una fila de botones: `EN · BM · ES · 中文` enlazando a cada versión.
