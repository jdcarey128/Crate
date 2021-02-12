// App Imports
import models from '../../setup/models'

//Get All orders
export async function getAll() {
  return await models.Order.findAll({
    include: [
    { model: models.User, as: 'user' }]
   })
}

// Get Orders by User
export async function getByUser(parentValue, {}, { auth }) {
  // if(auth.user && auth.user.id > 0) {
    return await models.Order.findAll({ raw: true,
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user' },
        {model: models.Crate, as: 'crate' },
      ]
    })
  // } else {
  //   throw new Error('Order does not exist')
  // }
}

// {model: models.Order, as: 'order', include: [
//   {model: productDelivery, as : 'productDelivery'}
// ]}
