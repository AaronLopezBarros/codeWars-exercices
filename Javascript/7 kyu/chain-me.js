//INSTRUCTIONS

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// returns 90;

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Escriba un encadenador de funciones genérico que tome un valor inicial y una matriz de funciones para ejecutar en él (matriz de símbolos para Ruby).

// La entrada de cada función es la salida de la función anterior (excepto la primera función, que toma el valor inicial como entrada). Devuelve el valor final una vez completada la ejecución.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// returns 90;

function chain(input, fs) {
    let result = input;
    
    fs.forEach(f => result = f(result));
    
    return result;
  }
