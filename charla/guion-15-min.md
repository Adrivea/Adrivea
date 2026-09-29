# La Casa Jurídica · Guion de 15 minutos

**Evento:** primer encuentro de la vertical Legal Tech de Claude en Bogotá
**Formato:** charla tipo TED, 15 minutos, corbata prohibida
**Cómo leer este guion:**
- `[PANTALLA]` es lo que se proyecta.
- *(cursiva entre paréntesis)* es lo que haces en escena.
- Lo demás es lo que dices.

---

## 0:00 – 1:30 · APERTURA: la pregunta

*(Entras sin saludar. Te paras en el centro y miras al público tres segundos.)*

Antes de empezar, quiero hacer una encuesta. Pero es seria, ¿eh? Esto es un evento jurídico.

Levanten la mano quienes tienen hoy en su computador un archivo que se llama **"final"**.

*(Esperas. Se levantan casi todas.)*

Muy bien. Ahora bajen la mano quienes **no** tienen también uno que se llama **"final final"**.

*(Nadie la baja. Risas.)*

Y ahora la difícil. Levanten la mano quienes tienen uno que se llama **"final final AHORA SÍ"**.

*(Tú también levantas la mano.)*

`[PANTALLA] final_final_AHORA_SÍ_v7 (2).docx`

Yo también. Tranquilos, esto es un espacio seguro. Aquí además está prohibida la corbata. Por fin una norma que todos cumplimos sin pedir prórroga.

Esta noche les voy a hacer una sola pregunta, y quiero que la tengan en la cabeza los próximos quince minutos:

> **Si mañana usted se va de vacaciones un mes… ¿su despacho sabe trabajar como usted?**

*(Pausa.)*

Porque la mayoría de nosotros tenemos una respuesta muy honesta: no. Mi método vive en mi cabeza. Y en una carpeta que se llama "Nueva carpeta (3)".

---

## 1:30 – 3:30 · CÓMO LLEGAMOS HASTA AQUÍ: los cuatro escritorios

Para entender dónde estamos, les propongo mirar cuatro escritorios de abogado. Solo cuatro.

`[PANTALLA] 1. EL ESCRITORIO DE LA MEMORIA`

**El primero** es el del abogado de los noventa. Máquina de escribir, papel carbón y un código civil subrayado en cuatro colores que nadie más entendía. El derecho vivía **en la cabeza** del abogado. Si el abogado se enfermaba, el caso se enfermaba con él.

`[PANTALLA] 2. EL ESCRITORIO DEL BUSCADOR`

**El segundo** es el de los dos mil. Llegan Word, el correo y las bases de datos de jurisprudencia. El derecho pasa a vivir **en el disco duro**. Ganamos velocidad y también el "adjunto el adjunto". Y el correo de vuelta: "Doctora, no llegó el adjunto".

`[PANTALLA] 3. EL ESCRITORIO DEL CHAT`

**El tercero** es el de hace nada, 2023. Le empezamos a **preguntar** cosas a un chat. Era como tener un practicante brillante: leía todo, escribía rapidísimo y nunca pedía vacaciones. Solo tenía un defecto: cuando no sabía algo, se lo inventaba con toda la seguridad del mundo. Tanto que en Estados Unidos un juez sancionó a unos abogados por citar seis sentencias que no existían. Las había inventado el chat.

*(Al público:)* Y no se rían tanto, que a cualquiera nos pudo pasar.

`[PANTALLA] 4. EL ESCRITORIO DE LA CASA`

**Y el cuarto** es el de hoy. Hoy ya no se trata de preguntarle a la IA. Se trata de **enseñarle cómo trabajamos**. Le damos nuestras carpetas, nuestros procesos y nuestras reglas, y ella las sigue. Siempre igual.

`[PANTALLA] Memoria → Disco duro → Chat → Método`

Fíjense en algo. En treinta años cambiamos de herramienta tres veces. Pero el problema siempre fue el mismo: **el método del buen abogado nunca quedaba escrito.**

Hoy, por primera vez, se puede escribir. Y eso es lo que les vengo a mostrar: cómo construirle una casa a su método.

---

## 3:30 – 5:00 · EL PROBLEMA: un enero cualquiera

Les cuento un caso real, de esos que no salen en los libros.

`[PANTALLA] ENERO. 40 CONTRATOS. 1 ABOGADA. 0 TINTOS SUFICIENTES.`

Es enero. La entidad o la empresa necesita **cuarenta contratos de prestación de servicios**. Para ayer, obviamente. Cada contrato trae hoja de vida, cédula, RUT, certificados, antecedentes, afiliaciones y póliza.

Eso son unos **trescientos documentos**. Y ahí empieza el reality:

- El contratista que manda la cédula en foto… tomada encima de la cama, con la cobija de tigre de fondo.
- El RUT actualizado por última vez en 2019.
- La póliza que vence justo el día de la firma.
- El socio que corrige a mano, con esfero rojo, un PDF impreso… y lo escanea torcido.
- Y el WhatsApp de las 10 de la noche: *"Doctora, una preguntica rápida"*. Que nunca es preguntica y nunca es rápida.

*(Pausa. Deja que se rían de reconocerse.)*

Y aquí viene lo serio. ¿Cómo revisamos esos cuarenta contratos? Cada persona del equipo lo hace distinto. El practicante revisa una cosa, el asociado revisa otra y la socia confía en que alguien revisó todo.

> **Un despacho sin método no es un equipo. Es un grupo de personas trabajando en el mismo edificio.**

Así que construyamos la casa.

---

## 5:00 – 7:00 · PASO 1: abrir Claude Code y mostrarle cómo trabajamos

`[PANTALLA] Claude Code`

Primero abrimos **Claude Code**. Ya sé, ya sé: dice "code" y la mitad del auditorio pensó "yo estudié derecho justamente para no hacer esto".

*(Risas.)*

Tranquilos. **No van a programar ni una línea.** Claude Code es Claude trabajando **dentro de sus carpetas**: las lee, las ordena, crea archivos y sigue instrucciones. Es como invitar al practicante a su oficina en vez de mandarle todo por WhatsApp.

`[PANTALLA] Estructura de carpetas`

```
📁 Contratos_Enero
├── 📁 01_Plantillas          (mis 3 contratos modelo)
├── 📁 02_Soportes            (una carpeta por contratista)
├── 📁 03_Contratos_revisados (los que ya aprobé y me gustan)
└── 📁 04_Entregables         (vacía, aquí va a trabajar Claude)
```

Lo primero es ordenar la casa antes de invitar a alguien. Si le entregan a Claude una carpeta que se llama "Cosas", les va a devolver… cosas.

Y ahora, el momento clave. Le escribo esto:

`[PANTALLA] PROMPT 1 · Construye la casa`

> *"Claude, soy abogada y cada enero preparo 40 contratos de prestación de servicios. En esta carpeta están mis plantillas, los soportes de cada contratista y tres contratos que ya revisé y me gustan. Primero estudia cómo trabajo. Luego créame un plugin llamado **casa-contratos** con un **playbook** con mis reglas (cómo redacto, qué verifico y qué nunca hago) y una **skill** por cada paso: revisar soportes, redactar el contrato, verificar pólizas y armar el informe para mi revisión. Antes de crear nada, muéstrame el plano y espera mi aprobación."*

Fíjense en la última frase: **"muéstrame el plano y espera mi aprobación"**. Ningún maestro de obra serio empieza a pegar ladrillos sin que usted firme el plano.

---

## 7:00 – 9:00 · PASO 2: entender la casa

`[PANTALLA] Plugin = la casa · Playbook = las reglas de la casa · Skills = las habitaciones`

Claude me devuelve el plano. Y aquí es donde todo tiene sentido.

**El plugin es la casa.** Es el paquete completo: todo lo que su despacho sabe hacer en un tema, en un solo lugar.

**El playbook es el manual de convivencia.** Son las reglas de la casa. Todas las mamás tenían uno, aunque nunca lo escribieron: "en esta casa no se come en la cama", "en esta casa se saluda". El playbook del despacho dice cosas como:

- "En esta casa no se cita una norma sin fuente."
- "En esta casa, si falta un soporte, se dice. No se asume."
- "En esta casa, nada sale sin revisión humana."

**Las skills son las habitaciones.** Y cada habitación sirve para una cosa. La cocina no es para dormir, y el baño… bueno, en algunas casas el baño también es oficina, pero ese es otro tema.

*(Risas.)*

`[PANTALLA] Las habitaciones de casa-contratos`

| Habitación (skill) | Para qué sirve |
|---|---|
| Revisión de soportes | Revisa los 300 documentos y le dice qué falta, qué venció y qué no coincide |
| Redacción del contrato | Redacta con **su** plantilla, **su** estilo y **sus** cláusulas |
| Verificación de pólizas | Revisa vigencias, amparos y valores contra el contrato |
| Informe para revisión | Le entrega un resumen: "estos 34 están listos; estos 6 necesitan sus ojos" |

Una skill es como un practicante muy juicioso con un manual. Antes de revisar un contrato, abre el manual del despacho. **Siempre.** Un lunes a las 8 de la mañana y un viernes a las 11 de la noche.

Y aquí va la reflexión que más me importa de esta charla:

> **En derecho, lo que NO se hace importa tanto como lo que se hace.**

Por eso cada habitación dice claramente qué no hace. Y eso no es un detalle técnico. Es ética profesional escrita.

---

## 9:00 – 10:30 · PASO 3: la casa en GitHub, para que su equipo la encuentre

Muy bonita la casa. Pero si solo existe en mi computador, es una casa en un lote baldío sin dirección.

`[PANTALLA] PROMPT 2 · La dirección de la casa`

> *"Ahora créame un repositorio privado en GitHub llamado **casa-contratos**, sube el plugin y escribe un README que le explique a mi equipo, en español sencillo, para qué sirve cada habitación."*

¿Qué es GitHub? Para nosotros, abogados, piénsenlo así: **es un Drive con memoria notarial.** Guarda cada cambio, quién lo hizo y cuándo. Se acabó el "¿quién le movió a la cláusula séptima?". GitHub sabe. GitHub siempre sabe.

*(Pausa.)*

Y ahora viene lo que les va a cambiar el lunes. Llega el practicante nuevo. Antes, eso significaba tres semanas de "mire, aquí lo hacemos así, pero la doctora Martínez lo hace asá, y el doctor Pérez… bueno, el doctor Pérez hace lo que quiere".

Ahora el practicante abre Claude Code y escribe **una sola frase**:

`[PANTALLA] PROMPT 3 · Copiar la llave`

> *"Clona el repositorio casa-contratos de nuestro despacho y déjalo listo para usar."*

Y listo. Tiene **la misma casa, con las mismas reglas y las mismas habitaciones** que la socia con veinte años de experiencia.

> **Eso no es tecnología. Es algo que los despachos llevan décadas intentando: que todos trabajen igual de bien.**

---

## 10:30 – 12:30 · PASO 4: el condominio

Ahora imagínense que no tienen una casa, sino varias: la de contratos, la de litigios y la de licitaciones. Cada una con sus habitaciones.

Cuando uno tiene varias casas con las mismas reglas de convivencia, eso ya no es una casa. **Es un condominio.** Y en Claude, el condominio se llama **marketplace**.

`[PANTALLA] PROMPT 4 · El condominio`

> *"Claude, crea un marketplace llamado **condominio-despacho** que agrupe todas nuestras casas: contratos, litigios y licitaciones."*

El marketplace es la portería del condominio. Cualquier persona del equipo llega, dice a qué casa va, y la dejan entrar con las llaves correctas.

`[PANTALLA] MINI VIDEO (60–90 segundos) · Instalar el condominio`

*(Aquí pones el video. Tú lo narras en vivo, sin audio del video.)*

1. Se abre Claude.
2. Se va a la sección de plugins y se elige **agregar marketplace**.
3. Se pega la dirección del repositorio: `despacho/condominio-despacho`.
4. Aparecen las tres casas y se instala **casa-contratos**.
5. Se abre una conversación nueva y se escribe: *"Revisa los soportes de los contratistas de enero."*
6. Claude entra solo a la habitación correcta y empieza a trabajar con **sus** reglas.

*(Cuando termina el video:)*

Nadie tuvo que explicarle nada. Nadie tuvo que acordarse de "cómo lo hace la doctora". La casa ya lo sabe.

Y los cuarenta contratos de enero, con sus trescientos documentos, pasan de ser dos semanas de revisión manual a un informe que me dice: **"estos 34 están listos; estos 6 necesitan sus ojos"**. Y mis ojos, que son los caros, se van justo donde tienen que ir.

---

## 12:30 – 14:00 · LAS REGLAS DEL CONDOMINIO

`[PANTALLA] 3 reglas`

Antes de cerrar, las tres reglas que en mi condominio no se negocian:

**Uno. La IA no firma. Usted firma.**
La responsabilidad profesional no se delega. Ni al practicante ni a la máquina.

**Dos. Sin fuente, no existe.**
Toda norma, todo hecho y todo dato tienen que apuntar a un documento que se pueda verificar. El chat que inventaba sentencias no fue un problema de inteligencia. Fue un problema de casa: nadie le dio reglas.

**Tres. El método es suyo.**
Claude ejecuta su playbook. No se lo inventa. Si su método es malo, la IA lo va a hacer mal más rápido. *(Pausa.)* Así que primero el método.

*(Bajas la voz.)*

Durante siglos, el criterio de un buen abogado se jubilaba con él. Se iba el socio y se iba la forma de hacer las cosas. Se iba la practicante estrella y se iba lo que sabía.

> **Hoy, por primera vez, el criterio se puede escribir, se puede enseñar y se puede repetir.**

---

## 14:00 – 15:00 · CIERRE

¿Se acuerdan de la pregunta del principio? *Si mañana usted se va de vacaciones un mes, ¿su despacho sabe trabajar como usted?*

Hoy la respuesta puede ser **sí**. Y no porque la IA sea mágica.

> **No es magia. Es método.**

Y una última cosa. Al principio levantaron la mano por el "final final AHORA SÍ".

*(Sonríes.)*

La próxima vez que nos veamos en esta vertical, quiero hacer otra encuesta. Quiero que levanten la mano quienes ya tienen **su casa**. Y ojalá, quienes ya viven en **un condominio**.

Construyan su casa. Escriban sus reglas. Compártanla con su equipo.

Pero eso sí: **las llaves, siempre, se las quedan ustedes.**

Muchas gracias.

*(Te quedas quieta. No digas "¿preguntas?" enseguida. Deja que aplaudan.)*

---

## Notas de producción

- **Palabras habladas:** unas 2.100. A ritmo de charla (unas 140 palabras por minuto) da 15 minutos justos.
- **Si vas corta de tiempo:** recorta la tabla de habitaciones (paso 2) y deja solo el ejemplo de la cocina.
- **Mini video:** grábalo antes del evento y no dependas del wifi. Muestra los 6 pasos con cursor grande y zoom en cada clic.
- **Antes del evento, verifica** en tu versión de Claude cómo se llama exactamente la sección de plugins y la opción de agregar marketplace. En Claude Code también funciona por comandos: `/plugin marketplace add despacho/condominio-despacho` y luego `/plugin install casa-contratos@condominio-despacho`.
- **Para GitHub:** Claude Code solo puede crear el repositorio si ya conectaste tu cuenta de GitHub en ese computador. Hazlo el día anterior.
- **Si tienes anécdotas propias** (la cobija de tigre, la preguntica rápida), cámbialas por las tuyas. Las historias reales siempre ganan.
