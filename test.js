const express = require('express');
const app = express();
const port = 8080;




app.get('/', (req, res) => {
  res.send('Hello Word!')
});

app.listen(port, () => {
  console.log(`Application exemple est à l'écoute sur le port ${port}!`)
});