'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The User',
        email: 'user@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fake Person',
        email: 'fake_person@crate.com',
        password: 'password',
        role: params.user.roles.user,
        description: 'I am a faker!',
        shippingAddress: '123 Fake St., Boulder, CO 80303',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Not a real human',
        email: 'im_not_real!@crate.com',
        password: 'password',
        role: params.user.roles.user,
        description: 'I am actually a robot designed to buy clothes.',
        shippingAddress: '123 Robot Ave., Denver, CO 80202',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
