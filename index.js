var http = require('http');
var os = require('os');

var networkInterfaces = os.networkInterfaces();
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write(networkInterfaces);
    res.end();
}).listen(process.env.PORT || 3000);
