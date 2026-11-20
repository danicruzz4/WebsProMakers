/* ==========================================================================
   API & DAUN (restaurante ficticio) — CARTA
   La usan la web del restaurante y la carta QR (/demos/restaurant/menu/).
   Para editar: cambia nombres (n), descripciones (d), precios (p) o fotos (photo).
   ========================================================================== */
window.APIDAUN_MENU = [
  { id: "starters", name: { en: "Starters", ms: "Pembuka Selera", es: "Entrantes", zh: "前菜" }, items: [
    { n: "Satay Ayam (10)", p: 22, photo: "food-grill", tag: "pop",
      d: { en: "Chicken skewers grilled over charcoal, peanut sauce, cucumber and onion.", ms: "Sate ayam dibakar atas arang, kuah kacang, timun dan bawang.", es: "Brochetas de pollo a la brasa con salsa de cacahuete, pepino y cebolla.", zh: "炭烤鸡肉串，配花生酱、黄瓜和洋葱。" } },
    { n: "Popiah Basah", p: 12, photo: "food-salad",
      d: { en: "Fresh spring rolls with jicama, egg and sweet sauce.", ms: "Popiah segar dengan sengkuang, telur dan sos manis.", es: "Rollitos frescos con jícama, huevo y salsa dulce.", zh: "新鲜春卷，内有沙葛和鸡蛋，配甜酱。" } },
    { n: "Sotong Goreng Tepung", p: 26,
      d: { en: "Crispy squid with chilli mayonnaise and lime.", ms: "Sotong goreng rangup dengan mayonis cili dan limau.", es: "Calamar crujiente con mayonesa de chile y lima.", zh: "香脆炸鱿鱼，配辣味蛋黄酱和青柠。" } }
  ]},
  { id: "grill", name: { en: "From the grill", ms: "Panggang", es: "De la parrilla", zh: "炭烤" }, items: [
    { n: "Ikan Bakar", p: 38, photo: "food-plate", tag: "chef",
      d: { en: "Whole fish of the day grilled in banana leaf with sambal and air asam.", ms: "Ikan segar hari ini dibakar dalam daun pisang dengan sambal dan air asam.", es: "Pescado del día entero a la brasa en hoja de plátano con sambal y salsa de tamarindo.", zh: "当日鲜鱼包蕉叶炭烤，配参巴辣酱和酸柑酱。" } },
    { n: "Ayam Percik", p: 28, photo: "food-spread",
      d: { en: "Grilled chicken with spiced coconut glaze, served with rice.", ms: "Ayam panggang bersalut kuah santan berempah, dihidang bersama nasi.", es: "Pollo a la parrilla glaseado con coco especiado, con arroz.", zh: "椰浆香料烤鸡，配米饭。" } },
    { n: "Udang Galah Bakar", p: 58,
      d: { en: "Grilled giant river prawns with garlic butter and herbs.", ms: "Udang galah bakar dengan mentega bawang putih dan herba.", es: "Langostinos de río a la brasa con mantequilla de ajo y hierbas.", zh: "炭烤大头虾，配蒜香黄油和香草。" } }
  ]},
  { id: "rice", name: { en: "Rice & noodles", ms: "Nasi & Mi", es: "Arroz y fideos", zh: "饭与面" }, items: [
    { n: "Nasi Lemak Ayam", p: 18, photo: "food-bowl", tag: "pop",
      d: { en: "Coconut rice, fried chicken, sambal, egg, peanuts and anchovies.", ms: "Nasi santan, ayam goreng, sambal, telur, kacang dan ikan bilis.", es: "Arroz con coco, pollo frito, sambal, huevo, cacahuetes y anchoas.", zh: "椰浆饭，配炸鸡、参巴辣酱、鸡蛋、花生和江鱼仔。" } },
    { n: "Mee Goreng Mamak", p: 15, photo: "food-noodles",
      d: { en: "Wok-fried yellow noodles with egg, tofu and vegetables.", ms: "Mi kuning goreng dengan telur, tauhu dan sayur.", es: "Fideos amarillos salteados al wok con huevo, tofu y verduras.", zh: "镬炒黄面，配鸡蛋、豆腐和蔬菜。" } },
    { n: "Nasi Kerabu", p: 20,
      d: { en: "Blue butterfly-pea rice with herbs, fish crackers and salted egg.", ms: "Nasi biru bunga telang dengan ulam, keropok ikan dan telur masin.", es: "Arroz azul de flor de guisante con hierbas, crackers de pescado y huevo salado.", zh: "蝶豆花蓝饭，配香草、鱼饼干和咸蛋。" } }
  ]},
  { id: "desserts", name: { en: "Desserts", ms: "Pencuci Mulut", es: "Postres", zh: "甜品" }, items: [
    { n: "Cendol", p: 9, photo: "food-dessert",
      d: { en: "Shaved ice, pandan jelly, coconut milk and palm sugar.", ms: "Ais serut, cendol pandan, santan dan gula melaka.", es: "Hielo raspado, gelatina de pandan, leche de coco y azúcar de palma.", zh: "刨冰配班兰煎蕊、椰奶和椰糖。" } },
    { n: "Pisang Goreng & Ice Cream", p: 12, photo: "food-pancake",
      d: { en: "Crispy banana fritters with vanilla ice cream.", ms: "Pisang goreng rangup dengan aiskrim vanila.", es: "Plátano frito crujiente con helado de vainilla.", zh: "香脆炸香蕉，配香草冰淇淋。" } },
    { n: "Sago Gula Melaka", p: 9,
      d: { en: "Chilled sago pearls with coconut cream and palm sugar syrup.", ms: "Sagu sejuk dengan santan dan sirap gula melaka.", es: "Perlas de sagú frías con crema de coco y sirope de azúcar de palma.", zh: "冰西米配椰浆和椰糖浆。" } }
  ]},
  { id: "drinks", name: { en: "Drinks", ms: "Minuman", es: "Bebidas", zh: "饮品" }, items: [
    { n: "Teh Tarik", p: 5,
      d: { en: "Pulled milk tea, hot or iced.", ms: "Teh tarik panas atau sejuk.", es: "Té con leche “estirado”, caliente o frío.", zh: "拉茶，冷热皆可。" } },
    { n: "Fresh Coconut", p: 9,
      d: { en: "Served chilled in the shell.", ms: "Kelapa muda sejuk dihidang dalam tempurung.", es: "Coco fresco servido frío en su cáscara.", zh: "冰镇整颗椰子。" } },
    { n: "Sunset Cenang", p: 16, photo: "drink-cocktail", tag: "new",
      d: { en: "Mocktail with passion fruit, lime and lemongrass.", ms: "Mocktail markisa, limau dan serai.", es: "Cóctel sin alcohol de maracuyá, lima y citronela.", zh: "百香果、青柠和香茅无酒精鸡尾酒。" } }
  ]}
];

window.APIDAUN_TAGS = {
  pop: { en: "Popular", ms: "Popular", es: "Popular", zh: "人气" },
  chef: { en: "Chef’s choice", ms: "Pilihan chef", es: "Recomendado", zh: "主厨推荐" },
  "new": { en: "New", ms: "Baharu", es: "Nuevo", zh: "新品" }
};

/* Dibuja la carta con pestañas dentro de "root" */
window.renderApiDaunMenu = function (root) {
  var D = window.DEMO, L = D.L, esc = D.esc, M = window.APIDAUN_MENU, T = window.APIDAUN_TAGS;
  var active = root.getAttribute("data-active") || M[0].id;
  root.innerHTML =
    '<div class="m-tabs" role="tablist">' + M.map(function (c) {
      return '<button type="button" role="tab" data-cat="' + c.id + '" aria-selected="' + (c.id === active) + '">' + esc(L(c.name)) + "</button>";
    }).join("") + "</div>" +
    '<div class="m-list" role="tabpanel">' + M.filter(function (c) { return c.id === active; })[0].items.map(function (it) {
      return '<article class="m-item' + (it.photo ? "" : " no-photo") + '">' +
        (it.photo ? '<div class="m-photo ph"><img data-photo="' + it.photo + '" data-w="300" alt="' + esc(it.n) + '"></div>' : "") +
        '<div class="m-text"><h4>' + esc(it.n) + (it.tag ? ' <span class="m-tag">' + esc(L(T[it.tag])) + "</span>" : "") + "</h4><p>" + esc(L(it.d)) + "</p></div>" +
        '<b class="m-price">RM ' + it.p + "</b></article>";
    }).join("") + "</div>";
  if (!root._bound) {
    root._bound = true;
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]");
      if (!b) return;
      root.setAttribute("data-active", b.getAttribute("data-cat"));
      window.renderApiDaunMenu(root);
      window.WPM.loadPhotos(root);
      var nb = root.querySelector('[data-cat="' + b.getAttribute("data-cat") + '"]');
      nb && nb.focus();
    });
  }
};
