/* Carta QR de Api & Daun */
(function () {
  if (/[?&]embed=1/.test(location.search)) document.documentElement.classList.add("embed");
  var root = document.getElementById("menu-root");
  window.DEMO.onRender(function () { window.renderApiDaunMenu(root); });
  document.getElementById("call-waiter").addEventListener("click", function () { window.WPM.toast(window.WPM.t("mn.callMsg")); });
})();
