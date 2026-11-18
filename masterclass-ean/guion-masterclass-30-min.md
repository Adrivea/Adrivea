# Abogado Aumentado con IA · Guion de la masterclass (30 minutos)

**Para:** la landing del programa *Abogado Aumentado con IA. Del prompt al sistema* (Universidad EAN)
**Formato:** masterclass grabada, 30 minutos, 34 diapositivas en la plantilla institucional EAN, con 4 videos cortos que arrancan solos
**Objetivo:** que quien la vea salga convencido de dos cosas: que **usar IA sin método es un riesgo** y que **este programa le da el método**. Vendemos con valor, no con folleto.

**Cómo leer este guion**
- `[PANTALLA]` es la diapositiva que se ve.
- *(cursiva entre paréntesis)* es lo que haces frente a cámara.
- Lo demás es lo que dices. Está escrito para decirse, no para leerse: cámbialo a tus palabras donde te suene raro.
- Cada bloque trae el minuto aproximado. Si vas largo, lo más fácil de acortar es la diapositiva 8 (adopción) y la 32 (equipo docente).

**Arco de la charla**
1. **Apertura (0:00–7:28):** bienvenida con el nombre del programa, «este no es el curso típico de prompts», tu historia (yo también pensaba que la IA solo hacía mamarrachos), dos preguntas que incomodan y los datos que muestran que esto ya llegó.
2. **Los tres miedos (7:28–16:46):** que invente, que filtre, que nadie responda. Cada miedo trae su antídoto, y cada antídoto es un módulo del curso.
3. **El salto (16:46–23:39):** de los prompts a las arquitecturas de trabajo: Claude con skills, plugins, scripts, agentes y segundo cerebro; litigio y automatización.
4. **El programa (23:39–28:15):** módulos, proyecto final, antes y después, equipo.
5. **Cierre (28:15–30:00):** una pregunta y la invitación.

---

## 0:00 – 7:28 · APERTURA

### Diapositiva 1 · Portada · 0:00

`[PANTALLA] Portada EAN: «Abogado Aumentado con IA · Del prompt al sistema», con tu nombre, IA Legal Studio y la comunidad de Claude Code Colombia`

*(Miras a cámara, con calma.)*

Hola. Bienvenido a la masterclass de *Abogado Aumentado con IA*, el nuevo programa de la Universidad EAN. Soy Adriana Vergara, su directora académica.

Soy fundadora de **IA Legal Studio**, donde ayudo a organizaciones legales a navegar la inteligencia artificial, a formar a sus equipos y a implementarla en su trabajo diario. Y también impulso la **comunidad de Claude Code en Colombia**.

### Diapositiva 2 · Este no es el curso típico · 0:39

`[PANTALLA] «Este no es el curso típico de prompts. Aquí vas a construir sistemas de trabajo jurídico.»`

Y te lo digo de entrada: este no es el curso típico de prompts.

Seguramente ya viste diez webinars sobre «los 50 mejores prompts para abogados». Este no es uno más. En la próxima media hora te voy a mostrar por qué los prompts no alcanzan, qué está pasando ya en los tribunales y qué tiene que aprender un abogado hoy para no quedarse por fuera: arquitecturas de trabajo, protección de datos, automatización y gobernanza.

Pero antes de hablarte del curso, te cuento cómo llegué hasta aquí.

### Diapositiva 3 · Mi historia · 1:27

`[PANTALLA] «Yo también pensaba que la IA solo servía para hacer mamarrachos.»`

*(Bajas el tono. Esto es personal.)*

Te voy a confesar algo: yo no llegué a esto convencida. Al contrario.

Cuando empecé a usar inteligencia artificial, pensaba que no servía para nada serio. Le pedía una demanda y me devolvía un mamarracho: artículos de un código de otro país, sentencias que nadie había dictado, un texto que sonaba bonito pero sin estructura, sin hechos y sin pruebas.

Y me dio miedo. Miedo de firmar algo así. Miedo de subirle la información de un cliente. Pensé: esto es un juguete, no una herramienta para una abogada.

### Diapositiva 4 · Mismo modelo, otra arquitectura · 2:18

`[PANTALLA] Video «mamarracho» contra arquitectura de trabajo (17 s, arranca solo)`

*(Dejas correr el video unos segundos antes de hablar.)*

Hasta que entendí algo que me cambió la práctica: **el problema no era el modelo. Era cómo yo trabajaba con él.**

*(Señalas el lado izquierdo.)* Esto es lo que sale cuando le haces una pregunta suelta. *(Señalas el derecho.)* Y esto es lo que sale cuando diseñas una **arquitectura de trabajo**: le das fuentes, instrucciones, controles y un formato de entrega.

Mismo modelo. Otra arquitectura.

Con arquitecturas bien diseñadas empecé a producir documentos de altísima calidad. Y las alucinaciones dejaron de llegar a mis documentos, porque ninguna cita se queda si no pasa primero por una fuente. Eso es lo que te quiero enseñar. Por eso te dije que este no es el curso típico de prompts.

### Diapositiva 5 · Pregunta 1 · 3:35

`[PANTALLA] «¿Cuánto de lo que hiciste hoy lo podría hacer un agente mientras dormías?»`

Ahora sí, mis dos preguntas.

*(Pausa. Tres segundos de silencio.)*

Piénsalo en serio. El resumen del expediente. La revisión del contrato. El cuadro de vencimientos. La respuesta a ese derecho de petición que se parece mucho al de la semana pasada.

¿Qué porcentaje de tu día? ¿Veinte por ciento? ¿Cuarenta?

*(Señalas la pantalla.)* Escríbelo en los comentarios. Al final de esta charla vas a tener una respuesta más precisa, y te va a sorprender.

### Diapositiva 6 · Pregunta 2 · 4:18

`[PANTALLA] «¿Le subirías el expediente de tu cliente a ChatGPT?»`

Segunda pregunta, y esta incomoda más: ¿le subirías el expediente de tu cliente a ChatGPT?

*(Sonríes.)* La mayoría dice que no. Y aun así, muchos ya lo hicieron. Una demanda para «mejorarle la redacción». Un contrato para que «encuentre los riesgos». La historia clínica de un cliente para un caso de responsabilidad médica.

No lo digo para juzgar a nadie; yo también lo hice al principio. Lo digo porque eso es justo lo que nadie nos enseñó: no a usar la IA, sino a usarla **sin poner en riesgo al cliente ni nuestra tarjeta profesional**.

### Diapositiva 7 · Deloitte · 5:09

`[PANTALLA] Torta 30 / 20 / 50 · Deloitte Legal 2026`

Ahora, los datos.

Deloitte Legal publicó este año un informe que se llama *The AI Imperative*. Encuestó a 121 líderes de áreas jurídicas en el mundo. Y la proyección es esta:

*(Señalas cada porción.)*

En unos tres años, cerca del **30 % de la capacidad de un equipo jurídico la van a poner agentes de inteligencia artificial**. Alrededor de un **20 % van a ser perfiles híbridos**, mitad abogado, mitad ingeniero. Y el resto, abogados.

Y fíjate en el último número: hoy el 72 % del trabajo jurídico se cobra por hora. Esperan que en dos o tres años baje al 44 %. Cuando la máquina hace en minutos lo que antes tomaba horas, la hora deja de ser la forma de cobrar. Lo que vas a cobrar es tu criterio y tu método.

### Diapositiva 8 · Adopción · 6:16

`[PANTALLA] 76 % · 2 % · 84 %`

En 2024, según ese mismo trabajo de Deloitte, el 76 % de los departamentos jurídicos no usaba IA. En 2026, solo el 2 % sigue sin usarla.

O sea: ya todos la usan. Pero mira el tercer número: **el 84 % no ha rediseñado los roles** de su gente alrededor de la IA.

Esa es la brecha. Todo el mundo tiene la herramienta. Casi nadie cambió su forma de trabajar. Y ahí, justo ahí, está la oportunidad para ti.

### Diapositiva 9 · La frase · 6:59

`[PANTALLA] «La IA no te va a reemplazar. Un abogado que la domine con método, sí.»`

*(Lo dices lento.)*

La IA no te va a reemplazar.

Un abogado que la domine con método, sí.

Y fíjate que no dije «un abogado que la use». Usarla ya la usan todos. Dije **con método**. De eso se trata esta charla.

---

## 7:28 – 16:46 · LOS TRES MIEDOS

### Diapositiva 10 · Los tres miedos · 7:28

`[PANTALLA] 01 · Los tres miedos del abogado frente a la IA`

Cuando hablo con abogados, socios, jefes jurídicos y funcionarios públicos, siempre salen los mismos tres miedos. Casi nadie los dice en voz alta, pero ahí están:

Uno: **que invente.** Que me cite una sentencia que no existe.
Dos: **que filtre.** Que la información de mi cliente termine donde no debe.
Tres: **que me deje sin respaldo.** Que algo salga mal y nadie sepa quién respondía por qué.

Los tres son legítimos. Y los tres tienen solución. Vamos uno por uno.

### Diapositiva 11 · Charlotin · 8:12

`[PANTALLA] Curva de 719 a 2.262 decisiones`

Miedo número uno: que invente.

Hay un investigador francés, Damien Charlotin, que lleva una base de datos pública de decisiones judiciales en las que un tribunal tuvo que lidiar con contenido inventado por IA: citas falsas, sentencias que no existen, doctrina fabricada.

En enero de este año iba en unas 700 decisiones. A noviembre ya pasa de **2.262**. Se triplicó en menos de un año.

*(Pausa.)* Y no son estudiantes. Son abogados, a veces de firmas grandes, que confiaron en lo que les dijo la máquina.

### Diapositiva 12 · Colombia · 9:00

`[PANTALLA] Corte Suprema · Auto AC739-2026`

«Ah, pero eso pasa en Estados Unidos.» No.

En febrero de este año, la Sala de Casación Civil de la Corte Suprema de Justicia multó a un abogado que citó en un recurso providencias que no existían. La Relatoría de la Corte buscó cada una. Ninguna era real. El abogado reconoció que había usado IA y no había verificado. Y la Corte, además, compulsó copias a la Comisión de Disciplina Judicial.

El mensaje de la Corte es clarísimo: **verificar las fuentes es una obligación que no se delega**. Ni en un practicante, ni en una máquina. Y advirtió sobre algo que me parece buenísimo como concepto: el riesgo del «pseudo-derecho», textos que suenan a jurisprudencia y no lo son.

Ojo: la Corte no prohibió la IA. Lo que exige es verificación. Y antes ya la Corte Constitucional, en la T-323 de 2024, había puesto el tema sobre la mesa.

### Diapositiva 13 · El antídoto · 10:16

`[PANTALLA] Cinco controles: fuente cerrada, matriz, semáforo, adversarial, checklist`

Entonces, ¿cómo se evitan las alucinaciones? Te voy a ser honesta, porque mucha gente te va a vender humo aquí: **no existe un modelo que no alucine nunca**. Ninguno.

Lo que sí existe es un método para que **ninguna alucinación llegue a tu documento final**. Y eso es lo que trabajamos en el módulo 4, con Daniela Mesa:

*(Vas señalando.)*
- **Fuente cerrada:** la IA responde solo con los documentos que tú le das, no con lo que «recuerda».
- **Matriz de trazabilidad:** cada afirmación del documento tiene su fuente y su página.
- **Semáforo de certeza:** verde, está verificado; amarillo, hay que revisar; rojo, no se usa.
- **Verificación adversarial:** pones a otra IA a tratar de tumbar el documento.
- Y un **checklist antes de radicar**: cero citas que no hayas abierto con tus propios ojos.

La alucinación puede existir en el modelo. **En tu documento, no.**

### Diapositiva 14 · «Mi abogado me está manipulando» · 11:28

`[PANTALLA] «Mi abogado me está manipulando»`

Ahora te cuento un caso que a mí me pone la piel de gallina.

*(Lees la frase despacio.)* «Mi abogado me está manipulando.» Eso concluyó una clienta en Estados Unidos después de conversar con ChatGPT.

### Diapositiva 15 · Nippon Life · 11:54

`[PANTALLA] Línea de tiempo: Ene 2024 → Mar 2026`

La historia es así. Una mujer tenía una reclamación por incapacidad contra la aseguradora Nippon Life. Con su abogado llegaron a un acuerdo, y en enero de 2024 el caso quedó cerrado.

Después, ella le mostró la correspondencia a ChatGPT. Y ChatGPT le dio la razón: que la habían engañado. Ella despidió a su abogado y, según la aseguradora, empezó a radicar decenas de escritos redactados con la IA para reabrir un caso que ya estaba terminado.

En marzo de 2026, Nippon Life demandó a OpenAI ante un tribunal federal de Illinois, por ejercicio ilegal de la abogacía, y le pide 10 millones de dólares en daños punitivos. El caso sigue en curso; OpenAI pidió que se desestime.

¿Qué nos dice esto? *(Señalas la frase de abajo.)* **Tu cliente ya consulta a la IA.** Llega a tu oficina con la respuesta de ChatGPT en el celular. La pregunta no es si la IA va a entrar a tu práctica; ya entró. La pregunta es si **tú la dominas mejor que tu cliente**.

### Diapositiva 16 · Semáforo de datos · 13:18

`[PANTALLA] Semáforo rojo, amarillo y verde de datos`

Miedo número dos: que filtre. Este es el que más me preguntan, y con razón.

Regla básica: hay información que **nunca** va a una herramienta abierta. La Ley 1581 de 2012 la llama datos sensibles: salud, vida sexual, datos biométricos, origen racial o étnico, opinión política, convicciones religiosas, pertenencia a sindicatos. Más los datos de niñas, niños y adolescentes. Y a eso súmale lo nuestro: la estrategia del caso y todo lo que está cubierto por el secreto profesional.

Eso es **rojo**.

En **amarillo** está lo que puedes trabajar solo si lo seudonimizas primero y en un entorno donde tengas un contrato de tratamiento de datos con el proveedor.

Y en **verde**, lo que puedes usar tranquilo: normas, sentencias públicas, tus modelos y plantillas sin datos personales.

### Diapositiva 17 · Seudonimizar vs. anonimizar · 14:23

`[PANTALLA] Video: los datos del expediente se convierten en etiquetas y aparece la tabla de llaves (14 s, arranca solo)`

Y aquí hay una diferencia que casi nadie tiene clara.

*(Mientras se marcan los datos en rojo.)* Este es el expediente original: un nombre, una cédula, un diagnóstico, una clínica, una aseguradora.

*(Cuando cambian a verde.)* **Seudonimizar** es reemplazar cada dato por una etiqueta: DEMANDANTE_01, DATO_SALUD_01, ASEGURADORA_01. Es reversible: *(señalas la tabla azul)* tú guardas la tabla de llaves que dice quién es quién. La IA trabaja el caso sin saber de quién se trata, y tú vuelves a armar el documento al final.

**Anonimizar**, en cambio, es quitar todo lo que identifique, sin vuelta atrás: «una persona natural demanda a una aseguradora».

Y la tercera palabra, que es la más importante: **minimizar**. Sube solo lo que la IA necesita para hacer la tarea. Nada más. Esto lo practicamos con casos reales en el módulo 7.

### Diapositiva 18 · ISO/IEC 42001 · 15:32

`[PANTALLA] Inventario, roles, riesgos, controles, política, trazabilidad`

Miedo número tres: ¿y quién responde?

Porque cuando en un despacho o en un área jurídica cada quien usa la IA como le parece, el día que algo sale mal nadie sabe quién aprobó qué, con qué herramienta ni con qué datos.

Para eso existe la norma **ISO/IEC 42001**, el estándar internacional de sistemas de gestión de inteligencia artificial. En el curso la aterrizamos a la práctica jurídica: un **inventario** de los usos de IA en tu organización, **roles** claros, una **matriz de riesgos**, **controles**, una **política interna de uso** y **trazabilidad** de qué hizo la máquina y quién lo validó.

*(Señalas el recuadro azul.)* Sin gobernanza, la IA es un riesgo. Con gobernanza, es una ventaja que puedes auditar y mostrarle a tu cliente.

Y fíjate en algo: los tres miedos tienen respuesta. Ninguno se resuelve con un prompt. Todos se resuelven con **método**.

---

## 16:46 – 23:39 · EL SALTO: DEL PROMPT AL SISTEMA

### Diapositiva 19 · Sección 2 · 16:46

`[PANTALLA] 02 · Del prompt suelto a la arquitectura de trabajo`

Y eso nos lleva al centro de este programa.

Este curso no te enseña a pedirle cosas a la IA. **Te enseña a diseñar cómo trabaja.**

### Diapositiva 20 · La escalera · 17:07

`[PANTALLA] Video de la escalera: el punto «TÚ» sube del prompt suelto al agente gobernado (13 s, arranca solo)`

Imagínatelo como una escalera.

*(Primer peldaño.)* Abajo está el **prompt suelto**: abres el chat, le pides algo, copias, pegas. Aquí está casi todo el mundo.

*(Vas subiendo.)* Luego viene la **instrucción estructurada**: le dices a la IA quién es, qué hace, con qué formato y con qué límites. Después, el **proyecto con fuentes**: la IA trabaja sobre tu expediente, tus normas y tus modelos, no sobre internet. Luego, el **flujo con controles**: una secuencia de pasos repetible, con revisiones en el camino.

*(Último peldaño.)* Y arriba, el **agente o la mini-aplicación gobernada**: una herramienta que hace una tarea completa de tu práctica, con sus reglas, sus fuentes y sus límites documentados.

Este curso empieza en el primer peldaño y termina en el último.

### Diapositiva 21 · Anatomía de un sistema · 18:11

`[PANTALLA] Fuentes · Instrucciones · Controles · Entregables`

¿Qué tiene un sistema de trabajo jurídico con IA? Cuatro piezas. Lo vemos en el módulo 1.

**Fuentes:** tu expediente, tus normas, tus modelos. **Instrucciones:** cómo trabaja tu despacho, por escrito. **Controles:** trazabilidad, semáforo, revisión humana. Y **entregables:** el documento, pero siempre acompañado de su matriz de soporte.

Y la IA no hace un solo papel. Hace cuatro: de **asistente**, que produce; de **revisor**, que encuentra errores; de **adversario**, que te ataca el argumento; y de **organizador**, que pone en orden el conocimiento.

En el módulo 2 aprendes algo que cambia todo: **estructurar el documento antes de involucrar a la IA**. La arquitectura de una demanda, un contrato, un concepto, una matriz probatoria o una cronología la decides tú. La IA la llena.

### Diapositiva 22 · Frase Claude · 19:15

`[PANTALLA] «No vas a chatear con la IA. Vas a montar tu despacho dentro de ella.»`

*(Directo a cámara.)*

No vas a chatear con la IA. Vas a montar tu despacho dentro de ella.

### Diapositiva 23 · Claude como entorno · 19:33

`[PANTALLA] Proyectos · Skills · Plugins y conectores · Scripts · Agentes · Segundo cerebro`

En el módulo 3 trabajamos a fondo con **Claude**, y no me refiero a la ventanita del chat. Me refiero a todo el ecosistema.

*(Vas señalando cada tarjeta.)*

- **Proyectos:** instrucciones que se quedan guardadas, artefactos y expedientes completos, para que no tengas que explicarle cada vez cómo trabajas.
- **Skills:** empaquetas tu forma de trabajar (cómo revisas un contrato, cómo armas una tutela) y la IA la aplica igual cada vez.
- **Plugins y conectores:** Claude for Legal, tu Drive, tu correo y las herramientas que ya usas, conectadas al mismo entorno.
- **Scripts:** con Claude Code, la IA escribe y corre por ti los pasos mecánicos: convertir documentos, comparar versiones, verificar citas.
- **Agentes:** con Cowork y Code ya no solo responde; ejecuta tareas completas, varias a la vez.
- Y el **segundo cerebro**: la memoria de tu despacho. Tus modelos, tus criterios, tus casos anteriores, organizados para que la IA trabaje con lo que tú ya sabes.

Y no sales con teoría: sales con una matriz documental y un redline asistido de un documento real.

Y ojo: todo esto que te acabo de nombrar son herramientas. Ya te voy a contar por qué lo importante es otra cosa.

### Diapositiva 24 · Litigio · 21:07

`[PANTALLA] «Antes de radicar, pierde el caso contra la IA.»`

Para los litigantes, mi frase favorita del programa: **antes de radicar, pierde el caso contra la IA**.

En el módulo 5 la pones de contraparte y de juez. Construyes la teoría del caso, revisas la suficiencia de la prueba, encuentras las contradicciones antes de que las encuentre el otro abogado, y preparas audiencias, interrogatorios y contrainterrogatorios. Mejor perder diez veces en el ensayo que una vez en el estrado.

### Diapositiva 25 · Automatización · 21:47

`[PANTALLA] Video del flujo: las PQRS pasan por cinco estaciones y se vacía la bandeja (14 s, arranca solo)`

Y aquí viene lo que más tiempo te devuelve: **automatizar**.

Mi regla es esta: lo que haces dos veces, se diseña; **lo que haces diez veces, se automatiza**.

*(Mientras los documentos avanzan.)* Llega una PQRS o una tutela. Se clasifica. Se genera el borrador con tu plantilla. Pasa por un **control humano**, que nunca se quita. Y sale la respuesta, con su informe de estado.

En el módulo 6 lo construyes sin programar o con muy poco código: plantillas dinámicas, formularios, seguimiento normativo y controles de calidad dentro del flujo.

### Diapositiva 26 · Herramientas · 22:37

`[PANTALLA] «Te vamos a mostrar todo el ecosistema. Las herramientas cambian cada semana. Las habilidades se quedan contigo.»`

En el curso te vamos a mostrar todo el ecosistema: ChatGPT, NotebookLM, Claude, Claude for Legal, Lovable, Figma, Gamma y las que vayan saliendo.

Pero te voy a decir algo que vas a comprobar desde la primera sesión: **las herramientas pasan a un segundo plano.** Cambian cada semana. Sale una nueva, cambia un botón, sube de precio, desaparece.

Lo que no cambia son **las habilidades**: estructurar un documento antes de escribirlo, diseñar instrucciones, verificar fuentes, proteger los datos, armar un flujo con controles.

*(Directo a cámara.)* El que aprende un botón tiene que volver a aprender la semana siguiente. El que aprende la habilidad la aplica en la herramienta que salga. **Las herramientas cambian cada semana. Las habilidades se quedan contigo.**

---

## 23:39 – 28:15 · EL PROGRAMA

### Diapositiva 27 · Sección 3 · 23:39

`[PANTALLA] 03 · 48 horas para pasar de usuario a arquitecto`

Entonces, ¿cómo es el programa?

Son **48 horas**: 32 en vivo, en sesiones de tres horas, y 16 de trabajo guiado con plantillas y rúbricas. Unas seis semanas. Cien por ciento virtual y sincrónico. Y trabajamos sobre casos reales anonimizados.

### Diapositiva 28 · Los módulos · 24:07

`[PANTALLA] 7 módulos + proyecto final`

Siete módulos, y cada uno deja un entregable:

1. **Del prompt al sistema:** tu mapa de casos de uso y tu primera instrucción estructurada.
2. **Arquitectura documental:** una plantilla de arquitectura y un documento complejo hecho con IA.
3. **Claude y agentes:** matriz documental y redline.
4. **Investigación sin alucinaciones:** tu matriz de trazabilidad y tu checklist antes de radicar.
5. **Litigio con IA:** memo de estrategia y matriz de contradicciones.
6. **Automatización:** el diagrama de un flujo tuyo, con controles.
7. **Seguridad y gobernanza ISO 42001:** borrador de política interna, inventario y matriz de riesgos.

Y un proyecto final que es lo que más me emociona.

### Diapositiva 29 · Proyecto final · 25:04

`[PANTALLA] Suite de mini-aplicaciones + Legal AI Playbook`

**No sales con apuntes. Sales con tu propia suite de mini-aplicaciones jurídicas.**

Sin escribir código, vas a construir: un **revisor y estructurador documental**, un **generador de tu propio flujo** (derechos de petición, PQRS o lo que más repitas) y un **control antialucinaciones interactivo**. Las pruebas sobre un caso real anonimizado.

Y todo queda documentado en tu **Legal AI Playbook**: las instrucciones, las fuentes, los controles y los límites de tu suite. Lo aplicas desde el día siguiente.

### Diapositiva 30 · Antes y después · 25:48

`[PANTALLA] Hoy / Después del curso`

*(Lees la columna de la izquierda con cara de «esto me pasa».)*

Hoy: copias y pegas prompts. Revisas citas con miedo. Subes todo y rezas. Haces cada tutela desde cero. Usas herramientas.

*(Cambias el tono.)* Después del curso: diseñas instrucciones de trabajo. Cada cita tiene fuente y semáforo. Seudonimizas y gobiernas. Tienes un flujo con controles. **Construyes sistemas.**

### Diapositiva 31 · La visión · 26:23

`[PANTALLA] «Esos perfiles híbridos no van a llegar solos. Los vamos a formar. Aquí.»`

¿Te acuerdas del dato de Deloitte? Esos perfiles híbridos, mitad abogado y mitad ingeniero, que van a tener los equipos jurídicos.

Esos perfiles no van a llegar solos. **Los vamos a formar. Aquí.**

Lo que queremos con este programa es crear una masa crítica de **abogados aumentados**: los ingenieros legales que van a liderar la profesión en Colombia y en la región. No abogados que le tienen miedo a la IA, ni abogados que la usan a ciegas, sino abogados que la dirigen.

### Diapositiva 32 · Equipo docente · 27:10

`[PANTALLA] Equipo docente`

Y no lo vas a hacer solo. Te acompaña un equipo que trabaja en esto todos los días:

**Juan Camilo Medina**, abogado en derecho tecnológico, reconocido por Legal 500, abre con el módulo 1. **Camilo De la Cruz**, científico de datos con formación en derecho, en arquitectura documental. **Paul Torres Rincón**, consultor en normas ISO de riesgos de IA, en litigio con IA y gobernanza. **Miguel Ángel Martínez**, docente de IA y derecho en el Externado, en automatización. **Isabel García Burbano**, cofundadora de Ecolegalia, en gobernanza ISO 42001. **Daniela Mesa**, abogada y magíster en Derecho de la Empresa, que hoy trabaja en la Oficina Asesora Jurídica de la Superintendencia de Industria y Comercio, en la metodología antialucinaciones. Y yo, en Claude y agentes, y en la dirección académica.

---

## 28:15 – 30:00 · CIERRE

### Diapositiva 33 · Llamado · 28:15

`[PANTALLA] «¿Vas a seguir pidiéndole cosas a la IA o vas a diseñar cómo trabaja?»`

Al principio te pregunté cuánto de tu día podría hacerlo un agente. Ya tienes más elementos para responder.

Ahora te dejo la pregunta que de verdad importa:

*(Pausa. Directo a cámara.)*

**¿Vas a seguir pidiéndole cosas a la IA, o vas a diseñar cómo trabaja?**

Si es lo segundo, te espero en la cohorte 01. Los cupos son limitados porque trabajamos en vivo y sobre tus casos. La preventa está en **$2.900.000**; si vienes con tu equipo, de tres personas en adelante, cada cupo queda en $2.600.000, y los egresados EAN tienen un 15 %. Te inscribes aquí mismo, en esta página. Y sales con certificado de la Universidad EAN.

### Diapositiva 34 · Cierre institucional · 29:14

`[PANTALLA] Cierre EAN`

Del prompt al sistema.

Nos vemos en la cohorte 01.

*(Sonríes. Fin.)*

---

## Antes de grabar: lista de verificación de datos

| Dato en la charla | Estado | Qué revisar |
|---|---|---|
| Deloitte: 30 % agentes / 20 % híbridos / horas 72 % → 44 % / 76 % → 2 % / 84 % | Verificado en la cobertura de prensa y el comunicado de Deloitte | Es una proyección para **equipos jurídicos in-house**, no para despachos. El 20 % de híbridos sale de Artificial Lawyer; confírmalo en el informe completo (*The AI Imperative: Reshaping of the Legal Industry*, 2026). |
| Base de Damien Charlotin: 2.262 decisiones (nov. 2026); 719 en enero | Reportado por terceros | Abre damiencharlotin.com/hallucinations el día que grabes y actualiza la cifra. |
| CSJ, Auto AC739-2026 | Verificado en prensa (Infobae, El Universal) | Lee el auto en la Relatoría. La multa se reporta como 15 SMMLV o unos $26 millones; por eso no la puse en pantalla. La frase de la Corte va como paráfrasis. |
| Nippon Life v. OpenAI | Verificado en prensa | Demanda del 4 de marzo de 2026, N.D. Illinois; moción de desestimación pendiente. El número de escritos varía (44 a 66); por eso dice «decenas». |
| Datos sensibles | Ley 1581 de 2012, arts. 5 y 7 | — |
| Secreto profesional | Ley 1123 de 2007 | — |
