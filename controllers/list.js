'use strict'

const { List } = require('../models')

class ListController {

    static fetchAll(req, res, next) {
        List.findAll().then(lists => {
            res.status(200).json(lists)
        }).catch(next)

    }

    static addCategory(req, res, next) {
        let payload = {
            title: req.body.title
        };
        List.create(payload).then(list => {
            res.status(201).json(list)
        }).catc(next);
    }

    static fetchById(req, res, next) {
        let { id } = req.params;
        List.findByPk(id).then(list => {
            res.status(200).json(list);
        }).catch(next);
    }

    static renameCategory(req, res, next) {
        let { id } = req.params;
        let payload = {
            title: req.body.title
        }
        List.update(payload, {
            where: {
                id: +id
            },
            returning: true
        }).then(list => {
            res.status(201).json(list[1][0])
        }).catch(next)
    }

}

module.exports = { ListController }