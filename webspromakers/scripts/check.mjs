// Comprobación rápida antes de publicar:  npm run check
// - Cada texto con data-i18n tiene traducción en ms, es y zh
// - Los archivos enlazados (src/href locales) existen
// - Las fotos usadas (data-photo) existen en photos.js
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const LANGS = ["ms", "es", "zh"];
let problems = 0;
const warn = (m) => { problems++; console.log("  ✗ " + m); };

function walk(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]); }
const pages = walk(ROOT).filter((f) => f.endsWith(".html") && !f.endsWith("404.html"));
const photosSrc = fs.readFileSync(path.join(ROOT, "assets/js/photos.js"), "utf8");
const photoKeys = new Set([...photosSrc.matchAll(/"([a-z0-9-]+)":\s*"/g)].map((m) => m[1]));

for (const page of pages) {
  const rel = path.relative(ROOT, page);
  console.log("• " + rel);
  const html = fs.readFileSync(page, "utf8");
  const dir = path.dirname(page);
  const resolve = (u) => u.startsWith("/") ? path.join(ROOT, u) : path.join(dir, u);
  // scripts -> load dictionaries
  const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((m) => m[1]).filter((s) => !/^https?:/.test(s));
  const dict = {};
  const sandbox = { window: {}, document: { readyState: "loading", addEventListener() {}, documentElement: { classList: { add() {} } }, getElementById() { return { addEventListener() {} }; } }, location: { search: "" } };
  sandbox.window = sandbox;
  sandbox.WPM = sandbox.window.WPM = { addStrings: (l, o) => { dict[l] = Object.assign(dict[l] || {}, o); }, $all: () => [], t: (k) => k };
  sandbox.DEMO = sandbox.window.DEMO = { onRender() {}, L: (o) => o, esc: (s) => s };
  for (const s of scripts) {
    const f = resolve(s);
    if (!fs.existsSync(f)) { warn("falta el script " + s); continue; }
    if (["core.js", "site.js", "qr.js", "config.js", "photos.js"].includes(path.basename(f))) continue;
    try { vm.runInNewContext(fs.readFileSync(f, "utf8"), sandbox); } catch (e) { if (process.env.DEBUG) console.log("   (script " + s + ": " + e.message + ")"); }
  }
  const keys = new Set([...html.matchAll(/data-i18n(?:-html|-ph|-aria|-alt|-title|-content)?="([^"]+)"/g)].map((m) => m[1]));
  if (process.env.DEBUG) console.log("   claves:", keys.size, "ms:", Object.keys(dict.ms || {}).length);
  for (const k of keys) for (const l of LANGS) if (!(dict[l] && k in dict[l])) warn(`sin traducción [${l}] ${k}`);
  // local files
  for (const m of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
    const u = m[1].split("?")[0];
    if (!u || u.startsWith("//")) continue;
    let f = resolve(u);
    if (u.endsWith("/")) f = path.join(f, "index.html");
    if (!fs.existsSync(f)) warn("enlace roto: " + m[1]);
  }
  for (const m of html.matchAll(/data-photo="([^"]+)"/g)) if (!photoKeys.has(m[1])) warn("foto no definida en photos.js: " + m[1]);
}
// photos used inside demo scripts
for (const f of walk(ROOT).filter((f) => f.endsWith(".js"))) {
  for (const m of fs.readFileSync(f, "utf8").matchAll(/photo:\s*"([a-z0-9-]+)"/g)) if (!photoKeys.has(m[1])) warn(`${path.relative(ROOT, f)}: foto no definida ${m[1]}`);
}
console.log(problems ? `\n${problems} problema(s) encontrados.` : "\n✓ Todo correcto.");
process.exitCode = problems ? 1 : 0;
