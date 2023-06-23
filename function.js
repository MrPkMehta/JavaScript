// //**** FUNCTIONS ****// //

// we use functions when we have to call same things again and again
 



//** FUNCTION WITHOUT PARAMETERS AND WITHOUT RETURN TYPE **//

// function declaration
function greet() {
    console.log("hi there");
    console.log("how are you");
}
//calling a function
greet();

/* OUTPUT -  hi there 
how are you */






//** FUNCTION WITH PARAMETERS **//

function sqr(x)  { //x - parameter is passed on the placeholder of function
    console.log(x*x);
}
sqr(10); //10- argument is passed when we call the function
/* OUTPUT -  100 */





//** FUNCTION WITH ONLY RETURN TYPE **//

function pw() {
    return "pw is the best for web developmwnt cources"
}
//Assing function to avariable p
let p = pw()
console.log(p);
//** OUTPUT - pw is the best for web developmwnt cources */





//** FUNCTION WITH PARAMETER AND RETURN TYPE **//

//now using return type
function sqr1(x) { //parameter is x
    return x*x; 
}
let a = sqr1(8)
console.log(a);
 /** OUTPUT - 64 */





//FUNCTION WITH PARAMETERS

function displayMessege(messegeToBeDisplayed) { //parameter is passed
    console.log(messegeToBeDisplayed);
}
//calling a function
displayMessege("I am a full stack web developer");
displayMessege("Now i am learning JavaSccript from Pw Skills");

/* OUTPUT - I am a full stack web developer
Now i am learning JavaSccript from Pw Skills */






// FUNCTION WITH DEFAULT PARAMETERS

//function declaration
function defaultParameters(displayMessege1 = "This is default messege when there is no any parameter is passed") {
    console.log(displayMessege1);
}
//calling a function
defaultParameters("I am happy to learn the full stack web development journey");
/*no any argument is passd so the default parameter messege is 
 to be displayed */
defaultParameters();

/* OUTPUT - I am happy to learn the full stack web development journey
This is default messege when there is no any parameter is passed */





//FUNCTIONS WITH TWO PARAMETERS

//function declaration

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}

// function call
let result = sumOfTwoNumbers(50, 60);
console.log(`the sum of two number is : ${result}`);

/* OUTPUT - the sum of two number is : 110 */





//FUNCTION WITH UNLIMITED NUMBER OF PARAMETERS

//when we want to access unknown number of parameters then we use arguments.length property

//Function Declaration
function sumOfAllParameters() {
    let sum1 = 0
    for (var i = 0; i < arguments.length; i++) sum1 += arguments[i]
    return sum1;
}

// Function Calling
let result1 = sumOfAllParameters(1, 2, 3, 4, 5, 6);
console.log(result1);

/** Output - 21 */







//ARROW FUNCTION

//1. One parameter, and a single return statements
const square1 = (c) => c * c;


//2. Multiple parameters, and a single return expression
const sumOfTwoNumber1 = (c, d) => c + d;

// 3. Multiple statement in fumction expression
const sum = (c, d) => {
    console.log(`Adding ${c} and ${d}:`);
    return c + d;
};

// 4. Returning an object
const sumAndDifference = (c, d) => ({sum: c + d, difference: c - d});

//Calling a function
let output1 = square1(10);
console.log(output1);  //OUTPUT - 100

let output2 = sumOfTwoNumber1(8, 9);
console.log(output2); //OUTPUT - 17

let output3 = sum(7, 10);
console.log(output3); //OUTPUT - 17

let output4 = sumAndDifference(9, 2);
console.log(output4); // OUTPUT - { sum: 11, difference: 7 }







//ANONYMOUS FUNCTION

//in anonymous function the function do not have name stll it is called by the variable, we have to assing the function into the variable.

let variableName = function (){
    console.log("Functions without name");
}
variableName();
/** OUTPUT - Functions without name */






//IMMEDIATELY INVOKED FUNCTION EXECUTION OR SELF INVOKING FUNCTION

//it means that the execute function immediatly after the function declaration, we do this by placing the pranthasis()

// demarits is that we do not use this function again in the program

(function (num0) {
    console.log(num0 * num0);
})(11);

/** OUTPUT - 121 */