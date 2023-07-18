
/** CALLBACK - date 27th march// not understand
 * The function which escept the argument as the function is called Hof, and the function which is passed as an argumrnt is called callback function*/

function h(x, fn) {
    // h-> higher order gunction
    //fn -> callback function
    console.log(x*x);
    fn()
}

//CALLING THE FUNCTION
h(10, function() {
    console.log("Done with callback");
})


/** OUTPUT - 100
Done with callback */



// function declaration which expect one string and one function
function student(name, uidFn) {
     console.log(name);
    uidFn()
}

//function calling
student("priyamanshu", function() {
    console.log("UID is: 22BCS17266" );
})

/** OUTPUT - priyamanshu
UID is: 22BCS17266 */




console.log("start");
setTimeout( function asyn(str) {
    //hear setTimeout is a hof which expect the call back function and hear the callback function is asyn()
    console.log("execute after 3 sec");
}, 3000)
console.log("end");

/** OUTPUT - start
end
execute after 3 sec */