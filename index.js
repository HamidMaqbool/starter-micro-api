var http = require('http');
var axios = require('axios');

// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

http.createServer(async function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    var out = await axios.get('https://api3.binance.com/api/v3/ticker/price?symbol=BTCUSDT') .then((response) => response.data)
    .catch((error) => {
    return JSON.stringify(error);
    });

    res.write(out);
    res.end();
}).listen(process.env.PORT || 3000);
