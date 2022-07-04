
// INSTRUCTIONS

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

- - - - - - - - - - - -

// Considere una matriz / lista de ovejas donde algunas ovejas pueden faltar en su lugar. Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).

function countSheeps(arrayOfSheep) {
    let counter = 0
    for(i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i]){
        counter += 1
      }
    }
    return counter
  }
