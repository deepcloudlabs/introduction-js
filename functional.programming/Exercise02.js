const countries = require("../resources/countries.json");
// find distinct continents
countries.map(country => country.continent)
         .reduce((continents,continent) => {
             if (!continents.includes(continent)) 
                continents.push(continent);
             return continents;
         },[])
         .sort()
         .forEach(continent => console.log(continent))
