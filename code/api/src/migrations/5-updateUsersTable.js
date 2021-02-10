module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'description',
        { type: Sequelize.TEXT }
       ),
      queryInterface.addColumn(
        'users',
        'image',
        { type: Sequelize.TEXT,
        defaultValue: '/images/stock/default_profile.jpg' }
      ),
      queryInterface.addColumn(
        'users',
        'shippingAddress',
        { type: Sequelize.STRING }
      )
    ]);
  },
  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'users',
        'description',
         Sequelize.TEXT
       ),
      queryInterface.removeColumn(
        'users',
        'image',
        Sequelize.TEXT
      ),
      queryInterface.removeColumn(
        'users',
        'shippingAddress',
        Sequelize.STRING
      )
    ]);
  }
};
