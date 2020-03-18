'use strict'

const { Task, List } = require('../models')

class TaskController {
    static fetchAll(req, res, next) {
        const UserId = req.loginId;
        const { ListId } = req.params;

        Task.findAll({
            where: {
                ListId: +ListId,
                UserId
            }
        }).then(tasks => {
            res.status(200).json(tasks)
        }).catch(next);
    }

    static fetchTaskById(req, res, next) {
        const UserId = req.loginId;
        const { ListId, TaskId } = req.params;

        Task.findOne({
            where: {
                id: +TaskId,
                ListId: +ListId,
                UserId
            }
        }).then(task => {
            res.status(200).json(task)
        }).catch(next)

    }

    static createTask(req, res, next) {
        const UserId = req.loginId;
        const ListId = +req.params.ListId
        const payload = {
            title: req.body.title,
            description: req.body.description,
            ListId,
            UserId
        }

        Task.create(payload).then(task => {
            res.status(201).json(task)
        }).catch(next)

    }

    static updateTask(req, res, next) {
        const UserId = req.loginId;
        const { TaskId, ListId } = req.params
        const payload = {
            title: req.body.title,
            description: req.body.description,
        }

        Task.update(payload, {
            where: {
                id: +TaskId,
                ListId: +ListId,
                UserId
            },
            returning: true
        }).then(task => {
            res.status(201).json(task[1][0])
        }).catch(next)

    }

    static deleteTask(req, res, next) {
        const { TaskId } = req.params
        const deletedId = +TaskId

        Task.findByPk(deletedId).then(result => {
            return Task.destroy({
                where: {
                    id: result.id
                }
            });
        }).then(deleted => {
            if (!deleted) {
                next({
                    status: 404,
                    message: `Not Found`
                });
            } else {
                res.status(201).json({ message: `Success Delete Task` })
            }
        }).catch(next);

    }
}

module.exports = { TaskController }