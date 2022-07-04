//INSTRUCTIONS

// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

- - - - - - - - - - - - 

//INSTRUCCIONES

// Johnny es agricultor y anualmente celebra una convención de agricultores de remolacha "Suelta la remolacha".

// Todos los años toma fotografías de los agricultores dándose la mano. Johnny sabe que no hay dos granjeros que se den la mano más de una vez. También sabe que algunas de las posibles combinaciones de apretones de manos pueden no suceder.

// Sin embargo, a Johnny le gustaría saber la cantidad mínima de personas que participaron este año contando todos los apretones de manos.

// Ayude a Johnny escribiendo una función, que toma la cantidad de apretones de manos y devuelve la cantidad mínima de personas necesarias para realizar estos apretones de manos (un par de apretones de manos de agricultores solo una vez).

function getParticipants(handshakes){
    let greetings = 0
    let people = 0
    if (handshakes === 0) {return 1}
    while (greetings < handshakes) {
      greetings = people + greetings
      people++
    }
     return people
   }