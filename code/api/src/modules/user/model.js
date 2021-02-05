'use strict'

// User

// TODO: add new attributes for user through addColumn migration
// description {
//  type: DataTypes.TEXT
//},
// image: {
//   type: DataTypes.TEXT
// },
// shippingAddress: {
//   type: DataTypes.TEXT
// }


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
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    //TODO: figure out if can define relationships through models 
    //        eg. 'a user has many crates through subscriptions'
    //TODO: define new relationship once crate deliveries exist 
    //User.hasMany(models.crateDeliveries)
  }

  return User
}
