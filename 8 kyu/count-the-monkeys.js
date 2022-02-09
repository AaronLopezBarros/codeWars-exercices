//INSTRUCTIONS

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

- - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCIONES

// Llevas a tu hijo al bosque a ver los monos. Usted sabe que hay un cierto número allí (n), pero su hijo es demasiado pequeño para apreciar el número completo, tiene que comenzar a contarlos desde 1.

// Como buen padre, te sentarás y contarás con él. Dado el número (n), complete una matriz con todos los números hasta ese número incluido, pero excluyendo el cero.

// Por ejemplo:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

function monkeyCount(n) {
    let myArr = [];
    for ( let i = 1; i <= n; i++ ) {
      myArr.push(i);
    }
    return myArr;
  }