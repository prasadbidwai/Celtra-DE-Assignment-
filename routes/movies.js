var express = require('express');
var router = express.Router();

var mongoose = require('../lib/mongodb');

var movieSchema = require('../lib/movies.js');
var Movie = mongoose.model('Movie', movieSchema);
	
module.exports = router;
