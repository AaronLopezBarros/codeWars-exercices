//INSTRUCTIONS

// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

- - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Para este kata tendrás que olvidarte de sumar dos números.

// En términos simples, a nuestro método no le gusta el principio de transferir números y simplemente escribe cada número que calcula :-)

// Puede suponer que ambos números enteros son números enteros positivos.

function add(num1, num2) {
    num1 = String(num1).split('')
    num2 = String(num2).split('')
      
    const result = []
    let longNumber = []
    let smallNumber = []
    let count = 1
    let sum;
    
    if(num1.length > num2.length){
      longNumber = [...num1]
      smallNumber = [...num2]
    } else {
      longNumber = [...num2]
      smallNumber = [...num1]
    }
    for(i = longNumber.length - 1; i >= 0; i--){
      if(smallNumber[smallNumber.length - count]){
        sum = Number(longNumber[i]) + Number(smallNumber[smallNumber.length - count])
        result.unshift(sum)
        count ++
      } else {
        result.unshift(longNumber[i])
      }
    }
      return Number(result.join(''))
    }