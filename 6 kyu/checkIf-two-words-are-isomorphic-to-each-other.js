// INSTRUCTIONS

// Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.

// Task
// In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise. Remember that order is important.

// Your solution must be able to handle words with more than 10 characters.

// Example
// True:

// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS
// False:

// AB CC
// XXY XYY
// ABAB CD

- - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Dos cadenas ayb se denominan isomorfos si existe una asignación uno a uno posible para cada carácter de aa cada carácter de b. Y todas las apariciones de cada personaje en el amapa al mismo personaje en b.

// Tarea
// En este kata, creará una función que regresará Truesi dos cadenas dadas son isomorfas entre sí, y de lo Falsecontrario. Recuerde que el orden es importante.

// Su solución debe poder manejar palabras con más de 10 caracteres.

// Ejemplo
// Cierto:

// CBAABC DEFFED
// XXX YYY
// RAMBUNCTIOUSLY THERMODYNAMICS
// Falso:

// AB CC
// XXY XYY
// ABAB CD



function isomorph(a, b) {
    let comprobeA = ''
    let comprobeB = ''
    if(a.length !== b.length) return false
    for(i = 0; i < a.length; i++) comprobeA += a.indexOf(a[i])
    for(i = 0; i < b.length; i++) comprobeB += b.indexOf(b[i])
    return comprobeA === comprobeB
  }