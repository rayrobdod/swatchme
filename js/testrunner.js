var testrunner = require("qunit");

testrunner.run({
	code: "./js/app.js",
	tests: "./js/tests.js"
}, function(err, report) {
	console.dir(err);
	console.dir(report);
});

