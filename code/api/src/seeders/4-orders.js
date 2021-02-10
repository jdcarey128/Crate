'user strict'; 

module.exports = {
  up: async (queryInterface) => {

    const users = await queryInterface.sequelize.query(
      `SELECT id from USERS;`
    );

    const crates = await queryInterface.sequelize.query(
      `SELECT id from CRATES;`
    );
    
    const userRows = users[0]
    const crateRows = crates[0]

    return await queryInterface.bulkInsert('orders', [
      {id: 1, deliveryDate: '3/12/21', deliveryStatus: 'scheduled', userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 2, deliveryDate: '2/12/21', deliveryStatus: 'delivered', userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 3, deliveryDate: '1/12/21', deliveryStatus: 'delivered', userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 4, deliveryDate: '12/12/20', deliveryStatus: 'delivered', userId: userRows[3].id, crateId: crateRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 5, deliveryDate: '3/12/21', deliveryStatus: 'scheduled', userId: userRows[2].id, crateId: crateRows[2].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 6, deliveryDate: '3/12/21', deliveryStatus: 'scheduled', userId: userRows[2].id, crateId: crateRows[1].id, createdAt: new Date(), updatedAt: new Date()},
      {id: 7, deliveryDate: '4/15/21', deliveryStatus: 'scheduled', userId: userRows[2].id, crateId: crateRows[2].id, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
