'use strict';
module.exports = (sequelize, DataTypes) => {
  var CartLineItem = sequelize.define('CartLineItem', {
    quantity: DataTypes.INTEGER,
    variant_id: DataTypes.BIGINT,
    key: DataTypes.STRING,
    title: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    original_price: DataTypes.DECIMAL(10, 2),
    discounted_price: DataTypes.DECIMAL(10, 2),
    line_price: DataTypes.DECIMAL(10, 2),
    original_line_price: DataTypes.DECIMAL(10, 2),
    total_discount: DataTypes.DECIMAL(10, 2),
    sku: DataTypes.STRING,
    grams: DataTypes.INTEGER,
    vendor: DataTypes.STRING,
    taxable: DataTypes.BOOLEAN,
    product_id: DataTypes.BIGINT,
    gift_card: DataTypes.BOOLEAN,
    cartId: DataTypes.STRING(126),
  }, {});
  CartLineItem.associate = function (models) {
    CartLineItem.belongsTo(models.Cart);
  };
  return CartLineItem;
};