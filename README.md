qs-objects
=================

Easily manipulate these query strings!

Installation
------------
To install:

    npm install qs-objects
    
Usage
-----

    var qsObjects = require('qs-objects');
    
    var querystring = 'potato%5Bsize%5D=big&potato%5Btaste%5D=good&author=mr+big';
    
    var body = qsObjects(querystring);
    
    // outputs full converted objects
    console.log(body);
    
    // so now you can do body.potato.taste