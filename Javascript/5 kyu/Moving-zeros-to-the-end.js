// INSTRUCTIONS

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

- - - - - - - - - - - - - 

//INSRTUCCIONES

// Escribe un algoritmo que tome una matriz y mueva todos los ceros al final, preservando el orden de los otros elementos.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    let newArr = []
    for (i = arr.length-1; i>=0; i--){
       if(arr[i] === 0){
        arr.splice(i,1)
         arr.push(0)
      }
    }
     return arr
  }
