//INSTRUCTIONS

// John is a worker, his job is to remove screws from a machine. There are 2 types of screws: slotted (-) and cross (+). John has two screwdrivers, one for each type of screw.

// The input will be a (non-empty) string of screws, e.g. : "---+++"

// When John begins to work, he stands at the first screw, with the correct screwdriver in his hand, and another in his tool kit. He works from left to right, removing every screw. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.

// Each action takes a set amount of time:

// remove one screw : 1 second
// move to the next screw: 1 second
// switch screwdrivers: 5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.

// Examples
// In order to be more clear, we use ABCDEF to represent the screws. The number in brackets is the time in seconds:

// screws: "---+++"
//          ABCDEF

// remove A (1) + move to B (1) + remove B (1) + 
// move to C (1) + remove C (1) + move to D (1) +
// switch screwdriver (5) + remove D (1) +
// move to E (1) + remove E (1) + move to F (1) + remove F (1)

// total time = 16 seconds

- - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// John es un trabajador, su trabajo es quitar tornillos de una máquina. Hay 2 tipos de tornillos: ranurados ( -) y cruzados ( +). John tiene dos destornilladores, uno para cada tipo de tornillo.

// La entrada será una serie de tornillos (no vacíos), por ejemplo: "---+++"

// Cuando John comienza a trabajar, se para en el primer tornillo, con el destornillador correcto en la mano y otro en su juego de herramientas. Trabaja de izquierda a derecha, quitando todos los tornillos. Cuando es necesario, cambia entre el destornillador que tiene en la mano y el que está en su juego de herramientas.

// Cada acción requiere una cantidad determinada de tiempo:

// quitar un tornillo: 1 segundo
// pasar al siguiente tornillo: 1 segundo
// destornilladores conmutados: 5 segundos
// Su tarea es devolver el tiempo total necesario para quitar todos los tornillos, en segundos.

// Ejemplos de
// Para ser más claros, usamos ABCDEFpara representar los tornillos. El número entre paréntesis es el tiempo en segundos:

// screws: "---+++"
//          ABCDEF

// remove A (1) + move to B (1) + remove B (1) + 
// move to C (1) + remove C (1) + move to D (1) +
// switch screwdriver (5) + remove D (1) +
// move to E (1) + remove E (1) + move to F (1) + remove F (1)

// total time = 16 seconds


function sc(screws){
    console.log(screws)
    let seconds = 0
    for(i = 0; i < screws.length; i++){
     if(i > 0 && screws[i] !== screws[i - 1]) seconds += 5
      seconds += 1
      if(i < screws.length -1 ) seconds += 1
    }
    return seconds;
  }