var http = require('http');

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('testing');
    res.end();
}).listen(process.env.PORT || 3000);
