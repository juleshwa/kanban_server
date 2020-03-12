'use strict';
module.exports = (sequelize, DataTypes) => {

  class List extends sequelize.Sequelize.Model {
    static associate(models) {
      // associations can be defined here
      List.hasMany(models.Task);
    }
  }

  List.init({
    title: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'List'
  })

  return List;
};