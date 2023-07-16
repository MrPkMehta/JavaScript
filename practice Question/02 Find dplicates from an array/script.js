/**Write a function called removeDuplicates that takes an array of strings as input and returns a new array with duplicate strings removed, while maintaining the original order of elements. If there are no duplicate strings, the function should return the original array as it is.

For example, if the input array is ["apple", "orange", "banana", "apple", "pear", "banana"], the removeDuplicates function should return ["apple", "orange", "banana", "pear"] since the duplicate strings "apple" and "banana" have been removed while preserving the original order.

You can assume that the input array will only contain strings. */



function removeDuplicates(array) {
    //Array.from is used to convert the object into array
    return Array.from(new Set(array)) 
}

const fruits = ["apple", "banana", "orange", "mango", "apple", "orange", "banana", "apple", "pear"]

const uniqueArray = removeDuplicates(fruits)
console.log(uniqueArray);

/** OUTPUT -[ 'apple', 'banana', 'orange', 'mango', 'pear' ] */