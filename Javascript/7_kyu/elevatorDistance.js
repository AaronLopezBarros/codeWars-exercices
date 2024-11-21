//INSTRUCTIONS

// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

- - - - - - - - - - - - - 

//INSTRUCCIONES

// Imagine que comienza en el quinto piso de un edificio, luego baja al segundo piso y luego vuelve a subir al octavo piso. Ha recorrido un total de 3 + 6 = 9 pisos de distancia.

// Dada una matriz que representa una serie de pisos a los que debe llegar en ascensor, devuelva un número entero que represente la distancia total recorrida para visitar cada piso en la matriz en orden.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array siempre contendrá al menos 2 pisos. Las pruebas aleatorias contendrán de 2 a 20 elementos en una matriz y valores mínimos entre 0 y 30.


function elevatorDistance(array) {
    let total = 0
    for (i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      total += array[i] - array[i + 1]
       } else {
        total += array[i + 1] - array[i]
       }
  }
    return total
  }