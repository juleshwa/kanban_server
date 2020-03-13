'use strict'

const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/user');
const { listRouter } = require('../router/list');

router.use('/list', listRouter);
router.post('/register', UserController.register);
router.post('/login', UserController.login);


module.exports = { router }