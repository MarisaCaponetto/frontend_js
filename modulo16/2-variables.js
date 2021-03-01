/**
 * Variables
 *
 */

// let numero = 10

// console.log(10)

// numero = 123

// console.log(numero) Puede recibir variables y funciones.

// let myName = "Franco"
// let myLastName = "Meriles"
//Para cambiar la variable, es decir reasignarle un nuevo valor:
//myName = "Marisa"
//myLastName = "Caponetto"

//CONCATENACIÓN

// console.log(myName + myLastName)
// console.log(myName + " " + myLastName)

// DECLARAR DOS VECES LANZA UN ERROR
// let message = "This";
// let message = "That";
// console.log(message)

// TAMBIÉN PODEMOS DECLARAR VARIABLES MÚLTIPLES EN UNA SOLA LÍNEA: 
// let user = 'Franco', age = 31, message = 'Hola';

// LA VERSIÓN DE LÍNEAS MÚLTIPLES ES UN POCO MÁS LARGA, PERO SE LEE MÁS FÁCIL:
// let user = 'Franco';
// let age = 31;
// let message = 'Hola';

// EXISTEN DOS LIMITACIONES DE NOMBRE DE VARIABLES en JavaScript:
// El nombre únicamente puede incluir letras, dígitos, o los símbolos $ y _.
// El primer carácter no puede ser un dígito.
// let _number=2
// let userName;
// let test123;

// CASE TYPES (FORMAS DE ESCRIBIR UNA VARIABLE) 
// const myName = "camelCase"
// const my_name = "snake_case"

// // Correctos
// let $ = 1; // Declara una variable con el nombre "$"
// let _ = 2; // y ahora una variable con el nombre "_"

// Incorrectos
// let 1a; // no puede iniciar con un dígito

// let my-name; // los guiones medios '-' no son permitidos en nombres


// console.log($ + _);

// const noCambia = 'miValor'

// console.log(noCambia)

// noCambia = 'nuevoValor'

/**
 * Variables VAR
 *
 */

 // var oldWay = "im old!"

 // More

 // https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables

 /*************************************
*
*             Ejercicios
*
**************************************/


console.log(`
1. Crear 5 variables cada una deberia tener un dato especifico (name, lastname, age, nationality, myPetName)
let name = "Marisa"
let lastName = "Caponetto"
let age = 31
let nationality = "Argentina"
let myPetName = "Andy"

2. Escribir 4 console.log armando una frase con cada una de las variables.
console.log("Bienvenido!" + " Ingrese su usuario: " + name)
console.log("Me llamo " + name + " " + "y " + "soy " + nationality + ".")
console.log("Tengo " + age + " años.")
console.log("El nombre de mi mascota es " + myPetName + " .")

3. Escribir 2 console.log armando una fase usando 2 o mas variables
console.log("Hola, mi nombre es " + name + " y "+ "mi apellido es " + lastName + ".")
console.log("Hola, mi nombre es " + name+ " y tengo un perrito que se llama " + myPetName + ".")

`)

