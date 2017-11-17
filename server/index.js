const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('made to server req.body: ', req.body);
  res.end();
});

// app.get('/', (req, res) => {

// })

app.listen(8080, function() {
  console.log('listening on port 8080');
});