/* ==========================================================================
   WEBSPROMAKERS — CORE (idiomas, fotos, datos de contacto, validación)
   Se usa en la web principal y en todas las demos.
   ========================================================================== */
(function () {
  "use strict";
  var CFG = window.WPM_CONFIG || {};
  var LANGS = (CFG.languages || [{ code: "en", label: "English", short: "EN" }]);
  var CODES = LANGS.map(function (l) { return l.code; });
  var DEFAULT = CODES[0];
  var STORE_KEY = "wpm-lang";
  var HTML_LANG = { en: "en", ms: "ms", es: "es", zh: "zh-CN" };

  var dict = {};       // dict[lang][key]
  var en = {};         // English snapshot taken from the HTML
  var current = DEFAULT;

  /* ---------- small helpers ---------- */
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o && o[k] != null ? o[k] : undefined; }, obj);
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- i18n ---------- */
  function addStrings(lang, obj) {
    dict[lang] = dict[lang] || {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) dict[lang][k] = obj[k];
  }
  function t(key, lang) {
    lang = lang || current;
    var v = dict[lang] && dict[lang][key];
    if (v == null) v = (dict.en && dict.en[key]) != null ? dict.en[key] : en[key];
    return v == null ? key : v;
  }
  var ATTRS = [["data-i18n-ph", "placeholder"], ["data-i18n-aria", "aria-label"], ["data-i18n-alt", "alt"], ["data-i18n-title", "title"], ["data-i18n-content", "content"]];

  function snapshot() {
    $all("[data-i18n]").forEach(function (el) { var k = el.getAttribute("data-i18n"); if (!(k in en)) en[k] = el.textContent.trim(); });
    $all("[data-i18n-html]").forEach(function (el) { var k = el.getAttribute("data-i18n-html"); if (!(k in en)) en[k] = el.innerHTML.trim(); });
    ATTRS.forEach(function (a) {
      $all("[" + a[0] + "]").forEach(function (el) { var k = el.getAttribute(a[0]); if (!(k in en)) en[k] = el.getAttribute(a[1]) || ""; });
    });
  }

  function apply(lang) {
    if (CODES.indexOf(lang) < 0) lang = DEFAULT;
    current = lang;
    document.documentElement.lang = HTML_LANG[lang] || lang;
    document.documentElement.setAttribute("data-lang", lang);
    $all("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $all("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    ATTRS.forEach(function (a) {
      $all("[" + a[0] + "]").forEach(function (el) { el.setAttribute(a[1], t(el.getAttribute(a[0]))); });
    });
    // Re-translate visible validation messages
    $all("[data-err-key]").forEach(function (el) { el.textContent = t(el.getAttribute("data-err-key")); });
    $all("[data-lang-current]").forEach(function (el) {
      var l = LANGS.filter(function (x) { return x.code === lang; })[0];
      el.textContent = l ? l.short : lang.toUpperCase();
    });
    $all("[data-lang-option]").forEach(function (el) {
      el.setAttribute("aria-checked", el.getAttribute("data-lang-option") === lang ? "true" : "false");
    });
    store(STORE_KEY, lang);
    document.dispatchEvent(new CustomEvent("wpm:lang", { detail: { lang: lang } }));
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && CODES.indexOf(q) >= 0) return q;
    var s = store(STORE_KEY);
    if (s && CODES.indexOf(s) >= 0) return s;
    return DEFAULT;
  }

  /* ---------- language switcher ---------- */
  function buildSwitchers() {
    $all("[data-lang-switch]").forEach(function (box) {
      var btn = box.querySelector("button");
      var menu = document.createElement("ul");
      menu.className = "lang-menu";
      menu.setAttribute("role", "menu");
      menu.hidden = true;
      LANGS.forEach(function (l) {
        var li = document.createElement("li");
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("role", "menuitemradio");
        b.setAttribute("data-lang-option", l.code);
        b.setAttribute("lang", HTML_LANG[l.code] || l.code);
        b.textContent = l.label;
        b.addEventListener("click", function () { apply(l.code); close(); btn.focus(); });
        li.appendChild(b); menu.appendChild(li);
      });
      box.appendChild(menu);
      function close() { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); }
      btn.setAttribute("aria-haspopup", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = menu.hidden;
        $all(".lang-menu").forEach(function (m) { m.hidden = true; });
        menu.hidden = !open;
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) { var first = menu.querySelector('[aria-checked="true"]') || menu.querySelector("button"); first && first.focus(); }
      });
      box.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { close(); btn.focus(); }
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          var items = $all("button", menu), i = items.indexOf(document.activeElement);
          if (i < 0) return;
          e.preventDefault();
          items[(i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus();
        }
      });
      document.addEventListener("click", function (e) { if (!box.contains(e.target)) close(); });
    });
  }

  /* ---------- photos ---------- */
  function photoUrl(val, w) {
    if (!val) return "";
    if (val.indexOf("u:") === 0) return "https://images.unsplash.com/photo-" + val.slice(2) + "?auto=format&fit=crop&w=" + w + "&q=70";
    return val;
  }
  function loadPhotos(root) {
    var P = window.WPM_PHOTOS || {};
    $all("img[data-photo]", root).forEach(function (img) {
      if (img.getAttribute("src")) return;
      var val = P[img.getAttribute("data-photo")];
      var w = parseInt(img.getAttribute("data-w") || "800", 10);
      if (!val) { img.classList.add("is-missing"); return; }
      img.addEventListener("error", function () { img.classList.add("is-missing"); }, { once: true });
      img.decoding = "async";
      if (!img.hasAttribute("loading")) img.loading = "lazy";
      if (val.indexOf("u:") === 0) img.srcset = photoUrl(val, w) + " 1x, " + photoUrl(val, Math.min(w * 2, 2400)) + " 2x";
      img.src = photoUrl(val, w);
    });
  }

  /* ---------- config-driven contact details ---------- */
  function waLink(number, text) {
    return "https://wa.me/" + String(number).replace(/[^\d]/g, "") + (text ? "?text=" + encodeURIComponent(text) : "");
  }
  function bindConfig() {
    var c = CFG.contact || {}, s = CFG.social || {};
    $all("[data-cfg-text]").forEach(function (el) {
      var v = get(CFG, el.getAttribute("data-cfg-text"));
      if (v) { el.textContent = v; el.removeAttribute("data-i18n"); el.classList.remove("is-empty"); }
      else { el.setAttribute("data-i18n", "common.soon"); el.classList.add("is-empty"); }
    });
    $all("[data-cfg-mail]").forEach(function (a) {
      if (c.email) a.href = "mailto:" + c.email; else { a.removeAttribute("href"); a.classList.add("is-empty"); }
    });
    $all("[data-cfg-tel]").forEach(function (a) {
      if (c.phone) a.href = "tel:" + c.phone.replace(/[^\d+]/g, ""); else { a.removeAttribute("href"); a.classList.add("is-empty"); }
    });
    $all("[data-social]").forEach(function (a) {
      var url = s[a.getAttribute("data-social")];
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else a.hidden = true;
    });
    $all("[data-social-group]").forEach(function (g) {
      if (!$all("[data-social]:not([hidden])", g).length) g.classList.add("is-empty");
    });
    $all("[data-map]").forEach(function (f) {
      var q = f.getAttribute("data-map") || (CFG.map && CFG.map.query) || "Langkawi";
      f.src = "https://www.google.com/maps?q=" + encodeURIComponent(q) + "&output=embed";
    });
    $all("[data-map-link]").forEach(function (a) {
      var q = a.getAttribute("data-map-link") || (CFG.map && CFG.map.query) || "Langkawi";
      a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
      a.target = "_blank"; a.rel = "noopener";
    });
    $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }
  // WhatsApp links of the agency (main site). Demos use their own demo modal.
  function bindWhatsApp() {
    var num = (CFG.contact || {}).whatsapp;
    $all("[data-wa]").forEach(function (a) {
      function refresh() {
        if (num) { a.href = waLink(num, t(a.getAttribute("data-wa") || "wa.default")); a.target = "_blank"; a.rel = "noopener"; }
        else { a.href = "#contact"; a.removeAttribute("target"); }
      }
      refresh();
      document.addEventListener("wpm:lang", refresh);
      if (!num) a.addEventListener("click", function () { toast(t("toast.waSoon")); });
    });
  }

  /* ---------- analytics (only if configured) ---------- */
  function analytics() {
    var id = CFG.analytics && CFG.analytics.gaMeasurementId;
    if (!id) return;
    var s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  }

  /* ---------- toast ---------- */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "wpm-toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-on"); }, 4200);
  }

  /* ---------- form validation ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_RE = /^\+?[\d\s\-().]{7,20}$/;
  function fieldError(field) {
    var v = (field.value || "").trim();
    if (field.required && !v) return field.tagName === "SELECT" ? "val.select" : "val.required";
    if (v && field.type === "email" && !EMAIL_RE.test(v)) return "val.email";
    if (v && field.getAttribute("data-validate") === "phone" && !PHONE_RE.test(v)) return "val.phone";
    if (v && field.type === "number") {
      var n = Number(v), min = field.min !== "" ? Number(field.min) : null, max = field.max !== "" ? Number(field.max) : null;
      if (isNaN(n) || (min !== null && n < min) || (max !== null && n > max)) return "val.number";
    }
    if (v && field.type === "date" && field.min && v < field.min) return "val.date";
    if (field.getAttribute("data-after")) {
      var other = field.form && field.form.querySelector("#" + field.getAttribute("data-after"));
      if (v && other && other.value && v <= other.value) return "val.after";
    }
    if (field.minLength > 0 && v && v.length < field.minLength) return "val.short";
    return null;
  }
  function showError(field, key) {
    var id = field.id + "-err", box = document.getElementById(id);
    if (!box) {
      box = document.createElement("p");
      box.id = id; box.className = "field-error";
      field.parentNode.appendChild(box);
    }
    if (key) {
      box.textContent = t(key); box.setAttribute("data-err-key", key);
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", id);
    } else {
      box.textContent = ""; box.removeAttribute("data-err-key");
      field.removeAttribute("aria-invalid");
    }
  }
  function validateForm(form) {
    var first = null;
    $all("input, select, textarea", form).forEach(function (f) {
      if (f.type === "hidden" || f.disabled || f.name === "botcheck") return;
      var k = fieldError(f);
      showError(f, k);
      if (k && !first) first = f;
    });
    if (first) first.focus();
    return !first;
  }
  function liveValidate(form) {
    form.setAttribute("novalidate", "");
    $all("input, select, textarea", form).forEach(function (f) {
      var ev = f.tagName === "SELECT" || f.type === "date" ? "change" : "blur";
      f.addEventListener(ev, function () { if (f.value || f.hasAttribute("aria-invalid")) showError(f, fieldError(f)); });
      f.addEventListener("input", function () { if (f.hasAttribute("aria-invalid")) showError(f, fieldError(f)); });
    });
    // Dates cannot be in the past
    var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    $all('input[type="date"]', form).forEach(function (d) { d.min = today.toISOString().slice(0, 10); });
  }
  function formData(form) {
    var out = {};
    $all("input, select, textarea", form).forEach(function (f) {
      if (!f.name || f.type === "hidden" || f.name === "botcheck") return;
      var label = form.querySelector('label[for="' + f.id + '"]');
      var val = f.tagName === "SELECT" && f.selectedIndex >= 0 ? f.options[f.selectedIndex].text : f.value;
      out[f.name] = { label: label ? label.textContent.replace(/\*/g, "").trim() : f.name, value: (val || "").trim() };
    });
    return out;
  }

  /* ---------- reveal on scroll ---------- */
  function reveal() {
    var els = $all("[data-reveal]");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (e) { e.classList.add("is-in"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- boot ---------- */
  function boot() {
    snapshot();
    bindConfig();
    buildSwitchers();
    bindWhatsApp();
    loadPhotos();
    apply(initialLang());
    reveal();
    analytics();
    document.documentElement.classList.add("js-ready");
  }

  window.WPM = {
    config: CFG, addStrings: addStrings, t: t, apply: apply, lang: function () { return current; },
    toast: toast, validateForm: validateForm, liveValidate: liveValidate, formData: formData,
    waLink: waLink, loadPhotos: loadPhotos, $all: $all, boot: boot
  };
})();
