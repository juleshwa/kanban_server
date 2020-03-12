'use strict'

const express = require('express');
const router = express.Router();
const { taskRouter } = require('../router/task');
const { Authentication } = require('../middlewares/Authentication');
const { Authorization } = require('../middlewares/Authorization');
const { ListController } = require('../controllers/list');

router.use(Authentication.isAuthentic);
router.use('/tasks', taskRouter);

module.exports = { listRouter: router }