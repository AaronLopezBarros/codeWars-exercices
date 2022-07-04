//INSTRUCCTIONS

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

- - - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Su tarea es eliminar todas las palabras duplicadas consecutivas de una cadena, dejando solo las entradas de las primeras palabras. Por ejemplo:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    let uniqueStr = []
    s = s.split(' ')
    s.forEach((word) => {
      if(uniqueStr[uniqueStr.length -1 ] !== word) uniqueStr.push(word)
    })
    return uniqueStr.join(' ')
  }