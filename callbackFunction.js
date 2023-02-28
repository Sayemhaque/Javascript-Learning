// what is a callback function 

// Ans : A function that passed into another function as argument , and later on it gets invoked based on conditon complete its task

//Importance of callback function

/* Ans:so javascript is syncronous single threaded language that means it can extute a single thing at a time.Using callback functions we can have the power of asyncronous */


//Two issue i face white using callback is:

// 1. when i have so many callbacks it stated becomeing a callback hell callback inside a callback.
// 2. we lose the control of our programm because we have give contron of this function to other function.



function createOlder (payment) {
    console.log("oder created")
    return payment(function () {
        console.log("Thanks for ordering us")
    })
}


createOlder(function (success) {
    console.log("playment please")
    return success()
})



const person = [
    {
     name: "rahim",
     age: 22,
     friends: ["rahim,karim,jabbar"],
    },
    {
     name: "rahim2",
     age: 22,
     friends: ["rahim,karim,jabbar"],
    },
    {
    name: "rahim3",
    age: 22,
    friends: ["rahim,karim,jabbar"],
   },
   ];

   
   console.log(person.slice(1,2))

   const dreamGirl = [
    {
     sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
       {
        facebook: {
         link: "https://www.facebook.com/",
         followers: "12545",
         status: "single",
         friendsList: [{ name: "rofik" }, undefined],
        },
       },
       { instagram: "https://www.instagram.com/" },
      ],
     },
    },
   ];

   console.log(dreamGirl[0].sokina.contactInfo[1].instagram)