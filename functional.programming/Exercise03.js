let circle = { // DTO: Data Transfer Object
    x: 0,
    y: 0,
    radius: 100,
    color: "red",
    area: function (){
        return Math.PI * this.radius ** 2;
    }
};
console.log(typeof circle);
let json = JSON.stringify(circle);
console.log(typeof json);
console.log(circle);
console.log(json);
let cloneOfCircle = JSON.parse(json);
console.log(typeof cloneOfCircle);
console.log(cloneOfCircle);
