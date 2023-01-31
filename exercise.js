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


