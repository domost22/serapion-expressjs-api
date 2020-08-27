const fetch = require('node-fetch')
const TvMediaDatabaseModel = require("../database/mongoose/model/TvMediaDatabaseModel");

function MovieFetch(term) {
    return fetch(`http://api.tvmaze.com/search/shows?q=${term}`)
        .then(response => response.json())
        .then((movies) => {
                const array = [];
                movies.map((movie) => {
                    const model = TvMediaDatabaseModel({
                        name: movie.show.name,
                        id: movie.show.id,
                        year: movie.show.premiered,
                        rating: movie.show.rating.average,
                        description: movie.show.summary,
                    });
                    model.save();
                    array.push(model);
                });

                return array;
            }
        ).catch((error) => {
            console.error('Error:', error);
        });
}

module.exports = MovieFetch;
