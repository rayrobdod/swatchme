var testrunner = require("qunit");

testrunner.options.coverage = true;

testrunner.run({
	code: "./js/app.js",
	tests: "./js/tests.js"
}, function(err, report) {
	if (err) {
		console.log();
		console.error(err);
	}
	console.log();
	console.dir(report);
});

