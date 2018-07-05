'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cart = sequelize.define('Cart', {

  }, {});
  Cart.associate = function(models) {
    Cart.hasMany(models.UserSession);
  };

  return Cart;
};