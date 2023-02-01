const myString = "hello i am a string.Sayem is my name";

//with split() function we can convert a string to an array

console.log(myString.split(" ")) //will return an array of every word. 
//output : [ 'hello', 'i', 'am', 'a', 'string.Sayem', 'is', 'my', 'name' ];

console.log(myString.split("")) //will return an array of every alphabet.
/* output : [
    'h', 'e', 'l', 'l', 'o', ' ', 'i',
    ' ', 'a', 'm', ' ', 'a', ' ', 's',
    't', 'r', 'i', 'n', 'g', '.', 'S',
    'a', 'y', 'e', 'm', ' ', 'i', 's',
    ' ', 'm', 'y', ' ', 'n', 'a', 'm',
    'e'
  ] */
console.log(myString.split(".")) //will return an array of 2 sentence.
//output : [ 'hello i am a string', 'Sayem is my name' ]