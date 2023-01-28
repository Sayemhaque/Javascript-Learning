var fruits = ["Banana" , "Apple" , "Guava", "papaya"];

// How to accses an element from an array?
// first element is 0 index
console.log(fruits[3]) //papaya


// Jow to know the length of an array ?
// Array.length
console.log(fruits.length)


// How to add an new element to an array ?
// Array.push("what we want to add") adds an new element to after the last element of the array
// Array.unshit("what we want to add") adds  an new elemet to the first index of the array
fruits.push("watermalon")
console.log(fruits)  // output: [ 'Banana', 'Apple', 'Guava', 'papaya', 'watermalon' ];
fruits.unshift("coconut") 
console.log(fruits) // [ 'coconut', 'Banana', 'Apple', 'Guava', 'papaya', 'watermalon' ]


//  ***********************************************************  
  
/** ****/

//How to remove an element fron an array?
//Array.pop() removes the last element from an array
fruits.pop() 
console.log(fruits)  // [ 'coconut', 'Banana', 'Apple', 'Guava', 'papaya' ]

fruits.shift()  // removes the first elements from an array
console.log(fruits) // [ 'Banana', 'Apple', 'Guava', 'papaya' ]


// How to replace an array element ?
var newEle = "Mangoes";
fruits[3] = newEle;
console.log(fruits)   // replaces papaya to Mangoes ,[ 'Banana', 'Apple', 'Guava', 'Mangoes' ] 

// How to find the index of an array element ?
// Array.indexOf("which element index we wants to know")
var indexOfELement = fruits.indexOf("Apple")
console.log(indexOfELement) //1