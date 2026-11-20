/* ==========================================================================
   WEBSPROMAKERS — Motor común de las demos
   - Textos comunes en 4 idiomas
   - Modal "esto es una demo" (WhatsApp, redes, llamadas, formularios)
   - Pestañas, filtros, galería, menú móvil
   Cada demo registra su propio contenido con DEMO.onRender(fn)
   ========================================================================== */
(function () {
  "use strict";
  var W = window.WPM, add = W.addStrings, t = W.t, $all = W.$all;

  add("en", {
    "demo.banner": "Concept demo by WebsProMakers · Fictitious business",
    "demo.back": "Back to WebsProMakers",
    "demo.isDemo": "Demo",
    "demo.title.wa": "WhatsApp",
    "demo.title.form": "Request ready",
    "demo.title.social": "Social media",
    "demo.title.call": "Phone call",
    "demo.title.email": "Email",
    "demo.wa": "On a real website, this button opens WhatsApp with the business and this message ready to send:",
    "demo.social": "On a real website, this icon opens the business’s social media profile.",
    "demo.call": "On a real website, this button calls the business directly with one tap.",
    "demo.email": "On a real website, this opens an email to the business.",
    "demo.form": "This is a demo, so nothing has been sent. On a real website, the business would receive this request by email or WhatsApp:",
    "demo.cta": "Would you like this for your business?",
    "demo.ctaBtn": "Talk to WebsProMakers",
    "demo.close": "Close",
    "demo.menu": "Menu",
    "demo.mapNote": "The map shows the area. This business is fictitious.",
    "demo.samplePrices": "Sample prices for demonstration.",
    "demo.openMaps": "Open in Google Maps",
    "f.name": "Name", "f.phone": "Phone / WhatsApp", "f.email": "Email", "f.date": "Date", "f.time": "Time", "f.guests": "Guests",
    "f.message": "Message (optional)", "f.checkin": "Check-in", "f.checkout": "Check-out", "f.room": "Room type", "f.choose": "Choose…",
    "f.adults": "Adults", "f.children": "Children", "f.tour": "Tour", "f.hotel": "Hotel for pick-up (optional)",
    "val.required": "Please fill in this field.", "val.select": "Please choose an option.", "val.email": "Please enter a valid email address.",
    "val.phone": "Please enter a valid phone number, e.g. +60 12 345 6789.", "val.number": "Please enter a valid number.",
    "val.date": "Please choose a date from today onwards.", "val.after": "This date must be after the first one.", "val.short": "Please write a little more."
  });
  add("ms", {
    "demo.banner": "Demo konsep oleh WebsProMakers · Perniagaan rekaan",
    "demo.back": "Kembali ke WebsProMakers", "demo.isDemo": "Demo",
    "demo.title.wa": "WhatsApp", "demo.title.form": "Permintaan sedia", "demo.title.social": "Media sosial", "demo.title.call": "Panggilan telefon", "demo.title.email": "E-mel",
    "demo.wa": "Di laman web sebenar, butang ini membuka WhatsApp dengan perniagaan dan mesej ini sedia untuk dihantar:",
    "demo.social": "Di laman web sebenar, ikon ini membuka profil media sosial perniagaan.",
    "demo.call": "Di laman web sebenar, butang ini terus menghubungi perniagaan dengan satu sentuhan.",
    "demo.email": "Di laman web sebenar, ini membuka e-mel kepada perniagaan.",
    "demo.form": "Ini ialah demo, jadi tiada apa-apa dihantar. Di laman web sebenar, perniagaan akan menerima permintaan ini melalui e-mel atau WhatsApp:",
    "demo.cta": "Mahukan ini untuk perniagaan anda?", "demo.ctaBtn": "Hubungi WebsProMakers", "demo.close": "Tutup", "demo.menu": "Menu",
    "demo.mapNote": "Peta menunjukkan kawasan. Perniagaan ini rekaan.", "demo.samplePrices": "Harga contoh untuk demonstrasi.", "demo.openMaps": "Buka di Google Maps",
    "f.name": "Nama", "f.phone": "Telefon / WhatsApp", "f.email": "E-mel", "f.date": "Tarikh", "f.time": "Masa", "f.guests": "Tetamu",
    "f.message": "Mesej (pilihan)", "f.checkin": "Daftar masuk", "f.checkout": "Daftar keluar", "f.room": "Jenis bilik", "f.choose": "Pilih…",
    "f.adults": "Dewasa", "f.children": "Kanak-kanak", "f.tour": "Lawatan", "f.hotel": "Hotel untuk dijemput (pilihan)",
    "val.required": "Sila isi ruangan ini.", "val.select": "Sila pilih satu pilihan.", "val.email": "Sila masukkan alamat e-mel yang sah.",
    "val.phone": "Sila masukkan nombor telefon yang sah, cth. +60 12 345 6789.", "val.number": "Sila masukkan nombor yang sah.",
    "val.date": "Sila pilih tarikh mulai hari ini.", "val.after": "Tarikh ini mesti selepas tarikh pertama.", "val.short": "Sila tulis sedikit lagi."
  });
  add("es", {
    "demo.banner": "Demo conceptual de WebsProMakers · Negocio ficticio",
    "demo.back": "Volver a WebsProMakers", "demo.isDemo": "Demo",
    "demo.title.wa": "WhatsApp", "demo.title.form": "Solicitud lista", "demo.title.social": "Redes sociales", "demo.title.call": "Llamada", "demo.title.email": "Email",
    "demo.wa": "En una web real, este botón abre WhatsApp con el negocio y este mensaje listo para enviar:",
    "demo.social": "En una web real, este icono abre el perfil del negocio en redes sociales.",
    "demo.call": "En una web real, este botón llama al negocio con un solo toque.",
    "demo.email": "En una web real, esto abre un email dirigido al negocio.",
    "demo.form": "Esto es una demo, así que no se ha enviado nada. En una web real, el negocio recibiría esta solicitud por email o WhatsApp:",
    "demo.cta": "¿Quieres esto para tu negocio?", "demo.ctaBtn": "Habla con WebsProMakers", "demo.close": "Cerrar", "demo.menu": "Menú",
    "demo.mapNote": "El mapa muestra la zona. Este negocio es ficticio.", "demo.samplePrices": "Precios de ejemplo para la demostración.", "demo.openMaps": "Abrir en Google Maps",
    "f.name": "Nombre", "f.phone": "Teléfono / WhatsApp", "f.email": "Email", "f.date": "Fecha", "f.time": "Hora", "f.guests": "Personas",
    "f.message": "Mensaje (opcional)", "f.checkin": "Entrada", "f.checkout": "Salida", "f.room": "Tipo de habitación", "f.choose": "Elige…",
    "f.adults": "Adultos", "f.children": "Niños", "f.tour": "Excursión", "f.hotel": "Hotel de recogida (opcional)",
    "val.required": "Rellena este campo.", "val.select": "Elige una opción.", "val.email": "Introduce un email válido.",
    "val.phone": "Introduce un teléfono válido, p. ej. +60 12 345 6789.", "val.number": "Introduce un número válido.",
    "val.date": "Elige una fecha a partir de hoy.", "val.after": "Esta fecha debe ser posterior a la primera.", "val.short": "Escribe un poco más, por favor."
  });
  add("zh", {
    "demo.banner": "WebsProMakers 概念演示 · 虚构商家",
    "demo.back": "返回 WebsProMakers", "demo.isDemo": "演示",
    "demo.title.wa": "WhatsApp", "demo.title.form": "申请已生成", "demo.title.social": "社交媒体", "demo.title.call": "电话", "demo.title.email": "电子邮件",
    "demo.wa": "在真实网站上，此按钮会打开与商家的 WhatsApp 对话，并附上这条待发送的消息：",
    "demo.social": "在真实网站上，此图标会打开商家的社交媒体主页。",
    "demo.call": "在真实网站上，此按钮可一键直接拨打商家电话。",
    "demo.email": "在真实网站上，这会打开发给商家的电子邮件。",
    "demo.form": "这是演示，因此没有发送任何内容。在真实网站上，商家会通过电子邮件或 WhatsApp 收到以下申请：",
    "demo.cta": "想为您的生意也做一个吗？", "demo.ctaBtn": "联系 WebsProMakers", "demo.close": "关闭", "demo.menu": "菜单",
    "demo.mapNote": "地图显示的是所在区域。此商家为虚构。", "demo.samplePrices": "价格仅为演示示例。", "demo.openMaps": "在 Google 地图中打开",
    "f.name": "姓名", "f.phone": "电话 / WhatsApp", "f.email": "电子邮箱", "f.date": "日期", "f.time": "时间", "f.guests": "人数",
    "f.message": "留言（选填）", "f.checkin": "入住", "f.checkout": "退房", "f.room": "房型", "f.choose": "请选择…",
    "f.adults": "成人", "f.children": "儿童", "f.tour": "行程", "f.hotel": "接送酒店（选填）",
    "val.required": "请填写此项。", "val.select": "请选择一个选项。", "val.email": "请输入有效的电子邮箱。",
    "val.phone": "请输入有效的电话号码，例如 +60 12 345 6789。", "val.number": "请输入有效的数字。",
    "val.date": "请选择今天或之后的日期。", "val.after": "此日期必须晚于第一个日期。", "val.short": "请再多写一点。"
  });

  /* ---------- shared icon sprite ---------- */
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="d-wa" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M12 2.2a9.6 9.6 0 0 0-8.3 14.5L2.3 21.8l5.3-1.4A9.6 9.6 0 1 0 12 2.2zm0 17.6a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 19.8zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.1-1.3-.6-.6-1-1.2-1.3-1.8-.1-.2 0-.4.1-.5l.4-.5.3-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 4 3.5 1.5.6 2.1.7 2.8.6.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.4-.3z"/></symbol>' +
    '<symbol id="d-pin" viewBox="0 0 24 24"><path d="M12 21.5s-7-6.1-7-11.2a7 7 0 0 1 14 0c0 5.1-7 11.2-7 11.2z"/><circle cx="12" cy="10.2" r="2.5"/></symbol>' +
    '<symbol id="d-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.2 2"/></symbol>' +
    '<symbol id="d-call" viewBox="0 0 24 24"><path d="M5 3h3.5l2 5L8 9.5a11 11 0 0 0 6.5 6.5L16 13.5l5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></symbol>' +
    '<symbol id="d-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></symbol>' +
    '<symbol id="d-ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></symbol>' +
    '<symbol id="d-fb" viewBox="0 0 24 24"><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/></symbol>' +
    '<symbol id="d-tt" viewBox="0 0 24 24"><path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46M14 3c.5 2.5 2.3 4.2 5 4.5"/></symbol>' +
    '<symbol id="d-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5s1.3-6.7 3.9-9.5z"/></symbol>' +
    '<symbol id="d-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>' +
    '<symbol id="d-back" viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></symbol>' +
    '<symbol id="d-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>' +
    '<symbol id="d-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M21.5 20a6.5 6.5 0 0 0-4-6"/></symbol>' +
    '<symbol id="d-size" viewBox="0 0 24 24"><path d="M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6"/></symbol>' +
    '<symbol id="d-bed" viewBox="0 0 24 24"><path d="M3 5v14M3 14h18v5M21 14v-2.5A3.5 3.5 0 0 0 17.5 8H11v6"/><circle cx="7" cy="10.5" r="2"/></symbol>' +
    '<symbol id="d-pool" viewBox="0 0 24 24"><path d="M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M8 14V5a2 2 0 0 1 4 0M16 14V5a2 2 0 0 0-4 0M8 9h8"/></symbol>' +
    '<symbol id="d-coffee" viewBox="0 0 24 24"><path d="M4 9h13v4a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6zM17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3"/></symbol>' +
    '<symbol id="d-wifi" viewBox="0 0 24 24"><path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01"/></symbol>' +
    '<symbol id="d-car" viewBox="0 0 24 24"><path d="M5 16V11l2-5h10l2 5v5M3 16h18v3h-3v-3M6 19v-3"/><circle cx="7.5" cy="13" r=".8"/><circle cx="16.5" cy="13" r=".8"/></symbol>' +
    '<symbol id="d-spa" viewBox="0 0 24 24"><path d="M12 21c-5 0-8-3-8-7 3 0 6 1.5 8 4 2-2.5 5-4 8-4 0 4-3 7-8 7zM12 18c-2-3-2-7 0-10 2 3 2 7 0 10z"/></symbol>' +
    '<symbol id="d-bike" viewBox="0 0 24 24"><circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-8h5l3 8M10 8 8.5 5H6M12.5 16 15 8"/></symbol>' +
    '<symbol id="d-broom" viewBox="0 0 24 24"><path d="M14 4l6 6M12 6l6 6-7 7a3 3 0 0 1-4 0l-2-2a3 3 0 0 1 0-4z"/></symbol>' +
    '<symbol id="d-map" viewBox="0 0 24 24"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></symbol>' +
    '<symbol id="d-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></symbol>' +
    '<symbol id="d-shield" viewBox="0 0 24 24"><path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/></symbol>' +
    '<symbol id="d-bag" viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/></symbol>' +
    '<symbol id="d-leaf" viewBox="0 0 24 24"><path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19l8-8"/></symbol>' +
    '<symbol id="d-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>' +
    '</defs></svg>';

  /* ---------- helpers ---------- */
  function L(o) { if (o == null) return ""; if (typeof o === "string") return o; return o[W.lang()] || o.en || ""; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var renderers = [];

  /* ---------- modal ---------- */
  var lastFocus;
  function modal(kind, body, isMsg) {
    close();
    lastFocus = document.activeElement;
    var m = document.createElement("div");
    m.className = "d-modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-labelledby", "d-modal-title");
    m.innerHTML = '<div class="d-modal-card"><h2 id="d-modal-title">' + esc(t("demo.title." + kind)) + " <span>" + esc(t("demo.isDemo")) + "</span></h2>" +
      "<p>" + esc(t("demo." + kind)) + "</p>" +
      (body ? '<div class="d-modal-msg' + (isMsg ? "" : " plain") + '">' + esc(body) + "</div>" : "") +
      '<div class="d-modal-actions"><small>' + esc(t("demo.cta")) + '</small><a class="d-btn" href="/#contact">' + esc(t("demo.ctaBtn")) + '</a><button type="button" class="d-btn d-btn--ghost" data-close>' + esc(t("demo.close")) + "</button></div></div>";
    document.body.appendChild(m);
    requestAnimationFrame(function () { m.classList.add("is-open"); });
    m.addEventListener("click", function (e) { if (e.target === m || e.target.hasAttribute("data-close")) close(); });
    m.querySelector("[data-close]").focus();
  }
  function close() {
    var m = document.querySelector(".d-modal, .d-lightbox");
    if (m) { m.remove(); if (lastFocus) lastFocus.focus(); }
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  /* ---------- delegated actions ---------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-demo]");
    if (el) {
      e.preventDefault();
      var kind = el.getAttribute("data-demo");
      var text = el.getAttribute("data-demo-text") || (el.getAttribute("data-demo-msg") ? t(el.getAttribute("data-demo-msg")) : "");
      modal(kind, text, kind === "wa");
      return;
    }
    var img = e.target.closest("[data-lightbox] img");
    if (img && !img.classList.contains("is-missing")) {
      lastFocus = document.activeElement;
      var lb = document.createElement("div");
      lb.className = "d-lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
      var src = img.currentSrc || img.src;
      lb.innerHTML = '<img alt=""><button type="button" aria-label="' + esc(t("demo.close")) + '">×</button>';
      lb.querySelector("img").src = src.replace(/w=\d+/, "w=1600");
      lb.querySelector("img").alt = img.alt;
      lb.addEventListener("click", close);
      document.body.appendChild(lb);
      lb.querySelector("button").focus();
    }
  });

  /* ---------- forms ---------- */
  function bindForms() {
    $all("form[data-demo-form]").forEach(function (form) {
      W.liveValidate(form);
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!W.validateForm(form)) return;
        var data = W.formData(form);
        var lines = Object.keys(data).filter(function (k) { return data[k].value; }).map(function (k) { return data[k].label + ": " + data[k].value; });
        modal("form", lines.join("\n"), false);
      });
    });
  }

  /* ---------- tabs & filters ---------- */
  function bindTabs() {
    $all("[data-tabs]").forEach(function (box) {
      var btns = $all("[data-tab]", box);
      function show(id) {
        btns.forEach(function (b) { var on = b.getAttribute("data-tab") === id; b.setAttribute("aria-selected", on ? "true" : "false"); b.tabIndex = on ? 0 : -1; });
        $all("[data-panel]", box).forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== id; });
      }
      btns.forEach(function (b, i) {
        b.addEventListener("click", function () { show(b.getAttribute("data-tab")); });
        b.addEventListener("keydown", function (e) {
          if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
          var n = btns[(i + (e.key === "ArrowRight" ? 1 : btns.length - 1)) % btns.length];
          n.focus(); n.click();
        });
      });
      if (btns[0]) show(btns[0].getAttribute("data-tab"));
    });
  }

  /* ---------- header & mobile nav ---------- */
  function bindNav() {
    var header = document.querySelector("[data-demo-header]");
    var burger = document.querySelector(".d-burger");
    if (header) {
      var onS = function () { header.classList.toggle("is-scrolled", window.scrollY > 30); };
      onS(); window.addEventListener("scroll", onS, { passive: true });
    }
    if (burger) {
      burger.addEventListener("click", function () {
        var open = !document.body.classList.contains("nav-open");
        document.body.classList.toggle("nav-open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      $all("[data-demo-nav] a").forEach(function (a) { a.addEventListener("click", function () { document.body.classList.remove("nav-open"); burger.setAttribute("aria-expanded", "false"); }); });
    }
  }

  function renderAll() { renderers.forEach(function (fn) { fn(W.lang()); }); W.loadPhotos(); }

  function start() {
    document.body.insertAdjacentHTML("afterbegin", SPRITE);
    renderAll();           // first render in default language so the English snapshot is complete
    W.boot();              // translations, photos, language switcher
    bindForms(); bindTabs(); bindNav();
    document.addEventListener("wpm:lang", renderAll);
    renderAll();
  }

  window.DEMO = {
    L: L, esc: esc, modal: modal,
    onRender: function (fn) { renderers.push(fn); },
    rebindForms: bindForms
  };
  if (document.readyState === "complete") start(); else document.addEventListener("DOMContentLoaded", start);
})();
