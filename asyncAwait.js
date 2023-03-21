let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};


const order = (fruitName, production) => {
    setTimeout(function () {
        console.log(`${stocks.Fruits[fruitName]} was selected`)
        // Order placed. Call production to start
        production()
    }, 2000)

}


const production = () => {
    setTimeout(() => {
        console.log("Production started")
        setTimeout(() => {
            console.log("Fruits has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
                setTimeout(() => {
                    console.log("starts the machine")
                    setTimeout(() => {
                        console.log(`ice cream placed on ${stocks.holder[0]}`)
                        setTimeout(() => {
                            console.log(`added ${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log("Serve the ice creame")
                            }, 1000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 0000)
}

order("0", production)

// this is callback hell