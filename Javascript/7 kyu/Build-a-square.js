//INSTRUCTIONS

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

- - - - - - - - - - - - 

//INSTRUCCIONES

// Te daré un número entero. Devuélveme una forma que sea tan larga y ancha como el número entero. El entero será un número entero entre 1 y 50.

// Ejemplo
// n = 3, así que espero una parte posterior cuadrada de 3x3 como se muestra a continuación como una cadena:

// +++
// +++
// +++

function generateShape(integer){
    let symbol = ''
    let square = ''
  for(i = 0; i < integer; i++){
    symbol += '+'
    }
  for (i = 0; i < integer - 1; i++){
    square += '\n' + symbol
  }  
    return symbol + square
  }