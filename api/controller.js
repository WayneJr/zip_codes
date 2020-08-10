'use strict';

var properties = require('../package.json')
var distance = require('../service/distance');
var info = 'This Api currently only accepts US zipcodes. It returns the distance between two zip codes. \
as and example use 84010 and 97229';
var direction = "change the '/about' to 'distance/10022/37188' to view it";
var funfact = "'10022' is the trump tower zipcode and '37188' is the white house zipcode"

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version,
           description: info,
           direction: direction,
           funfact: funfact
       }
       res.json(aboutInfo);
   },
   getDistance: function(req, res) {
           distance.find(req, res, function(err, dist) {
               if (err)
                   res.send(err);
               res.json(dist);
           });
       },
};

module.exports = controllers;
