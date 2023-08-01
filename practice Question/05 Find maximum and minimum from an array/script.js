/**Write a function called find MaxMin that takes an array of numbers as input and returns an object containing the maximum and minimum values from the array.

For example, if the input array is [2, 4, 1, 7, 5], the findMaxMin function should return an object like this: { max: 7, min: 1 }, since 7 is the maximum value and 1 is the minimum value in the array. */


function findMaxMin (arr) {
    const max = Math.max(...arr); //rest operator is used to collect all the elements from the array and then check the max value
    const min = Math.min(...arr);

    return {max, min} //object is created using curly braces
}


const array = [5, 20, 85, 24, 3, 30, 74, 15];
const result = findMaxMin(array);

console.log(result);


/** OUTPUT - { max: 85, min: 3 }*/