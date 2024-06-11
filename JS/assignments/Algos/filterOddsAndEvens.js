// Finish the function to filter out all odd numbers and all even numbers from an array of numbers.


// Example
// filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10]) should return [2,4,6,8,10]

// Hint


// Pseudo Code
    



function filterOddsAndEvens(arr){

let evens = []
let odds = []

for (let i = 0; i < arr.length; i++ ){
  
    if(arr[i] % 2 === 0){
        evens.push(arr[i])
    }
    else {
        odds.push(arr[i])
    }
        
    
}

console.log("evens", evens,"odds", odds)
}


console.log(filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10,11,12,13,14])); // [2,4,6,8,10]


