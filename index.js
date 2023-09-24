var http = require('http');
var axios = require('axios');

// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

// http.createServer(async function (req, res) {
//     console.log(`Just got a request at ${req.url}!`)
//     var out = await axios.get('https://api3.binance.com/api/v3/ticker/price?symbol=BTCUSDT') .then((response) => JSON.stringify(response.data))
//     .catch((error) => {
//     return JSON.stringify(error);
//     });

//     res.write(out);
//     res.end();
// }).listen(process.env.PORT || 3000);


const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {

  res.send({ 'out': 'get' })
});

app.post('/', async (req, res) => {
  const { url, type, key, data } = req.body;
 

  const config = {
    headers:{
      'X-MBX-APIKEY': key
    }
  };

  var out;
  if (type == 'post') {
    // out = await axios.post(url, data, config).then((response) =>
    // response.data)
    // .catch((error) => {
    //   return error;
    // });

  } else {
    out = await axios.get(url).then((response) =>
      response.data)
      .catch((error) => {
        return error;
      });
  }
  res.send(out);
});

app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});
