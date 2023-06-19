const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
//const port = 8080;

const http = require('stream-http');
const stream = require('stream-browserify');
const url = require('url');
const util = require('util');

const env = process.env.NODE_ENV;
console.log('Environment:', env);

// You can also set a default value if the environment variable is not defined




app.get('/', (req, res) => {
  res.send('Hello Word!')
});

app.listen(port, () => {
  console.log(`Application exemple est à l'écoute sur le port ${port}!`)
});