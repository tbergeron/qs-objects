var qsObjects = require(".."),
    http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.method == 'POST') {
        // Converting query string to objects
        var buffer = '';

        req.on('data', function(chunk) {
            buffer += chunk.toString();
        });

        req.on('end', function() {
            console.log('query string:');
            console.log(buffer);

            var body = qsObjects(buffer);

            console.log('converted to objects');
            console.log(body);

            var html = 'Go check out your console now ;-)';
        });
        
    } else {
        // html form
        var html = '<form action="/" method="post">'
                        + '<input type="text" name="potato[size]" placeholder="Enter potato size" />'
                        + '<input type="text" name="potato[taste]" placeholder="Enter potato taste" />'
                        + '<input type="text" name="author" placeholder="Enter your name" />'
                        + '<input type="submit" />'
                        + '</form>';
    }

    // outputs html
    res.write(html);
    res.end();
}).listen(1337);