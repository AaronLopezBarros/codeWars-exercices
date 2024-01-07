// INTRUCTIONS

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

- - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Cuente el número de duplicados
// Escriba una función que devuelva el recuento de caracteres alfabéticos y dígitos numéricos distintos que no distinguen entre mayúsculas y minúsculas y que aparecen más de una vez en la cadena de entrada. Se puede suponer que la cadena de entrada contiene sólo alfabetos (tanto mayúsculas como minúsculas) y dígitos numéricos.

// Ejemplo
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibilidad" -> 1 # 'i' occurs six times
// "Indivisibilidades" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



function duplicateCount(text) {
  const textToUpperCase = text.toUpperCase();
  const textToArray = textToUpperCase.split("");
  let count = 0;

  const countDuplicates = textToArray.reduce(
    (prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),
    {}
  );

  for (const value in countDuplicates) {
    if (countDuplicates[value] !== 1) count++;
  }

  return count;
}
