"use strict";

var chars = require('./chars')


/**
 * Publicly accessible methods.
 * @type object
 */
exports.flip = flip;
exports.teen = teen;
exports.upper = upper;
exports.random = random;
exports.reverse = reverse;
exports.toBinary = toBinary;
exports.fromBinary = fromBinary;

function random(str)
{
    var a = str.split(''),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
}

function upper(str)
{
    return str.toUpperCase();
}

function teen(str)
{
    return str.split('').map(function(v) {
        var chance = Math.round(Math.random());
        return v = chance ? v.toUpperCase() : v.toLowerCase();
    }).join('');
}

function reverse(str)
{
    var split = str.split('');    
    var rev = split.reverse();    
    var join = rev.join('');    
    return join;
}

function flip(str) {
    Object.keys(chars).forEach(function (key) {
    var value = chars[key]
        if(!chars[value]) {
            chars[value] = key
        }
    });
    var result = '', c = str.length, ch = '';
    for (; c >= 0; --c) {
        ch = str.charAt(c)
        result += chars[ch] || chars[ch.toLowerCase()] || ch
    }
    return result;
}

function toBinary(str)
{
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return str.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        return str + " "
    });
}

function fromBinary(str) {
    str = str.replace(/\s+/g, '');
    str = str.match(/.{1,8}/g).join(" ");

    var newBinary = str.split(" ");
    var binaryCode = [];

    for (var i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    
    return binaryCode.join("");
}
