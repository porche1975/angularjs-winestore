var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/winestore');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

exports.connection = db;
