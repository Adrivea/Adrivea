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

## Cambios posteriores

- `guayaba3.html` (33,5 s): versión actual de la viñeta 2. Sin las tarjetas de Messenger ni de la panela de Celumóvil, con el título "¿Quién más está teniendo un déjà vu en este momento?".
- `escalera.html` (40 s, 1920×1080): la viñeta "En un año subimos cinco escalones" convertida en video, con la abogada subiendo un peldaño cada 8 segundos. Se graba con `W=1920 H=1080 node record.js escalera.html out_escalera 40 24 38`.
- Viñeta 16 ("En acción"): `casa.html` (0–56 s) unido con `contrato.html` (31 s) en un solo video de 1 min 27 s, para que el paso 7 termine mostrando el Word con los comentarios de auditoría al margen derecho. En `casa.html` el aviso ahora dice "4 comentarios de auditoría", igual que el Word.
