var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var WineSchema = new Schema({
    name: { type: String, required: true, index: true },
    grapes: String,
    country: String,
    region: String,
    year: String,
    picture: String,
    description: String
});
var Wine = mongoose.model('Wine', WineSchema);

module.exports = Wine;