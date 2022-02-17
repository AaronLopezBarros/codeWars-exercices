//INSTRUCTIONS

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Su tarea es ordenar una cadena dada. Cada palabra en la cadena contendrá un solo número. Este número es la posición que debe tener la palabra en el resultado.

// Nota: Los números pueden ser del 1 al 9. Por lo tanto, 1 será la primera palabra (no 0).

// Si la cadena de entrada está vacía, devuelve una cadena vacía. Las palabras en la cadena de entrada solo contendrán números consecutivos válidos.

// Ejemplos
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    let orderWords = []
    let count = 1
  words = words.split(' ')
  while(words.length !== orderWords.length){
    let nextWord = words.filter((word) => word.includes(count))
    if(nextWord){
      orderWords.push(nextWord)
      count++
    }
  }
  return(orderWords.join(' '))
  }