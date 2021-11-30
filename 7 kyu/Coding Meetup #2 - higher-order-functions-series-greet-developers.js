
//INSTRUCTIONS

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//   ];

- - - - - - - - - - - - 

// Se le dará una matriz de objetos (matrices asociativas en PHP) que representan datos sobre los desarrolladores que se han inscrito para asistir a la próxima reunión de codificación que esté organizando.

// Su tarea es devolver una matriz donde cada objeto tendrá una nueva propiedad 'saludo' con el siguiente valor de cadena:

// Hola, <firstName here>, ¿qué es lo que más te gusta de <language here>?

// Por ejemplo, dada la siguiente matriz de entrada:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];


function greetDevelopers(list) {
    let newList = list.map((item) => {
      return {...item, greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`}
    })
    return newList
   }