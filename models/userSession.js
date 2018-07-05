'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSession = sequelize.define('UserSession', {    
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    cartId: DataTypes.INTEGER,
    shopId: DataTypes.INTEGER,
  }, {});
  UserSession.associate = function(models) {
    UserSession.belongsTo(models.Shop);
    UserSession.belongsTo(models.Cart);
  };
  return UserSession;
};