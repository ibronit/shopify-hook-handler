'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSession = sequelize.define('UserSession', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  UserSession.associate = function(models) {
    UserSession.belongsTo(models.Shop)
  };
  return UserSession;
};