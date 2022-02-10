//INSTRUCTIONS

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// ¡Todos los animales están teniendo un festín! Cada animal trae un plato. Solo hay una regla: el plato debe comenzar y terminar con las mismas letras que el nombre del animal. Por ejemplo, la gran garza azul trae pan de ajo y el carbonero trae pastel de chocolate.

// Escribe una función feastque tome el nombre del animal y el plato como argumentos y devuelva verdadero o falso para indicar si la bestia puede llevar el plato al banquete.

// Suponga que beasty dishsiempre son cadenas en minúsculas y que cada una tiene al menos dos letras. beasty dishpuede contener guiones y espacios, pero estos no aparecerán al principio o al final de la cadena. No contendrán numerales.


function feast(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) return true;
    return false;
  }