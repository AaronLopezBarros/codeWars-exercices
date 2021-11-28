// INSTRUCTIONS

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

- - - - - - - - - - - - - - - - - - - 
 
//INSTRUCCIONES

// Dada una matriz (arr) como argumento, complete la función countSmileysque debería devolver el número total de caras sonrientes.

// Reglas para una cara sonriente:

// Cada cara sonriente debe contener un par de ojos válido. Los ojos se pueden marcar como :o;
// Una carita sonriente puede tener nariz, pero no es necesario. Los caracteres válidos para una nariz son -o~
// Cada rostro sonriente debe tener una boca sonriente que debe estar marcada con )oD
// No se permiten caracteres adicionales excepto los mencionados.

// Ejemplos de caras sonrientes válidas: caras sonrientes no válidas :) :D ;-D :~)
// : ;( :> :} :]

// Ejemplo
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Nota
// En caso de una matriz vacía, devuelva 0. No se le probará con una entrada no válida (la entrada siempre será una matriz). El orden de los elementos de la cara (ojos, nariz, boca) siempre será el mismo.

function countSmileys(arr) {
    let counter = 0
    let validSmileys = [':)',':D',';)',';D',':-)',':-D',';-)',';-D',':~)',':~D',';~)',';~D' ]
    arr.forEach((element)=>{
      if(validSmileys.includes(element)){
        counter ++
      }
    })
      return counter
    }