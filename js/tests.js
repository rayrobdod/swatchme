var app = require("./app.js");

exports['rgbToHex'] = function( assert ) {
	assert.expect(2);
	assert.equal( '000000', app.rgbToHex(0,0,0) );
	assert.equal( 'ffffff', app.rgbToHex(255,255,255) );
	assert.done();
};

exports['rgbToHSL'] = function( assert ) {
	assert.expect(2);
	assert.deepEqual( [0,0,0], app.rgbToHSL(0,0,0) );
	assert.deepEqual( [0,0,100], app.rgbToHSL(255,255,255) );
	assert.done();
};

exports['setRGB'] = function (assert) {
	assert.expect(4);
	app.setRGB(12,34,56);
	res = app.obtainGlobals();
	assert.equal(12, res.rVal);
	assert.equal(34, res.gVal);
	assert.equal(56, res.bVal);
	assert.equal("rgb(12, 34, 56)", res.rgbCSS);
	assert.done();
};

exports['clearSwatches'] = function (assert) {
	assert.expect(1);
	// mock for `clearSwatches`
	swatches = { html : function(a) { assert.equal('', a); } };
	app.clearSwatches();
	assert.done();
};
