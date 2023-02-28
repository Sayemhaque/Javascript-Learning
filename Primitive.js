/* When we declare a primitive data type in javascript it stroed on a stack 
   computer uses the stack to store data and retrieve data.Primitve data 
   is indentified on the by the variable name we declared.If we create a primitive 
   variable it creates a room for that varibale.If we declared a new variable with same value
   it will create a new room for that variable.So both the variable does not have any relationship.
   */

let numOne = 100;

const numTwo = numOne;

numOne = 2;

console.log(numOne, numTwo);
