module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
// -------------------------------------------------------
      // TODO: Need to edit user table by adding the following columns:

      // image: {
      //   type: Sequelize.??
      // },
      // description: {
      //   type: Sequelize.TEXT
      // },
      // shippingAddress: {
      //   type: Sequelize.TEXT
      // },

      // how to add columns to this table???
// ---------------------------------------------------------

      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
