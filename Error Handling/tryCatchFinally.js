
/** Block of code where runtime error might be come is must be written inside the try lock, catch block is executed only after the try block if error is encountered in try block, without try block catch block does not exist, finally block is always excueted*/
/** if we want to see what is the error then catch statement allow us to pass the parameter and log it as shown below */
try {
    let x = undefined;
    console.log(x[0]);
} catch {
    console.log("Error handling in catch");

} finally {
    console.log("Finally is always executed");
}


/** OUTPUT- Error handling in catch
Finally is always executed */


try {
    let x = undefined;
    console.log(x[0]);
} catch(err) {
    console.log("Error handling in catch",err);

} finally {
    console.log("Finally is always executed");
}


/** Error handling in catch TypeError: Cannot read properties of undefined (reading '0')
    at Object.<anonymous> (P:\Web Development\javascript\script.js:21:18)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
Finally is always executed */