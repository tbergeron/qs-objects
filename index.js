var qsObjects = function (queryString) {
    var querystring = require('querystring');
    var parsedBody = querystring.parse(queryString);

    // creating body object
    var body = {};

    // loops on properties
    for (var key in parsedBody) {
        var value = parsedBody[key];

        // checks if one contains []
        if (key.indexOf('[') != -1) {
            var splitKey = key.split('[');
            // gets first part to make object name
            var objectName = splitKey[0];
            // gets last part for property name
            var propertyName = splitKey[1].replace(']', '');

            // if object doesn't exist yet, create it
            if (body[objectName] === undefined) {
                body[objectName] = {};
            }

            // assigning value to property
            body[objectName][propertyName] = value;
        } else {
            // if it's a simple value, assign it
            body[key] = value;
        }
    }

    return body;
}

module.export = qsObjects;