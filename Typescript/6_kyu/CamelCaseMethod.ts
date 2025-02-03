// INSTRUCTIONS

// Write a method (or function, depending on the language) that converts a string to camelCase,
// that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

- - - - - - - - - - - - - - - -

// INSTRUCCIONES

// Escribe un método (o función, dependiendo del idioma) que convierta una cadena a camelCase,
// es decir, que todas las palabras tengan su primera letra en mayúscula y se eliminen los espacios.

// Ejemplos (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// ¡No olvides puntuar esta kata! Gracias :)

function camelCase(str: string): string {
  return str
    .split(" ")
    .map(
      (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
