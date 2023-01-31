// object
var student = {
   //key : //value
    name:"Md sayem",
    roll:2,
    class:10,
    performance:"Good"
}
// set new value
student.name = "Md sayem Mia"
//access object value
console.log(student["roll"])
//get the object keys
console.log(Object.keys(student))
//get the object keys
console.log(Object.values(student))
console.log(student)


//for in loop

for(var propertyName in student){
    console.log(propertyName)
}


function evenOdd (num) {
    if(num % 2 === 0){
        console.log("Even Number")
    }
    else{
        console.log("Odd Number")
    }
}

evenOdd(103)