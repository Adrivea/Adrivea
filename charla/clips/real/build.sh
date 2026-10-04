#!/bin/bash
# Arma el clip real: recorta, acelera, enmarca con rótulos de cómic y une los tramos.
set -e
S=/tmp/claude-0/-home-user-Adrivea/90f61ef3-601d-5892-897b-5eddfeae7930/scratchpad
FF=$(ls $S/pyff/imageio_ffmpeg/binaries/ffmpeg*)
cd $S/real

# inicio fin velocidad | etiqueta | título | nota
SEGS=(
"150 160 5|PASO 2|ABRA CLAUDE CODE|Así se ve por dentro"
"160 215 8|PASO 3|CUÉNTELE SU PROCESO|Un solo mensaje: la casa que quiero"
"215 320 10|EL PLANO|CLAUDE ESTUDIA Y PREGUNTA|¿De qué línea eres? ¿Cuál es tu rol?"
"320 380 5|PASOS 4 A 6|LA CASA, EN GITHUB Y EN EL CONDOMINIO|Habitaciones, reglas y marketplace"
"380 480 8|PASO 7|“ME LLEGÓ UN NUEVO CONTRATO”|La casa lee el correo y pregunta lo que falta"
"480 560 8|AUDITORÍA|REVISA SOLICITUDES Y DATOS|Qué falta, qué no cuadra"
"560 626 4|RESULTADO|EL CONTRATO EN WORD|Y ahora… reviso con lupa"
)

node render_overlays.js "${SEGS[@]}"

LIST=concat.txt; : > $LIST
i=0
for seg in "${SEGS[@]}"; do
  IFS='|' read -r times tag title note <<< "$seg"
  read -r a b k <<< "$times"
  i=$((i+1))
  $FF -loglevel error -y -ss $a -to $b -i completo.mp4 -i ov_$i.png -filter_complex \
    "[0:v]crop=925:690:330:28,setpts=PTS/$k,fps=24,scale=1060:772:flags=lanczos,pad=1600:900:500:100:color=0xFFF6E5[v];[v][1:v]overlay=0:0,format=yuv420p[o]" \
    -map "[o]" -an -c:v libx264 -preset veryfast -crf 16 seg_$i.mp4
  echo "file 'seg_$i.mp4'" >> $LIST
done
$FF -loglevel error -y -f concat -safe 0 -i $LIST -c:v libvpx -b:v 3M -crf 8 -qmin 0 -qmax 36 -deadline good -cpu-used 4 -pix_fmt yuv420p real_paso_a_paso.webm
$FF -loglevel error -y -ss 62 -i real_paso_a_paso.webm -frames:v 1 real_paso_a_paso.png
ls -la real_paso_a_paso.*
