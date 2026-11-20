/*
 * WebsProMakers — Minimal QR code generator (byte mode, versions 1–10, error correction M).
 * No external dependencies. Usage:
 *   const svg = WPMQR.toSVG("https://example.com", { dark: "#0e1311", light: "#ffffff" });
 * Algorithm follows ISO/IEC 18004 (structure inspired by Nayuki's public-domain-style reference design).
 */
(function (root) {
  "use strict";

  // Error correction level M only (good balance for printed menus).
  var ECC_PER_BLOCK = [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26];
  var NUM_BLOCKS = [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5];
  var FORMAT_BITS_M = 0;

  function numRawDataModules(ver) {
    var result = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
      var numAlign = Math.floor(ver / 7) + 2;
      result -= (25 * numAlign - 10) * numAlign - 55;
      if (ver >= 7) result -= 36;
    }
    return result;
  }

  function numDataCodewords(ver) {
    return Math.floor(numRawDataModules(ver) / 8) - ECC_PER_BLOCK[ver] * NUM_BLOCKS[ver];
  }

  function gfMul(x, y) {
    var z = 0;
    for (var i = 7; i >= 0; i--) {
      z = (z << 1) ^ ((z >>> 7) * 0x11d);
      z ^= ((y >>> i) & 1) * x;
    }
    return z & 0xff;
  }

  function rsDivisor(degree) {
    var result = [];
    for (var i = 0; i < degree - 1; i++) result.push(0);
    result.push(1);
    var root = 1;
    for (var k = 0; k < degree; k++) {
      for (var j = 0; j < result.length; j++) {
        result[j] = gfMul(result[j], root);
        if (j + 1 < result.length) result[j] ^= result[j + 1];
      }
      root = gfMul(root, 0x02);
    }
    return result;
  }

  function rsRemainder(data, divisor) {
    var result = divisor.map(function () { return 0; });
    data.forEach(function (b) {
      var factor = b ^ result.shift();
      result.push(0);
      divisor.forEach(function (coef, i) { result[i] ^= gfMul(coef, factor); });
    });
    return result;
  }

  function utf8Bytes(str) {
    var out = [];
    var s = unescape(encodeURIComponent(str));
    for (var i = 0; i < s.length; i++) out.push(s.charCodeAt(i));
    return out;
  }

  function encode(text) {
    var bytes = utf8Bytes(text);
    var ver, capBits;
    for (ver = 1; ver <= 10; ver++) {
      var ccBits = ver <= 9 ? 8 : 16;
      capBits = numDataCodewords(ver) * 8;
      if (4 + ccBits + bytes.length * 8 <= capBits) break;
    }
    if (ver > 10) throw new Error("QR: text too long");

    // Build bit stream
    var bits = [];
    function append(val, len) { for (var i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); }
    append(4, 4); // byte mode
    append(bytes.length, ver <= 9 ? 8 : 16);
    bytes.forEach(function (b) { append(b, 8); });
    append(0, Math.min(4, capBits - bits.length));
    append(0, (8 - (bits.length % 8)) % 8);
    for (var pad = 0xec; bits.length < capBits; pad ^= 0xec ^ 0x11) append(pad, 8);

    var data = [];
    for (var i = 0; i < bits.length; i += 8) {
      var v = 0;
      for (var j = 0; j < 8; j++) v = (v << 1) | bits[i + j];
      data.push(v);
    }

    // Error correction + interleaving
    var numBlocks = NUM_BLOCKS[ver], eccLen = ECC_PER_BLOCK[ver];
    var rawCodewords = Math.floor(numRawDataModules(ver) / 8);
    var numShort = numBlocks - (rawCodewords % numBlocks);
    var shortLen = Math.floor(rawCodewords / numBlocks);
    var blocks = [], div = rsDivisor(eccLen);
    for (var b = 0, k = 0; b < numBlocks; b++) {
      var dat = data.slice(k, k + shortLen - eccLen + (b < numShort ? 0 : 1));
      k += dat.length;
      var ecc = rsRemainder(dat, div);
      if (b < numShort) dat.push(0);
      blocks.push(dat.concat(ecc));
    }
    var codewords = [];
    for (var c = 0; c < blocks[0].length; c++) {
      blocks.forEach(function (blk, idx) {
        if (c !== shortLen - eccLen || idx >= numShort) codewords.push(blk[c]);
      });
    }

    // Matrix
    var size = ver * 4 + 17;
    var modules = [], isFn = [];
    for (var y = 0; y < size; y++) {
      modules.push(new Array(size).fill(false));
      isFn.push(new Array(size).fill(false));
    }
    function setFn(x, y, dark) { modules[y][x] = dark; isFn[y][x] = true; }

    // Timing
    for (var t = 0; t < size; t++) { setFn(6, t, t % 2 === 0); setFn(t, 6, t % 2 === 0); }
    // Finders
    [[3, 3], [size - 4, 3], [3, size - 4]].forEach(function (p) {
      for (var dy = -4; dy <= 4; dy++) for (var dx = -4; dx <= 4; dx++) {
        var dist = Math.max(Math.abs(dx), Math.abs(dy)), xx = p[0] + dx, yy = p[1] + dy;
        if (xx >= 0 && xx < size && yy >= 0 && yy < size) setFn(xx, yy, dist !== 2 && dist !== 4);
      }
    });
    // Alignment
    if (ver > 1) {
      var numAlign = Math.floor(ver / 7) + 2;
      var step = Math.ceil((ver * 4 + 4) / (numAlign * 2 - 2)) * 2;
      var pos = [6];
      for (var p2 = size - 7; pos.length < numAlign; p2 -= step) pos.splice(1, 0, p2);
      for (var ai = 0; ai < numAlign; ai++) for (var aj = 0; aj < numAlign; aj++) {
        if ((ai === 0 && aj === 0) || (ai === 0 && aj === numAlign - 1) || (ai === numAlign - 1 && aj === 0)) continue;
        for (var ady = -2; ady <= 2; ady++) for (var adx = -2; adx <= 2; adx++)
          setFn(pos[ai] + adx, pos[aj] + ady, Math.max(Math.abs(adx), Math.abs(ady)) !== 1);
      }
    }
    function drawFormat(mask) {
      var d = (FORMAT_BITS_M << 3) | mask, rem = d;
      for (var i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      var fb = ((d << 10) | rem) ^ 0x5412;
      function bit(i) { return ((fb >>> i) & 1) !== 0; }
      for (var a = 0; a <= 5; a++) setFn(8, a, bit(a));
      setFn(8, 7, bit(6)); setFn(8, 8, bit(7)); setFn(7, 8, bit(8));
      for (var a2 = 9; a2 < 15; a2++) setFn(14 - a2, 8, bit(a2));
      for (var a3 = 0; a3 < 8; a3++) setFn(size - 1 - a3, 8, bit(a3));
      for (var a4 = 8; a4 < 15; a4++) setFn(8, size - 15 + a4, bit(a4));
      setFn(8, size - 8, true);
    }
    drawFormat(0);
    if (ver >= 7) {
      var rv = ver;
      for (var r = 0; r < 12; r++) rv = (rv << 1) ^ ((rv >>> 11) * 0x1f25);
      var vb = (ver << 12) | rv;
      for (var vi = 0; vi < 18; vi++) {
        var vbit = ((vb >>> vi) & 1) !== 0, va = size - 11 + (vi % 3), vbb = Math.floor(vi / 3);
        setFn(va, vbb, vbit); setFn(vbb, va, vbit);
      }
    }

    // Place data
    var bi = 0;
    for (var right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (var vert = 0; vert < size; vert++) {
        for (var jj = 0; jj < 2; jj++) {
          var x = right - jj, upward = ((right + 1) & 2) === 0, yy2 = upward ? size - 1 - vert : vert;
          if (!isFn[yy2][x] && bi < codewords.length * 8) {
            modules[yy2][x] = ((codewords[bi >>> 3] >>> (7 - (bi & 7))) & 1) !== 0;
            bi++;
          }
        }
      }
    }

    function maskFn(m, x, y) {
      switch (m) {
        case 0: return (x + y) % 2 === 0;
        case 1: return y % 2 === 0;
        case 2: return x % 3 === 0;
        case 3: return (x + y) % 3 === 0;
        case 4: return (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
        case 5: return ((x * y) % 2) + ((x * y) % 3) === 0;
        case 6: return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
        default: return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
      }
    }
    function applyMask(m) {
      for (var y = 0; y < size; y++) for (var x = 0; x < size; x++)
        if (!isFn[y][x] && maskFn(m, x, y)) modules[y][x] = !modules[y][x];
    }
    function penalty() {
      var score = 0, dark = 0;
      for (var y = 0; y < size; y++) {
        var runR = 1, runC = 1;
        for (var x = 0; x < size; x++) {
          if (modules[y][x]) dark++;
          if (x > 0) {
            if (modules[y][x] === modules[y][x - 1]) { runR++; if (runR === 5) score += 3; else if (runR > 5) score++; } else runR = 1;
            if (modules[x][y] === modules[x - 1][y]) { runC++; if (runC === 5) score += 3; else if (runC > 5) score++; } else runC = 1;
          }
          if (x < size - 1 && y < size - 1) {
            var c0 = modules[y][x];
            if (c0 === modules[y][x + 1] && c0 === modules[y + 1][x] && c0 === modules[y + 1][x + 1]) score += 3;
          }
        }
      }
      var total = size * size;
      score += Math.floor(Math.abs(dark * 20 - total * 10) / total) * 10;
      return score;
    }
    var best = 0, bestScore = Infinity;
    for (var m = 0; m < 8; m++) {
      applyMask(m); drawFormat(m);
      var s = penalty();
      if (s < bestScore) { best = m; bestScore = s; }
      applyMask(m); // undo
    }
    applyMask(best); drawFormat(best);
    return { size: size, modules: modules, version: ver, mask: best };
  }

  function toSVG(text, opts) {
    opts = opts || {};
    var qr = encode(text), border = opts.border == null ? 4 : opts.border;
    var dim = qr.size + border * 2, path = [];
    for (var y = 0; y < qr.size; y++) for (var x = 0; x < qr.size; x++)
      if (qr.modules[y][x]) path.push("M" + (x + border) + "," + (y + border) + "h1v1h-1z");
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + dim + " " + dim +
      '" shape-rendering="crispEdges" role="img" aria-label="' + (opts.label || "QR code") + '">' +
      '<rect width="100%" height="100%" fill="' + (opts.light || "#fff") + '"/>' +
      '<path d="' + path.join("") + '" fill="' + (opts.dark || "#000") + '"/></svg>';
  }

  var api = { encode: encode, toSVG: toSVG };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.WPMQR = api;
})(typeof window !== "undefined" ? window : this);
