const TvMediaDatabase = require("../database/mongoose/model/TvMediaDatabaseModel");

exports.searchSingleMovie =
    function (req, res) {
        try {
            TvMediaDatabase.findOne({id: req.params.id}).then((result) => {

                return res.status(200).json(result);
            }).catch((error) => {
                console.error('Error:', error);
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
