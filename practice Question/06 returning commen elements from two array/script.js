/** Write a function called findCommonElements that takes two arrays of numbers as input and returns a new array containing the common elements between the two arrays. If there are no common elements, the function should return an empty array.

For example, if the two input arrays are [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the findCommonElements function should return [3, 4, 5] since these are the elements that appear in both arrays. */


function findCommonElements(arr1, arr2) {
   
    const commenElement = arr1.filter((el) => arr2.includes(el)) //incudes method is used to check is the element exist in the array
    return commenElement;

}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [11, 2, 30, 4, 5]

const result = findCommonElements(arr1, arr2)
console.log(result); 