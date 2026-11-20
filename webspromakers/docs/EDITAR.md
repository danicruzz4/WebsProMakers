# Cómo modificar la web

Todo se puede editar desde GitHub en el navegador (lápiz ✏️ → Commit). Cloudflare publica el cambio en ~1 minuto.

## Datos de contacto, redes, formulario, Analytics
`public/assets/js/config.js` — único archivo para vuestros datos. Ver la tabla del README.

## Textos
- **Inglés (idioma por defecto):** directamente en `public/index.html`. Busca la frase y cámbiala.
- **Malayo, español, chino:** `public/assets/js/i18n-site.js`. Cada texto tiene una clave, por ejemplo:
  - En `index.html`: `<h1 data-i18n="hero.title">Your Business Deserves…</h1>`
  - En `i18n-site.js`: `"hero.title": "Tu negocio merece algo más que redes sociales."`
- Si cambias un texto en inglés, cambia también la misma clave en los otros 3 idiomas.
- Nunca borres el atributo `data-i18n="…"`: es lo que conecta el texto con sus traducciones.
- Comprobación: `npm run check` avisa si falta alguna traducción.

## Fotos
`public/assets/js/photos.js` — lista de todas las fotos con un nombre:
```js
"rest-interior": "u:1517248135467-4c7edcad34c4",   // foto de Unsplash
```
Para usar una foto vuestra:
1. Optimízala antes: formato **WebP** o JPG, ancho máx. 1600 px, < 300 KB (gratis en https://squoosh.app).
2. En GitHub, entra en la carpeta `public/assets/img/` → **Add file → Upload files** → arrastra la foto → **Commit changes**.
3. Cambia la línea en `photos.js`: `"rest-interior": "/assets/img/mi-restaurante.webp",`

Las fotos de la web principal y de las demos salen de este mismo archivo. Los productos de la tienda que no tienen foto usan ilustraciones propias en `demos/shop/img/`.

## Colores y tipografías
- Web principal: `public/assets/css/site.css`, bloque `:root` al principio (`--green`, `--ink`, `--sand`, `--leaf`, `--blue`…).
- Cada demo: `public/demos/<demo>/style.css`, bloque `:root`.
- Tipografías: enlace de Google Fonts en el `<head>` de cada HTML + variables `--font-head` y `--font`.

## Logotipo
- En la web, el logo es un icono SVG (`<symbol id="i-logo">` en `index.html`) + el texto "Webs**Pro**Makers".
- Archivos para usar fuera de la web (tarjetas, redes, presentaciones): `public/assets/img/`
  - `logo.svg` → fondo claro · `logo-white.svg` → fondo oscuro · `logo-mark.svg` → solo el icono
  - `icon-512.png` → foto de perfil de redes · `favicon.svg` → icono de la pestaña
- Si cambiáis el logo, sustituid esos archivos con el mismo nombre.

## Servicios, secciones, FAQ
En `index.html`, cada bloque está marcado con un comentario, ej. `<!-- ================= SERVICES ================= -->`. Para añadir un servicio, copia un `<article class="card svc">…</article>`, cambia el texto y crea una clave nueva (ej. `svc.13t`, `svc.13d`) en los 3 idiomas de `i18n-site.js`.

## Demos
| Demo | Contenido editable |
|---|---|
| Restaurante | Carta: `demos/restaurant/menu-data.js` (la usan la web y la carta QR) · textos: `i18n.js` |
| Hotel | Habitaciones y precios: `demos/hotel/hotel.js` · textos: `i18n.js` |
| Café | Carta: `demos/cafe/cafe.js` |
| Excursiones | Excursiones y precios: `demos/tours/tours.js` |
| Tienda | Productos y categorías: `demos/shop/shop.js` |

**Truco comercial:** duplicad una demo para un cliente concreto (copiad la carpeta `demos/restaurant` como `demos/nombre-cliente`), cambiad nombre, carta y fotos, y enseñadle "su" web en la reunión. Quitad el enlace del menú si no queréis que sea pública: basta con no enlazarla desde la portada (y añadid `<meta name="robots" content="noindex">` en su `<head>`).

## Añadir un idioma (ej. tailandés)
1. `config.js` → `languages`: añade `{ code: "th", label: "ไทย", short: "TH" }`.
2. `i18n-site.js`: copia el bloque `add("es", {…})` completo, cambia `"es"` por `"th"` y traduce los valores.
3. Repite en `assets/js/demo.js` (bloque de textos comunes) y en el `i18n.js` de cada demo.
4. `npm run check` te dirá qué falta.
