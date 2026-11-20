/* Halia House — habitaciones y formulario rápido de disponibilidad */
(function () {
  var W = window.WPM, D = window.DEMO, t = W.t, esc = D.esc;
  // Edita aquí las habitaciones (los textos están en i18n.js: h.r1n, h.r1d…)
  var ROOMS = [
    { id: "garden", n: "h.r1n", d: "h.r1d", photo: "room-1", guests: 2, size: 28, bed: "h.bedQueen", price: 320 },
    { id: "pool", n: "h.r2n", d: "h.r2d", photo: "room-2", guests: 3, size: 40, bed: "h.bedKing", price: 480 },
    { id: "family", n: "h.r3n", d: "h.r3d", photo: "room-3", guests: 4, size: 65, bed: "h.bed2", price: 690 }
  ];
  var list = document.getElementById("rooms-list");
  D.onRender(function () {
    list.innerHTML = ROOMS.map(function (r) {
      return '<article class="room"><div class="ph"><img data-photo="' + r.photo + '" data-w="700" alt="' + esc(t(r.n)) + '"></div>' +
        '<div class="room-body"><h3>' + esc(t(r.n)) + "</h3><p>" + esc(t(r.d)) + "</p>" +
        '<ul><li><svg class="icon" aria-hidden="true"><use href="#d-users"/></svg>' + esc(t("h.upTo").replace("{n}", r.guests)) + "</li>" +
        '<li><svg class="icon" aria-hidden="true"><use href="#d-size"/></svg>' + r.size + " m²</li>" +
        '<li><svg class="icon" aria-hidden="true"><use href="#d-bed"/></svg>' + esc(t(r.bed)) + "</li></ul>" +
        '<div class="room-foot"><span class="price">' + esc(t("h.from")) + " <b>RM " + r.price + "</b> / " + esc(t("h.night")) + "</span>" +
        '<button class="btn" type="button" data-room="' + r.id + '">' + esc(t("h.requestRoom")) + "</button></div></div></article>";
    }).join("");
  });
  var book = document.getElementById("book-form");
  function goBook(focusId) {
    document.getElementById("book").scrollIntoView({ behavior: "smooth" });
    setTimeout(function () { var f = document.getElementById(focusId); f && f.focus({ preventScroll: true }); }, 600);
  }
  list.addEventListener("click", function (e) {
    var b = e.target.closest("[data-room]");
    if (!b) return;
    book.room.value = b.getAttribute("data-room");
    goBook(book.checkin.value ? "b-name" : "b-in");
  });
  var avail = document.getElementById("avail");
  function start() {
    W.liveValidate(avail);
    avail.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!W.validateForm(avail)) return;
      book.checkin.value = document.getElementById("a-in").value;
      book.checkout.value = document.getElementById("a-out").value;
      book.guests.value = document.getElementById("a-guests").value;
      goBook("b-room");
    });
  }
  if (document.readyState === "complete") start(); else document.addEventListener("DOMContentLoaded", start);
})();
