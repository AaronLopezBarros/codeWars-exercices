
//INSTRUCTIONS

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

- - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Se le dará una matriz de objetos (matrices asociativas en PHP) que representan datos sobre los desarrolladores que se han inscrito para asistir a la próxima reunión de codificación que esté organizando.

// Tu tarea es regresar:

// true si al menos un desarrollador de Ruby se ha registrado; o
// false si no habrá desarrolladores de Ruby.
// Por ejemplo, dada la siguiente matriz de entrada:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// su función debería regresar true.

// Notas:

// La matriz de entrada siempre será válida y estará formateada como en el ejemplo anterior.


function isRubyComing(list) {
    let newList = list.filter((item) => {
      return item.language === 'Ruby'
    })
   if(newList.length > 0){
     return true
   }else {
     return false
   }
  }