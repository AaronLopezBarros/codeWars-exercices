//INSTRUCCTIONS 

// Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

// For more examples,

// pyramid(1) == 1

// pyramid(3) == 2

// pyramid(6) == 3

// pyramid(10) == 4

// pyramid(15) == 5
// Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.

- - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// ¿Recuerdas el triángulo de bolas en el billar? Para construir un triángulo clásico (5 niveles) necesitas 15 bolas. Con 3 bolas puedes construir un triángulo de 2 niveles, etc.

// Para más ejemplos,

// pyramid(1) == 1

// pyramid(3) == 2

// pyramid(6) == 3

// pyramid(10) == 4

// pyramid(15) == 5
// Escribe una función que tome el número de bolas (≥ 1) y calcule cuántos niveles puedes construir un triángulo.

function pyramid(balls) {
    let usedBalls = 0
    let count = 0
   while(usedBalls + count < balls){
     count ++ 
     usedBalls += count
  }
    if(count < 1) return 1
    return count
  }
