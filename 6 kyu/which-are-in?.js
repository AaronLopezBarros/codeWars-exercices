//INSTRUCTIONS

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

- - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Dadas dos matrices de cadenas a1y a2devuelve una matriz ordenada ren orden lexicográfico a1cuyas cadenas son subcadenas de cadenas de a2.

// Ejemplo 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// devoluciones ["arp", "live", "strong"]

// Ejemplo 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// devoluciones []

// Notas:
// Las matrices se escriben en notación "general". Consulte "Sus casos de prueba" para ver ejemplos en su idioma.
// En Shell bash a1y a2son cadenas. El retorno es una cadena donde las palabras están separadas por comas.
// Cuidado: rdebe estar sin duplicados.

function inArray(array1,array2){
    const arrayR = []
      array2.forEach((item) => {
        array1.forEach((string) => {
          if(item.includes(string) && !arrayR.includes(string)){
            arrayR.push(string)
          }
        })
      })
      return arrayR.sort()
    }