'use strict'

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
};

const express = require('express');
const app = express();
const PORT = process.env.PORT;
// router
// errorHandler


app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Connected at port: ${PORT}`)
})