'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    profilelink: DataTypes.STRING,
    photolink: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.largegroup, { through: 'usersinlargegroup', foreignKey: 'userid' })
  };
  return user;
};