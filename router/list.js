'use strict'

const express = require('express');
const router = express.Router({ mergeParams: true });
const { taskRouter } = require('../router/task');
const { Authentication } = require('../middlewares/Authentication');
const { Authorization } = require('../middlewares/Authorization');
const { ListController } = require('../controllers/list');

router.use(Authentication.isAuthentic);


router.use('/:ListId/tasks', taskRouter);
router.get('/', ListController.fetchAll);

router.get('/add', ListController.addCategory);
router.get('/:ListId', ListController.fetchById)

router.put('/:ListId/rename', Authorization.isListAuthorized, ListController.renameCategory);

module.exports = { listRouter: router }