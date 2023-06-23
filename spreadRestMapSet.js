
//SPREAD
// spread the each element of the array and then join

const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// const threeArray = oneArray.concat(twoArray);
// const threeArray = [oneArray, twoArray]
const threeArray =[ ...oneArray, ...twoArray ] //spread operator is used
console.log(threeArray);

/**OUTPUT-[
  1, 2, 3, 4,
  5, 6, 7, 8
] */

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// REST
//conbine the object to array

function manyArguments(){
    let args = Array.from(arguments);
    let finalArr = args.map(e => e);
    console.log(finalArr);
}


function manyArguments2(...args){
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
}


manyArguments(1,2,3,4,5,8)
manyArguments2(5,5,8,6,78,2)

/**OUTPUT- [ 1, 2, 3, 4, 5, 8 ]
object
[ 5, 5, 8, 6, 78, 2 ] */


//++++++++++++++++++++++++++++++++++

const names = ["superman", "flash"]
const newnames = ["batmen", ...names, "thor"]  //spread operator iterate on each element of the array an dthen form a new array
const newNewnames = names.concat(newnames);
newNewnames.push("altheston")
newNewnames.unshift("alle")

console.log(newNewnames);
/**OUTPUT -[
  'alle',     'superman',
  'flash',    'batmen',
  'superman', 'flash',
  'thor',     'altheston'
] */


//+++++++++++++++++++++++++++++

const sitenames = "pwskills";
console.log([...sitenames]);  //spered opertor, spread the each crractor of the string  and convert it into array of charactor.

/**OUTPUT - [
  'p', 'w', 's',
  'k', 'i', 'l',
  'l', 's'
] */



//+++++++++++++++++++++++++++++
function pwskills(...values) {//rest operator, is generallly used with function paramater
    return values
}

console.log(pwskills("superman", "batmen")); 
/**Output- [ 'superman', 'batmen' ] */





function setdifference(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)))
    //it will check that how many element present in set 1 is unique from the set 2 and display them.
}

const set1 = new Set([1,2,3,4,5,8])
const set2 = new Set([2,3,4,6,7,9])

let difference = setdifference(set1, set2);
console.log(difference);
/**OUTPUT- [ Set(3) { 1, 5, 8 } ] */

