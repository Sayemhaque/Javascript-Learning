//** Exercise-1 **//

function createString(str) {
 if(str.length < 3) {
    return str;
 }else{
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
         str.length < 3 ? str : str.slice(0,3)+str.slice(-3)


console.log(createStringSimple("helloMiaz"))
console.log(createStringSimple("Howryours"))
console.log(createStringSimple("he"))





//** Exercise-2 **//
function getFirstHalfStr(str) {
    const evenStr = str.slice(0, str.length / 2);
    return evenStr
}

console.log(getFirstHalfStr("st4ert"))



/****** 
Exercise-3
-----------
 write a javascript program  to concatenate two string except their 
 first character.
*******/
function concatStr (str1,str2) {
     const strOneWithoutFirstChar = str1.slice(1);
     const strTwoWithoutFirstChar = str2.slice(1);
     return strOneWithoutFirstChar.concat(strTwoWithoutFirstChar);
}


console.log(concatStr("sayem","rokib"))
console.log(concatStr("Backend","Developer"))





/****** 
Exercise-4
-----------
 Given two values , write a javascript program find out 
 which one is nearest to 100
*******/
function nearestNumber (num1,num2){
       
    return (num1 - 100) < (num2 - 100) ? num2 : num1;
}

const str = "sayem";
console.log(str.startsWith("r")) // false



/****** 
Exercise-5
-----------
who will get the cake?
*******/

const jim = 88;
const bela = 83;
const chinku = 93;



function getCake () {
    if(jim > bela && jim > chinku){
        console.log("jim will get the cake")
    }
    else if(bela > jim && bela > chinku){
        console.log("bela will get the cake")
    }
    else{
        console.log("Chinku will get the cake")
    }
}


getCake()

/****** 
Exercise-6
-----------
Write a function to reverse a string?
*******/


function reverseStr(str){
    return str.split("").reverse().join("")
}


console.log(reverseStr("Davdi"))

/****** 
Exercise-7
-----------
Create a fibonacci series
*******/

const fibo = [0,1]

for(let i = 2; i <= 15; i++){
    fibo[i] = fibo[i -1] + fibo[i - 2]
   
    
}

console.log(fibo)


