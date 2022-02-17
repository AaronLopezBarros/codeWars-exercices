//INSTRUCTIONS

// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.

- - - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Este kata se trata de convertir números a su representación binaria o hexadecimal:

// Si un número es par, conviértelo a binario.
// Si un número es impar, conviértalo a hexadecimal.

function evensAndOdds(num){
    if(num % 2 === 0) {
      return num.toString(2);
    } else {
      return num.toString(16);
    }
  }