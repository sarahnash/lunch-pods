'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('usersinlargegroups', [{
        userid: 2,
        largegroupid: 23,
      },
      {
        userid: 3,
        largegroupid: 23,
      },
      {
        userid: 4,
        largegroupid: 23,
      },
      {
        userid: 5,
        largegroupid: 23,
      },
      {
        userid: 6,
        largegroupid: 23,
      },
      {
        userid: 7,
        largegroupid: 23,
      },
      {
        userid: 8,
        largegroupid: 23,
      },
      {
        userid: 9,
        largegroupid: 23,
      },
      {
        userid: 10,
        largegroupid: 23,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usersinlargegroups', null, {});
  }
};
