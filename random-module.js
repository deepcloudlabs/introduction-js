export function generate(min = 1, max = 10) {
    console.log("generate from random-module is called!");
    return Math.floor(get_random_integer(max - min)) + min;
}

function get_random_integer(max){
    return Math.floor(Math.random() * max + 1);
}

export class Circle {
}

export const pi = 3.1415;
export const is_even = number => number % 2 === 0;
export let numbers = [4, 8, 15, 16, 23, 42];
