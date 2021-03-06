'use strict';

const task = {
  title: 'Learning Javascript',
  description: 'Learning Vanilla JS fundamental',
  createdAt: new Date(),
  updatedAt: new Date(),
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [task], {});
  },

  down: (queryInterface, Sequelize) => {
    Example:
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
