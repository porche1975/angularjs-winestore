
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
var db = require('./db')

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/api/wines', routes.wines);
app.get('/api/wines/:id', routes.wine);
app.delete('/api/wines/:id', routes.deleteWine);
app.put('/api/wines/:id', routes.updateWine);
app.post('/api/wines', routes.createWine);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

process.on('exit', function() {
    console.log('process exit')
    db.connection.disconnect(function() {
        console.log('mongo connection closed');
    });
});

