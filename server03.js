import fetch from 'node-fetch';
console.log("Before calling the binance rest api...")
fetch("https://api.binance.com/api/v3/ticker?symbol=BTCUSDT")
    .then( res => res.json())
    .then( ticker => {
        console.log(ticker);
        fetch("https://api.binance.com/api/v3/ticker?symbol=SCRTRY")
            .then( res => res.json())
            .then( ticker => {
                console.log(ticker);
            })
    })
console.log("After calling the binance rest api...")
