'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CartLineItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartId: {
        type: Sequelize.STRING(126),
        foreignKey: true,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'Carts',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      variant_id: {
        type: Sequelize.BIGINT
      },
      key: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      original_price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      discounted_price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      line_price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      original_line_price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      total_discount: {
        type: Sequelize.DECIMAL(10, 2)
      },
      sku: {
        type: Sequelize.STRING
      },
      grams: {
        type: Sequelize.INTEGER
      },
      vendor: {
        type: Sequelize.STRING
      },
      taxable: {
        type: Sequelize.BOOLEAN
      },
      product_id: {
        type: Sequelize.BIGINT
      },
      gift_card: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CartLineItems');
  }
};