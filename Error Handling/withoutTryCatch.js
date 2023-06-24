
// it will directly throw the error
let x = undefined;
console.log(x[2]);


//OUTPUT: 
/** console.log(x[2]);
             ^

TypeError: Cannot read properties of undefined (reading '2')
    at Object.<anonymous> (P:\Web Development\javascript\script.js:2:14)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
 */