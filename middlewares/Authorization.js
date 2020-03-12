'use strict'

const { List, Task } = require('../models')

class Authorization {
    static isAuthorized(req, res, next) {
        let ListId = +req.params.ListId;
        let TaskId = +req.params.TaskId;

        List.findByPk(ListId).then(list => {
            if (list) {
                Task.findAll({
                    where: {
                        ListId: list.id,
                        id: TaskId
                    }
                }).then(task => {
                    if (task) {
                        if (task.UserId === req.loginId) {
                            next();
                        } else {
                            next({
                                status: 401,
                                message: `You are not authorized`
                            })
                        }
                    } else {
                        next();
                    }
                }).catch(next);

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