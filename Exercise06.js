x = "jack bauer";
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(x.length);
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}
for (let j in x){
    console.log(x[j]);
}
for (let c of x){
    console.log(c);
}
x = "12345";
console.log(x[4]);
y = x[5] + 1
console.log(y);
