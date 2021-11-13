//INSTRUCTIONS

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]




function getEvenNumbers(numbersArray){
    const newArray = numbersArray.filter((number)=>{
      if(number % 2 === 0){
        return true
      }
    })
      return newArray
    }