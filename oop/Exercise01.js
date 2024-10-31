// global variable
const numbers = [4,8,15,16,23,42]
const pi = 3.1415;

function fun() {
    // local/temporary/stack/automatic variable
    let x = 42;
    for (let number of numbers) {}
    numbers[0]++;
    return x;
}

let y = fun()
