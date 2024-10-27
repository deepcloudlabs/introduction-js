// Model
let attempts = 10;
let secret = Math.floor(Math.random() * 100) + 1;
let guessElement = document.getElementById("guess");
let feedbackElement = document.getElementById("feedbackValue");
let moves = []

function move() {
    // DOM API: document.getElementById("moves")
/*    document.querySelector("#moves")
    document.querySelector(".striped_even");
    document.querySelector("tbody > tr");
    document.querySelector("tbody#moves > tr");
    document.querySelector("tbody.zebraHover > tr");*/
    // emptyElement(document.querySelector("tbody#moves"));
    $("tbody#moves").empty();
    if (attempts === 0) {
        // GAME IS OVER
        feedbackElement.style.color = "red";
        feedbackElement.innerHTML = "GAME OVER!" + " The correct number was " + secret + ".";
    } else {
        attempts--;
        const guess = Number(guessElement.value);
        if (Number.isNaN(guess)) {
            feedbackElement.style.color = "red";
            feedbackElement.innerHTML = "Please enter a valid number between 1 and 100.";
        } else if (guess === secret) {
            feedbackElement.style.color = "green";
            feedbackElement.innerHTML = "You got it!";
            attempts = 10;
            secret = Math.floor(Math.random() * 100) + 1
            moves = []
        } else if (guess < secret) {
            feedbackElement.style.color = "red";
            let message = "Too low! Try again. " + attempts + " attempts remaining.";
            feedbackElement.innerHTML = message;
            moves.push([guess, "Pick higher."]);
        } else {
            feedbackElement.style.color = "red";
            let message = "Too high! Try again. " + attempts + " attempts remaining.";
            feedbackElement.innerHTML = message;
            moves.push([guess, "Pick smaller."]);
        }
    }
    for (let move of moves) {
        let player_guess = move[0];
        let player_message = move[1];
        // DOM Manipulation
        $("#moves").append(`<tr><td>${player_guess}</td><td>${player_message}</td></tr>`)
    }
}

