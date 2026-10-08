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

function createPNG(size) {
  const width = size;
  const height = size;
  
  // Create RGBA image buffer with rounded gradient rect and download arrow
  const rowBytes = width * 4;
  const rawData = Buffer.alloc(height * (rowBytes + 1));
  
  const r = size * 0.22; // corner radius
  for (let y = 0; y < height; y++) {
    const rowOffset = y * (rowBytes + 1);
    rawData[rowOffset] = 0; // Filter: None
    
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      
      // Check rounded rect bounds
      let inside = true;
      const dx = Math.min(x, width - 1 - x);
      const dy = Math.min(y, height - 1 - y);
      if (dx < r && dy < r) {
        const dist = Math.hypot(r - dx, r - dy);
        if (dist > r) inside = false;
      }
      
      if (!inside) {
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
        continue;
      }
      
      // Gradient background (blue #2563eb to indigo #4f46e5)
      const t = (x + y) / (width + height);
      let red = Math.round(37 + t * (79 - 37));
      let green = Math.round(99 + t * (70 - 99));
      let blue = Math.round(235 + t * (229 - 235));
      let alpha = 255;
      
      // Center arrow / download symbol (normalized coords)
      const nx = (x - width / 2) / (width / 2);
      const ny = (y - height / 2) / (height / 2);
      
      // Vertical arrow line: |nx| <= 0.12 and -0.45 <= ny <= 0.2
      const isArrowStem = Math.abs(nx) <= 0.12 && ny >= -0.45 && ny <= 0.2;
      // Arrow head: diagonal lines pointing down
      const isArrowHead = ny >= 0.05 && ny <= 0.35 && Math.abs(Math.abs(nx) - (0.35 - ny) * 0.8) <= 0.12;
      // Horizontal bar at bottom: ny around 0.5, |nx| <= 0.5
      const isBaseBar = ny >= 0.42 && ny <= 0.56 && Math.abs(nx) <= 0.5;
      
      if (isArrowStem || isArrowHead || isBaseBar) {
        red = 255;
        green = 255;
        blue = 255;
      }
      
      rawData[pxOffset] = red;
      rawData[pxOffset + 1] = green;
      rawData[pxOffset + 2] = blue;
      rawData[pxOffset + 3] = alpha;
    }
  }
  
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit depth
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // deflate
  ihdrData[11] = 0; // filter none
  ihdrData[12] = 0; // no interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);
  
  const compressed = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', compressed);
  
  const iendChunk = createChunk('IEND', Buffer.alloc(0));
  
  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.resolve('extension/icons');
fs.mkdirSync(outDir, { recursive: true });

[16, 48, 128, 300].forEach(size => {
  const pngBuf = createPNG(size);
  const outPath = path.join(outDir, `icon${size}.png`);
  fs.writeFileSync(outPath, pngBuf);
  console.log(`Generated ${outPath} (${pngBuf.length} bytes)`);
});
