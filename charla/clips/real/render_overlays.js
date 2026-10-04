// Genera ov_<n>.png (1600x900, con el hueco del video transparente) para cada tramo.
const { chromium } = require('../clips/node_modules/playwright-core');
const path = require('path');
(async () => {
  const segs = process.argv.slice(2);
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
  for (let i = 0; i < segs.length; i++) {
    const [times, tag, title, note] = segs[i].split('|');
    const k = times.trim().split(/\s+/)[2];
    const q = new URLSearchParams({ tag, title, note, speed: `VELOCIDAD ×${k}` });
    await p.goto('file://' + path.resolve('overlay.html') + '?' + q.toString());
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: `ov_${i + 1}.png`, omitBackground: true });
  }
  await b.close();
})();
