'use strict';
module.exports = (sequelize, DataTypes) => {
  const smallgroup = sequelize.define('smallgroup', {
    eventdate: DataTypes.DATEONLY,
    userids: DataTypes.STRING
  }, {});
  smallgroup.associate = function(models) {
    // associations can be defined here
  };
  return smallgroup;
};