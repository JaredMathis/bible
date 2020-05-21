
const fs = require('fs');
var path = require('path');

var ncp = require('ncp').ncp;
 
ncp.limit = 16;
 
let source = './web';
let destination = './../JaredMathis.github.io';

ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 }
});