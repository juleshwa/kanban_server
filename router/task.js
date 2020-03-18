'use strict'

const express = require('express');
const router = express.Router({ mergeParams: true });
const { Authentication } = require('../middlewares/Authentication');
const { Authorization } = require('../middlewares/Authorization');
const { TaskController } = require('../controllers/task');

router.use(Authentication.isAuthentic);

router.get('/', TaskController.fetchAll);
router.post('/addTask', TaskController.createTask);
router.get('/:TaskId', TaskController.fetchTaskById);

router.put('/:TaskId', Authorization.isListAuthorized, Authorization.isAuthorized, TaskController.updateTask);
router.delete('/:TaskId', Authorization.isListAuthorized, Authorization.isAuthorized, TaskController.deleteTask);


module.exports = { taskRouter: router };