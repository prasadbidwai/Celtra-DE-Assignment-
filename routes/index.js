
var dbConn = require('../model/dbConnection');
var mongoose = require('../lib/mongodb');

var jobSchema = require('../lib/jobs');
var JOB = mongoose.model('JOB', jobSchema);


exports.index = function(req, res){
  res.render('index');
};

exports.addJob = function(req, res)
{
		var newJob = new JOB({
		JOBID: req.body.JOBID, 
		metrics: req.body.metrics,
		dimensions: req.body.dimensions,
		status: req.body.status, 
		creationTime: req.body.creationTime,
		completionTime: req.body.completionTime,
		resultSet: req.body.resultSet
	})
	
	newJob.save(function(err, newJob) 
	{
		if (err) 
			return console.error(err);
		else
			res.status(201).json(newJob);
	});
};

exports.getAllSubmittedJobs = function(req,res)
{
	JOB.find(function(err, jobs) 
	{
	  if (err) 
		  return console.error(err);
	  else
		  res.status(200).json(jobs);
	});
};

exports.getSpecificJobDetails = function(req,res)
{
	JOB.findOne({JOBID:req.params.JOBID}, function(err, results) {
		if (err) 
			return console.error(err);
		else
			res.status(200).json(results);
	});
};



