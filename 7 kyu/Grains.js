//INSTRUCTIONS

// Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

// There are 64 squares on a chessboard.

// #Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

// Write a program that shows how many grains were on each square.


function square(number){
    let grains = 1
    for(i = 1; i < number; i++){
      grains = grains * 2
    }
    return grains
  }