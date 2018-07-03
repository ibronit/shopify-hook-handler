'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shop = sequelize.define('Shop', {
    domain: DataTypes.STRING,
    currency: DataTypes.STRING    
  }, {});
  Shop.associate = function(models) {
    Shop.hasMany(models.UserSession);
  };  

  return Shop;
};