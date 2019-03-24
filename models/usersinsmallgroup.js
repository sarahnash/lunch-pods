'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersinsmallgroup = sequelize.define('usersinsmallgroup', {
    smallgroupid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {});
  usersinsmallgroup.associate = function(models) {
    // associations can be defined here
  };
  return usersinsmallgroup;
};