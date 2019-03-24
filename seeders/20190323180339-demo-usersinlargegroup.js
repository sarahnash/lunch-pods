'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('usersinlargegroups', [{
        userid: 2,
        largegroupid: 1,
      },
      {
        userid: 3,
        largegroupid: 1,
      },
      {
        userid: 4,
        largegroupid: 1,
      },
      {
        userid: 5,
        largegroupid: 1,
      },
      {
        userid: 6,
        largegroupid: 1,
      },
      {
        userid: 7,
        largegroupid: 1,
      },
      {
        userid: 8,
        largegroupid: 1,
      },
      {
        userid: 9,
        largegroupid: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usersinlargegroups', null, {});
  }
};
