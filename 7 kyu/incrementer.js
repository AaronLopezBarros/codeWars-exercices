//INSTRUCTIONS

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 (and not 0).

// Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2

- - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Dada una entrada de una matriz de dígitos, devuelva la matriz con cada dígito incrementado por su posición en la matriz: el primer dígito se incrementará en 1, el segundo dígito en 2, etc. Asegúrese de comenzar a contar sus posiciones desde 1 ( y no 0).

// Su resultado solo puede contener números de un solo dígito, por lo que si agregar un dígito con su posición le da un número de varios dígitos, solo se debe devolver el último dígito del número.

// Notas:
// devuelve una matriz vacía si su matriz está vacía
// las matrices solo contendrán números, así que no se preocupe por verificar eso
// Ejemplos de
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2

function incrementer(nums) { 
    let position = 1
    let newNums = []
      nums.forEach((num) => {
        num += position
        if(num > 9) {
         num = num.toString()
          newNums.push(Number(num[num.length - 1]))
        } else {
          newNums.push(num)
        } 
        position += 1
    })
    return(newNums)
  }