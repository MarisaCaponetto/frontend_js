/**
 * Data Types
 * -NUMBER
 */

// EL TIPO NUMBER REPRESENTA TANTO NÚMEROS ENTEROS COMO DE PUNTO FLOTANTE.
// let age = 18;
// let float = 12.345;
// console.log(age - 1)
// console.log(float)
// console.log(float + 1.21)

// console.log(age)
// console.log(typeof(age)) INDICA EL TIPO DE DATO: NUMBER
// 
/**
 * Data Types
 * - BIGINT
 */

// EN JAVASCRIPT, el tipo “number” no puede representar valores enteros mayores que (2 elevado a la 53 -1) (o 2 potencia 53) (eso es 9007199254740991), o menor que -(2 elevado a 53 -1) para negativos. Es una limitación técnica causada por su representación interna.

// Para la mayoría de los propósitos es suficiente, pero a veces necesitamos números realmente grandes. Por ejemplo, para criptografía o marcas de tiempo de precisión de microsegundos.

// const testingMaxNumber = 1231234335345435345345345435345;
// console.log(testingMaxNumber)

// const testingBigIntMaxNumber = 1231234335345435345345345435345n;
// console.log(testingBigIntMaxNumber)
// console.log(typeof(testingMaxNumber))
// console.log(typeof(testingBigIntMaxNumber))

/**
 * Data Types
 * - STRING
 */

// let str = "Hola";
// let str2 = 'Las comillas simples también están bien';
// let phrase = `se puede incrustar otro ${str}`; OTRA FORMA DE CONCATENAR UNA VARIABLE CON UN TEXTO

// let name = "Marisa"
// let lastName = "Caponetto"
// console.log(name)
// console.log(typeof name)
//CONCATENACIÓN
// console.log(`Hola, mi nombre es ${name} y mi apellido es ${lastName}`)
// console.log(`La suma de 2 + 2 es ${2+2})

// console.log(str)
// console.log(str2)
// console.log(phrase)

// let name = "John";

// interpolar una variable en un string
// console.log( `Hola, ${name}!` );

// interpolar una expresión en un string
// console.log( `el resultado es ${1 + 2}` ); 
// console.log(typeof(str))

/**
 * Data Types
 * - BOOLEAN
 */

// let nameFieldChecked = true; // sí, el campo name está marcado
// let ageFieldChecked = false; // no, el campo age no está marcado
// console.log(typeof(ageFieldChecked))
// console.log(nameFieldChecked)
// console.log(ageFieldChecked)

// let isGreaterThan = 4 > 7;
// console.log( isGreaterThan ); // false (el resultado de la comparación es "no")
// console.log(typeof(isGreaterThan))

/**
 * Data Types
 * - NULL (sin valor)
 */

// let age = null
// console.log(age) 
// console.log(typeof(age)) Imprime object


/**
 * Data Types
 * - UNDEFINED (valor no asignado)
 */

// let nothing;
// console.log(nothing); // muestra "undefined"
// console.log(typeof(nothing))

/**
 * Data Types
 * - OBJECT AND SYMBOLS
 */

// let user = {
//     name: "Franco",
//     lastName: "Meriles"
// }

// console.log(user)
// console.log(user.name) PARA ACCEDER A CADA UNA DE LAS PROPIEDADES DEL OBJETO USER
// console.log(user.lastName)
// console.log(typeof(user))


 /*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
  Strings:
  1. Crear 3 variables cada una debe tener un dato especifico (name, age, nationality)
  let MyName = "Marisa"
  let age = 31
  let nationality = "Argentina"
  let doubleAge = 2* age
  
  2. Escribir 1 console.log armando la siguiente frase "Hola me llamo ..., el doble de mi edad es ... y soy ..."
  console.log(`Hola, me llamo ${MyName}, el doble de mi edad es ${doubleAge} años.`)
  
  Boolean:
  1. Crear 1 variable con el siguiente resultado, tu edad es mayor a 90?
  let age = 31
  let isYourAgeGreaterThan = age > 90;
  console.log( isYourAgeGreaterThan)
  
  Null and Undefined
  1. Crear 2 variables cada una deberia tener un dato especifico (name, age)
  let name = null
  let age 
  2. Escribir un console.log con el siguiente resultado "Hola me llamo null y tengo undefined años"
  console.log(`Hola, me llamo ${name} y tengo ${age} años.`)
`)

//ALERT

// const number = 31
// alert ("Hola, tengo " + number + " años.")

// PROMPT
// let name = prompt("Cuál es tu nombre?")
// alert("Bienvenido " + name+ "!")

// CONFIRM
// let result = confirm("Estás frente a una PC?")
// console.log(result)

//1. Crear una página que solicite un nombre y una edad, y al finalizar mostrar un alert con el siguiente mensaje:
//"Hola, me llamo______y tengo_____años"

// let name = prompt("Cuál es tu nombre?")
// let age = prompt("Cuántos años tenes?")
// alert (`Hola, me llamo ${name} y tengo ${age} años.`)