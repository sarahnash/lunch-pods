'use strict';
module.exports = (sequelize, DataTypes) => {
  const largegroup = sequelize.define('largegroup', {
    eventdate: DataTypes.DATEONLY,
    userid: DataTypes.INTEGER
  }, {});
  largegroup.associate = function(models) {
    // associations can be defined here
  };
  return largegroup;
};