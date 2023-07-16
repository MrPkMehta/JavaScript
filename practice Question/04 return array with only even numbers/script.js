/**
 * Implement a JavaScript function that takes an array of numbers as input and returns a new array that contains only the even numbers from the original array. For example, if the input array is [1, 2, 3, 4, 5], the function should return [2, 4].
 */

function evenNumbers(arr){

    const evenArray = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenArray.push(arr[i])
           
        }
        
    }
    return evenArray;
}

const arr1 = [1, 4, 9, 6, 8, 10]
result = evenNumbers(arr1)
console.log(result);

/**OUTPUT - [ 4, 6, 8, 10 ] */




// alternate and direct using filter method method

function evenNum(arra) {
    const evenNUMB = arra.filter(el => el % 2 === 0);
    return evenNUMB;
}

const arr2 = [1, 4, 8, 2, 3, 1, 0, 7, 9]
const result1 = evenNum(arr2);
console.log(result1); 

/**OUTPUT - [ 4, 8, 2, 0 ] */