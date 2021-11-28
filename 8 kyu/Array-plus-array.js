// INSTRUCTIONS


// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
// I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

- - - - - - - - - - - - - 

//INSTRUCCIONES

// Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices ... en realidad, la suma de todos sus elementos. Te agradeceré tu ayuda.

// PS Cada matriz incluye solo números enteros. La salida también es un número.


function arrayPlusArray(arr1, arr2) {
    let sum = 0
    arr1.forEach((elem)=>{
      sum += elem
    })
    arr2.forEach((elem)=>{
      sum += elem
    })
    return sum
  }