'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.TEXT
    },
    shippingAddress: {
      type: DataTypes.STRING
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    User.hasMany(models.Order)
  }

  return User
}
