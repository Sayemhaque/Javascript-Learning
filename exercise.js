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