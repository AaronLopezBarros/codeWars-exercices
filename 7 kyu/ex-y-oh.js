//INSTRUCTIONS

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

- - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Compruebe si una cadena tiene la misma cantidad de 'x' y 'o'. El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter.

// Ejemplos de entrada/salida:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let countX = 0
    let countO = 0
    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === "x") countX += 1
      if(str[i].toLowerCase() === "o") countO += 1
    }
    return countX === countO
  }