# Publicar WebsProMakers en Cloudflare Pages (gratis)

Tiempo: unos 20 minutos la primera vez. No hace falta saber programar ni instalar nada: todo se hace desde el navegador.

**Coste:** 0 €. Plan gratuito de Cloudflare Pages (noviembre 2026): 500 publicaciones al mes, ancho de banda y visitas ilimitadas para webs estáticas, hasta 20.000 archivos por web. Este proyecto tiene ~50 archivos y no usa Functions, así que no consume ningún límite de pago.

---

## Paso 1 — Descargar el proyecto
1. Descarga el ZIP `webspromakers.zip` que te he enviado.
2. Descomprímelo. Tendrás una carpeta `webspromakers` con `public/`, `docs/`, `scripts/`, `README.md` y `package.json`.
3. Rellena antes tus datos en `public/assets/js/config.js` (o hazlo después desde GitHub, ver paso 13).

## Paso 2 — Crear una cuenta gratuita en GitHub
1. Entra en https://github.com/signup
2. Email, contraseña y nombre de usuario. Verifica el email.
3. Plan **Free**.

> GitHub guarda el código. Cloudflare lo lee de ahí y publica la web cada vez que cambiáis algo.

## Paso 3 — Crear el repositorio
1. Arriba a la derecha: **+ → New repository** (o entra en https://github.com/new).
2. **Repository name:** `webspromakers`
3. Puede ser **Public** o **Private** (las dos funcionan con Cloudflare).
4. **No** marques "Add a README".
5. **Create repository**.

## Paso 4 — Subir el código
1. En el repositorio vacío, pulsa el enlace **uploading an existing file**.
2. Abre la carpeta `webspromakers` en tu ordenador, **selecciona todo su contenido** (`public`, `docs`, `scripts`, `README.md`, `package.json`) y arrástralo a la página de GitHub.
   - Arrastra el **contenido**, no la carpeta `webspromakers` en sí: `public/` tiene que quedar en la raíz del repositorio.
   - Usa Chrome o Edge: mantienen las subcarpetas al arrastrar.
3. Espera a que terminen de cargar los ~54 archivos.
4. Abajo, **Commit changes**.
5. Comprueba que en la página del repositorio ves `public`, `docs`, `scripts`, `README.md` y `package.json`.

## Paso 5 — Crear una cuenta gratuita en Cloudflare
1. https://dash.cloudflare.com/sign-up
2. Email y contraseña. Verifica el email.
3. Si te ofrece añadir un dominio, sáltalo: no lo necesitáis.

## Paso 6 — Ir a Cloudflare Pages
1. En el menú izquierdo: **Workers & Pages** (en "Compute" o "Build", según la versión del panel).
2. **Create application**.
3. ⚠️ Elige la pestaña / opción **Pages** (no "Workers"). Cloudflare muestra Workers por defecto; si no ves la pestaña, busca el enlace "Looking to deploy Pages? Get started".

## Paso 7 — Conectar GitHub
1. **Import an existing Git repository** (o "Connect to Git").
2. **Connect GitHub** → se abre GitHub → **Install & Authorize**. Puedes dar acceso solo al repositorio `webspromakers`.
3. De vuelta en Cloudflare, selecciona `webspromakers` → **Begin setup**.

## Paso 8 — Nombre del proyecto y comandos
- **Project name:** `webspromakers` → esto define la dirección `webspromakers.pages.dev`.
- **Production branch:** `main`
- **Framework preset:** `None`
- **Build command:** déjalo **vacío**. Si el panel no te deja, escribe `exit 0`.

## Paso 9 — Directorio de salida
- **Build output directory:** `public`
- **Root directory (advanced):** déjalo vacío.
- No hace falta ninguna variable de entorno.

## Paso 10 — Publicar
1. **Save and Deploy**.
2. Tarda menos de un minuto (no hay nada que compilar).
3. Cuando ponga **Success**, pulsa **Continue to project**.

## Paso 11 — Vuestra dirección .pages.dev
- Aparece arriba en el proyecto, por ejemplo `https://webspromakers.pages.dev`.
- **Si el nombre ya estaba cogido**, Cloudflare añade unas letras al final (ej. `webspromakers-3xa.pages.dev`). Mira la dirección exacta que te muestra.
- ¿Prefieres otro nombre limpio? El nombre del proyecto no se puede cambiar después: borra el proyecto (Settings → Delete project) y créalo de nuevo con otro nombre, por ejemplo `webspromakers-langkawi` o `wpm-langkawi`.
- **Si la dirección final NO es `webspromakers.pages.dev`**, haz el paso 13 para sustituirla en el código (afecta a SEO y a la vista previa en redes; la web funciona igual).

## Paso 12 — Comprobar que funciona
Abre la dirección en el móvil y en el ordenador y revisa:
- [ ] Carga la portada y el menú superior; en móvil se abre el menú ☰.
- [ ] Selector de idioma: EN / BM / ES / 中文. Recarga la página: recuerda el idioma.
- [ ] "View Demo" abre las 5 demos y cada una vuelve con "Back to WebsProMakers".
- [ ] Escanea el **QR** de la sección "Digital Menu & QR Code" con la cámara del móvil: abre la carta.
- [ ] Formulario de contacto: si lo envías vacío, salen los errores en rojo.
- [ ] Los mapas de Google se ven (contacto y demos).
- [ ] Revisa las fotos (ver README, punto 7).
- [ ] Comparte el enlace por WhatsApp: debe salir la imagen de vista previa.

## Paso 13 — Actualizar la web cuando cambiéis algo
Cada cambio que guardéis en GitHub se publica solo en ~1 minuto.

**Forma fácil (desde el navegador):**
1. En GitHub, abre el archivo (ej. `public/assets/js/config.js`).
2. Pulsa el lápiz ✏️ (**Edit this file**).
3. Cambia lo que necesites.
4. **Commit changes…** → **Commit changes**.
5. En Cloudflare → tu proyecto → **Deployments** verás la nueva publicación.

**Cambios en muchos archivos a la vez (ej. sustituir la dirección .pages.dev):**
1. En la página del repositorio, pulsa la tecla `.` (punto). Se abre un editor tipo VS Code en el navegador (github.dev).
2. Lupa de la izquierda (Buscar) → busca `webspromakers.pages.dev` → reemplaza por vuestra dirección → **Replace All**.
3. Icono de ramas (Source Control) a la izquierda → escribe un mensaje → **Commit & Push**.

**Subir fotos nuevas:** en GitHub entra en `public/assets/img/`, **Add file → Upload files**, arrastra la foto y haz commit. Luego cambia su ruta en `photos.js` (ver EDITAR.md).

**Volver atrás si algo se rompe:** Cloudflare → proyecto → Deployments → en una publicación anterior, menú `…` → **Rollback to this deployment**.

---

### Problemas típicos
| Síntoma | Causa | Solución |
|---|---|---|
| Página 404 en la portada | Output directory mal | Settings → Builds → Build output directory = `public` → Retry deployment |
| "Build failed" | Build command con algo raro | Déjalo vacío o `exit 0` |
| Se creó un "Worker" en vez de Pages | Pestaña equivocada en el paso 6 | Borra el Worker y repite eligiendo **Pages** |
| Cambié algo y no se ve | Caché del navegador (hasta 1 h para CSS/JS) | Recarga forzada: Ctrl+F5 / en móvil, ventana de incógnito |
