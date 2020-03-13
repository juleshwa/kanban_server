'use strict'

const { User } = require('../models');
const { comparePassword } = require('../helpers/generatePassword');
const { generateToken } = require('../helpers/generateToken');

class UserController {

    static register(req, res, next) {
        const payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
            where: {
                email: payload.email
            }
        }).then(result => {

            if (!result) {
                return User.create(payload);
            } else {
                next({
                    status: 400,
                    message: `The user is already registered`
                })
            }
        }).then(created => {
            if (created) {
                const user = {
                    id: created.id,
                    email: created.email
                }
                res.status(201).json(user);
            }

        }).catch(next);
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        User.findOne({
            where: {
                email
            }
        }).then(user => {
            if (user) {
                const isCorrect = comparePassword(password, user.password);
                if (isCorrect) {
                    const payload = {
                        id: user.id,
                        email: user.email
                    };
                    const token = generateToken(payload);
                    res.status(200).json({
                        access_token: token
                    })
                } else {
                    next({
                        status: 400,
                        message: `Wrong email/password`
                    })
                }
            } else {
                next({
                    status: 400,
                    message: `Wrong Email/Password`
                })
            }
        }).catch(next);
    }
}

module.exports = { UserController }