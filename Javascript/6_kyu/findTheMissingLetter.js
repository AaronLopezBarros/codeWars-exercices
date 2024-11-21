//INSTRUCCTIONS 

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// # Encuentra la letra que falta

// Escriba un método que tome una matriz de letras consecutivas (crecientes) como entrada y que devuelva la letra que falta en la matriz.

// Siempre obtendrá una matriz válida. Y siempre faltará exactamente una letra. La longitud de la matriz siempre será de al menos 2.
// La matriz siempre contendrá letras en un solo caso.

// Ejemplo:

// ['a', 'b', 'c', 'd', 'f'] -> 'e' ['O', 'Q', 'R', 'S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(array)
{
let lettersAscii  = array[0].charCodeAt()
let missingLetter = ''

for(i = 1; i < array.length; i++){

  if(array[i].charCodeAt() === lettersAscii + 1){
    lettersAscii = array[i].charCodeAt()
  } else {
     missingLetter = String.fromCharCode(lettersAscii + 1)
  }
}
  return missingLetter;
}