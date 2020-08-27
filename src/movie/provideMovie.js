const TvMediaDatabase = require("../database/mongoose/model/TvMediaDatabaseModel");
const movieFetch = require("./movieFetch");

 function provideMovie(term) {
    console.log(term,'usa sam')
    return  TvMediaDatabase.find({"name": {$regex: term, $options: 'i'}}).then(async (result) => {
        console.log(result,'evo result')
        if (result.length > 0) {
            return result;
        } else {
            return await movieFetch(term);
        }
    }).catch((error) => {
        console.error('Error:', error);
        return [];
    });
}

module.exports = provideMovie;
