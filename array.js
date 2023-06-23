// ARRAY//


// collection of data either similar tupe or different type,

let a = [1, "pk", "qwe", 5, "ram", false]
console.log(a);

let b = new Array ("asd", "qwe", "pkgh", 58, 5, true);
console.log(b);

/**
 * given array - [11,22,44,54,25,75]
 * indexse/position- defined from 0 - [0,1,2,3,4,5,6]
 */

console.log(a[2])  //access array of 2nd position
a[2] = 110;  //change the value of accessed array
console.log(a); //print the accessed aray





// Adding and removing on Arrays element

let arr = [1, 2, 3, 5, 7 ,8]
// if we have to add element at last position
arr.push(6, 10)
console.log(arr);

//to remove the last index element
arr.pop()
console.log(arr);

//to remove the element at 0th index
f = arr.shift()
console.log(f);
console.log(arr);

//to add the element at 0th index 
arr.unshift(33)
console.log(arr);

// to add two arrays
let a1 = [1, 2, 5, 6, 7]
let a2 = [20, 31, 45, 8, 20]
let a3 = a1.concat(a2)
console.log(a3);


//to convert the array into string
let s = a3.join(" ")
console.log(s);

//to reverse the array
a3.reverse()
console.log(a3);

// to find the index of any element of an Array
console.log(a3.indexOf(31));

// to make a new array from the element of the exsisting array``
let arr1 = [1,2,3,5,6,8,30,50];
console.log(arr1.slice(3, 7)); //hear 3 and 7 are the index position

//to add an array between any element or by removing the element
arr1.splice(3, 2, 22)//it caan delete 2 element after 3rd position 
console.log(arr1);