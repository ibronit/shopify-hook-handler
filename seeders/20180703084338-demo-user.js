'use strict';

const config = require('dotenv-extended').load();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shops', [{
      domain: config.SHOP_DOMAIN,
      currency: config.SHOP_DEFAULT_CURRENCY,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    const shop = await queryInterface.sequelize.query(
      `SELECT id from Shops;`
    );

    return await queryInterface.bulkInsert('UserSessions', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      shopId: shop[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserSessions', null, {});
    await queryInterface.bulkDelete('Shops', null, {});
  }
};
