name1 = "jack"
name2 = "kate"
// tells partial order
// "jack" < "kate" -> -1
// "kate" > "jack" -> +1
// "kate" == "kate" -> 0
console.log(name1.localeCompare(name2))
