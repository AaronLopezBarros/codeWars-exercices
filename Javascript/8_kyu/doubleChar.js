//INSTRUCTIONS

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

- - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Dada una cadena, debe devolver una cadena en la que cada carácter (sensible a mayúsculas y minúsculas) se repite una vez.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// ¡Buena suerte!

function doubleChar(str) {
    let newStr = "";
    
    for (let i = 0; i < str.length; i++) {
      newStr += str[i];
      newStr += str[i];
    }
    
    return newStr;
  }