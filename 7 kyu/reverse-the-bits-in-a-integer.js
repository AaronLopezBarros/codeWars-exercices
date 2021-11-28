//INSTRUCTIONS

// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

- - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Escribe una función que invierta los bits en un número entero.

// Por ejemplo, el número 417está 110100001en binario. Invertir el binario es 100001011cuál es 267.

// Puede asumir que el número no es negativo.

function reverseBits (n) {
    n = n.toString(2).split('').reverse().join('')
    n = parseInt(n, 2)
    return n
  }