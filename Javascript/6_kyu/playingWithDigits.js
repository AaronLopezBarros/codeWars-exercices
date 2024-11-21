//INSTRUCTIONS

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

- - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Algunos números tienen propiedades divertidas. Por ejemplo:

// 89 -> 8¹ + 9² = 89 * 1

// 695 -> 6² + 9³ + 5⁴ = 1390 = 695 * 2

// 46288 -> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Dado un entero positivo n escrito como abcd ... (a, b, c, d ... son dígitos) y un entero positivo p

// queremos encontrar un entero positivo k, si existe, tal como la suma de los dígitos de n tomados a las potencias sucesivas de p es igual a k * n.
// En otras palabras:

// ¿Existe un número entero k como: (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k

// Si es el caso, devolveremos k, si no, devolveremos -1.

// Nota : nyp siempre se darán como enteros estrictamente positivos.

function digPow(n, p){
    let numArr = n.toString().split('')
    let newNum = 0
    for(i = 0; i < numArr.length; i++){
      newNum += Math.pow(numArr[i], p)
      p++
    }
    if(Number.isInteger(newNum / n)){
       return newNum / n
    }else {
      return -1
    }
  
  }