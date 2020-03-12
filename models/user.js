'use strict';

const { generatePassword } = require('../helpers/generatePassword')

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Task);
    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4],
          msg: `Password is minimum 4 characters`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function (user, option) {
        user.password = generatePassword(user.password)
      }
    },
    sequelize,
    modelName: 'User'
  })

  return User;
};