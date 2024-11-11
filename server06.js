import fetch from 'node-fetch';
console.log("Before calling the binance rest api...")
Promise.all([
    fetch("https://api.binance.com/api/v3/ticker?symbol=BTCUSDT"),
    fetch("https://api.binance.com/api/v3/ticker?symbol=SCRTRY"),
    fetch("https://api.binance.com/api/v3/ticker?symbol=SCRTRY"),
    fetch("https://api.binance.com/api/v3/ticker?symbol=SCRTRY")
    ])
    .then( responses => {
        responses.forEach(response => response.json().then(console.log))
    })
console.log("After calling the binance rest api...")
