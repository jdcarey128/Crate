module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'description',
         Sequelize.TEXT
       ),
      queryInterface.addColumn(
        'users',
        'image',
        Sequelize.TEXT
      ),
      queryInterface.addColumn(
        'users',
        'shippingAddress',
        Sequelize.STRING
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
