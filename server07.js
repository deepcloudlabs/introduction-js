import fetch from 'node-fetch';
let symbols = await fetch("https://api.binance.com/api/v3/ticker/price")
    .then(res => res.json())
    .then(tickers => tickers.map(ticker => ticker.symbol))
let promises = symbols.splice(100).map( symbol => fetch(`https://api.binance.com/api/v3/ticker?symbol=${symbol}`))
Promise.all(promises)
        .then( responses => {
            responses.forEach(response => response.json().then(console.log))
        })
