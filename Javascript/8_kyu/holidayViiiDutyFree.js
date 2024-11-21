//INSTRUCTIONS

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

- - - - - - - - - - - - - - - - - - - - - - - 

//INSTRUCCIONES

// El propósito de este kata es calcular cuántas botellas de whisky libre de impuestos tendría que comprar para que el ahorro sobre el precio normal de la calle cubriera efectivamente el costo de sus vacaciones.

// Se le dará el precio de la calle principal (normPrice), el descuento libre de impuestos (descuento) y el costo de las vacaciones.

// Por ejemplo, si una botella cuesta 10 £ normalmente y el descuento en duty free fuera del 10%, ahorraría 1 £ por botella. Si sus vacaciones cuestan £ 500, la respuesta que debe devolver sería 500.

// Todas las entradas serán números enteros. Devuelve un número entero. Redondear a la baja.



function dutyFree(normPrice, discount, hol){
    const priceDiscounted = (normPrice * discount) / 100
    const bottles = hol / priceDiscounted
    return Math.floor(bottles)
  }
