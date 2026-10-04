// Uso: node record.js <archivo.html> <salida-sin-extension> <segundos> [fps] [stillSeg]
// La página debe exponer window.render(t) que dibuja el cuadro en el segundo t.
const { chromium } = require('playwright-core');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const [,, html, out, secs, fpsArg, stillArg] = process.argv;
const fps = Number(fpsArg || 24);
const total = Math.round(Number(secs) * fps);
const W = Number(process.env.W || 1600), H = Number(process.env.H || 900);

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.goto('file://' + path.resolve(html));
  await page.evaluate(() => document.fonts && document.fonts.ready);
  const stream = out + '.mjpeg';
  const fd = fs.openSync(stream, 'w');
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => window.render(t), i / fps);
    fs.writeSync(fd, await page.screenshot({ type: 'jpeg', quality: 92 }));
  }
  fs.closeSync(fd);
  await page.evaluate(t => window.render(t), Number(stillArg || secs * 0.9));
  await page.screenshot({ path: out + '.png' });
  await browser.close();
  const ff = spawn('/opt/pw-browsers/ffmpeg-1011/ffmpeg-linux', [
    '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', stream,
    '-c:v', 'libvpx', '-b:v', '5M', '-crf', '6', '-qmin', '0', '-qmax', '30', '-deadline', 'good', '-cpu-used', '4',
    '-pix_fmt', 'yuv420p', out + '.webm']);
  ff.stderr.on('data', d => process.stderr.write(d));
  const code = await new Promise(r => ff.on('close', r));
  if (code !== 0) { console.error('ffmpeg falló', code); process.exit(1); }
  fs.rmSync(stream, { force: true });
  console.log('ok', out);
})();
