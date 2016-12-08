
var mongoose = require('mongoose');
var dbConn = mongoose.connect('mongodb://localhost/myapp');

module.exports = dbConn;