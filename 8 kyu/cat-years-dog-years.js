//INSTRUCTIONS

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Tengo un gato y un perro.

// Los conseguí al mismo tiempo que gatito/cachorro. Eso fue humanYearshace años.

// Devuelve sus respectivas edades ahora como [ humanYears, catYears, dogYears]

// NOTAS:

// añoshumanos >= 1
// humanYears son solo números enteros
// Años del gato
// 15años de gato para el primer año
// +9años de gato por segundo año
// +4cat años por cada año después de eso
// Años del perro
// 15años de perro para el primer año
// +9años de perro por segundo año
// +5años de perro por cada año después de eso

let humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
  for(let i = 1; i <= humanYears; i++){
    if(i === 1){
      catYears += 15;
      dogYears += 15;
    }else if(i === 2){
      catYears += 9;
      dogYears += 9;
    }else {
      catYears += 4;
      dogYears += 5;
    }
  }
    return [humanYears, catYears, dogYears]
  }