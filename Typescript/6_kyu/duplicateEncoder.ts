// INSTRUCTIONS

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character

// appears only once in the original string, or ")" if that character appears more than once in the original string.

// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

- - - - - - - - - - - - - - - - 

  // INSTRUCCIONES

  // El objetivo de este ejercicio es convertir una cadena en una nueva cadena en la que cada carácter de la nueva cadena sea "("si ese carácter

  // aparece solo una vez en la cadena original o ")"si ese carácter aparece más de una vez en la cadena original.

  // Ignore las mayúsculas y minúsculas al determinar si un carácter es un duplicado.

  // Ejemplos
  // "din"      =>  "((("
  // "recede"   =>  "()()()"
  // "Success"  =>  ")())())"
  // "(( @"     =>  "))(("

  // Notas

  // Es posible que los mensajes de afirmación no sean claros sobre lo que muestran en algunos idiomas. Si lee "...It Should encode XXX", "XXX"es el resultado esperado, no la entrada.

  function duplicateEncode(word: string) {
    let result = "";

    for (let i = 0; i < word.length; i++) {
      const stringArray = word.toLowerCase().split("");
      const index = stringArray.indexOf(stringArray[i]);
      stringArray.splice(index, 1);
      if (stringArray.includes(word[i].toLowerCase())) {
        result += ")";
      } else {
        result += "(";
      }
    }
    return result;
  }

