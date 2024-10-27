names = ["fatma", "şule", "şima", "zehra", "ali", "nevin", "selma"]
console.log(names)
names.sort(function(name1,name2){
    return name1.localeCompare(name2,"tr-TR");
})
console.log(names)
