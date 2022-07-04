//INSTRUCTIONS

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Escribe una función que aplane un Arrayde Arrayobjetos en un plano Array. Su función solo debe hacer un nivel de aplanamiento.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

let flatten = function (array){
    let newArr= []
    array.forEach((d1) => {
      if(typeof d1 !== "object"){
        newArr.push(d1)
      }else{
        d1.forEach((d2) =>{
          newArr.push(d2)
        })
      }
    })
    return newArr
  }