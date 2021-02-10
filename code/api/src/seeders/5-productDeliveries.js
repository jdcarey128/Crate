'user strict'; 

module.exports = {
  up: async (queryInterface) => {

    const orders = await queryInterface.sequelize.query(
      `SELECT id from ORDERS;`
    );

    const products = await queryInterface.sequelize.query(
      `SELECT id from PRODUCTS;`
    );
    
    const orderRows = orders[0]
    const productRows = products[0]

    return await queryInterface.bulkInsert('productDeliveries', [
      {id: 1, orderId: orderRows[0].id, productId: productRows[0].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 2, orderId: orderRows[0].id, productId: productRows[1].id, returned: true, createdAt: new Date(), updatedAt: new Date() },
      {id: 3, orderId: orderRows[0].id, productId: productRows[2].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 4, orderId: orderRows[1].id, productId: productRows[3].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 5, orderId: orderRows[1].id, productId: productRows[4].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 6, orderId: orderRows[1].id, productId: productRows[5].id, returned: true, createdAt: new Date(), updatedAt: new Date() },
      {id: 7, orderId: orderRows[2].id, productId: productRows[6].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 8, orderId: orderRows[2].id, productId: productRows[7].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 9, orderId: orderRows[3].id, productId: productRows[1].id, returned: true, createdAt: new Date(), updatedAt: new Date() },
      {id: 10, orderId: orderRows[3].id, productId: productRows[2].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 11, orderId: orderRows[4].id, productId: productRows[3].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 12, orderId: orderRows[4].id, productId: productRows[4].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 13, orderId: orderRows[5].id, productId: productRows[5].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 14, orderId: orderRows[5].id, productId: productRows[6].id, returned: false, createdAt: new Date(), updatedAt: new Date() },
      {id: 15, orderId: orderRows[6].id, productId: productRows[7].id, returned: true, createdAt: new Date(), updatedAt: new Date() },
      {id: 16, orderId: orderRows[6].id, productId: productRows[1].id, returned: true, createdAt: new Date(), updatedAt: new Date() }

    ], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('productDeliveries', null, {});
  }
};
