'use strict';
module.exports = (sequelize, DataTypes) => {
  const largegroup = sequelize.define('largegroup', {
    eventdate: DataTypes.DATEONLY,
  }, {});
  largegroup.associate = function(models) {
    largegroup.belongsToMany(models.user, { through: 'usersinlargegroup', foreignKey: 'largegroupid' })
  };
  return largegroup;
};