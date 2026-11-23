// Uso: node record.js <archivo.html> <salida-sin-extension> <segundos> [fps] [posterSeg]
// La página expone window.render(t). Genera <salida>.mp4 (H.264) y <salida>.png (cuadro fijo).
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path');
const [,, html, out, secs, fpsArg, posterArg] = process.argv;
const fps = Number(fpsArg || 30), total = Math.round(Number(secs) * fps);
const W = Number(process.env.W || 1920), H = Number(process.env.H || 960);
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.goto('file://' + path.resolve(html));
  await page.evaluate(() => document.fonts.ready);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out + '.mp4']);
  ff.stderr.on('data', d => process.stderr.write(d));
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => window.render(t), i / fps);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await page.evaluate(t => window.render(t), Number(posterArg || secs - 0.1));
  await page.screenshot({ path: out + '.png' });
  await browser.close();
  const code = await new Promise(r => ff.on('close', r));
  if (code !== 0) { console.error('ffmpeg falló', code); process.exit(1); }
  console.log('ok', out);
})();
