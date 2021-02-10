'use strict'

// Order
module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define('orders', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateID: {
      type: DataTypes.INTEGER
    },
    deliveryDate: {
      type: DataTypes.STRING
    },
    deliveryStatus: {
      type: DataTypes.STRING
    }
  })

  Order.associate = function(models) {
    Order.belongsTo(models.User)
    Order.belongsTo(models.Crate)
  }

  return Order
}
