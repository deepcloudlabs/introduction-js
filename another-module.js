export function generate(min=1,max=10){
    console.log("generate from another-module is called!");
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
