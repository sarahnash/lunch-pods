'use strict';
module.exports = (sequelize, DataTypes) => {
  const largegroup = sequelize.define('largegroup', {
    eventdate: DataTypes.DATEONLY,
  }, {});
  largegroup.associate = function(models) {
    // associations can be defined here
  };
  return largegroup;
};