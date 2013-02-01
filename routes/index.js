
/*
 * GET home page.
 */

var Wine = require('../models/wine')
var mongoose = require('mongoose');

exports.wines = function(req, res) {
    Wine.find(function(err, wines) {
        if (err) throw err;
        res.json(wines)
    });
};

exports.wine = function(req, res) {
    console.log('find wine id ' + req.params.id)
    Wine.findById( req.params.id, function(err, wine) {
        if (err) throw err
        res.json(wine)
    });
};

exports.deleteWine = function(req, res) {
    console.log('delete wine id ' + req.params.id)
    Wine.findByIdAndRemove( req.params.id, function(err, wine) {
        if (err) throw err
        res.json(wine)
    })
};

exports.updateWine = function(req, res) {
    console.log('update wine id ' + req.params.id + ' with ' + JSON.stringify(req.body))
    delete req.body._id
    Wine.findByIdAndUpdate( req.params.id, req.body, function(err, wine) {
        if (err) throw err
        res.json(wine)
    })
};

exports.createWine = function(req, res) {

    delete req.body._id
    console.log('create new wine ' + JSON.stringify(req.body))

    var wineModel = new Wine(req.body)
    wineModel.save(function(err, wine) {
       console.log('save callback. wine = ' + wine);
       if (err) throw err;
       res.json(wine);
    });
}