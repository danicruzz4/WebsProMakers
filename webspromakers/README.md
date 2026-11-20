# WebsProMakers — Web oficial

Web de presentación comercial de WebsProMakers (diseño web para negocios de Langkawi), con 5 demos navegables, carta digital con QR real y 4 idiomas (English, Bahasa Melayu, Español, 中文).

**Tecnología:** HTML + CSS + JavaScript puro. Sin compilación, sin dependencias, sin servidor de pago. Se publica tal cual en Cloudflare Pages.

> Por qué no Astro/React: con esta arquitectura no hay que instalar nada ni compilar. Cloudflare solo sirve la carpeta `public/`. Menos cosas que se pueden romper y más fácil de editar para vosotros.

---

## 1. Qué hay dentro

```
webspromakers/
├── public/                      ← ESTO es la web (lo que publica Cloudflare)
│   ├── index.html               ← Página principal (textos en inglés)
│   ├── 404.html                 ← Página de error
│   ├── robots.txt, sitemap.xml  ← SEO
│   ├── _headers                 ← Seguridad y caché (Cloudflare/Netlify lo leen solos)
│   ├── site.webmanifest
│   ├── assets/
│   │   ├── css/site.css         ← Estilos de la web principal (colores en :root)
│   │   ├── css/demo-base.css    ← Base común de las demos
│   │   ├── js/config.js         ← ★ TUS DATOS: WhatsApp, email, redes, formulario, Analytics
│   │   ├── js/photos.js         ← ★ TODAS LAS FOTOS en un sitio
│   │   ├── js/i18n-site.js      ← ★ Traducciones (malayo, español, chino)
│   │   ├── js/core.js           ← Motor de idiomas, validación, fotos (no tocar)
│   │   ├── js/site.js           ← Interacciones de la web principal
│   │   ├── js/demo.js           ← Motor común de las demos
│   │   ├── js/qr.js             ← Generador de códigos QR (sin dependencias)
│   │   └── img/                 ← Logos, favicon, imagen para redes (og-image.png)
│   └── demos/
│       ├── restaurant/          ← Demo 1 + carta QR en /menu/
│       ├── hotel/               ← Demo 2
│       ├── cafe/                ← Demo 3
│       ├── tours/               ← Demo 4
│       └── shop/                ← Demo 5
├── docs/                        ← Guías (publicación, edición, integraciones, Google Sites)
├── scripts/serve.mjs            ← Servidor local (opcional)
├── scripts/check.mjs            ← Comprobador de traducciones y enlaces (opcional)
└── package.json
```

## 2. Antes de publicar (5 minutos)

Abre `public/assets/js/config.js` y rellena lo que tengáis:

| Campo | Ejemplo | Si lo dejas vacío |
|---|---|---|
| `contact.whatsapp` | `"60123456789"` | Los botones de WhatsApp llevan al formulario y avisan "coming soon" |
| `contact.email` | `"hola@gmail.com"` | Se muestra "Coming soon" |
| `social.instagram` … | URL completa | El icono no aparece |
| `forms.web3formsAccessKey` | clave de Web3Forms | El formulario valida, pero ofrece enviar por WhatsApp/email en vez de fingir un envío |
| `analytics.gaMeasurementId` | `"G-XXXXXXX"` | Sin Analytics |

Nada está inventado: si un dato falta, la web lo dice claramente.

## 3. Verla en tu ordenador (opcional)

- **Sin instalar nada:** no sirve abrir `index.html` con doble clic (las rutas empiezan por `/`). Usa una de estas dos:
- **Con Node.js:** `npm start` → abre http://localhost:8080
- **Con Python:** `cd public` y `python3 -m http.server 8080` → http://localhost:8080

Comprobación antes de publicar: `npm run check` (traducciones completas, enlaces y fotos).

## 4. Publicar gratis

- **Principal — Cloudflare Pages:** [docs/CLOUDFLARE_PAGES.md](docs/CLOUDFLARE_PAGES.md)
- Alternativa — Netlify: [docs/NETLIFY.md](docs/NETLIFY.md)
- Alternativa manual — Google Sites: [docs/GOOGLE_SITES.md](docs/GOOGLE_SITES.md)

Configuración de Cloudflare en una línea: **Framework preset: None · Build command: (vacío) · Build output directory: `public`**.

## 5. Modificar la web

[docs/EDITAR.md](docs/EDITAR.md) — textos, traducciones, fotos, colores, logo, demos, idiomas.

## 6. Integraciones que necesitan configuración

[docs/INTEGRACIONES.md](docs/INTEGRACIONES.md) — formulario (Web3Forms), WhatsApp, Google Maps, Google Analytics, Search Console, dominio propio.

## 7. Lo que debéis revisar vosotros

1. **Traducciones al malayo y chino:** están hechas con cuidado, pero pedid a un nativo que las lea antes de enseñarlas a clientes.
2. **Fotos:** vienen de Unsplash (uso comercial gratuito) y se cargan desde su servidor. No he podido comprobar desde mi entorno que cada foto cargue y encaje; revisadlas en la web publicada. Si alguna falla, se ve un fondo de color en su lugar. Lo ideal: sustituirlas por fotos vuestras de Langkawi (ver EDITAR.md).
3. **Demos:** negocios ficticios, marcados como "Concept demo" en cada página. Precios de las demos = ejemplo.
4. **Ningún precio de WebsProMakers, testimonio, estadística ni cliente inventado.**
