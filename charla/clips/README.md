# Videoclips de la charla

Fuentes de los tres videoclips que se reproducen solos dentro de la presentación:

| Archivo | Viñeta | Duración |
|---|---|---|
| `guayaba.html` | Collage original de la generación de la guayaba | 30 s |
| `guayaba2.html` | Versión de la viñeta 2: intro con tus fotos y la guayaba + el collage original | 36,5 s |
| `casa.html` | Paso a paso: de la carpeta al condominio | 58 s |
| `contrato.html` | El contrato con auditoría al margen | 31 s |

Cada página dibuja un cuadro con `window.render(t)`. `record.js` la recorre cuadro por cuadro con Chromium y la codifica en WebM.

```bash
npm i playwright-core @fontsource/bangers @fontsource/nunito-sans @fontsource/caveat @fontsource/jetbrains-mono
node record.js guayaba.html out_guayaba 30 24 23.5   # genera out_guayaba.webm y la imagen fija out_guayaba.png
```

Todo lo que aparece en los clips es ficticio (Faro Legal, Productora Andina, Canal Nébula, el repositorio `despacho/…`).
