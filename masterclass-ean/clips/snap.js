const { chromium } = require('playwright-core'); const path=require('path');
const [,, html, ...ts] = process.argv;
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1243/chrome-linux64/chrome'});
const p=await b.newPage({viewport:{width:1920,height:960}});await p.goto('file://'+path.resolve(html));await p.evaluate(()=>document.fonts.ready);
for(const t of ts){await p.evaluate(t=>window.render(t),Number(t));await p.screenshot({path:`/tmp/claude-0/-home-user-Adrivea/ab9e6443-1e4f-5f70-9630-ec7d8b7ad195/scratchpad/snap_${path.basename(html,'.html')}_${t}.png`});}
await b.close();})();
