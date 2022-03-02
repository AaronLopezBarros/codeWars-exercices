//INSTRUCCTIONS

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// ¡Los trolls están atacando tu sección de comentarios!

// Una forma común de lidiar con esta situación es eliminar todas las vocales de los comentarios de los trolls, neutralizando la amenaza.

// Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena con todas las vocales eliminadas.

// Por ejemplo, la cadena "¡Este sitio web es para perdedores LOL!" se convertiría en "Ths wbst s fr lsrs LL!".

// Nota: para este kata yno se considera una vocal.

function disemvowel(str) {
  
    const vowels = ["a", "e", "i", "o", "u"];
    let newStr = "";
    
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase())) {
        newStr += str[i];
      }
    }
    return newStr;
  }