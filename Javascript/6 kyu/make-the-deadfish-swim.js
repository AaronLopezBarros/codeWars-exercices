//INSTRUCTIONS

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

- - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Escriba un analizador simple que analice y ejecute Deadfish.

// Deadfish tiene 4 comandos, cada uno de 1 carácter:

// iincrementa el valor (inicialmente 0)
// d disminuye el valor
// s eleva al cuadrado el valor
// o envía el valor a la matriz de retorno
// Los caracteres no válidos deben ignorarse.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
  const returnArray = []
  let value = 0
  for(i = 0; i < data.length; i++){
    switch(data[i]){
        case 'i': value += 1
         break;
        case 'd': value -= 1
         break;
        case 's': value **= 2
         break;
        case 'o': returnArray.push(value)
    }
  }
  return returnArray
}