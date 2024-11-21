//INSTRUCTIONS

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

- - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Su tarea es escribir la función findSum.

// Hasta e incluyendo n, esta función devolverá la suma de todos los múltiplos de 3 y 5.

// Por ejemplo:

// findSum(5)debe devolver 8 (3 + 5)

// findSum(10)debe devolver 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    let sum = 0;
    
    for(let i = 0; i <= n; i++){
      if(i % 3 === 0 || i % 5 === 0){
        sum += i;
      }
    }
    
    return sum;
  }