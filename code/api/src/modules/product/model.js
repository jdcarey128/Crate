'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
  let Product = sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })

  Product.associate = function(models) {
    Product.hasMany(models.ProductDelivery, {as: 'product'})
  }

  return Product
}
