let x = 25
let y = 49
// after swapping two variables: x and y -> x = 49, y = 25
console.log(`x=${x}, y=${y}`)
x = x ^ y
y = x ^ y
x = x ^ y
console.log(`x=${x}, y=${y}`)

