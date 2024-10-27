// logical and : &&
/*  Truth Table for Logical And
    false && false --> false
    false && true --> false
    true && false --> false
    true && true --> false
* */
x = 2
y = 4
console.log( x === 2 && y === 3 ) // false
console.log( x === 2 && y === 4 ) // true
// logical or
/*  Truth Table for Logical Or
    false || false --> false
    false || true --> true
    true || false --> true
    true || true --> true
* */
x = 2
y = 4
console.log( x === 2 || y === 3 ) // true
console.log( x === 4 || y === 2 ) // false

// logical xor (eXclusive or)
/*  Truth Table for eXclusive Or
    false ^^ false --> false
    false ^^ true --> true
    true  ^^ false --> true
    true  ^^ true --> false
* */
x = 2
y = 4
console.log( x === 2 ^ y === 3 ) // true -> 1
console.log( x === 4 ^ y === 2 ) // false -> 0
