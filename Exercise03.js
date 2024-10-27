x = 1 / 0;
console.log(x)
x = 0 / 0;
console.log(x)
x = x * 0;
console.log(x)
console.log(x === x)
console.log(Number.isNaN(x))
x = 1 / 0; // Infinity
console.log(Number.isFinite(x))
