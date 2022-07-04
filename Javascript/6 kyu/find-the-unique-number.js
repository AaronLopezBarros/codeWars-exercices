//INSTRUCTIONS

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

- - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Hay una matriz con algunos números. Todos los números son iguales excepto uno. ¡Intenta encontrarlo!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// Se garantiza que la matriz contiene al menos 3 números.

// Las pruebas contienen matrices muy grandes, así que piense en el rendimiento.

// Este es el primer kata de la serie:

// Encuentra el número único (este kata)
// Encuentra la cadena única
// Encuentra lo único

function findUniq(arr) {
    let unique = 0
    arr.sort((a, b) => a-b)
    if(arr[0] !== arr[1]) unique = arr[0]
    for(let i = 1; i < arr.length; i++){
      if(arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) unique = arr[i]
    }
      return unique
    }