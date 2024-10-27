names = ["jack", "sun", "jin", "james", "ben", "kate"]
console.log(names.includes("sun"))
console.log(names.includes("angel"))
console.log(names.indexOf("james"))  // 3
console.log(names.indexOf("angel"))  // -1
if (names.indexOf("angel") < 0){
    // angel does not exist in the array
}

if (!names.includes("angel")){
    // angel does not exist in the array
}
