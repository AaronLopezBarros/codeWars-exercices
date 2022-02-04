//INSTRUCTIONS

// Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

// Here's a keypad for visualization.

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. Could you write a program to do this for us?

// Write a function called decode(). Given an encoded string of exactly 10 digits, return the actual phone number in string form. Don't worry about input validation, parenthesis, or hyphens.

- - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Los fanáticos de The Wire apreciarán este. Para aquellos que no han visto el programa, la Organización Barksdale tiene un método simple para codificar los números de teléfono intercambiados a través de buscapersonas: "Pase al otro lado del 5 en el teclado e intercambie 5 y 0".

// Aquí hay un teclado para la visualización.

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// ¡Detective, les seguimos la pista! Aquí tenemos una gran cantidad de mensajes codificados para usar como evidencia, pero llevaría demasiado tiempo decodificarlos a mano. ¿Podrías escribir un programa para hacer esto por nosotros?

// Escribe una función llamada decodificar(). Dada una cadena codificada de 10dígitos exactos, devuelva el número de teléfono real en forma de cadena. No se preocupe por la validación de entrada, paréntesis o guiones.

function decode(string) {
    const oposites = {
    1:9,
    2:8,
    3:7,
    4:6,
    5:0,
    6:4,
    7:3,
    8:2,
    9:1,
    0:5
    }
    let telephoneNumber = ''
    for(let i = 0; i < string.length; i++){
      telephoneNumber += oposites[string[i]]
    }
    return telephoneNumber
  }
