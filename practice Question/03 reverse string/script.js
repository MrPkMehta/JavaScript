/**
 * Write a JavaScript function that takes a string as input and returns the reverse of the string. For example, if the input is "hello", the function should return "olleh".
 */

function Reverse(str) {
    
    const reverseString = str.split("").reverse().join("")
    return reverseString;
}

const string = "priyamanshu";
const result = Reverse(string);
console.log(result);

/**
 * OUTPUT - uhsnamayirp
 */