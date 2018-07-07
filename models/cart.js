'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cart = sequelize.define('Cart', {
    "token": DataTypes.STRING,    
  }, {});
  Cart.associate = function(models) {
    Cart.hasMany(models.UserSession);
    Cart.hasMany(models.CartLineItem, {as: 'line_items'});
  };

  return Cart;
};