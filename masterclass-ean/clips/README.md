# Videos cortos de la masterclass

Cuatro animaciones en la paleta EAN (1920×960, MP4 H.264, sin audio). Ya están insertadas en la presentación y arrancan solas al mostrar su diapositiva.

| Archivo | Diapositiva | Duración | Qué muestra |
|---|---|---|---|
| `mamarracho.html` | 4 · Mismo modelo, otra arquitectura | 17 s | Prompt suelto que produce un «mamarracho» contra una demanda armada con fuentes, instrucciones y controles |
| `seudonimizar.html` | 17 · Seudonimizar no es anonimizar | 14 s | Los datos sensibles se vuelven etiquetas y aparece la tabla de llaves |
| `escalera.html` | 20 · La escalera del abogado aumentado | 13 s | El punto «TÚ» sube del prompt suelto al agente gobernado |
| `flujo.html` | 25 · Lo que haces 10 veces, se automatiza | 14 s | Doce PQRS pasan por las cinco estaciones, con parada en el control humano |

Los nombres y datos de los videos son ficticios.

Para regrabar uno después de editar su HTML:

```bash
npm i playwright-core @fontsource/inter @fontsource/jetbrains-mono
node record.js mamarracho.html out/mamarracho 17 30   # genera out/mamarracho.mp4 y el cuadro fijo out/mamarracho.png
```
