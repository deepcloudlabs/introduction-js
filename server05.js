import fetch from 'node-fetch';
console.log("Before calling the binance rest api...")
let ticker1 = await fetch("https://api.binance.com/api/v3/ticker?symbol=BTCUSDT")
let ticker2 = await fetch("https://api.binance.com/api/v3/ticker?symbol=SCRTRY")
console.log(ticker1.body);
console.log(ticker2.body);
console.log("After calling the binance rest api...")
