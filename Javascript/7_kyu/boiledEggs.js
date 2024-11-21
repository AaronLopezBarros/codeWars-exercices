//INSTRUCCTIONS

// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
// Example (Input --> Output)
// 0 --> 0
// 5 --> 5
// 10 --> 10

- - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Eres el mejor chef del mundo. ¡Nadie hierve huevos como tú! Su restaurante siempre está lleno de invitados, a los que les encantan los huevos duros. Pero cuando hay un mayor pedido de huevos duros, necesita algo de tiempo, porque solo tiene una olla para su trabajo. ¿Cuanto tiempo necesitas?

// Tu tarea
// Implemente una función, que toma un número entero no negativo, que representa la cantidad de huevos a hervir. Debe devolver el tiempo en minutos (entero), que se tarda en hervir todos los huevos.

// Reglas
// puedes poner como máximo 8 huevos en la olla a la vez
// se necesitan 5 minutos para hervir un huevo
// asumimos, que el agua está hirviendo todo el tiempo (no hay tiempo para calentar)
// Para simplificar, tampoco consideramos el tiempo que lleva poner los huevos en la olla o sacarlos.
// Ejemplo (Entrada -> Salida)
// 0 --> 0
// 5 --> 5
// 10 --> 10


function cookingTime(eggs) {
    let mins = 0
    for(i = 0; i < eggs; i += 8){
      mins += 5
    }
    return mins
  }
