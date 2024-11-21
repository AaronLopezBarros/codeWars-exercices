//INSTRUCTIONS

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// Un niño está jugando con una pelota en el piso n de un edificio alto. Se conoce la altura de este piso, h .

// Deja caer la pelota por la ventana. La pelota rebota (por ejemplo), a dos tercios de su altura (un rebote de 0,66).

// Su madre mira por una ventana a 1,5 metros del suelo.

// ¿Cuántas veces verá la madre pasar la pelota frente a su ventana (incluyendo cuando está cayendo y rebotando?

// Se deben cumplir tres condiciones para que un experimento sea válido:
// El parámetro flotante "h" en metros debe ser mayor que 0
// El parámetro flotante "rebote" debe ser mayor que 0 y menor que 1
// El parámetro flotante "ventana" debe ser menor que h.
// Si se cumplen las tres condiciones anteriores, devuelva un número entero positivo; de lo contrario, devuelva -1.

// Nota:
// La pelota solo se puede ver si la altura de la pelota que rebota es estrictamente mayor que el parámetro de la ventana.

// Ejemplos:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h ) return -1
    
    let count = 1
    let reboundHeight = bounce * h
    while(reboundHeight > window){
      count += 2
      reboundHeight *= bounce
    }
    return count
  }