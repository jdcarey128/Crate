// App Imports
import models from '../../setup/models'

// Get Orders by User
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Order.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Crate, as: 'crate'},
      ]
    })
  } else {
    throw new Error('Order does not exist')
  }
}
