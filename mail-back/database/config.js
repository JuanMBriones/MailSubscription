const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.URLDB)
    .then(() => {
      console.log('DB is connected');
    },
    ).catch((err) => {
      console.log(err);
    },
    );

module.exports = app;
