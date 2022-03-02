//INSRTRUCTIONS

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.

// Nota: la entrada nunca será una cadena vacía

function fakeBin(x){
    let bin = ""
    for(number of x){
      number < 5 ? bin += "0" : bin += "1" 
    }
    return bin
  }