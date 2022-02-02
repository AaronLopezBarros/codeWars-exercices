//INSTRUCTIONS

// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Complete el método para que formatee las palabras en un solo valor separado por comas. La última palabra debe estar separada por la palabra 'y' en lugar de una coma. El método toma una matriz de cadenas y devuelve una sola cadena con formato.

// Nota:

// Los valores de cadena vacíos deben ignorarse.
// Las matrices vacías o los valores nulo/nil/None que se pasan al método deberían dar como resultado una cadena vacía que se devuelve.
// Ejemplo: (Entrada --> salida)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

function formatWords(words){
    let str = [];
    if(words === null) return ''
    if(words.length === 0) return ''
    
    let filteredArray = words.filter((word) => word !== '');
    
    for(let i = 0; i < filteredArray.length; i++){
      if(i === filteredArray.length -1 ){
        str.push(filteredArray[i])
      } else if(i === filteredArray.length - 2){
        str.push(filteredArray[i] + ' ' + 'and' + ' ')
      } else {
        str.push(filteredArray[i] + ',' +' ')
      }
    }
   console.log(words)
    return(str.join(''));
  }