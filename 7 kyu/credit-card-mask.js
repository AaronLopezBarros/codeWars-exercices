// INSTRUCTIONS

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Por lo general, cuando compra algo, se le pregunta si su número de tarjeta de crédito, número de teléfono o la respuesta a su pregunta más secreta sigue siendo correcta. Sin embargo, dado que alguien podría mirar por encima de su hombro, no desea que eso se muestre en su pantalla. En cambio, lo enmascaramos.

// Su tarea es escribir una función maskifyque cambie todos los caracteres excepto los últimos cuatro a '#'.

// Ejemplos
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify(cc) {
    if(cc.length < 5)
      return cc;
    return '#'.repeat(cc.length-4) + cc.substring(cc.length-4);
  }