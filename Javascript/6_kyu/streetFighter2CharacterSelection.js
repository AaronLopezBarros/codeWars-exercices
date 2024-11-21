//INSTRUCTIONS

// Short Intro

// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

// Can you solve this kata? Suuure-You-Can!

// UPDATE: a new kata's harder version is available here.

// The Kata

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

// 1.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

// 2.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Result:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

- - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Introducción corta

// Algunos de ustedes recordarán pasar las tardes jugando Street Fighter 2 en algún Arcade allá por los 90 o emularlo hoy en día con los numerosos emuladores para consolas retro.

// ¿Puedes resolver este kata? ¡Seguro que puedes!

// ACTUALIZAR: una nueva versión más difícil de kata está disponible aquí .

// El kata

// Diseño de cuadrícula de selección en texto:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Aporte

// la lista de personajes del juego en una cuadrícula de 2x6;
// la posición inicial del cursor de selección (arriba a la izquierda es (0,0));
// una lista de movimientos del cursor de selección (que son up, down, left, right);
// Producción

// la lista de personajes que han sido colocados por el cursor de selección después de todos los movimientos (ordenados y con repetición, todos los que se encuentran después de un movimiento, ya sea exitoso o no, ver pruebas);
// Reglas

// El cursor de selección es circular horizontalmente pero no verticalmente .

// Como recordarás del juego, el cursor de selección gira horizontalmente pero no verticalmente; eso significa que si estoy en el extremo izquierdo y trato de ir a la izquierda nuevamente, llegaré al extremo derecho (ejemplos: de Ryu a Vega, de Ken a M. Bison) y viceversa, de extremo derecho a izquierdo.

// En cambio, si trato de ir más arriba desde lo más arriba o más abajo desde lo más abajo, simplemente me quedaré donde estoy ubicado (ejemplos: no puedes ir más abajo que la fila más baja: Ken, Chun Li, Zangief, Dhalsim, Sagat y M.Bison en la imagen de arriba; no puedes ir más arriba que la fila más alta: Ryu, E.Honda, Blanka, Guile, Balrog y Vega en la imagen de arriba).

// Prueba

// Para esta versión fácil, el diseño de la cuadrícula de los luchadores y la posición inicial siempre será la misma en todas las pruebas, solo cambia la lista de movimientos.

// Aviso : es posible que cambiar algunos de los datos de entrada no le ayude.

// Ejemplos de

// 1.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// entonces debería obtener:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// como los personajes que he estado flotando con el cursor de selección durante mis movimientos. Aviso: Ryu es el primero solo porque "falla" el primero. up Consulte los casos de prueba para obtener más ejemplos.

// 2.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Resultado:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

function streetFighterSelection(fighters, position, moves){
    let positionY = position[0]
    let positionX = position[1]
    const characters = []
    
    moves.forEach((move) => {
      if(move === 'up')    positionY = 0
      if(move === 'down')  positionY = 1
      if(move === 'right'){
        positionX += 1
        if(positionX === 6) positionX = 0
      }
      if(move === 'left'){
        positionX -= 1
        if(positionX === -1) positionX = 5
      }
      characters.push(fighters[positionY][positionX])
    })
    return characters;
  }

