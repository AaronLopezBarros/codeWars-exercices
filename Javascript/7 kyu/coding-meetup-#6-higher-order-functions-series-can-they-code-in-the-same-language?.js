//INSTRUCTIONS

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.

// Notes:

// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.

- - - - - - - - - - - - 

//INSTRUCCIONES

// Se le dará una matriz de objetos (matrices asociativas en PHP) que representan datos sobre los desarrolladores que se han inscrito para asistir a la próxima reunión de codificación que esté organizando.

// Tu tarea es regresar:

// truesi todos los desarrolladores de la lista codifican en el mismo idioma; o
// false de lo contrario.
// Por ejemplo, dada la siguiente matriz de entrada:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// su función debería regresar true.

// Notas:

// Las cadenas que representan un idioma determinado siempre se formatearán de la misma manera (por ejemplo, 'JavaScript' siempre se formateará con 'J' y 'S' en mayúsculas
// La matriz de entrada siempre será válida y estará formateada como en el ejemplo anterior.

function isSameLanguage(list) {
    return list.every((item)=>{return item.language === list[0].language})
   }