//INSTRUCTIONS

// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

- - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Introducción
// La ola (conocida como la ola mexicana en el mundo de habla inglesa fuera de América del Norte) es un ejemplo de ritmo metacrónico que se logra en un estadio repleto cuando grupos sucesivos de espectadores se paran brevemente, gritan y levantan los brazos. Inmediatamente después de estirarse a su altura máxima, el espectador vuelve a la posición sentada habitual.

// El resultado es una ola de espectadores de pie que viaja a través de la multitud, aunque los espectadores individuales nunca se muevan de sus asientos. En muchas arenas grandes, la multitud está sentada en un circuito contiguo alrededor del campo deportivo, por lo que la ola puede viajar continuamente alrededor de la arena; en arreglos de asientos no contiguos, la ola puede, en cambio, reflejarse de un lado a otro a través de la multitud. Cuando el espacio entre los asientos es estrecho, la ola a veces puede atravesarlo. Por lo general, solo una cresta de ola estará presente en un momento dado en una arena, aunque se han producido olas simultáneas que giran en sentido contrario. ( FuenteWikipedia )
// Tarea
// En este Kata simple tu tarea es crear una función que convierta una cuerda en una Onda Mexicana. Se le pasará una cadena y debe devolver esa cadena en una matriz donde una letra mayúscula es una persona de pie. 
// Reglas
// 1. La cadena de entrada siempre estará en minúsculas pero puede estar vacía.

//  2. Si el carácter en la cadena es un espacio en blanco, páselo como si fuera un asiento vacío
// Ejemplo
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
    let waveWords = []
    for( i = 0; i < str.length; i++){
      if(str[i] === ' ') continue;
      
      let word = str.split('')
      word[i]  = str[i].toUpperCase()
      waveWords.push(word.join(''))
    }
    return waveWords
  }
