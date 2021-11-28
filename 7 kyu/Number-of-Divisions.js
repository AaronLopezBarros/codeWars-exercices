// INSTRUCTIONS

// Calculate how many times a number can be divided by a given number.

// Example
// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100 can be divided by 2 six times:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

- - - - - - - - - 

//INSTRUCCIONES

// Calcula cuántas veces se puede dividir un número por un número dado.

// Ejemplo
// Por ejemplo, el número 6se puede dividir por 2dos:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100se puede dividir por 2seis veces:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

const divisions = (n, divisor) => {
  
    let counter = 0;
     
     while (n/divisor >= 1){
       n = n/divisor;
       counter ++;
     }
     return counter;
     
   };