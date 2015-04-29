var testrunner = require("qunit");

testrunner.run({
	deps: "./node_modules/jquery/dist/cdn/jquery-1.11.1.min.js",
	code: "./js/app.js",
    tests: "./js/tests.js"
}, function(err, report) {
    console.dir(err);
    console.dir(report);
});

