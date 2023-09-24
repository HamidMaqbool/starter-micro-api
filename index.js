var http = require('http');
var axios = require('axios');

http.createServer(async function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    var out = await axios.get('https://api3.binance.com/api/v3/myTrades');
    res.write(out);
    res.end();
}).listen(process.env.PORT || 3000);
