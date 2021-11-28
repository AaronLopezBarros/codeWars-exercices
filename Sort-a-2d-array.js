//INSTRUCTIONS

// In the office we love to do amazing activities all together so we can share incredible experiences. This time, we decided to do bungee jumping. To decide the order we are going to jump, we need to create a sorter algorithm with the next rules.

// We will receive a list of names for each department, so at the end we will have a 2D array with different length

// We will return a normal array with all the names in the correct order

// The sequence will be to add all the names sorted by the length of the name (ASC). In case there are more than one with the same length, sort them alphabetically.

- - - - - - - - - - - - -

//INSTRUCCIONES

// En la oficina nos encanta hacer actividades increíbles todos juntos para que podamos compartir experiencias increíbles. Esta vez, decidimos hacer puenting. Para decidir el orden en el que vamos a saltar, necesitamos crear un algoritmo clasificador con las siguientes reglas.

// Recibiremos una lista de nombres para cada departamento, por lo que al final tendremos una matriz 2D con diferente longitud

// Devolveremos una matriz normal con todos los nombres en el orden correcto

// La secuencia será sumar todos los nombres ordenados por la longitud del nombre (ASC). En caso de que haya más de uno con la misma longitud, ordénelos alfabéticamente.

function namesSorter (departmentsArray) {
    let arr = []
   departmentsArray.forEach((array)=>{
     array.forEach((name)=>{
       arr.push(name)
     })
     
     arr.sort((a, b)=>{
    if(a.length < b.length){
      return -1
    }else if(a.length > b.length){
      return 1
    }else if(a < b){
      return -1
    }else{
      return 1
    }
       
  })
   })
    return arr
  }