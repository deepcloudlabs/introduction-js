function fun(x, y, z) {
    if(arguments.length !== 3)
        throw "You should provide exactly 3 values!"
/*    for (let arg of arguments) {
        if (arg === null)
            throw "You should provide a non-null value!"
        else if (arg === undefined)
            throw "You should provide a valid value!"
        else if (typeof arg !== "number")
            throw "You should provide a number!"
        else if (isNaN(arg))
            throw "You should provide a valid number!"
    }*/
    return x + y * z;
}

let result = fun(10,20,"thirty")
console.log(result)
