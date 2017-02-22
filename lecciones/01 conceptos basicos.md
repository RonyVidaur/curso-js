# Lección 1: Conceptos básicos de programación.

*Esta lección* es una introducción a muchos conceptos básicos de programación -- Por supuesto inclinandonos especificamente hacia JavaScript (JS abreviado)  --
y como tomar y entender todos esos conceptos a lo largo del curso.

Esta Lección deben tomarla como un repaso rápido de las cosas que vamos a estar aprendiendo con más detalle cuando empecemos a escribir código.

## Código

Empecemos desde el principio :blush:

Un programa, muchas veces conocido como *codigo fuente* o simplemente *codigo*, es un conjunto de instrucciones especiales para decirle a la computadora que instrucciones usar. Usualmente el codigo es guardado en un archivo de texto, sin embargo con JavaScript tambien podemos escribir codigo directamente en la consola de desarrollador en el navegador, lo cual cubriremos en breve.

A las reglas para contar con un formato válido y una combinación de funciones que tenga sentido se le llama  *lenguaje de programación*, algunas veces también las conocemos como *sintaxis*, básicamente de la misma manera en como el Español nos dice como se escribe una palabra y como construír oraciones válidas usando las palabras y los signos de puntuación.

### Instrucciones

En un lenguaje de programación, un grupo de palabras, números, y operadores que realizan una tarea específica es una *instrucción*. En JavaScript, una instrucción se ve así:

```js
a = b * 2;
```

Las letras `a` y `b` son llamadas *variables*, que son como pequeñas cajas en las que podemos guardar cosas. en los programas, las variables retienen valores (por ejemplo el número `42`) para ser usados por el programa.


En contraste, el número `2` por sí mismo es sólo un valor, a eso le llamamos *valor literal*, porque está solo dentro del código y no está almacenado en una variable.

Los caracteres `=` y `*`  son *operators*  -- ellos realizan acciones con los valores y las variables, como  en el ejemplo en el cual estamos realizando una operación matemática.

La mayoría de las instrucciones en JavaScript terminan con (`;`).

La instrucción `a = b * 2;` le dice a la computadora, tomar el valor que está almacenado actualmente en `b`, multiplicar ese valor por `2`, y luego guardar ese nuevo valor en una variable llamada `a`.

Los programas solo son un conjunto de instrucciones como la anterior, que ya juntas describen todos los pasos que deben realizarse para cumplir con el propósito del programa.

### Expresiones

Las instrucciones estan hechas de una o más *expresiones*. Una expresion es cualquier referencia a una variable o valor, o un conjunto de variable(s) y valor(es) combinados con operadores.

Por ejemplo:

```js
a = b * 2;
```

Esta instrucción tiene cuatro expresiones en ella: :no_mouth:

* `2` es una *expresión de valor literal*
* `b` es una *expresión de variable*, (traer el valor que está en la variable)
* `b * 2` es una *expresión aritmética*, (hacer la multiplicación)
* `a = b * 2` es una *expresión de asignación*, asignar el resultado de la expresión `b * 2` a la variable `a` (después vamos a ver mas expresiones)

Una expresión que está por si sola dentro del código le llamamos *expresión de instrucción*, por ejemplo la siguiente:

```js
b * 2;
```

Este tipo de expresión no es muy común ni es tampoco muy útil, porque generalmente estas no tendrían ningún efecto en el programa -- traerá el valor de  `b` y lo multiplicará por `2`, pero después no haría nada con ese resultado.

Una expresión mucho más común se llama *expresión de llamada* (lo vamos a entender mejor cuando veamos "Funciones"), básicamente lo que hace esta expresión es llamar a una función:

```js
alert( a );
```

### Ejecutar un programa

Cómo hacen todas esas instrucciones que escribimos para decirle a la computadora qué hacer? :hushed: El programa necesita ser *ejecutado*, o dicho de otra forma *correr el programa*.

Instrucciones como `a = b * 2` son de ayuda para nosotros como desarrolladores cuando estamos escribiendo y leyendo código, pero no están en la forma en las que una computadora entiende directamente . Así que una herramienta especial en la computadora (ya sea un *intérprete* o un *compilador*) es usado para traducir las instrucciones que escribimos en comandos que la computadora puede entender.

para algunos lenguajes de programación, esta traducción de comandos está hecha principalmente de arriba a abajo, linea por linea, cada vez que el programa corre, lo que usualmente es llamado *interpretar* el código.

Para otros lenguajes, la traducción está hecha de antemano, esto se llama *compilar* el código, para cuando el programa *corra* después, lo que en realidad corre es la traducción que se hizo mediante este proceso.

Es acertado decir que JavaScript is *interpretado*,porque el código JavaScript es procesado cada vez que corre. pero decir que es interpretado no es del todo correcto. El motor de JavaScript de hecho *compila* el programa sobre la marcha e inmediatamente corre el código compilado.

## Inténtenlo!

Esto es importante :cop: : De ahora en adelante mientras están leyendo esto -- no tengan miedo de leerlo varias veces si algún concepto no está totalmente claro-- tienen que practicar todos estos conceptos. La forma más facil es hacerlo en la consola de desarrollador de su navegador favorito (Firefox, Chrome :sunglasses: , IE :shit: , etc.).

Vamos a familiarizarnos con el proceso de correr nuestro código en la consola. Primero, les sugiero que abran una pestaña vacía en el navegador. Después, asegúrense de que la consola de desarroladores esté abierta , F12 :wink: .

Ahora, escribamos este código y veamos que pasa:

```js
a = 21;

b = a * 2;

console.log( b );
```

El cógido que escribimos en la consola de chrome debería verse así:

<img src="fig1.png" width="500">

Inténtenlo . La mejor manera de aprender a programar es escribiendo código! :space_invader:

### Salidas

En el ejemplo del código anterior, usamos `console.log(..)`. Brevemente, vamos a ver de qué se trata esa línea de código.

Tal vez ya lo suponían, esa es la manera en la que imprimimos texto en la consola (alias *la salida* al usuario) . Hay dos características que debemos comprender.

Primero, la parte `log( b )` se llama llamado a la función. Lo que está pasando es que estamos enviando  la variable `b`  a esa función, la función toma el valor de `b` y lo imprime en la consola.

Segundo, la parte `console.` es un objeto, es donde se encuentra la función`log(..)`. Más adelante vamos a ver a detalle los objetos y funciones.

Otra forma de crear salidas del programa es con la instrucción `alert(..)`. Por ejemplo:

```js
alert( b );
```

Si corren eso, se darán cuenta que en lugar de imprimir un mensaje en pantalla, muestra una ventana con un botón que dice "OK" y  que también muestra el valor de la variable `b`. Sin embargo, usar `console.log(..)` generalmente va a ser nuestra elección a la hora de querer imprimir valores durante el proceso de desarrollo, porque podemos mostrar múltiples valores al mismo tiempo, sin interrumpir la interfaz de usuario.

### Entradas

Mientras discutíamos la salida, tal vez se habrán preguntado también acerca de la *entrada* ( recibir información del usuario ).

La forma más común en que esto pasa, es cuando la página HTML muestra elementos como formularios (cajas de texto, radio buttons, etc) al usuario para que puedan escribir en ellos, y después usar JS para leer esos valores y almacenarlos en nuestras variables.

Pero hay una manera más fácil de obtener esa información, para própositos de aprendizaje y demostración podemos usar la función `prompt(..)` :

```js
edad = prompt( "Por favor dime tu edad" );

console.log( edad );
```

Como podrán imaginarse, el mensaje que pasamos a la función `prompt(..)` -- en este caso, `"Por favor dime tu edad"` -- es mostrado en la ventana emergente.

Debería verse algo similar a lo siguiente:

<img src="fig2.png" width="500">

una vez que enviamos el texto presionando el botón  "OK," observaremos que el valor que hemos enviado ahora está guardado en la variable `edad`, la cual después se convierte en *salida* con `console.log(..)`:

<img src="fig3.png" width="500">

## Operadores

Operadores son los elementos que usamos para realizar acciones sobre nuestras variables y sus valores. ya hemos visto dos operadores de  JavaScript , el `=` y el `*`.

El operador `*` realiza la operación matématica de la multiplicación. Ven que simple es esto? :speak_no_evil:

El operador `=` es usado para *asignación* --primero calculamos el valor en el  *lado derecho* del `=` y después lo colocamos en la variable que especificamos en el  *lado izquierdo*.

Consideremos:

```js
a = 2;
b = a + 1;
```

Aquí, asignamos el valor de  `2` a la variable `a`. Después, tomamos el valor de la variable `a` (sigue siendo `2`), le sumamos `1`, lo que da como resultado el valor `3`, y luego lo asignamos a la variable `b`.

Aunque técnicamente no es un operador, vamos a necesitar la palabra reservada `var` en todos nuestros programas, ya que es la forma en la que *declaramos* (*creamos*) *var*iables.

Siempre debemos declarar la variable antes de usarla. Pero solamente necesitamos declararla una vez; y la podemos usar tantas veces como sea necesario. Por ejemplo:

```js
var a = 20;

a = a + 1;
a = a * 2;

console.log( a );	// 42
```

Aquí están los operadores mas comunes en JavaScript:

* Asignación: `=` como en `a = 2`.
* Matemáticas: `+` (adición), `-` (subtracción), `*` (multiplicación), y `/` (división), como en `a * 3`.
* Asignación compuesta: `+=`, `-=`, `*=`, y `/=` son operadores compuestos que combinan una operación matemática con asignación, como en `a += 2` (es lo mísmo que `a = a + 2`).
* Incremento/Decremento: `++` (incremento), `--` (decremento), como en `a++` (es lo mísmo que `a = a + 1`).
* Propiedades de acceso a objetos: `.` como en `console.log()`.

   Los objetos son valores que contienen otros valores en lugares específicos llamados propiedades. por ejemplo `obj.a` significa que tenemos un objeto llamado `obj` con una propiedad llamada `a`. (vamos a cubrir objetos en las siguientes lecciones)
* Igualdad: `==` (igualdad simple), `===` (igualdad estricta), `!=` (no-igualdad simple ), `!==` (no-igualdad estricta), como en `a == b`.


* Comparación: `<` (menor que), `>` (mayor que), `<=` (menor igual que), `>=` (mayor igual que), como en `a <= b`.

* Lógicos: `&&` (y), `||` (o), como en `a || b` que selecciona ya sea `a` *o* `b`.

   Estos operadores son usados para **condicionales compuestas** (como ya veremos más adelante)

**Nota:** Para muchos más detalles, y una cobertura de los operadores que no están mencionados aqui, vean la Mozilla Developer Network (MDN)'s "Expresiones y Operadores" (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators).

## Valores y Tipos

Si le preguntan a un empleado en una tienda cuanto cuesta determinado artículo, y el responde "noventa y nueve, noventa y nueve" ($99.99), él entonces les está dando el valor que necesitan pagar para comprarlo. Si quieren comprar dos de esos artículos, entonces fácilmente ustedes pueden calcular que deben pagar$199.98 .

Si ese mismo empleado toma otro artículo similar y les dice que es "gratis", no les está dando un número, les está dando otro tipo de representación para decirles el valor del artículo ($0.00) -- la palabra "gratis."

Si el artículo es un teléfono y ustedes le preguntan si incluye cargador, la respuesta será, "sí" o "no."

De manera similar, cuando expresamos valores en un programa, podemos escoger diferentes representaciones para los valores, dependiendo de el uso que vamos a darles.

Estas diferentes representaciones se llaman *tipos* en la terminología de la programación. JavaScript incluye tipos predefinidos que se llaman valores *primitivos*:

* Cuando queremos usar matemáticas, necesitamos un número (`number`).
* Cuando queremos imprimir un valor en la pantalla, necesitamos un `string` (una cadena de texto, ya sea una palabra, oración, frase, etc).
* Cuando queremos hacer una decisión en nuestro programa, necesitamos un booleano `boolean` (`true` o `false`).

Los valores que están representados en el código son llamados *literales*. Las `string` literales están rodeadas por comillas dobles `"..."` o comillas simples (`'...'`) -- la única diferencia es la preferencia en estilos. Los valores literales de `number` y `boolean` están representadas sin ningún tipo de componentes adicionales (por ejemplo, `42`, `true`, etc.).

Consideremos:

```js
"Soy una string";
'Yo también soy una string';

42;

true;
false;
```

Más allá de los tipos de valores `string`/`number`/`boolean`, es común que los lenguajes de programación provean *arreglos*, *objectos*, *funciones*, y más. En las lecciones siguientes vamos a cubrir todos estos tipos de datos :boom: .
