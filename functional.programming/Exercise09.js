const movies = require("../resources/movies.json");

// find how many movies for each genre
let result =
movies.flatMap( movie => movie.genres)
    .map(genre => genre.name)
    .reduce((histogram,genreName)=>{
        if (!histogram.hasOwnProperty(genreName))
            histogram[genreName] = 0;
        histogram[genreName]++;
        return histogram;
    },{});

for(let genreName in result)
    console.log(`${genreName}: ${result[genreName]}`)
