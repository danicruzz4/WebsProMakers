/* Kopi Pasir — carta (edita productos, precios y fotos aquí) */
(function () {
  var D = window.DEMO, L = D.L, esc = D.esc;
  var MENU = [
    { id: "coffee", name: { en: "Coffee", ms: "Kopi", es: "Café", zh: "咖啡" }, items: [
      { n: "Kopi O", p: 5, photo: "coffee-cup", d: { en: "Traditional Malaysian black coffee.", ms: "Kopi hitam tradisional Malaysia.", es: "Café solo tradicional malasio.", zh: "传统马来西亚黑咖啡。" } },
      { n: "Flat White", p: 12, photo: "coffee-latte", d: { en: "Double shot with silky milk.", ms: "Dua syot espreso dengan susu lembut.", es: "Doble espresso con leche sedosa.", zh: "双份浓缩配丝滑牛奶。" } },
      { n: "Gula Melaka Latte", p: 14, d: { en: "Latte with local palm sugar. Hot or iced.", ms: "Latte dengan gula melaka. Panas atau sejuk.", es: "Latte con azúcar de palma local. Caliente o con hielo.", zh: "本地椰糖拿铁，冷热皆可。" } },
      { n: "Cold Brew", p: 13, photo: "coffee-beans", d: { en: "Steeped for 18 hours, served over ice.", ms: "Direndam 18 jam, dihidang dengan ais.", es: "Infusionado 18 horas, servido con hielo.", zh: "冷萃 18 小时，加冰饮用。" } }
    ]},
    { id: "cold", name: { en: "Juices & cold drinks", ms: "Jus & minuman sejuk", es: "Zumos y bebidas frías", zh: "果汁与冷饮" }, items: [
      { n: "Fresh Coconut", p: 9, d: { en: "Chilled, straight from the shell.", ms: "Sejuk, terus dari tempurung.", es: "Frío, directamente del coco.", zh: "冰镇整颗椰子。" } },
      { n: "Mango Smoothie", p: 14, d: { en: "Mango, banana and yoghurt.", ms: "Mangga, pisang dan yogurt.", es: "Mango, plátano y yogur.", zh: "芒果、香蕉和酸奶。" } },
      { n: "Lemongrass Iced Tea", p: 10, d: { en: "House-brewed with lime and honey.", ms: "Dibancuh sendiri dengan limau dan madu.", es: "Hecho en casa con lima y miel.", zh: "自制香茅冰茶，配青柠和蜂蜜。" } },
      { n: "Watermelon Cooler", p: 11, d: { en: "Fresh watermelon, mint and lime.", ms: "Tembikai segar, pudina dan limau.", es: "Sandía fresca, menta y lima.", zh: "新鲜西瓜、薄荷和青柠。" } }
    ]},
    { id: "brunch", name: { en: "Brunch", ms: "Sarapan lewat", es: "Brunch", zh: "早午餐" }, items: [
      { n: "Roti Bakar Kaya", p: 9, photo: "food-pancake", d: { en: "Toast with coconut jam, butter and soft eggs.", ms: "Roti bakar dengan kaya, mentega dan telur separuh masak.", es: "Tostada con mermelada de coco, mantequilla y huevos pasados por agua.", zh: "咖椰吐司，配黄油和半熟蛋。" } },
      { n: "Avocado Toast", p: 22, d: { en: "Sourdough, smashed avocado, chilli and lime.", ms: "Roti masam, alpukat lenyek, cili dan limau.", es: "Pan de masa madre, aguacate, chile y lima.", zh: "酸面包配牛油果泥、辣椒和青柠。" } },
      { n: "Island Breakfast", p: 28, photo: "food-salad", d: { en: "Eggs, sausage, grilled tomato, toast and fruit.", ms: "Telur, sosej, tomato panggang, roti dan buah.", es: "Huevos, salchicha, tomate a la plancha, tostada y fruta.", zh: "鸡蛋、香肠、烤番茄、吐司和水果。" } },
      { n: "Butter Croissant", p: 8, photo: "cafe-croissant", d: { en: "Baked every morning.", ms: "Dibakar setiap pagi.", es: "Horneado cada mañana.", zh: "每天早上新鲜烘焙。" } }
    ]},
    { id: "bar", name: { en: "Sunset bar", ms: "Bar senja", es: "Bar del atardecer", zh: "日落酒吧" }, items: [
      { n: "Pandan Colada", p: 32, photo: "drink-cocktail", d: { en: "Rum, pandan, coconut and pineapple.", ms: "Rum, pandan, kelapa dan nanas.", es: "Ron, pandan, coco y piña.", zh: "朗姆酒、班兰、椰子和菠萝。" } },
      { n: "Langkawi Mojito", p: 28, d: { en: "Rum, lime, mint and a touch of lemongrass.", ms: "Rum, limau, pudina dan sedikit serai.", es: "Ron, lima, menta y un toque de citronela.", zh: "朗姆酒、青柠、薄荷，带一点香茅。" } },
      { n: "Sunset Spritz", p: 30, photo: "drink-bar", d: { en: "Bitter orange, prosecco and soda.", ms: "Oren pahit, prosecco dan soda.", es: "Naranja amarga, prosecco y soda.", zh: "苦橙、普罗塞克和苏打水。" } },
      { n: "Virgin Passion", p: 16, d: { en: "Alcohol-free: passion fruit, lime and soda.", ms: "Tanpa alkohol: markisa, limau dan soda.", es: "Sin alcohol: maracuyá, lima y soda.", zh: "无酒精：百香果、青柠和苏打水。" } }
    ]}
  ];
  var root = document.getElementById("cafe-menu"), active = MENU[0].id;
  function draw() {
    root.innerHTML = '<div class="m-tabs" role="tablist">' + MENU.map(function (c) {
      return '<button type="button" role="tab" data-cat="' + c.id + '" aria-selected="' + (c.id === active) + '">' + esc(L(c.name)) + "</button>";
    }).join("") + '</div><div class="m-grid" role="tabpanel">' + MENU.filter(function (c) { return c.id === active; })[0].items.map(function (it) {
      return '<article class="c-item">' + (it.photo ? '<div class="ph"><img data-photo="' + it.photo + '" data-w="400" alt="' + esc(it.n) + '"></div>'
        : '<div class="no-ph"><svg class="icon" aria-hidden="true"><use href="#' + (active === "bar" || active === "cold" ? "d-sun" : "d-coffee") + '"/></svg></div>') +
        '<div class="c-body"><h3>' + esc(it.n) + "</h3><p>" + esc(L(it.d)) + '</p><span class="c-price">RM ' + it.p + "</span></div></article>";
    }).join("") + "</div>";
  }
  D.onRender(draw);
  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cat]");
    if (!b) return;
    active = b.getAttribute("data-cat");
    draw(); window.WPM.loadPhotos(root);
    root.querySelector('[data-cat="' + active + '"]').focus();
  });
})();
