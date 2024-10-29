function fun(x, y, z) {
    x = x || 1;
    y = y || 2;
    z = z || 3;
    return x + y * z;
}
function gun(x=1, y=5, z=7) {
    return x + y * z;
}
let result = gun()
console.log(result)
result = gun(10)
console.log(result)
result = gun(10,20)
console.log(result)
result = gun(10,20,30)
console.log(result)
