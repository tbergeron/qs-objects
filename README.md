qs-objects
=================

Easily manipulate these query strings!

Installation
------------
To install:

    npm install qs-objects
    
Usage
-----

Let's say we have this form:
    <form action="/" method="post">
        <input type="text" name="potato[size]" value="big" />
        <input type="text" name="potato[taste]" value="good" />
        <input type="text" name="author" value="mr big" />
        <input type="submit" />
    </form>
    
Here's an example of the request received by this form's POST:

    var qsObjects = require('qs-objects');
    
    // coming from the form
    var querystring = 'potato%5Bsize%5D=big&potato%5Btaste%5D=good&author=mr+big';
    
    var body = qsObjects(querystring);
    
    // outputs full converted objects
    console.log(body);
    
    // {
    //      potato: { 
    //                  size: 'big', 
    //                  taste: 'good' 
    //              }, 
    //      author: 'mr big' 
    //  }
    
    // so now you can do body.potato.taste