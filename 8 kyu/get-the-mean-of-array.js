//INSTRUCCTIONS

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Es el final del año académico, momento fatídico de tu informe escolar. Los promedios deben ser calculados. Todos los estudiantes vienen a ti y te suplican que les calcules el promedio. Fácil ! Solo necesitas escribir un guión.

// Devuelve el promedio de la matriz dada redondeado hacia abajo a su entero más cercano.

// La matriz nunca estará vacía.

function getAverage(marks){
    let total = 0
    for ( let i = 0; i < marks.length; i++ ){
      total += marks[i]
    }
      let avg = total / marks.length
      
      return Math.floor(avg)
    }