Celtra Data Engineer Assignment 
================

- Completed By: Prasad Bidwai
- Education: M.S.(Software Engineering), San Jose State University
- Experience: Software Engineering Intern, Shutterfly Inc.   

Usage: This project supports following HTTP request:
-------------
- | POST /api/analytics/jobs | Creates a new asynchronous job that will complete sometime in the future and returns the newly created job id. |
- | GET /api/analytics/jobs      | Lists all submitted job resources. |
- | GET /api/analytics/jobs/**jobId**      | Returns information like status, creation time, completion time of a specific job, and result set if the job has completed. |
 
 
Technologies: 
-------------
- Node.Js, MongoDB, Mongoose(NPM module for MongoDB), 

How to use:
-------------
1. NPM install
2. node app.js
3. server will start running on port 3000
4. base URL: http://localhost:3000/analytics/jobs

Application Insights:
-------------
1. This is a Node.Js based project
2. Database Used: MongoDB
3. NPM Modules used: Express, Mongoose, ejs



