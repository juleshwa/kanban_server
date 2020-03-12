'use strict';

const list = {
  title: 'Backlog',
  createdAt: new Date(),
  updatedAt: new Date()
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lists', [list], {});

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lists', null, {});
  }
};
