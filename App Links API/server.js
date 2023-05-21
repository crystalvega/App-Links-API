'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

fs.readFile('public/index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});