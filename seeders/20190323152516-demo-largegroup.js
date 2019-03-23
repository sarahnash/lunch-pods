'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('largegroups', [{
        eventdate: '2019-05-01',
        userid: 2,
      },
      {
        eventdate: '2019-05-01',
        userid: 3,
      },
      {
        eventdate: '2019-05-01',
        userid: 4,
      },
      {
        eventdate: '2019-05-01',
        userid: 5,
      },
      {
        eventdate: '2019-05-01',
        userid: 6,
      },
      {
        eventdate: '2019-05-01',
        userid: 7,
      },
      {
        eventdate: '2019-05-01',
        userid: 8,
      },
      {
        eventdate: '2019-05-01',
        userid: 9,
      },
      {
        eventdate: '2019-05-01',
        userid: 10,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('largegroups', null, {});
  }
};
