# Capacitación en IA para la MOE · Guion de mis sesiones

**Programa:** Capacitación en Inteligencia Artificial para la Misión de Observación Electoral (Appicua)
**Capacitadora:** Adriana Vergara · IA Legal Studio
**Formato:** virtual y sincrónico. **Cada sesión dura 2 horas, de 9:00 a 11:00 a. m.**
**Presentación de la sesión 1:** https://claude.ai/artifact/SjwtcFVmrRgXktnvkvnuEQ (39 diapositivas; estas mismas notas están como notas del orador)

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
- **Si vas larga:** acorta el bloque 01 (deja Deloitte, Quebec y Colombia), salta «Autoría» y deja «Prompts para llevar» como material.

**Antes de entrar (lista rápida)**
- Abre la base de Damien Charlotin y actualiza la cifra de la diapositiva 10.
- Confirma con la MOE la cifra de las 150 campañas de desinformación (diapositiva 7).
- Ten abierta una herramienta gratuita para las demostraciones (micrófono incluido para la catarsis por voz).
- Pide a la organización salas por áreas para el laboratorio: legal, calidad de elecciones, observatorio político, mapas de riesgo, comunicaciones y monitoreo legislativo.

# SESIÓN 1 · Lunes 23 de noviembre · 9:00 – 11:00 (2 horas)

---

## APERTURA · 9:00 – 9:10

### Diapositiva 1 · IA responsable, aspectos legales y manejo seguro de la información · 9:00 (1 min)

`[PANTALLA] IA responsable, aspectos legales y manejo seguro de la información`

Bienvenida. Hola a todos, qué bueno tenerlos acá. Soy Adriana Vergara: abogada, fundé IA Legal Studio y lo que hacemos es acompañar a organizaciones a entender la IA, formar a sus equipos y meterla de verdad en el trabajo del día a día, con gobernanza. Doy clase de IA en el Rosario y en el Externado. El miércoles José les mostró qué es la IA y cómo escoger herramienta. Hoy vamos con la pregunta que más me hacen y que a nadie nos enseñaron: cómo usarla sin poner en riesgo a la institución, a las personas que confían en la MOE ni la credibilidad de lo que publicamos.

### Diapositiva 2 · Mis tres sesiones con ustedes: 2 horas cada una · 9:01 (2 min)

`[PANTALLA] Mis tres sesiones con ustedes: 2 horas cada una`

Les cuento cómo vamos a trabajar. Tengo tres sesiones con ustedes, de dos horas cada una, de 9 a 11. Hoy es la base de todo: seguridad, aspectos legales, verificación. Las otras dos son de manos a la obra: investigación y gestión del conocimiento, y luego monitoreo legislativo y producción de informes y libros. Todo lo que veamos hoy se vuelve a usar allá: el semáforo de datos, la verificación y la regla de que la responsabilidad es humana. Y entre mis sesiones, Germán les va a mostrar el trabajo con bases de datos, así que hoy también les dejo listo cómo cuidar esas bases antes de subirlas.

### Diapositiva 3 · Agenda · 9:03 (1 min)

`[PANTALLA] Agenda`

Así vamos a repartir las dos horas. Poca teoría y mucho chat. Les pido que tengan abierta una herramienta gratuita, la que más usen: ChatGPT, Claude o Gemini, porque vamos a probar cosas en vivo y la última media hora es de laboratorio: ustedes van a diseñar el agente de su área.

### Diapositiva 4 · ¿Le subirían a ChatGPT la base de reportes de los observadores de un municipio? · 9:04 (2 min)

`[PANTALLA] ¿Le subirían a ChatGPT la base de reportes de los observadores de un municipio?`

*(Pausa de tres segundos.)* Respondan en el chat: sí, no o ya lo hice. Casi todo el mundo dice que no. Pero la verdad es que muchos ya lo han hecho: un Excel para que les arme una tabla dinámica, un informe para que les mejore la redacción, las actas de una reunión para que las resuma. Y no lo digo para juzgar a nadie, que yo también lo hice al principio. Lo digo porque eso es justo lo que a nadie nos enseñaron: no a usar la IA, sino a usarla sin poner en riesgo a las personas que confían en nosotros. En la MOE eso pesa el doble: detrás de un reporte hay un observador o una víctima de violencia política.

### Diapositiva 5 · ¿Cuánto de lo que hicieron la semana pasada lo podría haber hecho la IA mientras ustedes dormían? · 9:06 (2 min)

`[PANTALLA] ¿Cuánto de lo que hicieron la semana pasada lo podría haber hecho la IA mientras ustedes dormían?`

Piensen en la semana pasada: el resumen de un proyecto de ley, la ficha de seguimiento, el cuadro de hechos de violencia política, la presentación para un aliado, el borrador del boletín. ¿Un veinte por ciento? ¿Un cuarenta? Déjenlo en el chat. Al final volvemos sobre esto. La idea de hoy es que ese porcentaje pueda crecer sin que crezca el riesgo.

### Diapositiva 6 · Yo también pensaba que la IA solo servía para hacer mamarrachos. · 9:08 (2 min)

`[PANTALLA] Yo también pensaba que la IA solo servía para hacer mamarrachos.`

Yo no llegué a la IA convencida. Le pedía un documento y me devolvía un mamarracho: artículos de un código de otro país, sentencias que nadie había dictado. Y me daba miedo firmar algo así, y me daba miedo subirle información de un cliente. Hasta que me cayó la ficha: el problema no era la herramienta, era la forma en que yo trabajaba con ella. Cuando uno le da las fuentes, le dice cómo trabaja, le pone controles y le pide un formato concreto, cambia todo. Es el mismo modelo; cambia la arquitectura. Eso es lo que hoy vamos a aplicar a la MOE.


---

## BLOQUE 01 · DATOS QUE DEBERÍAN QUITARNOS EL SUEÑO · 9:10 – 9:25

### Diapositiva 7 · 2026: la primera elección en Colombia con IA a gran escala · 9:10 (2 min)

`[PANTALLA] 2026: la primera elección en Colombia con IA a gran escala`

Ustedes saben esto mejor que yo, porque lo vivieron observando. La propia MOE identificó unas 150 campañas de desinformación entre marzo de 2025 y marzo de 2026 *(confirmen la cifra exacta con su informe)*. La Misión de Observación de la Unión Europea habló de un uso sin precedentes de IA y deepfakes en la segunda vuelta. Hubo audios presentados como filtraciones que eran voces clonadas. Y en el Congreso hay más de veinte proyectos de ley sobre IA, pero ninguno sobre su uso electoral. O sea: la IA ya es objeto de observación de la MOE. La pregunta de hoy es otra: cómo la usamos adentro sin convertirnos nosotros en fuente de error. Una organización que vive de su credibilidad no se puede dar el lujo de publicar un dato que inventó una máquina.

### Diapositiva 8 · El caso Deloitte · 9:12 (3 min)

`[PANTALLA] El caso Deloitte`

Arranco con este porque es el que más impacta. Deloitte, una de las cuatro grandes consultoras del mundo, le entregó al Gobierno australiano un informe de 237 páginas por un contrato de 440.000 dólares australianos. Tenía una cita judicial que no existía y referencias académicas falsas. Tuvo que reconocer que usó IA y devolver casi 98.000 dólares. Y meses después, en Canadá, otro informe de 526 páginas, de 1,6 millones, con el mismo problema. Lo más diciente es el tercer dato, del propio Deloitte: el acceso a la IA se disparó, pero solo el 21 % de las empresas gobierna bien a sus agentes. Pregunta para el chat: ¿cuántos de ustedes revisaron las notas al pie del último documento que les entregó la IA?

### Diapositiva 9 · El árbitro que le pidió a la IA terminar el laudo · 9:15 (3 min)

`[PANTALLA] El árbitro que le pidió a la IA terminar el laudo`

Quebec, abril de 2026. Una controversia entre una asociación y la autoridad de salud llega a un árbitro único. La parte que pierde lee el laudo con lupa y encuentra que las autoridades que lo sostienen no existen. El juez no dijo «esto viola el orden público». Dijo algo más fino: el problema es que el árbitro delegó en la máquina la función de decidir, y las partes contrataron a una persona, no a un software. Laudo anulado y todo a empezar de cero. Años de proceso a la basura por un atajo de una tarde. Respondan en el chat con sí o no: ¿firmarían un informe que escribió una IA? ¿Y uno que una IA revisó? Guárdenlo, que al final volvemos sobre esto.

### Diapositiva 10 · Cuando la IA inventa, alguien termina respondiendo · 9:18 (1 min)

`[PANTALLA] Cuando la IA inventa, alguien termina respondiendo`

Hay un investigador francés, Damien Charlotin, que lleva una base de datos pública con las decisiones judiciales en las que un tribunal tuvo que lidiar con contenido inventado por IA. En enero de este año iban unas 700. Hoy pasan de 2.262. Treinta y dos son de jueces, no de abogados. Y uno es de un árbitro, el que acabamos de ver. *(Antes de la clase, abran la base y actualicen el número.)* Esto no es solo un tema de abogados: es el mismo error que puede pasar en un informe de la MOE, una cifra o un «según la Registraduría» que nadie verificó.

### Diapositiva 11 · Ya nos pasó en Colombia · 9:19 (2 min)

`[PANTALLA] Ya nos pasó en Colombia`

Alguien estará pensando que eso pasa en Estados Unidos. Pues no. En febrero de este año la Sala Civil de la Corte Suprema multó a un abogado que citó providencias que no existían; la Relatoría las buscó una por una y ninguna era real. La Corte habló del «pseudo-derecho»: textos que suenan a jurisprudencia pero no lo son. Y la Constitucional, en la T-323 de 2024, ya había dicho que se puede usar IA, pero con transparencia y sin que reemplace el criterio humano. En el Reino Unido la High Court fue más lejos: dijo que puede llegar a ser desacato o delito. El mensaje para la MOE: la regla no es «no usen IA», es «verifiquen». Y la MOE, que vive de señalar cuándo la información pública no cuadra, tiene que ser la primera en verificar.

### Diapositiva 12 · «Mi abogado me está manipulando» · 9:21 (2 min)

`[PANTALLA] «Mi abogado me está manipulando»`

Este caso me dejó pensando muchísimo. Graciela Dela Torre tenía un acuerdo con su aseguradora, Nippon Life, y el caso se cerró en 2024. Después copió en ChatGPT un mensaje de su abogado y le preguntó si la estaba manipulando. ChatGPT le dijo que sí. Despidió al abogado y, con ChatGPT de «asesor», radicó 44 escritos, algunos con sentencias inexistentes. En marzo de 2026 la aseguradora demandó a OpenAI por ejercicio ilegal de la abogacía. OpenAI respondió: «ChatGPT es una herramienta, no un abogado». ¿Y qué tiene que ver con la MOE? Que la gente ya le pregunta a la IA por la elección: si hubo fraude, quién ganó, qué dice la ley. La MOE puede ser la institución que enseña a verificarla. Pero primero hay que hacerlo bien adentro.

### Diapositiva 13 · Cómo serán los equipos en tres años · 9:23 (2 min)

`[PANTALLA] Cómo serán los equipos en tres años`

Deloitte Legal encuestó este año a 121 líderes de áreas jurídicas del mundo. Proyectan que en unos tres años cerca del 30 % de la capacidad de un equipo la van a poner agentes de IA, un 20 % serán perfiles híbridos y el resto, personas expertas. Y miren esto: en 2024 el 76 % no usaba IA; hoy solo el 2 % sigue sin usarla. Pero el 84 % no ha cambiado nada en la forma de trabajar. Todos tienen la herramienta, casi nadie cambió el método. Ahí está la oportunidad para la MOE: no se trata de tener ChatGPT, se trata de rediseñar cómo trabaja cada área.


---

## BLOQUE 02 · DEL PROMPT AL SISTEMA · 9:25 – 9:40

### Diapositiva 14 · Un año para subir cinco escalones · 9:25 (5 min)

`[PANTALLA] Un año para subir cinco escalones`

*(Cada clic enciende un escalón.)* Todo lo que vivimos del disquete a la nube pasó en treinta años. Pero esto pasó en más o menos uno. Primero, la IA fundacional, aislada: le preguntábamos cualquier pendejada y ella, feliz, respondía. Después, a generar documentos: «hazme un informe», y salía uno de otro país. Luego vino el cuento del prompt: cada quien hacía sus vainas, cursos de prompts, prompts para hacer prompts. Después, las arquitecturas de trabajo: habilidades, manuales, procesos; ya no se le pregunta, se le enseña. Y hoy, las estructuras agénticas: equipos de IA que hacen el proceso completo, del inventario de los reportes al informe listo para que ustedes lo revisen. Ahora ustedes: en el chat, un número del 1 al 5. ¿En qué escalón está su área? *(Lean algunas respuestas en voz alta.)* La meta de este programa es que cada área suba por lo menos dos.

### Diapositiva 15 · Bienvenidos a la era agéntica · 9:30 (3 min)

`[PANTALLA] Bienvenidos a la era agéntica`

La IA dejó de ser solo un chat que responde: hoy empieza a ejecutar trabajo. Hace dos años le pedíamos que resumiera un documento. Hoy le podemos decir: lee estos trescientos reportes, seudonimízalos, clasifícalos, arma la matriz y avísame qué merece alerta. Y lo hace, paso por paso. Eso es la era agéntica: ustedes pasan de ser quienes hacen a ser quienes dirigen. Pero ojo con la última frase: un agente mal dirigido es un practicante con energía infinita y cero criterio. Produce mucho, muy rápido y mal. Por eso hoy hablamos de seguridad y verificación antes que de agentes.

### Diapositiva 16 · De la caja negra a la caja blanca · 9:33 (3 min)

`[PANTALLA] De la caja negra a la caja blanca`

Ya conocemos los personajes. El que dice: «no, es que mi IA la tengo súper entrenada, me conoce más que mi mamá». Y el otro: «es que yo pago la versión Pro Max». Y la organización con un Word de prompts oficiales que a cada quien le da un resultado distinto. Díganme si no es así. Eso es caja negra: nadie sabe qué instrucción se usó, qué leyó la máquina ni quién revisó. La caja blanca es lo contrario: el proceso escrito, las mismas reglas para todos, cada dato con su fuente y un registro de quién aprobó. Es lo que pide la ISO/IEC 42001 y, sobre todo, es coherente con lo que la MOE le exige al Estado: transparencia y trazabilidad.

### Diapositiva 17 · El mapa de herramientas · 9:36 (4 min)

`[PANTALLA] El mapa de herramientas`

Este es el mapa. No es para memorizarlo. Las fundacionales son los motores: ChatGPT para conversar y pensar en voz alta, Claude para leer a fondo documentos largos y armar la casa, Gemini para trabajar dentro de Google, Grok para lo que está pasando en redes en tiempo real *(útil para monitorear desinformación, pero con privacidad baja)*. Las legales se montan sobre esos motores. NotebookLM es oro para la MOE: solo responde con los documentos que ustedes cargan. Gamma convierte un informe en presentación en minutos. Y las de construir y automatizar son el escalón 4 y 5. En este programa trabajamos con las versiones gratuitas de ChatGPT, Claude y Gemini. Las herramientas cambian cada semana: sale una nueva, le mueven un botón, sube de precio o desaparece. Lo que se queda es la habilidad.


---

## BLOQUE 03 · CÓMO SE EQUIVOCA LA IA Y QUÉ SE SUBE · 9:40 – 10:05

### Diapositiva 18 · La IA no sabe: predice la palabra más probable. · 9:40 (1 min)

`[PANTALLA] La IA no sabe: predice la palabra más probable.`

Esto ya se los contó José el miércoles, pero lo retomo porque es la raíz de todo lo de hoy. Los modelos no buscan la verdad: predicen cuál es la siguiente palabra más probable. Si lo más probable es que una ley tenga un artículo 14 que diga algo, lo escribe, exista o no. Por eso la IA nunca titubea. Y nosotros, como humanos, tendemos a creerle a quien habla con seguridad. Primera regla de hoy: que algo suene bien no quiere decir que esté bien.

### Diapositiva 19 · Cinco maneras de fallar con seguridad · 9:41 (4 min)

`[PANTALLA] Cinco maneras de fallar con seguridad`

Conocer cómo falla es tan importante como saber qué puede hacer. Estas son las cinco fallas que más vemos. La alucinación es la famosa: inventa con toda la coherencia formal del mundo. La desactualización es la más silenciosa: el modelo se entrenó con datos hasta cierta fecha y no siempre lo dice. La confusión de jurisdicción es muy común en temas electorales porque hay mucho más material sobre México, Brasil o Estados Unidos que sobre Colombia. El sesgo: si la información de un municipio rural casi no está en internet, para la IA ese municipio casi no existe. Y la que más me preocupa para ustedes es la última: que la IA les atribuya a ustedes mismos una cifra que nunca publicaron. Imagínense eso en un boletín. Ejercicio en vivo *(3 minutos)*: pídanle a la herramienta que tengan abierta «tres datos de la MOE sobre violencia política en 2025 con su fuente» y miren qué les da. ¿Pueden abrir las fuentes?

### Diapositiva 20 · ¿Hecho, inferencia u opinión? · 9:45 (7 min)

`[PANTALLA] ¿Hecho, inferencia u opinión?`

Escriban en el chat el número y una letra: H, I u O. *(Después de que respondan, voy revelando con clic.)* La 1 es un hecho verificable. La 2 es la trampa típica: suena a hecho, pero es una inferencia causal; puede ser cierta, pero necesita evidencia. La 3 es opinión. La 4 es una predicción: un mapa de riesgo no se hace así, se hace con metodología. La 5 es la más interesante: parece un hecho, pero sin fuente es un dato huérfano. La IA mezcla las tres cosas en el mismo párrafo y con el mismo tono. Por eso, cuando le pidan algo, pídanle que las separe. Esto es justo lo que la MOE hace todos los días con la información pública: ahora hay que hacerlo también con lo que nos devuelve la máquina.

### Diapositiva 21 · El semáforo de datos de la MOE · 9:52 (3 min)

`[PANTALLA] El semáforo de datos de la MOE`

Este es el corazón de hoy. Vamos con el miedo número dos: que se filtre la información. Hay información que nunca debería ir a una herramienta abierta, y menos en versión gratuita. En rojo: todo lo que identifique a víctimas, denunciantes y observadores; la filiación política de personas; datos de menores; y lo que está reservado o sin publicar, como una alerta temprana que todavía no sale. En amarillo, lo que se puede trabajar solo si primero se seudonimiza y con la cuenta bien configurada. En verde, lo que pueden usar tranquilos: lo público y lo que no tiene datos personales. Pregunta para el chat: ¿en qué color pondrían el Excel de hechos de violencia política que tienen ahora mismo en su computador?

### Diapositiva 22 · La opinión política es un dato sensible. Y pertenecer a una organización de derechos humanos, también. · 9:55 (2 min)

`[PANTALLA] La opinión política es un dato sensible. Y pertenecer a una organización de derechos humanos, también.`

Esto es lo que hace distinta a la MOE de casi cualquier otra organización con la que trabajo. La Ley 1581 dice que la orientación política es un dato sensible. Y dice algo más que casi nadie lee: también es sensible la pertenencia a organizaciones sociales y de derechos humanos. O sea: buena parte de las bases que ustedes manejan, candidatos amenazados, líderes sociales, observadores, militantes, son por definición datos sensibles. Y la SIC, en la Circular 002 de 2024, dijo cómo se aplica esto a la IA: solo lo necesario, de forma proporcional, y con la capacidad de demostrar que se cuidó. Si mañana alguien pregunta «¿con qué herramienta procesaron esta base?», la MOE tiene que poder responder.

### Diapositiva 23 · Minimizar, seudonimizar, anonimizar · 9:57 (3 min)

`[PANTALLA] Minimizar, seudonimizar, anonimizar`

Aquí hay tres palabras que muy poca gente tiene claras. Seudonimizar es cambiar cada dato por una etiqueta: OBSERVADORA_01, CANDIDATO_03. Es reversible, porque ustedes se quedan con la tabla que dice quién es quién; la IA trabaja el caso sin saber de quién se trata, y al final ustedes vuelven a poner los datos reales. Anonimizar es quitar todo lo que identifique, sin posibilidad de volver atrás. Y la más importante para mí: minimizar, subir solo lo que la IA necesita para esa tarea y nada más. Si quiero clasificar el tipo de hecho, no necesito el nombre. Y una advertencia muy de la MOE: en un municipio de cinco mil habitantes, vereda más partido más fecha es casi un nombre propio. Seudonimizar no es solo cambiar nombres; es pensar qué combinación identifica.

### Diapositiva 24 · Mandamientos de uso de la IA · 10:00 (3 min)

`[PANTALLA] Mandamientos de uso de la IA`

Siete mandamientos, como los de Moisés pero más cortos. El más incumplido es el primero: gente subiendo bases completas a la cuenta gratuita. El cuarto lo hacemos ya mismo: en la herramienta que tengan abierta, busquen en configuración la opción de no usar sus conversaciones para entrenar el modelo y desactívenla *(ChatGPT, Claude y Gemini la tienen)*. Escriban «listo» en el chat. Y el más importante es el último: la IA no tiene responsabilidad institucional. La MOE sí.

### Diapositiva 25 · ¿De quién es? ¿Y quién responde? · 10:03 (2 min)

`[PANTALLA] ¿De quién es? ¿Y quién responde?`

Ahora el tercer miedo: si algo sale mal, ¿quién responde? Primero, la autoría. En Colombia y en la Comunidad Andina el autor es una persona natural; lo que genera una máquina sola difícilmente es una obra protegida. Por eso el valor está en lo que ustedes le ponen: la estructura, la edición, la validación. Segundo, y más importante: la responsabilidad no se traslada. Si un boletín de la MOE dice algo falso, nadie va a demandar a OpenAI: va a ser la MOE. Tercero, cuidado con los documentos de terceros: el informe que les compartió un aliado bajo convenio no es para subirlo a cualquier lado. Y cuarto, transparencia: es sano tener una regla clara de cuándo se dice que algo se hizo con apoyo de IA.


---

## BLOQUE 04 · VERIFICAR, SER NEUTRAL Y NO DELEGAR · 10:05 – 10:20

### Diapositiva 26 · Antes de usar un dato: cuatro validaciones · 10:05 (2 min)

`[PANTALLA] Antes de usar un dato: cuatro validaciones`

Vamos a la parte práctica. Cada dato que les entregue una IA pasa por cuatro preguntas. Fuente: ¿de dónde sale? Existencia: ¿existe? Y no basta con que la IA les dé un enlace; ábranlo. Contenido: muchas veces la sentencia sí existe, pero no dice lo que la IA dice que dice; esa es la alucinación más peligrosa, porque pasa el primer filtro. Y vigencia: en temas electorales esto es crítico, porque las normas cambian, los proyectos de ley tienen varias versiones y los resultados tienen varios cortes. Mi regla: si no lo pueden abrir, no lo pueden publicar.

### Diapositiva 27 · Qué verificar en cada tema de la MOE · 10:07 (3 min)

`[PANTALLA] Qué verificar en cada tema de la MOE`

Aterricemos esto a lo que ustedes hacen. En legislación, lo típico es que la IA mezcle el texto radicado con una ponencia o con lo aprobado; eso lo vamos a trabajar a fondo el 2 de diciembre en monitoreo legislativo. En resultados, la confusión más común es tratar el preconteo como resultado oficial. En datos territoriales, los nombres de municipios se repiten entre departamentos; por eso trabajen con el código DIVIPOLA, y Germán les va a hablar de esto en bases de datos. En violencia política, la IA tiende a «completar» la historia: a poner un responsable donde la fuente no lo dice. Y en estadísticas, pregunten siempre por el denominador. Pregunta para el chat: ¿cuál de estos errores ya les pasó, con o sin IA?

### Diapositiva 28 · Cinco controles antes de publicar · 10:10 (3 min)

`[PANTALLA] Cinco controles antes de publicar`

¿Cómo se evitan las alucinaciones? Les hablo con franqueza, porque en este tema hay mucha gente vendiendo humo: no existe un modelo que no alucine nunca. Lo que sí existe es una forma de trabajar para que ninguna alucinación llegue al documento que firma la MOE. Son cinco controles. La fuente cerrada: le dan los documentos y le prohíben salirse de ahí. La matriz de trazabilidad: cada dato con su fuente y su página; esto lo construimos juntos el 30 de noviembre. El semáforo de certeza. La verificación adversarial: le piden a otra IA que encuentre los errores, o que haga de periodista incómodo que quiere desmentir el informe. Y el checklist final. El modelo puede seguir alucinando, pero eso ya no llega al informe.

### Diapositiva 29 · Neutralidad: la IA no concluye · 10:13 (4 min)

`[PANTALLA] Neutralidad: la IA no concluye`

La neutralidad es parte del ADN de la MOE, y aquí la IA tiene un problema: tiende a darle la razón al usuario. Si le preguntan «explica por qué hubo fraude», les va a explicar por qué hubo fraude, aunque no lo haya habido. Eso se llama complacencia. Por eso la forma de preguntar es una decisión institucional, no un detalle técnico. Les dejo tres instrucciones para pegar al final de cualquier prompt de análisis. Ejercicio rápido en vivo: pregúntenle a su herramienta, con las dos versiones, por un municipio cualquiera y comparen las respuestas en el chat.

### Diapositiva 30 · Lo que no se le delega a una máquina · 10:17 (3 min)

`[PANTALLA] Lo que no se le delega a una máquina`

Esta lista es para discutirla, no para imponerla; ustedes conocen sus procesos. Pero hay decisiones que tienen consecuencias sobre personas o sobre la credibilidad de la MOE, y esas no se le entregan completas a una máquina. La IA puede proponer una clasificación preliminar de un hecho; la calificación final la hace alguien con criterio y metodología. Puede sugerir variables para el mapa de riesgo; el nivel final lo fija el equipo. Pregunta para el chat: ¿qué le agregarían o le quitarían a esta lista desde su área?


---

## BLOQUE 05 · LABORATORIO · 10:20 – 10:55

### Diapositiva 31 · Auditen esta respuesta · 10:20 (1 min)

`[PANTALLA] Auditen esta respuesta`

Ahora les toca a ustedes. Si la plataforma lo permite, salas por áreas *(legal, calidad de elecciones, observatorio, mapas de riesgo, comunicaciones)*; si no, en el chat. Tienen 8 minutos para auditar y 4 para compartir. Un consejo: la respuesta está escrita para sonar perfecta. Desconfíen justo de lo que suena más seguro. Y pueden usar la IA para auditar a la IA: péguenle la respuesta a otra herramienta y pídanle que encuentre errores. Después comparamos.

### Diapositiva 32 · respuesta · 10:21 (8 min)

`[PANTALLA] respuesta`

Léanla con calma. Tiene el tono de un buen informe, una estructura impecable y conectores bonitos. Así se ven los errores de verdad: no llegan con letrero. Recuerden: semáforo a cada frase, tipo de error a las rojas y un prompt mejor. *(Ojo: esta respuesta la escribimos para el ejercicio, con errores plantados; no es la salida real de ninguna herramienta.)*

### Diapositiva 33 · Lo que tenía mal la respuesta · 10:29 (3 min)

`[PANTALLA] Lo que tenía mal la respuesta`

Revisemos. *(Primero pregunten qué encontraron; revelen después.)* Uno: desactualizado; la IA habla de 2026 como futuro. Dos: el preconteo no es el resultado oficial; lo oficial sale de los escrutinios y la declaratoria la hace la autoridad escrutadora. Tres: el INE es de México; aquí organiza la Registraduría y declara y entrega credenciales el CNE, según la corporación. Cuatro: error normativo, y grave, porque si alguien le cree, comparte una base de datos sensibles. Cinco: tres errores en una frase: una cifra atribuida a la MOE que la MOE no publicó *(la inventamos para el ejercicio)*, una generalización y una inferencia causal presentada como hecho. Seis: opinión. Seis frases, seis errores, y ninguna sonaba mal. Ese es el punto. ¿Cuántos encontraron?

### Diapositiva 34 · Así podría verse la casa de la MOE · 10:32 (3 min)

`[PANTALLA] Así podría verse la casa de la MOE`

Ahora lo que más me gusta. Esto es lo que hice en Cartagena con abogados del sector público, y lo que hago con despachos: en vez de un chat para todo, una casa con habitaciones. Cada habitación es un asistente que hace una sola cosa, siempre igual, con las mismas reglas. Les pongo seis ideas para la MOE, una por área: un verificador antes de publicar, la ficha legislativa, el clasificador de reportes de observadores, el depurador de hechos de violencia política, el auditor de bases para los mapas de riesgo y el concepto exprés para el área legal. No es un diseño cerrado: es para que se imaginen el suyo. Pregunta para el chat: ¿cuál de estos les ahorraría más horas esta semana?

### Diapositiva 35 · Cómo se empaqueta: del chat eterno a la casa · 10:35 (2 min)

`[PANTALLA] Cómo se empaqueta: del chat eterno a la casa`

¿Cómo se construye esa casa? Hoy la mayoría hace esto: busca el chat donde le quedó bien la primera vez, copia el prompt, itera, explica todo otra vez y se queda sin tokens. La alternativa: cada paso se vuelve una skill; las reglas, un playbook; todo junto, un plugin que el compañero instala y ejecuta con las mismas reglas; y los agentes hacen el trabajo pesado. Su única misión es revisar con lupa el resultado final. Esto lo vamos a aterrizar en mis próximas sesiones y en el módulo de casos de uso. Hoy solo vamos a diseñar el plano.

### Diapositiva 36 · Diseñen el agente de su área · 10:37 (1 min)

`[PANTALLA] Diseñen el agente de su área`

Ahora les toca. Por áreas *(legal, calidad de elecciones, observatorio, mapas de riesgo, comunicaciones, monitoreo legislativo)*, diseñen el plano de su agente con estas seis preguntas. Pueden usar la catarsis por voz de la siguiente diapositiva: abren el micrófono, le cuentan la tarea a la IA y le piden que les haga preguntas. Al final, dos o tres grupos muestran su plano. Guarden lo que salga: es el insumo para mi sesión del 30 y para el taller de casos de uso con José y Germán.

### Diapositiva 37 · ¿No saben cómo pedirlo? Abran el micrófono · 10:38 (14 min)

`[PANTALLA] ¿No saben cómo pedirlo? Abran el micrófono`

Este es mi truco favorito. Escribimos mal los prompts, pero hablamos muy bien. Entonces hablen: abran el micrófono y hagan catarsis, cuéntenle la tarea a la IA como se la contarían a un colega en un café, y pídanle que les haga preguntas. Al final, las palabras mágicas: que les escriba las instrucciones del asistente, dividido en pasos y con los puntos de revisión humana. Si la conexión lo permite, lo hago en vivo con una tarea que me dicten en el chat. Ojo: cuando cuenten la tarea, no digan nombres ni datos reales; cuenten el proceso, no el caso.

### Diapositiva 38 · Dos instrucciones para copiar hoy · 10:52 (3 min)

`[PANTALLA] Dos instrucciones para copiar hoy`

Les dejo estas dos instrucciones listas para copiar. La primera es para auditar cualquier texto que les dé una IA, o incluso un texto humano. La segunda es para trabajar con fuente cerrada, que es como vamos a trabajar el 30 de noviembre con investigación y gestión del conocimiento. Guárdenlas; en la próxima sesión las vamos a convertir en instrucciones permanentes dentro de un proyecto y en una skill, para que no tengan que pegarlas cada vez.


---

## CIERRE · 10:55 – 11:00

### Diapositiva 39 · Las herramientas cambian cada semana. Las habilidades se quedan con ustedes. · 10:55 (5 min)

`[PANTALLA] Las herramientas cambian cada semana. Las habilidades se quedan con ustedes.`

Volvamos a la pregunta del principio: ¿cuánto de lo que hicieron la semana pasada lo podría hacer la IA? Probablemente bastante. Pero hoy vimos que ese porcentaje solo vale si viene con método: semáforo de datos, verificación, neutralidad y una persona que responde. La IA puede apoyar el análisis; la validación, la interpretación y la responsabilidad institucional siguen siendo de la MOE. Y les repito lo que les digo a todos mis grupos: no se aprendan botones, que cambian cada semana. Apréndanse las habilidades. Para el lunes 30 traigan un documento público de su área y una tarea que repitan cada semana: con eso vamos a construir su primer espacio de trabajo. Muchas gracias.


**Ritmo del laboratorio (10:20 – 10:55):** Reto 1, auditar la respuesta (10:21 – 10:32). Casa de la MOE y empaquetado (10:32 – 10:37). Reto 2, diseñar el agente: presentas la ficha (10:37), muestras la catarsis por voz (10:38) y los grupos trabajan hasta 10:48; de 10:48 a 10:52 muestran dos o tres grupos. Prompts para llevar (10:52). Cierre (10:55).

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
