import fetch from 'node-fetch';
console.log("Before calling the binance rest api...")
fetch("https://api.binance.com/api/v3/ticker/price")
    .then( res => res.json())
    .then( tickers => {
        tickers.sort((t1,t2) => Number(t1.price) < Number(t2.price) ? 1 : -1);
        tickers.sort((t2,t1) => t1.symbol.localeCompare(t2.symbol));
        tickers.forEach( ticker => console.log(ticker));
        console.log(`there are ${tickers.length} markets in Binance`);
    })
console.log("After calling the binance rest api...")
