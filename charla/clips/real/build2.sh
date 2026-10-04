#!/bin/bash
# Arma los dos clips reales: (1) construir la casa e instalarla, (2) de Cowork al Word auditado.
# Cada tramo: fuente | inicio fin velocidad | filtro previo (tapas + recorte) | etiqueta | título | nota
set -e
S=/tmp/claude-0/-home-user-Adrivea/90f61ef3-601d-5892-897b-5eddfeae7930/scratchpad
FF=$(ls $S/pyff/imageio_ffmpeg/binaries/ffmpeg*)
cd $S/real

CROP_CC="crop=925:690:330:28"                                   # Claude Code sin barra lateral ni título
TAPE_A="drawbox=x=368:y=137:w=186:h=18:color=0xFFD23F:t=fill,drawbox=x=690:y=369:w=98:h=18:color=0xFFD23F:t=fill"
TAPE_B="drawbox=x=700:y=348:w=66:h=34:color=0xFFD23F:t=fill"   # "(wm-core)" mientras se desplaza
CROP_GH="crop=1200:690:40:30"                                   # GitHub sin pestañas del navegador
CROP_CW1="crop=1204:720:36:0"                                   # Cowork, sin barra lateral
CROP_CW2="crop=907:720:333:0"                                   # Cowork, con la barra lateral recortada

build() {  # $1 = salida, $2 = rótulo superior, resto = tramos
  local out=$1 pill=$2; shift 2
  local segs=("$@") meta=()
  for s in "${segs[@]}"; do IFS='|' read -r src times flt tag title note <<< "$s"; meta+=("$times|$tag|$title|$note"); done
  PILL="$pill" OVP="ov_${out}_" node render_overlays.js "${meta[@]}"
  : > list_$out.txt
  local i=0
  for s in "${segs[@]}"; do
    IFS='|' read -r src times flt tag title note <<< "$s"
    read -r a b k <<< "$times"
    i=$((i+1))
    $FF -loglevel error -y -ss $a -to $b -i $src -i ov_${out}_$i.png -filter_complex \
      "[0:v]$flt,setpts=PTS/$k,fps=24,scale=1060:772:force_original_aspect_ratio=decrease:flags=lanczos,pad=1060:772:(ow-iw)/2:(oh-ih)/2:color=white,pad=1600:900:500:100:color=0xFFF6E5[v];[v][1:v]overlay=0:0,format=yuv420p[o]" \
      -map "[o]" -an -c:v libx264 -preset veryfast -crf 16 seg_${out}_$i.mp4
    echo "file 'seg_${out}_$i.mp4'" >> list_$out.txt
  done
  $FF -loglevel error -y -f concat -safe 0 -i list_$out.txt -c:v libvpx -b:v 3M -crf 8 -qmin 0 -qmax 36 -deadline good -cpu-used 4 -pix_fmt yuv420p $out.webm
  $FF -loglevel error -y -ss 2 -i $out.webm -frames:v 1 $out.png
  $FF -hide_banner -i $out.webm 2>&1 | grep Duration
}

build casa_real "ASÍ SE VE DE VERDAD" \
  "completo.mp4|163 215 6|$CROP_CC|PASO 1|CONSTRUYA LA CASA|Tecleo el prompt: ¡créame la casa!" \
  "completo.mp4|276 292 3|$TAPE_A,$CROP_CC|PASO 2|CLAUDE PREGUNTA Y ESTUDIA|2 agentes revisan mis carpetas" \
  "completo.mp4|320 368 6|$CROP_CC|PASO 3|LA CASA, CONSTRUIDA|Playbook, skills, agentes y scripts" \
  "completo.mp4|368.5 373.5 2|$TAPE_B,$CROP_CC|PASO 4|INSTALAR LOS PLUGINS|claude plugin marketplace add…" \
  "nuevos.mp4|0 40 5|$CROP_GH|PASO 5|LO QUE ENCUENTRO EN GITHUB|Mi casa, privada y con su README"

build cowork_real "DEL MARKETPLACE A COWORK" \
  "nuevos.mp4|147 196 5|$CROP_CW1|PASO 1|LA CASA, EN CLAUDE COWORK|“Me llegó un nuevo contrato”: 7 pasos solos" \
  "nuevos.mp4|196 281 5|$CROP_CW2|PASO 2|APROBACIÓN Y CARPETA DEL ASUNTO|Word, auditoría y correo de remisión" \
  "completo.mp4|560 626 4|$CROP_CC|PASO 3|EL WORD AUDITADO|Y ahora… reviso con lupa"
ls -la casa_real.* cowork_real.*
