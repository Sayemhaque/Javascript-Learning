var fruits = ["Banana", "Apple", "Guava", "papaya"];

// How to access an element from an array?
// first element is 0 index
console.log(fruits[3]); //papaya

// Jow to know the length of an array ?
// Array.length
console.log(fruits.length);

// How to add an new element to an array ?
// Array.push("what we want to add") adds an new element to after the last element of the array
// Array.unshift("what we want to add") adds  an new element to the first index of the array
fruits.push("watermelon");
console.log(fruits); // output: [ 'Banana', 'Apple', 'Guava', 'papaya', 'watermelon' ];
fruits.unshift("coconut");
console.log(fruits); // [ 'coconut', 'Banana', 'Apple', 'Guava', 'papaya', 'watermelon' ]

//  ***********************************************************

/** ****/

//How to remove an element from an array?
//Array.pop() removes the last element from an array
fruits.pop();
console.log(fruits); // [ 'coconut', 'Banana', 'Apple', 'Guava', 'papaya' ]

fruits.shift(); // removes the first elements from an array
console.log(fruits); // [ 'Banana', 'Apple', 'Guava', 'papaya' ]

// How to replace an array element ?
var newEle = "Mangoes";
fruits[3] = newEle;
console.log(fruits); // replaces papaya to Mangoes ,[ 'Banana', 'Apple', 'Guava', 'Mangoes' ]

// How to find the index of an array element ?
// Array.indexOf("which element index we wants to know") if its return -1 that means this array doesn't have this item.
var indexOfELement = fruits.indexOf("Apple");
console.log(indexOfELement); //1

//How to Slice an array
var sliced = fruits.slice(2);
/*[ 'Banana', 'Apple', 'Guava', 'Mangoes' ] in this fruits array 
"Guava" is the 2nd index so the 
slice function started slicing from the 2nd index as we told & sliced
till the end of the array*/
console.log(sliced); //output:['Guava', 'Mangoes']

var sliced = fruits.slice(1, 2);
/*Its started slicing from the first index of the array till 2nd index */
console.log(sliced); //output: [ 'Apple' ]
