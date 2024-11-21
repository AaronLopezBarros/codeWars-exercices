//INSTRUCTIONS

// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 4 or less.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INSTRUCCIONES

// ¡Hola amigo!

// Bienvenido a los siete mares.

// Eres el capitán de un barco pirata.

// Estás en batalla contra la marina real.

// Tienes cañones listos... ¿o no?

// Tu tarea es verificar si los artilleros están cargados y listos, si lo están: Fire!

// Si no están listos: Shiver me timbers!

// Sus artilleros para cada caso de prueba son 4 o menos.

// Cuando verifica si están listos, sus respuestas están en un diccionario y serán: ayeonay

// Disparar con menos de todos los artilleros listos no es óptimo (¡esto no es disparar a voluntad, es disparar por orden del capitán o caminar por la tabla, sucio lobo de mar!)

// Si todas las respuestas son 'sí', entonces ¡Fuego! si uno o más son 'no' entonces ¡Tiemblame de madera!


const cannonsReady = (gunners) => {
    
    if(gunners.Mike === 'nay' || gunners.Joe === 'nay' || gunners.Johnson === 'nay' || gunners.Peter === 'nay') {
       return 'Shiver me timbers!';
       } else {
       return 'Fire!'}
     
 }