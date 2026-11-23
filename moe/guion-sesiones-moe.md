# Capacitación en IA para la MOE · Guion de mis sesiones

**Programa:** Capacitación en Inteligencia Artificial para la Misión de Observación Electoral (Appicua)
**Capacitadora:** Adriana Vergara · IA Legal Studio
**Formato:** virtual y sincrónico. **Cada sesión dura 2 horas, de 9:00 a 11:00 a. m.**
**Ajuste pedido por la MOE:** la primera hora (9:00 a 10:00) es lo jurídico y la gobernanza; la segunda (10:00 a 11:00), práctica en las plataformas: frontera entre cuenta personal y corporativa, configuración de seguridad en vivo, conectores con mínimo privilegio, ecosistemas, NotebookLM y el primer agente. La bibliografía queda en el anexo.
**Presentación de la sesión 1:** https://claude.ai/artifact/SjwtcFVmrRgXktnvkvnuEQ (50 diapositivas para presentar y 12 de anexo; estas mismas notas están como notas del orador)

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
- **Si vas larga:** en el bloque 01 deja el quiz, Deloitte y Quebec; en el bloque 02 deja solo la escalera. La segunda hora no se recorta: es lo que pidió la MOE.

**Antes de entrar (lista rápida)**
- Abre la base de Damien Charlotin y actualiza la cifra de la diapositiva 10.
- Confirma con la MOE la cifra de las 150 campañas de desinformación (diapositiva 7).
- Ten abierta una herramienta gratuita para las demostraciones (micrófono incluido para la catarsis por voz), en un chat nuevo.
- Ten listo para pegar en el chat de la reunión: las instrucciones del Verificador MOE y el texto de prueba (archivo `agente-verificador-moe.md`).
- Ten a mano el PDF público de la Ley 1581 de 2012 para adjuntarlo como fuente en la prueba del agente.
- Revisa que los cuatro videos arranquen (diapositivas 6, 23, 39 y 42).
- Para NotebookLM, ten listas 3 o 4 fuentes públicas en PDF: un informe publicado de la MOE (mapa de riesgo), una resolución del CNE, la Ley 1475 de 2011 y la Ley 1581 de 2012.
- Pide a la MOE que confirme qué cuentas corporativas tienen (Google Workspace con Gemini, Gemini Enterprise, Claude Team, ChatGPT Business o Enterprise) para mostrar la configuración real.
- Pide a la organización salas por áreas para el laboratorio: legal, calidad de elecciones, observatorio político, mapas de riesgo, comunicaciones y monitoreo legislativo.

# SESIÓN 1 · Lunes 23 de noviembre · 9:00 – 11:00 (2 horas)

---

## PRIMERA HORA · APERTURA · 9:00 – 9:08

### Diapositiva 1 · IA responsable, aspectos legales y manejo seguro de la información · 9:00 (1 min)

`[PANTALLA] IA responsable, aspectos legales y manejo seguro de la información`

Bienvenida. Hola a todos, qué bueno tenerlos acá. Soy Adriana Vergara: abogada, fundé IA Legal Studio y lo que hacemos es acompañar a organizaciones a entender la IA, formar a sus equipos y meterla de verdad en el trabajo del día a día, con gobernanza. Doy clase de IA en el Rosario y en el Externado. El miércoles José les mostró qué es la IA y cómo escoger herramienta. Hoy vamos con la pregunta que más me hacen y que a nadie nos enseñaron: cómo usarla sin poner en riesgo a la institución, a las personas que confían en la MOE ni la credibilidad de lo que publicamos.

### Diapositiva 2 · Mis tres sesiones con ustedes: 2 horas cada una · 9:01 (1 min)

`[PANTALLA] Mis tres sesiones con ustedes: 2 horas cada una`

Les cuento cómo vamos a trabajar. Tengo tres sesiones con ustedes, de dos horas cada una, de 9 a 11. Hoy es la base de todo: seguridad, aspectos legales, verificación. Las otras dos son de manos a la obra: investigación y gestión del conocimiento, y luego monitoreo legislativo y producción de informes y libros. Todo lo que veamos hoy se vuelve a usar allá: el semáforo de datos, la verificación y la regla de que la responsabilidad es humana. Y entre mis sesiones, Germán les va a mostrar el trabajo con bases de datos, así que hoy también les dejo listo cómo cuidar esas bases antes de subirlas.

### Diapositiva 3 · Una hora jurídica, una práctica · 9:02 (1 min)

`[PANTALLA] Una hora jurídica, una práctica`

Así vamos a repartir las dos horas, como lo acordamos con la MOE: la primera hora, lo jurídico y la gobernanza; la segunda hora, manos a la obra en las plataformas. El marco teórico va concentrado y les dejo bibliografía en el anexo de esta presentación. En la segunda hora vamos a configurar la seguridad de sus cuentas en tiempo real, entender los conectores, conocer los tres ecosistemas, armar un cuaderno cerrado en NotebookLM y construir juntos el primer agente de la MOE. Tengan abiertas sus herramientas.

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

## BLOQUE 01 · ¿VERDAD O MENTIRA? · 9:08 – 9:20

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

## BLOQUE 02 · DEL PROMPT AL SISTEMA · 9:20 – 9:27

### Diapositiva 15 · Un año para subir cinco escalones · 9:20 (3 min)

`[PANTALLA] Un año para subir cinco escalones`

*(Cada clic enciende un escalón.)* Todo lo que vivimos del disquete a la nube pasó en treinta años. Pero esto pasó en más o menos uno. Primero, la IA fundacional, aislada: le preguntábamos cualquier pendejada y ella, feliz, respondía. Después, a generar documentos: «hazme un informe», y salía uno de otro país. Luego vino el cuento del prompt: cada quien hacía sus vainas, cursos de prompts, prompts para hacer prompts. Después, las arquitecturas de trabajo: habilidades, manuales, procesos; ya no se le pregunta, se le enseña. Y hoy, las estructuras agénticas: equipos de IA que hacen el proceso completo, del inventario de los reportes al informe listo para que ustedes lo revisen. Ahora ustedes: en el chat, un número del 1 al 5. ¿En qué escalón está su área? *(Lean algunas respuestas en voz alta.)* La meta de este programa es que cada área suba por lo menos dos.

### Diapositiva 16 · Bienvenidos a la era agéntica · 9:23 (2 min)

`[PANTALLA] Bienvenidos a la era agéntica`

La IA dejó de ser solo un chat que responde: hoy empieza a ejecutar trabajo. Hace dos años le pedíamos que resumiera un documento. Hoy le podemos decir: lee estos trescientos reportes, seudonimízalos, clasifícalos, arma la matriz y avísame qué merece alerta. Y lo hace, paso por paso. Eso es la era agéntica: ustedes pasan de ser quienes hacen a ser quienes dirigen. Pero ojo con la última frase: un agente mal dirigido es un practicante con energía infinita y cero criterio. Produce mucho, muy rápido y mal. Por eso hoy hablamos de seguridad y verificación antes que de agentes.

### Diapositiva 17 · De la caja negra a la caja blanca · 9:25 (2 min)

`[PANTALLA] De la caja negra a la caja blanca`

Ya conocemos los personajes. El que dice: «no, es que mi IA la tengo súper entrenada, me conoce más que mi mamá». Y el otro: «es que yo pago la versión Pro Max». Y la organización con un Word de prompts oficiales que a cada quien le da un resultado distinto. Díganme si no es así. Eso es caja negra: nadie sabe qué instrucción se usó, qué leyó la máquina ni quién revisó. La caja blanca es lo contrario: el proceso escrito, las mismas reglas para todos, cada dato con su fuente y un registro de quién aprobó. Es lo que pide la ISO/IEC 42001 y, sobre todo, es coherente con lo que la MOE le exige al Estado: transparencia y trazabilidad.


---

## BLOQUE 03 · QUÉ SE SUBE Y QUÉ NO: SEMÁFORO, LEY 1581 Y TRANSMISIÓN DE DATOS · 9:27 – 9:44

### Diapositiva 18 · La IA no sabe: predice la palabra más probable. · 9:27 (1 min)

`[PANTALLA] La IA no sabe: predice la palabra más probable.`

Esto ya se los contó José el miércoles, pero lo retomo porque es la raíz de todo lo de hoy. Los modelos no buscan la verdad: predicen cuál es la siguiente palabra más probable. Si lo más probable es que una ley tenga un artículo 14 que diga algo, lo escribe, exista o no. Por eso la IA nunca titubea. Y nosotros, como humanos, tendemos a creerle a quien habla con seguridad. Primera regla de hoy: que algo suene bien no quiere decir que esté bien.

### Diapositiva 19 · Cinco maneras de fallar con seguridad · 9:28 (3 min)

`[PANTALLA] Cinco maneras de fallar con seguridad`

Conocer cómo falla es tan importante como saber qué puede hacer. Estas son las cinco fallas que más vemos. La alucinación es la famosa: inventa con toda la coherencia formal del mundo. La desactualización es la más silenciosa: el modelo se entrenó con datos hasta cierta fecha y no siempre lo dice. La confusión de jurisdicción es muy común en temas electorales porque hay mucho más material sobre México, Brasil o Estados Unidos que sobre Colombia. El sesgo: si la información de un municipio rural casi no está en internet, para la IA ese municipio casi no existe. Y la que más me preocupa para ustedes es la última: que la IA les atribuya a ustedes mismos una cifra que nunca publicaron. Imagínense eso en un boletín. Ejercicio en vivo *(3 minutos)*: pídanle a la herramienta que tengan abierta «tres datos de la MOE sobre violencia política en 2025 con su fuente» y miren qué les da. ¿Pueden abrir las fuentes?

### Diapositiva 20 · El semáforo de datos de la MOE · 9:31 (3 min)

`[PANTALLA] El semáforo de datos de la MOE`

Este es el corazón de hoy. Vamos con el miedo número dos: que se filtre la información. Hay información que nunca debería ir a una herramienta abierta, y menos en versión gratuita. En rojo: todo lo que identifique a víctimas, denunciantes y observadores; la filiación política de personas; datos de menores; y lo que está reservado o sin publicar, como una alerta temprana que todavía no sale. En amarillo, lo que se puede trabajar solo en la nube de la organización, con la cuenta corporativa de la MOE, y además seudonimizado: nunca en una cuenta personal. En verde, lo que pueden usar tranquilos: lo público y lo que no tiene datos personales. Pregunta para el chat: ¿en qué color pondrían el Excel de hechos de violencia política que tienen ahora mismo en su computador?

### Diapositiva 21 · La opinión política es un dato sensible. Y pertenecer a una organización de derechos humanos, también. · 9:34 (2 min)

`[PANTALLA] La opinión política es un dato sensible. Y pertenecer a una organización de derechos humanos, también.`

Esto es lo que hace distinta a la MOE de casi cualquier otra organización con la que trabajo. La Ley 1581 dice que la orientación política es un dato sensible. Y dice algo más que casi nadie lee: también es sensible la pertenencia a organizaciones sociales y de derechos humanos. O sea: buena parte de las bases que ustedes manejan, candidatos amenazados, líderes sociales, observadores, militantes, son por definición datos sensibles. Y la SIC, en la Circular 002 de 2024, dijo cómo se aplica esto a la IA: solo lo necesario, de forma proporcional, y con la capacidad de demostrar que se cuidó. Si mañana alguien pregunta «¿con qué herramienta procesaron esta base?», la MOE tiene que poder responder.

### Diapositiva 22 · Subir datos a una IA es entregarlos a un tercero · 9:36 (3 min)

`[PANTALLA] Subir datos a una IA es entregarlos a un tercero`

Esto es lo que más me interesa que les quede de la primera hora. Cuando alguien de la MOE sube un documento con datos personales a una IA, jurídicamente está pasando esto: la MOE es la responsable del tratamiento, la que decide para qué se usan los datos y la que responde ante los titulares y ante la Superintendencia. El proveedor de IA es un encargado, y casi siempre está fuera de Colombia, así que hay una transmisión internacional de datos, que exige un contrato de transmisión con unas cláusulas mínimas. ¿Y qué pasa con una cuenta personal? Que el contrato es entre la persona y el proveedor; la MOE no aparece por ningún lado. No controla el uso, no puede exigir nada y no puede demostrar que cuidó los datos, que es justo lo que la SIC le pide con la responsabilidad demostrada. Por eso la frontera entre lo personal y lo corporativo no es un tema técnico: es jurídico. En la segunda hora la vamos a configurar plataforma por plataforma.

### Diapositiva 23 · Seudonimizar antes de subir · 9:39 (1 min)

`[PANTALLA] Seudonimizar antes de subir`

*(Mientras se marcan los datos en rojo.)* Miren: un nombre, una cédula, un diagnóstico, una clínica, una aseguradora. *(Cuando cambian a verde.)* Seudonimizar es cambiar cada dato por una etiqueta. Y es reversible, porque ustedes se quedan con la tabla de llaves. La IA trabaja el caso sin saber de quién se trata, y al final ustedes vuelven a armar el documento con los datos reales. Ahora veamos cómo se ve esto con un reporte de la MOE.

### Diapositiva 24 · Minimizar, seudonimizar, anonimizar · 9:40 (2 min)

`[PANTALLA] Minimizar, seudonimizar, anonimizar`

Aquí hay tres palabras que muy poca gente tiene claras. Seudonimizar es cambiar cada dato por una etiqueta: OBSERVADORA_01, CANDIDATO_03. Es reversible, porque ustedes se quedan con la tabla que dice quién es quién; la IA trabaja el caso sin saber de quién se trata, y al final ustedes vuelven a poner los datos reales. Anonimizar es quitar todo lo que identifique, sin posibilidad de volver atrás. Y la más importante para mí: minimizar, subir solo lo que la IA necesita para esa tarea y nada más. Si quiero clasificar el tipo de hecho, no necesito el nombre. Y una advertencia muy de la MOE: en un municipio de cinco mil habitantes, vereda más partido más fecha es casi un nombre propio. Seudonimizar no es solo cambiar nombres; es pensar qué combinación identifica.

### Diapositiva 25 · Mandamientos de uso de la IA · 9:42 (2 min)

`[PANTALLA] Mandamientos de uso de la IA`

Siete mandamientos, como los de Moisés pero más cortos. El más incumplido es el primero: gente subiendo bases completas a la cuenta gratuita. El cuarto lo vamos a hacer juntos en la segunda hora, plataforma por plataforma. Y un recordatorio sobre propiedad intelectual: el informe de un aliado o un libro no se sube sin revisar la licencia o el convenio, y lo que sale con el logo de la MOE es responsabilidad de la MOE, aunque lo haya redactado una IA. El más importante es el último: la IA no tiene responsabilidad institucional. La MOE sí.


---

## BLOQUE 04 · GOBERNANZA E ISO/IEC 42001 · 9:44 – 10:00

### Diapositiva 26 · Cinco controles antes de publicar · 9:44 (3 min)

`[PANTALLA] Cinco controles antes de publicar`

¿Cómo se evitan las alucinaciones? Les hablo con franqueza, porque en este tema hay mucha gente vendiendo humo: no existe un modelo que no alucine nunca. Lo que sí existe es una forma de trabajar para que ninguna alucinación llegue al documento que firma la MOE. Son cinco controles. La fuente cerrada: le dan los documentos y le prohíben salirse de ahí. La matriz de trazabilidad: cada dato con su fuente y su página; esto lo construimos juntos el 30 de noviembre. El semáforo de certeza. La verificación adversarial: le piden a otra IA que encuentre los errores, o que haga de periodista incómodo que quiere desmentir el informe. Y el checklist final. El modelo puede seguir alucinando, pero eso ya no llega al informe.

### Diapositiva 27 · Neutralidad: la IA no concluye · 9:47 (2 min)

`[PANTALLA] Neutralidad: la IA no concluye`

La neutralidad es parte del ADN de la MOE, y aquí la IA tiene un problema: tiende a darle la razón al usuario. Si le preguntan «explica por qué hubo fraude», les va a explicar por qué hubo fraude, aunque no lo haya habido. Eso se llama complacencia. Por eso la forma de preguntar es una decisión institucional, no un detalle técnico. Les dejo tres instrucciones para pegar al final de cualquier prompt de análisis. Ejercicio rápido en vivo: pregúntenle a su herramienta, con las dos versiones, por un municipio cualquiera y comparen las respuestas en el chat.

### Diapositiva 28 · Lo que no se le delega a una máquina · 9:49 (2 min)

`[PANTALLA] Lo que no se le delega a una máquina`

Esta lista es para discutirla, no para imponerla; ustedes conocen sus procesos. Pero hay decisiones que tienen consecuencias sobre personas o sobre la credibilidad de la MOE, y esas no se le entregan completas a una máquina. La IA puede proponer una clasificación preliminar de un hecho; la calificación final la hace alguien con criterio y metodología. Puede sugerir variables para el mapa de riesgo; el nivel final lo fija el equipo. Pregunta para el chat: ¿qué le agregarían o le quitarían a esta lista desde su área?

### Diapositiva 29 · ISO/IEC 42001: el estándar para gobernar la IA · 9:51 (3 min)

`[PANTALLA] ISO/IEC 42001: el estándar para gobernar la IA`

Y aquí entra la gobernanza, que es mi tema favorito. Cuando en una organización cada quien usa la IA como le parece, el día que hay un problema nadie sabe quién aprobó qué, con qué herramienta ni con qué datos. Para eso existe la ISO/IEC 42001: es el estándar internacional para gestionar la IA dentro de una organización, publicado en diciembre de 2023, y funciona con la lógica de mejora continua que muchos ya conocen de otras normas ISO: planear, hacer, verificar y actuar. Se complementa con la 23894, que es la de gestión de riesgos de IA. La MOE no tiene que certificarse mañana. Pero sí puede usar su lógica desde hoy: saber qué IA usamos, para qué, con qué datos y quién responde. Pregunta para el chat: hoy, ¿quién aprueba en la MOE que alguien empiece a usar una herramienta nueva de IA? Si la respuesta es «nadie» o «no sé», ahí está el primer paso.

### Diapositiva 30 · Qué exigirle al proveedor · 9:54 (3 min)

`[PANTALLA] Qué exigirle al proveedor`

Esto es debida diligencia, y es la parte de la gobernanza que más se olvida. Antes de que la MOE suba datos de trabajo a cualquier plataforma, alguien tiene que revisar seis cosas. Que no entrene con los datos, y que eso esté en el contrato, no solo en un botón que cualquiera puede cambiar. Que haya un contrato de tratamiento de datos. Cuánto tiempo guarda la información y cómo se borra. Que haya una consola de administración con inicio de sesión institucional y control de conectores. Que deje registros de auditoría. Y qué certificaciones tiene y dónde quedan los datos. Las versiones empresariales de Google, OpenAI y Anthropic ofrecen estas garantías; las cuentas personales, no. Pregunta para el chat: ¿con qué cuenta trabaja usted hoy?

### Diapositiva 31 · Mínimos de una política de uso de IA · 9:57 (3 min)

`[PANTALLA] Mínimos de una política de uso de IA`

Cuando en una organización cada quien usa la IA como le parece, el día que hay un problema nadie sabe quién aprobó qué, con qué herramienta ni con qué datos. Para eso existe la ISO/IEC 42001, el estándar internacional para gestionar la IA. No hace falta certificarse para usar su lógica. Estos son los seis mínimos que yo le recomendaría a la MOE: inventario, roles, semáforo, revisión humana, registro y formación. Ninguno se resuelve con un prompt; todos se resuelven con método. Y esto conecta con el módulo 6, cuando José y Germán diseñen los casos de uso: cada caso debe decir quién valida y qué riesgo tiene.


---

## SEGUNDA HORA · BLOQUE 05 · CUENTAS, CONECTORES Y ECOSISTEMAS · 10:00 – 10:25

### Diapositiva 32 · Manos a la obra: de un uso personal desprotegido a un entorno corporativo blindado · 10:00 (1 min)

`[PANTALLA] Manos a la obra: de un uso personal desprotegido a un entorno corporativo blindado`

Terminamos la primera hora, la jurídica. Ahora, como lo pidieron, la segunda hora es de manos a la obra. Abran sus herramientas, la de la MOE si la tienen y la personal si es la que usan hoy. Vamos a hacer cuatro cosas: ajustar la seguridad de cada cuenta, entender los conectores, conocer los tres ecosistemas y para qué sirve cada uno, y construir dos cosas que se llevan: un cuaderno cerrado en NotebookLM y un agente verificador.

### Diapositiva 33 · Cuenta personal o cuenta de la MOE · 10:01 (4 min)

`[PANTALLA] Cuenta personal o cuenta de la MOE`

Esta es la diapositiva que ustedes pidieron. En los tres mundos la regla es la misma: la versión personal, gratis o de pago individual, puede usar lo que ustedes escriben para mejorar los modelos, salvo que lo desactiven. La versión corporativa tiene términos comerciales: no entrena con los datos de la organización y la administra la organización. En Google, gemini.google.com con una cuenta personal no es lo mismo que Gemini dentro del Google Workspace de la MOE o que Gemini Enterprise en business.gemini.google. En Claude, sobre la pregunta que hicieron: la aplicación de escritorio sigue existiendo, pero no es lo que define la seguridad; lo que la define es con qué cuenta inician sesión. Un Claude Team en el escritorio es Team; un Claude gratis en el escritorio es gratis. Y en OpenAI, ChatGPT Business o Enterprise frente a Free o Plus. Un detalle: la edición de entrada gratuita de Gemini Enterprise sí puede usar datos para mejorar. Pregunta para el chat: ¿cuántos están ahora mismo con cuenta de la MOE y cuántos con cuenta personal?

### Diapositiva 34 · Ajustes de seguridad, plataforma por plataforma · 10:05 (6 min)

`[PANTALLA] Ajustes de seguridad, plataforma por plataforma`

Ahora sí, a configurar. Compartan pantalla si quieren y lo hacemos juntos. En ChatGPT: Configuración, Controles de datos, y desactiven «Mejorar el modelo para todos». En Claude: Configuración, Privacidad, y desactiven que sus chats se usen para mejorar Claude. En Gemini, si es cuenta personal, desactiven la actividad de las apps de Gemini; si es la cuenta de la MOE, verifiquen que sí aparece como cuenta de la organización. Y en las tres, revisen la memoria, las instrucciones personalizadas y los conectores, y apaguen lo que no usen. Los menús cambian de nombre seguido; si no lo encuentran, busquen «mejorar el modelo» o «actividad». Cuando terminen, escriban «listo» y en qué plataforma. Importante: aun con todo esto desactivado, lo rojo del semáforo no se sube.

### Diapositiva 35 · Conectores con mínimo privilegio · 10:11 (3 min)

`[PANTALLA] Conectores con mínimo privilegio`

Los conectores son lo más útil y lo más riesgoso. Cuando conectan Gemini a Drive, Gmail o Calendar, la IA no tiene permisos propios: hereda los suyos, de forma estricta. Ve todo lo que ustedes ven. Eso es bueno, porque no ve más; y es peligroso, porque si ustedes tienen acceso a una carpeta con datos de víctimas, la IA también. Por eso, mínimo privilegio: solo el conector que la tarea necesita, ordenar las carpetas antes de conectar, desconectar al terminar y revisar cada mes. Y que lo decida la política: el administrador de Workspace puede definir qué conectores se permiten. Pregunta para el chat: ¿quién en su área tiene acceso a carpetas que serían rojas en el semáforo?

### Diapositiva 36 · Tres ecosistemas, tres fortalezas · 10:14 (4 min)

`[PANTALLA] Tres ecosistemas, tres fortalezas`

Les cuento rápido los tres mundos. OpenAI: ChatGPT es el más versátil, con proyectos, GPTs, investigación profunda, modo agente y voz, y Codex, que es su agente para programar. Anthropic: Claude es muy fuerte leyendo documentos largos y escribiendo con cuidado, y su ecosistema está pensado para trabajar con método: proyectos, skills, conectores, Claude Code y Cowork, que ya ejecutan tareas completas. Google: Gemini vive dentro de Drive y Gmail, tiene Gems como asistentes personalizados, NotebookLM para trabajar solo con sus fuentes y Google AI Studio para prototipar. ¿Por qué las organizaciones escogen uno u otro? Casi nunca por cuál es más inteligente, sino por dónde vive su información y quién la gobierna. Si la MOE vive en Google Workspace, Gemini y NotebookLM tienen mucho sentido para el día a día; y eso no impide usar los otros para lo que hacen mejor, con cuenta corporativa.

### Diapositiva 37 · ¿Qué mundo para qué tarea? · 10:18 (4 min)

`[PANTALLA] ¿Qué mundo para qué tarea?`

Ejercicio rápido. Les leo cinco tareas reales de la MOE y en el chat me dicen qué mundo usarían: Google, Claude u OpenAI. *(Lee, espera respuestas y revela con clic.)* Fíjense en la quinta: cuando una tarea se repite con las mismas reglas, ya no hablamos de herramienta sino de agente, y los tres mundos tienen su versión. No hay una única respuesta correcta; lo que cambia la respuesta es dónde está la información y con qué cuenta la gobierna la MOE.

### Diapositiva 38 · Más que la herramienta: el segundo cerebro de la MOE · 10:22 (2 min)

`[PANTALLA] Más que la herramienta: el segundo cerebro de la MOE`

Y esto es lo más importante de toda la segunda hora. Más que la herramienta, lo que vale es el segundo cerebro de la organización: fuentes de confianza bien curadas, ordenadas en cuadernos o proyectos por área, con instrucciones y reglas escritas una sola vez, agentes que repiten las tareas con ese método y personas que revisan y deciden. Cuando cada quien usa la IA a su manera, en chats sueltos, el conocimiento se queda en la cuenta de cada persona y se pierde el día que se va. Cuando se construye el segundo cerebro, el conocimiento se queda en la MOE. Eso es lo que vamos a empezar con NotebookLM.

### Diapositiva 39 · El siguiente escalón: el flujo con control humano · 10:24 (1 min)

`[PANTALLA] El siguiente escalón: el flujo con control humano`

Yo lo pienso así: lo que uno hace dos veces vale la pena diseñarlo, y lo que hace diez veces vale la pena automatizarlo. *(Mientras avanzan los reportes.)* Imagínense el día de elecciones: llegan los reportes de los observadores, se seudonimizan, se clasifican y se verifican, pasan por un control humano, que nunca se quita, y salen la alerta o el informe. Eso es el escalón cinco. No lo vamos a construir hoy, pero es hacia donde va este camino, y en el módulo de casos de uso lo pueden priorizar.


---

## BLOQUE 06 · NOTEBOOKLM: EL CUADERNO CERRADO DE LA MOE · 10:25 – 10:37

### Diapositiva 40 · El cuaderno cerrado de la MOE · 10:25 (4 min)

`[PANTALLA] El cuaderno cerrado de la MOE`

Ahora construimos el primer pedazo del segundo cerebro. *(Comparte pantalla con NotebookLM abierto y unas fuentes públicas listas.)* Entren con la cuenta de la MOE; en una cuenta de trabajo, Google indica que lo que cargan no se usa para entrenar y no lo revisan personas. Creen un cuaderno con un nombre claro. Carguen solo fuentes verdes: informes ya publicados, mapas de riesgo publicados, resoluciones del CNE, leyes. Configuren el chat con la instrucción del analista que está en la siguiente diapositiva. Y pregunten. La gracia de NotebookLM es que responde solo con lo que ustedes le cargan y les muestra de dónde sale cada respuesta: abran cada cita. Las alucinaciones quedan limitadas al rango de sus documentos, aunque no desaparecen del todo: por eso se verifica.

### Diapositiva 41 · Tres instrucciones para el cuaderno · 10:29 (8 min)

`[PANTALLA] Tres instrucciones para el cuaderno`

Les dejo tres instrucciones en el chat de la reunión. La primera va en la configuración del chat del cuaderno, para que todo lo que respondan tenga el método de la MOE. La segunda es para el caso de riesgo electoral que ustedes mencionaron: una matriz con evidencia textual, fuente, página y fecha, sin inferir riesgos que no estén escritos. La tercera es para la revisión de coherencia normativa: compara normas, señala contradicciones y vacíos, y deja la conclusión jurídica a un abogado. Peguen la que corresponda a su área y miren qué les sale. Después, si quieren, pídanle una guía de estudio o un resumen en audio para compartir con el equipo. Pregunta para el chat: ¿qué fuente le hizo falta a su cuaderno?


---

## BLOQUE 07 · EN VIVO: EL PRIMER AGENTE · 10:37 – 10:52

### Diapositiva 42 · Armemos el primer agente: el Verificador MOE · 10:37 (1 min)

`[PANTALLA] Armemos el primer agente: el Verificador MOE`

Ahora sí, lo que les prometí. Vamos a armar en vivo el primer agente de la MOE. Miren lo que va a hacer. *(Deja correr el video.)* Le entregamos un borrador de boletín y revisa afirmación por afirmación: esta tiene fuente y página, verde; esta no cuadra con la base, amarillo; esta no tiene fuente, rojo, no se publica; y esta es una opinión que compromete la neutralidad. Y fíjense en el cierre: la máquina señala, una persona decide qué se publica. Lo vamos a construir en diez minutos, con una herramienta gratuita, sin programar.

### Diapositiva 43 · Las seis piezas de un agente · 10:38 (1 min)

`[PANTALLA] Las seis piezas de un agente`

Un agente no es magia: son seis piezas. *(Una por clic.)* Misión: qué hace y para quién. Fuentes: con qué trabaja; aquí, solo con lo que le damos. Reglas: lo que nunca rompe; esto es el playbook, el manual de convivencia. Pasos: cómo trabaja, como lo haría su mejor analista. Salida: qué entrega, en qué formato. Y control humano: quién decide. Fíjense que estas son exactamente las seis preguntas que ustedes van a responder en el reto, para el agente de su área.

### Diapositiva 44 · Las instrucciones del Verificador MOE · 10:39 (3 min)

`[PANTALLA] Las instrucciones del Verificador MOE`

*(Abre la herramienta en pantalla compartida, chat nuevo.)* Estas son las instrucciones completas. Les dejo el texto en el chat de la reunión para que lo copien. Fíjense que están las seis piezas: misión, fuentes, reglas, pasos, salida y el recordatorio de revisión humana. Lo pego al inicio de un chat nuevo y le doy enter. ¿Qué hace? Confirma que entendió y me pide el texto y las fuentes. Eso ya es un agente sencillo: un asistente con un rol, reglas y un procedimiento fijo. Háganlo conmigo: copien, peguen y escriban «listo» en el chat cuando les responda.

### Diapositiva 45 · respuesta · 10:42 (3 min)

`[PANTALLA] respuesta`

Paso 3: probarlo. Copien este texto, que les dejo en el chat, y péguenlo en el chat del agente. Si quieren, adjunten también una fuente pública, por ejemplo el texto de la Ley 1581 de 2012, para que pueda verificar algo contra un documento real. Ojo: esta respuesta la escribimos para el ejercicio, con seis errores plantados; no es la salida de ninguna herramienta. Tiene el tono de un buen informe, una estructura impecable y conectores bonitos. Así se ven los errores de verdad: no llegan con letrero. Mientras el agente trabaja, cuéntenme en el chat cuántos errores ven ustedes a simple vista.

### Diapositiva 46 · Lo que tenía mal la respuesta · 10:45 (2 min)

`[PANTALLA] Lo que tenía mal la respuesta`

Comparemos lo que encontró el agente con la clave. *(Pregunta primero qué les salió.)* Uno: desactualizado, la IA habla de 2026 como futuro. Dos: el preconteo no es el resultado oficial; lo oficial sale de los escrutinios. Tres: el INE es de México; aquí organiza la Registraduría y declara el CNE. Cuatro: error normativo, y grave, porque si alguien le cree comparte una base de datos sensibles. Cinco: una cifra atribuida a la MOE que la MOE no publicó *(la inventamos para el ejercicio)*, una generalización y una inferencia causal presentada como hecho. Seis: opinión. Si el agente no tenía fuentes, lo correcto es que marque casi todo en amarillo o rojo por «sin fuente»: eso no es una falla, es el agente cumpliendo su regla. ¿Cuántos encontró su agente? ¿Se le escapó alguno?

### Diapositiva 47 · Ahora, intenten romperlo · 10:47 (3 min)

`[PANTALLA] Ahora, intenten romperlo`

Antes de confiar en un agente hay que tratar de romperlo. Esto se llama verificación adversarial. Les propongo cuatro ataques; láncenlos ustedes en su chat y cuéntenme qué pasó. Si el agente marca todo en verde porque «lo aprobó la dirección», falló. Si inventa la fuente, falló. Si culpa a un partido, falló la neutralidad. Y el cuarto es una trampa para nosotros: ese archivo es rojo en el semáforo y no se sube, aunque el agente lo acepte. ¿Se les ocurre otro ataque? Escríbanlo en el chat y lo probamos en vivo. Y si se rompe, no se bota: se ajustan las reglas y se vuelve a probar. Así se construye un agente de verdad.

### Diapositiva 48 · La ficha de gobierno del agente · 10:50 (2 min)

`[PANTALLA] La ficha de gobierno del agente`

Último paso, y este es el que casi nadie hace: gobernarlo. Cada agente de la MOE debería tener una ficha como esta. Quién es el dueño, para qué sirve, qué datos usa, en qué cuenta, qué riesgos tiene, qué controles, quién revisa y dónde queda el registro de versiones. Esto es la ISO/IEC 42001 aterrizada en una hoja. Si la MOE junta las fichas de todos sus agentes, ya tiene su inventario de IA, que es el primer paso de cualquier sistema de gestión. Pregunta para el chat: ¿quién sería el dueño natural del Verificador en la MOE?


---

## LO QUE SE LLEVAN Y CIERRE · 10:52 – 11:00

### Diapositiva 49 · No se van con apuntes. Se van con esto. · 10:52 (3 min)

`[PANTALLA] No se van con apuntes. Se van con esto.`

Recapitulemos. No se van con apuntes: se van con un agente que construimos, probamos y atacamos juntos; con el plano del agente de su área; con el semáforo y los mandamientos; y con la ficha de gobierno. Y vuelvo a la pregunta de Quebec: ¿firmarían ahora un informe que una IA revisó? Respondan en el chat, pero esta vez con condiciones. Lo que escriban es su primera política de uso.

### Diapositiva 50 · Las herramientas cambian cada semana. Las habilidades se quedan con ustedes. · 10:55 (5 min)

`[PANTALLA] Las herramientas cambian cada semana. Las habilidades se quedan con ustedes.`

Volvamos a la pregunta del principio: ¿cuánto de lo que hicieron la semana pasada lo podría hacer la IA? Probablemente bastante. Pero hoy vimos que ese porcentaje solo vale si viene con método: semáforo de datos, verificación, neutralidad y una persona que responde. La IA puede apoyar el análisis; la validación, la interpretación y la responsabilidad institucional siguen siendo de la MOE. Y les repito lo que les digo a todos mis grupos: no se aprendan botones, que cambian cada semana. Apréndanse las habilidades. Para el lunes 30 traigan un documento público de su área y una tarea que repitan cada semana: con eso vamos a construir su primer espacio de trabajo. Muchas gracias.


---

## ANEXO · NO SE PRESENTA, QUEDA COMO MATERIAL DE CONSULTA

### Diapositiva 51 · Material de apoyo para consultar después · anexo

`[PANTALLA] Material de apoyo para consultar después`

Estas diapositivas no se presentan en la sesión. Quedan como material de consulta para el grupo.

### Diapositiva 52 · Para profundizar en el marco jurídico · anexo

`[PANTALLA] Para profundizar en el marco jurídico`

Bibliografía para quienes quieran profundizar en el marco teórico por su cuenta, como lo pidió la MOE.

### Diapositiva 53 · El mapa de herramientas · anexo

`[PANTALLA] El mapa de herramientas`

Este es el mapa. No es para memorizarlo. Las fundacionales son los motores: ChatGPT para conversar y pensar en voz alta, Claude para leer a fondo documentos largos y armar la casa, Gemini para trabajar dentro de Google, Grok para lo que está pasando en redes en tiempo real *(útil para monitorear desinformación, pero con privacidad baja)*. Las legales se montan sobre esos motores. NotebookLM es oro para la MOE: solo responde con los documentos que ustedes cargan. Gamma convierte un informe en presentación en minutos. Y las de construir y automatizar son el escalón 4 y 5. En este programa trabajamos con las versiones gratuitas de ChatGPT, Claude y Gemini. Las herramientas cambian cada semana: sale una nueva, le mueven un botón, sube de precio o desaparece. Lo que se queda es la habilidad.

### Diapositiva 54 · Antes de usar un dato: cuatro validaciones · anexo

`[PANTALLA] Antes de usar un dato: cuatro validaciones`

Vamos a la parte práctica. Cada dato que les entregue una IA pasa por cuatro preguntas. Fuente: ¿de dónde sale? Existencia: ¿existe? Y no basta con que la IA les dé un enlace; ábranlo. Contenido: muchas veces la sentencia sí existe, pero no dice lo que la IA dice que dice; esa es la alucinación más peligrosa, porque pasa el primer filtro. Y vigencia: en temas electorales esto es crítico, porque las normas cambian, los proyectos de ley tienen varias versiones y los resultados tienen varios cortes. Mi regla: si no lo pueden abrir, no lo pueden publicar.

### Diapositiva 55 · Qué verificar en cada tema de la MOE · anexo

`[PANTALLA] Qué verificar en cada tema de la MOE`

Aterricemos esto a lo que ustedes hacen. En legislación, lo típico es que la IA mezcle el texto radicado con una ponencia o con lo aprobado; eso lo vamos a trabajar a fondo el 2 de diciembre en monitoreo legislativo. En resultados, la confusión más común es tratar el preconteo como resultado oficial. En datos territoriales, los nombres de municipios se repiten entre departamentos; por eso trabajen con el código DIVIPOLA, y Germán les va a hablar de esto en bases de datos. En violencia política, la IA tiende a «completar» la historia: a poner un responsable donde la fuente no lo dice. Y en estadísticas, pregunten siempre por el denominador. Pregunta para el chat: ¿cuál de estos errores ya les pasó, con o sin IA?

### Diapositiva 56 · ¿De quién es? ¿Y quién responde? · anexo

`[PANTALLA] ¿De quién es? ¿Y quién responde?`

Ahora el tercer miedo: si algo sale mal, ¿quién responde? Primero, la autoría. En Colombia y en la Comunidad Andina el autor es una persona natural; lo que genera una máquina sola difícilmente es una obra protegida. Por eso el valor está en lo que ustedes le ponen: la estructura, la edición, la validación. Segundo, y más importante: la responsabilidad no se traslada. Si un boletín de la MOE dice algo falso, nadie va a demandar a OpenAI: va a ser la MOE. Tercero, cuidado con los documentos de terceros: el informe que les compartió un aliado bajo convenio no es para subirlo a cualquier lado. Y cuarto, transparencia: es sano tener una regla clara de cuándo se dice que algo se hizo con apoyo de IA.

### Diapositiva 57 · Dos instrucciones para copiar hoy · anexo

`[PANTALLA] Dos instrucciones para copiar hoy`

Les dejo estas dos instrucciones listas para copiar. La primera es para auditar cualquier texto que les dé una IA, o incluso un texto humano. La segunda es para trabajar con fuente cerrada, que es como vamos a trabajar el 30 de noviembre con investigación y gestión del conocimiento. Guárdenlas; en la próxima sesión las vamos a convertir en instrucciones permanentes dentro de un proyecto y en una skill, para que no tengan que pegarlas cada vez.

### Diapositiva 58 · ¿Hecho, inferencia u opinión? · anexo

`[PANTALLA] ¿Hecho, inferencia u opinión?`

Escriban en el chat el número y una letra: H, I u O. *(Después de que respondan, voy revelando con clic.)* La 1 es un hecho verificable. La 2 es la trampa típica: suena a hecho, pero es una inferencia causal; puede ser cierta, pero necesita evidencia. La 3 es opinión. La 4 es una predicción: un mapa de riesgo no se hace así, se hace con metodología. La 5 es la más interesante: parece un hecho, pero sin fuente es un dato huérfano. La IA mezcla las tres cosas en el mismo párrafo y con el mismo tono. Por eso, cuando le pidan algo, pídanle que las separe. Esto es justo lo que la MOE hace todos los días con la información pública: ahora hay que hacerlo también con lo que nos devuelve la máquina.

### Diapositiva 59 · Así podría verse la casa de la MOE · anexo

`[PANTALLA] Así podría verse la casa de la MOE`

Ahora lo que más me gusta. Esto es lo que hice en Cartagena con abogados del sector público, y lo que hago con despachos: en vez de un chat para todo, una casa con habitaciones. Cada habitación es un asistente que hace una sola cosa, siempre igual, con las mismas reglas. Les pongo seis ideas para la MOE, una por área: un verificador antes de publicar, la ficha legislativa, el clasificador de reportes de observadores, el depurador de hechos de violencia política, el auditor de bases para los mapas de riesgo y el concepto exprés para el área legal. No es un diseño cerrado: es para que se imaginen el suyo. Pregunta para el chat: ¿cuál de estos les ahorraría más horas esta semana?

### Diapositiva 60 · Cómo se empaqueta: del chat eterno a la casa · anexo

`[PANTALLA] Cómo se empaqueta: del chat eterno a la casa`

¿Cómo se construye esa casa? Hoy la mayoría hace esto: busca el chat donde le quedó bien la primera vez, copia el prompt, itera, explica todo otra vez y se queda sin tokens. La alternativa: cada paso se vuelve una skill; las reglas, un playbook; todo junto, un plugin que el compañero instala y ejecuta con las mismas reglas; y los agentes hacen el trabajo pesado. Su única misión es revisar con lupa el resultado final. Esto lo vamos a aterrizar en mis próximas sesiones y en el módulo de casos de uso. Hoy solo vamos a diseñar el plano.

### Diapositiva 61 · Diseñen el agente de su área · anexo

`[PANTALLA] Diseñen el agente de su área`

Ahora les toca. Por áreas *(legal, calidad de elecciones, observatorio, mapas de riesgo, comunicaciones, monitoreo legislativo)*, diseñen el plano de su agente con estas seis preguntas. Pueden usar la catarsis por voz de la siguiente diapositiva: abren el micrófono, le cuentan la tarea a la IA y le piden que les haga preguntas. Al final, dos o tres grupos muestran su plano. Guarden lo que salga: es el insumo para mi sesión del 30 y para el taller de casos de uso con José y Germán.

### Diapositiva 62 · ¿No saben cómo pedirlo? Abran el micrófono · anexo

`[PANTALLA] ¿No saben cómo pedirlo? Abran el micrófono`

Este es mi truco favorito. Escribimos mal los prompts, pero hablamos muy bien. Entonces hablen: abran el micrófono y hagan catarsis, cuéntenle la tarea a la IA como se la contarían a un colega en un café, y pídanle que les haga preguntas. Al final, las palabras mágicas: que les escriba las instrucciones del asistente, dividido en pasos y con los puntos de revisión humana. Si la conexión lo permite, lo hago en vivo con una tarea que me dicten en el chat. Ojo: cuando cuenten la tarea, no digan nombres ni datos reales; cuenten el proceso, no el caso.


**Ritmo de la segunda hora (10:00 – 11:00):** frontera personal/corporativa (10:01), configuración en vivo (10:05, seis minutos, todos con sus cuentas), conectores (10:11), ecosistemas y ejercicio de los tres mundos (10:14 – 10:22), segundo cerebro y video del flujo (10:22), NotebookLM: pasos y prompts (10:25 – 10:37), agente verificador: instrucciones, prueba, ataque y ficha (10:37 – 10:52), lo que se llevan y cierre (10:52).

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
