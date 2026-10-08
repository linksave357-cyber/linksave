import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function savePNG(width, height, drawFn, outPath) {
  const rowBytes = width * 4;
  const rawData = Buffer.alloc(height * (rowBytes + 1));
  
  for (let y = 0; y < height; y++) {
    const rowOffset = y * (rowBytes + 1);
    rawData[rowOffset] = 0;
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a !== undefined ? a : 255;
    }
  }

  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdrChunk = createChunk('IHDR', ihdrData);
  const compressed = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  fs.writeFileSync(outPath, Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]));
  console.log(`Saved ${outPath} (${width}x${height})`);
}

// 1. Generate 1280x800 Store Screenshot
savePNG(1280, 800, (x, y, w, h) => {
  // Dark luxury slate background with soft indigo glow in center
  const dx = (x - w / 2) / (w / 2);
  const dy = (y - h / 2) / (h / 2);
  const dist = Math.hypot(dx, dy);
  
  // Background gradient: #020617 to #0f172a
  let r = 2 + Math.round((1 - Math.min(dist, 1)) * 30);
  let g = 6 + Math.round((1 - Math.min(dist, 1)) * 35);
  let b = 23 + Math.round((1 - Math.min(dist, 1)) * 75);

  // Browser Window frame (x: 100 to 1180, y: 80 to 720)
  if (x >= 100 && x <= 1180 && y >= 80 && y <= 720) {
    // Window header (y: 80 to 130)
    if (y <= 130) {
      r = 15; g = 23; b = 42; // #0f172a
      // Window control dots (red, yellow, green)
      if (y >= 100 && y <= 112) {
        if (x >= 130 && x <= 142) { r = 239; g = 68; b = 68; } // red
        else if (x >= 152 && x <= 164) { r = 245; g = 158; b = 11; } // yellow
        else if (x >= 174 && x <= 186) { r = 34; g = 197; b = 94; } // green
      }
      // URL address bar (x: 230 to 950, y: 95 to 118)
      if (x >= 230 && x <= 950 && y >= 95 && y <= 118) {
        r = 30; g = 41; b = 59;
      }
    } else {
      // Main browser window interior
      r = 10; g = 15; b = 29; // #0a0f1d
      
      // Video player mockup area (x: 140 to 820, y: 160 to 520)
      if (x >= 140 && x <= 820 && y >= 160 && y <= 520) {
        r = 15; g = 23; b = 42;
        // Play button triangle in center of video
        const vx = (x - 480);
        const vy = (y - 340);
        if (Math.hypot(vx, vy) <= 36) {
          r = 37; g = 99; b = 235; // blue circle
          if (vx >= -10 && vx <= 14 && Math.abs(vy) <= (14 - vx) * 0.8) {
            r = 255; g = 255; b = 255; // white play icon
          }
        }
      }

      // Action Bar: "Download with LinkSave" prominent button (x: 580 to 800, y: 550 to 590)
      if (x >= 580 && x <= 800 && y >= 550 && y <= 590) {
        // Gradient button: #2563eb to #4f46e5
        const bt = (x - 580) / 220;
        r = Math.round(37 + bt * 42);
        g = Math.round(99 - bt * 29);
        b = Math.round(235 - bt * 6);
      }

      // LinkSave Extension Popup Card Mockup on top right (x: 850 to 1140, y: 160 to 600)
      if (x >= 850 && x <= 1140 && y >= 160 && y <= 600) {
        r = 15; g = 23; b = 42;
        // Border of popup
        if (x === 850 || x === 1140 || y === 160 || y === 600) {
          r = 59; g = 130; b = 246;
        }
        // Popup action button inside (x: 880 to 1110, y: 320 to 365)
        if (x >= 880 && x <= 1110 && y >= 320 && y <= 365) {
          r = 37; g = 99; b = 235;
        }
      }
    }
  }

  return [r, g, b, 255];
}, path.resolve('extension/screenshot_1280x800.png'));

// 2. Generate 440x280 Small Promotional Tile
savePNG(440, 280, (x, y, w, h) => {
  const t = (x + y) / (w + h);
  let r = Math.round(15 + t * 25);
  let g = 23 + Math.round(t * 30);
  let b = Math.round(42 + t * 140);
  
  // Center logo badge (x: 180 to 260, y: 80 to 160)
  if (x >= 180 && x <= 260 && y >= 80 && y <= 160) {
    const lx = (x - 220);
    const ly = (y - 120);
    if (Math.hypot(lx, ly) <= 36) {
      r = 37; g = 99; b = 235;
      if (Math.abs(lx) <= 6 && ly >= -18 && ly <= 10) { r = 255; g = 255; b = 255; }
      if (ly >= 0 && ly <= 16 && Math.abs(Math.abs(lx) - (16 - ly)) <= 5) { r = 255; g = 255; b = 255; }
    }
  }
  return [r, g, b, 255];
}, path.resolve('extension/small_promo_440x280.png'));
