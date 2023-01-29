// *********** while loop ********//

var fruits = ["a" , "b" , "c"];
while (fruits.includes("j")) {
     console.log("ache")
}



// for loop
for(var i = 0; i < 10; i++){
     console.log(i)
}



// get all the array element using loop
var nums = [1,4,53,523,6354,2652,63,632,62]
var sum = 0;
for(var i = 0; i < nums.length; i++){
        sum += nums[i] 
        if(sum > 399) break;
}

console.log(sum)



