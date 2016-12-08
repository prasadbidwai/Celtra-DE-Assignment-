var mongoose = require('../lib/mongodb.js');

var jobSchema = new mongoose.Schema({
	  
	JOBID: Number, 
	metrics: { type : Array , "default" : [] },
	dimensions: { type : Array , "default" : [] },
	status: String, 
	creationTime: String,
	completionTime: String,
	resultSet: String
	},{
		versionKey: false
	});

module.exports = jobSchema;

