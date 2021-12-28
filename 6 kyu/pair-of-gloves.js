//INSTRUCTIONS

// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// A pair of gloves is constituted of two gloves of the same color.

// You are given an array containing the color of each glove.

// You must return the number of pair you can constitute.

// You must not change the input array.

// Example :

// let myGloves = ['red','green','red','blue','blue'];
// numberOfPairs(myGloves) == 2;// red and blue

// let redGloves = ['red','red','red','red','red','red'];
// numberOfPairs(redGloves) == 3; // 3 red pairs

- - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Par de guantes
// Se acerca el invierno, debes preparar tus vacaciones de esquí. El objetivo de este kata es determinar el número de pares de guantes que puedes constituir a partir de los guantes que tienes en tu cajón.

// Un par de guantes está constituido por dos guantes del mismo color.

// Se le da una matriz que contiene el color de cada guante.

// Debes devolver el número de par que puedas constituir.

// No debe cambiar la matriz de entrada.

// Ejemplo :

// let myGloves = ['red','green','red','blue','blue'];
// numberOfPairs(myGloves) == 2;// red and blue

// let redGloves = ['red','red','red','red','red','red'];
// numberOfPairs(redGloves) == 3; // 3 red pairs

function numberOfPairs(gloves)
{
  const sortGloves = [...gloves]
 let count = 0;
  sortGloves.sort();
  for (var i = 0; i < sortGloves.length;) {
    if (sortGloves[i] === sortGloves[i + 1]) {
      count++;
      i = i + 2;
    } else {
      i++;
    }
  }
  return count
}