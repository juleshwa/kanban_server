'use strict'

const { List, Task } = require('../models')

class Authorization {
    static isAuthorized(req, res, next) {
        let ListId = +req.params.ListId;
        let TaskId = +req.params.TaskId;

        Task.findOne({
            where: {
                id: TaskId,
                ListId
            }
        }).then(task => {
            if (task) {
                if (task.UserId === req.loginId) {
                    next()
                } else {
                    next({
                        status: 401,
                        message: `You are not authorized`
                    })
                }
            } else {
                next({
                    status: 404,
                    message: `Task not found`
                })
            }
        }).catch(next);
    }

    static isListAuthorized(req, res, next) {
        let ListId = +req.params.ListId;

        List.findByPk(ListId).then(list => {
            if (list) {
                next()
            } else {
                next({
                    status: 404,
                    message: `List not found`
                })
            }
        }).catch(next)
    }
}

module.exports = { Authorization }