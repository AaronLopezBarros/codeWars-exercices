
//INSTRUCTIONS

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

- - - - - - - - - - - - - - 

//INSTRUCCIONES

// Se le proporcionará una serie de objetos (hashes en ruby) que representan datos sobre los desarrolladores que se han inscrito para asistir a la reunión de codificación que está organizando por primera vez.

// Su tarea es devolver el número de desarrolladores de JavaScript procedentes de Europa .

// Por ejemplo, dada la siguiente lista:


function countDevelopers(list) {
    let counter = 0
    list.forEach((item)=>{
      if(item.continent === 'Europe' && item.language === 'JavaScript'){
        counter += 1
      }
    })
    return counter
  }
  