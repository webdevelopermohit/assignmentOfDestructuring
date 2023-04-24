/*A javascript program that takes an array of numbers as input and you need to extract the first, second,
and last elements of the array. You decide to write a function that can accomplish this task using destructuring
assignment with an array. The function should take the array as an argument, destructure it into three variables
representing the first, second, and last elements, and then return an array with these three values. */
let array=[1,2,3,4,56]
let [first,second,...rest]=array;
let restelem=rest.pop()
let newarray=[first,second,restelem]
console.log(newarray);