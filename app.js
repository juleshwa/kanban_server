'use strict'

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
};

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const { router } = require('./router')
// errorHandler

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', router);
// placing error handler


app.listen(PORT, () => {
    console.log(`Connected at port: ${PORT}`)
})