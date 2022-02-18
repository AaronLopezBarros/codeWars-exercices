//INSTRUCTIONS

// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
// Good luck and try to be as creative as possible!

- - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Debe crear una función, helloWorldque devolverá la cadena Hello, World!sin usar cadenas sin formato. Esto incluye comillas, comillas dobles y cadenas de plantilla. Sin embargo, puede usar el Stringconstructor y cualquier función relacionada.

// No puede usar lo siguiente:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
// ¡Buena suerte y trata de ser lo más creativo posible!

const helloWorld = () => {
    return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
  };