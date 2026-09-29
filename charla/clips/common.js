// Animación determinista: render(t) coloca cada elemento según el segundo t.
// data-pop="inicio[,fin]"  → aparece con rebote y desaparece al final.
// data-fade="inicio[,fin]" → aparece con fundido (y leve subida).
// data-type="inicio,cps"   → escribe su texto letra por letra.
// data-rot="grados"        → rotación base.
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const easeOut = x => 1 - Math.pow(1 - clamp(x), 3);
const backOut = x => { x = clamp(x); const c1 = 2.2, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const span = (t, a, d) => clamp((t - a) / d);

function parse(el, key) { return el.dataset[key].split(',').map(Number); }

function baseRender(t) {
  document.querySelectorAll('[data-pop]').forEach(el => {
    const [a, b = Infinity] = parse(el, 'pop');
    const rot = Number(el.dataset.rot || 0);
    const inP = span(t, a, 0.45), outP = span(t, b, 0.3);
    const s = (0.3 + 0.7 * backOut(inP)) * (1 - 0.3 * outP);
    el.style.opacity = clamp(inP * 3) * (1 - outP);
    el.style.transform = `rotate(${rot}deg) scale(${s})`;
  });
  document.querySelectorAll('[data-fade]').forEach(el => {
    const [a, b = Infinity] = parse(el, 'fade');
    const rot = Number(el.dataset.rot || 0);
    const inP = easeOut(span(t, a, 0.5)), outP = span(t, b, 0.35);
    el.style.opacity = inP * (1 - outP);
    el.style.transform = `rotate(${rot}deg) translateY(${(1 - inP) * 24}px)`;
  });
  document.querySelectorAll('[data-type]').forEach(el => {
    if (el._full === undefined) el._full = el.textContent;
    const [a, cps] = parse(el, 'type');
    const n = Math.max(0, Math.floor((t - a) * cps));
    el.textContent = el._full.slice(0, n);
    el.classList.toggle('typing', n > 0 && n < el._full.length);
  });
}
window.render = t => { baseRender(t); if (window.extra) window.extra(t); };
