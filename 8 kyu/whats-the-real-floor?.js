//INSTRUCTIONS

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

- - - - - - - - - - - - - - - - - - - - - 

//INSTRCCIONES

// Los estadounidenses son gente extraña: en sus edificios, el primer piso es en realidad la planta baja y no hay piso 13 (debido a la superstición).

// Escribe una función que, dado un piso en el sistema americano, devuelve el piso en el sistema europeo.

// Con el primer piso reemplazado por la planta baja y el piso 13 eliminado, los números se mueven hacia abajo para tomar su lugar. En el caso de más de 13, se mueven hacia abajo en dos porque hay dos números omitidos debajo de ellos.

// Los sótanos (negativos) siguen siendo los mismos que el nivel universal.

// Mas informacion aqui

// Ejemplos de
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3


function getRealFloor(n) {
    if(n <= 0){
      return n
    }else if(n <= 13){
      return n -1
    }else {
      return n -2
    }
  }