/** Sample pseudocode to make a PR via node JS **/
// Import the dependencies
let Octokit = require("@octokit/rest");
const branch = require('git-branch');

// Sync the branch with remote, creating if required
let baseBranch = branch.sync();

// Create a new OctoKit object
let client = new Octokit({
	version: "15.1.6"
});

/* Authenticate the octokit client, on basic authentication mode*/
client.authenticate({
username: "kidaneyosief",
password: "desta1986",
type: "basic"
}); 

// Make a pull request in the current Git repository
client.pullRequests.create({
owner: "KidaneYosief",
repo: "HelloWorld",
title: "This is a pull request",
body: "Yess this i a body",
base: "master",
head: baseBranch
}).catch(function(){
	console.log(client.authenticate);
});
