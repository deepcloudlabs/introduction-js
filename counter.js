// event-driven programming
// event -> register a function
//Model
let counter = 0;
window.onload = function () {
    console.log("Hello Mars!");
    const spanElement = document.querySelector("#counter");
    setInterval(function () {
        // update model
        counter = counter + 1;
        spanElement.innerHTML = counter;
    }, 1000)
}
