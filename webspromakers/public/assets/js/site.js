/* ==========================================================================
   WEBSPROMAKERS — Interacciones de la web principal
   ========================================================================== */
(function () {
  "use strict";
  function init() {
    var W = window.WPM, $all = W.$all, t = W.t, CFG = W.config;
    W.boot();

    /* ---------- header + mobile menu ---------- */
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".menu-toggle");
    function onScroll() { header.classList.toggle("is-solid", window.scrollY > 40); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    function setMenu(open) {
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }
    toggle.addEventListener("click", function () { setMenu(!document.body.classList.contains("menu-open")); });
    $all(".nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 960) setMenu(false); });

    // Active link while scrolling
    var links = $all('.nav a[href^="#"]');
    if ("IntersectionObserver" in window) {
      var navIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["about", "services", "work", "why-us", "contact"].forEach(function (id) {
        var s = document.getElementById(id); if (s) navIO.observe(s);
      });
    }

    /* ---------- QR digital menu ---------- */
    var origin = (location.origin && location.origin !== "null" && /^https?:/.test(location.protocol)) ? location.origin : CFG.siteUrl;
    var menuUrl = origin.replace(/\/$/, "") + "/demos/restaurant/menu/";
    var qrMain = document.getElementById("qr-main"), qrMini = document.getElementById("qr-mini");
    if (window.WPMQR && qrMain) {
      qrMain.innerHTML = WPMQR.toSVG(menuUrl, { dark: "#0e1311", light: "#ffffff", label: "QR code: demo digital menu" });
      qrMini.innerHTML = WPMQR.toSVG(menuUrl, { dark: "#0e1311", light: "#ffffff", border: 2 });
    }
    var screen = document.getElementById("qr-screen"), frame = document.getElementById("qr-iframe"), scanner = document.getElementById("qr-scanner");
    function fitFrame() {
      var s = screen.clientWidth / 375;
      frame.style.transform = "scale(" + s + ")";
      frame.style.height = (screen.clientHeight / s) + "px";
    }
    fitFrame();
    window.addEventListener("resize", fitFrame);
    var scanTimer;
    function simulate() {
      clearTimeout(scanTimer);
      scanner.classList.remove("is-done");
      scanTimer = setTimeout(function () {
        frame.src = "/demos/restaurant/menu/?embed=1&lang=" + W.lang();
        frame.addEventListener("load", function () { scanner.classList.add("is-done"); }, { once: true });
        setTimeout(function () { scanner.classList.add("is-done"); }, 2500);
      }, 1700);
    }
    document.getElementById("qr-simulate").addEventListener("click", simulate);
    if ("IntersectionObserver" in window) {
      var qrIO = new IntersectionObserver(function (e) {
        if (e[0].isIntersecting) { simulate(); qrIO.disconnect(); }
      }, { threshold: .35 });
      qrIO.observe(screen);
    } else simulate();
    document.addEventListener("wpm:lang", function () {
      if (frame.src) frame.src = "/demos/restaurant/menu/?embed=1&lang=" + W.lang();
    });

    /* ---------- WhatsApp demo ---------- */
    var waType = "table";
    var dateInput = document.getElementById("wd-date");
    var d = new Date(); d.setDate(d.getDate() + 3);
    dateInput.value = d.toISOString().slice(0, 10);
    function fmtDate(v) {
      if (!v) return "—";
      try { return new Intl.DateTimeFormat(document.documentElement.lang, { weekday: "short", day: "numeric", month: "short" }).format(new Date(v + "T12:00:00")); }
      catch (e) { return v; }
    }
    function fill(str) {
      var vals = {
        name: document.getElementById("wd-name").value.trim() || "—",
        date: fmtDate(dateInput.value),
        people: document.getElementById("wd-people").value || "—",
        time: document.getElementById("wd-time").value || "—",
        nights: document.getElementById("wd-nights").value || "—",
        q: document.getElementById("wd-q").value.trim() || t("wa.fQuestionPh")
      };
      return str.replace(/\{(\w+)\}/g, function (m, k) { return vals[k] != null ? vals[k] : m; });
    }
    function now() { var n = new Date(); return ("0" + n.getHours()).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2); }
    function renderWA() {
      $all("[data-wa-only]").forEach(function (el) { el.hidden = el.getAttribute("data-wa-only").split(" ").indexOf(waType) < 0; });
      document.getElementById("wa-bubble").innerHTML = "";
      document.getElementById("wa-bubble").textContent = fill(t("wa.msg." + waType));
      var time = document.createElement("time"); time.textContent = now() + " ✓✓";
      document.getElementById("wa-bubble").appendChild(time);
      document.getElementById("wa-reply").textContent = t("wa.reply." + waType);
      var t2 = document.createElement("time"); t2.textContent = now();
      document.getElementById("wa-reply").appendChild(t2);
    }
    $all("[data-wa-type]").forEach(function (b) {
      b.addEventListener("click", function () {
        waType = b.getAttribute("data-wa-type");
        $all("[data-wa-type]").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
        renderWA();
      });
    });
    $all("#wa-demo-form input").forEach(function (i) { i.addEventListener("input", renderWA); });
    document.getElementById("wa-demo-form").addEventListener("submit", function (e) { e.preventDefault(); });
    document.addEventListener("wpm:lang", renderWA);
    renderWA();

    /* ---------- before / after ---------- */
    var ba = document.getElementById("ba"), range = document.getElementById("ba-range");
    function setBA() { ba.style.setProperty("--pos", range.value + "%"); }
    range.addEventListener("input", setBA);
    setBA();

    /* ---------- contact form ---------- */
    var form = document.getElementById("contact-form"), status = document.getElementById("f-status"), btn = document.getElementById("f-submit");
    W.liveValidate(form);
    function setStatus(kind, html) {
      status.className = "form-status is-on " + kind;
      status.innerHTML = html;
    }
    function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
    function summary(data) {
      return Object.keys(data).filter(function (k) { return data[k].value; }).map(function (k) { return data[k].label + ": " + data[k].value; }).join("\n");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.botcheck.checked) return;
      if (!W.validateForm(form)) return;
      var key = (CFG.forms || {}).web3formsAccessKey, data = W.formData(form);
      if (!key) {
        // No email service configured yet: offer real alternatives, never fake a success.
        var c = CFG.contact || {}, text = t("form.waIntro") + "\n\n" + summary(data), html = "<p>" + esc(t("form.notConfigured")) + "</p>";
        if (c.whatsapp) html += '<a class="btn btn--wa btn--sm" target="_blank" rel="noopener" href="' + esc(W.waLink(c.whatsapp, text)) + '">' + esc(t("form.viaWa")) + "</a> ";
        if (c.email) html += '<a class="btn btn--ghost btn--sm" href="mailto:' + esc(c.email) + "?subject=" + encodeURIComponent("Website enquiry") + "&body=" + encodeURIComponent(text) + '">' + esc(t("form.viaEmail")) + "</a>";
        setStatus("info", html);
        return;
      }
      form.access_key.value = key;
      btn.classList.add("is-loading"); btn.disabled = true;
      var payload = { access_key: key, subject: form.subject.value, from_name: form.from_name.value, botcheck: "" };
      Object.keys(data).forEach(function (k) { payload[k] = data[k].value; });
      payload.language = W.lang();
      fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload)
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.success, j: j }; }); })
        .then(function (res) {
          if (res.ok) { setStatus("ok", "<p>" + esc(t("form.success")) + "</p>"); form.reset(); }
          else setStatus("err", "<p>" + esc(t("form.error")) + "</p>");
        })
        .catch(function () { setStatus("err", "<p>" + esc(t("form.error")) + "</p>"); })
        .then(function () { btn.classList.remove("is-loading"); btn.disabled = false; });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
