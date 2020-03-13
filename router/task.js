'use strict'

const express = require('express');
const router = express.Router();
const { Authentication } = require('../middlewares/Authentication');
const { Authorization } = require('../middlewares/Authorization');
const { TaskController } = require('../controllers/task');

router.use(Authentication.isAuthentic);

router.get('/', TaskController.fetchAll);
router.post('/add', TaskController.createTask);

router.put('/:TaskId', Authorization.isAuthorized, TaskController.updateTask);
router.delete('/:TaskId', Authorization.isAuthorized, TaskController.deleteTask);


module.exports = { taskRouter: router };