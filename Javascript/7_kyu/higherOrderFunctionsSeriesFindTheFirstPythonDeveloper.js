
//INSTRUCTIONS

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// your function should return Victoria, Puerto Rico.

// Notes:

// The input array will always be valid and formatted as in the example above.

- - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Se le dará una matriz de objetos (matrices asociativas en PHP) que representan datos sobre los desarrolladores que se han inscrito para asistir a la próxima reunión de codificación que esté organizando. La lista está ordenada según quién se registró primero.

// Su tarea es devolver una de las siguientes cadenas:

// < firstName here >, < country here > del primer desarrollador de Python que se ha registrado; o
// There will be no Python developers si no se ha registrado ningún desarrollador de Python.
// Por ejemplo, dada la siguiente matriz de entrada:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// su función debería regresar Victoria, Puerto Rico.

// Notas:

// La matriz de entrada siempre será válida y estará formateada como en el ejemplo anterior.


function getFirstPython(list) {
    let newList = list.filter((item)=>{return item.language === 'Python'})
    if(newList.length > 0){
      return `${newList[0].firstName}, ${newList[0].country}`
    } else{
     return 'There will be no Python developers'
    }
  }