const mongoose = require("mongoose");


const tvMediaDatabaseModelSchema = new mongoose.Schema([{
    id: {type: Number},
    name: {type:String},
    year: {type:Date},
    description: {type:String},
    rating:{type:Number},
}], {timestamps:true});


const TvMediaDatabase = mongoose.model('tvMediaDatabase', tvMediaDatabaseModelSchema,'tvMediaDatabases');

module.exports = TvMediaDatabase;

