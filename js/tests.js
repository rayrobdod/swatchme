QUnit.test( "rgbToHex(0,0,0)", function( assert ) {
	assert.ok( '000000' == rgbToHex(0,0,0), hexVal );
});

QUnit.test( "rgbToHex(255,255,255)", function( assert ) {
	assert.ok( 'FFFFFF' == rgbToHex(255,255,255) );
});
