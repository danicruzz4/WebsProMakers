// Servidor local sin dependencias. Imita Cloudflare Pages: URLs limpias, 404.html y _headers.
// Uso:  npm start   (o)   node scripts/serve.mjs   → abre http://localhost:8080
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const PORT = Number(process.env.PORT || 8080);
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json", ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml" };

function parseHeaders() {
  const rules = []; let cur = null;
  const file = path.join(ROOT, "_headers");
  if (!fs.existsSync(file)) return rules;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    if (!/^\s/.test(line)) { cur = { pattern: line.trim(), headers: {} }; rules.push(cur); }
    else if (cur) { const i = line.indexOf(":"); cur.headers[line.slice(0, i).trim()] = line.slice(i + 1).trim(); }
  }
  return rules;
}
const RULES = parseHeaders();
function headersFor(url) {
  const out = {};
  for (const r of RULES) {
    const re = new RegExp("^" + r.pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$");
    if (re.test(url)) Object.assign(out, r.headers);
  }
  return out;
}

http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(ROOT, url);
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    if (!url.endsWith("/")) { res.writeHead(308, { Location: url + "/" }); return res.end(); }
    file = path.join(file, "index.html");
  }
  let status = 200;
  if (!fs.existsSync(file)) { file = path.join(ROOT, "404.html"); status = 404; }
  res.writeHead(status, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", ...headersFor(url) });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`WebsProMakers → http://localhost:${PORT}  (Ctrl+C para parar)`));
