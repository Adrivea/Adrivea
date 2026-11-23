# Capacitación en IA para la MOE · Guion de mis sesiones

**Programa:** Capacitación en Inteligencia Artificial para la Misión de Observación Electoral (Appicua)
**Capacitadora:** Adriana Vergara · IA Legal Studio
**Formato:** virtual y sincrónico. **Cada sesión dura 2 horas, de 9:00 a 11:00 a. m.**
**Presentación de la sesión 1:** https://claude.ai/artifact/SjwtcFVmrRgXktnvkvnuEQ (45 diapositivas para presentar y 5 de anexo; estas mismas notas están como notas del orador)

## Mis tres sesiones (2 horas cada una)

| Sesión | Fecha | Hora | Tema | Módulo del programa |
|---|---|---|---|---|
| 1 | Lunes 23 de noviembre | 9:00 – 11:00 | IA responsable, aspectos legales y manejo seguro de la información | Módulo 2 (2 h) |
| 2 | Lunes 30 de noviembre | 9:00 – 11:00 | Investigación y gestión del conocimiento | Módulo 4, parte 1 (2 h) |
| 3 | Miércoles 2 de diciembre | 9:00 – 11:00 | Monitoreo legislativo y producción documental | Módulo 4, parte 2 (2 h) |

**Cómo leer este guion**
- `[PANTALLA]` es la diapositiva que se ve.
- *(Cursiva entre paréntesis)* es lo que haces, no lo que dices.
- Lo demás es lo que dices, en «ustedes» y en tono de conversación. Es una guía: suéltate donde te salga más natural.
- Cada diapositiva trae la hora de inicio y los minutos. Todo suma 120 minutos.
- **Si vas larga:** en el bloque 01 deja el quiz, Deloitte y Quebec; en el bloque 03 salta «Hecho, inferencia u opinión». Nunca recortes el bloque 05 (el agente en vivo): es lo que se llevan.

**Antes de entrar (lista rápida)**
- Abre la base de Damien Charlotin y actualiza la cifra de la diapositiva 10.
- Confirma con la MOE la cifra de las 150 campañas de desinformación (diapositiva 7).
- Ten abierta una herramienta gratuita para las demostraciones (micrófono incluido para la catarsis por voz), en un chat nuevo.
- Ten listo para pegar en el chat de la reunión: las instrucciones del Verificador MOE y el texto de prueba (archivo `agente-verificador-moe.md`).
- Ten a mano el PDF público de la Ley 1581 de 2012 para adjuntarlo como fuente en la prueba del agente.
- Revisa que los cuatro videos arranquen (diapositivas 6, 24, 32 y 40).
- Pide a la organización salas por áreas para el laboratorio: legal, calidad de elecciones, observatorio político, mapas de riesgo, comunicaciones y monitoreo legislativo.

# SESIÓN 1 · Lunes 23 de noviembre · 9:00 – 11:00 (2 horas)

---

## APERTURA · 9:00 – 9:08

### Diapositiva 1 · IA responsable, aspectos legales y manejo seguro de la información · 9:00 (1 min)

`[PANTALLA] IA responsable, aspectos legales y manejo seguro de la información`

Bienvenida. Hola a todos, qué bueno tenerlos acá. Soy Adriana Vergara: abogada, fundé IA Legal Studio y lo que hacemos es acompañar a organizaciones a entender la IA, formar a sus equipos y meterla de verdad en el trabajo del día a día, con gobernanza. Doy clase de IA en el Rosario y en el Externado. El miércoles José les mostró qué es la IA y cómo escoger herramienta. Hoy vamos con la pregunta que más me hacen y que a nadie nos enseñaron: cómo usarla sin poner en riesgo a la institución, a las personas que confían en la MOE ni la credibilidad de lo que publicamos.

### Diapositiva 2 · Mis tres sesiones con ustedes: 2 horas cada una · 9:01 (1 min)

`[PANTALLA] Mis tres sesiones con ustedes: 2 horas cada una`

Les cuento cómo vamos a trabajar. Tengo tres sesiones con ustedes, de dos horas cada una, de 9 a 11. Hoy es la base de todo: seguridad, aspectos legales, verificación. Las otras dos son de manos a la obra: investigación y gestión del conocimiento, y luego monitoreo legislativo y producción de informes y libros. Todo lo que veamos hoy se vuelve a usar allá: el semáforo de datos, la verificación y la regla de que la responsabilidad es humana. Y entre mis sesiones, Germán les va a mostrar el trabajo con bases de datos, así que hoy también les dejo listo cómo cuidar esas bases antes de subirlas.

### Diapositiva 3 · Agenda · 9:02 (1 min)

`[PANTALLA] Agenda`

Así vamos a repartir las dos horas. Poca teoría y mucho chat. Tengan abierta una herramienta gratuita, la que más usen: ChatGPT, Claude o Gemini. Les prometo una cosa: de aquí no se van con apuntes, se van con un agente funcionando. A las 10:05 lo armamos en vivo, lo probamos, lo atacamos y lo dejamos gobernado. Y a las 10:35 cada área diseña el suyo.

### Diapositiva 4 · ¿Le subirían a ChatGPT la base de reportes de los observadores de un municipio? · 9:03 (2 min)

`[PANTALLA] ¿Le subirían a ChatGPT la base de reportes de los observadores de un municipio?`

*(Pausa de tres segundos.)* Respondan en el chat: sí, no o ya lo hice. Casi todo el mundo dice que no. Pero la verdad es que muchos ya lo han hecho: un Excel para que les arme una tabla dinámica, un informe para que les mejore la redacción, las actas de una reunión para que las resuma. Y no lo digo para juzgar a nadie, que yo también lo hice al principio. Lo digo porque eso es justo lo que a nadie nos enseñaron: no a usar la IA, sino a usarla sin poner en riesgo a las personas que confían en nosotros. En la MOE eso pesa el doble: detrás de un reporte hay un observador o una víctima de violencia política.

### Diapositiva 5 · ¿Cuánto de lo que hicieron la semana pasada lo podría haber hecho la IA mientras ustedes dormían? · 9:05 (1 min)

`[PANTALLA] ¿Cuánto de lo que hicieron la semana pasada lo podría haber hecho la IA mientras ustedes dormían?`

Piensen en la semana pasada: el resumen de un proyecto de ley, la ficha de seguimiento, el cuadro de hechos de violencia política, la presentación para un aliado, el borrador del boletín. ¿Un veinte por ciento? ¿Un cuarenta? Déjenlo en el chat. Al final volvemos sobre esto. La idea de hoy es que ese porcentaje pueda crecer sin que crezca el riesgo.

### Diapositiva 6 · Mismo modelo, otra arquitectura · 9:06 (2 min)

`[PANTALLA] Mismo modelo, otra arquitectura`

*(Deja correr el video unos segundos antes de hablar.)* Yo no llegué a la IA convencida. Le pedía un documento y me devolvía un mamarracho: artículos de un código de otro país, sentencias que nadie había dictado. Y me daba miedo firmar algo así, y me daba miedo subirle información de un cliente. Hasta que me cayó la ficha: el problema no era la herramienta, era la forma en que yo trabajaba con ella. *(Señala el lado izquierdo.)* Esto es lo que sale con una pregunta suelta. *(Señala el derecho.)* Y esto, cuando uno le da las fuentes, le dice cómo trabaja, le pone controles y le pide un formato. Es el mismo modelo. Lo que cambió fue la arquitectura. Eso es lo que hoy vamos a construir para la MOE.


---

## BLOQUE 01 · ¿VERDAD O MENTIRA? DATOS QUE DEBERÍAN QUITARNOS EL SUEÑO · 9:08 – 9:20

### Diapositiva 7 · 2026: la primera elección en Colombia con IA a gran escala · 9:08 (1 min)

`[PANTALLA] 2026: la primera elección en Colombia con IA a gran escala`

Ustedes saben esto mejor que yo, porque lo vivieron observando. La propia MOE identificó unas 150 campañas de desinformación entre marzo de 2025 y marzo de 2026 *(confirmen la cifra exacta con su informe)*. La Misión de Observación de la Unión Europea habló de un uso sin precedentes de IA y deepfakes en la segunda vuelta. Hubo audios presentados como filtraciones que eran voces clonadas. Y en el Congreso hay más de veinte proyectos de ley sobre IA, pero ninguno sobre su uso electoral. O sea: la IA ya es objeto de observación de la MOE. La pregunta de hoy es otra: cómo la usamos adentro sin convertirnos nosotros en fuente de error. Una organización que vive de su credibilidad no se puede dar el lujo de publicar un dato que inventó una máquina.

### Diapositiva 8 · ¿Verdad o mentira? · 9:09 (3 min)

`[PANTALLA] ¿Verdad o mentira?`

Arrancamos jugando. Les leo cinco frases y en el chat me responden con el número y una letra: V si es verdad, M si es mentira. *(Lee las cinco, espera respuestas y revela una por una con clic.)* Todas las verdades las vamos a ver ahora en detalle. Y fíjense en la 3: mucha gente cree que esto pasa solo afuera. Pues no, ya nos pasó en Colombia.

### Diapositiva 9 · El caso Deloitte · 9:12 (2 min)

`[PANTALLA] El caso Deloitte`

Arranco con este porque es el que más impacta. Deloitte, una de las cuatro grandes consultoras del mundo, le entregó al Gobierno australiano un informe de 237 páginas por un contrato de 440.000 dólares australianos. Tenía una cita judicial que no existía y referencias académicas falsas. Tuvo que reconocer que usó IA y devolver casi 98.000 dólares. Y meses después, en Canadá, otro informe de 526 páginas, de 1,6 millones, con el mismo problema. Lo más diciente es el tercer dato, del propio Deloitte: el acceso a la IA se disparó, pero solo el 21 % de las empresas gobierna bien a sus agentes. Pregunta para el chat: ¿cuántos de ustedes revisaron las notas al pie del último documento que les entregó la IA?

### Diapositiva 10 · El árbitro que le pidió a la IA terminar el laudo · 9:14 (2 min)

`[PANTALLA] El árbitro que le pidió a la IA terminar el laudo`

Quebec, abril de 2026. Una controversia entre una asociación y la autoridad de salud llega a un árbitro único. La parte que pierde lee el laudo con lupa y encuentra que las autoridades que lo sostienen no existen. El juez no dijo «esto viola el orden público». Dijo algo más fino: el problema es que el árbitro delegó en la máquina la función de decidir, y las partes contrataron a una persona, no a un software. Laudo anulado y todo a empezar de cero. Años de proceso a la basura por un atajo de una tarde. Respondan en el chat con sí o no: ¿firmarían un informe que escribió una IA? ¿Y uno que una IA revisó? Guárdenlo, que al final volvemos sobre esto.

### Diapositiva 11 · Cuando la IA inventa, alguien termina respondiendo · 9:16 (1 min)

`[PANTALLA] Cuando la IA inventa, alguien termina respondiendo`

Hay un investigador francés, Damien Charlotin, que lleva una base de datos pública con las decisiones judiciales en las que un tribunal tuvo que lidiar con contenido inventado por IA. En enero de este año iban unas 700. Hoy pasan de 2.262. Treinta y dos son de jueces, no de abogados. Y uno es de un árbitro, el que acabamos de ver. *(Antes de la clase, abran la base y actualicen el número.)* Esto no es solo un tema de abogados: es el mismo error que puede pasar en un informe de la MOE, una cifra o un «según la Registraduría» que nadie verificó.

### Diapositiva 12 · Ya nos pasó en Colombia · 9:17 (1 min)

`[PANTALLA] Ya nos pasó en Colombia`

Alguien estará pensando que eso pasa en Estados Unidos. Pues no. En febrero de este año la Sala Civil de la Corte Suprema multó a un abogado que citó providencias que no existían; la Relatoría las buscó una por una y ninguna era real. La Corte habló del «pseudo-derecho»: textos que suenan a jurisprudencia pero no lo son. Y la Constitucional, en la T-323 de 2024, ya había dicho que se puede usar IA, pero con transparencia y sin que reemplace el criterio humano. En el Reino Unido la High Court fue más lejos: dijo que puede llegar a ser desacato o delito. El mensaje para la MOE: la regla no es «no usen IA», es «verifiquen». Y la MOE, que vive de señalar cuándo la información pública no cuadra, tiene que ser la primera en verificar.

### Diapositiva 13 · «Mi abogado me está manipulando» · 9:18 (1 min)

`[PANTALLA] «Mi abogado me está manipulando»`

Este caso me dejó pensando muchísimo. Graciela Dela Torre tenía un acuerdo con su aseguradora, Nippon Life, y el caso se cerró en 2024. Después copió en ChatGPT un mensaje de su abogado y le preguntó si la estaba manipulando. ChatGPT le dijo que sí. Despidió al abogado y, con ChatGPT de «asesor», radicó 44 escritos, algunos con sentencias inexistentes. En marzo de 2026 la aseguradora demandó a OpenAI por ejercicio ilegal de la abogacía. OpenAI respondió: «ChatGPT es una herramienta, no un abogado». ¿Y qué tiene que ver con la MOE? Que la gente ya le pregunta a la IA por la elección: si hubo fraude, quién ganó, qué dice la ley. La MOE puede ser la institución que enseña a verificarla. Pero primero hay que hacerlo bien adentro.

### Diapositiva 14 · Cómo serán los equipos en tres años · 9:19 (1 min)

`[PANTALLA] Cómo serán los equipos en tres años`

Deloitte Legal encuestó este año a 121 líderes de áreas jurídicas del mundo. Proyectan que en unos tres años cerca del 30 % de la capacidad de un equipo la van a poner agentes de IA, un 20 % serán perfiles híbridos y el resto, personas expertas. Y miren esto: en 2024 el 76 % no usaba IA; hoy solo el 2 % sigue sin usarla. Pero el 84 % no ha cambiado nada en la forma de trabajar. Todos tienen la herramienta, casi nadie cambió el método. Ahí está la oportunidad para la MOE: no se trata de tener ChatGPT, se trata de rediseñar cómo trabaja cada área.


---

## BLOQUE 02 · DEL PROMPT AL SISTEMA · 9:20 – 9:32

### Diapositiva 15 · Un año para subir cinco escalones · 9:20 (4 min)

`[PANTALLA] Un año para subir cinco escalones`

*(Cada clic enciende un escalón.)* Todo lo que vivimos del disquete a la nube pasó en treinta años. Pero esto pasó en más o menos uno. Primero, la IA fundacional, aislada: le preguntábamos cualquier pendejada y ella, feliz, respondía. Después, a generar documentos: «hazme un informe», y salía uno de otro país. Luego vino el cuento del prompt: cada quien hacía sus vainas, cursos de prompts, prompts para hacer prompts. Después, las arquitecturas de trabajo: habilidades, manuales, procesos; ya no se le pregunta, se le enseña. Y hoy, las estructuras agénticas: equipos de IA que hacen el proceso completo, del inventario de los reportes al informe listo para que ustedes lo revisen. Ahora ustedes: en el chat, un número del 1 al 5. ¿En qué escalón está su área? *(Lean algunas respuestas en voz alta.)* La meta de este programa es que cada área suba por lo menos dos.

### Diapositiva 16 · Bienvenidos a la era agéntica · 9:24 (3 min)

`[PANTALLA] Bienvenidos a la era agéntica`

La IA dejó de ser solo un chat que responde: hoy empieza a ejecutar trabajo. Hace dos años le pedíamos que resumiera un documento. Hoy le podemos decir: lee estos trescientos reportes, seudonimízalos, clasifícalos, arma la matriz y avísame qué merece alerta. Y lo hace, paso por paso. Eso es la era agéntica: ustedes pasan de ser quienes hacen a ser quienes dirigen. Pero ojo con la última frase: un agente mal dirigido es un practicante con energía infinita y cero criterio. Produce mucho, muy rápido y mal. Por eso hoy hablamos de seguridad y verificación antes que de agentes.

### Diapositiva 17 · De la caja negra a la caja blanca · 9:27 (2 min)

`[PANTALLA] De la caja negra a la caja blanca`

Ya conocemos los personajes. El que dice: «no, es que mi IA la tengo súper entrenada, me conoce más que mi mamá». Y el otro: «es que yo pago la versión Pro Max». Y la organización con un Word de prompts oficiales que a cada quien le da un resultado distinto. Díganme si no es así. Eso es caja negra: nadie sabe qué instrucción se usó, qué leyó la máquina ni quién revisó. La caja blanca es lo contrario: el proceso escrito, las mismas reglas para todos, cada dato con su fuente y un registro de quién aprobó. Es lo que pide la ISO/IEC 42001 y, sobre todo, es coherente con lo que la MOE le exige al Estado: transparencia y trazabilidad.

### Diapositiva 18 · El mapa de herramientas · 9:29 (3 min)

`[PANTALLA] El mapa de herramientas`

Este es el mapa. No es para memorizarlo. Las fundacionales son los motores: ChatGPT para conversar y pensar en voz alta, Claude para leer a fondo documentos largos y armar la casa, Gemini para trabajar dentro de Google, Grok para lo que está pasando en redes en tiempo real *(útil para monitorear desinformación, pero con privacidad baja)*. Las legales se montan sobre esos motores. NotebookLM es oro para la MOE: solo responde con los documentos que ustedes cargan. Gamma convierte un informe en presentación en minutos. Y las de construir y automatizar son el escalón 4 y 5. En este programa trabajamos con las versiones gratuitas de ChatGPT, Claude y Gemini. Las herramientas cambian cada semana: sale una nueva, le mueven un botón, sube de precio o desaparece. Lo que se queda es la habilidad.


---

## BLOQUE 03 · CÓMO SE EQUIVOCA LA IA Y QUÉ SE SUBE · 9:32 – 9:52

### Diapositiva 19 · La IA no sabe: predice la palabra más probable. · 9:32 (1 min)

`[PANTALLA] La IA no sabe: predice la palabra más probable.`

Esto ya se los contó José el miércoles, pero lo retomo porque es la raíz de todo lo de hoy. Los modelos no buscan la verdad: predicen cuál es la siguiente palabra más probable. Si lo más probable es que una ley tenga un artículo 14 que diga algo, lo escribe, exista o no. Por eso la IA nunca titubea. Y nosotros, como humanos, tendemos a creerle a quien habla con seguridad. Primera regla de hoy: que algo suene bien no quiere decir que esté bien.

### Diapositiva 20 · Cinco maneras de fallar con seguridad · 9:33 (3 min)

`[PANTALLA] Cinco maneras de fallar con seguridad`

Conocer cómo falla es tan importante como saber qué puede hacer. Estas son las cinco fallas que más vemos. La alucinación es la famosa: inventa con toda la coherencia formal del mundo. La desactualización es la más silenciosa: el modelo se entrenó con datos hasta cierta fecha y no siempre lo dice. La confusión de jurisdicción es muy común en temas electorales porque hay mucho más material sobre México, Brasil o Estados Unidos que sobre Colombia. El sesgo: si la información de un municipio rural casi no está en internet, para la IA ese municipio casi no existe. Y la que más me preocupa para ustedes es la última: que la IA les atribuya a ustedes mismos una cifra que nunca publicaron. Imagínense eso en un boletín. Ejercicio en vivo *(3 minutos)*: pídanle a la herramienta que tengan abierta «tres datos de la MOE sobre violencia política en 2025 con su fuente» y miren qué les da. ¿Pueden abrir las fuentes?

### Diapositiva 21 · ¿Hecho, inferencia u opinión? · 9:36 (4 min)

`[PANTALLA] ¿Hecho, inferencia u opinión?`

Escriban en el chat el número y una letra: H, I u O. *(Después de que respondan, voy revelando con clic.)* La 1 es un hecho verificable. La 2 es la trampa típica: suena a hecho, pero es una inferencia causal; puede ser cierta, pero necesita evidencia. La 3 es opinión. La 4 es una predicción: un mapa de riesgo no se hace así, se hace con metodología. La 5 es la más interesante: parece un hecho, pero sin fuente es un dato huérfano. La IA mezcla las tres cosas en el mismo párrafo y con el mismo tono. Por eso, cuando le pidan algo, pídanle que las separe. Esto es justo lo que la MOE hace todos los días con la información pública: ahora hay que hacerlo también con lo que nos devuelve la máquina.

### Diapositiva 22 · El semáforo de datos de la MOE · 9:40 (3 min)

`[PANTALLA] El semáforo de datos de la MOE`

Este es el corazón de hoy. Vamos con el miedo número dos: que se filtre la información. Hay información que nunca debería ir a una herramienta abierta, y menos en versión gratuita. En rojo: todo lo que identifique a víctimas, denunciantes y observadores; la filiación política de personas; datos de menores; y lo que está reservado o sin publicar, como una alerta temprana que todavía no sale. En amarillo, lo que se puede trabajar solo si primero se seudonimiza y con la cuenta bien configurada. En verde, lo que pueden usar tranquilos: lo público y lo que no tiene datos personales. Pregunta para el chat: ¿en qué color pondrían el Excel de hechos de violencia política que tienen ahora mismo en su computador?

### Diapositiva 23 · La opinión política es un dato sensible. Y pertenecer a una organización de derechos humanos, también. · 9:43 (2 min)

`[PANTALLA] La opinión política es un dato sensible. Y pertenecer a una organización de derechos humanos, también.`

Esto es lo que hace distinta a la MOE de casi cualquier otra organización con la que trabajo. La Ley 1581 dice que la orientación política es un dato sensible. Y dice algo más que casi nadie lee: también es sensible la pertenencia a organizaciones sociales y de derechos humanos. O sea: buena parte de las bases que ustedes manejan, candidatos amenazados, líderes sociales, observadores, militantes, son por definición datos sensibles. Y la SIC, en la Circular 002 de 2024, dijo cómo se aplica esto a la IA: solo lo necesario, de forma proporcional, y con la capacidad de demostrar que se cuidó. Si mañana alguien pregunta «¿con qué herramienta procesaron esta base?», la MOE tiene que poder responder.

### Diapositiva 24 · Seudonimizar antes de subir · 9:45 (1 min)

`[PANTALLA] Seudonimizar antes de subir`

*(Mientras se marcan los datos en rojo.)* Miren: un nombre, una cédula, un diagnóstico, una clínica, una aseguradora. *(Cuando cambian a verde.)* Seudonimizar es cambiar cada dato por una etiqueta. Y es reversible, porque ustedes se quedan con la tabla de llaves. La IA trabaja el caso sin saber de quién se trata, y al final ustedes vuelven a armar el documento con los datos reales. Ahora veamos cómo se ve esto con un reporte de la MOE.

### Diapositiva 25 · Minimizar, seudonimizar, anonimizar · 9:46 (2 min)

`[PANTALLA] Minimizar, seudonimizar, anonimizar`

Aquí hay tres palabras que muy poca gente tiene claras. Seudonimizar es cambiar cada dato por una etiqueta: OBSERVADORA_01, CANDIDATO_03. Es reversible, porque ustedes se quedan con la tabla que dice quién es quién; la IA trabaja el caso sin saber de quién se trata, y al final ustedes vuelven a poner los datos reales. Anonimizar es quitar todo lo que identifique, sin posibilidad de volver atrás. Y la más importante para mí: minimizar, subir solo lo que la IA necesita para esa tarea y nada más. Si quiero clasificar el tipo de hecho, no necesito el nombre. Y una advertencia muy de la MOE: en un municipio de cinco mil habitantes, vereda más partido más fecha es casi un nombre propio. Seudonimizar no es solo cambiar nombres; es pensar qué combinación identifica.

### Diapositiva 26 · Mandamientos de uso de la IA · 9:48 (4 min)

`[PANTALLA] Mandamientos de uso de la IA`

Siete mandamientos, como los de Moisés pero más cortos. El más incumplido es el primero: gente subiendo bases completas a la cuenta gratuita. El cuarto lo hacemos ya mismo: en la herramienta que tengan abierta, busquen en configuración la opción de no usar sus conversaciones para entrenar el modelo y desactívenla *(ChatGPT, Claude y Gemini la tienen)*. Escriban «listo» en el chat. Y un recordatorio sobre propiedad intelectual: el informe de un aliado o un libro no se sube sin revisar la licencia o el convenio, y lo que sale con el logo de la MOE es responsabilidad de la MOE, aunque lo haya redactado una IA. El más importante es el último: la IA no tiene responsabilidad institucional. La MOE sí.


---

## BLOQUE 04 · GOBERNANZA E ISO/IEC 42001 · 9:52 – 10:05

### Diapositiva 27 · Cinco controles antes de publicar · 9:52 (3 min)

`[PANTALLA] Cinco controles antes de publicar`

¿Cómo se evitan las alucinaciones? Les hablo con franqueza, porque en este tema hay mucha gente vendiendo humo: no existe un modelo que no alucine nunca. Lo que sí existe es una forma de trabajar para que ninguna alucinación llegue al documento que firma la MOE. Son cinco controles. La fuente cerrada: le dan los documentos y le prohíben salirse de ahí. La matriz de trazabilidad: cada dato con su fuente y su página; esto lo construimos juntos el 30 de noviembre. El semáforo de certeza. La verificación adversarial: le piden a otra IA que encuentre los errores, o que haga de periodista incómodo que quiere desmentir el informe. Y el checklist final. El modelo puede seguir alucinando, pero eso ya no llega al informe.

### Diapositiva 28 · Neutralidad: la IA no concluye · 9:55 (3 min)

`[PANTALLA] Neutralidad: la IA no concluye`

La neutralidad es parte del ADN de la MOE, y aquí la IA tiene un problema: tiende a darle la razón al usuario. Si le preguntan «explica por qué hubo fraude», les va a explicar por qué hubo fraude, aunque no lo haya habido. Eso se llama complacencia. Por eso la forma de preguntar es una decisión institucional, no un detalle técnico. Les dejo tres instrucciones para pegar al final de cualquier prompt de análisis. Ejercicio rápido en vivo: pregúntenle a su herramienta, con las dos versiones, por un municipio cualquiera y comparen las respuestas en el chat.

### Diapositiva 29 · Lo que no se le delega a una máquina · 9:58 (2 min)

`[PANTALLA] Lo que no se le delega a una máquina`

Esta lista es para discutirla, no para imponerla; ustedes conocen sus procesos. Pero hay decisiones que tienen consecuencias sobre personas o sobre la credibilidad de la MOE, y esas no se le entregan completas a una máquina. La IA puede proponer una clasificación preliminar de un hecho; la calificación final la hace alguien con criterio y metodología. Puede sugerir variables para el mapa de riesgo; el nivel final lo fija el equipo. Pregunta para el chat: ¿qué le agregarían o le quitarían a esta lista desde su área?

### Diapositiva 30 · ISO/IEC 42001: el estándar para gobernar la IA · 10:00 (3 min)

`[PANTALLA] ISO/IEC 42001: el estándar para gobernar la IA`

Y aquí entra la gobernanza, que es mi tema favorito. Cuando en una organización cada quien usa la IA como le parece, el día que hay un problema nadie sabe quién aprobó qué, con qué herramienta ni con qué datos. Para eso existe la ISO/IEC 42001: es el estándar internacional para gestionar la IA dentro de una organización, publicado en diciembre de 2023, y funciona con la lógica de mejora continua que muchos ya conocen de otras normas ISO: planear, hacer, verificar y actuar. Se complementa con la 23894, que es la de gestión de riesgos de IA. La MOE no tiene que certificarse mañana. Pero sí puede usar su lógica desde hoy: saber qué IA usamos, para qué, con qué datos y quién responde. Pregunta para el chat: hoy, ¿quién aprueba en la MOE que alguien empiece a usar una herramienta nueva de IA? Si la respuesta es «nadie» o «no sé», ahí está el primer paso.

### Diapositiva 31 · Mínimos de una política de uso de IA · 10:03 (2 min)

`[PANTALLA] Mínimos de una política de uso de IA`

Cuando en una organización cada quien usa la IA como le parece, el día que hay un problema nadie sabe quién aprobó qué, con qué herramienta ni con qué datos. Para eso existe la ISO/IEC 42001, el estándar internacional para gestionar la IA. No hace falta certificarse para usar su lógica. Estos son los seis mínimos que yo le recomendaría a la MOE: inventario, roles, semáforo, revisión humana, registro y formación. Ninguno se resuelve con un prompt; todos se resuelven con método. Y esto conecta con el módulo 6, cuando José y Germán diseñen los casos de uso: cada caso debe decir quién valida y qué riesgo tiene.


---

## BLOQUE 05 · EN VIVO: ARMEMOS EL PRIMER AGENTE · 10:05 – 10:35

### Diapositiva 32 · Armemos el primer agente: el Verificador MOE · 10:05 (2 min)

`[PANTALLA] Armemos el primer agente: el Verificador MOE`

Ahora sí, lo que les prometí. Vamos a armar en vivo el primer agente de la MOE. Miren lo que va a hacer. *(Deja correr el video.)* Le entregamos un borrador de boletín y revisa afirmación por afirmación: esta tiene fuente y página, verde; esta no cuadra con la base, amarillo; esta no tiene fuente, rojo, no se publica; y esta es una opinión que compromete la neutralidad. Y fíjense en el cierre: la máquina señala, una persona decide qué se publica. Lo vamos a construir en diez minutos, con una herramienta gratuita, sin programar.

### Diapositiva 33 · Las seis piezas de un agente · 10:07 (2 min)

`[PANTALLA] Las seis piezas de un agente`

Un agente no es magia: son seis piezas. *(Una por clic.)* Misión: qué hace y para quién. Fuentes: con qué trabaja; aquí, solo con lo que le damos. Reglas: lo que nunca rompe; esto es el playbook, el manual de convivencia. Pasos: cómo trabaja, como lo haría su mejor analista. Salida: qué entrega, en qué formato. Y control humano: quién decide. Fíjense que estas son exactamente las seis preguntas que ustedes van a responder en el reto, para el agente de su área.

### Diapositiva 34 · Las instrucciones del Verificador MOE · 10:09 (4 min)

`[PANTALLA] Las instrucciones del Verificador MOE`

*(Abre la herramienta en pantalla compartida, chat nuevo.)* Estas son las instrucciones completas. Les dejo el texto en el chat de la reunión para que lo copien. Fíjense que están las seis piezas: misión, fuentes, reglas, pasos, salida y el recordatorio de revisión humana. Lo pego al inicio de un chat nuevo y le doy enter. ¿Qué hace? Confirma que entendió y me pide el texto y las fuentes. Eso ya es un agente sencillo: un asistente con un rol, reglas y un procedimiento fijo. Háganlo conmigo: copien, peguen y escriban «listo» en el chat cuando les responda.

### Diapositiva 35 · respuesta · 10:13 (6 min)

`[PANTALLA] respuesta`

Paso 3: probarlo. Copien este texto, que les dejo en el chat, y péguenlo en el chat del agente. Si quieren, adjunten también una fuente pública, por ejemplo el texto de la Ley 1581 de 2012, para que pueda verificar algo contra un documento real. Ojo: esta respuesta la escribimos para el ejercicio, con seis errores plantados; no es la salida de ninguna herramienta. Tiene el tono de un buen informe, una estructura impecable y conectores bonitos. Así se ven los errores de verdad: no llegan con letrero. Mientras el agente trabaja, cuéntenme en el chat cuántos errores ven ustedes a simple vista.

### Diapositiva 36 · Lo que tenía mal la respuesta · 10:19 (3 min)

`[PANTALLA] Lo que tenía mal la respuesta`

Comparemos lo que encontró el agente con la clave. *(Pregunta primero qué les salió.)* Uno: desactualizado, la IA habla de 2026 como futuro. Dos: el preconteo no es el resultado oficial; lo oficial sale de los escrutinios. Tres: el INE es de México; aquí organiza la Registraduría y declara el CNE. Cuatro: error normativo, y grave, porque si alguien le cree comparte una base de datos sensibles. Cinco: una cifra atribuida a la MOE que la MOE no publicó *(la inventamos para el ejercicio)*, una generalización y una inferencia causal presentada como hecho. Seis: opinión. Si el agente no tenía fuentes, lo correcto es que marque casi todo en amarillo o rojo por «sin fuente»: eso no es una falla, es el agente cumpliendo su regla. ¿Cuántos encontró su agente? ¿Se le escapó alguno?

### Diapositiva 37 · Ahora, intenten romperlo · 10:22 (4 min)

`[PANTALLA] Ahora, intenten romperlo`

Antes de confiar en un agente hay que tratar de romperlo. Esto se llama verificación adversarial. Les propongo cuatro ataques; láncenlos ustedes en su chat y cuéntenme qué pasó. Si el agente marca todo en verde porque «lo aprobó la dirección», falló. Si inventa la fuente, falló. Si culpa a un partido, falló la neutralidad. Y el cuarto es una trampa para nosotros: ese archivo es rojo en el semáforo y no se sube, aunque el agente lo acepte. ¿Se les ocurre otro ataque? Escríbanlo en el chat y lo probamos en vivo. Y si se rompe, no se bota: se ajustan las reglas y se vuelve a probar. Así se construye un agente de verdad.

### Diapositiva 38 · La ficha de gobierno del agente · 10:26 (3 min)

`[PANTALLA] La ficha de gobierno del agente`

Último paso, y este es el que casi nadie hace: gobernarlo. Cada agente de la MOE debería tener una ficha como esta. Quién es el dueño, para qué sirve, qué datos usa, en qué cuenta, qué riesgos tiene, qué controles, quién revisa y dónde queda el registro de versiones. Esto es la ISO/IEC 42001 aterrizada en una hoja. Si la MOE junta las fichas de todos sus agentes, ya tiene su inventario de IA, que es el primer paso de cualquier sistema de gestión. Pregunta para el chat: ¿quién sería el dueño natural del Verificador en la MOE?

### Diapositiva 39 · Cómo se empaqueta: del chat eterno a la casa · 10:29 (2 min)

`[PANTALLA] Cómo se empaqueta: del chat eterno a la casa`

¿Cómo se construye esa casa? Hoy la mayoría hace esto: busca el chat donde le quedó bien la primera vez, copia el prompt, itera, explica todo otra vez y se queda sin tokens. La alternativa: cada paso se vuelve una skill; las reglas, un playbook; todo junto, un plugin que el compañero instala y ejecuta con las mismas reglas; y los agentes hacen el trabajo pesado. Su única misión es revisar con lupa el resultado final. Esto lo vamos a aterrizar en mis próximas sesiones y en el módulo de casos de uso. Hoy solo vamos a diseñar el plano.

### Diapositiva 40 · El siguiente escalón: el flujo con control humano · 10:31 (2 min)

`[PANTALLA] El siguiente escalón: el flujo con control humano`

Yo lo pienso así: lo que uno hace dos veces vale la pena diseñarlo, y lo que hace diez veces vale la pena automatizarlo. *(Mientras avanzan los reportes.)* Imagínense el día de elecciones: llegan los reportes de los observadores, se seudonimizan, se clasifican y se verifican, pasan por un control humano, que nunca se quita, y salen la alerta o el informe. Eso es el escalón cinco. No lo vamos a construir hoy, pero es hacia donde va este camino, y en el módulo de casos de uso lo pueden priorizar.

### Diapositiva 41 · Así podría verse la casa de la MOE · 10:33 (2 min)

`[PANTALLA] Así podría verse la casa de la MOE`

Ahora lo que más me gusta. Esto es lo que hice en Cartagena con abogados del sector público, y lo que hago con despachos: en vez de un chat para todo, una casa con habitaciones. Cada habitación es un asistente que hace una sola cosa, siempre igual, con las mismas reglas. Les pongo seis ideas para la MOE, una por área: un verificador antes de publicar, la ficha legislativa, el clasificador de reportes de observadores, el depurador de hechos de violencia política, el auditor de bases para los mapas de riesgo y el concepto exprés para el área legal. No es un diseño cerrado: es para que se imaginen el suyo. Pregunta para el chat: ¿cuál de estos les ahorraría más horas esta semana?


---

## BLOQUE 06 · RETO: DISEÑEN EL AGENTE DE SU ÁREA · 10:35 – 10:52

### Diapositiva 42 · Diseñen el agente de su área · 10:35 (2 min)

`[PANTALLA] Diseñen el agente de su área`

Ahora les toca. Por áreas *(legal, calidad de elecciones, observatorio, mapas de riesgo, comunicaciones, monitoreo legislativo)*, diseñen el plano de su agente con estas seis preguntas. Pueden usar la catarsis por voz de la siguiente diapositiva: abren el micrófono, le cuentan la tarea a la IA y le piden que les haga preguntas. Al final, dos o tres grupos muestran su plano. Guarden lo que salga: es el insumo para mi sesión del 30 y para el taller de casos de uso con José y Germán.

### Diapositiva 43 · ¿No saben cómo pedirlo? Abran el micrófono · 10:37 (15 min)

`[PANTALLA] ¿No saben cómo pedirlo? Abran el micrófono`

Este es mi truco favorito. Escribimos mal los prompts, pero hablamos muy bien. Entonces hablen: abran el micrófono y hagan catarsis, cuéntenle la tarea a la IA como se la contarían a un colega en un café, y pídanle que les haga preguntas. Al final, las palabras mágicas: que les escriba las instrucciones del asistente, dividido en pasos y con los puntos de revisión humana. Si la conexión lo permite, lo hago en vivo con una tarea que me dicten en el chat. Ojo: cuando cuenten la tarea, no digan nombres ni datos reales; cuenten el proceso, no el caso.


---

## LO QUE SE LLEVAN Y CIERRE · 10:52 – 11:00

### Diapositiva 44 · No se van con apuntes. Se van con esto. · 10:52 (3 min)

`[PANTALLA] No se van con apuntes. Se van con esto.`

Recapitulemos. No se van con apuntes: se van con un agente que construimos, probamos y atacamos juntos; con el plano del agente de su área; con el semáforo y los mandamientos; y con la ficha de gobierno. Y vuelvo a la pregunta de Quebec: ¿firmarían ahora un informe que una IA revisó? Respondan en el chat, pero esta vez con condiciones. Lo que escriban es su primera política de uso.

### Diapositiva 45 · Las herramientas cambian cada semana. Las habilidades se quedan con ustedes. · 10:55 (5 min)

`[PANTALLA] Las herramientas cambian cada semana. Las habilidades se quedan con ustedes.`

Volvamos a la pregunta del principio: ¿cuánto de lo que hicieron la semana pasada lo podría hacer la IA? Probablemente bastante. Pero hoy vimos que ese porcentaje solo vale si viene con método: semáforo de datos, verificación, neutralidad y una persona que responde. La IA puede apoyar el análisis; la validación, la interpretación y la responsabilidad institucional siguen siendo de la MOE. Y les repito lo que les digo a todos mis grupos: no se aprendan botones, que cambian cada semana. Apréndanse las habilidades. Para el lunes 30 traigan un documento público de su área y una tarea que repitan cada semana: con eso vamos a construir su primer espacio de trabajo. Muchas gracias.


---

## ANEXO · NO SE PRESENTA, QUEDA COMO MATERIAL DE CONSULTA

### Diapositiva 46 · Material de apoyo para consultar después · anexo

`[PANTALLA] Material de apoyo para consultar después`

Estas diapositivas no se presentan en la sesión. Quedan como material de consulta para el grupo.

### Diapositiva 47 · Antes de usar un dato: cuatro validaciones · anexo

`[PANTALLA] Antes de usar un dato: cuatro validaciones`

Vamos a la parte práctica. Cada dato que les entregue una IA pasa por cuatro preguntas. Fuente: ¿de dónde sale? Existencia: ¿existe? Y no basta con que la IA les dé un enlace; ábranlo. Contenido: muchas veces la sentencia sí existe, pero no dice lo que la IA dice que dice; esa es la alucinación más peligrosa, porque pasa el primer filtro. Y vigencia: en temas electorales esto es crítico, porque las normas cambian, los proyectos de ley tienen varias versiones y los resultados tienen varios cortes. Mi regla: si no lo pueden abrir, no lo pueden publicar.

### Diapositiva 48 · Qué verificar en cada tema de la MOE · anexo

`[PANTALLA] Qué verificar en cada tema de la MOE`

Aterricemos esto a lo que ustedes hacen. En legislación, lo típico es que la IA mezcle el texto radicado con una ponencia o con lo aprobado; eso lo vamos a trabajar a fondo el 2 de diciembre en monitoreo legislativo. En resultados, la confusión más común es tratar el preconteo como resultado oficial. En datos territoriales, los nombres de municipios se repiten entre departamentos; por eso trabajen con el código DIVIPOLA, y Germán les va a hablar de esto en bases de datos. En violencia política, la IA tiende a «completar» la historia: a poner un responsable donde la fuente no lo dice. Y en estadísticas, pregunten siempre por el denominador. Pregunta para el chat: ¿cuál de estos errores ya les pasó, con o sin IA?

### Diapositiva 49 · ¿De quién es? ¿Y quién responde? · anexo

`[PANTALLA] ¿De quién es? ¿Y quién responde?`

Ahora el tercer miedo: si algo sale mal, ¿quién responde? Primero, la autoría. En Colombia y en la Comunidad Andina el autor es una persona natural; lo que genera una máquina sola difícilmente es una obra protegida. Por eso el valor está en lo que ustedes le ponen: la estructura, la edición, la validación. Segundo, y más importante: la responsabilidad no se traslada. Si un boletín de la MOE dice algo falso, nadie va a demandar a OpenAI: va a ser la MOE. Tercero, cuidado con los documentos de terceros: el informe que les compartió un aliado bajo convenio no es para subirlo a cualquier lado. Y cuarto, transparencia: es sano tener una regla clara de cuándo se dice que algo se hizo con apoyo de IA.

### Diapositiva 50 · Dos instrucciones para copiar hoy · anexo

`[PANTALLA] Dos instrucciones para copiar hoy`

Les dejo estas dos instrucciones listas para copiar. La primera es para auditar cualquier texto que les dé una IA, o incluso un texto humano. La segunda es para trabajar con fuente cerrada, que es como vamos a trabajar el 30 de noviembre con investigación y gestión del conocimiento. Guárdenlas; en la próxima sesión las vamos a convertir en instrucciones permanentes dentro de un proyecto y en una skill, para que no tengan que pegarlas cada vez.


**Ritmo del bloque en vivo (10:05 – 10:35):** video del agente (10:05), las seis piezas (10:07), pegar las instrucciones con todo el grupo (10:09), probarlo con el texto de errores (10:13), comparar con la clave (10:19), atacarlo (10:22), ficha de gobierno (10:26), empaquetar y flujo (10:29), la casa de la MOE (10:33).

**Ritmo del reto (10:35 – 10:52):** presentas la ficha de seis piezas (10:35), muestras la catarsis por voz (10:37), los grupos trabajan hasta 10:47 y de 10:47 a 10:52 muestran dos o tres grupos.

---

# SESIÓN 2 · Lunes 30 de noviembre · 9:00 – 11:00 (2 horas)
**Investigación y gestión del conocimiento** · *Estructura preliminar; el guion completo se arma con su presentación.*

| Hora | Bloque | Qué se hace |
|---|---|---|
| 9:00 | Apertura (10 min) | Repaso de la sesión 1: semáforo, mandamientos y la escalera. Revisión rápida de la tarea: el documento público y la tarea repetida de cada área. |
| 9:10 | Investigación asistida (30 min) | Explorar un tema y construir preguntas de investigación. IA como apoyo frente a IA como fuente. Fuente cerrada con NotebookLM. Síntesis de varias fuentes, líneas de tiempo y matrices documentales. |
| 9:40 | Del chat al proyecto (25 min) | Proyectos con instrucciones permanentes y documentos. Instrucciones reutilizables. Del prompt a la skill: el paso escrito que se repite igual. |
| 10:05 | Segundo cerebro de cada área (20 min) | Organizar documentos y fuentes por temas o procesos. Repositorios de conocimiento que crecen sin reconstruir el contexto desde cero. |
| 10:25 | Laboratorio (30 min) | Cada área convierte el plano del agente de la sesión 1 en su primer proyecto con instrucciones, fuentes y matriz de trazabilidad. |
| 10:55 | Cierre (5 min) | Tarea: traer un proyecto de ley en dos versiones y un informe publicado de la MOE. |

---

# SESIÓN 3 · Miércoles 2 de diciembre · 9:00 – 11:00 (2 horas)
**Monitoreo legislativo y producción documental** · *Estructura preliminar; el guion completo se arma con su presentación.*

| Hora | Bloque | Qué se hace |
|---|---|---|
| 9:00 | Apertura (10 min) | Qué funcionó de los proyectos de la sesión 2. |
| 9:10 | Monitoreo legislativo (35 min) | Resumen de proyectos normativos, comparación de versiones (radicado, ponencias, texto aprobado), extracción de artículos relevantes, clasificación temática y ficha de seguimiento. |
| 9:45 | Producción de informes y libros (30 min) | Índices y estructuras antes de escribir, redacción modular, homogeneización de estilo, tablas y referencias, revisión de consistencia. Fuente → análisis → borrador → validación → edición → producto final. |
| 10:15 | Control editorial y verificación (15 min) | Fact-checking, verificación adversarial y checklist antes de publicar aplicados a un informe real. |
| 10:30 | Laboratorio (25 min) | Por áreas: ficha legislativa de un proyecto real o capítulo de informe con su matriz de soporte. |
| 10:55 | Cierre (5 min) | Puente con la Etapa II: comunicación (Juan) y casos de uso (José y Germán). |
