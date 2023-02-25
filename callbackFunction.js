// what is a callback function 

// Ans : A function that passed into another function as argument , and later on it gets invoked based on conditon complete its task.

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