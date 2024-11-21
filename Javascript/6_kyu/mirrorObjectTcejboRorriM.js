//INSTRUCTIONS

// Can you mirror the properties on an object?

// Given an object with properties with no value

// abc: -
// arara: -
// xyz: -
// Return a new object that have the properties with its mirrored key!

// abc: cba
// arara: arara
// xyz: zyx
// "You cannot change the original object, because if you did that the reflection would change."

- - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// ¿Puedes reflejar las propiedades de un objeto?

// Dado un objeto con propiedades sin valor

// abc: -
// arara: -
// xyz: -
// ¡Devuelva un nuevo objeto que tenga las propiedades con su clave reflejada!

// abc: cba
// arara: arara
// xyz: zyx
// "No puedes cambiar el objeto original, porque si lo hicieras, el reflejo cambiaría".

const mirror = obj => {
    const newObj = { ...obj };
    const keys = Object.keys(obj);
    
    keys.forEach(key => {
      const reversedKey = key.split('').reverse().join('')
      newObj[key] = reversedKey
    })
    return newObj
  };

