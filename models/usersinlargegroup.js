'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersinlargegroup = sequelize.define('usersinlargegroup', {
    userid: DataTypes.INTEGER,
    largegroupid: DataTypes.INTEGER
  }, {});
  usersinlargegroup.associate = function(models) {
  };
  return usersinlargegroup;
};