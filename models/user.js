'use strict';
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
        // hash password
      }
    },
    sequelize,
    modelName: 'User'
  })

  return User;
};