//INSTRUCTIONS

// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

- - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES


// Se le dará una secuencia de objetos que representan datos sobre los desarrolladores que se han registrado para asistir a la próxima reunión de codificación que está organizando.

// Dada la siguiente matriz de entrada:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// escriba una función que devuelva la edad promedio de los desarrolladores (redondeada al entero más cercano). En el ejemplo anterior, su función debería devolver 50(número).

// Notas:

// La matriz de entrada siempre será válida y formateada como en el ejemplo anterior.
// La edad está representada por un número que puede ser cualquier número entero positivo.

function getAverageAge(list) {
    let sum = 0
    for(const property in list){
      sum += (list[property].age)
    }
  return Math.round(sum / list.length)
  }