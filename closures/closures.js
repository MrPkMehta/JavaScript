/** Inner function have the ability to access  the outer function and the global value, which is calleed as lexical scoping
 * Outer function doesnot have the access of inner function.
 */

const myGlobalValue = 0

function func() {
    const val1 = 1;
    console.log(myGlobalValue, val1); 

    function innerFunc() {
        const val2 = 2;
        console.log(myGlobalValue, val1, val2);

        function innerOfInnerFunc() {
            const val3 = 3;
            console.log(myGlobalValue, val1, val2, val3);
        }
        innerOfInnerFunc()
    }
    innerFunc()
}
func()

/**OUTPUT - 0 1
0 1 2
0 1 2 3 */



function superFunc() {
    let outerValue = 'I am outer';
    function minorFunc() {
        console.log(outerValue);
    }
    minorFunc()
}
superFunc()

/** output - I am outer */


const errorMessege = "File Not Found"

setTimeout(function error() {
    console.log(errorMessege);
}, 1000)

/**OUTPUT - File Not Found */ //After one second