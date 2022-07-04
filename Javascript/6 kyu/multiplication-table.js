//INSTRUCCTIONS

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

- - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Su tarea es crear la tabla de multiplicar NxN, del tamaño proporcionado en el parámetro.

// por ejemplo, cuando se da sizees 3:

// 1 2 3
// 2 4 6
// 3 6 9
// por ejemplo, el valor de retorno debe ser: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let count = 1
    let result = []
    let array = []
    while(count <= size){
      for(i = 1; i <= size; i++){
        array.push(count * i)
      }
      result.push(array)
      array = []
      count ++
    }
    return result
  }