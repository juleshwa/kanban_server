'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Tasks', ['ListId'], {
      type: 'foreign key',
      name: 'ListId',
      references: {
        table: 'Lists',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Tasks', 'ListId');
  }
};
