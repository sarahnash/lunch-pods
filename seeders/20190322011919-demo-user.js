'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        firstName: 'Chris',
        lastName: 'Oakman',
        email: '',
        profilelink: 'http://chrisoakman.com/',
        photolink: '../assets/chris-oakman-headshot-medium.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Eli',
        lastName: 'Badgio',
        email: '',
        profilelink: 'https://elibadgio.com/',
        photolink: '../assets/eli-2-web.jpg',
      },
      {
        firstName: 'Amanda',
        lastName: 'Shih',
        email: '',
        profilelink: 'https://github.com/pandafulmanda',
        photolink: '../assets/amanda-shih.jpeg',
      },
      {
        firstName: 'Eric',
        lastName: 'Ridenour',
        email: '',
        profilelink: 'https://www.linkedin.com/in/eric-ridenour-253a74109/',
        photolink: '../assets/eric.jpeg',
      },
      {
        firstName: 'Antoni',
        lastName: '',
        email: '',
        profilelink: '',
        photolink: '../assets/antoni.png',
      },
      {
        firstName: 'Karamo',
        lastName: '',
        email: '',
        profilelink: '',
        photolink: '../assets/karamo.png',
      },
      {
        firstName: 'Jonathan',
        lastName: '',
        email: '',
        profilelink: '',
        photolink: '../assets/jonathan.png',
      },
      {
        firstName: 'Tan',
        lastName: 'France',
        email: '',
        profilelink: '',
        photolink: '../assets/tan.png',
      },
      {
        firstName: 'Bobby',
        lastName: '',
        email: '',
        profilelink: '',
        photolink: '../assets/bobby.png',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
