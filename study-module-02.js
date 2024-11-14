import {validate_iban} from "./validation-module.js";

let ibans = [
    "TR740006282973364859697859",
    "DE68500105178297336485",
    "ES2820958297603648596978",
    "BE91798829733676",
    "ES1",
    "TR2",
    "DE3",
    "BE4"
]

for (let iban of ibans){
    if (validate_iban(iban)){
        console.log(`${iban} is valid`);
    } else {
        console.log(`${iban} is invalid`);
    }
}

let all_are_valid = ibans.every(validate_iban)
console.log(all_are_valid)
let any_valid = ibans.some(validate_iban)
console.log(any_valid)
