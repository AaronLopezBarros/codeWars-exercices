//INSTRUCTIONS

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// En este kata, creará una función que toma una lista de enteros y cadenas no negativos y devuelve una nueva lista con las cadenas filtradas.

// Ejemplo
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    const filteredArray = l.filter((item) => {
      return typeof item === "number"
    })
    return filteredArray
  }