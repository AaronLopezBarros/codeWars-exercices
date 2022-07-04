//INSTRUCTIONS

// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

- - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// ¡Necesitamos números primos y los necesitamos ahora!

// Escriba un método que tome un límite máximo y devuelva todos los números primos hasta el límite máximo incluido.

// Por ejemplo,

// 11 => [2, 3, 5, 7, 11]

function prime(num) {
    let primesArr = []
    const isPrime = (num) => {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
          return num > 1;
    }
    for(let i = 0; i <= num; i++){
      if(isPrime(i)) primesArr.push(i)
    }
      return primesArr
    }