import EventsEmitter from "events";
const eventEmitter = new EventsEmitter();

eventEmitter.on("hello", ()=>{
    console.log("Hello World!");
})

eventEmitter.on("hello", ()=>{
    console.log("Hello Mars!");
})

eventEmitter.on("hello", ()=>{
    console.log("Hello jupyter!");
})

setInterval(() => {
    eventEmitter.emit("hello"); // trigger another function
}, 3_000)

setInterval(() => {
    eventEmitter.emit("hello"); // trigger another function
}, 5_000)
