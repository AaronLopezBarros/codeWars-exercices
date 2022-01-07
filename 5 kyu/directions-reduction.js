//INSTRUCTIONS

// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

- - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Érase una vez, en un camino a través del viejo oeste montañoso salvaje , ...
// ... a un hombre se le dieron instrucciones para ir de un punto a otro. Las direcciones eran "NORTE", "SUR", "OESTE", "ESTE". Claramente, "NORTE" y "SUR" son opuestos, "OESTE" y "ESTE" también.

// Ir en una dirección y regresar en la dirección opuesta de inmediato es un esfuerzo innecesario. Dado que este es el salvaje oeste, con un clima espantoso y poca agua, es importante ahorrar algo de energía, de lo contrario, podría morir de sed.

// Cómo crucé un desierto montañoso de manera inteligente.
// Las instrucciones dadas al hombre son, por ejemplo, las siguientes (según el idioma):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// Inmediatamente puede ver que ir "NORTE" e inmediatamente "SUR" no es razonable, ¡mejor quédese en el mismo lugar! Entonces la tarea es darle al hombre una versión simplificada del plan. Un mejor plan en este caso es simplemente:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Otros ejemplos:
// En ["NORTH", "SOUTH", "EAST", "WEST"], la dirección "NORTH" + "SOUTH"va hacia el norte y regresa de inmediato .

// La ruta se convierte ["EAST", "WEST"], ahora "EAST"y se "WEST"aniquilan entre sí, por lo tanto, el resultado final es [](nulo en Clojure).

// En ["NORTE", "ESTE", "OESTE", "SUR", "OESTE", "OESTE"], "NORTE" y "SUR" no son directamente opuestos, sino que se vuelven directamente opuestos después de la reducción de "ESTE" y "OESTE", por lo que todo el camino se puede reducir a ["OESTE", "OESTE"].

// Tarea
// Escriba una función dirReducque tome una matriz de cadenas y devuelva una matriz de cadenas con las direcciones innecesarias eliminadas (W <-> E o S <-> N una al lado de la otra ).

// La versión de Haskell lleva una lista de direcciones con data Direction = North | East | West | South.
// La versión de Clojure devuelve nil cuando la ruta se reduce a nada.
// La versión Rust tiene una porción de enum Direction {North, East, West, South}.
// Vea más ejemplos en "Pruebas de muestra":
// Notas
// No todos los caminos pueden simplificarse. El camino ["NORTE", "OESTE", "SUR", "ESTE"] no es reducible. "NORTE" y "OESTE", "OESTE" y "SUR", "SUR" y "ESTE" no son directamente opuestos entre sí y no pueden convertirse en tales. Por lo tanto, la ruta de resultado es en sí misma: ["NORTE", "OESTE", "SUR", "ESTE"].
// Si desea traducir, pregunte antes de traducir.

function dirReduc(arr){
    const directions = []
    const opposites = {
      'NORTH' : 'SOUTH',
      'SOUTH' : 'NORTH',
      'EAST'  : 'WEST',
      'WEST'  : 'EAST'
    }
    for(i = 0; i < arr.length; i++){
      if(arr[i] === opposites[arr[i + 1]]){
        i+=2
      } 
      if(directions[directions.length -1] !== opposites[arr[i]]){
        directions.push(arr[i])
      } else {
        directions.pop()
      }
    }
    return directions
    }