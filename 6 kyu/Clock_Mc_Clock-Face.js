//INSTRUCTIONS

// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
// 0 <= angle <= 360

- - - - - - - - - - - 

//INSTRUCCIONES

// Debido a la falta de mantenimiento, el minutero se ha caído de la esfera del reloj del Ayuntamiento.

// Y debido a que el ayuntamiento ha perdido la mayor parte de nuestro dinero de los impuestos debido a una estafa de correo electrónico de Nigeria, no hay fondos para arreglar el reloj correctamente.

// En cambio, están pidiendo a los programadores voluntarios que escriban un código que indique la hora con solo mirar la manecilla de la hora restante.

// ¡Qué montón de tacaños!

// ¿Puedes hacerlo?

// Kata
// Dado el angle(en grados) de la manecilla de la hora, devuelva la hora en formato HH: MM. Ronda abajo al minuto más cercano.

// Ejemplos de
// 12:00 = 0 grados
// 03:00 = 90 grados
// 06:00 = 180 grados
// 09:00 = 270 grados
// 12:00 = 360 grados
// Notas
// 0 <= angle<= 360

var whatTimeIsIt = function(angle) {
    let mins = angle * 2
    let h = Math.floor(mins / 60)
    let m = Math.floor(mins % 60);
    if(h === 0){
      h = '12'
    }
    if(h < 10){
      h = `0${h}`
    }
    if(m < 10){
      m = `0${m}`
    }
    return `${h}:${m}`
  }

