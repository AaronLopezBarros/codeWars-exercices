//INSTRUCTIONS

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

- - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Complete la solución para que divida la cadena en pares de dos caracteres. Si la cadena contiene un número impar de caracteres, entonces debe reemplazar el segundo carácter faltante del par final con un guión bajo ('_').

// Ejemplos:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
    const newArr = []
    let i = 0
    if(str.length % 2 !== 0){
      str = str + '_'
    }
   while(i < str.length){
     newArr.push(str[i] + str[i+1])
     i+=2
   }
   return newArr
 }