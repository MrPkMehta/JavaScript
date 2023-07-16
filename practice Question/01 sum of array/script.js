/**
 * Write a JavaScript program that takes an array of numbers as input and returns the sum of all the numbers in the array.
For example, if the input array is [1, 2, 3, 4, 5], the program should return 15 (1 + 2 + 3 + 4 + 5 = 15). You can assume that the input array will only contain numbers.
 */

function sumOfAllNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

const arr1 = [4, 5, 8, 9, 20, 10, 32];
const result = sumOfAllNum(arr1)
console.log(result);

console.log(arr1[3]);

/**
 * OUTPUT - 88
9
 */