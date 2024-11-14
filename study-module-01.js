import {Circle, generate as gen} from "./random-module.js";
import {generate} from "./another-module.js";

let result1 = gen(10,100);
let result2 = generate(10,100);
console.log(result1)
console.log(result2)

let circle1 = new Circle();
console.log(circle1)
