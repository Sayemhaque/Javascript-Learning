//** Exercise-1 **//

function createString(str) {
  if (str.length < 3) {
    return str;
  } else {
    //getting the first three character of the string array
    const firstThreeChar = str.split("").slice(0, 3).join("");

    //getting the last three character of the string array
    const LastThreeChar = str.split("").slice(-3).join("");
    return `${firstThreeChar}${LastThreeChar}`;
  }
}
console.log(createString("rakibmia"));

//More simple way
const createStringSimple = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(createStringSimple("helloMiaz"));
console.log(createStringSimple("Howryours"));
console.log(createStringSimple("he"));

//** Exercise-2 **//
function getFirstHalfStr(str) {
  const evenStr = str.slice(0, str.length / 2);
  return evenStr;
}

console.log(getFirstHalfStr("st4ert"));

/****** 
Exercise-3
-----------
 write a javascript program  to concatenate two string except their 
 first character.
*******/
function concatStr(str1, str2) {
  const strOneWithoutFirstChar = str1.slice(1);
  const strTwoWithoutFirstChar = str2.slice(1);
  return strOneWithoutFirstChar.concat(strTwoWithoutFirstChar);
}

console.log(concatStr("sayem", "rokib"));
console.log(concatStr("Backend", "Developer"));

/****** 
Exercise-4
-----------
 Given two values , write a javascript program find out 
 which one is nearest to 100
*******/
function nearestNumber(num1, num2) {
  return num1 - 100 < num2 - 100 ? num2 : num1;
}

const str = "sayem";
console.log(str.startsWith("r")); // false

/****** 
Exercise-5
-----------
who will get the cake?
*******/

const jim = 88;
const bela = 83;
const chinku = 93;

function getCake() {
  if (jim > bela && jim > chinku) {
    console.log("jim will get the cake");
  } else if (bela > jim && bela > chinku) {
    console.log("bela will get the cake");
  } else {
    console.log("Chinku will get the cake");
  }
}

getCake();

/****** 
Exercise-6
-----------
Write a function to reverse a string?
*******/

function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr("Davdi"));

/****** 
Exercise-7
-----------
Create a fibonacci series
*******/

const fibo = [0, 1];

for (let i = 2; i <= 15; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);

/****** 8
-----------
Remove duplicate items from an array
*******/

const users = [
  "mamun",
  "shopon",
  "shakil",
  "nasima",
  "manun",
  "junshna",
  "shopon",
  "shakil",
  "nasima",
];

function uniqueUsers(users) {
  const userArray = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (userArray.includes(user) !== true) {
      userArray.push(user);
    }
  }
  return userArray;
}

console.log(uniqueUsers(users));

function uniqueUsers(users) {
  const uniqueUsers = new Set(users);
  return Array.from(uniqueUsers);
}

/****** 
Exercise-9
-----------
small number from an array
*******/

const number = [12, 42, 56, 32, 623, 26, 221, 6, 2, 6, 242, 562];

function getSmallNumber(number) {
  let smallNumber = number[0];
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
    if (num < smallNumber) {
      smallNumber = num;
    }
  }
  return smallNumber;
}

console.log(getSmallNumber(number));

/****** 
Exercise-10
-----------
sum of all numbers
*******/

const points = [12, 10, 24];

function sumPoints(points) {
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    sum += points[i];
  }
  return sum;
}

console.log(sumPoints(points));

function sort() {
  return points.sort();
}

console.log(sort());


/****** 
Exercise-10
Get even digits 
*******/


const digis = [21,5,25,25,72,67,6,6,2,5,377,80,20]


function getEvenNum (digis) {
  let evenNum = [];
   for(let i = 0; i < digis.length; i++){
    const digit = digis[i]
    if(digit % 2 === 0){
       evenNum.push(digit)
    }
   }
   return evenNum.length
}


console.log(getEvenNum(digis))