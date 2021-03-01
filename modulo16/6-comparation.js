/**
 * COMPARATION
 *
 */

// Mayor/menor que: a > b, a < b.
// Mayor/menor o igual que: a >= b, a <= b.
// Igualdad genérica: a == b (ten en cuenta el doble signo ==. Un solo símbolo a = b significaría una asignación).
// Distinto. En matemáticas la notación es ≠, pero en JavaScript se escribe como una asignación con un signo de exclamación delante: a != b.

// Una comparación retorna un valor. En este caso, el valor es un booleano.

// console.log( 2 > 5 )  // false
// console.log( 2 > 1 ); // true (correcto)
// console.log( 2 == 1 ); // false (incorrecto)
// console.log( 2 != 1 ); // true (correcto)

// COMPARACIÓN EN CADENA
// Para ver si una cadena es “mayor” que otra, JavaScript utiliza el llamado orden “diccionario” u “lexicográfico”.
// En otras palabras, las cadenas se comparan letra por letra.

// console.log( 'Z' > 'A' );              TRUE
// console.log( 'Glow' > 'Glee' );        TRUE
// console.log( 'Bec' > 'Beb' );          TRUE

// COMPARACIÓN DE DIFERENTES TIPOS
// console.log( '2' > 1 ); // true, la cadena '2' se convierte en el número 2
// console.log( '0' > 1 ); // false, la cadena '0' se convierte en el número 0
// console.log( '01' == 1 ); // true, la cadena '01' se convierte en el número 1

// NaN es un valor numérico especial que retorna falso para todas las comparaciones.

/**
 * IGUALDAD ESTRICTA
 *
 */

// console.log( 2 == 2 );      TRUE
// console.log( 2 == 1 );      TRUE
// console.log( 2 === '2' );   FALSE (Debe ser igual en valor y tipo de dato)
// console.log( 2 == '2' );    FALSE

// https://www.sitepoint.com/javascript-truthy-falsy/

/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
  ¿Cuál será el resultado de las siguientes expresiones?
  1. 5 > 4                      TRUE
  2. "apple" > "pineapple"      FALSE
  3. "2" > "12"                 FALSE??? Al ser como string...compara los números de a uno...como en dicccionarios?
  4. undefined == null          TRUE
  5. undefined === null         FALSE
`)
