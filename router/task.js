'use strict'

const express = require('express');
const router = express.Router();
const { Authentication } = require('../middlewares/Authentication');
const { Authorization } = require('../middlewares/Authorization');




module.exports = { taskRouter: router };