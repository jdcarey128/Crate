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
  if(auth.user && auth.user.id > 0) {
    return await models.Order.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user' },
        {model: models.Crate, as: 'crate' },
        {model: models.ProductDelivery, as: 'productDeliveries', 
          include: [{ model: models.Product, as: 'product' }]
        }, 
      ]
    })
  } else {
    throw new Error('Order does not exist')
  }
}

export async function update(parentValue, { id, deliveryDate }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    await models.Order.update(
      {
        deliveryDate
      },
      { where: { id } }
    )
    return await models.Order.findOne({ where: { id }})
  } else {
    throw new Error('Operation denied')
  }
}
