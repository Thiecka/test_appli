const express = require('express');
const app = express();
const port = 8080;

const http = require('stream-http');
const stream = require('stream-browserify');
const url = require('url');
const util = require('util');




app.get('/', (req, res) => {
  res.send('Hello Word!')
});

app.listen(port, () => {
  console.log(`Application exemple est à l'écoute sur le port ${port}!`)
});