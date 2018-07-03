'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserSessions', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserSessions', null, {});
  }
};
