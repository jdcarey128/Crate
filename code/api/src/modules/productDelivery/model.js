'use strict'

// Product Delivery
module.exports = function(sequelize, DataTypes) {
  let ProductDelivery = sequelize.define('productDeliveries', {
    productId: {
      type: DataTypes.INTEGER
    },
    orderID: {
      type: DataTypes.INTEGER
    },
    returned: {
      type: DataTypes.BOOLEAN
    }
  })

  ProductDelivery.associate = function(models) {
    ProductDelivery.belongsTo(models.Order)
    ProductDelivery.belongsTo(models.Product)
  }

  return ProductDelivery
}
