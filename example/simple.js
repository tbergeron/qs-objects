var qsObjects = require(".."),
    http = require('http');

var querystring = 'potato%5Bsize%5D=big&potato%5Btaste%5D=good&author=mr+big';

console.log('query string:');
console.log(querystring);

var body = qsObjects(querystring);

console.log('converted to objects:');
console.log(body);