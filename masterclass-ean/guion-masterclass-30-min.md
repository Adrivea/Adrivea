# Abogado Aumentado con IA · Guion de la masterclass (30 minutos)

**Para:** la landing del programa *Abogado Aumentado con IA. Del prompt al sistema* (Universidad EAN)
**Formato:** masterclass grabada, 30 minutos, 35 diapositivas en la plantilla institucional EAN, con 4 videos cortos que arrancan solos
**Objetivo:** que quien la vea salga convencido de dos cosas: que **usar IA sin método es un riesgo** y que **este programa le da el método**. Vendemos con valor, no con folleto.

**Cómo leer este guion**
- `[PANTALLA]` es la diapositiva que se ve.
- *(cursiva entre paréntesis)* es lo que haces frente a cámara.
- Lo demás es lo que dices. Les hablas a «ustedes», como en una conversación. No hay que decirlo palabra por palabra: úsalo como guía y suéltate donde te salga más natural.
- Cada bloque trae el minuto aproximado. Si vas largo, lo más fácil de acortar es la diapositiva 8 (adopción) y la 33 (equipo docente).

**Arco de la charla**
1. **Apertura (0:00–7:21):** bienvenida con el nombre del programa, «este no es el curso típico de prompts», tu historia (yo también pensaba que la IA solo hacía mamarrachos), dos preguntas que incomodan y los datos que muestran que esto ya llegó.
2. **Los tres miedos (7:21–17:13):** que invente, que filtre, que nadie responda. Cada miedo trae su antídoto, y cada antídoto es un módulo del curso.
3. **El salto (17:13–23:52):** de los prompts a las arquitecturas de trabajo: Claude con skills, plugins, scripts, agentes y segundo cerebro; litigio y automatización.
4. **El programa (23:52–28:19):** módulos, proyecto final, antes y después, equipo.
5. **Cierre (28:19–30:00):** una pregunta y la invitación.

---

## 0:00 – 7:21 · APERTURA

### Diapositiva 1 · Portada · 0:00

`[PANTALLA] Portada EAN: «Abogado Aumentado con IA · Del prompt al sistema», con tu nombre, IA Legal Studio y la comunidad de Claude Code Colombia`

*(Miras a cámara, tranquila.)*

Hola a todos, bienvenidos. Qué bueno tenerlos acá. Esta es la masterclass de *Abogado Aumentado con IA*, el nuevo programa de la Universidad EAN, y yo soy Adriana Vergara, la directora académica.

Les cuento rápido quién soy: fundé IA Legal Studio, y lo que hacemos allá es acompañar a organizaciones legales a entender la inteligencia artificial, a formar a sus equipos y a meterla de verdad en el trabajo del día a día. Y además ando muy metida en la comunidad de Claude Code aquí en Colombia, que ha crecido muchísimo.

### Diapositiva 2 · Este no es el curso típico · 0:44

`[PANTALLA] «Este no es el curso típico de prompts. Aquí vas a construir sistemas de trabajo jurídico.»`

Les quiero decir algo desde el arranque, porque sé que muchos ya han visto un montón de charlas sobre «los mejores prompts para abogados». Este no es el curso típico de prompts.

En esta media hora les voy a mostrar por qué los prompts se quedan cortos, qué está pasando ya en los tribunales, aquí y afuera, y qué es lo que de verdad necesita aprender un abogado hoy: cómo armar su forma de trabajar con la IA, cómo cuidar los datos de sus clientes, qué se puede automatizar y cómo se gobierna todo eso.

Pero antes, déjenme contarles cómo llegué yo a esto.

### Diapositiva 3 · Mi historia · 1:32

`[PANTALLA] «Yo también pensaba que la IA solo servía para hacer mamarrachos.»`

*(Más bajito, más personal.)*

Yo no llegué a la IA convencida. Para nada.

Al principio la usaba y pensaba que eso no servía para nada serio. Le pedía una demanda y me devolvía un mamarracho. Me citaba artículos de un código de otro país, sentencias que nadie había dictado, y un texto que sonaba bonito pero que no tenía ni hechos, ni pruebas, ni estructura.

Y sí, me dio miedo. Me daba miedo firmar algo así, y me daba miedo subirle la información de un cliente. Llegué a pensar que eso era un juguete y que no era para nosotros los abogados.

### Diapositiva 4 · Mismo modelo, otra arquitectura · 2:19

`[PANTALLA] Video «mamarracho» contra arquitectura de trabajo (17 s, arranca solo)`

*(Dejas correr el video unos segundos antes de hablar.)*

Hasta que un día me cayó la ficha: el problema no era la herramienta, era la forma en que yo estaba trabajando con ella.

*(Señalas el lado izquierdo.)* Esto de acá es lo que sale cuando uno le hace una pregunta suelta. *(Señalas el derecho.)* Y esto es lo que sale cuando uno le arma una estructura de trabajo: le da las fuentes, le dice cómo trabaja, le pone controles y le pide el resultado en un formato concreto.

Es el mismo modelo. Lo que cambió fue la arquitectura.

Cuando empecé a trabajar así, la calidad de lo que producía cambió por completo. Y las alucinaciones dejaron de colarse en mis documentos, porque ninguna cita se queda si antes no pasa por una fuente. Eso es lo que les quiero enseñar, y por eso les decía que este no es un curso de prompts.

### Diapositiva 5 · Pregunta 1 · 3:36

`[PANTALLA] «¿Cuánto de lo que hiciste hoy lo podría hacer un agente mientras dormías?»`

Bueno, ahora sí, les tengo dos preguntas.

*(Pausa de tres segundos.)*

Piensen en lo que hicieron hoy. El resumen de un expediente, la revisión de un contrato, el cuadro de vencimientos, la respuesta a ese derecho de petición que se parece muchísimo al de la semana pasada.

¿Cuánto de todo eso lo podría haber hecho un agente mientras ustedes dormían? ¿Un veinte por ciento? ¿Un cuarenta?

*(Señalas la pantalla.)* Déjenmelo en los comentarios, un porcentaje. Al final de la charla volvemos sobre esto, y creo que la respuesta los va a sorprender.

### Diapositiva 6 · Pregunta 2 · 4:19

`[PANTALLA] «¿Le subirías el expediente de tu cliente a ChatGPT?»`

La segunda pregunta es un poquito más incómoda. ¿Ustedes le subirían el expediente de un cliente a ChatGPT?

*(Sonríes.)* Casi todo el mundo dice que no. Pero la verdad es que muchos ya lo han hecho. Una demanda para que les mejore la redacción, un contrato para que les encuentre los riesgos, la historia clínica de un cliente para un caso de responsabilidad médica.

Y no lo digo para juzgar a nadie, que yo también lo hice al principio. Lo digo porque eso es justo lo que a nadie nos enseñaron: no a usar la IA, sino a usarla sin poner en riesgo al cliente ni nuestra tarjeta profesional.

### Diapositiva 7 · Deloitte · 5:08

`[PANTALLA] Torta 30 / 20 / 50 · Deloitte Legal 2026`

Ahora miremos unos datos.

Deloitte Legal sacó este año un informe que se llama *The AI Imperative*, para el que encuestaron a 121 líderes de áreas jurídicas en el mundo. Y lo que proyectan es esto:

*(Señalas cada porción.)*

En unos tres años, cerca del 30 % de la capacidad de un equipo jurídico la van a poner agentes de inteligencia artificial. Más o menos un 20 % van a ser perfiles híbridos, gente que es mitad abogado y mitad ingeniero. Y el resto, abogados.

Y fíjense en este otro número, que me parece muy diciente: hoy el 72 % del trabajo jurídico se cobra por hora, y esperan que en dos o tres años eso baje al 44 %. Tiene lógica: si la máquina hace en minutos lo que antes tomaba horas, cobrar por hora deja de tener sentido. Lo que uno termina cobrando es el criterio.

### Diapositiva 8 · Adopción · 6:11

`[PANTALLA] 76 % · 2 % · 84 %`

En ese mismo estudio aparece algo muy interesante. En 2024, el 76 % de los departamentos jurídicos no usaba IA. En 2026, solo el 2 % sigue sin usarla.

O sea, ya prácticamente todos la usan. Pero miren el tercer número: el 84 % no ha cambiado los roles de su gente alrededor de la IA.

Todo el mundo tiene la herramienta, pero casi nadie cambió la forma de trabajar. Y ahí es donde está la oportunidad para ustedes.

### Diapositiva 9 · La frase · 6:48

`[PANTALLA] «La IA no te va a reemplazar. Un abogado que la domine con método, sí.»`

*(Despacio.)*

Seguramente han oído eso de que la IA no nos va a reemplazar. Yo creo que es cierto. Lo que sí puede pasar es que un abogado que la sepa usar con método reemplace a uno que no.

Y lo digo con esa palabra a propósito, con método, porque usarla, ya la usa todo el mundo. De eso se trata esta charla.

---

## 7:21 – 17:13 · LOS TRES MIEDOS

### Diapositiva 10 · Los tres miedos · 7:21

`[PANTALLA] 01 · Los tres miedos del abogado frente a la IA`

Cuando hablo con abogados, con socios de firmas, con jefes jurídicos o con funcionarios públicos, casi siempre salen los mismos miedos, aunque pocos los digan en voz alta.

El primero es que la IA invente, que le cite a uno una sentencia que no existe. El segundo es que se filtre la información del cliente. Y el tercero es que algo salga mal y nadie sepa quién respondía.

Son miedos muy válidos, y todos tienen solución. Vamos con cada uno.

### Diapositiva 11 · Charlotin · 7:59

`[PANTALLA] Curva de 719 a 2.262 decisiones`

Empecemos por el primero, que invente.

Hay un investigador francés, Damien Charlotin, que lleva una base de datos pública con las decisiones judiciales en las que un tribunal tuvo que lidiar con contenido inventado por IA: citas falsas, sentencias que no existen, doctrina que alguien se sacó de la manga.

En enero de este año iban unas 700 decisiones. A noviembre ya pasan de 2.262. En menos de un año se triplicó.

*(Pausa.)* Y no estamos hablando de estudiantes. Son abogados, algunos de firmas grandes, que confiaron en lo que les dijo la máquina.

### Diapositiva 12 · Colombia · 8:44

`[PANTALLA] Corte Suprema · Auto AC739-2026`

Alguno estará pensando que eso pasa en Estados Unidos. Pues no, ya nos tocó a nosotros.

En febrero de este año, la Sala de Casación Civil de la Corte Suprema multó a un abogado que citó en un recurso providencias que no existían. La Relatoría las buscó una por una y ninguna era real. El abogado reconoció que había usado IA sin verificar, y la Corte además compulsó copias a la Comisión de Disciplina Judicial.

Lo que dijo la Corte, en palabras sencillas, es que verificar las fuentes es una obligación que no se le puede delegar a nadie, ni a un practicante ni a una máquina. Y habló de algo que me pareció muy acertado, el riesgo del «pseudo-derecho»: textos que suenan a jurisprudencia pero no lo son.

Eso sí, la Corte no prohibió la IA. Lo que pide es verificación. Y ya antes la Corte Constitucional, en la T-323 de 2024, había puesto el tema sobre la mesa.

### Diapositiva 13 · Reino Unido · 9:53

`[PANTALLA] Reino Unido · Ayinde y Al-Haroun [2025] EWHC 1383 (Admin)`

Y si alguien cree que esto se queda en una multa o en un tema de la tarjeta profesional, miren lo que pasó en el Reino Unido.

En junio de 2025, la High Court de Inglaterra y Gales revisó dos casos al tiempo. En uno, el escrito citaba cinco precedentes que no existían. En el otro, 18 de 45 citas eran inventadas. Los dos abogados terminaron remitidos a sus colegios profesionales.

Pero lo que más me impactó fue la advertencia que hizo la Corte. *(Señalas el recuadro azul.)* Dijo que presentar material falso ante un juez, sabiendo que es falso, puede ser desacato. Y que en los casos más graves, cuando hay intención, puede llegar a ser un delito: pervertir el curso de la justicia, que allá tiene una pena máxima de cadena perpetua.

En esos dos casos no hubo proceso penal, hay que decirlo. Pero el mensaje queda: esto ya no es solo un tema disciplinario, también puede terminar en lo penal.

### Diapositiva 14 · El antídoto · 11:02

`[PANTALLA] Cinco controles: fuente cerrada, matriz, semáforo, adversarial, checklist`

Entonces, ¿cómo se evitan las alucinaciones? Les voy a hablar con franqueza, porque en este tema hay mucha gente vendiendo humo: no existe un modelo que no alucine nunca.

Lo que sí existe es una forma de trabajar para que ninguna alucinación llegue al documento que ustedes firman. Eso lo trabajamos en el módulo 4 con Daniela Mesa, y son básicamente cinco controles:

*(Vas señalando.)*
- La **fuente cerrada**, que es que la IA solo responda con los documentos que ustedes le dan y no con lo que «se acuerda».
- La **matriz de trazabilidad**, donde cada afirmación del documento queda amarrada a su fuente y a su página.
- El **semáforo de certeza**: verde si está verificado, amarillo si toca revisarlo, rojo si no se usa.
- La **verificación adversarial**, que es poner a otra IA a tratar de tumbar el documento.
- Y un **checklist antes de radicar**, donde no pasa ninguna cita que ustedes no hayan abierto con sus propios ojos.

El modelo puede seguir alucinando, pero eso ya no llega al documento final.

### Diapositiva 15 · «Mi abogado me está manipulando» · 12:15

`[PANTALLA] «Mi abogado me está manipulando»`

Ahora les quiero contar un caso que a mí me dejó pensando muchísimo.

*(Lees la frase despacio.)* «Mi abogado me está manipulando.» A esa conclusión llegó una clienta en Estados Unidos después de conversar con ChatGPT.

### Diapositiva 16 · Nippon Life · 12:37

`[PANTALLA] Línea de tiempo: Ene 2024 → Mar 2026`

La historia es más o menos así. Una señora tenía una reclamación por incapacidad contra la aseguradora Nippon Life. Con su abogado llegaron a un acuerdo, y en enero de 2024 el caso se cerró.

Tiempo después, ella le mostró toda la correspondencia a ChatGPT, y ChatGPT le dio la razón: que la habían engañado. Ella despidió a su abogado y, según la aseguradora, empezó a radicar decenas de escritos hechos con IA para reabrir un caso que ya estaba terminado.

En marzo de 2026, Nippon Life demandó a OpenAI ante un tribunal federal de Illinois por ejercicio ilegal de la abogacía, y le está pidiendo 10 millones de dólares en daños punitivos. El caso sigue andando; OpenAI pidió que lo desestimen.

¿Y esto qué nos dice a nosotros? *(Señalas la frase de abajo.)* Que los clientes ya le están consultando a la IA. Llegan a la oficina con la respuesta de ChatGPT en el celular. Entonces la discusión ya no es si la IA va a entrar en nuestra práctica, porque ya entró. La pregunta es si nosotros la manejamos mejor que nuestros clientes.

### Diapositiva 17 · Semáforo de datos · 13:55

`[PANTALLA] Semáforo rojo, amarillo y verde de datos`

Vamos con el segundo miedo, que se filtre la información. Este es el que más me preguntan, y con toda la razón.

Hay información que nunca debería ir a una herramienta abierta. La Ley 1581 de 2012 la llama datos sensibles: lo relacionado con salud, vida sexual, datos biométricos, origen racial o étnico, opinión política, religión o pertenencia a sindicatos. Súmenle los datos de niñas, niños y adolescentes. Y súmenle lo nuestro, la estrategia del caso y todo lo que está cubierto por el secreto profesional. Todo eso es rojo.

En amarillo está lo que se puede trabajar, pero solo si primero se seudonimiza y en un entorno donde haya un contrato de tratamiento de datos con el proveedor.

Y en verde, lo que pueden usar tranquilos: normas, sentencias públicas, sus modelos y plantillas sin datos personales.

### Diapositiva 18 · Seudonimizar vs. anonimizar · 14:55

`[PANTALLA] Video: los datos del expediente se convierten en etiquetas y aparece la tabla de llaves (14 s, arranca solo)`

Y aquí hay una diferencia que muy poca gente tiene clara.

*(Mientras se marcan los datos en rojo.)* Miren, este es el expediente original: un nombre, una cédula, un diagnóstico, una clínica, una aseguradora.

*(Cuando cambian a verde.)* Seudonimizar es cambiar cada uno de esos datos por una etiqueta, como DEMANDANTE_01 o DATO_SALUD_01. Y es reversible, porque *(señalas la tabla azul)* ustedes se quedan con la tabla que dice quién es quién. La IA trabaja el caso sin saber de quién se trata, y al final ustedes vuelven a armar el documento con los datos reales.

Anonimizar es otra cosa: es quitar todo lo que identifique a la persona, sin posibilidad de volver atrás. Algo como «una persona natural demanda a una aseguradora».

Y hay una tercera palabra que para mí es la más importante, minimizar: subir solo lo que la IA necesita para hacer esa tarea y nada más. Todo esto lo practicamos con casos reales en el módulo 7.

### Diapositiva 19 · ISO/IEC 42001 · 16:03

`[PANTALLA] Inventario, roles, riesgos, controles, política, trazabilidad`

Y el tercer miedo: ¿quién responde si algo sale mal?

Cuando en un despacho o en un área jurídica cada quien usa la IA como le parece, el día que hay un problema nadie sabe quién aprobó qué, con qué herramienta ni con qué datos.

Para eso existe la ISO/IEC 42001, que es el estándar internacional para gestionar la inteligencia artificial en una organización. En el curso la aterrizamos al mundo jurídico: hacemos un inventario de cómo se usa la IA en su organización, definimos quién aprueba y quién revisa, armamos una matriz de riesgos con sus controles, escribimos una política interna de uso y dejamos la trazabilidad de qué hizo la máquina y quién lo validó.

*(Señalas el recuadro azul.)* Bien gobernada, la IA deja de ser un riesgo y se vuelve algo que ustedes pueden mostrarle a un cliente con tranquilidad.

Y fíjense que ninguno de los tres miedos se resolvió con un prompt. Todos se resolvieron con método.

---

## 17:13 – 23:52 · EL SALTO: DEL PROMPT AL SISTEMA

### Diapositiva 20 · Sección 2 · 17:13

`[PANTALLA] 02 · Del prompt suelto a la arquitectura de trabajo`

Y eso nos lleva a lo que es el corazón del programa.

Aquí no les vamos a enseñar a pedirle cosas a la IA. Les vamos a enseñar a diseñar cómo trabaja.

### Diapositiva 21 · La escalera · 17:34

`[PANTALLA] Video de la escalera: el punto «TÚ» sube del prompt suelto al agente gobernado (13 s, arranca solo)`

A mí me gusta explicarlo como una escalera.

*(Primer peldaño.)* Abajo está el prompt suelto: uno abre el chat, le pide algo, copia y pega. Ahí está casi todo el mundo hoy.

*(Vas subiendo.)* El siguiente escalón es la instrucción estructurada, donde ya le dicen a la IA qué papel cumple, qué tiene que hacer, en qué formato y cuáles son sus límites. Después viene el proyecto con fuentes, en el que la IA trabaja sobre su expediente, sus normas y sus modelos, y no sobre lo que encuentre en internet. Más arriba está el flujo con controles, que es una secuencia de pasos que se repite y que tiene revisiones en el camino.

*(Último peldaño.)* Y arriba de todo está el agente o la mini-aplicación gobernada: una herramienta que hace una tarea completa de su práctica, con sus reglas, sus fuentes y sus límites bien documentados.

El curso arranca en el primer escalón y los lleva hasta el último.

### Diapositiva 22 · Anatomía de un sistema · 18:42

`[PANTALLA] Fuentes · Instrucciones · Controles · Entregables`

¿Y qué tiene un sistema de trabajo jurídico con IA? Son cuatro piezas, y las vemos en el módulo 1.

Las fuentes, que son su expediente, sus normas y sus modelos. Las instrucciones, que es cómo trabaja su despacho, pero escrito. Los controles, como la trazabilidad, el semáforo y la revisión humana. Y los entregables, que nunca son solo el documento: siempre van con su matriz de soporte.

Además, la IA no cumple un solo papel. Puede ser asistente y producir, puede ser revisora y encontrar errores, puede hacer de contraparte y atacarles el argumento, y puede organizar el conocimiento.

Y en el módulo 2 trabajamos algo que a mí me cambió todo: estructurar el documento antes de meter a la IA. La arquitectura de una demanda, de un contrato, de un concepto, de una matriz probatoria o de una cronología la deciden ustedes, y la IA la llena.

### Diapositiva 23 · Frase Claude · 19:47

`[PANTALLA] «No vas a chatear con la IA. Vas a montar tu despacho dentro de ella.»`

*(Directo a cámara.)*

La idea no es que se queden chateando con la IA. La idea es que monten su despacho adentro.

### Diapositiva 24 · Claude como entorno · 20:04

`[PANTALLA] Proyectos · Skills · Plugins y conectores · Scripts · Agentes · Segundo cerebro`

En el módulo 3 trabajamos a fondo con Claude, y no me refiero solo a la ventanita del chat, sino a todo lo que hay alrededor.

*(Vas señalando cada tarjeta.)*

- Los **proyectos**, donde las instrucciones se quedan guardadas junto con los artefactos y los expedientes, para no tener que explicarle cada vez cómo trabajan.
- Las **skills**, que son su forma de trabajar empaquetada: cómo revisan un contrato, cómo arman una tutela. La IA la aplica igual cada vez.
- Los **plugins y conectores**, como Claude for Legal, su Drive, su correo y las herramientas que ya usan, todo conectado en el mismo lugar.
- Los **scripts**: con Claude Code, la IA escribe y ejecuta los pasos mecánicos, como convertir documentos, comparar versiones o verificar citas.
- Los **agentes**, con Cowork y Code, que ya no solo responden sino que hacen tareas completas, varias al tiempo.
- Y el **segundo cerebro**, que es la memoria del despacho: sus modelos, sus criterios y sus casos anteriores, organizados para que la IA trabaje con lo que ustedes ya saben.

De ese módulo salen con una matriz documental y un redline asistido de un documento real.

Ahora, todo esto que les acabo de mostrar son herramientas, y en un momento les cuento por qué no es lo más importante.

### Diapositiva 25 · Litigio · 21:31

`[PANTALLA] «Antes de radicar, pierde el caso contra la IA.»`

Para los que litigan, esta es de mis partes favoritas: antes de radicar, piérdanle el caso a la IA.

En el módulo 5 la ponen a hacer de contraparte y de juez. Con ella construyen la teoría del caso, revisan si la prueba alcanza, encuentran las contradicciones antes de que las encuentre el otro abogado y preparan audiencias, interrogatorios y contrainterrogatorios. Es mucho mejor perder diez veces en el ensayo que una sola en la audiencia.

### Diapositiva 26 · Automatización · 22:08

`[PANTALLA] Video del flujo: las PQRS pasan por cinco estaciones y se vacía la bandeja (14 s, arranca solo)`

Y esto es lo que más tiempo les va a devolver: automatizar.

Yo lo pienso así: lo que uno hace dos veces vale la pena diseñarlo, y lo que hace diez veces vale la pena automatizarlo.

*(Mientras los documentos avanzan.)* Miren el ejemplo. Llega una PQRS o una tutela, se clasifica, se genera el borrador con la plantilla de ustedes, pasa por un control humano, que nunca se quita, y sale la respuesta con su informe de estado.

En el módulo 6 esto lo construyen sin programar, o con muy poquito código: plantillas dinámicas, formularios, seguimiento normativo y controles de calidad dentro del mismo flujo.

### Diapositiva 27 · Herramientas · 22:56

`[PANTALLA] «Te vamos a mostrar todo el ecosistema. Las herramientas cambian cada semana. Las habilidades se quedan contigo.»`

En el curso les vamos a mostrar todo el ecosistema: ChatGPT, NotebookLM, Claude, Claude for Legal, Lovable, Figma, Gamma y las que vayan saliendo.

Pero desde la primera sesión se van a dar cuenta de que las herramientas pasan a un segundo plano. Cambian cada semana: sale una nueva, le mueven un botón, sube de precio o simplemente desaparece.

Lo que no cambia son las habilidades. Saber estructurar un documento antes de escribirlo, diseñar buenas instrucciones, verificar las fuentes, proteger los datos, armar un flujo con controles.

*(Directo a cámara.)* El que solo aprende a usar un botón tiene que volver a aprender la semana siguiente. El que aprende la habilidad la puede aplicar en cualquier herramienta que salga. Por eso aquí nos enfocamos en eso.

---

## 23:52 – 28:19 · EL PROGRAMA

### Diapositiva 28 · Sección 3 · 23:52

`[PANTALLA] 03 · 48 horas para pasar de usuario a arquitecto`

Bueno, ¿y cómo es el programa?

Son 48 horas: 32 en vivo, en sesiones de tres horas, y 16 de trabajo guiado con plantillas y rúbricas. Más o menos seis semanas, cien por ciento virtual y en vivo, y siempre trabajando sobre casos reales anonimizados.

### Diapositiva 29 · Los módulos · 24:18

`[PANTALLA] 7 módulos + proyecto final`

Son siete módulos, y de cada uno salen con algo concreto:

1. En **del prompt al sistema**, su mapa de casos de uso y su primera instrucción de trabajo.
2. En **arquitectura documental**, una plantilla y un documento complejo hecho con IA.
3. En **Claude y agentes**, la matriz documental y el redline.
4. En **investigación sin alucinaciones**, su matriz de trazabilidad y su checklist antes de radicar.
5. En **litigio con IA**, un memo de estrategia y una matriz de contradicciones.
6. En **automatización**, el diagrama de un flujo suyo, con sus controles.
7. Y en **seguridad y gobernanza ISO 42001**, el borrador de una política interna, el inventario y la matriz de riesgos.

Y al final hay un proyecto que, la verdad, es lo que más me emociona.

### Diapositiva 30 · Proyecto final · 25:15

`[PANTALLA] Suite de mini-aplicaciones + Legal AI Playbook`

En el proyecto final ustedes construyen su propia suite de mini-aplicaciones jurídicas, sin escribir código.

Un revisor y estructurador de documentos, un generador para el flujo que más repitan, sea derechos de petición, PQRS o lo que sea, y un control antialucinaciones interactivo. Y todo lo prueban sobre un caso real anonimizado.

Todo eso queda documentado en su Legal AI Playbook, con las instrucciones, las fuentes, los controles y los límites de cada herramienta. Así que no se van con unos apuntes, se van con algo que pueden usar desde el día siguiente.

### Diapositiva 31 · Antes y después · 25:59

`[PANTALLA] Hoy / Después del curso`

*(Lees la columna de la izquierda con cara de «esto me pasa».)*

Hoy, muchos copiamos y pegamos prompts, revisamos las citas con susto, subimos todo y rezamos, y hacemos cada tutela desde cero.

*(Cambias el tono.)* Después del curso, ustedes van a diseñar sus instrucciones de trabajo, cada cita va a tener su fuente y su semáforo, van a seudonimizar y a gobernar el uso de la IA, y van a tener sus flujos con controles. Van a dejar de usar herramientas sueltas para construir sistemas.

### Diapositiva 32 · La visión · 26:40

`[PANTALLA] «Esos perfiles híbridos no van a llegar solos. Los vamos a formar. Aquí.»`

¿Se acuerdan del dato de Deloitte? Esos perfiles híbridos, mitad abogado y mitad ingeniero, que van a necesitar los equipos jurídicos.

Pues esos perfiles no van a aparecer solos. Alguien los tiene que formar, y eso es lo que queremos hacer aquí.

Lo que buscamos con este programa es que haya una masa crítica de abogados aumentados, de ingenieros legales, que lideren este cambio en Colombia y en la región. Ni abogados que le tengan miedo a la IA, ni abogados que la usen a ciegas: abogados que sepan dirigirla.

### Diapositiva 33 · Equipo docente · 27:23

`[PANTALLA] Equipo docente`

Y no lo van a hacer solos. Los acompaña un equipo que trabaja en esto todos los días.

Juan Camilo Medina, abogado en derecho tecnológico y reconocido por Legal 500, abre con el módulo 1. Camilo De la Cruz, científico de datos con formación en derecho, está con arquitectura documental. Paul Torres Rincón, consultor en normas ISO sobre riesgos de IA, con litigio y gobernanza. Miguel Ángel Martínez, docente de IA y derecho en el Externado, con automatización. Isabel García Burbano, cofundadora de Ecolegalia, con gobernanza ISO 42001. Daniela Mesa, abogada y magíster en Derecho de la Empresa, que hoy está en la Oficina Asesora Jurídica de la Superintendencia de Industria y Comercio, con la metodología antialucinaciones. Y yo, con Claude y agentes y con la dirección académica.

---

## 28:19 – 30:00 · CIERRE

### Diapositiva 34 · Llamado · 28:19

`[PANTALLA] «¿Vas a seguir pidiéndole cosas a la IA o vas a diseñar cómo trabaja?»`

Al principio les pregunté cuánto de su día podría hacerlo un agente. Ahora ya tienen más elementos para responder.

Y les quiero dejar otra pregunta, que para mí es la que de verdad importa.

*(Pausa. Directo a cámara.)*

¿Van a seguir pidiéndole cosas a la IA, o van a diseñar cómo trabaja?

Si es lo segundo, los espero en la cohorte 01. Los cupos son limitados, porque trabajamos en vivo y sobre sus propios casos. La preventa está en $2.900.000; si se inscriben tres o más personas de un mismo equipo, cada cupo queda en $2.600.000, y los egresados de la EAN tienen un 15 % de descuento. La inscripción la hacen aquí mismo, en esta página, y al terminar reciben el certificado de la Universidad EAN.

### Diapositiva 35 · Cierre institucional · 29:16

`[PANTALLA] Cierre EAN`

Muchas gracias por acompañarme. Nos vemos en la cohorte 01.

*(Sonríes. Fin.)*

---

## Antes de grabar: lista de verificación de datos

| Dato en la charla | Estado | Qué revisar |
|---|---|---|
| Deloitte: 30 % agentes / 20 % híbridos / horas 72 % → 44 % / 76 % → 2 % / 84 % | Verificado en la cobertura de prensa y el comunicado de Deloitte | Es una proyección para **equipos jurídicos in-house**, no para despachos. El 20 % de híbridos sale de Artificial Lawyer; confírmalo en el informe completo (*The AI Imperative: Reshaping of the Legal Industry*, 2026). |
| Base de Damien Charlotin: 2.262 decisiones (nov. 2026); 719 en enero | Reportado por terceros | Abre damiencharlotin.com/hallucinations el día que grabes y actualiza la cifra. |
| CSJ, Auto AC739-2026 | Verificado en prensa (Infobae, El Universal) | Lee el auto en la Relatoría. La multa se reporta como 15 SMMLV o unos $26 millones; por eso no la puse en pantalla. La frase de la Corte va como paráfrasis. |
| Reino Unido: Ayinde y Al-Haroun, [2025] EWHC 1383 (Admin) | Verificado en comentarios y en el texto de la sentencia citado por terceros | La advertencia sobre desacato y el delito de pervertir el curso de la justicia está en el párr. 25. El tribunal no abrió proceso penal en esos casos: preséntalo como advertencia, no como condena. |
| Nippon Life v. OpenAI | Verificado en prensa | Demanda del 4 de marzo de 2026, N.D. Illinois; moción de desestimación pendiente. El número de escritos varía (44 a 66); por eso dice «decenas». |
| Datos sensibles | Ley 1581 de 2012, arts. 5 y 7 | — |
| Secreto profesional | Ley 1123 de 2007 | — |
