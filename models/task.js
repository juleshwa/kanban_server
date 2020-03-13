'use strict';

module.exports = (sequelize, DataTypes) => {

  class Task extends sequelize.Sequelize.Model {
    static associate(models) {
      // associations can be defined here
      Task.belongsTo(models.User);
      Task.belongsTo(models.List);
    }
  }

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ListId: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Task'
  })

  return Task;
};