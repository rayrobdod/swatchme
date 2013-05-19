// Math inspired primarily by EasyRGB: http://www.easyrgb.com/index.php?X=MATH
// & of course, Wikipedia.


//Globals

var hexVal, rVal, gVal, bVal, hVal, sVal, lVal, rgbVal, hslVal, rgbCSS, hslCSS;
var hexField = $('#hex'),
    rgbField = $('#rgb'),
    hslField = $('#hsl'),
    inputs = $('input'),
    swatches = $('#swatches');

// Convert RGB to HSL. HSL values returned in [0,1] range
function rgbToHSL(r,g,b) {
    r /= 255, g /= 255, b /= 255; //converts rgb values to decimal
    var max = Math.max(r,g,b), min = Math.min(r,g,b); //determines which value is max and which is min)
    var h, s;
    var l = (max + min) / 2; //Determining Lightness value

    if (max === min) { // If achromatic (no color)
        h = s = 0;
    } else {
        var delta = max - min;
        // if var l > .5, set s to delta / (2 - max - min), else set to delta / (max + min)
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch(max) {
            case r: h = (g-b) / delta + (g < b ? 6 : 0); break;
            case g: h = (b-r) / delta + 2; break;
            case b: h = (r-g) / delta + 4; break;
        }
        h /= 6;
    }

    //Convert values to appropriate format (degrees, percentage, percentage)


    h = Math.round(h * 360), s = Math.round(s * 100), l = Math.round(l * 100);

    setHSL(h,s,l);
}

function hslToRGB(h,s,l) {
    // setting hsl values to a [0,1] range decimal
    h /= 360;
    s /= 100;
    l /= 100;

    if (s === 0) {
        r = g = b = l * 255;
    } else {
        var2 = l < 0.5 ? l * (1 + s) : (l + s) - (s * l);


    var1 = 2 * l - var2;

    r = Math.round(255 * hueToRGB(var1, var2, h + (1/3)));
    g = Math.round(255 * hueToRGB(var1, var2, h));
    b = Math.round(255 * hueToRGB(var1, var2, h - (1/3)));
    }

    setRGB(r,g,b);
    return [r,g,b];
}


//Helper function to get the hue value
function hueToRGB(a, b, c) {
    if (c < 0) { c += 1;}
    if (c > 1) { c -= 1;}
    if ((6 * c) < 1) return a + (b - a) * 6 * c;
    if ((2 * c) < 1) return b;
    if ((3 * c) < 2) return a + (b - a) * ((2/3) - c) * 6;
    return a; //the decimal value representing r, g, or b
}


//hex to rgb
function hexToRGB(hex) {
    //check if hash exists
    if (hex.substring(0,1) === '#') {
        hex = hex.substring(1,7);
    }
    var r, g, b;
    r = parseInt(hex.substring(0,2),16);
    g = parseInt(hex.substring(2,4),16);
    b = parseInt(hex.substring(4,6),16);

    setRGB(r,g,b);
}


//rgb to hex
function rgbToHex(r,g,b) {
    r = r.toString(16);
    r = r.length < 2 ? '0'+r : r;
    g = g.toString(16);
    g = g.length < 2 ? '0'+g : g;
    b = b.toString(16);
    b = b.length < 2 ? '0'+b : b;

    hexVal = r + g +b;
    return hexVal;

}

//Handles setting of RGB-related variables
function setRGB(r,g,b) {
    rVal = r, gVal = g, bVal = b;
    rgbVal = r + ', ' + g + ', ' + b;
    rgbCSS = 'rgb('+r+', '+g+', '+b+')';
}

//TEMPORARY ------ Change these once regex is working to handle % signs
function setHSL(h,s,l) {
    hVal = h, sVal = s, lVal = l;
    hslVal = h + ', ' + s + ', ' + l;
    hslCSS = 'hsl('+h+', '+s+'%, '+l+'%)';
}

function constructColors(hex) {
    hexToRGB(hex);
    rgbToHSL(rVal, gVal, bVal);
}

function generateSwatches() {
    var swatchColor = [], swatchL = lVal, tempL = lVal;

    if (tempL >= 50) {
        for (tempL; tempL <= 100; tempL+=5) {
            console.log(tempL);
        }
    } else {
        for (tempL; tempL >= 0; tempL -= 5) {
            console.log(tempL);
            drawSwatch('hsl('+hVal+', '+sVal+'%, '+tempL+'%)');

        }
    }

    // swatches.each(function(i){
    //     swatchColor[i] = 'hsl('+hVal+', '+sVal+'%, '+swatchL+'%)';
    //     $(this).css('background-color', swatchColor[i]);
    //     swatchL += 5;
    // });
}

function drawSwatch(color) {
    swatchTmpl = $('<div class="swatch"><div class="label">'+color+'</div></div>').css('background-color', color);
    swatchTmpl.appendTo('#swatches');
}


$(document).ready(function() {
    hexField.on('change', function(){
        hexVal = hexField.val();
        constructColors(hexVal);
        rgbField.val(rgbVal);
        hslField.val(hslVal);
        generateSwatches();
    });
});