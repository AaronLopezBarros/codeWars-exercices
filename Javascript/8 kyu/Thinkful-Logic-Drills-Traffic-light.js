// INSTRUCTIONS


// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the 
// light should change to.For example, update_light('green') should return 'yellow'.

- - - - - - - - - - - - - -

//INSTRUCCIONES

// Estás escribiendo código para controlar los semáforos de tu ciudad. Necesita una función para manejar cada cambio de green, a yellow, a redy luego a de greennuevo.

// Complete la función que toma una cadena como argumento que representa el estado actual de la luz y devuelve una cadena que representa el estado al que debería cambiar la luz.

// Por ejemplo, update_light('green')debería volver 'yellow'.




function updateLight(current) {
    if(current === 'green'){
      return current = 'yellow'
    }else if(current === 'yellow'){
      return current = 'red'
    }else {
      return current = 'green'
    }
  }
