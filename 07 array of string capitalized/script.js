/**Write a function called capitalizeWords that takes an array of strings as input and returns a new array with each word capitalized.

For example, if the input array is ["hello", "world", "javascript"], the capitalizeWords function should return ["Hello", "World", "Javascript"]. */



function capitalizeWords(arr) {
    //hear the map method is used to iterate over the each element of the array of string
    //charAt (0) means it access the eacgh string at 0th index 
    //and then convert is to the the upper case usinfg touppercase 
    //str.slice(1) is use to slice the elment from the 1st index and add them 
    return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
}

//function calling
const arrOfString = ["love", "you", "miss", "you"]
const result = capitalizeWords(arrOfString);
console.log(result);


/** OUTPUT = [ 'Love', 'You', 'Miss', 'You' ] */




// Array of string to all word capital

function allCapital(array) {
    return array.map((str) => str.toUpperCase())
}

const arrOfStrings = ['the', 'quick', 'brown', 'fox'];
const result1 = allCapital(arrOfStrings)

console.log(result1);


/** OUTPUT = [ 'THE', 'QUICK', 'BROWN', 'FOX' ] */