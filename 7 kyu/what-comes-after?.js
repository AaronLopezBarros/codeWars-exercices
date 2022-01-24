//INSTRUCTIONS

// You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

// If there is a number, punctuation or underscore following the letter, it should not be returned.

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"
// Return an empty string if there are no instances of letter in the given string.

- - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Se le darán dos entradas: una cadena de palabras y una letra. Para cada cadena, devuelva el carácter alfabético después de cada instancia de letra (sin distinción entre mayúsculas y minúsculas).

// Si hay un número, puntuación o guión bajo después de la letra, no debe devolverse.

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"
// Devuelve una cadena vacía si no hay instancias de letteren la cadena dada.

function comes_after(str,l) {
    let characters = ''
    
    for(i = 0; i < str.length; i++)
      if(str[i].toLowerCase() === l.toLowerCase() && str[i + 1]){
        
        if(str[i + 1].match(/[a-z]/i))characters += str[i + 1]
      } 
    
    return characters
  }

