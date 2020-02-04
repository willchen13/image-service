const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan');
const imageModal = require('../database/db')
const db = require('../database/db.js')
const port = 3000;
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());



app.get('/images/', (req, res) => {
  db.find()
  .then(images => {
    res.json({
      data: images
    })
  })
})


app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });