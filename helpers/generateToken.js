'use strict'

const webtoken = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const generateToken = (payload) => {
    return webtoken.sign(payload, SECRET)
}

const verifyToken = (token) => {
    return webtoken.verify(token, SECRET)
}

module.exports = { generateToken, verifyToken }