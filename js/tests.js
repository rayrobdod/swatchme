var app = require("./app.js");

exports['rgbToHex(0,0,0)'] = function( assert ) {
	assert.equal( '000000', app.rgbToHex(0,0,0) );
	assert.done();
};

exports['rgbToHex(255,255,255)'] = function( assert ) {
	assert.equal( 'ffffff', app.rgbToHex(255,255,255) );
	assert.done();
};

exports['rgbToHSL(0,0,0)'] = function( assert ) {
	assert.deepEqual( [0,0,0], app.rgbToHSL(0,0,0) );
	assert.done();
};

exports['rgbToHSL(255,255,255)'] = function( assert ) {
	assert.deepEqual( [0,0,100], app.rgbToHSL(255,255,255) );
	assert.done();
};

exports['setRGB(0,0,0)'] = function (assert) {
	app.setRGB(12,34,56);
	assert.equal(12, app.rVal);	
	assert.equal(34, app.gVal);	
	assert.equal(56, app.bVal);	
	assert.done();
};
