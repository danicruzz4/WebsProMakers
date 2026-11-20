/* Island Tide Adventures — excursiones (edita aquí nombres, precios, fotos y textos) */
(function () {
  var W = window.WPM, D = window.DEMO, L = D.L, esc = D.esc, t = W.t;
  var TOURS = [
    { id: "hopping", photo: "beach", price: 45,
      n: { en: "Island Hopping", ms: "Lawatan Pulau", es: "Ruta por las islas", zh: "跳岛游" },
      dur: { en: "4 hours", ms: "4 jam", es: "4 horas", zh: "4 小时" },
      d: { en: "Visit the Lake of the Pregnant Maiden, watch eagles soar over the bay and relax on a quiet island beach.", ms: "Lawati Tasik Dayang Bunting, saksikan helang terbang di teluk dan berehat di pantai pulau yang tenang.", es: "Visita el lago de la Doncella Embarazada, observa las águilas sobre la bahía y relájate en una playa tranquila.", zh: "游览孕妇湖，观赏老鹰在海湾上空翱翔，并在宁静的海岛沙滩上放松。" },
      inc: [{ en: "Boat & guide", ms: "Bot & pemandu", es: "Barco y guía", zh: "船只和导游" }, { en: "Life jackets", ms: "Jaket keselamatan", es: "Chalecos salvavidas", zh: "救生衣" }, { en: "Drinking water", ms: "Air minuman", es: "Agua", zh: "饮用水" }, { en: "Beach stop", ms: "Singgah di pantai", es: "Parada en la playa", zh: "沙滩停留" }],
      bring: { en: "Swimwear, sunscreen, hat.", ms: "Pakaian renang, pelindung matahari, topi.", es: "Bañador, protector solar, gorra.", zh: "泳衣、防晒霜、帽子。" } },
    { id: "kayak", photo: "forest", price: 180,
      n: { en: "Mangrove Kayak", ms: "Kayak Hutan Bakau", es: "Kayak en los manglares", zh: "红树林皮划艇" },
      dur: { en: "5 hours", ms: "5 jam", es: "5 horas", zh: "5 小时" },
      d: { en: "Paddle through the mangrove channels of Kilim Geoforest Park, explore a bat cave and spot monkeys and kingfishers.", ms: "Berkayak melalui terusan bakau Taman Geohutan Kilim, terokai gua kelawar dan lihat monyet serta burung raja udang.", es: "Rema por los canales de manglar del Kilim Geoforest Park, explora una cueva de murciélagos y busca monos y martines pescadores.", zh: "划桨穿越基林地质森林公园的红树林水道，探访蝙蝠洞，寻找猴子和翠鸟。" },
      inc: [{ en: "Kayak & equipment", ms: "Kayak & peralatan", es: "Kayak y equipo", zh: "皮划艇及装备" }, { en: "Naturalist guide", ms: "Pemandu alam semula jadi", es: "Guía naturalista", zh: "自然向导" }, { en: "Local lunch", ms: "Makan tengah hari tempatan", es: "Almuerzo local", zh: "本地午餐" }, { en: "Hotel pick-up", ms: "Jemputan hotel", es: "Recogida en el hotel", zh: "酒店接送" }],
      bring: { en: "Comfortable clothes that can get wet.", ms: "Pakaian selesa yang boleh basah.", es: "Ropa cómoda que se pueda mojar.", zh: "可以弄湿的舒适衣物。" } },
    { id: "snorkel", photo: "diving", price: 290,
      n: { en: "Snorkelling Day Trip", ms: "Lawatan Snorkeling", es: "Excursión de snorkel", zh: "浮潜一日游" },
      dur: { en: "Full day", ms: "Sehari penuh", es: "Día completo", zh: "全天" },
      d: { en: "Speedboat to Pulau Payar Marine Park to snorkel in clear water with tropical fish and coral.", ms: "Bot laju ke Taman Laut Pulau Payar untuk snorkeling di air jernih bersama ikan tropika dan batu karang.", es: "Lancha rápida al Parque Marino de Pulau Payar para hacer snorkel en aguas claras con peces tropicales y coral.", zh: "乘快艇前往帕亚岛海洋公园，在清澈海水中与热带鱼和珊瑚一起浮潜。" },
      inc: [{ en: "Speedboat transfer", ms: "Bot laju", es: "Traslado en lancha", zh: "快艇接送" }, { en: "Snorkel gear", ms: "Peralatan snorkel", es: "Equipo de snorkel", zh: "浮潜装备" }, { en: "Lunch", ms: "Makan tengah hari", es: "Almuerzo", zh: "午餐" }, { en: "Park fees", ms: "Yuran taman", es: "Entrada al parque", zh: "公园门票" }],
      bring: { en: "Swimwear, towel, reef-safe sunscreen.", ms: "Pakaian renang, tuala, pelindung matahari mesra terumbu.", es: "Bañador, toalla, protector solar respetuoso con el coral.", zh: "泳衣、毛巾、对珊瑚友好的防晒霜。" } },
    { id: "sunset", photo: "sunset", price: 260,
      n: { en: "Sunset Cruise", ms: "Pelayaran Senja", es: "Crucero al atardecer", zh: "日落巡航" },
      dur: { en: "3 hours", ms: "3 jam", es: "3 horas", zh: "3 小时" },
      d: { en: "Sail along the west coast as the sun goes down, with dinner, drinks and a swim stop.", ms: "Belayar di pantai barat ketika matahari terbenam, dengan makan malam, minuman dan singgah berenang.", es: "Navega por la costa oeste mientras se pone el sol, con cena, bebidas y parada para bañarse.", zh: "日落时分沿西海岸航行，含晚餐、饮品和游泳停留。" },
      inc: [{ en: "Dinner on board", ms: "Makan malam di atas kapal", es: "Cena a bordo", zh: "船上晚餐" }, { en: "Soft drinks", ms: "Minuman ringan", es: "Refrescos", zh: "软饮" }, { en: "Swim stop", ms: "Singgah berenang", es: "Parada para nadar", zh: "游泳停留" }, { en: "Hotel pick-up", ms: "Jemputan hotel", es: "Recogida en el hotel", zh: "酒店接送" }],
      bring: { en: "A light jacket for the evening.", ms: "Jaket nipis untuk waktu malam.", es: "Una chaqueta ligera para la noche.", zh: "一件晚上穿的薄外套。" } },
    { id: "hike", photo: "waterfall", price: 150,
      n: { en: "Rainforest & Waterfall Hike", ms: "Mendaki Hutan Hujan & Air Terjun", es: "Senderismo selva y cascada", zh: "雨林与瀑布徒步" },
      dur: { en: "4 hours", ms: "4 jam", es: "4 horas", zh: "4 小时" },
      d: { en: "A guided walk through the rainforest to a waterfall, with stops to learn about plants, birds and wildlife.", ms: "Berjalan dengan pemandu melalui hutan hujan ke air terjun, sambil belajar tentang tumbuhan, burung dan hidupan liar.", es: "Caminata guiada por la selva hasta una cascada, con paradas para conocer plantas, aves y fauna.", zh: "在向导带领下穿越雨林前往瀑布，沿途了解植物、鸟类和野生动物。" },
      inc: [{ en: "Guide", ms: "Pemandu", es: "Guía", zh: "导游" }, { en: "Snacks & water", ms: "Snek & air", es: "Snacks y agua", zh: "零食和饮用水" }, { en: "Hotel pick-up", ms: "Jemputan hotel", es: "Recogida en el hotel", zh: "酒店接送" }, { en: "Swim at the falls", ms: "Mandi di air terjun", es: "Baño en la cascada", zh: "瀑布戏水" }],
      bring: { en: "Trainers, insect repellent, swimwear.", ms: "Kasut sukan, penghalau serangga, pakaian renang.", es: "Zapatillas, repelente de insectos, bañador.", zh: "运动鞋、驱虫剂、泳衣。" } }
  ];
  var list = document.getElementById("tour-list"), sel = document.getElementById("t-tour");
  function waText(tour) { return t("t.wa.tour").replace("{tour}", L(tour.n)); }
  D.onRender(function () {
    list.innerHTML = TOURS.map(function (x) {
      return '<article class="tour" id="tour-' + x.id + '"><div class="ph"><img data-photo="' + x.photo + '" data-w="800" alt="' + esc(L(x.n)) + '"></div><div class="tour-body">' +
        "<h3>" + esc(L(x.n)) + '</h3><div class="chips"><span><svg class="icon" aria-hidden="true"><use href="#d-clock"/></svg>' + esc(L(x.dur)) + '</span><span><svg class="icon" aria-hidden="true"><use href="#d-users"/></svg>' + esc(t("t.group")) + "</span></div>" +
        "<p>" + esc(L(x.d)) + "</p>" +
        '<details><summary><svg class="icon" aria-hidden="true"><use href="#d-plus"/></svg>' + esc(t("t.details")) + '</summary><ul class="inc">' +
        x.inc.map(function (i) { return '<li><svg class="icon" aria-hidden="true"><use href="#d-check"/></svg>' + esc(L(i)) + "</li>"; }).join("") +
        '</ul><p class="bring"><b>' + esc(t("t.bring")) + "</b> " + esc(L(x.bring)) + "</p></details>" +
        '<div class="tour-foot"><span class="tour-price">' + esc(t("t.from")) + " <b>RM " + x.price + '</b></span><div class="acts">' +
        '<button class="btn btn--teal" type="button" data-book="' + x.id + '">' + esc(t("t.request")) + "</button>" +
        '<button class="btn btn--wa" type="button" data-demo="wa" data-demo-text="' + esc(waText(x)) + '" aria-label="WhatsApp"><svg aria-hidden="true"><use href="#d-wa"/></svg></button>' +
        "</div></div></div></article>";
    }).join("");
    var keep = sel.value;
    sel.innerHTML = '<option value="">' + esc(t("f.choose")) + "</option>" + TOURS.map(function (x) { return '<option value="' + x.id + '">' + esc(L(x.n)) + " – RM " + x.price + "</option>"; }).join("");
    sel.value = keep;
  });
  list.addEventListener("click", function (e) {
    var b = e.target.closest("[data-book]");
    if (!b) return;
    sel.value = b.getAttribute("data-book");
    document.getElementById("book").scrollIntoView({ behavior: "smooth" });
    setTimeout(function () { document.getElementById("t-date").focus({ preventScroll: true }); }, 600);
  });
})();
