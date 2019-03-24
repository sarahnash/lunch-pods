'use strict';
module.exports = (sequelize, DataTypes) => {
  const smallgroup = sequelize.define('smallgroup', {
    largegroupid: DataTypes.INTEGER,
  }, {});
  smallgroup.associate = function(models) {
    // associations can be defined here
  };
  return smallgroup;
};