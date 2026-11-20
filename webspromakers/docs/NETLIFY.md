# Alternativa: publicar en Netlify (gratis)

El mismo proyecto funciona en Netlify sin cambios (Netlify también lee `public/_headers`).

**Coste:** el plan Free de Netlify funciona con créditos mensuales; una web estática pequeña como esta cabe de sobra. Si algún mes se agotaran, la web se pausa hasta el mes siguiente (no cobra sin vuestro permiso).

## Opción A — Conectado a GitHub (recomendado)
1. Crea cuenta en https://app.netlify.com/signup (puedes entrar con GitHub).
2. **Add new site → Import an existing project → GitHub** → elige `webspromakers`.
3. Configuración:
   - **Branch:** `main`
   - **Base directory:** vacío
   - **Build command:** vacío
   - **Publish directory:** `public`
4. **Deploy**.
5. La dirección será algo como `nombre-aleatorio.netlify.app`. Cámbiala en **Site configuration → Change site name** → `webspromakers` → `webspromakers.netlify.app` (si está libre).
6. Sustituye `webspromakers.pages.dev` por vuestra dirección de Netlify (ver CLOUDFLARE_PAGES.md, paso 13).

## Opción B — Arrastrar y soltar (sin GitHub)
1. Entra en https://app.netlify.com/drop
2. Arrastra **la carpeta `public`** (no la carpeta del proyecto).
3. Te da una dirección `.netlify.app` al momento. Crea cuenta para conservarla.
4. Para actualizar: Site → **Deploys** → arrastra otra vez la carpeta `public`.
