/* Pandan & Co. — catálogo (edita productos, precios, categorías y fotos aquí)
   photo: clave de /assets/js/photos.js · img: ruta de una imagen propia */
(function () {
  var W = window.WPM, D = window.DEMO, L = D.L, esc = D.esc, t = W.t;
  var CATS = ["all", "home", "textiles", "beauty", "pantry"];
  var PRODUCTS = [
    { cat: "textiles", img: "img/batik-sarong.svg", price: 95, n: { en: "Hand-drawn Batik Sarong", ms: "Sarung Batik Lukis Tangan", es: "Sarong de batik pintado a mano", zh: "手绘蜡染纱笼" }, d: { en: "Cotton, natural dyes. Each one is unique.", ms: "Kapas, pewarna semula jadi. Setiap satu unik.", es: "Algodón y tintes naturales. Cada pieza es única.", zh: "棉质，天然染料，每件都独一无二。" } },
    { cat: "home", photo: "shop-pottery", price: 85, n: { en: "Clay Water Jar", ms: "Labu Tanah Liat", es: "Jarra de barro", zh: "陶土水罐" }, d: { en: "Traditional gourd shape, hand-thrown.", ms: "Bentuk labu tradisional, dibentuk dengan tangan.", es: "Forma tradicional de calabaza, hecha en torno.", zh: "传统葫芦造型，手工拉坯。" } },
    { cat: "beauty", photo: "shop-cosmetics", price: 36, n: { en: "Natural Soap Set", ms: "Set Sabun Semula Jadi", es: "Set de jabones naturales", zh: "天然手工皂套装" }, d: { en: "Pandan, coconut and lemongrass. Set of 3.", ms: "Pandan, kelapa dan serai. Set 3 biji.", es: "Pandan, coco y citronela. Pack de 3.", zh: "班兰、椰子和香茅，3 块装。" } },
    { cat: "pantry", photo: "coffee-beans", price: 32, n: { en: "Island Roast Coffee", ms: "Kopi Panggang Pulau", es: "Café tostado de la isla", zh: "海岛烘焙咖啡豆" }, d: { en: "Whole beans, medium roast, 250 g.", ms: "Biji kopi penuh, panggang sederhana, 250 g.", es: "Grano entero, tueste medio, 250 g.", zh: "整颗咖啡豆，中度烘焙，250 克。" } },
    { cat: "textiles", img: "img/batik-scarf.svg", price: 120, n: { en: "Batik Silk Scarf", ms: "Selendang Sutera Batik", es: "Pañuelo de seda batik", zh: "蜡染丝巾" }, d: { en: "Light silk with ocean-blue batik motifs.", ms: "Sutera ringan dengan motif batik biru laut.", es: "Seda ligera con motivos batik azul océano.", zh: "轻盈丝绸，海蓝色蜡染图案。" } },
    { cat: "beauty", photo: "spa", price: 42, n: { en: "Lemongrass Body Oil", ms: "Minyak Badan Serai", es: "Aceite corporal de citronela", zh: "香茅身体油" }, d: { en: "Cold-pressed coconut oil with lemongrass.", ms: "Minyak kelapa perahan sejuk dengan serai.", es: "Aceite de coco prensado en frío con citronela.", zh: "冷压椰子油配香茅。" } },
    { cat: "pantry", img: "img/kaya-jar.svg", price: 16, n: { en: "Pandan Kaya Jam", ms: "Kaya Pandan", es: "Mermelada kaya de pandan", zh: "班兰咖椰酱" }, d: { en: "Coconut and egg jam, made in small batches.", ms: "Kaya kelapa dan telur, dibuat dalam kuantiti kecil.", es: "Crema de coco y huevo, hecha en pequeños lotes.", zh: "椰子鸡蛋酱，小批量制作。" } },
    { cat: "home", img: "img/basket.svg", price: 58, n: { en: "Woven Pandan Basket", ms: "Bakul Anyaman Mengkuang", es: "Cesta de hoja de pandan", zh: "班兰叶编织篮" }, d: { en: "Woven by hand from dried pandan leaves.", ms: "Dianyam dengan tangan daripada daun mengkuang kering.", es: "Tejida a mano con hojas de pandan secas.", zh: "用干燥的班兰叶手工编织。" } }
  ];
  var filters = document.getElementById("filters"), grid = document.getElementById("products"), active = "all";
  function draw() {
    filters.innerHTML = CATS.map(function (c) {
      return '<button type="button" data-filter="' + c + '" aria-pressed="' + (c === active) + '">' + esc(t("s.cat." + c)) + "</button>";
    }).join("");
    grid.innerHTML = PRODUCTS.filter(function (p) { return active === "all" || p.cat === active; }).map(function (p) {
      var name = L(p.n);
      var pic = p.photo ? '<div class="ph"><img data-photo="' + p.photo + '" data-w="600" alt="' + esc(name) + '"></div>'
        : '<div class="art"><img src="' + p.img + '" alt="' + esc(name) + '" loading="lazy" width="400" height="400"></div>';
      return '<article class="product">' + pic + '<div class="meta"><h3>' + esc(name) + '</h3><span class="price">RM ' + p.price + "</span></div>" +
        '<p class="cat">' + esc(t("s.cat." + p.cat)) + "</p><p>" + esc(L(p.d)) + "</p>" +
        '<button type="button" data-demo="wa" data-demo-text="' + esc(t("s.wa.product").replace("{p}", name)) + '"><svg aria-hidden="true"><use href="#d-wa"/></svg>' + esc(t("s.ask")) + "</button></article>";
    }).join("");
  }
  D.onRender(draw);
  filters.addEventListener("click", function (e) {
    var b = e.target.closest("[data-filter]");
    if (!b) return;
    active = b.getAttribute("data-filter");
    draw(); W.loadPhotos(grid);
    filters.querySelector('[data-filter="' + active + '"]').focus();
  });
})();
