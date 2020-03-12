'use strict'

const bcrypt = require('bcryptjs');

const generatePassword = (password) => {
    const salt = process.env.SALT;
    const genSalt = bcrypt.genSaltSync(+salt);
    return bcrypt.hashSync(password, genSalt);
}

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = { generatePassword, comparePassword }
