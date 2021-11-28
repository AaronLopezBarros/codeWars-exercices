//INSTRUCTIONS

// Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

// There are 64 squares on a chessboard.

// #Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

// Write a program that shows how many grains were on each square.

- - - - - - - - - - - - - - 

//INSTRUCCIONES

// Escribe un programa que calcule el número de granos de trigo en un cuadrado específico del tablero de ajedrez, dado que el número en cada cuadrado es el doble del anterior.

// Hay 64 cuadrados en un tablero de ajedrez.

// #Ejemplo: cuadrado (1) = 1 cuadrado (2) = 2 cuadrado (3) = 4 cuadrado (4) = 8, etc.

// Escribe un programa que muestre cuántos granos había en cada cuadrado.

function square(number){
    let grains = 1
    for(i = 1; i < number; i++){
      grains = grains * 2
    }
    return grains
  }