'use strict';

const express = require('express');
const randomNoGenerator = require('./src/index');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Lets generate a random number ' + randomNoGenerator(1,10));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
