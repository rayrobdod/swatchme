var app = require("./app.js");

exports['rgbToHex(0,0,0)'] = function( assert ) {
	assert.equal( '000000', app.rgbToHex(0,0,0) );
	assert.done();
};

exports['rgbToHex(255,255,255)'] = function( assert ) {
	assert.equal( 'ffffff', app.rgbToHex(255,255,255) );
	assert.done();
};
