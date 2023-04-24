/* A javascript program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements. */
let array=[1,2,3,4,5,3,9,7,5,4]
function unique(array) {
    let uniqueItem=new Set(array)
    return uniqueItem
}
console.log(unique(array))