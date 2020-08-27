const provideMovie = require("../movie/provideMovie");


exports.searchMovie =
    async function (req, res) {
        try {

            return res.status(200).json(await provideMovie(req.query.name));
        } catch (err) {
            return res.status(500).json(err);
        }
    };
