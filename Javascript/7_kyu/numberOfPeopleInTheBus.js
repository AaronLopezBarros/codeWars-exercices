//INSTRUCTIONS

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

- - - - - - - - - - - - - - - -

//INSTRUCCIONES

// Hay un autobús en movimiento en la ciudad, y toma y deja a algunas personas en cada parada de autobús.

// Se le proporciona una lista (o matriz) de pares de enteros. Los elementos de cada par representan el número de personas que suben al autobús (el primer elemento) y el número de personas que se bajan del autobús (el segundo elemento) en una parada de autobús.

// Su tarea es devolver el número de personas que todavía están en el autobús después de la última estación de autobuses (después de la última matriz). A pesar de que es la última parada de autobús, el autobús no está vacío y algunas personas todavía están en el autobús, y probablemente estén durmiendo allí: D

// Eche un vistazo a los casos de prueba.

// Tenga en cuenta que los casos de prueba garantizan que la cantidad de personas en el autobús sea siempre> = 0. Por lo tanto, el número entero devuelto no puede ser negativo.

// El segundo valor en la primera matriz de enteros es 0, ya que el bus está vacío en la primera parada del bus.


var number = function(busStops){
    let passengers = 0
    busStops.forEach((stop)=>{
      let calculatePassengers = stop[0] - stop[1]
      passengers += calculatePassengers
    })
    return passengers
  }