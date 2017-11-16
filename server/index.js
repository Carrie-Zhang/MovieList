const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());