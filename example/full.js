var qsObjects = require(".."),
    http = require('http');

console.log(qsObjects);

http.createServer(function(req, res) {
    var html = '';

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

            console.log('converted to objects:');
            console.log(body);

            html = 'Go check out your console now ;-)';
        });

    } else {
        // html form
        html = '<form action="/" method="post">'
                + '<input type="text" name="potato[size]" value="big" />'
                + '<input type="text" name="potato[taste]" value="good" />'
                + '<input type="text" name="author" value="mr big" />'
                + '<input type="submit" />'
                + '</form>';
    }

    // outputs html
    console.log(html);
    res.write(html);
    res.end();
}).listen(1337);