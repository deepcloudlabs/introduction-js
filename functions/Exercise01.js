/*
Programming paradigms:
1. Imperative Programming
   an algorithm -> steps to get the solution: recipe
   implementing loops (for, while, do/while) and control structures -> if/else, switch
   problem -> divide the problem into sub problems
   we solve the sub problems in the form functions
   i. procedural programming
   ii. object-oriented programming

2. Descriptive Programming
   i. functional programming
 */
function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    }
    return false;
}

function odd(number) {
    return number % 2 === 1;
}
// function/call stack
function count_odds(numbers) {
    let odds = 0
    for (const number of numbers) {
        if (isOdd(number)) { // calling a function
            ++odds;
        }
    }
    return odds;
}

array = [4, 8, 15, 16, 23, 42] // lost
const odds = count_odds(array);
console.log(`The number of odds is ${odds}`);
