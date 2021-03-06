/**
 * FUNCTIONS
 * 
*/
// Para crear una función podemos usar una declaración de función.
// La palabra clave function va primero, luego una lista de parámetros entre paréntesis y finalmente el código de la función, también llado "el cuerpo de la función", entre llaves.

// EXPRESIÓN DE FUNCIÓN

//showMessage()                       Javascript permite ejecutar la función antes de crearla.
//                                    El proceso es más lento. 

//function showMessage() {
//    console.log("Hola a todos!");
//}

//DECLARACIÓN DE FUNCIÓN              En este caso, Javascript no permite ejecutar la función antes
//                                    de crearla.
//const showMessage=function() {
//    console.log("Hola")
//}

// FUNCIÓN DE FLECHA
// const showMessage = () => {console.log("Hola")}
// showMessage()

// let sum = (a, b) => {
//    return a + b
// }
// console.log(sum(1,2))         IMPRIME 3

// let sum = (a, b) => a + b   Otra forma más concisa
// console.log(sum(1,2))         IMPRIME 3


//VARIABLES DENTRO DE UNA FUNCIÓN
// SCOPE GLOBAL
// let userName="Marisa"
// function showMessage() {
//    let message= "Hola me llamo" + username
//    console.log(message)  
//}
// showMessage()
// console.log(userName)   //Sí imprime porque la variable userName, está definida fuera de la función (Scope Global)

// SCOPE LOCAL
//function showMessage() {
//    let message = "Hola a todos";    // variable scope local
//  console.log(message)
//}
// console.log(message)   // No imprime


// PARÁMETROS

// function showMessege(from, text) {
//     console.log(from + ":" + text)   
//  }

// showMessage("Fran", "Hola!")   IMPRIME "Fran: Hola!"

// showMessage("Fran") IMPRIME: "Fran:Undefined"

// VALORES PREDETERMINADOS
// function showMessage(name, text= "Hola") {
//    console.log(name + ":" + text)
// }
// showMessage(Fran)        IMPRIME Fran: Hola   (Reemplaza por el parámetro predefinido)

// CONVERSIÓN DE PARÁMETROS
// function showMessage(name, text= "Hola") {
//    console.log(name + ":" + text)
// }
// showMessage(2, 2)        IMPRIME 4 (Ha convertido las variables a number), 
// showMessage ("2", 2)     IMPRIME 22 (Lo toma como string)

// DEVOLVIENDO UN VALOR
// function sum(a, b) {
//    return a + b
// }
// console.log(suma(1,5))   IMPRIME 6
// 
// const suma =sum (2,2)
// console.log(suma)        IMPRIME 4


// function checkAge(age) {
//   if(age > 18) {
//        return true
//   } else { 
//        return false
//    }
// }
// let age = 20
// if (checkAge(age)) {
//      console.log("Eres mayor de edad")    
// } else {
//     console.log("Eres menor de edad")    
// } 

/** function myUser(name, age) {
 * return {
 * newName: name, 
 * newAge: age,
 *   }
 * }
 * 
 * const me= myUser("Marisa", 31)
 * console.log(me)                    IMPRIME name: Marisa age: 31
 * 
 */