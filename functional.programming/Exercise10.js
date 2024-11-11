const countries = require("../resources/countries.json");

// find number of cities in each continent
let cityCountsByContinent =
countries.map(country => [country.continent,country.cities.length])
         .reduce((countByContinent,pair)=>{
             const continent = pair[0];
             const numberOfCities = pair[1];
             if (!countByContinent[continent])
                countByContinent[continent]=0;
             countByContinent[continent]+=numberOfCities;
             return countByContinent;
         },{});
for ( let continent in cityCountsByContinent ){
    console.log(`${continent}: ${cityCountsByContinent[continent]}`)
}
